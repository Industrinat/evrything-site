'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showWhite ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src={showWhite ? "/images/evrything-logo-dark.png" : "/images/evrything-logo-v8.png"}
            alt="Evrything AB"
            width={180}
            height={45}
            className={`transition-all duration-300 ${showWhite ? 'h-10 md:h-14 w-auto' : 'h-12 md:h-16 w-auto'}`}
          />
        </a>

        {/* Desktop nav */}
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
          <a href="/kontakt" className={`px-7 py-3 rounded-full font-semibold text-sm transition-all ${showWhite ? 'bg-[var(--blue-500)] text-white hover:bg-[var(--blue-600)] shadow-md shadow-[var(--blue-500)]/20' : 'bg-white text-[var(--blue-700)] hover:bg-white/90 shadow-lg'}`}>Prisförfrågan</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Meny"
        >
          <svg className={`w-6 h-6 ${showWhite ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Tjänster</p>
            {tjanster.map((t) => (
              <a key={t.href} href={t.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                {t.label}
              </a>
            ))}
            <hr className="my-2" />
            <a href="/#stader" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg">Städer</a>
            <a href="/om-oss" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg">Om oss</a>
            <a href="/miljo" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg">Miljö</a>
            <a href="/blogg" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg">Blogg</a>
            <a href="/kontakt" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg">Kontakt</a>
            <a href="/kontakt" onClick={() => setMobileOpen(false)} className="block mt-3 text-center px-6 py-3 bg-[var(--blue-500)] text-white rounded-full font-semibold text-sm">Prisförfrågan</a>
          </div>
        </div>
      )}
    </nav>
  );
}