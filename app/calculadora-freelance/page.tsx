import type { Metadata } from "next";
import Link from "next/link";
import FreelanceCalculator from "@/components/FreelanceCalculator";

export const metadata: Metadata = {
  title: "Calculadora Tarifa Freelance 2026 | Cuánto cobrar por hora",
  description:
    "Calcula cuánto debes cobrar por hora como freelance para equivaler a un empleo en relación de dependencia. Considera vacaciones, festivos, seguridad social y tiempo no facturable. Gratis, sin registro.",
  openGraph: {
    title: "Calculadora Tarifa Freelance 2026 | Cuánto cobrar por hora",
    description:
      "¿Cuánto cobrar como freelance? Calcula tu tarifa mínima y recomendada según tu país, salario objetivo y horas trabajadas.",
  },
};

const faqs = [
  {
    q: "¿Por qué la tarifa freelance debe ser más alta que el salario por hora de un empleado?",
    a: "Como freelance, tú asumir todos los costes que en un empleo paga la empresa: seguridad social patronal, días de vacaciones no facturados, festivos, tiempo de gestión administrativa, formación y los períodos sin clientes. Si cobras lo mismo por hora que ganas como empleado, terminarás ganando mucho menos.",
  },
  {
    q: "¿Qué es el tiempo no facturable?",
    a: "Es el tiempo que trabajas pero no puedes cobrar al cliente: reuniones de ventas, propuestas, facturación, formación, búsqueda de nuevos clientes. Un freelance típico destina entre el 20% y el 40% de su tiempo a estas tareas. Cuanto mayor sea este porcentaje, más alta debe ser tu tarifa.",
  },
  {
    q: "¿Qué incluye el coste de Seguridad Social patronal?",
    a: "En un empleo, la empresa paga sobre tu salario una contribución adicional al sistema de seguridad social (pensiones, salud, desempleo). Como freelance, eres tú quien asume este coste, por lo que tu tarifa debe cubrir el equivalente de esas contribuciones.",
  },
  {
    q: "¿Debería usar la tarifa mínima o la recomendada?",
    a: "La tarifa mínima es el punto de equilibrio: cobrar por debajo de ella significa que ganas menos que si fueras empleado. La tarifa recomendada añade un margen que compensa la incertidumbre, los períodos sin trabajo y el riesgo propio del trabajo independiente. Para clientes a largo plazo puedes negociar entre ambas.",
  },
  {
    q: "¿El cálculo incluye impuestos sobre la renta como freelance?",
    a: "No. El cálculo se enfoca en el coste laboral equivalente (lo que costaría contratarte como empleado). Los impuestos sobre ingresos como autónomo o freelance varían mucho según tu situación personal, regimen fiscal y país. Consulta a un contador para tu caso específico.",
  },
];

export default function CalculadoraFreelancePage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">
          Inicio
        </Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Calculadora Freelance</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora Tarifa Freelance {year}
        </h1>
        <p className="text-lg text-slate-600">
          Descubre cuánto debes cobrar por hora como freelance para mantener el equivalente
          a un empleo en relación de dependencia, considerando costes reales de tu país.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">¿Cómo funciona el cálculo?</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          La herramienta toma tu salario mensual objetivo y calcula el coste real que supondría
          contratarte como empleado (incluyendo seguridad social patronal). Luego lo divide entre
          las horas que realmente puedes facturar al año, descontando vacaciones, festivos y
          tiempo no facturable.
        </p>
      </div>

      {/* Calculator */}
      <FreelanceCalculator />

      {/* FAQs */}
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

      {/* Related links */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Calculadoras relacionadas</p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/mexico/finiquito-vs-despido"
            className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            Finiquito vs Despido México
          </Link>
          <Link
            href="/espana/finiquito-vs-despido"
            className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            Finiquito vs Despido España
          </Link>
          <Link
            href="/colombia/finiquito-vs-despido"
            className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            Finiquito vs Despido Colombia
          </Link>
          <Link
            href="/carta-de-renuncia"
            className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            Carta de Renuncia
          </Link>
        </div>
      </section>
    </div>
  );
}
