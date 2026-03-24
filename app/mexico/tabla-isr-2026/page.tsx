import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tabla ISR 2026 México – Tarifas Mensuales y Anuales Actualizadas",
  description:
    "Tabla completa del ISR 2026 en México: tarifas mensuales y anuales del Artículo 96 LISR, cómo calcular el impuesto paso a paso, subsidio al empleo y deducciones personales.",
  openGraph: {
    title: "Tabla ISR 2026 México – Tarifas y Cálculo",
    description: "Tarifas del Impuesto Sobre la Renta 2026 para trabajadores asalariados en México. Tabla mensual, anual y subsidio al empleo.",
    type: "website",
  },
  alternates: { canonical: "https://calculalaboral.net/mexico/tabla-isr-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo se calcula el ISR mensual en México 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ubica tu ingreso gravable en la tabla del Art. 96 LISR, resta el límite inferior del rango, multiplica por el porcentaje marginal y suma la cuota fija. Luego resta el subsidio al empleo si aplica. Fórmula: ISR = Cuota fija + (Ingreso – Límite inferior) × % marginal – Subsidio al empleo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ISR me retienen con un salario de $20,000 pesos en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con $20,000 MXN mensual de ingreso gravable, el ISR aproximado es: cuota fija $1,640.18 + ($20,000 – $15,487.72) × 21.36% = $1,640.18 + $963.92 = $2,604.10 de ISR bruto. Resta el subsidio al empleo si aplica (generalmente cero para este nivel).",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "México", item: "https://calculalaboral.net/mexico" },
    { "@type": "ListItem", position: 3, name: "Tabla ISR 2026", item: "https://calculalaboral.net/mexico/tabla-isr-2026" },
  ],
};

const tablaISRMensual = [
  { limInf: 0.01, limSup: 746.04, cuota: 0.00, pct: 1.92 },
  { limInf: 746.05, limSup: 6332.05, cuota: 14.32, pct: 6.40 },
  { limInf: 6332.06, limSup: 11128.01, cuota: 371.83, pct: 10.88 },
  { limInf: 11128.02, limSup: 12935.82, cuota: 893.63, pct: 16.00 },
  { limInf: 12935.83, limSup: 15487.71, cuota: 1182.88, pct: 17.92 },
  { limInf: 15487.72, limSup: 31236.49, cuota: 1640.18, pct: 21.36 },
  { limInf: 31236.50, limSup: 49233.00, cuota: 5004.12, pct: 23.52 },
  { limInf: 49233.01, limSup: 93993.90, cuota: 9236.89, pct: 30.00 },
  { limInf: 93993.91, limSup: 125325.20, cuota: 22665.17, pct: 32.00 },
  { limInf: 125325.21, limSup: 375975.61, cuota: 32691.18, pct: 34.00 },
  { limInf: 375975.62, limSup: null, cuota: 117912.32, pct: 35.00 },
];

const subsidioEmpleo = [
  { limInf: 0.01, limSup: 1768.96, subsidio: 407.02 },
  { limInf: 1768.97, limSup: 1978.70, subsidio: 406.83 },
  { limInf: 1978.71, limSup: 2653.38, subsidio: 406.62 },
  { limInf: 2653.39, limSup: 3472.84, subsidio: 392.77 },
  { limInf: 3472.85, limSup: 3537.87, subsidio: 382.46 },
  { limInf: 3537.88, limSup: 4446.15, subsidio: 354.23 },
  { limInf: 4446.16, limSup: 4717.18, subsidio: 324.87 },
  { limInf: 4717.19, limSup: 5335.42, subsidio: 294.63 },
  { limInf: 5335.43, limSup: 6224.67, subsidio: 253.54 },
  { limInf: 6224.68, limSup: 7113.90, subsidio: 217.61 },
  { limInf: 7113.91, limSup: 7382.33, subsidio: 195.58 },
  { limInf: 7382.34, limSup: 10171.18, subsidio: 0.00 },
];

