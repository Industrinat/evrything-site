'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/IMG_0075.jpeg',
  '/images/IMG_1038.jpeg',
  '/images/IMG_0404.jpeg',
  '/images/IMG_3758.jpeg',
  '/images/IMG_2946.jpeg',
];

const animations = [
  'animate-kb-1',
  'animate-kb-2',
  'animate-kb-3',
  'animate-kb-4',
  'animate-kb-5',
];

export default function HeroKenBurns() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const heroContent = (
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            ⚡ Dygnet runt • Hela Sverige, Norden &amp; Europa
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Din pålitliga partner inom{' '}
            <span className="text-yellow-400">transport & logistik</span>
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Expressbud, inrikes- och utrikesfrakt, lager och distribution – snabbt, tryggt och prisvärt från Göteborg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[var(--blue-500)] hover:bg-[var(--blue-600)] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Skicka förfrågan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+46722948560"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full transition-colors border border-white/30 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              072-294 85 60
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={images[0]}
          alt="Evrything AB - Transport & Logistik"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
        {heroContent}
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Evrything AB - Transport ${index + 1}`}
            fill
            className={`object-cover ${index === currentIndex ? animations[index] : ''}`}
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
      {heroContent}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
