import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries } from "@/data/countries";
import ComparadorCalculator from "@/components/ComparadorCalculator";

type Props = {
  params: Promise<{ pais: string }>;
};

const SUPPORTED_COUNTRIES = ["mexico", "espana", "argentina", "colombia", "chile"];

export function generateStaticParams() {
  return SUPPORTED_COUNTRIES.map((pais) => ({ pais }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais } = await params;
  const country = countries[pais];
  if (!country) return { title: "No encontrado" };

  const year = new Date().getFullYear();
  return {
    title: `Finiquito vs Despido ${country.name} ${year} | Cuánto recibes en cada caso`,
    description: `Compara cuánto recibirías si renuncias (finiquito) vs si te despiden (liquidación) en ${country.name}. Calcula la diferencia al instante con tu salario y fechas reales.`,
    openGraph: {
      title: `Finiquito vs Despido ${country.name} ${year}`,
      description: `¿Cuánto más recibes si te despiden que si renuncias? Compara ambos escenarios en ${country.name}.`,
    },
  };
}

export default async function FiniquitoVsDespidoPage({ params }: Props) {
  const { pais } = await params;

  if (!SUPPORTED_COUNTRIES.includes(pais)) notFound();

  const country = countries[pais];
  if (!country) notFound();

  const year = new Date().getFullYear();

  const labelMap: Record<string, { renuncia: string; despido: string }> = {
    mexico: { renuncia: "Finiquito (renuncia)", despido: "Liquidación (despido injustificado)" },
    espana: { renuncia: "Finiquito (fin de contrato/renuncia)", despido: "Indemnización despido improcedente" },
    argentina: { renuncia: "SAC + vacaciones proporcionales", despido: "Liquidación final LCT Art. 245" },
    colombia: { renuncia: "Vacaciones + cesantías proporcionales", despido: "Liquidación completa" },
    chile: { renuncia: "Feriado + gratificación proporcional", despido: "Finiquito por despido (indemnización incluida)" },
  };

  const labels = labelMap[pais];

  const faqs = [
    {
      q: `¿Cuál es la diferencia entre finiquito y liquidación en ${country.name}?`,
      a: "El finiquito es el pago que recibes cuando renuncias voluntariamente: incluye salarios pendientes, vacaciones proporcionales y otras prestaciones acumuladas. La liquidación o indemnización por despido incluye además una compensación económica por el despido injustificado, que varía según tus años de servicio.",
    },
    {
      q: "¿Me conviene renunciar o esperar a que me despidan?",
      a: "Económicamente, en la mayoría de los casos recibes más dinero si te despiden que si renuncias, porque la liquidación incluye una indemnización adicional. Sin embargo, hay factores a considerar: el impacto en tu historial laboral, acceso al seguro de desempleo, y la negociación con tu empleador.",
    },
    {
      q: "¿Los cálculos incluyen todos los conceptos?",
      a: "Los cálculos son orientativos y se basan en la legislación laboral general. Pueden existir conceptos adicionales según tu contrato colectivo, convenios específicos o situaciones particulares. Consulta siempre con un asesor laboral para casos específicos.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <Link href={`/${pais}`} className="hover:text-slate-800 transition-colors">{country.name}</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Finiquito vs Despido</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Finiquito vs Despido {country.name} {year}
        </h1>
        <p className="text-lg text-slate-600">
          Calcula cuánto recibirías en cada escenario con tu salario y fechas reales.
          Descubre la diferencia económica entre renunciar y ser despedido.
        </p>
      </div>

      {/* Comparison labels */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-semibold text-amber-800 mb-1">Escenario A — Renuncias</p>
          <p className="text-amber-700">{labels.renuncia}</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="font-semibold text-emerald-800 mb-1">Escenario B — Te despiden</p>
          <p className="text-emerald-700">{labels.despido}</p>
        </div>
      </div>

      {/* Calculator */}
      <ComparadorCalculator
        country={pais}
        countryName={country.name}
        currency={country.currency}
        currencySymbol={country.currencySymbol}
      />

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

      {/* Links to calculators */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Calculadoras relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {country.calculators.slice(0, 5).map((calc) => (
            <Link
              key={calc.slug}
              href={`/${pais}/${calc.slug}`}
              className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
            >
              {calc.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
