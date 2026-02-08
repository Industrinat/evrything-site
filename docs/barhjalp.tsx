import ServicePage from '@/components/ServicePage'
import { HandMetal } from 'lucide-react'

export default function Barhjalp() {
  return (
    <ServicePage
      title="Bärhjälp & Inbärningar"
      subtitle="Tjänst"
      description="Behöver ni hjälp med tunga lyft och inbärning? Vi bistår med professionell bärhjälp vid leverans – oavsett om det gäller möbler, maskiner eller byggmaterial."
      heroImage="/images/IMG_1225.jpeg"
      icon={HandMetal}
      seoTitle="Bärhjälp och inbärning i Göteborg och Västsverige"
      seoText={[
        "Evrything AB erbjuder professionell bärhjälp och inbärningstjänster i Göteborg och Västsverige. Vi hjälper företag och privatpersoner med tunga lyft, inbärning till rätt rum och hantering av skrymmande gods – allt från vitvaror och kontorsmöbler till industriella maskiner.",
        "Vår erfarna personal hanterar ert gods med omsorg och precision. Vi skyddar golv, väggar och dörröppningar under inbärningen och ser till att allt placeras exakt där ni vill ha det. Vi hanterar även trappor, trånga utrymmen och hissar utan problem.",
        "Tjänsten kan kombineras med våra övriga transporttjänster för en komplett lösning. Vi tar med oss emballage och förpackningsmaterial efter inbärningen och kan vid behov assistera med enklare montering. Ert gods är försäkrat under hela transporten och inbärningen.",
      ]}
      featuresTitle="Professionell bärhjälp"
      features={[
        { title: "Professionella bärare", desc: "Erfaren personal som hanterar ert gods med omsorg och precision." },
        { title: "Tunga lyft", desc: "Vi hanterar allt från vitvaror och möbler till industriella maskiner och utrustning." },
        { title: "Inbärning till rum", desc: "Leverans ända in i rätt rum – inte bara till dörren. Inkl. trappor och hiss." },
        { title: "Emballagehantering", desc: "Vi tar med oss emballage och förpackningsmaterial efter inbärningen." },
        { title: "Montering", desc: "Vid behov kan vi assistera med enklare montering och installation." },
        { title: "Försäkring", desc: "Ert gods är försäkrat under hela transporten och inbärningen." },
      ]}
      detailsTitle="Så bokar ni bärhjälp"
      details={[
        "Berätta vad som ska bäras in – vikt, antal, våningsplan och eventuella hinder.",
        "Vi planerar insatsen och ger er ett fast pris.",
        "Vårt team anländer med rätt utrustning vid avtalad tid.",
        "Inbärning sker varsamt till önskad plats med skydd av golv och väggar.",
        "Emballage och skräp tas med om ni önskar.",
      ]}
      galleryImages={[
        "/images/IMG_1038.jpeg",
        "/images/IMG_2818.jpeg",
        "/images/IMG_1491.jpeg",
        "/images/IMG_0404.jpeg",
      ]}
    />
  );
}
