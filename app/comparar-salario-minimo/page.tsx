import type { Metadata } from "next";
import Link from "next/link";
import { salariosMinimos } from "@/data/salarios-minimos";

export const metadata: Metadata = {
  title: "Comparativa Salario Mínimo Latinoamérica 2026 – 10 Países",
  description:
    "Tabla comparativa del salario mínimo en 10 países hispanohablantes 2026: México, Colombia, España, Argentina, Chile, Perú, Ecuador, Venezuela, Costa Rica y Bolivia. Equivalencia en USD.",
  openGraph: {
    title: "Comparativa Salario Mínimo Latinoamérica y España 2026",
    description:
      "¿Cuál es el salario mínimo más alto? Compara los 10 países: salario mensual, diario, por hora y equivalencia en dólares.",
    type: "website",
  },
  alternates: { canonical: "https://calculalaboral.net/comparar-salario-minimo" },
};

const tableJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Salario Mínimo por País 2026",
  description: "Comparativa del salario mínimo mensual en 10 países hispanohablantes para 2026, con equivalencia en USD.",
  url: "https://calculalaboral.net/comparar-salario-minimo",
  creator: { "@type": "Organization", name: "CalculaLaboral", url: "https://calculalaboral.net" },
  temporalCoverage: "2026",
  spatialCoverage: "América Latina y España",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué país tiene el salario mínimo más alto en Latinoamérica en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En términos de poder adquisitivo en USD, España tiene el salario mínimo más alto con 1.184 € mensuales (≈ $1.290 USD). Entre los países latinoamericanos, Costa Rica lidera con aproximadamente $638 USD mensuales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto es el salario mínimo en México en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El salario mínimo en México para 2026 es de $2.984,72 MXN mensuales (≈ $149 USD), equivalente a $99,49 MXN diarios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto es el salario mínimo en Colombia en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El salario mínimo en Colombia para 2026 es de $1.423.500 COP mensuales (≈ $346 USD).",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Comparar Salario Mínimo", item: "https://calculalaboral.net/comparar-salario-minimo" },
  ],
};

function formatAmount(amount: number, symbol: string, currency: string): string {
  if (amount >= 1_000_000) {
    return `${symbol}${(amount / 1_000_000).toFixed(2)}M ${currency}`;
  }
  if (amount >= 1_000) {
    return `${symbol}${amount.toLocaleString("es-ES", { maximumFractionDigits: 0 })} ${currency}`;
  }
  return `${symbol}${amount.toLocaleString("es-ES", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${currency}`;
}

export default function CompararSalarioMinimoPage() {
  const sorted = [...salariosMinimos].sort((a, b) => b.amountUSD - a.amountUSD);

  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Comparar Salario Mínimo</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Actualizado 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Comparativa Salario Mínimo 2026: 10 Países
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            ¿Cuánto gana un trabajador con salario mínimo en cada país? Compara México, Colombia,
            España, Argentina, Chile, Perú, Ecuador, Venezuela, Costa Rica y Bolivia — con equivalencia
            en dólares para una comparación justa.
          </p>
        </div>

        {/* Main table */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">#</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">País</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">Salario mensual</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">≈ USD/mes</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700 hidden sm:table-cell">Salario diario</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700 hidden md:table-cell">Salario/hora</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((s, i) => (
                  <tr key={s.countrySlug} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-slate-400 font-mono">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/${s.countrySlug}/salario-minimo`}
                        className="font-medium text-slate-800 hover:text-blue-700 transition-colors"
                      >
                        {s.countryName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-700">
                      {formatAmount(s.amount, s.currencySymbol, s.currency)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-semibold text-emerald-700">${s.amountUSD}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-500 hidden sm:table-cell font-mono">
                      {formatAmount(s.salarioDiario, s.currencySymbol, "")}
                    </td>
                    <td className="px-4 py-3 text-right text-slate-500 hidden md:table-cell font-mono">
                      {formatAmount(s.salarioHora, s.currencySymbol, "")}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/${s.countrySlug}/salario-minimo`}
                        className="text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap"
                      >
                        Ver detalle &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 px-4 py-3 border-t border-slate-100">
            Datos actualizados a enero 2026. Equivalencias USD aproximadas según tipo de cambio de referencia.
          </p>
        </div>

        {/* Insights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">Más alto (USD)</p>
            <p className="text-2xl font-bold text-emerald-800">{sorted[0].countryName}</p>
            <p className="text-sm text-emerald-700">${sorted[0].amountUSD} USD/mes</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Mediana (USD)</p>
            <p className="text-2xl font-bold text-blue-800">${sorted[Math.floor(sorted.length / 2)].amountUSD}</p>
            <p className="text-sm text-blue-700">promedio aprox. región</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Más bajo (USD)</p>
            <p className="text-2xl font-bold text-slate-700">{sorted[sorted.length - 1].countryName}</p>
            <p className="text-sm text-slate-500">${sorted[sorted.length - 1].amountUSD} USD/mes</p>
          </div>
        </div>

        {/* FAQ section */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Qué país tiene el salario mínimo más alto en Latinoamérica en 2026?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                En términos de poder adquisitivo en USD, <strong>España</strong> lidera con 1.184 € mensuales (≈ $1.290 USD).
                Entre los países latinoamericanos, <strong>Costa Rica</strong> encabeza la lista seguida de <strong>Chile</strong>.
                México y Colombia se sitúan en la parte baja, aunque en los últimos años han registrado aumentos importantes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Por qué España tiene un salario mínimo tan alto comparado con Latinoamérica?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                España es un país de la Unión Europea con un nivel de vida y coste de vida significativamente mayor. El SMI español se fija en euros,
                una moneda fuerte, y debe cubrir los gastos básicos en un mercado europeo. La diferencia refleja distintos niveles de desarrollo
                económico, productividad e inflación entre regiones.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿El salario mínimo cubre las necesidades básicas en estos países?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                En la mayoría de los países la respuesta es negativa según estudios de canasta básica. En México, Colombia y Bolivia
                el salario mínimo suele ser inferior al costo de la canasta básica familiar. España y Costa Rica tienen mayor
                cobertura relativa. Este es uno de los debates centrales en la política laboral de la región.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Cuándo se actualizan los salarios mínimos?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La mayoría de los países actualiza el salario mínimo una vez al año, generalmente en enero. Colombia y Bolivia
                lo ajustan según la inflación del año anterior y negociaciones tripartitas. España lo fija mediante decreto del
                Gobierno. Venezuela lo actualiza con mayor frecuencia dada su situación económica.
              </p>
            </div>
          </div>
        </div>

        {/* Links to each country */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-base font-bold text-slate-800 mb-4">Detalles por país</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {salariosMinimos.map((s) => (
              <Link
                key={s.countrySlug}
                href={`/${s.countrySlug}/salario-minimo`}
                className="flex flex-col items-center p-3 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-center group"
              >
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{s.countryName}</span>
                <span className="text-xs text-emerald-600 font-semibold mt-1">${s.amountUSD} USD</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
