import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Declaración Anual de Renta 2025 Perú – Fechas, Quién Declara ante SUNAT",
  description:
    "Guía de la Declaración Anual de Renta 2025 en Perú: plazos marzo–abril 2026 ante la SUNAT, quién debe declarar (más de 7 UIT), rentas de trabajo y capital, y cómo presentarla.",
  alternates: {
    canonical: "https://calculalaboral.net/peru/declaracion-anual-2025",
  },
  openGraph: {
    title: "Declaración Anual de Renta 2025 Perú – Fechas y Quién Declara",
    description: "Todo sobre la Declaración Anual de Renta 2025 en Perú. Plazo marzo–abril 2026 ante la SUNAT.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Perú", item: "https://calculalaboral.net/peru" },
    { "@type": "ListItem", position: 3, name: "Declaración Anual Renta 2025", item: "https://calculalaboral.net/peru/declaracion-anual-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo es el plazo para declarar renta en Perú en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plazo para presentar la Declaración Anual de Renta del ejercicio 2025 en Perú es entre marzo y abril de 2026, según el último dígito del RUC. La SUNAT publica cada año el cronograma exacto de vencimientos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién debe declarar renta de trabajo en Perú para el ejercicio 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deben declarar las rentas de trabajo (4ª y 5ª categoría) quienes hayan obtenido ingresos anuales superiores a 7 UIT. Para 2025, la UIT es S/5.350, por lo que el umbral es de S/37.450 anuales. También deben declarar quienes tengan retenciones en exceso o pagos a cuenta pendientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la UIT en Perú y cuánto es en 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Unidad Impositiva Tributaria (UIT) es el valor de referencia para cálculos tributarios en Perú. Para el ejercicio 2025, la UIT es de S/5.350 soles, según el Decreto Supremo correspondiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se presenta la Declaración Anual de Renta en Perú?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración se presenta a través del Portal de Operaciones en Línea de la SUNAT (sunat.gob.pe) con tu RUC y clave SOL. También está disponible desde la app SUNAT. El formulario virtual 709 es el que corresponde a las rentas de personas naturales.",
      },
    },
  ],
};

export default function DeclaracionAnualPeruPage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/peru" className="hover:text-blue-600 transition-colors">Perú</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Declaración Anual Renta 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-red-50 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Perú · Renta 2025 · Plazo: mar–abr 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Declaración Anual de Renta 2025 Perú
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Declaración Anual de Renta del ejercicio 2025 debe presentarse ante la{" "}
            <strong>SUNAT entre marzo y abril de 2026</strong> (según el último dígito del RUC).
            El umbral de obligación es de <strong>7 UIT anuales (S/37.450 para 2025)</strong> por
            rentas de trabajo.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-red-900 mb-3">Fechas clave — Declaración Anual 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-red-100">
              <p className="font-semibold text-red-800">Periodo de presentación</p>
              <p className="text-slate-700 font-bold mt-0.5">Marzo – Abril 2026</p>
              <p className="text-xs text-slate-400 mt-1">Según último dígito del RUC</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-100">
              <p className="font-semibold text-red-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">SUNAT — sunat.gob.pe</p>
              <p className="text-xs text-slate-400 mt-1">Formulario Virtual 709 · Clave SOL</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Ingresos anuales por rentas de trabajo en 2025"
            currency="PEN"
            symbol="S/"
            threshold={37450}
            thresholdLabel="S/37.450 (7 UIT para 2025)"
            obligadoText="Con ingresos superiores a 7 UIT (S/37.450), estás obligado a presentar la Declaración Anual de Renta ante la SUNAT."
            noObligadoText="Con ingresos menores a 7 UIT (S/37.450), generalmente no estás obligado a presentar declaración anual por rentas de trabajo, pero verifica si tienes retenciones en exceso que puedas solicitar en devolución."
          />
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link href="/peru/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta Perú</p>
            <p className="text-sm text-slate-500">Calcula tu sueldo neto con AFP/ONP y retención de 5ª categoría</p>
          </Link>
          <Link href="/peru/cts-mayo-2026" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">CTS Mayo 2026 Perú</p>
            <p className="text-sm text-slate-500">Calcula tu depósito de CTS del primer semestre 2026</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/peru" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Perú
          </Link>
        </div>
      </div>
    </div>
  );
}
