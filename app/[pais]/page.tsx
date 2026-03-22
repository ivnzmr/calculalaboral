import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getAllCountrySlugs } from "@/data/countries";

type Props = {
  params: Promise<{ pais: string }>;
};

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ pais: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais } = await params;
  const country = countries[pais];

  if (!country) {
    return { title: "Pais no encontrado" };
  }

  const year = new Date().getFullYear();

  return {
    title: `Calculadoras Laborales ${country.name} ${year}`,
    description: `Calcula gratis tu finiquito, liquidacion, aguinaldo y vacaciones en ${country.name}. ${country.calculators.length} calculadoras laborales actualizadas ${year}.`,
    openGraph: {
      title: `Calculadoras Laborales ${country.name} ${year}`,
      description: `Herramientas gratuitas de calculo laboral para trabajadores de ${country.name}.`,
    },
  };
}

const COMPARADOR_COUNTRIES = ["mexico", "espana", "argentina", "colombia", "chile"];

const flagCodes: Record<string, string> = {
  mexico: "mx",
  colombia: "co",
  espana: "es",
  argentina: "ar",
  chile: "cl",
  peru: "pe",
  ecuador: "ec",
  venezuela: "ve",
  "costa-rica": "cr",
  bolivia: "bo",
};

const countryIntro: Record<string, string> = {
  mexico: `La Ley Federal del Trabajo (LFT) de Mexico establece los derechos minimos de los trabajadores. Todo empleado tiene derecho a recibir aguinaldo, vacaciones, prima vacacional y una liquidacion o finiquito al terminar su relacion laboral, ya sea por renuncia o despido.`,
  colombia: `El Codigo Sustantivo del Trabajo de Colombia garantiza a todos los trabajadores una serie de prestaciones sociales obligatorias, incluyendo cesantias, intereses sobre cesantias, prima de servicios y vacaciones proporcionales al tiempo laborado.`,
  espana: `El Estatuto de los Trabajadores de Espana regula los derechos laborales. Los trabajadores tienen derecho a finiquito, indemnizacion por despido, pagas extraordinarias, vacaciones y prestacion por desempleo segun los dias cotizados.`,
  argentina: `La Ley de Contrato de Trabajo (LCT) argentina establece el marco de derechos laborales. Incluye indemnizacion por despido, SAC (aguinaldo), vacaciones segun antiguedad y liquidacion final al terminar la relacion laboral.`,
  chile: `El Codigo del Trabajo de Chile regula las relaciones laborales. Los trabajadores tienen derecho a indemnizacion por anos de servicio, gratificacion legal, feriado legal (vacaciones), y descuentos previsionales AFP.`,
  peru: `La legislacion laboral peruana (Decreto Legislativo 728 y complementarios) garantiza CTS semestral, gratificaciones en julio y diciembre, vacaciones de 30 dias y liquidacion al concluir el contrato.`,
  ecuador: `El Codigo del Trabajo de Ecuador establece los derechos laborales incluyendo decimo tercer y cuarto sueldo, fondos de reserva desde el segundo ano, aportaciones al IESS y liquidacion completa al terminar.`,
  venezuela: `La Ley Organica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT) regula los derechos laborales venezolanos, incluyendo prestaciones sociales, utilidades, vacaciones y bono vacacional.`,
  "costa-rica": `El Codigo de Trabajo de Costa Rica garantiza el aguinaldo anual (Art. 228), el auxilio de cesantia, el preaviso y dos semanas minimas de vacaciones por cada ano trabajado.`,
  bolivia: `La legislacion laboral boliviana establece el aguinaldo de navidad obligatorio, el segundo aguinaldo condicional al crecimiento del PIB, el desahucio por despido intempestivo y vacaciones segun antiguedad.`,
};

// Category grouping based on slug keywords
const categoryKeywords: { label: string; keywords: string[] }[] = [
  {
    label: "Al terminar el contrato",
    keywords: [
      "finiquito",
      "liquidacion",
      "indemnizacion",
      "despido",
      "cesantia",
      "desahucio",
      "preaviso",
      "prestaciones",
      "utilidades",
      "liquidacion-final",
    ],
  },
  {
    label: "Beneficios y pagos",
    keywords: [
      "vacaciones",
      "aguinaldo",
      "sac",
      "prima",
      "gratific",
      "bono",
      "paga",
      "feriado",
      "cts",
      "decimo",
      "fondos-reserva",
    ],
  },
  {
    label: "Impuestos y deducciones",
    keywords: [
      "iva",
      "igv",
      "irpf",
      "imss",
      "isr",
      "afp",
      "onp",
      "iess",
      "seguridad",
      "nomina-neta",
    ],
  },
];

