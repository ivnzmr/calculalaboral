import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getAllCountrySlugs } from "@/data/countries";
import ResignationLetterGenerator from "@/components/ResignationLetterGenerator";
import { buildAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ pais: string }>;
};

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ pais: slug }));
}

const CARTA_META: Record<string, { title: string; description: string }> = {
  venezuela: {
    title: "Carta de Renuncia Venezuela 2026 – Modelo Gratis y Descargable",
    description:
      "Genera tu carta de renuncia en Venezuela al instante: modelo con preaviso de 15 días según LOTTT Art. 73. Gratis, sin registro, descargable en PDF.",
  },
  mexico: {
    title: "Carta de Renuncia México 2026 – Formato Oficial Gratis",
    description:
      "¿Cómo redactar tu carta de renuncia en México? Modelo oficial con preaviso según LFT. Gratis, sin registro, descárgala en segundos.",
  },
  colombia: {
    title: "Carta de Renuncia Colombia 2026 – Modelo Gratis y Descargable",
    description:
      "Genera tu carta de renuncia en Colombia al instante. Modelo con preaviso de 15 días según Código Sustantivo del Trabajo. Gratis y descargable.",
  },
  espana: {
    title: "Carta de Renuncia España 2026 – Modelo Oficial Gratis",
    description:
      "Redacta tu carta de renuncia voluntaria en España: preaviso de 15 días según ET Art. 49.1d. Modelo gratuito, sin registro, descargable al instante.",
  },
  argentina: {
    title: "Carta de Renuncia Argentina 2026 – Modelo Gratis",
    description:
      "Genera tu carta de renuncia en Argentina con preaviso de 15-30 días según LCT Art. 231. Gratis, sin registro, descargable en segundos.",
  },
  chile: {
    title: "Carta de Renuncia Chile 2026 – Modelo Gratis y Legal",
    description:
      "Modelo de carta de renuncia voluntaria en Chile: preaviso de 30 días según Código del Trabajo Art. 159. Gratis, sin registro, descargable.",
  },
  peru: {
    title: "Carta de Renuncia Perú 2026 – Modelo Gratis y Descargable",
    description:
      "Genera tu carta de renuncia en Perú con preaviso de 30 días según LPCL Art. 18. Modelo gratuito, sin registro, descárgala en segundos.",
  },
  ecuador: {
    title: "Carta de Renuncia Ecuador 2026 – Modelo Gratis",
    description:
      "Carta de renuncia voluntaria en Ecuador: preaviso de 15 días según Código del Trabajo Art. 184. Gratis, sin registro, descargable al instante.",
  },
  "costa-rica": {
    title: "Carta de Renuncia Costa Rica 2026 – Modelo Gratis",
    description:
      "Genera tu carta de renuncia en Costa Rica con preaviso de 1 mes según Código de Trabajo Art. 29. Gratis, sin registro, descargable.",
  },
  bolivia: {
    title: "Carta de Renuncia Bolivia 2026 – Modelo Gratis y Descargable",
    description:
      "Modelo de carta de renuncia en Bolivia según Ley General del Trabajo. Genera tu carta al instante, gratis, sin registro y descargable en PDF.",
  },
};

const PREAVISO_TEXT: Record<string, string> = {
  venezuela:
    "En Venezuela, el preaviso mínimo es de 15 días según el artículo 73 de la LOTTT. Si tienes más de 6 meses de antigüedad, el preaviso puede extenderse hasta 30 días.",
  mexico:
    "En México, la LFT no exige un preaviso mínimo obligatorio para el trabajador que renuncia voluntariamente, aunque por costumbre y cortesía se suelen dar entre 15 y 30 días de aviso.",
  colombia:
    "En Colombia, el Código Sustantivo del Trabajo establece un preaviso de 30 días cuando el contrato es a término indefinido. Si no se cumple, el empleador puede descontar los días no avisados.",
  espana:
    "En España, el Estatuto de los Trabajadores (Art. 49.1d) y los convenios colectivos suelen establecer un preaviso de 15 días. Algunos convenios pueden exigir hasta 1 mes.",
  argentina:
    "En Argentina, la Ley de Contrato de Trabajo (Art. 231) establece un preaviso de 15 días para trabajadores con menos de 5 años de antigüedad y 1 mes para los que llevan más tiempo.",
  chile:
    "En Chile, el Código del Trabajo (Art. 159 N°2) exige un preaviso de 30 días o el pago de una indemnización sustitutiva equivalente a 1 mes de sueldo.",
  peru:
    "En Perú, la Ley de Productividad y Competitividad Laboral (Art. 18) establece un preaviso mínimo de 30 días para el trabajador que renuncia.",
  ecuador:
    "En Ecuador, el Código del Trabajo (Art. 184) establece un desahucio de 15 días de anticipación cuando el trabajador decide terminar el contrato.",
  "costa-rica":
    "En Costa Rica, el Código de Trabajo (Art. 29) establece un preaviso de 1 mes cuando el trabajador lleva más de 3 meses trabajando.",
  bolivia:
    "En Bolivia, la Ley General del Trabajo establece que el trabajador debe comunicar su renuncia con un preaviso razonable, generalmente de 90 días en la práctica.",
};

