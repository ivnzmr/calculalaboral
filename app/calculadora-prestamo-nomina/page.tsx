import type { Metadata } from "next";
import Link from "next/link";
import PrestamoNominaCalculator from "@/components/PrestamoNominaCalculator";

export const metadata: Metadata = {
  title: "Calculadora Préstamo de Nómina 2026 | Cuota y tabla de amortización",
  description:
    "Calcula la cuota mensual y el coste total de un crédito de nómina. Incluye tabla de amortización y alerta si la cuota supera el 30% de tu salario. Gratis, sin registro.",
  openGraph: {
    title: "Calculadora Préstamo de Nómina 2026",
    description: "¿Cuánto pagarás por un préstamo de nómina? Calcula tu cuota mensual y el total de intereses.",
  },
};

const faqs = [
  {
    q: "¿Qué es un préstamo de nómina?",
    a: "Un crédito de nómina es un préstamo personal cuyo descuento se realiza directamente en el recibo de sueldo del trabajador. Generalmente tiene tasas más bajas que otros créditos personales porque el riesgo de impago es menor para el banco.",
  },
  {
    q: "¿Por qué no debería superar el 30% de mi salario?",
    a: "La regla general de finanzas personales es que las deudas no deberían consumir más del 30-35% de tus ingresos netos. Superar ese umbral puede comprometer el pago de gastos básicos como renta, alimentación y servicios.",
  },
  {
    q: "¿Cómo se calcula la cuota mensual?",
    a: "Se usa la fórmula de anualidad: cuota = (capital × tasa_mensual) / (1 - (1 + tasa_mensual)^-n). La tasa mensual es la tasa anual dividida entre 12.",
  },
  {
    q: "¿Qué es la tabla de amortización?",
    a: "Es el desglose mes a mes de cada pago, indicando cuánto va a capital (reduce tu deuda) y cuánto a intereses. Al inicio del préstamo, la mayor parte de la cuota va a intereses; al final, la mayor parte va a capital.",
  },
];

export default function CalculadoraPrestamoNominaPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Calculadora Préstamo de Nómina</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora Préstamo de Nómina {year}
        </h1>
        <p className="text-lg text-slate-600">
          Calcula tu cuota mensual, el total de intereses y si el préstamo es
          sostenible en relación a tu salario.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">¿Cómo funciona?</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Introduce tu salario neto mensual, el monto del préstamo, la tasa de interés
          anual y el plazo. La calculadora te mostrará la cuota mensual, el total a
          pagar y una tabla de amortización completa.
        </p>
      </div>

      <PrestamoNominaCalculator />

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
          <Link href="/calculadora-inflacion" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadora Inflación
          </Link>
          <Link href="/calculadora-freelance" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadora Freelance
          </Link>
          <Link href="/mexico/calculadora-finiquito" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Finiquito México
          </Link>
        </div>
      </section>
    </div>
  );
}
