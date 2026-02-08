import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { LucideIcon } from 'lucide-react'

interface ServiceFeature {
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  featuresTitle?: string;
  features: ServiceFeature[];
  detailsTitle?: string;
  details: string[];
  seoTitle: string;
  seoText: string[];
  ctaText?: string;
  galleryImages: string[];
}

export default function ServicePage({
  title,
  subtitle,
  description,
  heroImage,
  icon: Icon,
  featuresTitle = "Vad vi erbjuder",
  features,
  detailsTitle = "Så fungerar det",
  details,
  seoTitle,
  seoText,
  ctaText = "Begär offert",
  galleryImages,
}: ServicePageProps) {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-900)]/80 via-[var(--blue-900)]/60 to-[var(--blue-900)]/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-4">
              <Icon className="w-4 h-4" /> {subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/kontakt" className="inline-flex items-center gap-2 bg-[var(--blue-500)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--blue-600)] transition-all shadow-lg">
                {ctaText}
              </a>
              <a href="tel:+46722948560" className="inline-flex items-center gap-2 bg-white/15 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/25 transition-all backdrop-blur-sm">
                Ring 072-294 85 60
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-6">{seoTitle}</h2>
          {seoText.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-4">{featuresTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 bg-[var(--blue-100)] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[var(--blue-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[var(--blue-900)] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--blue-900)] mb-6">{detailsTitle}</h2>
              <div className="space-y-4">
                {details.map((detail, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--blue-500)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-gray-600 leading-relaxed pt-1">{detail}</p>
                  </div>
                ))}
              </div>
              <a href="/kontakt" className="inline-flex items-center gap-2 bg-[var(--blue-500)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--blue-600)] transition-all shadow-lg mt-8">
                Kontakta oss
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((src, i) => (
                <div key={i} className={`relative aspect-square rounded-xl overflow-hidden shadow-lg ${i === 1 ? 'mt-8' : ''}`}>
                  <Image src={src} alt="Transport" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--blue-600)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni hjälp med {title.toLowerCase()}?</h2>
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
                <li><a href="/tjanster/transport-distribution" className="hover:text-white transition-colors">Transport &amp; Distribution</a></li>
                <li><a href="/tjanster/inrikes-utrikesfrakt" className="hover:text-white transition-colors">Inrikes &amp; Utrikesfrakt</a></li>
                <li><a href="/tjanster/expressbud" className="hover:text-white transition-colors">Expressbud &amp; Ontime</a></li>
                <li><a href="/tjanster/lager-magasinering" className="hover:text-white transition-colors">Lager &amp; Magasinering</a></li>
                <li><a href="/tjanster/barhjalp" className="hover:text-white transition-colors">Bärhjälp &amp; Inbärningar</a></li>
                <li><a href="/tjanster/transportformedling" className="hover:text-white transition-colors">Transportförmedling</a></li>
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
