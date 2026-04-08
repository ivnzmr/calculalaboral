import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Declaración Anual ISR 2025 México – Fechas, Quién Declara y Cómo Presentarla",
  description:
    "Guía completa de la Declaración Anual de ISR 2025 en México: plazo 30 abril 2026, quién está obligado a declarar ante el SAT, pasos para presentarla y calculadora de estimación.",
  alternates: {
    canonical: "https://calculalaboral.net/mexico/declaracion-anual-2025",
  },
  openGraph: {
    title: "Declaración Anual ISR 2025 México – Fechas y Quién Declara",
    description:
      "Todo sobre la Declaración Anual de personas físicas 2025 en México. Plazo hasta el 30 de abril de 2026 ante el SAT.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "México", item: "https://calculalaboral.net/mexico" },
    { "@type": "ListItem", position: 3, name: "Declaración Anual ISR 2025", item: "https://calculalaboral.net/mexico/declaracion-anual-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo es el plazo para la Declaración Anual 2025 en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plazo para presentar la Declaración Anual de personas físicas del ejercicio 2025 ante el SAT es hasta el 30 de abril de 2026.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está obligado a presentar la Declaración Anual 2025 en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Están obligados los trabajadores asalariados con ingresos superiores a $400,000 pesos en el año, quienes hayan tenido dos o más empleadores simultáneos, quienes perciban ingresos de fuentes adicionales como honorarios, arrendamiento o actividad empresarial, y quienes comuniquen por escrito al patrón que presentarán declaración.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo presento la Declaración Anual por internet en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ingresa al portal del SAT (sat.gob.mx), selecciona 'Declaraciones' > 'Anuales' > 'Personas Físicas'. El sistema precarga la información de tus comprobantes fiscales. Revisa, completa y envía con tu e.firma o contraseña.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si obtengo saldo a favor en la Declaración Anual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tu declaración resulta con saldo a favor (impuesto pagado en exceso mediante retenciones), puedes solicitar la devolución automática al SAT. El SAT generalmente devuelve el saldo en un plazo de 5 a 40 días hábiles mediante depósito bancario.",
      },
    },
  ],
};

export default function DeclaracionAnualMexicoPage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/mexico" className="hover:text-blue-600 transition-colors">México</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Declaración Anual ISR 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            México · ISR 2025 · Plazo: 30 abril 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Declaración Anual ISR 2025 México
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Declaración Anual de personas físicas del ejercicio 2025 debe presentarse ante el{" "}
            <strong>SAT antes del 30 de abril de 2026</strong>. Si obtuviste retenciones en exceso,
            podrías tener <strong>saldo a favor</strong> y derecho a devolución.
          </p>
        </div>

        {/* Plazos */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-green-900 mb-3">Fechas clave — Declaración Anual 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="font-semibold text-green-800">Fecha límite</p>
              <p className="text-slate-700 font-bold mt-0.5">30 de abril de 2026</p>
              <p className="text-xs text-slate-400 mt-1">Personas físicas ejercicio 2025</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="font-semibold text-green-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">SAT — sat.gob.mx</p>
              <p className="text-xs text-slate-400 mt-1">Con e.firma o contraseña SAT</p>
            </div>
          </div>
        </div>

        {/* Estimador */}
        <div className="mb-6">
          <DeclaracionEstimator
            label="Ingresos totales anuales en 2025"
            currency="MXN"
            symbol="$"
            threshold={400000}
            thresholdLabel="$400,000 MXN"
            obligadoText="Con ingresos superiores a $400,000 MXN, como asalariado estás obligado a presentar tu Declaración Anual ante el SAT."
            noObligadoText="Con ingresos menores a $400,000 MXN de un solo patrón, generalmente no estás obligado a declarar, pero puede ser conveniente si tienes retenciones en exceso."
          />
        </div>

        {/* Quién debe declarar */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">¿Quién está obligado a presentar la Declaración Anual 2025?</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              "Trabajadores asalariados con ingresos anuales superiores a $400,000 MXN",
              "Quienes hayan tenido dos o más patrones simultáneamente durante el año",
              "Quienes percibieron ingresos adicionales (honorarios, arrendamiento, actividad empresarial)",
              "Quienes comunicaron por escrito a su patrón que presentarían declaración",
              "Trabajadores con ingresos del extranjero",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start px-5 py-3">
                <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pasos */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Cómo presentar la Declaración Anual 2025 en México</h2>
          <ol className="space-y-3 text-sm">
            {[
              { title: "Reúne tu documentación", desc: "Recibos de nómina (CFDI), constancias de retenciones de tu patrón, comprobantes de gastos deducibles (deducciones personales)." },
              { title: "Entra al portal SAT", desc: "Accede a sat.gob.mx con tu RFC, contraseña o e.firma (firma electrónica)." },
              { title: "Selecciona Declaración Anual", desc: "En el menú: Declaraciones > Anuales > Personas Físicas > Ejercicio 2025." },
              { title: "Revisa el prellenado", desc: "El SAT precarga los datos de tus CFDI. Verifica que sean correctos y agrega las deducciones personales que apliquen." },
              { title: "Envía y guarda el acuse", desc: "Confirma y envía. Descarga el acuse de recibo como comprobante de presentación." },
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{step.title}</p>
                  <p className="text-slate-500 mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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

        {/* CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link href="/mexico/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta México</p>
            <p className="text-sm text-slate-500">Calcula tu salario neto mensual con ISR e IMSS</p>
          </Link>
          <Link href="/mexico/tabla-isr-2026" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Tabla ISR 2026 México</p>
            <p className="text-sm text-slate-500">Consulta los tramos y cuotas fijas del ISR 2026</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/mexico" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de México
          </Link>
        </div>
      </div>
    </div>
  );
}
