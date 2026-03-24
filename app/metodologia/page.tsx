import type { Metadata } from "next";
import Link from "next/link";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Metodología y Fuentes Legales – CalculaLaboral",
  description:
    "Cómo calculamos: fuentes legales oficiales, metodología de cada calculadora, política de actualización y compromisos de precisión de CalculaLaboral.",
  openGraph: {
    title: "Metodología y Fuentes Legales – CalculaLaboral",
    description: "Conoce las bases legales y la metodología detrás de las calculadoras laborales de CalculaLaboral.",
    type: "website",
  },
  alternates: { canonical: "https://calculalaboral.net/metodologia" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "CalculaLaboral", item: "https://calculalaboral.net/" },
    { "@type": "ListItem", position: 2, name: "Metodología", item: "https://calculalaboral.net/metodologia" },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CalculaLaboral",
  url: "https://calculalaboral.net",
  description: "Plataforma de calculadoras laborales gratuitas para trabajadores hispanohablantes en 10 países.",
  foundingDate: "2024",
  areaServed: ["México", "Colombia", "España", "Argentina", "Chile", "Perú", "Ecuador", "Venezuela", "Costa Rica", "Bolivia"],
  knowsAbout: ["Derecho Laboral", "Cálculo de Liquidaciones", "Salario Mínimo", "Prestaciones Sociales"],
};

const legalSources: { country: string; sources: { law: string; article?: string; topic: string }[] }[] = [
  {
    country: "México",
    sources: [
      { law: "Ley Federal del Trabajo (LFT)", article: "Arts. 76, 79, 87, 117, 123", topic: "Vacaciones, prima vacacional, aguinaldo, PTU, jornada" },
      { law: "Código Fiscal de la Federación / LISR", article: "Art. 96", topic: "Retención ISR en nómina" },
      { law: "Ley del IMSS", topic: "Cuotas de seguridad social" },
      { law: "CONASAMI – Decretos anuales", topic: "Salario mínimo vigente" },
    ],
  },
  {
    country: "Colombia",
    sources: [
      { law: "Código Sustantivo del Trabajo (CST)", article: "Arts. 249, 254, 306, 186", topic: "Cesantías, intereses, prima de servicios, vacaciones" },
      { law: "Estatuto Tributario", article: "Art. 383", topic: "Retención en la fuente" },
      { law: "Decreto 2616 y sucesivos", topic: "Salario mínimo SMMLV" },
    ],
  },
  {
    country: "España",
    sources: [
      { law: "Estatuto de los Trabajadores (ET)", article: "Arts. 33, 35, 50, 53", topic: "Indemnizaciones, horas extra, despido" },
      { law: "Ley del IRPF (LIRPF)", topic: "Tramos y retención IRPF" },
      { law: "Real Decreto sobre SMI", topic: "Salario mínimo interprofesional" },
      { law: "Ley General de la Seguridad Social (LGSS)", topic: "Cotizaciones y prestación por desempleo" },
    ],
  },
  {
    country: "Argentina",
    sources: [
      { law: "Ley de Contrato de Trabajo (LCT 20.744)", article: "Arts. 121, 150, 201, 245, 256", topic: "SAC, vacaciones, horas extra, indemnización, prescripción" },
      { law: "Resoluciones del SMVM (MTESS)", topic: "Salario mínimo vital y móvil" },
    ],
  },
  {
    country: "Chile",
    sources: [
      { law: "Código del Trabajo", article: "Arts. 47, 67, 163", topic: "Gratificación, feriado, indemnización por años de servicio" },
      { law: "Decreto Ley 3.500", topic: "Sistema de AFP y cotizaciones previsionales" },
      { law: "Decreto del Ministerio del Trabajo", topic: "Ingreso mínimo mensual" },
    ],
  },
  {
    country: "Perú",
    sources: [
      { law: "Decreto Legislativo 650 (CTS)", topic: "Compensación por Tiempo de Servicios" },
      { law: "Ley 27735 (Gratificaciones)", article: "y D.S. 005-2002-TR", topic: "Gratificaciones de julio y diciembre" },
      { law: "Decreto Legislativo 713", topic: "Vacaciones laborales" },
      { law: "Decreto Ley 25897 y modificaciones", topic: "Sistema privado de pensiones AFP" },
    ],
  },
  {
    country: "Ecuador",
    sources: [
      { law: "Código del Trabajo", article: "Arts. 95, 111, 196, 228, 293", topic: "Décimos sueldos, vacaciones, liquidación, fondos de reserva, aguinaldo" },
      { law: "Ministerio del Trabajo – Acuerdos ministeriales", topic: "Salario básico unificado (SBU)" },
    ],
  },
  {
    country: "Venezuela",
    sources: [
      { law: "LOTTT (Ley Orgánica del Trabajo)", article: "Arts. 118, 131, 141", topic: "Horas extra, utilidades, prestaciones sociales" },
      { law: "Decreto Presidencial de salario mínimo", topic: "Salario mínimo vigente" },
    ],
  },
  {
    country: "Costa Rica",
    sources: [
      { law: "Código de Trabajo", article: "Arts. 28, 29, 228", topic: "Preaviso, cesantía, aguinaldo" },
      { law: "Decreto de salarios mínimos (MTSS)", topic: "Salario mínimo por ocupación" },
      { law: "Ley de Protección al Trabajador (FCL)", topic: "Fondo de Capitalización Laboral" },
    ],
  },
  {
    country: "Bolivia",
    sources: [
      { law: "Ley General del Trabajo", article: "Arts. 12, 55", topic: "Desahucio, indemnización" },
      { law: "Decreto Supremo N° 229 y N° 1802", topic: "Aguinaldo de Navidad y segundo aguinaldo" },
      { law: "Decreto Supremo de salario mínimo", topic: "Salario mínimo nacional" },
    ],
  },
];

