import ServicePage from '@/components/ServicePage'
import { Globe } from 'lucide-react'

export default function InrikesUtrikesfrakt() {
  return (
    <ServicePage
      title="Inrikes & Utrikesfrakt"
      subtitle="Tjänst"
      description="Frakt inom Sverige och internationellt. Vi har nätverk och erfarenhet för smidiga leveranser över gränserna – till Norge, Danmark och resten av Europa."
      heroImage="/images/IMG_0404.jpeg"
      icon={Globe}
      seoTitle="Inrikes och utrikesfrakt från Göteborg"
      seoText={[
        "Evrything AB erbjuder pålitlig frakt både inom Sverige och internationellt. Med dagliga avgångar från Göteborg når vi Stockholm, Malmö, Jönköping och övriga Sverige snabbt och kostnadseffektivt. Vår utrikesfrakt täcker hela Norden samt Europa.",
        "Vi har lång erfarenhet av gränsöverskridande transporter till Norge och Danmark med regelbundna rutter. För övriga Europa samarbetar vi med ett brett nätverk av pålitliga partners som säkerställer att ert gods når fram i tid oavsett destination.",
        "All nödvändig dokumentation och tullhantering sköts av oss, vilket gör processen enkel och smidig för er. Vi hanterar allt från enstaka paket och styckegods till hela lastbilar med pallgods – alltid med full spårbarhet och transparenta priser.",
      ]}
      featuresTitle="Fraktlösningar för alla behov"
      features={[
        { title: "Inrikes expressleverans", desc: "Snabba leveranser mellan alla svenska städer med möjlighet till leverans redan samma dag." },
        { title: "Nordisk frakt", desc: "Dagliga rutter till och från Norge och Danmark med konkurrenskraftiga priser." },
        { title: "Europafrakt", desc: "Genom vårt breda nätverk levererar vi till hela Europa – snabbt och pålitligt." },
        { title: "Tullhantering", desc: "Vi hjälper med all nödvändig dokumentation för internationella sändningar." },
        { title: "Temperaturkänsligt gods", desc: "Möjlighet till klimatkontrollerade transporter för känsliga varor." },
        { title: "Styckegodsfrakt", desc: "Kostnadseffektiv lösning för mindre sändningar som samlastar med andra." },
      ]}
      detailsTitle="Så bokar ni frakt"
      details={[
        "Berätta om ert gods och destination – vi hanterar allt från enstaka paket till pallgods.",
        "Vi tar fram den snabbaste och mest kostnadseffektiva fraktlösningen.",
        "All dokumentation och eventuell tullhantering sköts av oss.",
        "Upphämtning och leverans enligt överenskommelse med full spårbarhet.",
        "Ni får leveransbekräftelse och eventuella fraktdokument digitalt.",
      ]}
      galleryImages={[
        "/images/IMG_0075.jpeg",
        "/images/IMG_1491.jpeg",
        "/images/IMG_2744.jpeg",
        "/images/IMG_7222.jpeg",
      ]}
    />
  );
}
