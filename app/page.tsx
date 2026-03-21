import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import { salariosMinimos } from "@/data/salarios-minimos";

export const metadata: Metadata = {
  title:
    "Calculadoras Laborales Gratis 2026 | Mexico, Colombia, Espana, Argentina, Chile, Peru y mas",
  description:
    "Calcula gratis tu finiquito, liquidacion, aguinaldo, vacaciones, cesantias, indemnizacion, CTS y mas en 10 paises hispanohablantes. Resultados instantaneos y precisos.",
  openGraph: {
    title:
      "Calculadoras Laborales Gratis 2026 | 10 Paises Hispanohablantes",
    description:
      "Calcula gratis tu finiquito, liquidacion, aguinaldo y mas en Mexico, Colombia, Espana, Argentina, Chile, Peru y mas.",
    type: "website",
  },
};

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

const popularCalculators = [
  {
    country: "Mexico",
    countrySlug: "mexico",
    name: "Calculadora de Finiquito",
    slug: "calculadora-finiquito",
    description:
      "Calcula tu finiquito por renuncia voluntaria incluyendo aguinaldo y vacaciones proporcionales.",
  },
  {
    country: "Colombia",
    countrySlug: "colombia",
    name: "Calculadora de Liquidacion",
    slug: "calculadora-liquidacion",
    description:
      "Cesantias, prima de servicios y vacaciones proporcionales al terminar tu contrato.",
  },
  {
    country: "Espana",
    countrySlug: "espana",
    name: "Prestacion por Desempleo",
    slug: "calculadora-paro",
    description:
      "Calcula tu prestacion de paro segun dias cotizados en los ultimos 6 anos.",
  },
  {
    country: "Espana",
    countrySlug: "espana",
    name: "Calculadora de IVA",
    slug: "calculadora-iva",
    description:
      "IVA general 21%, reducido 10% y superreducido 4%: anada o desglose de cualquier precio.",
  },
  {
    country: "Mexico",
    countrySlug: "mexico",
    name: "Nomina Neta",
    slug: "calculadora-nomina-neta",
    description:
      "Cuanto cobras realmente: salario bruto menos ISR y cuotas IMSS.",
  },
  {
    country: "Argentina",
    countrySlug: "argentina",
    name: "Indemnizacion por Despido",
    slug: "calculadora-indemnizacion",
    description:
      "Art. 245 LCT: mejor remuneracion por anos de antiguedad al ser despedido.",
  },
];

