import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "ISLR 2025 Venezuela – Declaración Definitiva de Rentas, Fechas y Quién Declara",
  description:
    "Guía del ISLR (Impuesto sobre la Renta) 2025 en Venezuela: plazo 31 marzo 2026 ante el SENIAT, quién está obligado a declarar, y cómo presentar la Declaración Definitiva de Rentas.",
  alternates: {
    canonical: "https://calculalaboral.net/venezuela/islr-2025",
  },
  openGraph: {
    title: "ISLR 2025 Venezuela – Declaración Definitiva de Rentas",
    description: "Todo sobre el ISLR 2025 en Venezuela. Plazo 31 de marzo de 2026 ante el SENIAT.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Venezuela", item: "https://calculalaboral.net/venezuela" },
    { "@type": "ListItem", position: 3, name: "ISLR 2025", item: "https://calculalaboral.net/venezuela/islr-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo vence el plazo para declarar el ISLR 2025 en Venezuela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Declaración Definitiva de Rentas del ejercicio fiscal 2025 debe presentarse ante el SENIAT dentro de los tres meses siguientes al cierre del ejercicio fiscal (31 de diciembre), es decir, hasta el 31 de marzo de 2026.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está obligado a declarar el ISLR en Venezuela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deben declarar el ISLR en Venezuela las personas naturales con enriquecimientos netos superiores a 1.000 Unidades Tributarias (UT) al año, o con ingresos brutos superiores a 1.500 UT. Los trabajadores bajo relación de dependencia cuyo único ingreso es el salario están exceptuados si su empleador realizó las retenciones correctamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se presenta la declaración del ISLR en Venezuela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración del ISLR se presenta a través del portal en línea del SENIAT (seniat.gob.ve) usando el RIF y la clave de acceso. El sistema genera el formulario PN-R-11 para personas naturales. También se puede presentar en las oficinas del SENIAT.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la Unidad Tributaria (UT) en Venezuela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Unidad Tributaria (UT) es el índice de referencia para cálculos tributarios en Venezuela. El SENIAT actualiza su valor periódicamente. Para el ejercicio 2025, consulta el valor vigente directamente en el portal del SENIAT (seniat.gob.ve), ya que se actualiza con frecuencia ante la inflación.",
      },
    },
  ],
};

export default function ISLR2025Page() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/venezuela" className="hover:text-blue-600 transition-colors">Venezuela</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">ISLR 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Venezuela · ISLR 2025 · Plazo: 31 marzo 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            ISLR 2025 Venezuela — Declaración Definitiva de Rentas
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Declaración Definitiva de Rentas del Impuesto Sobre la Renta (ISLR) del ejercicio 2025
            debe presentarse ante el <strong>SENIAT antes del 31 de marzo de 2026</strong>.
            Conoce quién está obligado a declarar y cómo hacerlo.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-yellow-900 mb-3">Fechas clave — ISLR 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <p className="font-semibold text-yellow-800">Fecha límite</p>
              <p className="text-slate-700 font-bold mt-0.5">31 de marzo de 2026</p>
              <p className="text-xs text-slate-400 mt-1">Cierre ejercicio 31/12/2025</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <p className="font-semibold text-yellow-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">SENIAT — seniat.gob.ve</p>
              <p className="text-xs text-slate-400 mt-1">Formulario PN-R-11 personas naturales</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Enriquecimiento neto anual en 2025"
            currency="VES"
            symbol="Bs."
            threshold={0}
            thresholdLabel="1.000 UT (verifica el valor actualizado de la UT en el SENIAT)"
            obligadoText="Si tu enriquecimiento neto supera 1.000 UT o tus ingresos brutos superan 1.500 UT, debes presentar la Declaración Definitiva ante el SENIAT."
            noObligadoText="Si eres trabajador bajo relación de dependencia con salario como único ingreso y tu empleador realizó todas las retenciones, podrías estar exento de presentar declaración. Verifica con el SENIAT."
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Preguntas frecuentes sobre el ISLR 2025</h2>
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
          <Link href="/venezuela/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta Venezuela</p>
            <p className="text-sm text-slate-500">Calcula tu salario neto con IVSS y retención de ISLR</p>
          </Link>
          <Link href="/venezuela/calculadora-prestaciones" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Prestaciones Sociales</p>
            <p className="text-sm text-slate-500">Calcula tus prestaciones sociales según la LOTTT</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/venezuela" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Venezuela
          </Link>
        </div>
      </div>
    </div>
  );
}
