import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Impuesto a las Ganancias 2025 Argentina – Declaración Jurada, Fechas y Quién Paga",
  description:
    "Todo sobre el Impuesto a las Ganancias 2025 en Argentina: quién paga desde 2024 (trabajadores en relación de dependencia), plazos declaración jurada 2026 ante AFIP/ARCA y deducciones permitidas.",
  alternates: {
    canonical: "https://calculalaboral.net/argentina/impuesto-ganancias-2025",
  },
  openGraph: {
    title: "Impuesto a las Ganancias 2025 Argentina – Declaración Jurada",
    description:
      "Guía completa del Impuesto a las Ganancias 2025 en Argentina. Mínimo no imponible, deducciones y plazos de presentación ante AFIP/ARCA.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Argentina", item: "https://calculalaboral.net/argentina" },
    { "@type": "ListItem", position: 3, name: "Impuesto a las Ganancias 2025", item: "https://calculalaboral.net/argentina/impuesto-ganancias-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién paga Ganancias en Argentina en 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desde la reforma de la Ley 27.743 (2024), los trabajadores en relación de dependencia tributan Ganancias si su remuneración bruta mensual supera ciertos umbrales actualizables trimestralmente por el índice RIPTE. Para 2025, el umbral se ubica en torno a $2.300.000–$2.500.000 pesos mensuales brutos (variable). Autónomos y empresas siguen siendo contribuyentes del impuesto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo hay que presentar la declaración jurada de Ganancias 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Declaración Jurada Anual del Impuesto a las Ganancias correspondiente al año fiscal 2025 debe presentarse generalmente entre mayo y junio de 2026, según el cronograma que publica ARCA (ex AFIP). Las fechas exactas se ordenan según el último dígito del CUIT.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué deducciones permite el Impuesto a las Ganancias en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las principales deducciones permitidas son: mínimo no imponible (MNI), cargas de familia (cónyuge, hijos), gastos médicos y de salud prepagada, intereses de créditos hipotecarios, primas de seguros de vida, donaciones, honorarios médicos, alquileres, y aportes a cajas profesionales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se presentó la declaración jurada de Ganancias en Argentina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración jurada se presenta a través del portal de ARCA (arca.gob.ar, ex AFIP) con CUIT y clave fiscal. Se utiliza el aplicativo GANANCIAS PERSONAS FÍSICAS o el servicio web correspondiente. Los trabajadores dependientes tienen retenciones durante el año practicadas por su empleador.",
      },
    },
  ],
};

export default function ImpuestoGanancias2025Page() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/argentina" className="hover:text-blue-600 transition-colors">Argentina</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Impuesto a las Ganancias 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Argentina · Ganancias 2025 · DJ: mayo–junio 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Impuesto a las Ganancias 2025 Argentina — Declaración Jurada
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Declaración Jurada Anual del Impuesto a las Ganancias del ejercicio 2025 debe presentarse
            ante <strong>ARCA (ex AFIP) entre mayo y junio de 2026</strong>. Desde la reforma de 2024
            (Ley 27.743), los trabajadores dependientes solo tributan si superan el umbral del Mínimo
            No Imponible actualizado.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-blue-900 mb-3">Fechas clave — Ganancias 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Declaración Jurada Anual</p>
              <p className="text-slate-700 font-bold mt-0.5">Mayo – Junio 2026</p>
              <p className="text-xs text-slate-400 mt-1">Según último dígito del CUIT</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">ARCA — arca.gob.ar</p>
              <p className="text-xs text-slate-400 mt-1">Con CUIT y clave fiscal</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Ingreso bruto mensual promedio en 2025"
            currency="ARS"
            symbol="$"
            threshold={2300000}
            thresholdLabel="~$2.300.000 ARS brutos/mes (umbral orientativo 2025)"
            obligadoText="Con ingresos superiores al umbral actualizado, probablemente tributes Ganancias. Las retenciones las practica tu empleador mensualmente."
            noObligadoText="Si tu salario está por debajo del umbral del Mínimo No Imponible actualizado, estás exento de Ganancias como trabajador en relación de dependencia desde la reforma Ley 27.743."
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">¿Quién tributa Ganancias en Argentina en 2025?</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              "Trabajadores en relación de dependencia con remuneración que supere el MNI actualizado (Ley 27.743)",
              "Jubilados y pensionados con haberes que superen el umbral (6 veces la jubilación mínima)",
              "Trabajadores autónomos con ingresos netos sujetos al impuesto",
              "Empresas y sociedades (personas jurídicas) — alícuota del 35%",
              "Personas con ingresos de capital: alquileres, dividendos, intereses",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start px-5 py-3">
                <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
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
          <Link href="/argentina/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta Argentina</p>
            <p className="text-sm text-slate-500">Calcula tu sueldo neto con Ganancias y aportes al SIPA</p>
          </Link>
          <Link href="/argentina/calculadora-sac" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora SAC Argentina</p>
            <p className="text-sm text-slate-500">Calcula tu aguinaldo del segundo semestre 2025</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/argentina" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Argentina
          </Link>
        </div>
      </div>
    </div>
  );
}
