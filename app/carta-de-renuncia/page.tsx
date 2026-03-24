import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Generador de Carta de Renuncia Gratis 2026 | 10 Países",
  description:
    "Genera gratis tu carta de renuncia voluntaria adaptada a México, Colombia, España, Argentina, Chile, Perú y más. Descárgala en segundos, sin registro.",
  openGraph: {
    title: "Generador de Carta de Renuncia Gratis 2026 | CalculaLaboral",
    description:
      "Carta de renuncia personalizada para 10 países. Gratis, sin registro, descargable.",
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

export default function CartaDeRenunciaPage() {
  const countryList = Object.values(countries);

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-12 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800">Carta de Renuncia</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Generador de Carta de Renuncia 2026
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-6">
            Crea tu carta de renuncia voluntaria en segundos, adaptada a la
            legislación laboral de tu país. Gratis, sin registro y
            descargable.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Gratis", "Sin registro", "Descargable", "Adaptada por país"].map(
              (badge) => (
                <span
                  key={badge}
                  className="bg-slate-100 text-slate-700 rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  ✓ {badge}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Country grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Selecciona tu país
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countryList.map((country) => {
              const code = flagCodes[country.slug] ?? "un";
              return (
                <Link
                  key={country.slug}
                  href={`/carta-de-renuncia/${country.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={`https://flagcdn.com/w80/${code}.png`}
                      width={48}
                      height={32}
                      alt={`Bandera de ${country.name}`}
                      className="rounded shadow-sm flex-shrink-0"
                    />
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {country.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">
                    Carta de renuncia voluntaria adaptada a la legislación
                    laboral de {country.name}.
                  </p>
                  <p className="text-sm font-medium text-blue-600 group-hover:text-blue-800">
                    Generar carta &rarr;
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-4xl font-black text-blue-100 mb-3">01</p>
            <h3 className="text-base font-bold text-slate-800 mb-2">
              Elige tu país
            </h3>
            <p className="text-sm text-slate-600">
              Selecciona el país donde trabajas para obtener una carta adaptada
              a su legislación laboral.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-4xl font-black text-blue-100 mb-3">02</p>
            <h3 className="text-base font-bold text-slate-800 mb-2">
              Rellena el formulario
            </h3>
            <p className="text-sm text-slate-600">
              Introduce tu nombre, empresa, puesto y fechas. La carta se genera
              al instante con tus datos.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-4xl font-black text-blue-100 mb-3">03</p>
            <h3 className="text-base font-bold text-slate-800 mb-2">
              Descarga y presenta
            </h3>
            <p className="text-sm text-slate-600">
              Descarga tu carta en formato .txt, revísala y entrégala a tu
              empleador.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
