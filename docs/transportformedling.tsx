import ServicePage from '@/components/ServicePage'
import { Package } from 'lucide-react'

export default function Transportformedling() {
  return (
    <ServicePage
      title="Transportförmedling"
      subtitle="Tjänst"
      description="Med många års erfarenhet matchar vi ert transportbehov med rätt lösning och rätt fordon. Vi har ett brett nätverk av pålitliga transportörer i hela Norden."
      heroImage="/images/IMG_3795.jpeg"
      icon={Package}
      seoTitle="Transportförmedling i Göteborg – rätt fordon för rätt uppdrag"
      seoText={[
        "Evrything AB är en erfaren transportförmedlare baserad i Göteborg med ett brett nätverk av kvalitetssäkrade transportörer i hela Norden och Europa. Vi matchar ert transportbehov med rätt fordonstyp och rätt pris – från sprinter till full trailer.",
        "Som er transportförmedlare tar vi hand om hela processen. Ni har en dedikerad kontaktperson som koordinerar upphämtning, transport och leverans. Vi jämför och förhandlar med våra partners för att ge er det bästa priset utan att kompromissa med kvalitet eller leveranssäkerhet.",
        "Alla transportörer i vårt nätverk är noggrant utvalda och kontrollerade. Vi ställer höga krav på fordon, försäkringar och leveransprecision. Genom att samla era transportbehov hos en partner får ni bättre priser, enklare administration och full kontroll över era logistikflöden.",
      ]}
      featuresTitle="Fördelar med transportförmedling"
      features={[
        { title: "Brett nätverk", desc: "Tillgång till hundratals fordon genom vårt nätverk av kvalitetssäkrade transportörer." },
        { title: "Rätt fordon", desc: "Vi matchar ert gods med rätt fordonstyp – från sprinter till trailer." },
        { title: "En kontaktperson", desc: "Ni har alltid en dedikerad kontaktperson som sköter allt åt er." },
        { title: "Prisoptimering", desc: "Vi jämför och förhandlar för att ge er det bästa priset utan att tumma på kvalitet." },
        { title: "Kvalitetssäkring", desc: "Alla transportörer i vårt nätverk är noggrant utvalda och kontrollerade." },
        { title: "Flexibilitet", desc: "Snabb omställning vid ändrade behov – vi hittar alltid en lösning." },
      ]}
      detailsTitle="Så förmedlar vi er transport"
      details={[
        "Berätta om ert transportbehov – volym, frekvens, specialkrav och budget.",
        "Vi analyserar och matchar med den bästa transportören i vårt nätverk.",
        "Ni får en offert med tydliga villkor och priser.",
        "Vi koordinerar upphämtning, transport och leverans.",
        "Löpande uppföljning och optimering av era transportflöden.",
      ]}
      galleryImages={[
        "/images/IMG_7222.jpeg",
        "/images/IMG_0075.jpeg",
        "/images/IMG_2744.jpeg",
        "/images/IMG_3522.jpeg",
      ]}
    />
  );
}
