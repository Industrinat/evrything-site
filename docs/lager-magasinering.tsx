import ServicePage from '@/components/ServicePage'
import { Warehouse } from 'lucide-react'

export default function LagerMagasinering() {
  return (
    <ServicePage
      title="Lager & Magasinering"
      subtitle="Tjänst"
      description="Lagring av gods under valfri tidsperiod. Vi erbjuder plock, pack och kompletta 3PL-lösningar för företag som vill outsourca sin lagerhantering."
      heroImage="/images/IMG_2874.jpeg"
      icon={Warehouse}
      seoTitle="Lagerhantering och 3PL-lösningar i Göteborg"
      seoText={[
        "Evrything AB erbjuder professionell lagerhantering och magasinering i Göteborgsområdet. Våra lagerlösningar passar både företag som behöver tillfällig förvaring och de som söker en komplett 3PL-partner för sin logistik.",
        "Med vår tredjepartslogistik (3PL) tar vi hand om hela kedjan – från mottagning och lagring till plock, pack och utleverans. Ni kan fokusera på er kärnverksamhet medan vi sköter logistiken. Vi erbjuder flexibla avtal utan långa bindningstider.",
        "Vårt lager är utrustat med moderna säkerhetssystem inklusive larm, kameraövervakning och brandsäkra lokaler. Vi erbjuder regelbunden inventering och digital rapportering så att ni alltid har full kontroll över ert lagersaldo. Ordrar som inkommer före kl 14:00 levereras samma dag.",
      ]}
      featuresTitle="Kompletta lagerlösningar"
      features={[
        { title: "Flexibel lagring", desc: "Korttid eller långtid – vi anpassar lagringsperioden helt efter era behov." },
        { title: "Plock & Pack", desc: "Vi plockar och packar era ordrar redo för leverans direkt från vårt lager." },
        { title: "3PL-lösningar", desc: "Komplett tredjepartslogistik – vi hanterar hela kedjan från lager till leverans." },
        { title: "Inventering", desc: "Regelbunden inventering och rapportering av ert lagersaldo." },
        { title: "Säker förvaring", desc: "Larm, kameraövervakning och brandsäkra lokaler för ert gods." },
        { title: "Snabb utleverans", desc: "Samma dags utleverans på ordrar som inkommer före kl 14:00." },
      ]}
      detailsTitle="Så kommer ni igång med lagring"
      details={[
        "Vi kartlägger ert behov – vilka varor, volym och önskad servicenivå.",
        "Ni får ett skräddarsytt förslag med fast pris per pallplats eller kubikmeter.",
        "Varorna hämtas eller tas emot på vårt lager och registreras i systemet.",
        "Plock och pack utförs enligt era instruktioner vid varje order.",
        "Regelbunden rapportering av lagerstatus och utleveranser.",
      ]}
      galleryImages={[
        "/images/IMG_2749.jpeg",
        "/images/IMG_2946.jpeg",
        "/images/IMG_1524.jpeg",
        "/images/IMG_3522.jpeg",
      ]}
    />
  );
}
