import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCountrySlugs } from "@/data/countries";
import { getFestivos } from "@/data/festivos";

type Props = {
  params: Promise<{ pais: string }>;
};

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ pais: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais } = await params;
  const data = getFestivos(pais);
  if (!data) return {};
  return {
    title: `Días Festivos ${data.countryName} ${data.year} | Calendario Oficial`,
    description: `Calendario completo de días festivos y feriados en ${data.countryName} para ${data.year}. ${data.festivos.length} festivos oficiales con fechas, nombres y tipo.`,
    alternates: {
      canonical: `https://calculalaboral.net/${pais}/dias-festivos-2026`,
    },
    openGraph: {
      title: `Días Festivos ${data.countryName} ${data.year}`,
      description: `${data.festivos.length} festivos oficiales en ${data.countryName} para ${data.year}.`,
      type: "website",
    },
  };
}

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const WEEKDAYS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];

function formatFecha(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const weekday = WEEKDAYS[date.getDay()];
  return `${weekday} ${day} de ${MONTHS[month - 1]}`;
}

function getMonth(iso: string): number {
  return parseInt(iso.split("-")[1], 10);
}

export default async function DiasFestivosPage({ params }: Props) {
  const { pais } = await params;
  const data = getFestivos(pais);
  if (!data) notFound();

  const obligatorios = data.festivos.filter((f) => f.type === "obligatorio");
  const opcionales = data.festivos.filter((f) => f.type === "opcional");

  // Group by month
  const byMonth: Record<number, typeof data.festivos> = {};
  for (const f of data.festivos) {
    const m = getMonth(f.date);
    if (!byMonth[m]) byMonth[m] = [];
    byMonth[m].push(f);
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuántos días festivos tiene ${data.countryName} en ${data.year}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${data.countryName} tiene ${data.festivos.length} días festivos en ${data.year}: ${obligatorios.length} obligatorios${opcionales.length > 0 ? ` y ${opcionales.length} opcionales` : ""}.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Qué pasa si trabajo en un día festivo en ${data.countryName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: data.notaLegal,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href={`/${pais}`} className="hover:text-blue-600 transition-colors">{data.countryName}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Días Festivos {data.year}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Días Festivos {data.countryName} {data.year}
              </h1>
              <p className="text-slate-600">
                {data.festivos.length} festivos oficiales &mdash;{" "}
                {obligatorios.length} obligatorios
                {opcionales.length > 0 && `, ${opcionales.length} opcionales`}
              </p>
            </div>

            {/* Tabla completa */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs text-slate-500 uppercase border-b border-slate-200">
                    <th className="text-left px-5 py-3 font-medium">Fecha</th>
                    <th className="text-left px-5 py-3 font-medium">Festivo</th>
                    <th className="text-right px-5 py-3 font-medium hidden sm:table-cell">Tipo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.festivos.map((f) => (
                    <tr key={f.date} className="hover:bg-slate-50">
                      <td className="px-5 py-3 text-slate-500 whitespace-nowrap">
                        {formatFecha(f.date)}
                      </td>
                      <td className="px-5 py-3 text-slate-800 font-medium">{f.name}</td>
                      <td className="px-5 py-3 text-right hidden sm:table-cell">
                        {f.type === "obligatorio" ? (
                          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                            Obligatorio
                          </span>
                        ) : (
                          <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                            Opcional
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Resumen por mes */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-base font-bold text-slate-800 mb-4">
                Festivos por mes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(byMonth).map(([month, festivos]) => (
                  <div
                    key={month}
                    className="bg-slate-50 rounded-lg px-4 py-3 flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-700 font-medium">
                      {MONTHS[parseInt(month) - 1]}
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {festivos.length}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nota legal */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-amber-800 mb-2">
                ¿Qué pasa si trabajo en festivo?
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">{data.notaLegal}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Resumen stats */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                Resumen {data.year}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Total festivos</span>
                  <span className="text-lg font-black text-slate-900">{data.festivos.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Obligatorios</span>
                  <span className="font-bold text-blue-700">{obligatorios.length}</span>
                </div>
                {opcionales.length > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Opcionales</span>
                    <span className="font-bold text-slate-500">{opcionales.length}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Meses sin festivos</span>
                  <span className="font-bold text-slate-500">
                    {12 - Object.keys(byMonth).length}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA horas extra */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-700 mb-2">
                ¿Trabajaste en festivo?
              </p>
              <p className="text-sm text-slate-600 mb-4">
                Calcula cuánto te deben pagar por las horas trabajadas en días festivos.
              </p>
              <Link
                href={`/${pais}/calculadora-horas-extra`}
                className="block text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Calcular horas extra &rarr;
              </Link>
            </div>

            {/* Link país */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-700 mb-3">
                Calculadoras laborales para {data.countryName}
              </p>
              <Link
                href={`/${pais}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Ver todas las calculadoras &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
