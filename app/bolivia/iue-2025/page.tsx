import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "IUE 2025 Bolivia – Impuesto sobre las Utilidades de las Empresas, Declaración y Fechas",
  description:
    "Guía del IUE (Impuesto sobre las Utilidades de las Empresas) y declaración de renta 2025 en Bolivia: quién está obligado, plazos ante el SIN, y cómo presentar el formulario 500.",
  alternates: {
    canonical: "https://calculalaboral.net/bolivia/iue-2025",
  },
  openGraph: {
    title: "IUE 2025 Bolivia – Impuesto sobre Utilidades, Declaración y Fechas SIN",
    description: "Declaración del IUE 2025 en Bolivia: quién declara, plazos y formulario 500 ante el Servicio de Impuestos Nacionales.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Bolivia", item: "https://calculalaboral.net/bolivia" },
    { "@type": "ListItem", position: 3, name: "IUE 2025", item: "https://calculalaboral.net/bolivia/iue-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el IUE en Bolivia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Impuesto sobre las Utilidades de las Empresas (IUE) en Bolivia es un impuesto anual del 25% sobre las utilidades netas de las empresas y personas con actividad económica. También aplica a profesionales independientes y personas en libre ejercicio, quienes pagan el 12,5% sobre su facturación neta como RC-IVA a cuenta del IUE.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo deben presentar la declaración del IUE las empresas en Bolivia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plazo para presentar la declaración anual del IUE (Formulario 500) depende de la fecha de cierre del ejercicio fiscal de cada empresa. Las que cierran al 31 de diciembre tienen plazo hasta el último día hábil de abril del año siguiente. El SIN establece los plazos exactos según el último dígito del NIT.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los trabajadores dependientes deben pagar IUE en Bolivia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los trabajadores en relación de dependencia no pagan IUE directamente. Su impuesto es el RC-IVA (Régimen Complementario al IVA), que retiene el empleador mensualmente. Si tienen ingresos adicionales de actividades independientes o alquileres, sí deben declarar esos ingresos ante el SIN.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se presenta la declaración del IUE en Bolivia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración del IUE se presenta a través del portal de Impuestos Nacionales de Bolivia (impuestos.gob.bo) con el NIT y clave fiscal. Se utiliza el Formulario 500. Los contribuyentes también pueden presentar en las oficinas del SIN.",
      },
    },
  ],
};

export default function IUE2025BoliviaPage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/bolivia" className="hover:text-blue-600 transition-colors">Bolivia</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">IUE 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Bolivia · IUE 2025 · Plazo según cierre fiscal
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            IUE 2025 Bolivia — Declaración del Impuesto sobre las Utilidades
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            El Impuesto sobre las Utilidades de las Empresas (IUE) en Bolivia se aplica al 25% de las
            utilidades netas anuales. Las empresas que cierran ejercicio el 31 de diciembre deben
            presentar el <strong>Formulario 500 ante el SIN antes de finales de abril de 2026</strong>.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-green-900 mb-3">Fechas clave — IUE 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="font-semibold text-green-800">Cierre al 31/12/2025</p>
              <p className="text-slate-700 font-bold mt-0.5">Hasta finales de abril 2026</p>
              <p className="text-xs text-slate-400 mt-1">Según último dígito del NIT</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="font-semibold text-green-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">SIN — impuestos.gob.bo</p>
              <p className="text-xs text-slate-400 mt-1">Formulario 500 · Con NIT y clave</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Utilidades netas anuales 2025"
            currency="BOB"
            symbol="Bs."
            threshold={1}
            thresholdLabel="Cualquier utilidad neta positiva"
            obligadoText="Si tu empresa o actividad generó utilidades netas en 2025, debes presentar el Formulario 500 del IUE ante el SIN."
            noObligadoText="Si no tuviste actividad económica o tus utilidades fueron cero o negativas, igualmente debes presentar la declaración indicando esa situación ante el SIN."
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">¿Quién paga el IUE en Bolivia?</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              "Empresas unipersonales y sociedades comerciales",
              "Personas naturales con actividad económica propia (comercio, industria, servicios)",
              "Profesionales independientes (pagan RC-IVA como anticipo del IUE)",
              "Empresas mineras, petroleras y de servicios especiales (tasas diferenciadas)",
              "Sucursales de empresas extranjeras radicadas en Bolivia",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start px-5 py-3">
                <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Preguntas frecuentes sobre el IUE 2025</h2>
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
          <Link href="/bolivia/calculadora-aguinaldo" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Aguinaldo Bolivia</p>
            <p className="text-sm text-slate-500">Calcula tu aguinaldo de navidad 2025</p>
          </Link>
          <Link href="/bolivia/calculadora-desahucio" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Desahucio Bolivia</p>
            <p className="text-sm text-slate-500">Calcula tu indemnización por despido intempestivo</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/bolivia" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Bolivia
          </Link>
        </div>
      </div>
    </div>
  );
}