function fmt(n: number) {
  return n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TablaISR2026Page() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/mexico" className="hover:text-blue-600 transition-colors">México</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Tabla ISR 2026</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-red-50 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            México · 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Tabla ISR 2026 México
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tarifas mensuales y anuales del Impuesto Sobre la Renta (ISR) para trabajadores asalariados en México,
            actualizadas para 2026. Incluye subsidio al empleo y guía de cálculo paso a paso.
          </p>
        </div>

        {/* Tabla ISR mensual */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Tarifa ISR mensual 2026 (Art. 96 LISR)</h2>
            <p className="text-sm text-slate-500 mt-1">Aplicable a retenciones de sueldos y salarios</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Límite inferior ($)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Límite superior ($)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Cuota fija ($)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">% s/excedente</th>
                </tr>
              </thead>
              <tbody>
                {tablaISRMensual.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">{fmt(row.limInf)}</td>
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.limSup ? fmt(row.limSup) : "En adelante"}
                    </td>
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">{fmt(row.cuota)}</td>
                    <td className="text-right px-4 py-2.5 font-semibold text-blue-700">{row.pct.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cómo calcular */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">¿Cómo calcular el ISR mensual?</h2>
          <ol className="space-y-3 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">1</span>
              <span>Determina tu <strong>ingreso gravable mensual</strong> (salario bruto menos deducciones autorizadas como IMSS).</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">2</span>
              <span>Ubica en la tabla el rango donde cae tu ingreso gravable (entre límite inferior y límite superior).</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">3</span>
              <span>Calcula: <strong>ISR bruto = Cuota fija + (Ingreso gravable – Límite inferior) × % sobre excedente</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">4</span>
              <span>Resta el <strong>subsidio al empleo</strong> si tu ingreso está en el rango de la tabla de subsidio (ver abajo).</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">5</span>
              <span>El resultado es el <strong>ISR a retener</strong>. Si el subsidio supera el ISR, en algunos casos el empleador debe entregar la diferencia al trabajador.</span>
            </li>
          </ol>

          <div className="mt-5 bg-slate-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Ejemplo práctico:</p>
            <p className="text-sm text-slate-600">
              Ingreso gravable: <strong>$20,000 MXN</strong><br />
              Rango: $15,487.72 – $31,236.49 → Cuota fija $1,640.18, tasa 21.36%<br />
              ISR = $1,640.18 + ($20,000 – $15,487.72) × 21.36% = $1,640.18 + $963.92 = <strong>$2,604.10</strong>
            </p>
          </div>
        </div>

        {/* Subsidio al empleo */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Tabla subsidio al empleo mensual 2026</h2>
            <p className="text-sm text-slate-500 mt-1">Se resta del ISR calculado para ingresos hasta ~$10,171 MXN</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Ingreso mensual desde ($)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Hasta ($)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Subsidio ($)</th>
                </tr>
              </thead>
              <tbody>
                {subsidioEmpleo.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="text-right px-4 py-2 font-mono text-slate-700">{fmt(row.limInf)}</td>
                    <td className="text-right px-4 py-2 font-mono text-slate-700">{fmt(row.limSup)}</td>
                    <td className="text-right px-4 py-2 font-semibold text-emerald-700">{fmt(row.subsidio)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Preguntas frecuentes ISR 2026</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿El ISR se descuenta del salario bruto o neto?</h3>
              <p className="text-sm text-slate-600">El ISR se calcula sobre el <strong>ingreso gravable</strong>, que es el salario bruto menos las deducciones autorizadas (cuotas IMSS, etc.) y las exenciones. No se aplica sobre el salario bruto completo.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Qué pasa si tengo más de un empleador?</h3>
              <p className="text-sm text-slate-600">Si tienes dos o más empleadores simultáneos, cada uno retiene ISR de forma independiente. Al presentar tu declaración anual (en abril), debes integrar todos los ingresos y es probable que resulte un ISR adicional a pagar.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Puedo pedir devolución de ISR?</h3>
              <p className="text-sm text-slate-600">Sí. Si en tu declaración anual resulta que pagaste más ISR del que correspondía (por deducciones personales como gastos médicos, hipoteca, etc.), el SAT te devuelve la diferencia. Se presenta en abril del año siguiente.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-800">Calcula tu salario neto exacto</p>
            <p className="text-sm text-slate-600">Usa nuestra calculadora para ver cuánto cobras después de ISR e IMSS</p>
          </div>
          <Link
            href="/mexico/calculadora-nomina-neta"
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Calcular nómina neta &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
