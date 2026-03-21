import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import SearchBar from "@/components/SearchBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Calculadoras Laborales Gratis 2026 | 10 Paises | CalculaLaboral",
    template: "%s | CalculaLaboral",
  },
  description:
    "Calculadoras laborales gratuitas para 10 paises: Mexico, Colombia, Espana, Argentina, Chile, Peru, Ecuador, Venezuela, Costa Rica y Bolivia. Calcula finiquito, liquidacion, aguinaldo, vacaciones y mas.",
  metadataBase: new URL("https://calculalaboral.com"),
  openGraph: {
    siteName: "CalculaLaboral",
    locale: "es_MX",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const countryList = Object.values(countries);

  const latamCountries = countryList.filter((c) => c.slug !== "espana");
  const europeCountries = countryList.filter((c) => c.slug === "espana");

  return (
    <html lang="es" className={inter.className}>
      <head>
        {/* ADSENSE: Place your Google AdSense script here */}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50">
        {/* Header */}
        <header className="bg-slate-900 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex flex-col hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <span className="text-2xl font-bold tracking-tight text-white">
                CalculaLaboral
              </span>
              <span className="text-slate-400 text-xs">
                Calculadoras laborales gratuitas
              </span>
            </Link>

            {/* Search bar */}
            <div className="hidden sm:block">
              <SearchBar />
            </div>

            {/* Desktop nav: all countries */}
            <nav
              className="hidden md:flex items-center gap-1 overflow-x-auto"
              aria-label="Paises disponibles"
            >
              {countryList.map((country) => {
                const code = flagCodes[country.slug] ?? "un";
                return (
                  <Link
                    key={country.slug}
                    href={`/${country.slug}`}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    <Image
                      src={`https://flagcdn.com/w40/${code}.png`}
                      width={24}
                      height={16}
                      alt={`Bandera de ${country.name}`}
                      className="rounded-sm flex-shrink-0"
                    />
                    <span>{country.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile nav: dropdown button */}
            <div className="md:hidden relative group">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium transition-colors"
                aria-label="Menu de paises"
              >
                Paises
                <span className="text-slate-300 text-xs">&#9660;</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-slate-800 rounded-xl shadow-xl border border-slate-700 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {countryList.map((country) => {
                  const code = flagCodes[country.slug] ?? "un";
                  return (
                    <Link
                      key={country.slug}
                      href={`/${country.slug}`}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-sm first:rounded-t-xl last:rounded-b-xl"
                    >
                      <Image
                        src={`https://flagcdn.com/w40/${code}.png`}
                        width={24}
                        height={16}
                        alt={`Bandera de ${country.name}`}
                        className="rounded-sm flex-shrink-0"
                      />
                      <span>{country.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Info + nav bar */}
          <div className="border-t border-slate-700 bg-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4 overflow-x-auto">
              <div className="flex items-center gap-4 text-xs text-slate-400 flex-shrink-0">
                <span className="whitespace-nowrap">10 paises</span>
                <span className="text-slate-600">·</span>
                <span className="whitespace-nowrap">67 calculadoras</span>
                <span className="text-slate-600">·</span>
                <span className="whitespace-nowrap">Gratis</span>
                <span className="text-slate-600">·</span>
                <span className="whitespace-nowrap">Sin registro</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href="/carta-de-renuncia"
                  className="whitespace-nowrap text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg transition-colors"
                >
                  Carta de Renuncia
                </Link>
                <Link
                  href="/blog"
                  className="whitespace-nowrap text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Blog Laboral
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full">{children}</main>

        {/* ADSENSE SLOT */}

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Col 1: Logo + description */}
              <div className="col-span-2 md:col-span-1">
                <p className="text-xl font-bold text-white mb-2">
                  CalculaLaboral
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Plataforma gratuita de calculadoras laborales para
                  trabajadores hispanohablantes. Calcula tus derechos laborales
                  al instante, sin registro y sin costo.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Aviso legal: Los calculos son orientativos y no constituyen
                  asesoramiento juridico. Consulta siempre con un abogado o
                  asesor laboral certificado.
                </p>
                <div className="space-y-1">
                  <Link
                    href="/blog"
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Blog Laboral
                  </Link>
                  <Link
                    href="/carta-de-renuncia"
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Carta de Renuncia
                  </Link>
                </div>
              </div>

              {/* Col 2: America Latina */}
              <div>
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  America Latina
                </p>
                <ul className="space-y-2">
                  {latamCountries.map((country) => (
                    <li key={country.slug}>
                      <Link
                        href={`/${country.slug}`}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {country.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Europe + Popular calculators */}
              <div>
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Europa
                </p>
                <ul className="space-y-2 mb-6">
                  {europeCountries.map((country) => (
                    <li key={country.slug}>
                      <Link
                        href={`/${country.slug}`}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {country.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Calculadoras populares
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/mexico/calculadora-finiquito"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Finiquito Mexico
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/colombia/calculadora-liquidacion"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Liquidacion Colombia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/espana/calculadora-paro"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Paro Espana
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/espana/calculadora-iva"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      IVA Espana
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/argentina/calculadora-indemnizacion"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Indemnizacion Argentina
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4: Salario mínimo + Festivos */}
              <div>
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Salario Minimo
                </p>
                <ul className="space-y-2 mb-6">
                  {["mexico", "colombia", "espana", "argentina", "chile"].map((slug) => {
                    const c = countryList.find((x) => x.slug === slug);
                    if (!c) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/${slug}/salario-minimo`}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {c.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Dias Festivos
                </p>
                <ul className="space-y-2">
                  {["mexico", "colombia", "espana", "argentina", "chile"].map((slug) => {
                    const c = countryList.find((x) => x.slug === slug);
                    if (!c) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/${slug}/dias-festivos-2026`}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {c.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-10 pt-6 text-center">
              <p className="text-xs text-slate-500">
                &copy; 2026 CalculaLaboral. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
