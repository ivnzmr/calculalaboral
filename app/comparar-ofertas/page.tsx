import type { Metadata } from "next";
import Link from "next/link";
import ComparadorOfertas from "@/components/ComparadorOfertas";

export const metadata: Metadata = {
  title: "Comparar Ofertas de Trabajo 2026 | ¿Cuál oferta es mejor?",
  description:
    "Compara dos ofertas de trabajo lado a lado: salario neto, tarifa por hora, beneficios, vacaciones y seguro médico. Descubre cuál oferta es realmente más ventajosa. Gratis.",
  openGraph: {
    title: "Comparador de Ofertas de Trabajo 2026",
    description: "¿Tienes dos ofertas y no sabes cuál elegir? Compáralas con todos los factores que importan.",
  },
};

const faqs = [
  {
    q: "¿Por qué una oferta con mayor salario no siempre es mejor?",
    a: "Un salario bruto más alto puede quedar muy similar en neto si el puesto tiene menos beneficios. Hay que considerar: vacaciones pagadas (días extra = días de salario gratis), seguro médico (ahorro en primas), trabajo remoto (ahorro en transporte), y el coste de vida si implica mudanza.",
  },
  {
    q: "¿Cómo se calcula la tarifa por hora?",
    a: "Se divide el salario neto mensual entre las horas trabajadas al mes. Esto permite comparar dos ofertas aunque tengan jornadas diferentes. Una oferta de 40h/semana vs 30h/semana con el mismo salario tiene tarifas por hora muy distintas.",
  },
  {
    q: "¿Qué peso tiene cada factor en la puntuación?",
    a: "El salario neto tiene el mayor peso (50%), seguido de vacaciones (20%), seguro médico (15%) y trabajo remoto (15%). Puedes usar esta puntuación como guía, pero la decisión final depende de tus prioridades personales.",
  },
  {
    q: "¿Debo considerar el crecimiento profesional?",
    a: "Esta calculadora compara el valor económico inmediato de las ofertas. El desarrollo profesional, la cultura de empresa, la estabilidad del sector y las oportunidades de promoción son factores igualmente importantes que debes evaluar por separado.",
  },
];

export default function CompararOfertasPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Comparar Ofertas de Trabajo</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Comparador de Ofertas de Trabajo {year}
        </h1>
        <p className="text-lg text-slate-600">
          Introduce los detalles de dos ofertas y descubre cuál es realmente mejor
          considerando salario, beneficios y condiciones laborales.
        </p>
      </div>

      <ComparadorOfertas />

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-800 mb-2">{faq.q}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Herramientas relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: "/mexico/finiquito-vs-despido", label: "Finiquito vs Despido México" },
            { href: "/calculadora-freelance", label: "Tarifa Freelance" },
            { href: "/para-empleadores", label: "Coste de Contratar" },
            { href: "/carta-de-renuncia", label: "Carta de Renuncia" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
