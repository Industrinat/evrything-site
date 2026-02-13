'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import HeroKenBurns from '@/components/HeroKenBurns'
import Navbar from '@/components/Navbar'
import FreightQuote from '@/components/FreightQuote'
import { Truck, Globe, Warehouse, Zap, HandMetal, Package } from 'lucide-react'
import { Calendar } from 'lucide-react'

export default function Home() {
  const [news, setNews] = useState<any[]>([])
  
  useEffect(() => {
    fetch('https://flowen.eu/api/public/news?teamSlug=evrything-hemsida&limit=3')
      .then(r => r.json())
      .then(data => setNews(data))
      .catch(() => {})
  }, [])
  return (
    <main>
      <Navbar transparent={true} />

      {/* Hero Ken Burns */}
      <HeroKenBurns />

      {/* Stats */}
      <section className="relative z-20 -mt-12">        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "24/7", label: "Tillgänglighet" },
              { number: "100%", label: "Kundnöjdhet" },
              { number: "9+", label: "Städer i Norden" },
              { number: "10+", label: "År i branschen" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--blue-500)]">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
         {/* Interactive Freight Quote — replaces old static "Våra städer" */}
      <FreightQuote />
      {/* Services */}
      <section id="tjanster" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Våra tjänster</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue-900)] mb-4">Kompletta logistiklösningar</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Vi erbjuder allt från expresstransporter till lagerhållning – anpassat efter era behov.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Transport & Distribution", desc: "Vi löser alla typer av transporter oavsett storlek eller destination. Från små paket till tunga gods.", image: "/images/IMG_1038.jpeg" },
              { icon: Globe, title: "Inrikes & Utrikesfrakt", desc: "Frakt inom Sverige och internationellt. Vi har nätverk och erfarenhet för smidiga leveranser över gränserna.", image: "/images/IMG_0404.jpeg" },
              { icon: Warehouse, title: "Lager & Magasinering", desc: "Lagring av gods under valfri tidsperiod. Vi erbjuder även plock, pack och 3PL-lösningar.", image: "/images/IMG_2874.jpeg" },
              { icon: Zap, title: "Expressbud & Ontime", desc: "Expresstransporter och direktkörningar dygnet runt. Vi agerar omgående och levererar i tid, varje gång.", image: "/images/IMG_0576.jpeg" },
              { icon: HandMetal, title: "Bärhjälp & Inbärningar", desc: "Behöver ni hjälp med tunga lyft och inbärning? Vi bistår med professionell bärhjälp vid leverans.", image: "/images/IMG_1225.jpeg" },
              { icon: Package, title: "Transportförmedling", desc: "Med många års erfarenhet matchar vi ert transportbehov med rätt lösning och rätt fordon.", image: "/images/IMG_3795.jpeg" },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-6 h-6 text-[var(--blue-500)]" />
                    <h3 className="font-bold text-lg text-[var(--blue-900)]">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Reviews */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Kundrecensioner</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue-900)] mb-4">Vad våra kunder säger</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Enkelt att boka, snabb respons, bra leverans!", name: "Filippa Kristoffersson", initials: "FK" },
              { text: "Prisvärd och utmärkt service. Snabb kommunikation och inget krångel. Rekommenderas starkt!", name: "Olov Norlander", initials: "ON" },
              { text: "Kommunikation, engagemang och leveranssäkerhet alltid på topp. Varmt rekommenderade!", name: "Kamil Klepacz", initials: "KK" },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--blue-100)] flex items-center justify-center text-[var(--blue-500)] font-bold text-sm">{review.initials}</div>
                  <div>
                    <div className="font-semibold text-[var(--blue-900)] text-sm">{review.name}</div>
                    <div className="text-gray-400 text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      Google-recension
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Blog */}
      {news.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Blogg & Nyheter</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue-900)] mb-4">Senaste nytt</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Nyheter och uppdateringar från Evrything AB</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {news.map((item: any) => (
                <a
                  key={item.id}
                
                  href={`/blogg/${item.slug}`}
                  className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  {item.image && (
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </div>
                    <h3 className="font-bold text-lg text-[var(--blue-900)] mb-2 group-hover:text-[var(--blue-500)] transition-colors">{item.title}</h3>
                    {item.excerpt && <p className="text-gray-500 text-sm line-clamp-2">{item.excerpt}</p>}
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/blogg" className="inline-flex items-center gap-2 text-[var(--blue-500)] font-semibold hover:text-[var(--blue-700)] transition-colors">
                Visa alla nyheter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>
      )}
      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/IMG_1553.jpeg" alt="Transport" fill className="object-cover" />
          <div className="absolute inset-0 bg-[var(--blue-600)]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Behöver ni en transportlösning?</h2>
          <p className="text-white/80 text-lg mb-10">Kontakta oss för en skräddarsydd offert. Vi återkopplar snabbt – oftast redan inom 1 timma.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/kontakt" className="inline-flex items-center gap-2 bg-white text-[var(--blue-700)] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
              Skicka prisförfrågan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="tel:+46722948560" className="inline-flex items-center gap-2 bg-white/15 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/25 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Ring 072-294 85 60
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--blue-900)] text-white/70 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <a href="#" className="block mb-4">
  <Image src="/images/evrything-logo-v8.png" alt="Evrything AB" width={280} height={72} className="h-20 w-auto" />
</a>
              <p className="text-sm leading-relaxed">Komplett logistikföretag med expertis inom transport, bud, lager och expressleveranser.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tjänster</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#tjanster" className="hover:text-white transition-colors">Transport &amp; Distribution</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Inrikes &amp; Utrikesfrakt</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Expressbud &amp; Ontime</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Lager &amp; Magasinering</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Bärhjälp &amp; Inbärningar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Städer</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#stader" className="hover:text-white transition-colors">Göteborg</a></li>
                <li><a href="#stader" className="hover:text-white transition-colors">Stockholm</a></li>
                <li><a href="#stader" className="hover:text-white transition-colors">Malmö</a></li>
                <li><a href="#stader" className="hover:text-white transition-colors">Jönköping</a></li>
                <li><a href="#stader" className="hover:text-white transition-colors">Norge &amp; Danmark</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+46722948560" className="hover:text-white transition-colors">072-294 85 60</a></li>
                <li><a href="mailto:booking@evrything.se" className="hover:text-white transition-colors">booking@evrything.se</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Prisförfrågan</a></li>
                <li><a href="/om-oss" className="hover:text-white transition-colors">Om oss</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <span>© 2026 Evrything AB – Alla rättigheter förbehållna</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
