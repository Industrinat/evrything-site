import ServicePage from '@/components/ServicePage'
import { Truck } from 'lucide-react'

export default function TransportDistribution() {
  return (
    <ServicePage
      title="Transport & Distribution"
      subtitle="Tjänst"
      description="Vi löser alla typer av transporter oavsett storlek eller destination. Från enstaka paket till storskalig distribution – vi anpassar lösningen efter era behov."
      heroImage="/images/IMG_1038.jpeg"
      icon={Truck}
      seoTitle="Transport och distribution i Göteborg och hela Sverige"
      seoText={[
        "Evrything AB erbjuder professionell transport och distribution för företag i Göteborg, Stockholm, Malmö och hela Norden. Med dagliga rutter mellan Sveriges största städer och ett brett nätverk av fordon kan vi hantera allt från enstaka paket till storskaliga distributionslösningar.",
        "Vår transporttjänst är utformad för att ge er maximal flexibilitet. Vi erbjuder både samlastning för kostnadseffektiva leveranser och dedikerade transporter för tidskritiskt gods. Oavsett om ni behöver regelbundna leveranser eller en engångstransport hittar vi rätt lösning.",
        "Som ert lokala transportföretag i Göteborg kombinerar vi snabbhet med personlig service. Ni har alltid en fast kontaktperson som känner era behov och kan agera snabbt när det behövs. Vi erbjuder spårning, leveransbekräftelser och proaktiv kommunikation genom hela leveranskedjan.",
      ]}
      featuresTitle="Vårt transporterbjudande"
      features={[
        { title: "Flexibla fordon", desc: "Vi har tillgång till allt från lätta budbilar till tyngre lastbilar för att matcha ert gods." },
        { title: "Dagliga rutter", desc: "Regelbundna körningar mellan Göteborg, Stockholm, Malmö och fler städer varje dag." },
        { title: "Spårning i realtid", desc: "Följ era leveranser och få uppdateringar om leveransstatus." },
        { title: "Samlastning", desc: "Kostnadseffektiv lösning där ert gods samlastar med andra sändningar på samma rutt." },
        { title: "Dedikerade transporter", desc: "Hela fordonet reserverat för er sändning – perfekt för tidskritiska eller känsliga leveranser." },
        { title: "Last mile", desc: "Sista milen-leverans direkt till slutkund med bärhjälp vid behov." },
      ]}
      detailsTitle="Från bokning till leverans"
      details={[
        "Kontakta oss med information om ert gods – vikt, mått, upphämtning och leveransadress.",
        "Vi presenterar den bästa lösningen och en fast prisuppgift inom 1 timma.",
        "Upphämtning sker enligt överenskommelse – ofta redan samma dag.",
        "Leverans till mottagaren med avisering och möjlighet till spårning.",
        "Leveransbekräftelse skickas till er direkt efter slutförd transport.",
      ]}
      galleryImages={[
        "/images/IMG_0086.jpeg",
        "/images/IMG_2818.jpeg",
        "/images/IMG_3758.jpeg",
        "/images/IMG_7232.jpeg",
      ]}
    />
  );
}
