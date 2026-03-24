import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tramos IRPF 2026 España – Tabla Completa y Cómo Funciona",
  description:
    "Tabla de tramos del IRPF 2026 en España: escala estatal y autonómica, tipos marginales, cómo calcular tu retención y qué deducciones puedes aplicar para pagar menos.",
  openGraph: {
    title: "Tramos IRPF 2026 España – Tabla y Cálculo",
    description: "Escala completa del IRPF 2026: tramos, tipos marginales, retención en nómina y deducciones. Actualizado para la campaña de la Renta 2025-2026.",
    type: "website",
  },
  alternates: { canonical: "https://calculalaboral.net/espana/tramos-irpf-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuáles son los tramos del IRPF en España en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los tramos del IRPF estatal en 2026 son: hasta 12.450€ → 9,50%; de 12.450€ a 20.200€ → 12%; de 20.200€ a 35.200€ → 15%; de 35.200€ a 60.000€ → 18,50%; de 60.000€ a 300.000€ → 22,50%; más de 300.000€ → 24,50%. A estos se añade la escala autonómica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto IRPF me retienen con un salario de 25.000€ en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con 25.000€ brutos anuales, la retención estimada de IRPF es aproximadamente del 15-17% efectivo, dependiendo de tu comunidad autónoma y situación personal (hijos, hipoteca, etc.). La retención exacta la calcula tu empleador con el modelo 145.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "España", item: "https://calculalaboral.net/espana" },
    { "@type": "ListItem", position: 3, name: "Tramos IRPF 2026", item: "https://calculalaboral.net/espana/tramos-irpf-2026" },
  ],
};

const tramosEstatales = [
  { desde: 0, hasta: 12450, tipo: 9.50 },
  { desde: 12450, hasta: 20200, tipo: 12.00 },
  { desde: 20200, hasta: 35200, tipo: 15.00 },
  { desde: 35200, hasta: 60000, tipo: 18.50 },
  { desde: 60000, hasta: 300000, tipo: 22.50 },
  { desde: 300000, hasta: null, tipo: 24.50 },
];

const tramosAutonomicoEjemplo = [
  { comunidad: "Madrid", tramo1: 9.00, tramo2: 11.60, tramo3: 14.50, tramo4: 17.40, tramo5: 20.50, tramo6: 21.00 },
  { comunidad: "Cataluña", tramo1: 10.50, tramo2: 12.00, tramo3: 15.50, tramo4: 19.50, tramo5: 23.50, tramo6: 25.50 },
  { comunidad: "Andalucía", tramo1: 9.50, tramo2: 12.00, tramo3: 15.00, tramo4: 18.50, tramo5: 22.50, tramo6: 23.50 },
  { comunidad: "Comunidad Valenciana", tramo1: 10.00, tramo2: 12.00, tramo3: 14.00, tramo4: 17.50, tramo5: 21.00, tramo6: 22.50 },
];

const retencionesEjemplo = [
  { salario: 18000, retencion: 9.0, mensual: 1500 },
  { salario: 25000, retencion: 15.5, mensual: 2083 },
  { salario: 35000, retencion: 19.0, mensual: 2917 },
  { salario: 45000, retencion: 22.5, mensual: 3750 },
  { salario: 60000, retencion: 26.0, mensual: 5000 },
  { salario: 80000, retencion: 30.0, mensual: 6667 },
];

