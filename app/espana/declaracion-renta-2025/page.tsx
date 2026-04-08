import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionRentaCalculator from "@/components/DeclaracionRentaCalculator";

export const metadata: Metadata = {
  title: "Calculadora Declaración de la Renta 2025 España – ¿A Devolver o A Pagar?",
  description:
    "Calcula tu declaración de la renta 2025 en España gratis: salario, alquiler, dividendos y deducciones (hipoteca, pensiones, donativos). Descubre si sale a devolver o a pagar. Campaña abril–junio 2026.",
  alternates: {
    canonical: "https://calculalaboral.net/espana/declaracion-renta-2025",
  },
  openGraph: {
    title: "Calculadora Declaración de la Renta 2025 España – ¿A Devolver o A Pagar?",
    description:
      "Calcula gratis si tu renta 2025 sale a devolver o a pagar. Incluye salario, alquiler, dividendos y las principales deducciones. Campaña 2 abril – 30 junio 2026.",
    type: "website",
  },
};

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién está obligado a presentar la declaración de la renta 2025 en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Están obligados los contribuyentes con rendimientos del trabajo superiores a 22.000 € anuales de un solo pagador, o superiores a 15.000 € si hay más de un pagador y el segundo pagó más de 1.500 €. También quienes tengan ingresos de capital mobiliario, ganancias patrimoniales o alquileres superiores a 1.600 € al año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo empieza y acaba la campaña de la renta 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La campaña de la renta 2025 comenzó el 2 de abril de 2026 y finaliza el 30 de junio de 2026 para presentaciones por internet (Renta Web). La presentación telefónica está disponible desde el 6 de mayo de 2026 y la presencial desde el 2 de junio de 2026.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo afecta el alquiler de un piso a la declaración?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si alquilas una vivienda como arrendador, debes declarar los ingresos como rendimientos del capital inmobiliario. Puedes deducir los gastos necesarios (IBI, comunidad, seguros, amortización del inmueble, intereses de hipoteca si la hubiese). Si la vivienda es habitual del inquilino, se aplica una reducción del 60% sobre el rendimiento neto positivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo deducir mi plan de pensiones en la renta 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Las aportaciones a planes de pensiones individuales reducen la base imponible general, con un límite de 1.500 € anuales (Art. 51.1 LIRPF). Si tu empresa también aporta a un plan de empresa, el límite conjunto sube a 10.000 €.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la reducción por rendimientos del trabajo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una reducción automática que la ley aplica sobre el rendimiento neto del trabajo para compensar los gastos de desplazamiento y trabajo. Para 2025, la reducción máxima es de 7.302 € para rentas de trabajo inferiores a 14.047,5 €, y se va reduciendo hasta anularse en 19.747,5 €. Es una ventaja que se aplica de forma automática y no requiere justificación.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CalculaLaboral",
      item: "https://calculalaboral.net/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "España",
      item: "https://calculalaboral.net/espana",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Declaración de la Renta 2025",
      item: "https://calculalaboral.net/espana/declaracion-renta-2025",
    },
  ],
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculadora Declaración de la Renta 2025 España",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  url: "https://calculalaboral.net/espana/declaracion-renta-2025",
  description:
    "Calculadora gratuita para estimar el resultado de la declaración de la renta 2025 en España: a devolver o a pagar.",
};

// ---------------------------------------------------------------------------
// Datos de tramos para las tablas
// ---------------------------------------------------------------------------

const tramosGeneral = [
  { desde: 0, hasta: 12450, tipo: 19 },
  { desde: 12450, hasta: 20200, tipo: 24 },
  { desde: 20200, hasta: 35200, tipo: 30 },
  { desde: 35200, hasta: 60000, tipo: 37 },
  { desde: 60000, hasta: 300000, tipo: 45 },
  { desde: 300000, hasta: null, tipo: 47 },
];

const tramosAhorro = [
  { desde: 0, hasta: 6000, tipo: 19 },
  { desde: 6000, hasta: 50000, tipo: 21 },
  { desde: 50000, hasta: 200000, tipo: 23 },
  { desde: 200000, hasta: 300000, tipo: 27 },
  { desde: 300000, hasta: null, tipo: 28 },
];

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------