export default function MetodologiaPage() {
  const totalCalcs = Object.values(countries).reduce((sum, c) => sum + c.calculators.length, 0);

  return (
    <div className="py-8 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Metodología</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Metodología y fuentes legales</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            CalculaLaboral ofrece <strong>{totalCalcs} calculadoras laborales gratuitas</strong> para trabajadores
            de 10 países hispanohablantes. Esta página explica las bases legales, la metodología de cálculo
            y cómo mantenemos la información actualizada.
          </p>
        </div>

        {/* Principios */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { title: "Basado en ley", desc: "Cada cálculo referencia el artículo específico de la legislación laboral vigente del país correspondiente." },
            { title: "Actualizado anualmente", desc: "Revisamos salarios mínimos, tablas fiscales y prestaciones al inicio de cada año con los decretos oficiales." },
            { title: "Orientativo", desc: "Los resultados son estimados. Casos con variables contractuales específicas pueden diferir del monto real." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-900 mb-2">{item.title}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Metodología general */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Metodología general de cálculo</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Todas las calculadoras de CalculaLaboral aplican las <strong>fórmulas establecidas en la legislación laboral oficial</strong>
              de cada país. Los valores de referencia (salario mínimo, UMA, SBU, UVT, UF) se actualizan al inicio de cada año con los
              decretos y resoluciones publicados por los organismos gubernamentales competentes.
            </p>
            <p>
              Para los cálculos proporcionales (aguinaldo, prima, vacaciones al terminar contrato), se utiliza como base
              el <strong>salario diario ordinario</strong> del trabajador, calculado dividiendo el salario mensual declarado entre 30
              (salvo países donde la normativa indica un divisor distinto, como Argentina con divisor 25 para vacaciones).
            </p>
            <p>
              Las calculadoras de <strong>impuestos y retenciones</strong> (ISR México, IRPF España, retención en la fuente Colombia)
              utilizan las tablas marginales publicadas para el ejercicio fiscal vigente. Al ser estimaciones, no consideran
              deducciones personales específicas no declaradas por el usuario.
            </p>
          </div>
        </div>

        {/* Fuentes por país */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">Fuentes legales por país</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {legalSources.map((country) => (
              <div key={country.country} className="px-5 py-4">
                <h3 className="font-semibold text-slate-800 mb-3">{country.country}</h3>
                <ul className="space-y-2">
                  {country.sources.map((source, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-slate-300 mt-0.5 flex-shrink-0">–</span>
                      <span>
                        <span className="font-medium text-slate-700">{source.law}</span>
                        {source.article && <span className="text-slate-500"> ({source.article})</span>}
                        <span className="text-slate-500">: {source.topic}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Política de actualización */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Política de actualización</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p><strong>Salarios mínimos:</strong> se actualizan en enero de cada año con los decretos oficiales publicados por los ministerios de trabajo o comisiones salariales de cada país.</p>
            <p><strong>Tablas fiscales:</strong> ISR México y IRPF España se revisan anualmente según las leyes de presupuestos y decretos publicados por el SAT y la AEAT, respectivamente.</p>
            <p><strong>Prestaciones sociales:</strong> cuando se aprueba una reforma laboral que modifica prestaciones (vacaciones, aguinaldo, etc.), actualizamos las calculadoras en un plazo máximo de 30 días.</p>
            <p><strong>Valores de referencia:</strong> UMA (México), UVT (Colombia), UF (Chile), SBU (Ecuador) y valores equivalentes se actualizan al inicio de cada período conforme a publicaciones oficiales.</p>
          </div>
        </div>

        {/* Aviso legal */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <h2 className="font-semibold text-amber-900 mb-2">Aviso importante</h2>
          <p className="text-sm text-amber-800 leading-relaxed">
            Los resultados de las calculadoras de CalculaLaboral son <strong>orientativos</strong> y no constituyen
            asesoramiento jurídico ni laboral. Los cálculos pueden diferir del monto real en casos con variables contractuales
            específicas, convenios colectivos aplicables, categorías profesionales especiales o situaciones particulares.
            Para determinar con exactitud los montos que te corresponden, consulta siempre con un abogado laboral o
            el organismo competente de tu país.
          </p>
        </div>

        {/* Contacto */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 mb-2">¿Encontraste un error en los cálculos?</h2>
          <p className="text-sm text-slate-600 mb-3">
            Si detectas una discrepancia entre nuestros cálculos y la legislación vigente, escríbenos.
            Revisamos y corregimos en el menor tiempo posible.
          </p>
          <Link
            href="/contacto"
            className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Contactar con el equipo &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
