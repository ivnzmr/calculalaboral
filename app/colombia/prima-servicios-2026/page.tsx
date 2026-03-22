import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Prima de Servicios Colombia 2026 – Junio y Diciembre | Calculadora",
  description:
    "Calcula tu prima de servicios 2026 en Colombia. 15 días de salario en junio y 15 en diciembre. Incluye auxilio de transporte si aplica. CST actualizado, gratis.",
  alternates: { canonical: "https://calculalaboral.net/colombia/prima-servicios-2026" },
};

const faqItems = [
  {
    question: "¿Cuándo se paga la prima de servicios en 2026?",
    answer:
      "Se paga en dos períodos: la primera mitad antes del 30 de junio de 2026 y la segunda mitad antes del 20 de diciembre de 2026. Si el empleador paga tarde, genera intereses moratorios.",
  },
  {
    question: "¿Cuánto es la prima de servicios en Colombia 2026?",
    answer:
      "Equivale a 15 días de salario por cada semestre trabajado (30 días en total al año). Con salario de $2,000,000/mes → prima semestral ≈ $1,000,000. Si trabajaste menos del semestre, es proporcional.",
  },
  {
    question: "¿La prima de servicios incluye el auxilio de transporte?",
    answer:
      "Sí. Para trabajadores que ganan hasta 2 salarios mínimos ($2,600,000 en 2026), el auxilio de transporte ($200,000/mes) se incluye en la base de cálculo de la prima de servicios.",
  },
  {
    question: "¿Se paga prima si renuncio antes del semestre?",
    answer:
      "Sí. Tienes derecho a la prima proporcional por los días trabajados en el semestre, ya sea que renuncies, te despidan o termines el contrato por cualquier causa.",
  },
  {
    question: "¿La prima de servicios paga seguridad social?",
    answer:
      "No. La prima de servicios no constituye salario para efectos legales (Art. 307 CST), por lo que no genera aportes a pensión, salud o ARL, ni sirve de base para liquidar cesantías o vacaciones.",
  },
];

export default function PrimaServiciosColombia2026Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calculalaboral.net/" },
      { "@type": "ListItem", position: 2, name: "Colombia", item: "https://calculalaboral.net/colombia" },
      { "@type": "ListItem", position: 3, name: "Prima de Servicios 2026", item: "https://calculalaboral.net/colombia/prima-servicios-2026" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-emerald-600">Inicio</Link>
        <span className="mx-2 text-slate-300">/</span>
        <Link href="/colombia" className="hover:text-emerald-600">Colombia</Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-800 font-medium">Prima de Servicios 2026</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full mb-3">
          Actualizado 2026
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Prima de Servicios Colombia Junio 2026
        </h1>

        {/* Featured snippet */}
        <section
          aria-label="Respuesta rápida"
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4"
        >
          <p className="text-sm font-semibold text-emerald-800 mb-1">
            ¿Cuánto es la prima de servicios en junio 2026?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            15 días de salario por semestre trabajado (Art. 306 CST). Con $2,000,000/mes → $1,000,000 en junio. Si llevas 3 meses → $500,000 proporcional. Debe pagarse antes del 30 de junio.
          </p>
        </section>

        <p className="text-slate-600 text-lg leading-relaxed">
          Calcula tu prima de servicios del primer semestre de 2026. Descubre exactamente cuánto recibirás en junio según tu salario y los meses trabajados.
        </p>
      </div>

      {/* Calculator */}
      <Calculator country="colombia" calculatorType="calculadora-prima-servicios" calculatorName="Prima de Servicios" />

      {/* How it works */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-6">
        <h2 className="text-base font-bold text-slate-800 mb-4">¿Cómo se calcula la prima de servicios 2026?</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            La prima de servicios está regulada por el <strong>Artículo 306 del Código Sustantivo del Trabajo</strong>. Todo empleado tiene derecho a recibir el equivalente a <strong>15 días de salario</strong> por cada semestre trabajado.
          </p>
          <p>
            Fórmula: <code className="bg-slate-100 px-1 rounded text-xs">(salario mensual × días trabajados en el semestre) ÷ 180</code>. En 2026, el salario mínimo es de <strong>$1,300,000/mes</strong> y el auxilio de transporte es de <strong>$200,000/mes</strong>.
          </p>
          <p>
            El primer semestre cubre del 1 de enero al 30 de junio, y el segundo del 1 de julio al 31 de diciembre. Si iniciaste en febrero, solo recibirás la prima proporcional a los días trabajados dentro del semestre.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preguntas frecuentes sobre la prima 2026</h2>
        <FAQAccordion faqs={faqItems} />
      </div>

      {/* CTA */}
      <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-800">¿También necesitas calcular tu liquidación completa?</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/colombia/calculadora-liquidacion" className="text-emerald-600 hover:underline">→ Calculadora Liquidación Colombia</Link>
          <Link href="/colombia/calculadora-cesantias" className="text-emerald-600 hover:underline">→ Cesantías e Intereses</Link>
          <Link href="/colombia/calculadora-vacaciones" className="text-emerald-600 hover:underline">→ Vacaciones Colombia</Link>
        </div>
      </div>
    </div>
  );
}