export default function DeclaracionRenta2025Page() {
  return (
    <div className="py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/espana" className="hover:text-blue-600 transition-colors">
            España
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Declaración de la Renta 2025</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            España · Renta 2025 · Campaña 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Calculadora Declaración de la Renta 2025 España
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La campaña de la declaración de la renta del ejercicio 2025 está abierta{" "}
            <strong>del 2 de abril al 30 de junio de 2026</strong>. Calcula gratis si tu declaración
            sale <strong>a devolver</strong> o <strong>a pagar</strong> introduciendo tus ingresos,
            rendimientos y deducciones.
          </p>
        </div>

        {/* Calculadora */}
        <div className="mb-10">
          <DeclaracionRentaCalculator />
        </div>

        {/* Fechas y plazos */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-blue-900 mb-3">
            Fechas clave de la campaña de la Renta 2025 (2026)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Por internet</p>
              <p className="text-slate-600 mt-0.5">2 abril – 30 junio 2026</p>
              <p className="text-xs text-slate-400 mt-1">Renta Web (AEAT)</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Por teléfono</p>
              <p className="text-slate-600 mt-0.5">6 mayo – 30 junio 2026</p>
              <p className="text-xs text-slate-400 mt-1">Cita previa AEAT</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Presencial</p>
              <p className="text-slate-600 mt-0.5">2 junio – 30 junio 2026</p>
              <p className="text-xs text-slate-400 mt-1">Oficinas AEAT</p>
            </div>
          </div>
        </div>

        {/* Quién debe declarar */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">¿Quién está obligado a declarar la renta 2025?</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2.5 font-semibold text-slate-600">Situación</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Umbral de obligación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2.5 text-slate-700">Un solo pagador (nómina habitual)</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-slate-800">Más de 22.000 €</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2.5 text-slate-700">Dos o más pagadores (segundo pagó &gt;1.500 €)</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-slate-800">Más de 15.000 €</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2.5 text-slate-700">Rendimientos capital mobiliario o ganancias patrimoniales</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-slate-800">Más de 1.600 €</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2.5 text-slate-700">Ingresos por alquiler</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-slate-800">Cualquier importe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-slate-700">Imputaciones de renta, derechos de imagen u otras rentas</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-slate-800">Más de 1.000 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 px-4 py-3 border-t border-slate-100">
            Aunque no estés obligado, puede ser conveniente declarar si tienes derecho a devolución (retenciones en exceso, deducciones aplicables, etc.).
          </p>
        </div>

        {/* Tramos escala general */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Tramos IRPF 2025 — Escala general</h2>
            <p className="text-sm text-slate-500 mt-1">
              Tipo combinado estatal + autonómica media. El tipo real varía según tu comunidad autónoma.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Desde (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Hasta (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Tipo marginal</th>
                </tr>
              </thead>
              <tbody>
                {tramosGeneral.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.desde.toLocaleString("es-ES")}
                    </td>
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.hasta ? row.hasta.toLocaleString("es-ES") : "En adelante"}
                    </td>
                    <td className="text-right px-4 py-2.5 font-semibold text-blue-700">
                      {row.tipo}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tramos escala ahorro */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Tramos IRPF 2025 — Escala del ahorro</h2>
            <p className="text-sm text-slate-500 mt-1">
              Aplica a dividendos, intereses, ganancias patrimoniales de fondos y acciones.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Desde (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Hasta (€)</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {tramosAhorro.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.desde.toLocaleString("es-ES")}
                    </td>
                    <td className="text-right px-4 py-2.5 font-mono text-slate-700">
                      {row.hasta ? row.hasta.toLocaleString("es-ES") : "En adelante"}
                    </td>
                    <td className="text-right px-4 py-2.5 font-semibold text-blue-700">
                      {row.tipo}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deducciones habituales */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Deducciones más habituales en la renta 2025</h2>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-blue-600 font-bold text-base mt-0.5">↓</span>
              <div>
                <p className="font-semibold text-slate-800">Reducción por rendimientos del trabajo</p>
                <p className="text-slate-500 mt-0.5">Hasta 7.302 € para rentas bajas (automática, no hay que solicitarla)</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-blue-600 font-bold text-base mt-0.5">↓</span>
              <div>
                <p className="font-semibold text-slate-800">Plan de pensiones individual</p>
                <p className="text-slate-500 mt-0.5">Hasta 1.500 €/año (reduce la base imponible)</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-blue-600 font-bold text-base mt-0.5">↓</span>
              <div>
                <p className="font-semibold text-slate-800">Deducción por vivienda habitual (hipoteca pre-2013)</p>
                <p className="text-slate-500 mt-0.5">15% de las cuotas pagadas (máximo 9.040 €/año) — solo para hipotecas firmadas antes del 1/1/2013</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-blue-600 font-bold text-base mt-0.5">↓</span>
              <div>
                <p className="font-semibold text-slate-800">Donativos a entidades sin ánimo de lucro</p>
                <p className="text-slate-500 mt-0.5">80% de los primeros 150 €, 40% del resto (Ley 49/2002)</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-blue-600 font-bold text-base mt-0.5">↓</span>
              <div>
                <p className="font-semibold text-slate-800">Deducciones autonómicas</p>
                <p className="text-slate-500 mt-0.5">Cada comunidad autónoma tiene deducciones propias: alquiler, gastos educativos, familia numerosa, etc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-5">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/espana/tramos-irpf-2026"
            className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-slate-800 mb-1">Tramos IRPF 2026</p>
            <p className="text-sm text-slate-500">Consulta la tabla completa de tramos y tipos marginales del IRPF 2026 en España</p>
          </Link>
          <Link
            href="/espana/calculadora-irpf"
            className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-slate-800 mb-1">Calculadora IRPF nómina</p>
            <p className="text-sm text-slate-500">Calcula la retención de IRPF mensual en tu nómina y tu salario neto</p>
          </Link>
        </div>

        {/* Volver a España */}
        <div className="text-center">
          <Link href="/espana" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de España
          </Link>
        </div>
      </div>
    </div>
  );
}
