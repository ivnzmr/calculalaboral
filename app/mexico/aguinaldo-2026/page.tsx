import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Aguinaldo México 2026 – ¿Cuánto Te Corresponde? | Calculadora",
  description:
    "Calcula tu aguinaldo 2026 al instante. Mínimo 15 días de salario por ley. Incluye aguinaldo proporcional si trabajaste menos de un año. LFT actualizada, gratis.",
  alternates: { canonical: "https://calculalaboral.net/mexico/aguinaldo-2026" },
};

const faqItems = [
  {
    question: "¿Cuándo se paga el aguinaldo 2026 en México?",
    answer:
      "El aguinaldo debe pagarse antes del 20 de diciembre de 2026. Si el patrón no lo paga a tiempo incurre en una multa de hasta 5,000 UMAs según la LFT.",
  },
  {
    question: "¿Cuántos días de aguinaldo me corresponden en 2026?",
    answer:
      "La ley establece un mínimo de 15 días de salario. Muchas empresas otorgan 30, 40 o más días por convenio colectivo o política interna. Si trabajaste menos de un año, el aguinaldo es proporcional a los días laborados.",
  },
  {
    question: "¿Cómo se calcula el aguinaldo proporcional en 2026?",
    answer:
      "Fórmula: (salario diario × días mínimos × días trabajados en el año) ÷ 365. Ejemplo: salario diario $500, 15 días mínimos, 6 meses trabajados (180 días) → ($500 × 15 × 180) ÷ 365 ≈ $3,699.",
  },
  {
    question: "¿El aguinaldo está gravado por ISR en 2026?",
    answer:
      "La parte exenta es el equivalente a 30 días de salario mínimo general (zona libre de la frontera norte: $374.89/día; resto del país: $278.80/día en 2026). El excedente tributa como ingreso ordinario.",
  },
  {
    question: "¿Qué pasa si renuncio antes de diciembre — pierdo el aguinaldo?",
    answer:
      "No. Tienes derecho al aguinaldo proporcional por los días trabajados durante el año, incluso si renuncias o te despiden antes del pago. El patrón debe liquidarlo en el finiquito.",
  },
];

export default function AguinaldoMexico2026Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calculalaboral.net/" },
      { "@type": "ListItem", position: 2, name: "México", item: "https://calculalaboral.net/mexico" },
      { "@type": "ListItem", position: 3, name: "Aguinaldo 2026", item: "https://calculalaboral.net/mexico/aguinaldo-2026" },
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
        <Link href="/mexico" className="hover:text-emerald-600">México</Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-800 font-medium">Aguinaldo 2026</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full mb-3">
          Actualizado 2026
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Calculadora Aguinaldo México 2026
        </h1>

        {/* Featured snippet */}
        <section
          aria-label="Respuesta rápida"
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4"
        >
          <p className="text-sm font-semibold text-emerald-800 mb-1">
            ¿Cuánto aguinaldo me corresponde en 2026?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Mínimo 15 días de salario por ley (Art. 87 LFT). Si trabajaste el año completo con $500/día → $7,500. Si llevas 6 meses → $3,750 proporcional. Debe pagarse antes del 20 de diciembre.
          </p>
        </section>

        <p className="text-slate-600 text-lg leading-relaxed">
          Calcula exactamente cuánto aguinaldo te corresponde en diciembre de 2026 según tu salario y los días trabajados durante el año.
        </p>
      </div>

      {/* Calculator */}
      <Calculator country="mexico" calculatorType="calculadora-aguinaldo" calculatorName="Calculadora Aguinaldo" />

      {/* How it works */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-6">
        <h2 className="text-base font-bold text-slate-800 mb-4">¿Cómo se calcula el aguinaldo 2026?</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            El aguinaldo en México está regulado por el <strong>Artículo 87 de la Ley Federal del Trabajo</strong>. Todo trabajador que haya prestado servicios durante el año tiene derecho a recibir un aguinaldo mínimo de <strong>15 días de salario</strong>.
          </p>
          <p>
            Si no trabajaste el año completo, el aguinaldo se calcula de forma proporcional: <code className="bg-slate-100 px-1 rounded text-xs">(salario diario × 15 días × días trabajados) ÷ 365</code>. El patrón debe pagarlo antes del <strong>20 de diciembre</strong>.
          </p>
          <p>
            En 2026, el salario mínimo general es de <strong>$278.80/día</strong> (zona libre de la frontera norte: $374.89/día). Si tu empresa ofrece más de 15 días por convenio, aplica el número de días acordado.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preguntas frecuentes sobre el aguinaldo 2026</h2>
        <FAQAccordion faqs={faqItems} />
      </div>

      {/* CTA */}
      <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-800">¿También necesitas calcular tu finiquito o liquidación?</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/mexico/calculadora-finiquito" className="text-emerald-600 hover:underline">→ Calculadora Finiquito México</Link>
          <Link href="/mexico/calculadora-liquidacion-despido-injustificado" className="text-emerald-600 hover:underline">→ Liquidación por Despido</Link>
          <Link href="/mexico/calculadora-vacaciones" className="text-emerald-600 hover:underline">→ Vacaciones Proporcionales</Link>
        </div>
      </div>
    </div>
  );
}
