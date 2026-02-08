import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Leaf, Recycle, TrendingDown, Route, Fuel, TreePine } from 'lucide-react'

export default function Miljo() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-green-50 via-white to-[var(--blue-50)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                <Leaf className="w-4 h-4" /> Hållbara transporter
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--blue-900)] mb-6 leading-tight">
                Miljömedvetna transporter för en <span className="text-green-600">grönare framtid</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                På Evrything AB tar vi ansvar för miljön. Genom smart samlastning, ruttoptimering och moderna fordon minimerar vi vår klimatpåverkan – utan att kompromissa med leveranssäkerhet eller hastighet.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/kontakt" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">
                  Boka hållbar transport
                </a>
                <a href="#initiativ" className="inline-flex items-center gap-2 border-2 border-green-200 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all">
                  Våra initiativ
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/IMG_0099.jpeg" alt="Miljövänlig transport" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Vår miljövision */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-4">Vår miljövision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Transporter är en nödvändig del av samhället, men de behöver inte belasta miljön mer än nödvändigt. 
              Vi arbetar aktivt för att minska vårt ekologiska fotavtryck genom konkreta åtgärder i vår dagliga verksamhet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Route,
                title: "Smart ruttplanering",
                desc: "Vi optimerar varje rutt för att minimera körda kilometer. Genom att samordna leveranser och välja de mest effektiva vägarna sparar vi bränsle och minskar utsläpp.",
                stat: "30%",
                statLabel: "färre tomkörningar"
              },
              {
                icon: Recycle,
                title: "Samlastning",
                desc: "Istället för halvfulla bilar ser vi till att varje transport utnyttjas maximalt. Smart samlastning betyder färre fordon på vägarna och lägre utsläpp per levererat paket.",
                stat: "100%",
                statLabel: "utnyttjandegrad"
              },
              {
                icon: Fuel,
                title: "Moderna fordon",
                desc: "Vår fordonsflotta uppfyller de senaste miljökraven. Vi investerar kontinuerligt i nyare, bränslesnålare fordon och utvärderar löpande möjligheter för eldrift.",
                stat: "Euro 6",
                statLabel: "motorstandard"
              },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-xl text-[var(--blue-900)] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="border-t border-green-200 pt-4">
                  <div className="text-2xl font-bold text-green-600">{item.stat}</div>
                  <div className="text-sm text-gray-500">{item.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiativ */}
      <section id="initiativ" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-4">Konkreta miljöinitiativ</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Så här jobbar vi varje dag för att minska transporternas miljöpåverkan.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingDown,
                title: "Minskade CO₂-utsläpp",
                desc: "Genom att optimera rutter och maximera fyllnadsgraden i varje fordon arbetar vi aktivt för att sänka våra koldioxidutsläpp per leverans."
              },
              {
                icon: TreePine,
                title: "Hållbara partnerskap",
                desc: "Vi samarbetar med leverantörer och partners som delar vår miljövision. Tillsammans skapar vi en mer hållbar logistikkedja."
              },
              {
                icon: Leaf,
                title: "Miljöcertifierade processer",
                desc: "Våra arbetsprocesser är utformade med miljön i fokus. Från digital dokumenthantering till effektiv lagerhantering minskar vi onödigt slöseri."
              },
              {
                icon: Recycle,
                title: "Cirkulär logistik",
                desc: "Vi hjälper företag att hantera returer och återvinningsflöden effektivt, och bidrar till en mer cirkulär ekonomi genom smarta transportlösningar."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-5">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--blue-900)] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-12 h-12 text-green-200 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-6">
            &quot;Vi vill visa att snabba och pålitliga transporter kan gå hand i hand med miljöansvar. Varje optimerad rutt och varje samlastning gör skillnad.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/30">
              <Image src="/images/marcus-portrait.png" alt="Marcus Lindström" fill className="object-cover" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Marcus Lindström</div>
              <div className="text-green-200 text-sm">Grundare &amp; VD, Evrything AB</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bild + text */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-6">Välj en grönare transportpartner</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Genom att välja Evrything AB som transportpartner bidrar ni aktivt till minskade utsläpp. 
                Vi rapporterar gärna era miljöbesparingar och hjälper er att nå era hållbarhetsmål.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Oavsett om det gäller expressleveranser, lagerhantering eller internationell frakt – vi hittar alltid den mest miljöeffektiva lösningen för er.
              </p>
              <div className="space-y-4">
                {[
                  "Miljörapportering per kund",
                  "Optimerade leveransscheman",
                  "Samlastning som standard",
                  "Kontinuerlig förbättring av fordonsflottan",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/IMG_2946.jpeg" alt="Hållbar transport" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
                <Image src="/images/IMG_1524.jpeg" alt="Miljövänlig leverans" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--blue-600)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Redo för hållbara transporter?</h2>
          <p className="text-white/80 text-lg mb-8">Kontakta oss så berättar vi mer om hur vi kan hjälpa er nå era miljömål.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/kontakt" className="inline-flex items-center gap-2 bg-white text-[var(--blue-700)] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
              Kontakta oss
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
                <li><a href="/miljo" className="hover:text-white transition-colors">Miljö</a></li>
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
