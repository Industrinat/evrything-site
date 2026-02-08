'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Kontakt() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [startTime] = useState(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('sending');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      transportType: (form.elements.namedItem('transportType') as HTMLSelectElement).value,
      from: (form.elements.namedItem('from') as HTMLInputElement).value,
      to: (form.elements.namedItem('to') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      startTime,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setFormState('success');
      } else {
        setErrorMsg(result.error || 'Något gick fel.');
        setFormState('error');
      }
    } catch {
      setErrorMsg('Kunde inte skicka. Kontrollera er internetanslutning.');
      setFormState('error');
    }
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[var(--blue-50)] via-white to-[var(--blue-50)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Kontakta oss</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--blue-900)] mb-6">Skicka en förfrågan</h1>
            <p className="text-gray-500 text-lg">Fyll i formuläret så återkommer vi med en lösning anpassad för er – oftast inom 1 timma.</p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--blue-100)]">
                  <Image src="/images/marcus-portrait.png" alt="Marcus Lindström" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--blue-900)]">Marcus Lindström</h3>
                  <p className="text-gray-500 text-sm">Grundare &amp; VD, Evrything AB</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">Vi hjälper er med alla typer av transporter – från expressbud inom Göteborg till internationella fraktlösningar. Berätta om ert behov så hittar vi den bästa lösningen.</p>
              <div className="space-y-5 mb-10">
                {[
                  { icon: Phone, text: '072-294 85 60', href: 'tel:+46722948560', label: 'Telefon' },
                  { icon: Mail, text: 'booking@evrything.se', href: 'mailto:booking@evrything.se', label: 'E-post' },
                  { icon: MapPin, text: 'Göteborg, Sverige', href: null, label: 'Plats' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--blue-100)] rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[var(--blue-500)]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-gray-800 hover:text-[var(--blue-500)] transition-colors font-medium">{item.text}</a>
                      ) : (
                        <span className="text-gray-800 font-medium">{item.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--blue-50)] p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[var(--blue-500)]" />
                  <h3 className="font-bold text-[var(--blue-900)]">Öppettider</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Expresstransporter</span>
                    <span className="font-semibold text-[var(--blue-700)]">Dygnet runt, 24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kontor</span>
                    <span className="font-semibold text-[var(--blue-700)]">Mån–Fre 07:00–17:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[var(--blue-900)] mb-2">Tack för er förfrågan!</h3>
                  <p className="text-gray-500">Vi återkommer snart – oftast inom 1 timma.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[var(--blue-900)] mb-2">Prisförfrågan</h3>
                  <p className="text-gray-500 text-sm mb-8">Fält markerade med * är obligatoriska.</p>

                  {formState === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl mb-6">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Namn *</label>
                        <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all" placeholder="Ert namn" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Företag</label>
                        <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all" placeholder="Företagsnamn" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefon *</label>
                        <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all" placeholder="070-XXX XX XX" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-post *</label>
                        <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all" placeholder="namn@foretag.se" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Typ av transport</label>
                      <select name="transportType" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all">
                        <option>Välj typ...</option>
                        <option>Transport &amp; Distribution</option>
                        <option>Inrikes frakt</option>
                        <option>Utrikes frakt</option>
                        <option>Expressbud / Ontime</option>
                        <option>Bärhjälp &amp; Inbärning</option>
                        <option>Lager &amp; Magasinering</option>
                        <option>Transportförmedling</option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Från</label>
                        <input type="text" name="from" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all" placeholder="Upphämtningsort" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Till</label>
                        <input type="text" name="to" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all" placeholder="Leveransort" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Meddelande *</label>
                      <textarea name="message" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none transition-all resize-none" rows={5} placeholder="Beskriv ert transportbehov..."></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full bg-[var(--blue-500)] text-white py-4 rounded-full font-semibold hover:bg-[var(--blue-600)] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--blue-500)]/20 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === 'sending' ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                          Skickar...
                        </>
                      ) : (
                        <>
                          Skicka förfrågan
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--blue-900)] text-white/70 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <a href="/" className="block mb-4">
                <Image src="/images/evrything-logo-v8.png" alt="Evrything AB" width={280} height={72} className="h-20 w-auto" />
              </a>
              <p className="text-sm leading-relaxed">Komplett logistikföretag med expertis inom transport, bud, lager och expressleveranser.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tjänster</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/tjanster/transport-distribution" className="hover:text-white transition-colors">Transport &amp; Distribution</a></li>
                <li><a href="/tjanster/inrikes-utrikesfrakt" className="hover:text-white transition-colors">Inrikes &amp; Utrikesfrakt</a></li>
                <li><a href="/tjanster/expressbud" className="hover:text-white transition-colors">Expressbud &amp; Ontime</a></li>
                <li><a href="/tjanster/lager-magasinering" className="hover:text-white transition-colors">Lager &amp; Magasinering</a></li>
                <li><a href="/tjanster/barhjalp" className="hover:text-white transition-colors">Bärhjälp &amp; Inbärningar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Företaget</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/om-oss" className="hover:text-white transition-colors">Om oss</a></li>
                <li><a href="/miljo" className="hover:text-white transition-colors">Miljö</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+46722948560" className="hover:text-white transition-colors">072-294 85 60</a></li>
                <li><a href="mailto:booking@evrything.se" className="hover:text-white transition-colors">booking@evrything.se</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <span>© 2026 Evrything AB – Alla rättigheter förbehållna</span>
            <span>Webbplats av <a href="https://flowen.eu" className="text-[var(--blue-300)] hover:underline">Flowen</a></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
