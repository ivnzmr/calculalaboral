import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getAllCalculatorPaths } from "@/data/countries";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

type Props = {
  params: Promise<{ pais: string; calculadora: string }>;
};

export async function generateStaticParams() {
  return getAllCalculatorPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais, calculadora } = await params;
  const country = countries[pais];
  if (!country) return { title: "No encontrado" };

  const calc = country.calculators.find((c) => c.slug === calculadora);
  if (!calc) return { title: "No encontrado" };

  const year = new Date().getFullYear();

  return {
    title: `${calc.name} ${country.name} ${year} | Gratis`,
    description: `${calc.description} en ${country.name}. Calcula gratis y al instante con nuestra herramienta actualizada ${year}.`,
    openGraph: {
      title: `${calc.name} ${country.name} ${year}`,
      description: `${calc.description}. Resultado inmediato y desglose completo.`,
    },
  };
}

type FAQ = {
  question: string;
  answer: string;
};

type CalculatorContent = {
  howItWorks: string[];
  faqs: FAQ[];
};

const calculatorContent: Record<string, Record<string, CalculatorContent>> = {
  mexico: {
    "calculadora-finiquito": {
      howItWorks: [
        "El finiquito es el pago que recibe un trabajador al momento de separarse voluntariamente de su empleo o al terminar un contrato. Segun la Ley Federal del Trabajo de Mexico (Art. 76, 79 y 87), todo trabajador tiene derecho a recibir la parte proporcional de su aguinaldo, vacaciones y prima vacacional correspondiente al tiempo trabajado en el ano.",
        "Para calcular el finiquito, se toma en cuenta el salario diario del trabajador (salario mensual dividido entre 30), el total de dias trabajados en el ano en curso, y los dias de vacaciones proporcionales segun los anos de servicio. El aguinaldo minimo legal es de 15 dias por ano (Art. 87 LFT).",
        "Es importante distinguir el finiquito de la liquidacion: el finiquito aplica cuando el trabajador renuncia voluntariamente, mientras que la liquidacion incluye indemnizaciones adicionales cuando el despido es injustificado.",
      ],
      faqs: [
        {
          question: "Que incluye el finiquito en Mexico?",
          answer:
            "El finiquito incluye: parte proporcional del aguinaldo (minimo 15 dias/ano), dias de vacaciones no disfrutados, prima vacacional (25% del valor de las vacaciones), y cualquier salario pendiente de pago.",
        },
        {
          question: "En cuanto tiempo me deben pagar el finiquito?",
          answer:
            "Segun la LFT, el finiquito debe pagarse el mismo dia de la separacion o a mas tardar al dia siguiente. Si el empleador no paga a tiempo, puede haber sanciones legales.",
        },
        {
          question: "El finiquito es lo mismo que la liquidacion?",
          answer:
            "No. El finiquito es el pago de prestaciones proporcionales al renunciar voluntariamente. La liquidacion incluye adicionalmente 3 meses de salario y 20 dias por ano trabajado, y aplica cuando el empleador despide sin causa justificada.",
        },
        {
          question: "Debo pagar impuestos sobre el finiquito?",
          answer:
            "Parte del finiquito puede estar exenta de ISR. La parte exenta corresponde a 30 dias de salario minimo por ano trabajado. El excedente esta sujeto a retencion de impuestos. Se recomienda consultar con un contador.",
        },
      ],
    },
    "calculadora-liquidacion-despido-injustificado": {
      howItWorks: [
        "La liquidacion por despido injustificado en Mexico esta regulada por el Articulo 50 de la Ley Federal del Trabajo. Cuando un empleador despide a un trabajador sin causa justificada, este tiene derecho a recibir una indemnizacion constitucional de 3 meses de salario, mas 20 dias de salario por cada ano de servicio.",
        "Ademas de la indemnizacion base, la liquidacion incluye las partes proporcionales de todas las prestaciones: aguinaldo del ano en curso, vacaciones proporcionales y prima vacacional. El salario que se usa para el calculo es el salario integrado, que puede incluir comisiones, bonos y otras percepciones regulares.",
        "El trabajador tiene 2 anos para reclamar su liquidacion ante la Junta de Conciliacion y Arbitraje. Si hay un juicio laboral y el empleador pierde, ademas debe pagar 12 meses de salario como parte del juicio.",
      ],
      faqs: [
        {
          question: "Cuanto me corresponde por liquidacion en Mexico?",
          answer:
            "La formula basica es: 3 meses de salario + 20 dias por ano trabajado + partes proporcionales de aguinaldo, vacaciones y prima vacacional. Esta calculadora te muestra el desglose completo.",
        },
        {
          question: "Que es el salario integrado para la liquidacion?",
          answer:
            "El salario integrado incluye el salario diario mas las partes proporcionales de prestaciones como aguinaldo, vacaciones y prima vacacional. Para calculos basicos, esta herramienta usa el salario mensual declarado.",
        },
        {
          question: "Puedo negociar mi liquidacion con el empleador?",
          answer:
            "Si, es posible negociar un monto diferente, pero nunca puede ser inferior al minimo legal establecido por la LFT. Se recomienda firmar un convenio ante la Junta de Conciliacion para que tenga validez legal.",
        },
        {
          question:
            "Que hago si mi empleador no me quiere pagar la liquidacion?",
          answer:
            "Puedes presentar una demanda ante el Centro de Conciliacion Laboral o la Junta de Conciliacion y Arbitraje. El proceso es gratuito y tienes 2 anos para hacerlo desde el dia del despido.",
        },
      ],
    },
    "calculadora-aguinaldo": {
      howItWorks: [
        "El aguinaldo es una prestacion obligatoria en Mexico establecida en el Articulo 87 de la Ley Federal del Trabajo. Los empleadores deben pagar un minimo de 15 dias de salario antes del 20 de diciembre de cada ano. Si el trabajador no laboro todo el ano, recibe la parte proporcional.",
        "Para calcular el aguinaldo proporcional, se divide el numero de dias trabajados en el ano entre 365 y se multiplica por los 15 dias de aguinaldo. Si el contrato o convenio colectivo otorga mas dias, se usa ese numero mayor.",
        "El aguinaldo se calcula sobre el salario diario ordinario. En caso de que el trabajador tenga comisiones u otros ingresos variables, el calculo puede ser mas complejo y se recomienda consultar con un especialista.",
      ],
      faqs: [
        {
          question: "Cuando se paga el aguinaldo en Mexico?",
          answer:
            "El aguinaldo debe pagarse antes del 20 de diciembre de cada ano. Si el empleador no lo paga a tiempo, el trabajador puede exigirlo con los recargos correspondientes.",
        },
        {
          question: "Cuantos dias de aguinaldo me corresponden?",
          answer:
            "El minimo legal son 15 dias de salario por ano completo trabajado. Muchas empresas otorgan mas dias por politica interna o convenio colectivo. Si trabajaste menos de un ano, recibes la parte proporcional.",
        },
        {
          question: "El aguinaldo esta exento de impuestos?",
          answer:
            "El aguinaldo esta exento de ISR hasta 30 dias de salario minimo general. El excedente debe incluirse en el calculo de impuestos del trabajador.",
        },
        {
          question: "Que pasa si renuncio antes de diciembre?",
          answer:
            "Si te separas de la empresa antes de diciembre, tienes derecho al aguinaldo proporcional de los dias que trabajaste en ese ano. El empleador debe incluirlo en tu finiquito.",
        },
      ],
    },
    "calculadora-vacaciones": {
      howItWorks: [
        "Las vacaciones en Mexico estan reguladas por el Articulo 76 de la Ley Federal del Trabajo, reformado en 2023. Los trabajadores tienen derecho a un minimo de 12 dias de vacaciones al completar su primer ano de trabajo.",
        "Segun la reforma laboral de 2023, el periodo minimo de vacaciones se incremento: 1 ano = 12 dias, 2 anos = 14 dias, 3 anos = 16 dias, 4 anos = 18 dias, y a partir del quinto ano se agregan 2 dias mas cada 5 anos adicionales.",
        "Las vacaciones deben tomarse dentro de los 6 meses siguientes al cumpleanos del trabajador. Si el empleador no las otorga o el trabajador termina la relacion laboral, tiene derecho a recibir el valor economico de los dias pendientes.",
      ],
      faqs: [
        {
          question: "Cuantos dias de vacaciones me corresponden?",
          answer:
            "Segun la reforma de 2023: 12 dias el primer ano, 14 el segundo, 16 el tercero, 18 el cuarto, y 20 a partir del quinto ano. A esto se suman 2 dias adicionales cada 5 anos mas de servicio.",
        },
        {
          question: "Que es la prima vacacional?",
          answer:
            "La prima vacacional es un pago adicional equivalente al 25% del salario correspondiente al periodo de vacaciones (Art. 80 LFT). Ademas de tu salario normal durante las vacaciones, recibes el 25% extra.",
        },
        {
          question: "Puedo pedir que me paguen las vacaciones en efectivo?",
          answer:
            "En principio, las vacaciones deben disfrutarse como descanso. Sin embargo, al terminar la relacion laboral, el empleador debe pagar el equivalente en dinero de las vacaciones no disfrutadas.",
        },
        {
          question: "Que pasa si no me dan vacaciones?",
          answer:
            "Si tu empleador no te otorga vacaciones, puedes exigirlas o demandar su pago ante las autoridades laborales. Tienes hasta un ano para reclamarlas.",
        },
      ],
    },
    "calculadora-prima-vacacional": {
      howItWorks: [
        "La prima vacacional es una prestacion adicional al salario que los trabajadores reciben durante sus vacaciones, establecida en el Articulo 80 de la Ley Federal del Trabajo. Consiste en un pago equivalente al minimo del 25% del salario correspondiente a los dias de vacaciones.",
        "Se calcula multiplicando el numero de dias de vacaciones por el salario diario del trabajador, y luego aplicando el 25% sobre ese resultado.",
        "Muchas empresas otorgan un porcentaje mayor de prima vacacional como parte de sus beneficios. Si tu contrato o convenio colectivo establece un porcentaje mayor al 25%, siempre se aplica el mas favorable para el trabajador.",
      ],
      faqs: [
        {
          question: "Que porcentaje es la prima vacacional en Mexico?",
          answer:
            "El minimo legal es el 25% del salario correspondiente al periodo de vacaciones. Algunas empresas otorgan un porcentaje mayor (30%, 40% o mas) como prestacion adicional.",
        },
        {
          question: "Cuando se paga la prima vacacional?",
          answer:
            "La prima vacacional debe pagarse antes de que el trabajador tome sus vacaciones. Si la relacion laboral termina, debe incluirse en el finiquito.",
        },
        {
          question: "La prima vacacional esta exenta de ISR?",
          answer:
            "Si, la prima vacacional esta exenta de ISR hasta 15 dias de salario minimo general. El excedente que supere este limite si esta gravado.",
        },
        {
          question: "Tengo derecho a prima vacacional proporcional?",
          answer:
            "Si, si no completaste un ano de trabajo, tienes derecho a la parte proporcional tanto de los dias de vacaciones como de la prima vacacional.",
        },
      ],
    },
  },
  colombia: {
    "calculadora-liquidacion": {
      howItWorks: [
        "La liquidacion laboral en Colombia es el pago que recibe un trabajador al finalizar su contrato de trabajo. Esta regulada por el Codigo Sustantivo del Trabajo y comprende todas las prestaciones sociales proporcionales al tiempo laborado.",
        "La liquidacion incluye cuatro conceptos principales: cesantias (equivalente a un mes de salario por ano trabajado), intereses sobre cesantias (12% anual), prima de servicios (15 dias de salario por semestre), y vacaciones proporcionales (15 dias habiles por ano).",
        "Todos los calculos se realizan con base en 360 dias como ano laboral. El salario utilizado debe ser el ultimo salario mensual recibido.",
      ],
      faqs: [
        {
          question: "Cuanto me corresponde en liquidacion en Colombia?",
          answer:
            "La liquidacion total incluye: cesantias + intereses sobre cesantias (12%) + prima de servicios + vacaciones proporcionales. Esta calculadora suma todos estos conceptos.",
        },
        {
          question:
            "Cuanto tiempo tiene el empleador para pagar la liquidacion?",
          answer:
            "El empleador tiene 15 dias habiles despues de terminado el contrato. Si no lo hace a tiempo, debe pagar un dia de salario por cada dia de retraso como sancion moratoria.",
        },
        {
          question:
            "La liquidacion aplica para contratos a termino fijo?",
          answer:
            "Si, todos los trabajadores con contrato de trabajo en Colombia tienen derecho a liquidacion, ya sea a termino indefinido, fijo o de obra.",
        },
        {
          question: "Que pasa con las cesantias si cambio de trabajo?",
          answer:
            "Las cesantias se consignan cada ano en un fondo de cesantias. Al retirarte, las solicitas al fondo, no directamente al empleador.",
        },
      ],
    },
    "calculadora-prima-servicios": {
      howItWorks: [
        "La prima de servicios en Colombia es una prestacion social obligatoria establecida en el Articulo 306 del Codigo Sustantivo del Trabajo. Equivale a 30 dias de salario por ano trabajado, pagados en dos partes: 15 dias antes del 30 de junio y 15 dias antes del 20 de diciembre.",
        "La formula de calculo es: (salario mensual x dias trabajados) / 360. Para un semestre completo (180 dias), se recibe la mitad del salario mensual.",
        "Todo trabajador con contrato de trabajo tiene derecho a esta prestacion, incluidos los trabajadores de servicio domestico y los que trabajan tiempo parcial.",
      ],
      faqs: [
        {
          question: "Cuantas veces al ano se paga la prima en Colombia?",
          answer:
            "La prima de servicios se paga dos veces al ano: la primera mitad antes del 30 de junio y la segunda mitad antes del 20 de diciembre.",
        },
        {
          question:
            "La prima de servicios es lo mismo que la prima de navidad?",
          answer:
            "Si, en Colombia la prima de diciembre es la segunda cuota de la prima de servicios. No es una prestacion separada.",
        },
        {
          question:
            "Los trabajadores independientes tienen derecho a prima?",
          answer:
            "No. La prima de servicios es exclusiva de trabajadores con contrato laboral.",
        },
        {
          question:
            "Que pasa si termino mi contrato a mitad de semestre?",
          answer:
            "Si tu contrato termina antes de completar el semestre, tienes derecho a la parte proporcional de la prima correspondiente a los dias trabajados.",
        },
      ],
    },
    "calculadora-cesantias": {
      howItWorks: [
        "Las cesantias son una prestacion social que funciona como un fondo de ahorro obligatorio para los trabajadores colombianos, reguladas por el Articulo 249 del Codigo Sustantivo del Trabajo. Equivalen a un mes de salario por cada ano completo de trabajo.",
        "La formula de calculo es: (salario mensual x dias trabajados) / 360. El empleador debe consignar las cesantias en un fondo privado antes del 15 de febrero de cada ano.",
        "El trabajador puede retirar las cesantias parcialmente para compra de vivienda o pago de educacion, sin necesidad de terminar el contrato.",
      ],
      faqs: [
        {
          question: "Como calculo mis cesantias en Colombia?",
          answer:
            "La formula es: (salario mensual x dias trabajados) / 360. Por ejemplo, si ganas $2.000.000 y trabajaste 180 dias: (2.000.000 x 180) / 360 = $1.000.000.",
        },
        {
          question: "Donde estan mis cesantias?",
          answer:
            "Desde 1991, las cesantias se consignan en fondos privados (Porvenir, Proteccion, Colfondos) o en el Fondo Nacional del Ahorro.",
        },
        {
          question: "Puedo retirar mis cesantias sin renunciar?",
          answer:
            "Si, puedes hacer retiros parciales para: compra, construccion o mejora de vivienda, o pago de educacion superior tuya o de tus hijos.",
        },
        {
          question: "Que son los intereses sobre cesantias?",
          answer:
            "Son un pago adicional del 12% anual que el empleador te paga directamente cada enero sobre el saldo de cesantias acumulado durante el ano.",
        },
      ],
    },
    "calculadora-vacaciones": {
      howItWorks: [
        "Las vacaciones en Colombia estan reguladas por el Articulo 186 del Codigo Sustantivo del Trabajo. Todo trabajador con contrato laboral tiene derecho a 15 dias habiles de vacaciones remuneradas por cada ano completo de servicio.",
        "Durante las vacaciones, el trabajador recibe su salario normal. Si la relacion laboral termina antes de que el trabajador haya disfrutado las vacaciones ganadas, el empleador debe pagarle el equivalente en dinero de los dias pendientes.",
        "Por acuerdo entre las partes, se puede compensar en dinero hasta la mitad de las vacaciones, siempre que el trabajador tome al menos 7 dias habiles de descanso efectivo.",
      ],
      faqs: [
        {
          question: "Cuantos dias de vacaciones tengo en Colombia?",
          answer:
            "Tienes derecho a 15 dias habiles de vacaciones por cada ano de trabajo continuo. Si no completaste el ano, te corresponde la parte proporcional.",
        },
        {
          question: "Me pueden pagar las vacaciones en dinero?",
          answer:
            "Solo se puede compensar en dinero hasta la mitad de las vacaciones (7 o 8 dias), siempre por acuerdo escrito entre empleador y trabajador.",
        },
        {
          question: "Que pasa si no me dan vacaciones?",
          answer:
            "El empleador tiene la obligacion de otorgar vacaciones dentro del ano siguiente al que fueron causadas. En caso de renuncia o despido, siempre se pagan las pendientes.",
        },
        {
          question: "Las vacaciones vencen?",
          answer:
            "En todo caso, al finalizar el contrato siempre se pagan las vacaciones pendientes en dinero.",
        },
      ],
    },
  },
};

