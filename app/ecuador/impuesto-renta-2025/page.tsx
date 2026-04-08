import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Impuesto a la Renta 2025 Ecuador – Declaración, Fechas y Quién Declara ante el SRI",
  description:
    "Guía de la Declaración del Impuesto a la Renta de personas naturales 2025 en Ecuador: plazos marzo–abril 2026 ante el SRI, fracción básica desgravada y formulario 102.",
  alternates: {
    canonical: "https://calculalaboral.net/ecuador/impuesto-renta-2025",
  },
  openGraph: {
    title: "Impuesto a la Renta 2025 Ecuador – Declaración y Fechas SRI",
    description: "Declaración del Impuesto a la Renta 2025 en Ecuador: quién declara, plazos y cómo presentar el formulario 102 ante el SRI.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Ecuador", item: "https://calculalaboral.net/ecuador" },
    { "@type": "ListItem", position: 3, name: "Impuesto a la Renta 2025", item: "https://calculalaboral.net/ecuador/impuesto-renta-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo es el plazo para declarar el Impuesto a la Renta 2025 en Ecuador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración del Impuesto a la Renta del ejercicio fiscal 2025 en Ecuador debe presentarse entre marzo y abril de 2026. Las personas naturales declaran en marzo (cédula par) o abril (cédula impar) según el noveno dígito de la cédula de identidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está obligado a declarar el Impuesto a la Renta en Ecuador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deben declarar las personas naturales con ingresos gravables anuales superiores a la fracción básica desgravada, que para 2025 es de aproximadamente $11.722 dólares. Los trabajadores bajo relación de dependencia cuyo empleador realizó las retenciones correctamente generalmente no deben presentar declaración.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el formulario para declarar renta de personas naturales en Ecuador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las personas naturales no obligadas a llevar contabilidad utilizan el Formulario 102A. Las personas naturales obligadas a llevar contabilidad y las sucesiones indivisas utilizan el Formulario 102. Ambos se presentan a través del portal del SRI (sri.gob.ec).",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué deducciones puedo aplicar en la declaración de renta en Ecuador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las principales deducciones son: gastos de vivienda (arrendamiento o intereses de crédito hipotecario), salud (hasta la fracción básica desgravada), educación y arte (hasta el 0,5% del ingreso), alimentación y vestimenta. También se deducen los aportes al IESS y los gastos personales documentados.",
      },
    },
  ],
};

export default function ImpuestoRentaEcuadorPage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/ecuador" className="hover:text-blue-600 transition-colors">Ecuador</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Impuesto a la Renta 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Ecuador · Renta 2025 · Plazo: mar–abr 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Impuesto a la Renta 2025 Ecuador — Declaración Anual
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La declaración del Impuesto a la Renta del ejercicio fiscal 2025 debe presentarse ante el{" "}
            <strong>SRI en marzo o abril de 2026</strong> (según el noveno dígito de la cédula).
            El umbral de obligación es la <strong>fracción básica desgravada (~$11.722 USD para 2025)</strong>.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-yellow-900 mb-3">Fechas clave — Renta 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <p className="font-semibold text-yellow-800">Personas naturales (cédula par)</p>
              <p className="text-slate-700 font-bold mt-0.5">Marzo 2026</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <p className="font-semibold text-yellow-800">Personas naturales (cédula impar)</p>
              <p className="text-slate-700 font-bold mt-0.5">Abril 2026</p>
              <p className="text-xs text-slate-400 mt-1">Formulario 102 / 102A — SRI (sri.gob.ec)</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Ingresos gravables anuales en 2025"
            currency="USD"
            symbol="$"
            threshold={11722}
            thresholdLabel="$11.722 USD (fracción básica desgravada 2025)"
            obligadoText="Con ingresos superiores a la fracción básica desgravada, debes presentar la declaración del Impuesto a la Renta ante el SRI."
            noObligadoText="Con ingresos menores a la fracción básica desgravada (~$11.722 USD), generalmente no estás obligado a declarar si eres empleado bajo relación de dependencia y tu empleador realizó las retenciones correspondientes."
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
          <Link href="/ecuador/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta Ecuador</p>
            <p className="text-sm text-slate-500">Calcula tu sueldo neto con IESS y retención en la fuente</p>
          </Link>
          <Link href="/ecuador/calculadora-iess" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora IESS Ecuador</p>
            <p className="text-sm text-slate-500">Calcula tus aportaciones al IESS (trabajador y empleador)</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/ecuador" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Ecuador
          </Link>
        </div>
      </div>
    </div>
  );
}
