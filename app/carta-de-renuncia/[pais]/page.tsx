import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getAllCountrySlugs } from "@/data/countries";
import ResignationLetterGenerator from "@/components/ResignationLetterGenerator";

type Props = {
  params: Promise<{ pais: string }>;
};

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ pais: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais } = await params;
  const country = countries[pais];
  if (!country) return {};
  return {
    title: `Carta de Renuncia ${country.name} 2026 | Gratis`,
    description: `Genera gratis tu carta de renuncia voluntaria en ${country.name} adaptada a su legislación laboral. Descárgala en segundos, sin registro.`,
    alternates: {
      canonical: `https://calculalaboral.net/carta-de-renuncia/${pais}`,
    },
    openGraph: {
      title: `Carta de Renuncia ${country.name} 2026`,
      description: `Carta de renuncia gratuita y descargable para ${country.name}.`,
      type: "website",
    },
  };
}

export default async function CartaPaisPage({ params }: Props) {
  const { pais } = await params;
  const country = countries[pais];
  if (!country) notFound();

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/carta-de-renuncia"
            className="hover:text-blue-600 transition-colors"
          >
            Carta de Renuncia
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{country.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Gratis · Sin registro · Descargable
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Carta de Renuncia Voluntaria — {country.name} 2026
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Rellena los datos del formulario y genera al instante tu carta de
            renuncia adaptada a la legislación laboral de {country.name}.
          </p>
        </div>

        {/* Generator */}
        <ResignationLetterGenerator
          countrySlug={country.slug}
          countryName={country.name}
        />

        {/* Related links */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Calcula también tu finiquito o liquidación en {country.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {country.calculators.slice(0, 4).map((calc) => (
              <Link
                key={calc.slug}
                href={`/${country.slug}/${calc.slug}`}
                className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                {calc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
