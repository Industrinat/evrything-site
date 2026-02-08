import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Shield, Users, Globe, Clock } from 'lucide-react'

export default function OmOss() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[var(--blue-50)] via-white to-[var(--blue-50)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Om Evrything AB</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--blue-900)] mb-6">
              Personlig service och professionell logistik
            </h1>
            <p className="text-gray-500 text-lg">
              Vi brinner för att leverera trygga, snabba och kostnadseffektiva logistiklösningar med en personlig touch.
            </p>
          </div>
        </div>
      </section>

      {/* Marcus + Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/marcus-portrait.png" alt="Marcus Lindström - VD Evrything AB" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="font-bold text-lg text-[var(--blue-800)]">Marcus Lindström</div>
                <div className="text-gray-500">Grundare &amp; VD</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-6">Vår historia</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Välkommen till Evrything AB – din pålitliga partner inom transport, transportförmedling, expressfrakt samt inrikes och utrikes frakt.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Med bas i Göteborg har vi över 10 års erfarenhet av att leverera logistiklösningar som fungerar. Vi startade med en enkel vision: att vara lite mer personliga än alla andra. Att alltid sätta kundens behov i första rummet.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Idag kör vi dagliga rutter mellan Sveriges största städer och erbjuder allt från expressbud och direktkörningar till lager, magasinering och internationell frakt. Vi har växt – men den personliga servicen har alltid varit kärnan i det vi gör.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Oavsett om ni behöver skicka ett paket inom Göteborg eller organisera en större transportlösning till Norge – vi finns här. Snabbt, tryggt och prisvärt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Värderingar */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-4">Varför Evrything?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Det som gör oss till rätt val för era transporter.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Tillgängliga dygnet runt", desc: "Vi finns här när ni behöver oss. Expresstransporter och direktkörningar 24/7, 365 dagar om året." },
              { icon: Users, title: "Personlig kontakt", desc: "Ni möter alltid samma team. Vi lär känna era behov och anpassar lösningen efter er verksamhet." },
              { icon: Shield, title: "Trygg leverans", desc: "Era varor hanteras med största omsorg. Vi jobbar med fullt fokus på att allt når fram i tid och i perfekt skick." },
              { icon: Globe, title: "Hela Norden & Europa", desc: "Från lokala bud i Göteborg till internationella transporter och 3PL-lösningar över hela Europa." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <value.icon className="w-10 h-10 text-[var(--blue-500)] mb-4" />
                <h3 className="font-bold text-lg text-[var(--blue-900)] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bildgrid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/IMG_0086.jpeg",
              "/images/IMG_2818.jpeg",
              "/images/IMG_1491.jpeg",
              "/images/IMG_7222.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image src={src} alt="Evrything transport" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--blue-600)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Redo att komma igång?</h2>
          <p className="text-white/80 text-lg mb-8">Kontakta oss för en skräddarsydd offert – vi återkopplar oftast inom 1 timma.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/kontakt" className="inline-flex items-center gap-2 bg-white text-[var(--blue-700)] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
              Skicka prisförfrågan
            </a>
            <a href="tel:+46722948560" className="inline-flex items-center gap-2 bg-white/15 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/25 transition-all">
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
              <a href="/" className="block mb-4">
                <Image src="/images/evrything-logo-v8.png" alt="Evrything AB" width={280} height={72} className="h-20 w-auto" />
              </a>
              <p className="text-sm leading-relaxed">Komplett logistikföretag med expertis inom transport, bud, lager och expressleveranser.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tjänster</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#tjanster" className="hover:text-white transition-colors">Transport &amp; Distribution</a></li>
                <li><a href="/#tjanster" className="hover:text-white transition-colors">Inrikes &amp; Utrikesfrakt</a></li>
                <li><a href="/#tjanster" className="hover:text-white transition-colors">Expressbud &amp; Ontime</a></li>
                <li><a href="/#tjanster" className="hover:text-white transition-colors">Lager &amp; Magasinering</a></li>
                <li><a href="/#tjanster" className="hover:text-white transition-colors">Bärhjälp &amp; Inbärningar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Företaget</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/om-oss" className="hover:text-white transition-colors">Om oss</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="/#stader" className="hover:text-white transition-colors">Våra städer</a></li>
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