function getCategory(slug: string): string {
  for (const category of categoryKeywords) {
    for (const keyword of category.keywords) {
      if (slug.includes(keyword)) {
        return category.label;
      }
    }
  }
  return "Otros calculos";
}

export default async function CountryPage({ params }: Props) {
  const { pais } = await params;
  const country = countries[pais];

  if (!country) {
    notFound();
  }

  const year = new Date().getFullYear();
  const flagCode = flagCodes[pais] ?? "un";

  // Group calculators by category
  const grouped: Record<string, typeof country.calculators> = {};
  for (const calc of country.calculators) {
    const cat = getCategory(calc.slug);
    if (!grouped[cat]) {
      grouped[cat] = [];
    }
    grouped[cat].push(calc);
  }

  // Ordered categories (only those with at least 1 calculator)
  const categoryOrder = [
    "Al terminar el contrato",
    "Beneficios y pagos",
    "Impuestos y deducciones",
    "Otros calculos",
  ];
  const activeCategories = categoryOrder.filter(
    (cat) => grouped[cat] && grouped[cat].length > 0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500" aria-label="Navegacion">
        <Link href="/" className="hover:text-slate-800 transition-colors">
          Inicio
        </Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">{country.name}</span>
      </nav>

      {/* Hero */}
      <div className="flex items-center gap-5">
        <Image
          src={`https://flagcdn.com/w160/${flagCode}.png`}
          width={100}
          height={67}
          alt={`Bandera de ${country.name}`}
          className="rounded-md shadow-sm flex-shrink-0"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Calculadoras Laborales {country.name} {year}
          </h1>
          <p className="text-slate-600 mt-2 leading-relaxed max-w-2xl text-sm">
            {countryIntro[pais] ??
              `Calculadoras laborales gratuitas para trabajadores de ${country.name}.`}
          </p>
        </div>
      </div>

      {/* ADSENSE SLOT */}

      {/* Grouped calculator sections */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Calculadoras disponibles
        </h2>
        <div className="space-y-8">
          {activeCategories.map((cat) => (
            <div key={cat}>
              <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2 mb-4">
                {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {grouped[cat].map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${pais}/${calc.slug}`}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {calc.name}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {calc.description}
                    </p>
                    <p className="text-sm text-blue-600 font-medium mt-3 group-hover:underline">
                      Usar calculadora
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADSENSE SLOT */}

      {/* Comparador Finiquito vs Despido */}
      {COMPARADOR_COUNTRIES.includes(pais) && (
        <section className="mt-2">
          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-slate-800">¿Renunciar o esperar al despido?</p>
              <p className="text-sm text-slate-600 mt-1">
                Compara cuánto recibirías en cada escenario con tu salario y fechas reales.
              </p>
            </div>
            <Link
              href={`/${pais}/finiquito-vs-despido`}
              className="flex-shrink-0 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              Comparar escenarios →
            </Link>
          </div>
        </section>
      )}

      {/* Referencias útiles */}
      <section className="mt-2">
        <h2 className="text-lg font-bold text-slate-800 mb-3">
          Información laboral de referencia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/${country.slug}/salario-minimo`}
            className="group flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-sm transition-all"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                Salario Mínimo {country.name} 2026
              </p>
              <p className="text-xs text-slate-500">Tabla histórica y equivalencia en USD</p>
            </div>
          </Link>
          <Link
            href={`/${country.slug}/dias-festivos-2026`}
            className="group flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                Días Festivos {country.name} 2026
              </p>
              <p className="text-xs text-slate-500">Calendario oficial de feriados</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Legal disclaimer */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-slate-700 leading-relaxed">
        <strong className="text-slate-800">Informacion importante:</strong> Los
        calculos proporcionados por estas herramientas son orientativos y se
        basan en la legislacion laboral general de {country.name}. Los
        resultados pueden variar segun convenios colectivos, contratos
        individuales o situaciones especificas. Siempre consulta con un abogado
        o asesor laboral para casos concretos.
      </div>
    </div>
  );
}
