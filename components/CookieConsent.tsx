'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  statistics: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = 'evrything-cookie-consent'
const SHOW_DELAY_MS = 2500

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent) {
      return
    }
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs))
    setIsVisible(false)
  }

  const acceptAll = () => {
    const all = { necessary: true, statistics: true, marketing: true }
    setPreferences(all)
    saveConsent(all)
  }

  const acceptSelected = () => {
    saveConsent(preferences)
  }

  const rejectAll = () => {
    const minimal = { necessary: true, statistics: false, marketing: false }
    setPreferences(minimal)
    saveConsent(minimal)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-slide-up">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="p-5 pb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--blue-100)] rounded-xl flex items-center justify-center">
              <Cookie className="w-5 h-5 text-[var(--blue-500)]" />
            </div>
            <div>
              <h3 className="font-bold text-[var(--blue-900)] text-base">Vi använder cookies</h3>
              <p className="text-gray-500 text-sm">För att förbättra din upplevelse</p>
            </div>
          </div>
          <button onClick={rejectAll} className="text-gray-400 hover:text-gray-600 p-1" aria-label="Stäng">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="px-5 pb-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            Vi använder cookies för att webbplatsen ska fungera korrekt och för att analysera trafik.
            Du väljer själv vilka cookies du godkänner. Läs mer i vår{' '}
            <a href="/integritetspolicy" className="text-[var(--blue-500)] hover:underline">integritetspolicy</a>.
          </p>
        </div>

        {/* Details toggle */}
        <div className="px-5 pb-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm font-medium text-[var(--blue-500)] hover:text-[var(--blue-700)] flex items-center gap-1 transition-colors"
          >
            {showDetails ? 'Dölj detaljer' : 'Visa detaljer'}
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Detailed preferences */}
        {showDetails && (
          <div className="px-5 pb-3 space-y-3">
            {/* Necessary */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <span className="font-semibold text-sm text-[var(--blue-900)]">Nödvändiga</span>
                <p className="text-xs text-gray-500">Krävs för att webbplatsen ska fungera</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                Alltid aktiva
              </div>
            </div>

            {/* Statistics */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <span className="font-semibold text-sm text-[var(--blue-900)]">Statistik</span>
                <p className="text-xs text-gray-500">Hjälper oss förstå hur besökare använder sidan</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.statistics}
                  onChange={(e) => setPreferences({ ...preferences, statistics: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-[var(--blue-400)]/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--blue-500)]"></div>
              </label>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <span className="font-semibold text-sm text-[var(--blue-900)]">Marknadsföring</span>
                <p className="text-xs text-gray-500">Används för riktad annonsering</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-[var(--blue-400)]/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--blue-500)]"></div>
              </label>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="p-5 pt-3 flex flex-col sm:flex-row gap-2">
          <button
            onClick={rejectAll}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            Endast nödvändiga
          </button>
          {showDetails && (
            <button
              onClick={acceptSelected}
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-[var(--blue-600)] bg-[var(--blue-100)] hover:bg-[var(--blue-200)] rounded-xl transition-colors"
            >
              Spara val
            </button>
          )}
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[var(--blue-500)] hover:bg-[var(--blue-600)] rounded-xl transition-colors shadow-sm"
          >
            Acceptera alla
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
