import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "SAC Junio 2026 Argentina – ¿Cuánto Cobrarás? | Calculadora",
  description:
    "Calcula tu SAC (aguinaldo) de junio 2026 en Argentina. La mitad del mejor sueldo del semestre. Fórmula oficial, actualizado 2026. Gratis y sin registro.",
  alternates: { canonical: "https://calculalaboral.net/argentina/sac-junio-2026" },
};

const faqItems = [
  {
    question: "¿Cuándo se paga el SAC de junio 2026 en Argentina?",
    answer:
      "La primera cuota del SAC debe abonarse antes del 30 de junio de 2026. La segunda cuota se paga antes del 31 de diciembre. Si el empleador no paga en plazo, debe intereses.",
  },
  {
    question: "¿Cómo se calcula el SAC de junio 2026?",
    answer:
      "El SAC es la mitad del mejor sueldo mensual normal del semestre (enero–junio). Si tu mejor sueldo fue $600,000, recibirás $300,000. Si trabajaste menos del semestre completo, es proporcional a los días trabajados.",
  },
  {
    question: "¿El SAC paga aportes y contribuciones en 2026?",
    answer:
      "Sí. El SAC está sujeto a los mismos descuentos que el salario ordinario: aportes jubilatorios (11%), obra social (3%) y PAMI (3%). La alícuota total de descuentos al trabajador ronda el 17%.",
  },
  {
    question: "¿El SAC se incluye en la base del impuesto a las ganancias?",
    answer:
      "Sí, el SAC forma parte de la remuneración anual para el cálculo del Impuesto a las Ganancias (4ª categoría). A partir de 2024, solo los salarios que superen el mínimo no imponible tributan.",
  },
  {
    question: "¿Si me despiden, cobro el SAC proporcional?",
    answer:
      "Sí. La liquidación final debe incluir el SAC proporcional desde el inicio del semestre hasta la fecha de desvinculación, además de la indemnización por Art. 245 LCT y los demás rubros de la liquidación.",
  },
];

export default function SacJunio2026Page() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://calculalaboral.net/" },
      { "@type": "ListItem", position: 2, name: "Argentina", item: "https://calculalaboral.net/argentina" },
      { "@type": "ListItem", position: 3, name: "SAC Junio 2026", item: "https://calculalaboral.net/argentina/sac-junio-2026" },
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
        <Link href="/argentina" className="hover:text-emerald-600">Argentina</Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-800 font-medium">SAC Junio 2026</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full mb-3">
          Actualizado 2026
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          SAC Junio 2026 Argentina – Calcula Tu Aguinaldo
        </h1>

        {/* Featured snippet */}
        <section
          aria-label="Respuesta rápida"
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4"
        >
          <p className="text-sm font-semibold text-emerald-800 mb-1">
            ¿Cuánto SAC cobro en junio 2026?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            La mitad del mejor sueldo mensual normal del semestre (enero–junio). Con $600,000 de mejor sueldo → $300,000 brutos. Si trabajaste solo 3 meses → $150,000. Debe abonarse antes del 30 de junio.
          </p>
        </section>

        <p className="text-slate-600 text-lg leading-relaxed">
          Calcula tu SAC (Sueldo Anual Complementario) del primer semestre de 2026. Descubre cuánto recibirás antes del 30 de junio según tu mejor sueldo y los meses trabajados.
        </p>
      </div>

      {/* Calculator */}
      <Calculator country="argentina" calculatorType="calculadora-sac" calculatorName="Calculadora SAC" />

      {/* How it works */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-6">
        <h2 className="text-base font-bold text-slate-800 mb-4">¿Cómo se calcula el SAC de junio 2026?</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            El SAC está regulado por la <strong>Ley 23.041</strong> y el <strong>Art. 122 de la LCT</strong>. Todo trabajador en relación de dependencia tiene derecho a recibir el equivalente al 50% del mejor salario mensual normal y habitual devengado en cada semestre.
          </p>
          <p>
            El primer semestre abarca de enero a junio; el segundo, de julio a diciembre. La fórmula es: <code className="bg-slate-100 px-1 rounded text-xs">mejor sueldo del semestre ÷ 2 × (días trabajados ÷ 180)</code>. Los trabajadores que hayan laborado los 6 meses completos cobran el 100% de la mitad del mejor sueldo.
          </p>
          <p>
            El SAC está sujeto a descuentos de seguridad social (≈17%) y, en los casos que corresponda, al Impuesto a las Ganancias. El neto que recibirás en mano será el bruto menos esos descuentos.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preguntas frecuentes sobre el SAC junio 2026</h2>
        <FAQAccordion faqs={faqItems} />
      </div>

      {/* CTA */}
      <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-800">¿También calculas tu liquidación o indemnización?</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/argentina/calculadora-indemnizacion" className="text-emerald-600 hover:underline">→ Indemnización por Despido</Link>
          <Link href="/argentina/calculadora-liquidacion-final" className="text-emerald-600 hover:underline">→ Liquidación Final Argentina</Link>
          <Link href="/argentina/calculadora-vacaciones" className="text-emerald-600 hover:underline">→ Vacaciones Argentina</Link>
        </div>
      </div>
    </div>
  );
}