function getDefaultContent(
  calcName: string,
  countryName: string
): CalculatorContent {
  return {
    howItWorks: [
      `La ${calcName} en ${countryName} es una herramienta esencial para conocer tus derechos laborales. Esta calculadora te permite obtener un estimado del monto que te corresponde segun la legislacion laboral vigente.`,
      `Para obtener el resultado, ingresa tu salario mensual y las fechas de inicio y fin de tu relacion laboral. La calculadora realizara el calculo automaticamente aplicando las formulas establecidas por la ley.`,
      `Recuerda que este resultado es orientativo. Las cifras exactas pueden variar segun tu contrato, convenio colectivo aplicable o situaciones particulares. Siempre verifica con tu empleador o un asesor laboral.`,
    ],
    faqs: [
      {
        question: `Como funciona esta calculadora de ${calcName}?`,
        answer: `Ingresa tu salario mensual y las fechas de tu relacion laboral. La calculadora aplica automaticamente las formulas legales vigentes en ${countryName} para calcular el monto que te corresponde.`,
      },
      {
        question: "Los resultados son exactos?",
        answer:
          "Los resultados son estimados basados en la legislacion laboral general. Pueden variar segun tu contrato especifico, convenios colectivos o situaciones particulares. Se recomienda consultar con un abogado para casos especificos.",
      },
      {
        question: "Necesito registrarme para usar la calculadora?",
        answer:
          "No, todas las calculadoras de CalculaLaboral son completamente gratuitas y no requieren registro. Tus datos no se almacenan.",
      },
      {
        question: "Con que frecuencia se actualizan los calculos?",
        answer: `Las calculadoras se actualizan segun los cambios en la legislacion laboral de ${countryName}. Siempre verificamos que las formulas correspondan a la normativa vigente.`,
      },
    ],
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { pais, calculadora } = await params;
  const country = countries[pais];

  if (!country) notFound();

  const calc = country.calculators.find((c) => c.slug === calculadora);
  if (!calc) notFound();

  const year = new Date().getFullYear();
  const content =
    calculatorContent[pais]?.[calculadora] ??
    getDefaultContent(calc.name, country.name);

  // Other calculators for this country (excluding the current one)
  const otherCalculators = country.calculators
    .filter((c) => c.slug !== calculadora)
    .slice(0, 4);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cómo calcular ${calc.name} en ${country.name}`,
    description: calc.description,
    step: content.howItWorks.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Paso ${i + 1}`,
      text,
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: 65% */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500" aria-label="Navegacion">
            <Link href="/" className="hover:text-slate-800 transition-colors">
              Inicio
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <Link
              href={`/${pais}`}
              className="hover:text-slate-800 transition-colors"
            >
              {country.name}
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-800 font-medium">{calc.name}</span>
          </nav>

          {/* Badge + Title */}
          <div>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full mb-3">
              Actualizado 2026
            </span>
            <h1 className="text-3xl font-bold text-slate-900">
              {calc.name} {country.name} {year}
            </h1>
            <p className="text-slate-600 mt-3 text-lg leading-relaxed">
              {calc.description}
            </p>
          </div>

          {/* ADSENSE SLOT */}

          {/* Calculator component */}
          <Calculator
            country={pais}
            calculatorType={calculadora}
            calculatorName={calc.name}
          />

          {/* ADSENSE SLOT */}

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-800">Nota:</strong> Los calculos
            proporcionados son orientativos y se basan en la legislacion laboral
            general. No constituyen asesoramiento juridico. Para situaciones
            especificas, consulta siempre con un abogado o asesor laboral
            certificado.
          </div>
        </div>

        {/* Right column: 35%, sticky on desktop */}
        <div className="lg:w-80 xl:w-96 flex-shrink-0 space-y-5">
          {/* How it works card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-800 mb-4">
              Como se calcula
            </h2>
            <ul className="space-y-3">
              {content.howItWorks.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
                >
                  <span className="text-slate-300 flex-shrink-0 mt-0.5">
                    &ndash;
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-800 mb-4">
              Preguntas frecuentes
            </h2>
            <FAQAccordion faqs={content.faqs} />
          </div>

          {/* Quick reference links */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Referencia laboral
            </p>
            <div className="space-y-2">
              <Link
                href={`/${pais}/salario-minimo`}
                className="flex items-center justify-between text-sm text-slate-600 hover:text-emerald-700 transition-colors group"
              >
                <span>Salario mínimo {country.name} 2026</span>
                <span className="text-slate-300 group-hover:text-emerald-500">&rarr;</span>
              </Link>
              <Link
                href={`/${pais}/dias-festivos-2026`}
                className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-700 transition-colors group"
              >
                <span>Días festivos {country.name} 2026</span>
                <span className="text-slate-300 group-hover:text-blue-500">&rarr;</span>
              </Link>
              <Link
                href={`/${pais}/carta-de-renuncia`}
                className="flex items-center justify-between text-sm text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <span>Carta de renuncia {country.name}</span>
                <span className="text-slate-300 group-hover:text-slate-500">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Other calculators card */}
          {otherCalculators.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-base font-bold text-slate-800 mb-4">
                Otras calculadoras de {country.name}
              </h2>
              <ul className="space-y-2">
                {otherCalculators.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/${pais}/${other.slug}`}
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {other.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${pais}`}
                className="inline-block mt-4 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                Ver todas las calculadoras de {country.name} &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
