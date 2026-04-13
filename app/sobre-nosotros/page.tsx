import type { Metadata } from "next";
import Link from "next/link";
import { countries } from "@/data/countries";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Sobre Nosotros – CalculaLaboral",
  description:
    "Conoce el equipo y la misión detrás de CalculaLaboral: la plataforma gratuita de calculadoras laborales para trabajadores de 10 países hispanohablantes.",
  openGraph: {
    title: "Sobre Nosotros – CalculaLaboral",
    description:
      "Calculadoras laborales gratuitas para trabajadores hispanohablantes. Conoce nuestra misión, metodología y compromiso con la precisión legal.",
    type: "website",
  },
  alternates: { canonical: "https://calculalaboral.net/sobre-nosotros" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CalculaLaboral",
      item: "https://calculalaboral.net/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre nosotros",
      item: "https://calculalaboral.net/sobre-nosotros",
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CalculaLaboral",
  url: "https://calculalaboral.net",
  logo: "https://calculalaboral.net/favicon.svg",
  description:
    "Plataforma gratuita de calculadoras laborales para trabajadores de 10 países hispanohablantes: México, Colombia, España, Argentina, Chile, Perú, Ecuador, Venezuela, Costa Rica y Bolivia.",
  foundingDate: "2024",
  email: "contacto@calculalaboral.net",
  areaServed: [
    "México",
    "Colombia",
    "España",
    "Argentina",
    "Chile",
    "Perú",
    "Ecuador",
    "Venezuela",
    "Costa Rica",
    "Bolivia",
  ],
  knowsAbout: [
    "Derecho Laboral",
    "Cálculo de Liquidaciones",
    "Finiquito",
    "Prestaciones Sociales",
    "Salario Mínimo",
    "IRPF",
    "ISR",
  ],
  sameAs: [],
};

const values = [
  {
    icon: "⚖️",
    title: "Precisión legal",
    desc: "Cada calculadora está basada en el artículo exacto de la legislación laboral vigente de cada país. Citamos la fuente y revisamos los valores al inicio de cada año.",
  },
  {
    icon: "🆓",
    title: "Siempre gratuito",
    desc: "CalculaLaboral es y seguirá siendo completamente gratis. No cobramos por los cálculos, no pedimos registro ni datos personales.",
  },
  {
    icon: "🔒",
    title: "Sin datos personales",
    desc: "Todos los cálculos se realizan en tu navegador. No enviamos tus datos a ningún servidor ni los almacenamos.",
  },
  {
    icon: "📅",
    title: "Actualización continua",
    desc: "Revisamos salarios mínimos, tablas fiscales y prestaciones sociales con cada nuevo decreto oficial. Si hay reforma laboral, actualizamos en menos de 30 días.",
  },
];

const milestones = [
  {
    year: "2024",
    text: "Lanzamiento con calculadoras para México, Colombia y España.",
  },
  {
    year: "2025",
    text: "Expansión a 10 países hispanohablantes y más de 50 calculadoras.",
  },
  {
    year: "2026",
    text: "Blog laboral, calculadora de renta, generador de carta de renuncia y más de 300 artículos.",
  },
];

export default function SobreNosotrosPage() {
  const totalCalcs = Object.values(countries).reduce(
    (sum, c) => sum + c.calculators.length,
    0
  );

  return (
    <div className="py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Sobre nosotros</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sobre CalculaLaboral
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Somos una plataforma independiente dedicada a ofrecer{" "}
            <strong>calculadoras laborales gratuitas y precisas</strong> para
            trabajadores de 10 países hispanohablantes. Nuestra misión es que
            cualquier trabajador pueda conocer sus derechos laborales en segundos,
            sin necesidad de contratar a un abogado para hacer un cálculo básico.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: "10", label: "Países" },
            { value: `${totalCalcs}+`, label: "Calculadoras" },
            { value: `${articles.length}+`, label: "Artículos" },
            { value: "100%", label: "Gratuito" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white border border-slate-200 rounded-xl p-5 text-center"
            >
              <p className="text-3xl font-black text-blue-700 mb-1">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Nuestra misión
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Miles de trabajadores hispanohablantes terminan relaciones laborales
              sin saber exactamente cuánto les corresponde de finiquito,
              liquidación o indemnización. Muchos firman documentos sin poder
              verificar si los cálculos son correctos, sencillamente porque no
              tienen acceso rápido a la información.
            </p>
            <p>
              <strong>CalculaLaboral nació para cambiar eso.</strong> Creamos
              calculadoras precisas, basadas en la legislación vigente de cada
              país, que cualquier persona puede usar en segundos desde su
              teléfono o computadora, sin registrarse y sin pagar nada.
            </p>
            <p>
              No somos un despacho de abogados ni ofrecemos asesoramiento
              jurídico. Somos una herramienta de orientación que te ayuda a
              entender tus derechos antes de sentarte a negociar con tu empleador
              o visitar a un profesional legal.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Nuestros principios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4"
              >
                <div className="text-2xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How we work */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Cómo trabajamos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Cada calculadora parte de los <strong>textos legales oficiales</strong>:
              leyes laborales, decretos salariales y reglamentos publicados por
              los gobiernos y ministerios de trabajo de cada país. Identificamos
              el artículo específico que regula cada concepto (aguinaldo, cesantías,
              indemnización, etc.) y trasladamos esa fórmula al código de la
              calculadora.
            </p>
            <p>
              Al inicio de cada año revisamos:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Salarios mínimos y valores de referencia (UMA, UVT, SBU, UF, etc.)",
                "Tablas de retención fiscal (ISR México, IRPF España, retención Colombia)",
                "Cambios en prestaciones sociales por nuevas leyes o decretos",
                "Porcentajes de cotización a la seguridad social (IMSS, AFP, IESS, etc.)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Si se aprueba una reforma laboral importante (como la reforma de
              vacaciones en México en 2023), actualizamos las calculadoras
              afectadas en un plazo máximo de 30 días desde la publicación oficial.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/metodologia"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Ver metodología detallada y fuentes legales por país →
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Historia del proyecto
          </h2>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-blue-700 mb-0.5">
                    {m.year}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Países donde operamos
          </h2>
          <p className="text-slate-600 mb-5 text-sm leading-relaxed">
            CalculaLaboral cubre la legislación laboral de 10 países
            hispanohablantes. Cada país tiene sus propias leyes, salarios mínimos
            y prestaciones — por eso cada calculadora está adaptada al marco legal
            específico de ese país.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Object.values(countries).map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-3 text-center hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {c.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {c.calculators.length} calc.
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-amber-900 mb-2">
            Aviso importante
          </h2>
          <p className="text-sm text-amber-800 leading-relaxed">
            CalculaLaboral es una herramienta de orientación informativa. Los
            resultados de nuestras calculadoras son{" "}
            <strong>orientativos y no constituyen asesoramiento jurídico</strong>.
            Para determinar con exactitud los montos que te corresponden en tu
            situación concreta (con convenio colectivo, contrato especial o
            circunstancias particulares), consulta siempre con un abogado laboral
            o el organismo competente de tu país.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold text-slate-800 mb-1">
              ¿Tienes alguna pregunta o encontraste un error?
            </h2>
            <p className="text-sm text-slate-600">
              Escríbenos a{" "}
              <a
                href="mailto:contacto@calculalaboral.net"
                className="text-blue-600 hover:underline font-medium"
              >
                contacto@calculalaboral.net
              </a>
              . Revisamos y corregimos en el menor tiempo posible.
            </p>
          </div>
          <Link
            href="/contacto"
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Contactar →
          </Link>
        </div>
      </div>
    </div>
  );
}
