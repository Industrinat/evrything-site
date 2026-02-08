'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showWhite = !transparent || scrolled;

  const tjanster = [
    { label: 'Transport & Distribution', href: '/tjanster/transport-distribution' },
    { label: 'Inrikes & Utrikesfrakt', href: '/tjanster/inrikes-utrikesfrakt' },
    { label: 'Lager & Magasinering', href: '/tjanster/lager-magasinering' },
    { label: 'Expressbud & Ontime', href: '/tjanster/expressbud' },
    { label: 'Bärhjälp & Inbärningar', href: '/tjanster/barhjalp' },
    { label: 'Transportförmedling', href: '/tjanster/transportformedling' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showWhite ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image src={showWhite ? "/images/evrything-logo-dark.png" : "/images/evrything-logo-v8.png"} alt="Evrything AB" width={250} height={60} className={`transition-all duration-300 ${showWhite ? 'h-32 w-auto' : 'h-32 w-auto'}`} />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <a href="/#tjanster" className={`text-sm font-semibold transition-colors flex items-center gap-1 ${showWhite ? 'text-gray-600 hover:text-[var(--blue-600)]' : 'text-white/90 hover:text-white'}`}>
              Tjänster
              <svg className={`w-3.5 h-3.5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            {showDropdown && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-64">
                  {tjanster.map((t) => (
                    <a key={t.href} href={t.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[var(--blue-50)] hover:text-[var(--blue-600)] transition-colors">
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="/#stader" className={`text-sm font-semibold transition-colors ${showWhite ? 'text-gray-600 hover:text-[var(--blue-600)]' : 'text-white/90 hover:text-white'}`}>Städer</a>
          <a href="/om-oss" className={`text-sm font-semibold transition-colors ${showWhite ? 'text-gray-600 hover:text-[var(--blue-600)]' : 'text-white/90 hover:text-white'}`}>Om oss</a>
          <a href="/miljo" className={`text-sm font-semibold transition-colors ${showWhite ? 'text-gray-600 hover:text-[var(--blue-600)]' : 'text-white/90 hover:text-white'}`}>Miljö</a>
          <a href="/blogg" className={`text-sm font-semibold transition-colors ${showWhite ? 'text-gray-600 hover:text-[var(--blue-600)]' : 'text-white/90 hover:text-white'}`}>Blogg</a>
          <a href="/kontakt" className={`text-sm font-semibold transition-colors ${showWhite ? 'text-gray-600 hover:text-[var(--blue-600)]' : 'text-white/90 hover:text-white'}`}>Kontakt</a>
        </div>
          <a href="/kontakt" className={`px-7 py-3 rounded-full font-semibold text-sm transition-all ${showWhite ? 'bg-[var(--blue-500)] text-white hover:bg-[var(--blue-600)] shadow-md shadow-[var(--blue-500)]/20' : 'bg-white text-[var(--blue-700)] hover:bg-white/90 shadow-lg'}`}>Prisförfrågan</a>
      </div>
    </nav>
  );
}