import { NextRequest, NextResponse } from 'next/server';

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);
  if (!limit || now > limit.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (limit.count >= 5) return false;
  limit.count++;
  return true;
}

function isSuspicious(text: string): boolean {
  const patterns = [/viagra/i, /cialis/i, /casino/i, /crypto/i, /bitcoin/i, /click\s+here/i, /(http|https):\/\/.*\.(ru|cn|tk|ml)/i, /(\w)\1{10,}/];
  return patterns.some(p => p.test(text));
}

async function getGraphToken() {
  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error('Failed to get Graph token');
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || '';

    // Rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'För många förfrågningar. Försök igen senare.' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, phone, company, transportType, from, to, message, website, startTime } = body;

    // Honeypot
    if (website) {
      console.log('🚫 Honeypot triggered:', { name, email });
      return NextResponse.json({ success: true, message: 'Tack! Vi återkommer snart.' });
    }

    // Time check (minst 3 sek)
    if (startTime && Date.now() - startTime < 3000) {
      console.log('🚫 Too fast:', Date.now() - startTime, 'ms');
      return NextResponse.json({ success: true, message: 'Tack! Vi återkommer snart.' });
    }

    // User-Agent check
    if (!userAgent || userAgent.length < 10) {
      return NextResponse.json({ success: true, message: 'Tack! Vi återkommer snart.' });
    }

    // Validate
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Namn, e-post, telefon och meddelande krävs.' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Ett eller flera fält är för långa.' }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: 'Meddelandet är för kort (minst 10 tecken).' }, { status: 400 });
    }

    // Spam check
    if (isSuspicious(name) || isSuspicious(email) || isSuspicious(message)) {
      console.log('🚫 Suspicious content:', { name, email });
      return NextResponse.json({ success: true, message: 'Tack! Vi återkommer snart.' });
    }

    console.log('✅ Evrything kontaktformulär:', { name, email, phone, company, transportType });

    // Build email body
    const emailBody = [
      `📋 NY PRISFÖRFRÅGAN – evrything.se`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `👤 Kontaktuppgifter`,
      `   Namn: ${name}`,
      company ? `   Företag: ${company}` : null,
      `   Telefon: ${phone}`,
      `   E-post: ${email}`,
      ``,
      transportType && transportType !== 'Välj typ...' ? `🚚 Transporttyp: ${transportType}` : null,
      from ? `📍 Från: ${from}` : null,
      to ? `📍 Till: ${to}` : null,
      ``,
      `💬 Meddelande:`,
      message,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `IP: ${ip}`,
    ].filter(Boolean).join('\n');

    // Send via Microsoft Graph
    const token = await getGraphToken();

    const emailResponse = await fetch('https://graph.microsoft.com/v1.0/users/info@flowen.eu/sendMail', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject: `🚚 Prisförfrågan: ${name}${company ? ` – ${company}` : ''} (${transportType || 'Transport'})`,
          body: { contentType: 'Text', content: emailBody },
          toRecipients: [
            { emailAddress: { address: 'booking@evrything.se' } },
          ],
          ccRecipients: [
            { emailAddress: { address: 'daniel.olsson@industrinat.se' } },
          ],
          replyTo: [
            { emailAddress: { address: email, name: name } },
          ],
        },
      }),
    });

    if (!emailResponse.ok) {
      const err = await emailResponse.text();
      console.error('Graph mail error:', err);
      throw new Error('Failed to send email');
    }

    console.log('📧 Mail skickat till booking@evrything.se');

    return NextResponse.json({
      success: true,
      message: 'Tack för er förfrågan! Vi återkommer snart – oftast inom 1 timma.',
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json({ error: 'Kunde inte skicka meddelandet. Försök igen eller ring oss på 072-294 85 60.' }, { status: 500 });
  }
}