export default function HomePage() {
  const countryList = Object.values(countries);

  return (
    <div>
      {/* A) Hero */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-3xl">
            Calcula tus derechos laborales al instante
          </h1>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl leading-relaxed">
            Herramientas gratuitas, sin registro y actualizadas para
            trabajadores de 10 paises hispanohablantes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Gratis siempre",
              "Sin registro",
              "Actualizado 2026",
              "10 paises",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-slate-100 text-slate-700 rounded-full px-4 py-1.5 text-sm font-medium"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* B) Stats bar */}
      <section className="bg-blue-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-4xl font-bold">10</p>
            <p className="text-blue-200 text-sm mt-1">Paises</p>
          </div>
          <div>
            <p className="text-4xl font-bold">67</p>
            <p className="text-blue-200 text-sm mt-1">Calculadoras</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-blue-200 text-sm mt-1">Gratuito</p>
          </div>
        </div>
      </section>

      {/* ADSENSE SLOT */}

      {/* B2) Herramientas destacadas */}
      <section className="py-10 px-4 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-5">
            Mas herramientas gratuitas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/carta-de-renuncia"
              className="group flex items-start gap-4 bg-emerald-50 border border-emerald-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
                  Generador de Carta de Renuncia
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  Crea tu carta de renuncia formal adaptada a la legislacion de tu pais. Descargable gratis en segundos.
                </p>
                <span className="text-sm font-semibold text-emerald-700">
                  Disponible para 10 paises &rarr;
                </span>
              </div>
            </Link>

            <Link
              href="/blog"
              className="group flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                  Blog Laboral
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  Guias y articulos sobre derechos laborales: finiquito, liquidacion, vacaciones, horas extra y mas.
                </p>
                <span className="text-sm font-semibold text-blue-700">
                  10 articulos disponibles &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* C) Country cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Selecciona tu pais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countryList.map((country) => {
              const code = flagCodes[country.slug] ?? "un";
              return (
                <Link
                  key={country.slug}
                  href={`/${country.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={`https://flagcdn.com/w160/${code}.png`}
                      width={80}
                      height={53}
                      alt={`Bandera de ${country.name}`}
                      className="rounded shadow-sm flex-shrink-0"
                    />
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {country.name}
                      </h3>
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {country.calculators.length} calc.
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-3">
                    {country.calculators.slice(0, 3).map((calc) => (
                      <li key={calc.slug} className="text-sm text-slate-600">
                        &ndash; {calc.name}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-blue-600 group-hover:text-blue-800">
                    Ver calculadoras &rarr;
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADSENSE SLOT */}

      {/* D) Como funciona */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">
            Como funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-5xl font-black text-blue-100 mb-3">01</p>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Elige tu pais
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Selecciona el pais donde trabajas para ver las calculadoras
                disponibles.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-5xl font-black text-blue-100 mb-3">02</p>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Elige la calculadora
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Selecciona el calculo que necesitas: finiquito, vacaciones, IVA,
                horas extra y mas.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-5xl font-black text-blue-100 mb-3">03</p>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Obtén tu resultado
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Introduce tu salario y fechas. Recibiras el resultado detallado
                al instante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E) Para que sirve */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Para que sirve CalculaLaboral?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">CalculaLaboral</strong> es
                una plataforma gratuita de calculadoras laborales para
                trabajadores de 10 paises hispanohablantes. Nuestras
                herramientas te permiten conocer de forma rapida y sencilla
                cuanto dinero te corresponde al terminar una relacion laboral, o
                cuanto debes recibir por conceptos como aguinaldo, vacaciones o
                prima de servicios.
              </p>
              <p>
                Todas las calculadoras estan basadas en la legislacion laboral
                vigente de cada pais. Los calculos son orientativos y te ayudan
                a entender tus derechos antes de hablar con tu empleador o un
                abogado. No necesitas registrarte ni proporcionar datos
                personales.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Calcula tu finiquito o liquidacion antes de renunciar o ser despedido",
                "Verifica que tu nomina es correcta",
                "Calcula el IVA de tus facturas o presupuestos",
                "Conoce tus prestaciones y beneficios laborales",
                "Todo sin crear una cuenta ni dar tus datos",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed"
                >
                  <span className="text-slate-400 mt-0.5 flex-shrink-0">
                    &ndash;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ADSENSE SLOT */}

      {/* G) Salarios mínimos */}
      <section className="bg-white py-12 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Salario mínimo por país 2026
            </h2>
            <span className="text-sm text-slate-500 hidden sm:block">
              Actualizado {new Date().getFullYear()}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {salariosMinimos.map((s) => (
              <Link
                key={s.countrySlug}
                href={`/${s.countrySlug}/salario-minimo`}
                className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                  {s.countryName}
                </p>
                <p className="text-xl font-black text-emerald-600 mb-0.5">
                  {s.currencySymbol}
                  {s.amount.toLocaleString("es", { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  {s.currency} &middot; {s.periodLabel}
                </p>
                <p className="text-xs font-medium text-emerald-700 group-hover:text-emerald-800">
                  Ver histórico &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H) Festivos destacados */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Días festivos 2026 por país
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { slug: "mexico", name: "México", flag: "mx" },
              { slug: "colombia", name: "Colombia", flag: "co" },
              { slug: "espana", name: "España", flag: "es" },
              { slug: "argentina", name: "Argentina", flag: "ar" },
              { slug: "chile", name: "Chile", flag: "cl" },
              { slug: "peru", name: "Perú", flag: "pe" },
              { slug: "ecuador", name: "Ecuador", flag: "ec" },
              { slug: "venezuela", name: "Venezuela", flag: "ve" },
              { slug: "costa-rica", name: "Costa Rica", flag: "cr" },
              { slug: "bolivia", name: "Bolivia", flag: "bo" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/dias-festivos-2026`}
                className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center text-center gap-2"
              >
                <Image
                  src={`https://flagcdn.com/w80/${c.flag}.png`}
                  width={48}
                  height={32}
                  alt={`Bandera de ${c.name}`}
                  className="rounded shadow-sm"
                />
                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {c.name}
                </p>
                <p className="text-xs text-blue-600 group-hover:text-blue-800">
                  Ver festivos &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* F) Calculadoras populares */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Calculadoras mas utilizadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularCalculators.map((item) => (
              <Link
                key={`${item.countrySlug}-${item.slug}`}
                href={`/${item.countrySlug}/${item.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                  {item.country}
                </p>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-sm font-medium text-blue-600 group-hover:text-blue-800">
                  Calcular &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
