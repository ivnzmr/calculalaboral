import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import ShareButtons from "@/components/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://calculalaboral.net/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 4);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate ?? article.publishDate,
    author: {
      "@type": "Organization",
      name: "CalculaLaboral",
      url: "https://calculalaboral.net",
    },
    publisher: {
      "@type": "Organization",
      name: "CalculaLaboral",
      url: "https://calculalaboral.net",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://calculalaboral.net/blog/${article.slug}`,
    },
    inLanguage: "es",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://calculalaboral.net/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://calculalaboral.net/blog/${article.slug}` },
    ],
  };

  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 line-clamp-1">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article content */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              {/* Meta */}
              <div className="flex items-center gap-2 mb-4">
                {article.country ? (
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {article.countryName}
                  </span>
                ) : (
                  <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                    Multi-país
                  </span>
                )}
                <span className="text-xs text-slate-400">
                  Actualizado: {formatDate(article.publishDate)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                {article.title}
              </h1>
              <p className="text-slate-600 mb-4 text-base leading-relaxed">
                {article.description}
              </p>
              <div className="mb-6">
                <ShareButtons title={article.title} />
              </div>

              {/* Article body */}
              <div
                className="prose-article"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Disclaimer */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                La información de este artículo es orientativa y no constituye
                asesoramiento jurídico. Consulta siempre con un abogado o asesor
                laboral para tu caso concreto.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Related calculators */}
            {article.relatedCalculators.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                  Calculadoras relacionadas
                </p>
                <div className="space-y-2">
                  {article.relatedCalculators.map((calc) => (
                    <Link
                      key={`${calc.pais}-${calc.slug}`}
                      href={`/${calc.pais}/${calc.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                        {calc.name}
                      </span>
                      <span className="text-blue-500 text-xs">Calcular &rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other articles */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                Otros artículos
              </p>
              <div className="space-y-3">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="block text-sm text-slate-600 hover:text-blue-700 transition-colors leading-snug"
                  >
                    &ndash; {a.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/blog"
                className="mt-4 block text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Ver todos los artículos &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
