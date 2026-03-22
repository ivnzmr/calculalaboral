import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comparar Países | Derechos laborales por país 2026",
  description:
    "Compara los derechos laborales entre países hispanohablantes: finiquito, vacaciones, aguinaldo, seguridad social y más. México vs España, Colombia vs Argentina y más combinaciones.",
};

const COMPARISONS = [
  { pair: "mexico-vs-espana", label: "México vs España", description: "Finiquito, aguinaldo y días de vacaciones" },
  { pair: "colombia-vs-mexico", label: "Colombia vs México", description: "Liquidación, cesantías y prestaciones" },
  { pair: "argentina-vs-chile", label: "Argentina vs Chile", description: "Indemnización, SAC y sistema de pensiones" },
  { pair: "espana-vs-colombia", label: "España vs Colombia", description: "IRPF, cotizaciones y derechos laborales" },
  { pair: "chile-vs-peru", label: "Chile vs Perú", description: "AFP vs ONP, gratificación y CTS" },
  { pair: "mexico-vs-colombia", label: "México vs Colombia", description: "Aguinaldo, cesantías y liquidación final" },
];

export default function CompararPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Comparar países</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Comparar Derechos Laborales por País
        </h1>
        <p className="text-lg text-slate-600">
          Compara los principales derechos y beneficios laborales entre países hispanohablantes.
          Útil si estás considerando trabajar en otro país o evaluar ofertas internacionales.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {COMPARISONS.map((comp) => (
          <Link
            key={comp.pair}
            href={`/comparar/${comp.pair}`}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
          >
            <h2 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
              {comp.label}
            </h2>
            <p className="text-sm text-slate-500 mt-1">{comp.description}</p>
            <p className="text-sm text-blue-600 font-medium mt-3 group-hover:underline">
              Ver comparación →
            </p>
          </Link>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Calculadoras por país</p>
        <div className="flex flex-wrap gap-2">
          {["mexico", "colombia", "espana", "argentina", "chile", "peru", "ecuador", "venezuela", "costa-rica", "bolivia"].map((slug) => (
            <Link key={slug} href={`/${slug}`}
              className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors capitalize">
              {slug === "costa-rica" ? "Costa Rica" : slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
