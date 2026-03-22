import type { Metadata } from "next";
import Link from "next/link";
import IRPFCalculator from "@/components/IRPFCalculator";

export const metadata: Metadata = {
  title: "Calculadora IRPF / ISR 2026 | Impuesto sobre la renta España y México",
  description:
    "Calcula el impuesto sobre la renta (IRPF en España, ISR en México). Conoce tu tipo efectivo, desglose por tramos y salario neto después de impuestos. Gratis y actualizado 2026.",
  openGraph: {
    title: "Calculadora IRPF / ISR 2026 | España y México",
    description: "¿Cuánto pagas de impuestos? Calcula tu IRPF o ISR con desglose completo por tramos.",
  },
};

const faqs = [
  {
    q: "¿Qué es el IRPF?",
    a: "El Impuesto sobre la Renta de las Personas Físicas (IRPF) es el impuesto principal que grava los ingresos de los trabajadores en España. Es progresivo: a mayor salario, mayor porcentaje se paga. Se divide en tramos estatales y autonómicos.",
  },
  {
    q: "¿Qué es el ISR en México?",
    a: "El Impuesto Sobre la Renta (ISR) es el equivalente mexicano al IRPF. Grava los ingresos de personas físicas y morales. Para los trabajadores asalariados, el empleador lo retiene directamente del salario cada mes.",
  },
  {
    q: "¿Qué es el tipo efectivo?",
    a: "El tipo efectivo es el porcentaje real que pagas de impuestos sobre tu salario total, considerando todos los tramos. Es siempre menor que el tipo marginal (el tramo más alto al que llegas), porque los tramos inferiores tributan a tasas más bajas.",
  },
  {
    q: "¿El cálculo incluye deducciones?",
    a: "El cálculo aplica las deducciones básicas estándar (mínimo personal/familiar, reducción por rendimientos del trabajo). No incluye deducciones específicas como hipoteca, aportaciones a planes de pensiones u otras situaciones personales.",
  },
];

export default function CalculadoraIRPFPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Calculadora IRPF / ISR</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora IRPF / ISR {year}
        </h1>
        <p className="text-lg text-slate-600">
          Calcula cuánto pagas de impuesto sobre la renta en España (IRPF) o México (ISR),
          con desglose por tramos y tipo efectivo real.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">¿Cómo funciona?</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Selecciona tu país, introduce tu salario bruto anual o mensual y tu situación
          familiar. La calculadora aplica los tramos impositivos {year} y te muestra
          tu cuota íntegra, tipo efectivo y salario neto.
        </p>
      </div>

      <IRPFCalculator />

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
            { href: "/espana/calculadora-irpf", label: "IRPF España (detallado)" },
            { href: "/mexico/calculadora-isr", label: "ISR México" },
            { href: "/calculadora-freelance", label: "Tarifa Freelance" },
            { href: "/para-empleadores", label: "Coste de Contratar" },
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
