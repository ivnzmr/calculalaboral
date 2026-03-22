import type { Metadata } from "next";
import Link from "next/link";
import InflacionCalculator from "@/components/InflacionCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Inflación Salarial 2026 | Pérdida de poder adquisitivo",
  description:
    "Calcula cuánto ha perdido tu salario en poder adquisitivo por la inflación. Compara tu sueldo de años anteriores con el valor equivalente hoy. Disponible para México, Colombia, España, Argentina, Chile y más.",
  openGraph: {
    title: "Calculadora de Inflación Salarial 2026",
    description: "¿Tu salario vale menos que antes? Descubre cuánto poder adquisitivo has perdido por la inflación.",
  },
};

const faqs = [
  {
    q: "¿Qué es el poder adquisitivo?",
    a: "El poder adquisitivo es la cantidad de bienes y servicios que puedes comprar con tu salario. Si tu salario no sube al mismo ritmo que los precios (inflación), puedes comprar menos con el mismo dinero.",
  },
  {
    q: "¿Cómo se calcula el ajuste por inflación?",
    a: "Se usa la fórmula del interés compuesto: salario × (1 + tasa/100)^años. Esto calcula cuánto dinero necesitarías hoy para tener el mismo poder adquisitivo que en el año de referencia.",
  },
  {
    q: "¿Las tasas de inflación son exactas?",
    a: "Las tasas predeterminadas son referencias basadas en datos históricos recientes. Para un cálculo más preciso, puedes usar la tasa oficial publicada por el banco central o el instituto de estadística de tu país.",
  },
  {
    q: "¿Por qué Argentina y Venezuela tienen tasas tan altas?",
    a: "Estos países han experimentado períodos de hiperinflación. Las tasas predeterminadas son aproximadas y pueden variar enormemente según el período. En años recientes, Argentina llegó a superar el 200% anual.",
  },
];

export default function CalculadoraInflacionPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Calculadora de Inflación</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora de Inflación Salarial {year}
        </h1>
        <p className="text-lg text-slate-600">
          Descubre cuánto poder adquisitivo ha perdido tu salario por la inflación y
          cuánto necesitarías ganar hoy para mantener el mismo nivel de vida.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">¿Cómo funciona?</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Introduce tu salario de un año anterior, el año de referencia y la tasa de
          inflación promedio. La calculadora te mostrará cuánto vale hoy ese salario
          en términos reales y cuánto poder adquisitivo has perdido.
        </p>
      </div>

      <InflacionCalculator />

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
          <Link href="/calculadora-freelance" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadora Freelance
          </Link>
          <Link href="/mexico/calculadora-finiquito" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Finiquito México
          </Link>
          <Link href="/espana/calculadora-irpf" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            IRPF España
          </Link>
        </div>
      </section>
    </div>
  );
}
