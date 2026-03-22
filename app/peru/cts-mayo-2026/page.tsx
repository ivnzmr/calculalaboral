import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "CTS Mayo 2026 Perú – ¿Cuánto Te Depositan? | Calculadora",
  description:
    "Calcula tu depósito de CTS de mayo 2026 en Perú. Aproximadamente medio sueldo por semestre. Descubre el monto exacto y en qué banco se deposita. Gratis.",
  alternates: { canonical: "https://calculalaboral.net/peru/cts-mayo-2026" },
};

const faqItems = [
  {
    question: "¿Cuándo se deposita la CTS de mayo 2026?",
    answer:
      "El empleador debe depositar la CTS entre el 1 y el 15 de mayo de 2026. Si el 15 cae en fin de semana o feriado, el plazo se extiende al siguiente día hábil.",
  },
  {
    question: "¿Cuánto es la CTS de mayo 2026?",
    answer:
      "Aproximadamente la mitad de tu remuneración mensual por el semestre octubre–marzo. Con S/2,000/mes y 6 meses completos → S/1,000 (sin contar 1/6 de gratificación). El monto exacto incluye la remuneración básica más conceptos regulares.",
  },
  {
    question: "¿Puedo retirar mi CTS en mayo 2026?",
    answer:
      "Sí, pero con límites. Desde 2021, puedes retirar hasta el 100% del excedente de 4 remuneraciones brutas mensuales. La norma puede variar; consulta la última ley vigente antes del depósito.",
  },
  {
    question: "¿La CTS se descuenta de mi sueldo?",
    answer:
      "No. La CTS la paga íntegramente el empleador; no se descuenta de tu sueldo. Es un beneficio adicional que se deposita en una cuenta bancaria a tu nombre en el banco que elijas.",
  },
  {
    question: "¿Qué pasa si renuncio antes de mayo — pierdo la CTS?",
    answer:
      "No. Si renuncias antes del depósito de mayo, el empleador debe incluir la CTS proporcional en tu liquidación. Si el contrato termina por despido arbitrario, también tienes derecho a la CTS íntegra.",
  },
];

export default function CtsMayo2026Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calculalaboral.net/" },
      { "@type": "ListItem", position: 2, name: "Perú", item: "https://calculalaboral.net/peru" },
      { "@type": "ListItem", position: 3, name: "CTS Mayo 2026", item: "https://calculalaboral.net/peru/cts-mayo-2026" },
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
        <Link href="/peru" className="hover:text-emerald-600">Perú</Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-800 font-medium">CTS Mayo 2026</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full mb-3">
          Actualizado 2026
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          CTS Mayo 2026 – ¿Cuánto Te Depositan?
        </h1>

        {/* Featured snippet */}
        <section
          aria-label="Respuesta rápida"
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4"
        >
          <p className="text-sm font-semibold text-emerald-800 mb-1">
            ¿Cuánto CTS me depositan en mayo 2026?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Aproximadamente 1/12 de tu remuneración mensual por cada mes trabajado en el semestre (oct–mar). Con S/2,000/mes y 6 meses → S/1,000. Se deposita entre el 1 y el 15 de mayo en tu cuenta CTS.
          </p>
        </section>

        <p className="text-slate-600 text-lg leading-relaxed">
          Calcula cuánto CTS te corresponde depositar en mayo de 2026. Ingresa tu sueldo y los meses trabajados para obtener el monto exacto.
        </p>
      </div>

      {/* Calculator */}
      <Calculator country="peru" calculatorType="calculadora-cts" calculatorName="Calculadora CTS" />

      {/* How it works */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-6">
        <h2 className="text-base font-bold text-slate-800 mb-4">¿Cómo se calcula la CTS de mayo 2026?</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            La CTS (Compensación por Tiempo de Servicios) está regulada por el <strong>Decreto Supremo 001-97-TR</strong>. Se deposita semestralmente: en mayo (por el período octubre–marzo) y en noviembre (por el período abril–septiembre).
          </p>
          <p>
            La base de cálculo es: <code className="bg-slate-100 px-1 rounded text-xs">remuneración computable ÷ 12 × meses trabajados</code>. La remuneración computable incluye el básico, la asignación familiar y 1/6 de las gratificaciones percibidas en el semestre.
          </p>
          <p>
            En 2026, el salario mínimo en Perú es <strong>S/1,025/mes</strong>. La CTS mínima semestral para un trabajador con salario mínimo completo es aproximadamente <strong>S/512.50</strong> más el proporcional de gratificaciones.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preguntas frecuentes sobre la CTS mayo 2026</h2>
        <FAQAccordion faqs={faqItems} />
      </div>

      {/* CTA */}
      <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-800">¿También calculamos tu gratificación de julio?</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/peru/gratificacion-julio-2026" className="text-emerald-600 hover:underline">→ Gratificación Julio 2026</Link>
          <Link href="/peru/calculadora-vacaciones" className="text-emerald-600 hover:underline">→ Vacaciones Perú</Link>
          <Link href="/peru/calculadora-liquidacion" className="text-emerald-600 hover:underline">→ Liquidación Perú</Link>
        </div>
      </div>
    </div>
  );
}
