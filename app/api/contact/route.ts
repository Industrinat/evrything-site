import { NextRequest, NextResponse } from 'next/server';

// ── Rate limiting (in-memory) ──
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  if (!limit || now > limit.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }); // 1h window
    return true;
  }

  if (limit.count >= 5) return false;
  limit.count++;
  return true;
}

// ── Spam content detection ──
function isSuspiciousContent(text: string): boolean {
  const patterns = [
    /viagra|cialis|casino|crypto|bitcoin/i,
    /\b(buy|sell)\s+(cheap|now)\b/i,
    /click\s+here/i,
    /(http|https):\/\/.*\.(ru|cn|tk|ml|xyz)/i,
    /(\w)\1{10,}/, // repeated characters
    /SEO\s+(service|expert|agency)/i,
    /web\s*design\s*(service|offer)/i,
  ];
  return patterns.some((p) => p.test(text));
}

// ── Microsoft Graph token ──
async function getAccessToken() {
  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
      }),
    }
  );
  const data = await res.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    console.log('📧 Kontaktformulär från IP:', ip);

    // 1. Rate limiting
    if (!checkRateLimit(ip)) {
      console.log('⚠️ Rate limit för IP:', ip);
      return NextResponse.json(
        { error: 'För många förfrågningar. Försök igen senare.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, phone, email, transportType, from, to, message, website, startTime } = body;

    // 2. Honeypot check
    if (website) {
      console.log('🚫 Honeypot! Bot:', { name, email });
      return NextResponse.json({ success: true, message: 'Tack! Vi kontaktar dig snart.' });
    }

    // 3. Time-based check (must be >3 seconds)
    if (startTime && Date.now() - startTime < 3000) {
      console.log('🚫 För snabbt! Bot:', Date.now() - startTime, 'ms');
      return NextResponse.json({ success: true, message: 'Tack! Vi kontaktar dig snart.' });
    }

    // 4. Required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Fyll i alla obligatoriska fält.' }, { status: 400 });
    }

    // 5. Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ogiltig e-postadress.' }, { status: 400 });
    }

    // 6. Length checks
    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json({ error: 'Fälten innehåller för mycket text.' }, { status: 400 });
    }

    // 7. Content analysis
    const allText = `${name} ${company || ''} ${email} ${message}`;
    if (isSuspiciousContent(allText)) {
      console.log('🚫 Spam-innehåll:', { name, email });
      return NextResponse.json({ success: true, message: 'Tack! Vi kontaktar dig snart.' });
    }

    // 8. User-Agent check
    const ua = request.headers.get('user-agent') || '';
    if (!ua || ua.length < 10) {
      console.log('🚫 Saknar User-Agent');
      return NextResponse.json({ success: true, message: 'Tack! Vi kontaktar dig snart.' });
    }

    // ── All checks passed — send email ──
    console.log('✅ Godkänt meddelande från:', { name, email, transportType });

    const token = await getAccessToken();

    const emailBody = [
      `Namn: ${name}`,
      company ? `Företag: ${company}` : null,
      `Telefon: ${phone}`,
      `E-post: ${email}`,
      transportType ? `Transporttyp: ${transportType}` : null,
      from ? `Från: ${from}` : null,
      to ? `Till: ${to}` : null,
      ``,
      `Meddelande:`,
      message,
      ``,
      `---`,
      `IP: ${ip}`,
      `Tid: ${new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}`,
    ]
      .filter(Boolean)
      .join('\n');

    const emailResponse = await fetch(
      'https://graph.microsoft.com/v1.0/users/info@flowen.eu/sendMail',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: `🚚 Prisförfrågan: ${name}${company ? ` – ${company}` : ''} (${transportType || 'Transport'})`,
            body: { contentType: 'Text', content: emailBody },
            toRecipients: [{ emailAddress: { address: 'boka@evrything.se' } }],
            ccRecipients: [{ emailAddress: { address: 'daniel.olsson@industrinat.se' } }],
            replyTo: [{ emailAddress: { address: email, name: name } }],
          },
        }),
      }
    );

    if (!emailResponse.ok) {
      const err = await emailResponse.text();
      console.error('Graph mail error:', err);
      throw new Error('Failed to send email');
    }

    console.log('📧 Mail skickat till boka@evrything.se');

    return NextResponse.json({
      success: true,
      message: 'Tack för er förfrågan! Vi återkommer snart – oftast inom 1 timma.',
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Kunde inte skicka meddelandet. Försök igen eller ring oss på 072-294 85 60.' },
      { status: 500 }
    );
  }
}