const DERECHOS_TEXT: Record<string, string> = {
  venezuela:
    "No, al renunciar voluntariamente en Venezuela conservas el derecho a recibir las prestaciones sociales acumuladas (artículo 142 LOTTT), las vacaciones proporcionales, el bono vacacional y las utilidades correspondientes al período trabajado.",
  mexico:
    "Al renunciar en México conservas el derecho a recibir: partes proporcionales de aguinaldo, vacaciones y prima vacacional. No tienes derecho a la indemnización por despido injustificado (3 meses + 20 días/año), que solo aplica cuando el empleador te despide.",
  colombia:
    "Al renunciar en Colombia conservas el derecho a liquidación de cesantías, intereses sobre cesantías, prima de servicios proporcional, vacaciones pendientes y el auxilio de transporte si corresponde.",
  espana:
    "Al renunciar en España conservas el derecho al finiquito, que incluye días de vacaciones no disfrutadas, partes proporcionales de pagas extra y salarios pendientes. No tienes derecho a la prestación por desempleo (paro) si renuncias voluntariamente.",
  argentina:
    "Al renunciar en Argentina conservas el derecho a: vacaciones proporcionales, SAC proporcional y haberes del mes en curso. No tienes derecho a la indemnización por despido injustificado.",
  chile:
    "Al renunciar en Chile conservas el derecho a: feriado proporcional, gratificación proporcional y el finiquito por los períodos trabajados. No tienes derecho a la indemnización por años de servicio, salvo acuerdo.",
  peru:
    "Al renunciar en Perú conservas el derecho a: CTS acumulada, gratificaciones proporcionales, vacaciones truncas y liquidación de beneficios sociales.",
  ecuador:
    "Al renunciar en Ecuador conservas el derecho a: décimos proporcionales, fondos de reserva, vacaciones no gozadas y la liquidación correspondiente.",
  "costa-rica":
    "Al renunciar en Costa Rica conservas el derecho a: aguinaldo proporcional, vacaciones no disfrutadas y la liquidación de los derechos acumulados.",
  bolivia:
    "Al renunciar en Bolivia conservas el derecho a: aguinaldo proporcional, vacaciones no gozadas y la indemnización por tiempo de servicio según la Ley General del Trabajo.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais } = await params;
  const country = countries[pais];
  if (!country) return {};
  const meta = CARTA_META[pais];
  const title =
    meta?.title ?? `Carta de Renuncia ${country.name} 2026 | Gratis`;
  const description =
    meta?.description ??
    `Genera gratis tu carta de renuncia voluntaria en ${country.name} adaptada a su legislación laboral. Descárgala en segundos, sin registro.`;
  return {
    title,
    description,
    alternates: buildAlternates(
      `https://calculalaboral.net/carta-de-renuncia/${pais}`,
      pais
    ),
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://calculalaboral.net/carta-de-renuncia/${pais}`,
    },
  };
}

export default async function CartaPaisPage({ params }: Props) {
  const { pais } = await params;
  const country = countries[pais];
  if (!country) notFound();

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
        name: "Carta de Renuncia",
        item: "https://calculalaboral.net/carta-de-renuncia",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `https://calculalaboral.net/carta-de-renuncia/${pais}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuánto preaviso debo dar al renunciar en ${country.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: PREAVISO_TEXT[pais] ?? `El preaviso varía según la legislación laboral de ${country.name}. Consulta tu contrato y convenio colectivo.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Pierdo mis derechos laborales si renuncio en ${country.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: DERECHOS_TEXT[pais] ?? `Al renunciar en ${country.name} conservas los derechos laborales proporcionales acumulados durante tu tiempo de servicio.`,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/carta-de-renuncia"
            className="hover:text-blue-600 transition-colors"
          >
            Carta de Renuncia
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{country.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Gratis · Sin registro · Descargable
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Carta de Renuncia Voluntaria — {country.name} 2026
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Rellena los datos del formulario y genera al instante tu carta de
            renuncia adaptada a la legislación laboral de {country.name}.
          </p>
        </div>

        {/* Generator */}
        <ResignationLetterGenerator
          countrySlug={country.slug}
          countryName={country.name}
        />

        {/* Related links */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Calcula también tu finiquito o liquidación en {country.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {country.calculators.slice(0, 4).map((calc) => (
              <Link
                key={calc.slug}
                href={`/${country.slug}/${calc.slug}`}
                className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                {calc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
