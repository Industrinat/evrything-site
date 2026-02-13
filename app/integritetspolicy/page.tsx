import Navbar from '@/components/Navbar';
import Image from 'next/image';

export const metadata = {
  title: 'Integritetspolicy – Evrything AB',
  description: 'Så hanterar Evrything AB dina personuppgifter i enlighet med GDPR.',
};

export default function Integritetspolicy() {
  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-12 bg-gradient-to-br from-[var(--blue-50)] via-white to-[var(--blue-50)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--blue-100)] text-[var(--blue-600)] text-sm font-semibold mb-4">GDPR</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--blue-900)] mb-4">Integritetspolicy</h1>
          <p className="text-gray-500 text-lg">Så hanterar vi dina personuppgifter</p>
          <p className="text-gray-400 text-sm mt-2">Senast uppdaterad: 13 februari 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-gray">

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">1. Personuppgiftsansvarig</h2>
          <p className="text-gray-600 mb-4">
            Evrything AB (org.nr 559XXX-XXXX)<br />
            Göteborg, Sverige<br />
            E-post: <a href="mailto:booking@evrything.se" className="text-[var(--blue-500)] hover:underline">booking@evrything.se</a><br />
            Telefon: <a href="tel:+46722948560" className="text-[var(--blue-500)] hover:underline">072-294 85 60</a>
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">2. Vilka uppgifter samlar vi in?</h2>
          <p className="text-gray-600 mb-4">Vi samlar in personuppgifter som du frivilligt lämnar till oss via:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li><strong>Kontaktformulär:</strong> Namn, e-post, telefonnummer, företagsnamn och meddelande</li>
            <li><strong>Offertförfrågningar:</strong> Upphämtnings- och leveransort, transporttyp</li>
            <li><strong>Telefon och e-post:</strong> Uppgifter som lämnas vid direktkontakt</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">3. Varför behandlar vi dina uppgifter?</h2>
          <p className="text-gray-600 mb-2">Vi behandlar personuppgifter för att:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Besvara förfrågningar och lämna offerter</li>
            <li>Utföra och administrera transportuppdrag</li>
            <li>Fakturering och bokföring</li>
            <li>Förbättra vår service och webbplats</li>
          </ul>
          <p className="text-gray-600 mb-4">
            <strong>Rättslig grund:</strong> Berättigat intresse (kontaktförfrågningar), fullgörande av avtal (kundrelation), samt rättslig förpliktelse (bokföring).
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">4. Hur länge sparar vi uppgifterna?</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li><strong>Offertförfrågningar:</strong> Raderas efter 2 år om du inte blir kund</li>
            <li><strong>Kunduppgifter:</strong> Under avtalsperioden + 7 år (bokföringskrav)</li>
            <li><strong>Webbanalys:</strong> Anonymiserad data, ingen personidentifiering</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">5. Delning av uppgifter</h2>
          <p className="text-gray-600 mb-4">
            Vi delar inte dina personuppgifter med tredje part förutom:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Underleverantörer som medverkar i transporten (enbart nödvändig information)</li>
            <li>Bokföringssystem (Fortnox) för fakturering</li>
            <li>Myndigheter när det krävs enligt lag</li>
          </ul>
          <p className="text-gray-600 mb-4">Vi säljer aldrig dina personuppgifter till tredje part.</p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">6. Dina rättigheter enligt GDPR</h2>
          <p className="text-gray-600 mb-4">Du har rätt att:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li><strong>Tillgång</strong> – begära information om vilka uppgifter vi har om dig</li>
            <li><strong>Rättelse</strong> – korrigera felaktiga eller ofullständiga uppgifter</li>
            <li><strong>Radering</strong> – begära att vi raderar dina uppgifter (&quot;rätten att bli glömd&quot;)</li>
            <li><strong>Begränsning</strong> – begränsa hur vi behandlar din data</li>
            <li><strong>Dataportabilitet</strong> – få din data i maskinläsbart format</li>
            <li><strong>Invändning</strong> – invända mot behandling baserad på berättigat intresse</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Kontakta oss på <a href="mailto:booking@evrything.se" className="text-[var(--blue-500)] hover:underline">booking@evrything.se</a> för att utöva dina rättigheter. Vi svarar inom 30 dagar.
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">7. Cookies</h2>
          <p className="text-gray-600 mb-4">
            Vår webbplats använder enbart nödvändiga cookies för att webbplatsen ska fungera korrekt. Vi använder inga spårnings- eller marknadsföringscookies.
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">8. Säkerhet</h2>
          <p className="text-gray-600 mb-4">
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter. All kommunikation sker via krypterade anslutningar (HTTPS). Webbplatsen och våra system driftas på EU-baserade servrar.
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">9. Klagomål</h2>
          <p className="text-gray-600 mb-4">
            Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY): <a href="https://www.imy.se" className="text-[var(--blue-500)] hover:underline" target="_blank" rel="noopener noreferrer">www.imy.se</a>
          </p>

          <h2 className="text-2xl font-bold text-[var(--blue-900)] mt-10 mb-4">10. Ändringar</h2>
          <p className="text-gray-600 mb-4">
            Vi kan komma att uppdatera denna policy. Väsentliga ändringar meddelas via webbplatsen.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--blue-900)] text-white/70 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <span>&copy; 2026 Evrything AB – Alla rättigheter förbehållna</span>
            <span>Webbplats av <a href="https://flowen.eu" className="text-[var(--blue-300)] hover:underline">Flowen</a></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
