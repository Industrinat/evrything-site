// app/blogg/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNews, getNewsItem, formatDate } from '@/lib/api';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsItem(slug);
  
  if (!item) {
    return { title: 'Nyhet hittades inte' };
  }

  const imageUrl = item.image || null;

  return {
    title: `${item.title} | Evrything AB`,
    description: item.excerpt || '',
    openGraph: {
      title: item.title,
      description: item.excerpt || '',
      url: `https://evrything.flowen.eu/blogg/${slug}`,
      siteName: 'Evrything AB',
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: item.title }] : [],
      locale: 'sv_SE',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.excerpt || '',
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function NewsItemPage({ params }: Props) {
  const { slug } = await params;
  const item = await getNewsItem(slug);

  if (!item) {
    notFound();
  }

  const allNews = await getNews();
  const relatedNews = allNews.filter((n) => n.slug !== slug).slice(0, 2);

  return (
    <main>
      <Navbar />
      <section className="relative h-[400px] bg-gray-900">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-contain opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blogg"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tillbaka till nyheter
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {item.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(item.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {item.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-600 ml-4">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Dela:
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://evrything.flowen.eu/blogg/${item.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://evrything.flowen.eu/blogg/${item.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {relatedNews.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Fler nyheter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  href={`/blogg/${related.slug}`}
                  className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex"
                >
                  <div className="relative w-32 h-32 flex-shrink-0 bg-gray-200">
                    {related.image && (
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-sm text-gray-500 mb-1">
                      {formatDate(related.publishedAt)}
                    </span>
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Behöver ni hjälp med transport och logistik?
          </h2>
          <p className="text-gray-400 mb-8">
            Kontakta oss för snabb offert.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </main>
  );
}