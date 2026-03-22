import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Gratificación Julio 2026 Perú – ¿Cuánto Te Corresponde? | Calculadora",
  description:
    "Calcula tu gratificación de julio 2026 en Perú al instante. Un sueldo completo por Fiestas Patrias más bonificación extraordinaria del 9%. Ley 27735, gratis.",
  alternates: { canonical: "https://calculalaboral.net/peru/gratificacion-julio-2026" },
};

const faqItems = [
  {
    question: "¿Cuándo se paga la gratificación de julio 2026 en Perú?",
    answer:
      "La primera quincena de julio 2026 (entre el 1 y el 15 de julio). El empleador tiene la obligación de pagarla dentro de ese período; si no lo hace incurre en multas de SUNAFIL.",
  },
  {
    question: "¿Cuánto es la gratificación de julio 2026?",
    answer:
      "Un sueldo mensual completo más una bonificación extraordinaria equivalente al 9% de la gratificación. Con S/2,500/mes → S/2,500 + S/225 = S/2,725 en total. Si trabajaste menos de 6 meses, es proporcional.",
  },
  {
    question: "¿La gratificación de Fiestas Patrias 2026 está afecta a descuentos?",
    answer:
      "No. Desde la Ley 29351 (prorrogada indefinidamente), las gratificaciones están inafectas a descuentos de AFP/ONP y EsSalud. Solo se descuenta el Impuesto a la Renta si superas el mínimo no imponible.",
  },
  {
    question: "¿Cómo se calcula la gratificación proporcional?",
    answer:
      "Fórmula: (remuneración mensual ÷ 6) × meses completos trabajados en el semestre. El semestre de julio va de enero a junio. Si tienes 4 meses completos: (S/2,500 ÷ 6) × 4 = S/1,667.",
  },
  {
    question: "¿Qué incluye la remuneración base para calcular la gratificación?",
    answer:
      "El sueldo básico más las remuneraciones de carácter regular y permanente: asignación familiar (S/102.50 en 2026), horas extras habituales y otras asignaciones fijas. No incluye conceptos variables ni ocasionales.",
  },
];

export default function GratificacionJulio2026Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calculalaboral.net/" },
      { "@type": "ListItem", position: 2, name: "Perú", item: "https://calculalaboral.net/peru" },
      { "@type": "ListItem", position: 3, name: "Gratificación Julio 2026", item: "https://calculalaboral.net/peru/gratificacion-julio-2026" },
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
        <span className="text-slate-800 font-medium">Gratificación Julio 2026</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full mb-3">
          Actualizado 2026
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Gratificación Fiestas Patrias Julio 2026 – Perú
        </h1>

        {/* Featured snippet */}
        <section
          aria-label="Respuesta rápida"
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4"
        >
          <p className="text-sm font-semibold text-emerald-800 mb-1">
            ¿Cuánto es la gratificación de julio 2026 en Perú?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Un sueldo mensual completo + bonificación extraordinaria del 9% (inafecta a descuentos). Con S/2,500/mes → S/2,725 en total. Se paga en la primera quincena de julio. Si llevas menos de 6 meses, es proporcional.
          </p>
        </section>

        <p className="text-slate-600 text-lg leading-relaxed">
          Calcula tu gratificación de Fiestas Patrias 2026. Descubre el monto exacto que recibirás en julio según tu remuneración y los meses trabajados en el semestre.
        </p>
      </div>

      {/* Calculator */}
      <Calculator country="peru" calculatorType="calculadora-gratificaciones" calculatorName="Calculadora Gratificaciones" />

      {/* How it works */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-6">
        <h2 className="text-base font-bold text-slate-800 mb-4">¿Cómo se calcula la gratificación julio 2026?</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            La gratificación está regulada por la <strong>Ley 27735</strong>. Todo trabajador en planilla recibe dos gratificaciones al año: una en julio (Fiestas Patrias) y otra en diciembre (Navidad), equivalentes a <strong>un sueldo mensual cada una</strong>.
          </p>
          <p>
            Adicionalmente, por la <strong>bonificación extraordinaria</strong> (Ley 29351), recibes un 9% adicional sobre la gratificación, libre de descuentos. El semestre de julio abarca de enero a junio. Si comenzaste en marzo, recibes gratificación proporcional por 4 meses.
          </p>
          <p>
            En 2026, el sueldo mínimo en Perú es de <strong>S/1,025/mes</strong>. La gratificación mínima para trabajadores con el salario mínimo es S/1,025 + S/92.25 = <strong>S/1,117.25</strong>.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preguntas frecuentes sobre la gratificación julio 2026</h2>
        <FAQAccordion faqs={faqItems} />
      </div>

      {/* CTA */}
      <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-800">¿También necesitas calcular tu CTS o liquidación?</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/peru/cts-mayo-2026" className="text-emerald-600 hover:underline">→ CTS Mayo 2026</Link>
          <Link href="/peru/calculadora-cts" className="text-emerald-600 hover:underline">→ Calculadora CTS Perú</Link>
          <Link href="/peru/calculadora-liquidacion" className="text-emerald-600 hover:underline">→ Liquidación Perú</Link>
        </div>
      </div>
    </div>
  );
}
