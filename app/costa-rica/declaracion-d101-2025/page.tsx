import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Declaración de Renta D-101 2025 Costa Rica – Impuesto sobre Utilidades, Fechas y Quién Declara",
  description:
    "Guía de la Declaración D-101 del Impuesto sobre las Utilidades 2025 en Costa Rica: plazo 15 de diciembre de 2025 (periodo fiscal oct 2024–sept 2025), quién declara y cómo presentar ante el Ministerio de Hacienda.",
  alternates: {
    canonical: "https://calculalaboral.net/costa-rica/declaracion-d101-2025",
  },
  openGraph: {
    title: "Declaración D-101 Renta 2025 Costa Rica – Impuesto sobre Utilidades",
    description: "Formulario D-101 del Impuesto sobre las Utilidades en Costa Rica: periodo oct 2024–sept 2025, plazo diciembre 2025.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Costa Rica", item: "https://calculalaboral.net/costa-rica" },
    { "@type": "ListItem", position: 3, name: "Declaración D-101 2025", item: "https://calculalaboral.net/costa-rica/declaracion-d101-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo vence la declaración D-101 en Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El formulario D-101 del Impuesto sobre las Utilidades del periodo fiscal octubre 2024–septiembre 2025 debe presentarse ante el Ministerio de Hacienda de Costa Rica antes del 15 de diciembre de 2025. El periodo fiscal siguiente (oct 2025–sept 2026) vencerá el 15 de diciembre de 2026.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién debe presentar la declaración D-101 en Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deben presentar el D-101 todas las personas físicas con actividades lucrativas (empresarios, profesionales independientes, arrendadores) y personas jurídicas (sociedades, empresas). Los trabajadores bajo relación de dependencia con salario como único ingreso generalmente están exceptuados, ya que su empleador retiene el impuesto mensualmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la tarifa del Impuesto sobre las Utilidades en Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para personas físicas con actividad lucrativa, las tarifas son progresivas: ingresos hasta ₡4,2 millones exentos; de ₡4,2 a ₡6,3 millones al 10%; de ₡6,3 a ₡10,5 millones al 15%; de ₡10,5 a ₡21,6 millones al 20%; más de ₡21,6 millones al 25%.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se presenta el formulario D-101 en Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El formulario D-101 se presenta en línea a través de la plataforma ATV (Administración Tributaria Virtual) del Ministerio de Hacienda de Costa Rica (atv.hacienda.go.cr) con usuario y contraseña.",
      },
    },
  ],
};

export default function DeclaracionD101CostaRicaPage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/costa-rica" className="hover:text-blue-600 transition-colors">Costa Rica</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Declaración D-101 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Costa Rica · Renta 2025 · Plazo: 15 dic 2025
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Declaración D-101 Impuesto sobre Utilidades 2025 Costa Rica
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            El formulario D-101 del Impuesto sobre las Utilidades (periodo fiscal octubre 2024 – septiembre 2025)
            debe presentarse ante el <strong>Ministerio de Hacienda antes del 15 de diciembre de 2025</strong>.
            El periodo siguiente (oct 2025 – sept 2026) vence en diciembre de 2026.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-blue-900 mb-3">Fechas clave — D-101 Renta 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Periodo fiscal</p>
              <p className="text-slate-700 font-bold mt-0.5">Oct 2024 – Sept 2025</p>
              <p className="text-xs text-slate-400 mt-1">Vencimiento: 15 diciembre 2025</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-semibold text-blue-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">ATV Hacienda</p>
              <p className="text-xs text-slate-400 mt-1">atv.hacienda.go.cr</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Ingresos anuales por actividad lucrativa"
            currency="CRC"
            symbol="₡"
            threshold={4200000}
            thresholdLabel="₡4,2 millones CRC (tramo exento aproximado)"
            obligadoText="Si tienes actividad lucrativa propia (empresa, profesional independiente, arrendador), debes presentar el D-101 independientemente del monto de ingresos."
            noObligadoText="Si solo eres trabajador bajo relación de dependencia y tu patrono realizó todas las retenciones, no estás obligado a presentar el D-101."
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
          <Link href="/costa-rica/calculadora-aguinaldo" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Aguinaldo Costa Rica</p>
            <p className="text-sm text-slate-500">Calcula tu aguinaldo de diciembre 2025</p>
          </Link>
          <Link href="/costa-rica/calculadora-vacaciones" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Vacaciones Costa Rica</p>
            <p className="text-sm text-slate-500">Calcula tus días de vacaciones y el pago correspondiente</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/costa-rica" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Costa Rica
          </Link>
        </div>
      </div>
    </div>
  );
}
