import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Declaración de Renta 2025 Chile – Fechas, Quién Declara y Cómo Presentarla al SII",
  description:
    "Guía completa de la Declaración de Renta 2025 en Chile: plazos abril–mayo 2026 ante el SII, quién debe declarar, deducciones y cómo presentar el formulario 22.",
  alternates: {
    canonical: "https://calculalaboral.net/chile/declaracion-renta-2025",
  },
  openGraph: {
    title: "Declaración de Renta 2025 Chile – Fechas y Quién Declara al SII",
    description: "Todo sobre la Declaración de Renta 2025 en Chile. Plazo hasta el 30 de abril de 2026 ante el SII.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Chile", item: "https://calculalaboral.net/chile" },
    { "@type": "ListItem", position: 3, name: "Declaración de Renta 2025", item: "https://calculalaboral.net/chile/declaracion-renta-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo vence el plazo para declarar renta en Chile en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plazo para presentar la Declaración de Renta del ejercicio 2025 (AT 2026) en Chile es hasta el 30 de abril de 2026 en forma electrónica. Los contribuyentes que deben pagar impuesto tienen plazo hasta el 30 de abril, pero pueden pagar hasta el 30 de junio en cuotas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está obligado a declarar renta en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Chile deben presentar la declaración de renta: trabajadores dependientes con más de un empleador, quienes tengan ingresos adicionales (honorarios, arrendamientos), personas con rentas del capital (dividendos, intereses), y quienes tengan derecho a devolución de impuesto y quieran solicitarla.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la propuesta de declaración del SII en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El SII elabora una propuesta de declaración prellenada con los datos que tiene: sueldos, AFP, cotizaciones de salud, honorarios, etc. Si la propuesta está correcta y el contribuyente no tiene más datos que agregar, puede aceptarla directamente. Si tiene información adicional, puede modificarla.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Impuesto Global Complementario en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Impuesto Global Complementario (IGC) es el impuesto anual que afecta a las personas naturales domiciliadas o residentes en Chile sobre todas sus rentas de cualquier origen. Se aplica sobre la renta imponible anual con una escala progresiva que va del 0% (exento hasta ~$12 millones) hasta el 40%.",
      },
    },
  ],
};

export default function DeclaracionRentaChilePage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/chile" className="hover:text-blue-600 transition-colors">Chile</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Declaración de Renta 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-red-50 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Chile · Renta AT 2026 · Plazo: 30 abril 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Declaración de Renta 2025 Chile (Año Tributario 2026)
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Declaración de Renta del ejercicio 2025 (Año Tributario 2026) debe presentarse ante el{" "}
            <strong>SII antes del 30 de abril de 2026</strong>. El SII elabora una propuesta prellenada
            que muchos contribuyentes pueden aceptar directamente.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-red-900 mb-3">Fechas clave — Declaración de Renta AT 2026</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-red-100">
              <p className="font-semibold text-red-800">Fecha límite presentación</p>
              <p className="text-slate-700 font-bold mt-0.5">30 de abril de 2026</p>
              <p className="text-xs text-slate-400 mt-1">Formulario 22 en línea (sii.cl)</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-100">
              <p className="font-semibold text-red-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">SII — sii.cl</p>
              <p className="text-xs text-slate-400 mt-1">Con Clave Tributaria o ClaveÚnica</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Renta imponible anual en 2025"
            currency="CLP"
            symbol="$"
            threshold={9800000}
            thresholdLabel="~$9,8 millones CLP (exento IGC aprox.)"
            obligadoText="Si tienes más de un empleador, ingresos por honorarios, arrendamiento u otras fuentes, debes presentar declaración independientemente del monto."
            noObligadoText="Si eres trabajador dependiente con un solo empleador y tu renta anual no supera el mínimo exento del IGC, probablemente no tengas impuesto adicional a pagar, aunque debes verificar si tienes derecho a devolución."
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">¿Quién debe presentar la Declaración de Renta en Chile?</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              "Trabajadores dependientes con dos o más empleadores simultáneos",
              "Personas con ingresos por honorarios (segunda categoría)",
              "Arrendadores de bienes raíces",
              "Empresarios individuales y socios de empresas",
              "Quienes tienen rentas de capital: dividendos, intereses, ganancias en fondos mutuos",
              "Quienes desean solicitar devolución de impuesto (aunque no estén obligados)",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start px-5 py-3">
                <span className="text-red-600 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Cómo presentar la Declaración de Renta 2025 en Chile</h2>
          <ol className="space-y-3 text-sm">
            {[
              { title: "Entra al SII", desc: "Accede a sii.cl con tu RUT, Clave Tributaria o ClaveÚnica del Estado." },
              { title: "Revisa la propuesta del SII", desc: "El SII elabora una propuesta prellenada con sueldos, honorarios, AFP, cotizaciones de salud e intereses. Muchos trabajadores dependientes pueden aceptarla directamente." },
              { title: "Agrega información adicional", desc: "Si tienes rentas que el SII no conoce, ingresos del extranjero u otras deducciones, modifica la propuesta." },
              { title: "Envía el Formulario 22", desc: "Confirma y envía. Si hay saldo a favor, recibirás la devolución en 5 a 10 días hábiles en tu cuenta bancaria." },
              { title: "Paga si hay impuesto", desc: "Si resulta impuesto a pagar, puedes hacerlo en línea o en entidades bancarias autorizadas." },
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-semibold text-slate-800">{step.title}</p>
                  <p className="text-slate-500 mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
          <Link href="/chile/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta Chile</p>
            <p className="text-sm text-slate-500">Calcula tu sueldo líquido con AFP, salud e impuesto único</p>
          </Link>
          <Link href="/chile/calculadora-afp" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora AFP Chile</p>
            <p className="text-sm text-slate-500">Calcula tus cotizaciones previsionales y de salud</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/chile" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Chile
          </Link>
        </div>
      </div>
    </div>
  );
}
