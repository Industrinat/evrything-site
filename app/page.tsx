export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--blue-900)]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--blue-400)] rounded-lg flex items-center justify-center font-bold text-white">
              E
            </div>
            <span className="text-white font-bold text-xl">Evrything<span className="text-[var(--blue-300)]">.se</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tjanster" className="text-white/80 hover:text-white text-sm font-medium">Tjänster</a>
            <a href="#rutter" className="text-white/80 hover:text-white text-sm font-medium">Rutter</a>
            <a href="#omoss" className="text-white/80 hover:text-white text-sm font-medium">Om oss</a>
            <a href="#kontakt" className="text-white/80 hover:text-white text-sm font-medium">Kontakt</a>
          </div>
          <a href="#kontakt" className="bg-[var(--accent)] text-[var(--blue-900)] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[var(--accent-light)] transition-all">
            Prisförfrågan
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[var(--blue-900)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-400)]/20 via-transparent to-[var(--accent)]/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59,125,219,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,125,219,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--blue-400)]/15 border border-[var(--blue-400)]/20 text-[var(--blue-200)] text-sm font-medium mb-6 animate-fade-in-up">
                ⚡ Dygnet runt • Hela Sverige & Europa
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up animate-delay-100">
                Transporter<br />när de är <span className="text-[var(--blue-300)]">som bäst</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-200">
                Expresstransporter, bud och logistiklösningar anpassade efter era behov.
                Snabbt, tryggt och prisvärt – från Göteborg till hela Europa.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
                <a href="#kontakt" className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--blue-900)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--accent-light)] transition-all shadow-lg shadow-[var(--accent)]/30">
                  Få prisförslag
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="#tjanster" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all">
                  Våra tjänster
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-up animate-delay-400">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--blue-700)] to-[var(--blue-600)] flex items-center justify-center shadow-2xl">
                <div className="text-center text-[var(--blue-300)]">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} /><path d="M21 15l-5-5L5 21" strokeWidth={1.5} /></svg>
                  <span className="text-sm opacity-60">Hero-bild – Lastbil</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--blue-500)] to-[var(--blue-400)] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-[var(--blue-800)]">Göteborg & hela Sverige</div>
                  <div className="text-sm text-gray-500">Dagliga rutter i Västra Götaland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 -mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "24/7", label: "Tillgänglighet" },
              { number: "100%", label: "Kundnöjdhet" },
              { number: "Hela", label: "Sverige & Europa" },
              { number: "10+", label: "År i branschen" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--blue-500)]">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjanster" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Våra tjänster</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--blue-900)] mb-4">Kompletta logistiklösningar</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Vi erbjuder allt från expresstransporter till lagerhållning – anpassat efter era behov.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Expresstransport", desc: "Expresstransporter och direktkörningar dygnet runt. Vi agerar omgående efter era önskemål." },
              { icon: "🚚", title: "Transport & Bud", desc: "Vi löser alla typer av transporter oavsett storlek eller destination." },
              { icon: "📦", title: "Omlastning", desc: "Behöver ni omlastning eller avlastningshjälp? Vi har truck och lager för era behov." },
              { icon: "🕐", title: "Daglig distribution", desc: "Dagliga rutter inom Västra Götaland – tidseffektivt, prisvärt och miljövänligt." },
              { icon: "🌍", title: "Transportförmedling", desc: "Med många års erfarenhet hjälper vi till med alla typer av transporter – dygnet runt." },
              { icon: "🏭", title: "Lagring & Magasinering", desc: "Lagring av gods under valfri tidsperiod. Vi erbjuder även plock, pack och 3PL." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-[var(--blue-50)] rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-[var(--blue-100)] transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-[var(--blue-900)] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section id="rutter" className="py-24 bg-[var(--blue-900)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-sm font-semibold mb-4">Dagliga rutter</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">Vi kör dagligen</h2>
              <p className="text-white/60 mb-8">Våra bilar kör dagliga rutter inom Västra Götalands län – smart samlastning ger prisvärt och miljöeffektivt resultat.</p>
              <ul className="space-y-4">
                {["Göteborg – Malmö", "Göteborg – Borås", "Göteborg – Bohuslän", "Göteborg – Skaraborg", "Göteborg – Jönköping"].map((route, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/85 py-3 border-b border-white/10">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    {route}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--blue-900)] px-8 py-4 rounded-full font-semibold mt-8 hover:bg-[var(--accent-light)] transition-all">
                Skicka prisförfrågan
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className={`aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--blue-800)] to-[var(--blue-700)] flex items-center justify-center ${n === 1 ? 'mt-8' : ''}`}>
                  <svg className="w-12 h-12 text-[var(--blue-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="omoss" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--blue-100)] to-[var(--blue-200)] flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-[var(--blue-300)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /></svg>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Om Evrything AB</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--blue-900)] mb-4">Komplett logistikföretag med personlig service</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Evrything AB är ett komplett logistikföretag med expertis inom inrikes och utrikes frakt, lager och expressleveranser.
                Vi hjälper både företag och privatpersoner med snabba, trygga och kostnadseffektiva transporter.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Punktlighet & Säkerhet", desc: "Vi jobbar alltid med fullt fokus på att era varor når fram i tid." },
                  { title: "Personlig kontakt", desc: "Ni möter alltid samma team – vi lär känna era behov." },
                  { title: "Sverige & Europa", desc: "Från lokala bud i Göteborg till internationella transporter." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 bg-[var(--blue-100)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--blue-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--blue-900)]">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Kundrecensioner</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--blue-900)] mb-4">Vad våra kunder säger</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Enkelt att boka, snabb respons, bra leverans!", name: "Filippa Kristoffersson", initials: "FK" },
              { text: "Prisvärd och utmärkt service. Snabb kommunikation och inget krångel. Rekommenderas starkt!", name: "Olov Norlander", initials: "ON" },
              { text: "Kommunikation, engagemang och leveranssäkerhet alltid på topp. Varmt rekommenderade!", name: "Kamil Klepacz", initials: "KK" },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-[var(--accent)] fill-[var(--accent)]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--blue-100)] flex items-center justify-center text-[var(--blue-500)] font-bold text-sm">{review.initials}</div>
                  <div>
                    <div className="font-semibold text-[var(--blue-900)] text-sm">{review.name}</div>
                    <div className="text-gray-400 text-xs">Google-recension</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--blue-700)] to-[var(--blue-900)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">Behöver ni en transportlösning?</h2>
          <p className="text-white/70 text-lg mb-10">Kontakta oss för en skräddarsydd offert. Vi återkopplar inom 1 timma under kontorstid.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--blue-900)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--accent-light)] transition-all">
              Skicka prisförfrågan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="tel:+46XXXXXXXXX" className="inline-flex items-center gap-2 bg-white text-[var(--blue-700)] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Ring oss direkt
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">Kontakt</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--blue-900)] mb-4">Skicka en förfrågan</h2>
            <p className="text-gray-500">Fyll i formuläret så återkommer vi med pris och lösning.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--blue-900)] mb-3">Evrything AB</h3>
              <p className="text-gray-500 mb-8">Komplett logistikföretag med expertis inom inrikes & utrikes frakt, lager och expressleveranser.</p>
              <div className="space-y-4">
                {[
                  { icon: "📞", text: "Telefon – lägg till nummer" },
                  { icon: "✉️", text: "info@evrything.se" },
                  { icon: "📍", text: "Göteborg, Sverige" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[var(--blue-100)] rounded-lg flex items-center justify-center">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--blue-900)] mt-10 mb-3">Öppettider</h3>
              <p className="text-gray-500">Expresstransporter dygnet runt.<br />Kontor: Måndag–Fredag 07:00–17:00</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--blue-900)] mb-6">Prisförfrågan</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Namn *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none" placeholder="Ert namn" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Företag</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none" placeholder="Företagsnamn" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Telefon *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none" placeholder="070-XXX XX XX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">E-post *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none" placeholder="namn@foretag.se" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Typ av transport</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none bg-white">
                    <option>Välj typ...</option>
                    <option>Expresstransport</option>
                    <option>Bud / Paket</option>
                    <option>Pallfrakt</option>
                    <option>Daglig distribution</option>
                    <option>Omlastning / Lager</option>
                    <option>Internationell transport</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Från</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none" placeholder="Upphämtningsort" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Till</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none" placeholder="Leveransort" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Meddelande</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--blue-400)] focus:ring-2 focus:ring-[var(--blue-400)]/20 outline-none resize-none" rows={4} placeholder="Beskriv ert transportbehov..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[var(--blue-500)] text-white py-4 rounded-full font-semibold hover:bg-[var(--blue-600)] transition-all flex items-center justify-center gap-2">
                  Skicka förfrågan
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--blue-900)] text-white/70 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--blue-400)] rounded-lg flex items-center justify-center font-bold text-white">E</div>
                <span className="text-white font-bold text-xl">Evrything<span className="text-[var(--blue-300)]">.se</span></span>
              </a>
              <p className="text-sm leading-relaxed">Komplett logistikföretag med expertis inom transport, bud och expressleveranser.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tjänster</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#tjanster" className="hover:text-white">Expresstransport</a></li>
                <li><a href="#tjanster" className="hover:text-white">Transport & Bud</a></li>
                <li><a href="#tjanster" className="hover:text-white">Omlastning</a></li>
                <li><a href="#tjanster" className="hover:text-white">Lagring</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Rutter</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#rutter" className="hover:text-white">Göteborg – Malmö</a></li>
                <li><a href="#rutter" className="hover:text-white">Göteborg – Borås</a></li>
                <li><a href="#rutter" className="hover:text-white">Göteborg – Bohuslän</a></li>
                <li><a href="#rutter" className="hover:text-white">Göteborg – Jönköping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@evrything.se" className="hover:text-white">info@evrything.se</a></li>
                <li><a href="#kontakt" className="hover:text-white">Prisförfrågan</a></li>
                <li><a href="#omoss" className="hover:text-white">Om oss</a></li>
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