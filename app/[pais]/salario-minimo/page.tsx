import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCountrySlugs } from "@/data/countries";
import { getSalarioMinimo } from "@/data/salarios-minimos";

type Props = {
  params: Promise<{ pais: string }>;
};

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ pais: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais } = await params;
  const data = getSalarioMinimo(pais);
  if (!data) return {};
  return {
    title: `Salario Mínimo ${data.countryName} ${data.year}`,
    description: `Salario mínimo en ${data.countryName} para ${data.year}: ${data.currencySymbol}${data.amount.toLocaleString("es")} ${data.periodLabel}. Tabla histórica, equivalencia en USD y calculadora de nómina neta.`,
    openGraph: {
      title: `Salario Mínimo ${data.countryName} ${data.year}`,
      description: `${data.currencySymbol}${data.amount.toLocaleString("es")} ${data.periodLabel} — ${data.year}`,
      type: "website",
    },
  };
}

function formatAmount(amount: number, symbol: string): string {
  return `${symbol}${amount.toLocaleString("es", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

export default async function SalarioMinimoPage({ params }: Props) {
  const { pais } = await params;
  const data = getSalarioMinimo(pais);
  if (!data) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuánto es el salario mínimo en ${data.countryName} en ${data.year}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El salario mínimo en ${data.countryName} para ${data.year} es de ${data.currencySymbol}${data.amount.toLocaleString("es")} ${data.periodLabel}, equivalente a aproximadamente $${data.amountUSD} USD.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Cuánto es el salario mínimo diario en ${data.countryName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El salario mínimo diario en ${data.countryName} es de ${formatAmount(data.salarioDiario, data.currencySymbol)}.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Cuánto es el salario mínimo por hora en ${data.countryName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El salario mínimo por hora en ${data.countryName} es de ${formatAmount(data.salarioHora, data.currencySymbol)}, asumiendo una jornada laboral estándar.`,
        },
      },
    ],
  };

  const lastHistorico = data.historico[data.historico.length - 1];
  const prevHistorico = data.historico[data.historico.length - 2];
  const variacionActual = prevHistorico
    ? (((lastHistorico.amount - prevHistorico.amount) / prevHistorico.amount) * 100).toFixed(1)
    : null;

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
          <span className="text-slate-800">Salario Mínimo {data.year}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero card */}
            <div className="bg-emerald-600 text-white rounded-2xl p-8">
              <p className="text-emerald-200 text-sm font-medium uppercase tracking-wide mb-1">
                Salario mínimo {data.countryName} {data.year}
              </p>
              <p className="text-5xl sm:text-6xl font-black mb-2">
                {formatAmount(data.amount, data.currencySymbol)}
              </p>
              <p className="text-emerald-100 text-lg mb-4">{data.periodLabel}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-emerald-700 rounded-lg px-4 py-2">
                  <p className="text-emerald-200 text-xs">Equivalente USD</p>
                  <p className="font-bold text-white">${data.amountUSD} USD</p>
                </div>
                <div className="bg-emerald-700 rounded-lg px-4 py-2">
                  <p className="text-emerald-200 text-xs">Salario diario</p>
                  <p className="font-bold text-white">{formatAmount(data.salarioDiario, data.currencySymbol)}</p>
                </div>
                <div className="bg-emerald-700 rounded-lg px-4 py-2">
                  <p className="text-emerald-200 text-xs">Salario por hora</p>
                  <p className="font-bold text-white">{formatAmount(data.salarioHora, data.currencySymbol)}</p>
                </div>
                {variacionActual && (
                  <div className="bg-emerald-700 rounded-lg px-4 py-2">
                    <p className="text-emerald-200 text-xs">Variación vs {data.year - 1}</p>
                    <p className="font-bold text-white">+{variacionActual}%</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tabla histórica */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4">
                Histórico del salario mínimo en {data.countryName}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-slate-500 uppercase border-b border-slate-200">
                      <th className="text-left pb-3 font-medium">Año</th>
                      <th className="text-right pb-3 font-medium">Salario mínimo ({data.currency})</th>
                      <th className="text-right pb-3 font-medium">Variación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[...data.historico].reverse().map((h, i) => (
                      <tr key={h.year} className={i === 0 ? "bg-emerald-50" : ""}>
                        <td className="py-3 font-semibold text-slate-800">
                          {h.year}
                          {i === 0 && (
                            <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
                              Actual
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-right text-slate-700">
                          {formatAmount(h.amount, data.currencySymbol)}
                        </td>
                        <td className="py-3 text-right">
                          {h.variacion > 0 ? (
                            <span className="text-emerald-600 font-medium">+{h.variacion.toFixed(1)}%</span>
                          ) : h.variacion < 0 ? (
                            <span className="text-red-500 font-medium">{h.variacion.toFixed(1)}%</span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notas */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-3">
                ¿Cómo se fija el salario mínimo en {data.countryName}?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{data.notas}</p>
              <p className="text-xs text-slate-400 mt-3">
                Última actualización: {data.updatedDate}. Los datos son orientativos.
                Verifica siempre con las autoridades laborales de {data.countryName}.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* CTA calculadora */}
            {data.calculadoraSlug && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  ¿Cuánto cobras realmente?
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Calcula tu nómina neta: cuánto recibes después de impuestos y deducciones.
                </p>
                <Link
                  href={`/${pais}/${data.calculadoraSlug}`}
                  className="block text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Calcular nómina neta &rarr;
                </Link>
              </div>
            )}

            {/* FAQ */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                Preguntas frecuentes
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-800 mb-1">
                    ¿El salario mínimo incluye bonos?
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    El salario mínimo es la base. Bonos, comisiones y prestaciones se suman aparte según la legislación de cada país.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 mb-1">
                    ¿Qué pasa si cobro menos del mínimo?
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Es ilegal. Puedes denunciarlo ante la autoridad laboral de tu país para reclamar la diferencia.
                  </p>
                </div>
              </div>
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
