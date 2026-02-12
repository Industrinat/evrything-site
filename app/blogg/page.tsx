import Link from 'next/link';
import { getNews, formatDate } from '@/lib/api';
import { Calendar, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Blogg - Nyheter från Evrything AB',
  description: 'Senaste nytt om transport, logistik och leveranser från Evrything AB.',
};

export const revalidate = 60;

export default async function BloggPage() {
  const news = await getNews();

  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Tillbaka
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Blogg & Nyheter</h1>
          <p className="text-gray-600 mt-2">Senaste nytt från Evrything AB</p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Inga nyheter publicerade ännu.</p>
            <p className="text-gray-400 mt-2">Kom tillbaka snart!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/blogg/${item.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100"
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.publishedAt || item.createdAt)}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h2>
                  {item.excerpt && (
                    <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                  )}
                  <span className="inline-block mt-4 text-blue-600 font-medium group-hover:text-blue-800">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}