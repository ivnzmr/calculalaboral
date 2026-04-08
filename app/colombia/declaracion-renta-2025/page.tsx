import type { Metadata } from "next";
import Link from "next/link";
import DeclaracionEstimator from "@/components/DeclaracionEstimator";

export const metadata: Metadata = {
  title: "Declaración de Renta 2025 Colombia – Fechas, Quién Declara y Cómo Presentarla",
  description:
    "Guía completa de la Declaración de Renta de personas naturales 2025 en Colombia: plazos agosto–octubre 2026, quién está obligado según la DIAN, y pasos para presentarla.",
  alternates: {
    canonical: "https://calculalaboral.net/colombia/declaracion-renta-2025",
  },
  openGraph: {
    title: "Declaración de Renta 2025 Colombia – Fechas y Quién Declara",
    description:
      "Todo sobre la Declaración de Renta de personas naturales 2025 en Colombia. Plazos agosto–octubre 2026 según la DIAN.",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Colombia", item: "https://calculalaboral.net/colombia" },
    { "@type": "ListItem", position: 3, name: "Declaración de Renta 2025", item: "https://calculalaboral.net/colombia/declaracion-renta-2025" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo es el plazo para declarar renta 2025 en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los plazos para la Declaración de Renta de personas naturales del año gravable 2025 en Colombia son entre agosto y octubre de 2026, según los últimos dos dígitos del NIT. La DIAN publica el calendario exacto cada año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está obligado a declarar renta en Colombia en 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Están obligados los asalariados con ingresos brutos superiores a 1.400 UVT (~$60,9 millones de pesos en 2025), o quienes tengan patrimonio bruto superior a 4.500 UVT (~$195 millones), consumos con tarjetas de crédito superiores a 1.400 UVT, o consignaciones bancarias superiores a 1.400 UVT durante el año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la UVT en Colombia para 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Unidad de Valor Tributario (UVT) es el índice de referencia para cálculos tributarios en Colombia. Para el año gravable 2025, la UVT es de aproximadamente $47,065 pesos colombianos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se presenta la declaración de renta en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración de renta se presenta a través del portal de la DIAN (dian.gov.co) usando el formulario 210 para personas naturales. Puedes ingresar con tu cédula y clave de acceso al servicio en línea de la DIAN.",
      },
    },
  ],
};

export default function DeclaracionRentaColombiaPage() {
  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/colombia" className="hover:text-blue-600 transition-colors">Colombia</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Declaración de Renta 2025</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
            Colombia · Renta 2025 · Plazos: ago–oct 2026
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Declaración de Renta 2025 Colombia (Año Gravable 2025)
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Declaración de Renta de personas naturales del año gravable 2025 debe presentarse ante la{" "}
            <strong>DIAN entre agosto y octubre de 2026</strong>. Si tienes ingresos o patrimonio por encima
            de los umbrales, estás obligado a declarar.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-yellow-900 mb-3">Fechas clave — Declaración de Renta 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <p className="font-semibold text-yellow-800">Periodo de presentación</p>
              <p className="text-slate-700 font-bold mt-0.5">Agosto – Octubre 2026</p>
              <p className="text-xs text-slate-400 mt-1">Según últimos dos dígitos del NIT</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <p className="font-semibold text-yellow-800">Plataforma</p>
              <p className="text-slate-700 mt-0.5">DIAN — dian.gov.co</p>
              <p className="text-xs text-slate-400 mt-1">Formulario 210 — personas naturales</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <DeclaracionEstimator
            label="Ingresos brutos totales en 2025"
            currency="COP"
            symbol="$"
            threshold={60900000}
            thresholdLabel="$60,9 millones COP (1.400 UVT aprox.)"
            obligadoText="Con ingresos superiores a 1.400 UVT (~$60,9 millones), estás obligado a presentar la Declaración de Renta ante la DIAN."
            noObligadoText="Con ingresos menores a 1.400 UVT, generalmente no estás obligado a declarar renta, siempre que tampoco superes los umbrales de patrimonio, consumos o consignaciones."
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">¿Quién está obligado a declarar renta en Colombia 2025?</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              "Ingresos brutos superiores a 1.400 UVT (~$60,9 millones en 2025)",
              "Patrimonio bruto superior a 4.500 UVT (~$195 millones en 2025)",
              "Consumos con tarjetas de crédito superiores a 1.400 UVT durante el año",
              "Consignaciones bancarias o inversiones superiores a 1.400 UVT",
              "Responsables del IVA durante el año gravable",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start px-5 py-3">
                <span className="text-yellow-600 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Cómo presentar la declaración de renta 2025 en Colombia</h2>
          <ol className="space-y-3 text-sm">
            {[
              { title: "Reúne los documentos", desc: "Certificados de ingresos y retenciones de tu empleador, extractos bancarios, certificados de inversiones, deudas y patrimonio al 31 de diciembre de 2025." },
              { title: "Ingresa al portal DIAN", desc: "Accede a dian.gov.co con tu cédula de ciudadanía y contraseña. Si no tienes usuario, regístrate previamente." },
              { title: "Selecciona el formulario 210", desc: "Es el formulario de declaración de renta para personas naturales y asimiladas." },
              { title: "Completa y verifica", desc: "La DIAN precarga algunos datos. Revisa, agrega tus deducciones (salud prepagada, educación, vivienda) y verifica el resultado." },
              { title: "Paga o solicita saldo a favor", desc: "Si hay impuesto a pagar, puedes hacerlo en línea. Si hay saldo a favor, solicita la devolución o compensación." },
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 font-bold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
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
          <Link href="/colombia/calculadora-nomina-neta" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora Nómina Neta Colombia</p>
            <p className="text-sm text-slate-500">Calcula tu salario neto con retención en la fuente y seguridad social</p>
          </Link>
          <Link href="/colombia/calculadora-liquidacion" className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition-all">
            <p className="font-semibold text-slate-800 mb-1">Calculadora de Liquidación Colombia</p>
            <p className="text-sm text-slate-500">Calcula tu liquidación laboral con cesantías, primas y vacaciones</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/colombia" className="text-sm text-blue-600 hover:underline">
            ← Ver todas las calculadoras laborales de Colombia
          </Link>
        </div>
      </div>
    </div>
  );
}
