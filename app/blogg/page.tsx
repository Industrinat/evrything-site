// app/blogg/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getNews, formatDate } from '@/lib/api';
import { Calendar, ArrowLeft } from 'lucide-react';


export const metadata = {
  title: 'Blogg - Nyheter från Evrything AB',
  description: 'Senaste nytt om transport, logistik och leveranser från Evrything AB.',
  
};

export const revalidate = 60; // ISR - uppdatera var 60:e sekund

export default async function AktuelltPage() {
  const news = await getNews();

  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Nyheter</h1>
          <p className="text-gray-600 mt-2">Senaste nytt från Industrinät</p>
        </div>
        
        {news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Inga nyheter just nu.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/blogg/${item.slug}`}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Bild saknas
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.publishedAt)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
       )}

        {/* Äldre inlägg */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Äldre inlägg</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/boter-for-bristande-fallskydd"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                Böter för bristande fallskydd
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Fler böter utdöms för bristande fallskydd. Läs om aktuella fall och konsekvenser.
              </p>
              <span className="text-orange-500 text-sm font-semibold">Läs mer →</span>
            </Link>

            <Link
              href="/anvander-ni-ratt-typ-av-tillbehor"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                Använder ni rätt typ av tillbehör?
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Rätt tillbehör är avgörande för säker installation av skyddsnät.
              </p>
              <span className="text-orange-500 text-sm font-semibold">Läs mer →</span>
            </Link>

            <Link
              href="/fallande-foremal-en-allvarlig-risk-som-kraver-ratt-skydd"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                Fallande föremål – en allvarlig risk
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                En av de vanligaste riskerna på arbetsplatser och i offentliga miljöer.
              </p>
              <span className="text-orange-500 text-sm font-semibold">Läs mer →</span>
            </Link>

            <Link
              href="/fallskyddsnat-pa-for-golf"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                Fallskyddsnät för golf range
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Höjdbaserad standard för golfhallar och driving ranges.
              </p>
              <span className="text-orange-500 text-sm font-semibold">Läs mer →</span>
            </Link>

            <Link
              href="/sakerhet-borjar-dar-risken-slutar-synas-2"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                Säkerhet börjar där risken slutar synas
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Installation av skydd mot fallande föremål i offentliga miljöer.
              </p>
              <span className="text-orange-500 text-sm font-semibold">Läs mer →</span>
            </Link>

            <Link
              href="/tips-pa-forbattrad-sakerhet-med-skyddsnat"
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                Tips på förbättrad säkerhet
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Så väljer du rätt skyddsnät för industri, bygg och sportanläggningar.
              </p>
              <span className="text-orange-500 text-sm font-semibold">Läs mer →</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}