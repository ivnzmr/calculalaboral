import type { Metadata } from "next";
import Link from "next/link";
import PensionCalculator from "@/components/PensionCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Pensión 2026 | Estimación de jubilación",
  description:
    "Estima tu pensión de jubilación según tu país, edad, salario y años cotizados. Disponible para México (IMSS/AFORE), España, Colombia, Argentina, Chile y Perú. Gratis, sin registro.",
  openGraph: {
    title: "Calculadora de Pensión 2026",
    description: "¿Cuánto cobrarás de pensión? Estima tu jubilación según tu historial laboral.",
  },
};

const faqs = [
  {
    q: "¿Cómo se calcula la pensión?",
    a: "El cálculo varía por país. En general, depende del salario promedio de los últimos años, los años cotizados y la edad de jubilación. Esta calculadora usa estimaciones basadas en la legislación vigente de cada país.",
  },
  {
    q: "¿Cuál es la diferencia entre un sistema de reparto y uno de capitalización?",
    a: "En el sistema de reparto (España, Colombia), los trabajadores activos financian las pensiones de los jubilados actuales. En el sistema de capitalización (Chile con AFP, México con AFORE), cada trabajador acumula un fondo individual para su propia jubilación.",
  },
  {
    q: "¿Qué pasa si no tengo suficientes años cotizados?",
    a: "En la mayoría de países hay un mínimo de años cotizados para acceder a una pensión contributiva. Si no se alcanza, en algunos países existe una pensión no contributiva o asistencial de menor monto.",
  },
  {
    q: "¿El resultado es exacto?",
    a: "No. Es una estimación orientativa. La pensión real depende de muchas variables: evolución salarial futura, cambios legislativos, rendimiento del fondo en sistemas de capitalización, y deducciones específicas. Consulta a un asesor previsional para una proyección personalizada.",
  },
];

export default function CalculadoraPensionPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Calculadora de Pensión</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora de Pensión {year}
        </h1>
        <p className="text-lg text-slate-600">
          Estima cuánto cobrarás de pensión al jubilarte según tu país, edad actual,
          salario y años cotizados.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">Estimación orientativa</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Los sistemas de pensiones varían significativamente entre países y cambian
          con frecuencia. Este cálculo es una aproximación basada en reglas generales.
          Para una proyección precisa, consulta con el organismo previsional de tu país.
        </p>
      </div>

      <PensionCalculator />

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
            { href: "/calculadora-irpf", label: "IRPF / ISR" },
            { href: "/calculadora-inflacion", label: "Inflación Salarial" },
            { href: "/calculadora-freelance", label: "Tarifa Freelance" },
            { href: "/espana/calculadora-finiquito", label: "Finiquito España" },
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
