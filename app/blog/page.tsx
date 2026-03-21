import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog Laboral 2026 | Guías y Calculadoras Gratuitas | CalculaLaboral",
  description:
    "Artículos y guías sobre derechos laborales en México, Colombia, España, Argentina, Chile, Perú y más. Aprende a calcular finiquito, liquidación, vacaciones y más.",
  openGraph: {
    title: "Blog Laboral 2026 | CalculaLaboral",
    description:
      "Guías sobre derechos laborales en 10 países hispanohablantes.",
    type: "website",
  },
};

const countryLabels: Record<string, string> = {
  mexico: "México",
  colombia: "Colombia",
  espana: "España",
  argentina: "Argentina",
  chile: "Chile",
  peru: "Perú",
  ecuador: "Ecuador",
  venezuela: "Venezuela",
  "costa-rica": "Costa Rica",
  bolivia: "Bolivia",
};

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-12 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800">Blog</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Blog Laboral
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Guías y artículos sobre derechos laborales en 10 países
            hispanohablantes. Todo lo que necesitas saber para conocer y
            defender tus derechos.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  {article.country ? (
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      {countryLabels[article.country] ?? article.country}
                    </span>
                  ) : (
                    <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Multi-país
                    </span>
                  )}
                  <span className="text-xs text-slate-400">
                    {formatDate(article.publishDate)}
                  </span>
                </div>
                <h2 className="text-base font-semibold text-slate-800 group-hover:text-blue-700 transition-colors mb-2 flex-1">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3 line-clamp-3">
                  {article.description}
                </p>
                <p className="text-sm font-medium text-blue-600 group-hover:text-blue-800">
                  Leer artículo &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