export default function TramosIRPF2026Page() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/espana" className="hover:text-blue-600 transition-colors">España</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Tramos IRPF 2026</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            España · Renta 2025–2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Tramos IRPF 2026 España
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tabla completa de tramos del Impuesto sobre la Renta de las Personas Físicas (IRPF) en España para 2026.
            Incluye escala estatal, ejemplos por comunidad autónoma y tabla orientativa de retenciones.
          </p>
        </div>

        {/* Escala estatal */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Escala estatal IRPF 2026</h2>
            <p className="text-sm text-slate-500 mt-1">El tipo total = escala estatal + escala autonómica (varía por CCAA)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Base liquidable desde (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Hasta (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Tipo marginal estatal</th>
                </tr>
              </thead>
              <tbody>
                {tramosEstatales.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.desde.toLocaleString("es-ES")}
                    </td>
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.hasta ? row.hasta.toLocaleString("es-ES") : "En adelante"}
                    </td>
                    <td className="text-right px-4 py-2.5 font-semibold text-blue-700">{row.tipo.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 px-4 py-3 border-t border-slate-100">
            El tipo efectivo total incluye también la escala autonómica. Ejemplo: Madrid (9% primer tramo) o Cataluña (10,5% primer tramo).
          </p>
        </div>

        {/* Cómo funciona */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">¿Cómo funciona el IRPF?</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            El IRPF es <strong>progresivo</strong>: solo pagas el tipo marginal más alto sobre la parte de tu renta que
            supera cada límite. <strong>No</strong> pagas ese porcentaje sobre toda tu base imponible.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
            <p className="font-semibold mb-2">Ejemplo con 25.000€ de base liquidable (escala estatal):</p>
            <ul className="space-y-1.5">
              <li>Primeros 12.450€ × 9,50% = <strong>1.182,75€</strong></li>
              <li>(20.200 – 12.450) = 7.750€ × 12% = <strong>930€</strong></li>
              <li>(25.000 – 20.200) = 4.800€ × 15% = <strong>720€</strong></li>
              <li className="border-t border-slate-200 pt-1.5 font-semibold">Total cuota estatal = 2.832,75€ (tipo efectivo estatal: 11,33%)</li>
            </ul>
            <p className="mt-2 text-slate-500">A esto se suma la cuota autonómica (similar monto). Tipo efectivo total estimado: ~17-19% según CCAA.</p>
          </div>
        </div>

        {/* Retenciones orientativas */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Retención orientativa por salario bruto anual</h2>
            <p className="text-sm text-slate-500 mt-1">Sin hijos, sin hipoteca, soltero/a. La retención real varía según situación personal.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Salario bruto anual (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Retención aprox. (%)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Salario bruto mensual (€)</th>
                </tr>
              </thead>
              <tbody>
                {retencionesEjemplo.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">{row.salario.toLocaleString("es-ES")}</td>
                    <td className="text-right px-4 py-2.5 font-semibold text-orange-600">{row.retencion}%</td>
                    <td className="text-right px-4 py-2.5 font-mono text-slate-500">{row.mensual.toLocaleString("es-ES")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparativa CCAA */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Comparativa tramos autonómicos (principales CCAA)</h2>
            <p className="text-sm text-slate-500 mt-1">Tipo marginal por tramo — solo escala autonómica (se suma a la estatal)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2.5 font-semibold text-slate-600">Comunidad</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">≤12.450€</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">≤20.200€</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">≤35.200€</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">≤60.000€</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">≤300.000€</th>
                </tr>
              </thead>
              <tbody>
                {tramosAutonomicoEjemplo.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-medium text-slate-800">{row.comunidad}</td>
                    <td className="text-right px-4 py-2.5 text-slate-600">{row.tramo1}%</td>
                    <td className="text-right px-4 py-2.5 text-slate-600">{row.tramo2}%</td>
                    <td className="text-right px-4 py-2.5 text-slate-600">{row.tramo3}%</td>
                    <td className="text-right px-4 py-2.5 text-slate-600">{row.tramo4}%</td>
                    <td className="text-right px-4 py-2.5 text-slate-600">{row.tramo5}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 px-4 py-3 border-t border-slate-100">Datos orientativos. Consulta la escala oficial de tu comunidad autónoma en la AEAT.</p>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Preguntas frecuentes IRPF 2026</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Cuándo me aplican la retención de IRPF?</h3>
              <p className="text-sm text-slate-600">Tu empleador retiene el IRPF mensualmente en cada nómina. La retención es un pago anticipado del impuesto que deberás liquidar definitivamente en la declaración de la Renta (campaña abril–junio 2026).</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿Puedo pedir que me retengan menos IRPF?</h3>
              <p className="text-sm text-slate-600">No puedes pedir retención inferior a la legal. Sí puedes pedir una retención mayor (modelo 145) si prevés que en la declaración anual vas a salir a pagar. Comunicar deducciones (hijos, hipoteca) a tu empresa sí reduce la retención aplicada.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">¿El IRPF es el mismo en todas las comunidades?</h3>
              <p className="text-sm text-slate-600">No. La mitad del IRPF la fija el Estado (igual en todo el territorio) y la otra mitad la fija cada comunidad autónoma. Por eso la retención puede variar varios puntos porcentuales entre, por ejemplo, Madrid y Cataluña.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-800">Calcula tu salario neto en España</p>
            <p className="text-sm text-slate-600">Descubre cuánto cobras en mano descontando IRPF y Seguridad Social</p>
          </div>
          <Link
            href="/espana/calculadora-nomina-neta"
            className="flex-shrink-0 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Calcular nómina neta &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
