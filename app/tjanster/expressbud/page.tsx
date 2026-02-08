import ServicePage from '@/components/ServicePage'
import { Zap } from 'lucide-react'

export default function Expressbud() {
  return (
    <ServicePage
      title="Expressbud & Ontime"
      subtitle="Tjänst"
      description="Expresstransporter och direktkörningar dygnet runt. Vi agerar omgående och levererar i tid, varje gång. När det verkligen gäller – ring oss."
      heroImage="/images/IMG_0576.jpeg"
      icon={Zap}
      seoTitle="Expressbud och ontime-leveranser i Göteborg – dygnet runt"
      seoText={[
        "När tiden är avgörande behöver ni en transportpartner som agerar omgående. Evrything AB erbjuder expressbud och ontime-leveranser dygnet runt, 365 dagar om året. Vi är specialiserade på brådskande transporter där varje minut räknas.",
        "Våra expresstjänster inkluderar direktkörningar utan samlastning eller mellanstopp. Från samtalet till upphämtning tar det vanligtvis under 60 minuter i Göteborgsområdet. Vi garanterar leverans inom avtalad tid och håller er uppdaterade genom hela processen.",
        "Vi hanterar allt från brådskande dokumentleveranser och reservdelar till akuta palleveranser och tidskritiska produktionsmaterial. Med vår fordonsflotta och erfarna förare kan vi lösa även de mest komplexa expressuppdragen – snabbt, säkert och pålitligt.",
      ]}
      featuresTitle="Expresstjänster dygnet runt"
      features={[
        { title: "Dygnet runt", desc: "Vi är tillgängliga 24/7, 365 dagar om året. Ring när som helst – vi rycker ut direkt." },
        { title: "Direktkörning", desc: "Hela fordonet dedikerat till er sändning. Ingen samlastning, inga stopp på vägen." },
        { title: "Ontime-garanti", desc: "Vi levererar inom avtalad tid. Punkt. Ingen leverans är för brådskande för oss." },
        { title: "Samma dag", desc: "Upphämtning och leverans samma dag inom Göteborgsområdet och närliggande städer." },
        { title: "Snabb respons", desc: "Från samtal till upphämtning på under 60 minuter i Göteborg." },
        { title: "Alla storlekar", desc: "Från kuvert och dokument till pallar och tungt gods – vi fixar det." },
      ]}
      detailsTitle="Så snabbt går det"
      details={[
        "Ring oss eller skicka en förfrågan – vi svarar omgående, dygnet runt.",
        "Vi bekräftar upphämtningstid och leveranstid direkt i samtalet.",
        "Föraren hämtar ert gods inom avtalad tid – ofta inom 30-60 minuter.",
        "Direktkörning till mottagaren utan mellanstopp.",
        "Leveransbekräftelse skickas direkt till er via SMS eller mail.",
      ]}
      galleryImages={[
        "/images/IMG_0086.jpeg",
        "/images/IMG_0099.jpeg",
        "/images/IMG_3758.jpeg",
        "/images/IMG_7232.jpeg",
      ]}
    />
  );
}
