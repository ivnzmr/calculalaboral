import type { Metadata } from "next";
import Link from "next/link";
import QuizWrapper from "./QuizWrapper";

export const metadata: Metadata = {
  title: "Quiz de Derechos Laborales 2026 | ¿Cuánto sabes sobre tu trabajo?",
  description:
    "Pon a prueba tu conocimiento sobre derechos laborales: finiquito, liquidación, vacaciones, aguinaldo y más. Quiz interactivo para México, Colombia, España, Argentina y Chile. Gratis.",
  openGraph: {
    title: "Quiz de Derechos Laborales 2026",
    description: "¿Sabes realmente cuáles son tus derechos como trabajador? Ponlos a prueba.",
  },
};

export default function QuizLaboralPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Quiz Laboral</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Quiz de Derechos Laborales {year}
        </h1>
        <p className="text-lg text-slate-600">
          Pon a prueba cuánto sabes sobre tus derechos laborales. Selecciona tu país
          y responde 10 preguntas sobre finiquito, vacaciones, aguinaldo y más.
        </p>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">¿Por qué conocer tus derechos?</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Muchos trabajadores desconocen los derechos que la ley les garantiza y
          terminan aceptando condiciones por debajo de lo mínimo legal. Este quiz te
          ayuda a identificar qué áreas necesitas estudiar.
        </p>
      </div>

      <QuizWrapper />

      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Calcula tus beneficios reales</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: "/mexico/calculadora-finiquito", label: "Finiquito México" },
            { href: "/colombia/calculadora-liquidacion", label: "Liquidación Colombia" },
            { href: "/espana/calculadora-finiquito", label: "Finiquito España" },
            { href: "/argentina/calculadora-indemnizacion", label: "Indemnización Argentina" },
            { href: "/chile/calculadora-finiquito", label: "Finiquito Chile" },
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
