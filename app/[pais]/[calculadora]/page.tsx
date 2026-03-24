import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getAllCalculatorPaths } from "@/data/countries";
import { articles } from "@/data/articles";
import Calculator from "@/components/Calculator";
import FAQAccordion from "@/components/FAQAccordion";

type Props = {
  params: Promise<{ pais: string; calculadora: string }>;
};

export async function generateStaticParams() {
  return getAllCalculatorPaths();
}

// SEO-optimized title/description for highest-traffic pages
const SEO_META: Record<string, Record<string, { title: string; description: string }>> = {
  mexico: {
    "calculadora-finiquito": {
      title: "Calculadora Finiquito México 2026 – ¿Cuánto Te Corresponde?",
      description: "¿Cuánto de finiquito te corresponde? Calcula aguinaldo, vacaciones y prima vacacional al instante. Gratis, sin registro. LFT actualizada 2026.",
    },
    "calculadora-liquidacion-despido-injustificado": {
      title: "Liquidación por Despido México 2026 – 3 Meses + 20 Días",
      description: "¿Cuánto te pagan si te despiden? Calcula los 3 meses + 20 días por año con aguinaldo y vacaciones proporcionales. LFT 2026, gratis.",
    },
    "calculadora-aguinaldo": {
      title: "Calculadora Aguinaldo México 2026 – ¿Cuántos Días Te Corresponden?",
      description: "¿Cuánto aguinaldo te corresponde? Calcula tu aguinaldo proporcional según días trabajados. Mínimo 15 días por ley. Gratis y sin registro.",
    },
    "calculadora-vacaciones": {
      title: "Calculadora Vacaciones México 2026 – Días Según Reforma LFT",
      description: "¿Cuántos días de vacaciones te corresponden? Calcula según la reforma LFT 2023: desde 12 días el primer año. Incluye prima vacacional. Gratis.",
    },
    "calculadora-nomina-neta": {
      title: "Calculadora Nómina Neta México 2026 – Salario Bruto a Neto",
      description: "¿Cuánto cobras realmente? Descubre tu salario neto descontando ISR e IMSS. Ve exactamente cuánto te depositan. Gratis, sin registro.",
    },
    "calculadora-imss": {
      title: "Calculadora Cuotas IMSS 2026 – ¿Cuánto Te Descuentan?",
      description: "Calcula tus descuentos del IMSS: enfermedad, maternidad, invalidez y retiro. Conoce el porcentaje exacto que te retienen del salario. Gratis.",
    },
    "calculadora-ptu": {
      title: "Calculadora PTU / Utilidades México 2026 – ¿Cuánto Te Toca?",
      description: "¿Cuánto PTU te corresponde? Calcula tu participación en utilidades según días trabajados y salario. LFT Art. 117, actualizado 2026, gratis.",
    },
  },
  colombia: {
    "calculadora-liquidacion": {
      title: "Calculadora Liquidación Colombia 2026 – ¿Cuánto Te Deben?",
      description: "¿Cuánto te corresponde de liquidación? Calcula cesantías, intereses, prima de servicios y vacaciones al instante. CST actualizado 2026, gratis.",
    },
    "calculadora-cesantias": {
      title: "Calculadora Cesantías Colombia 2026 – Calcula Fácil",
      description: "¿Cuánto tienes en cesantías? Calcula cesantías e intereses del 12% anual según días trabajados. Código Sustantivo del Trabajo 2026, gratis.",
    },
    "calculadora-prima-servicios": {
      title: "Prima de Servicios Colombia 2026 – Junio y Diciembre",
      description: "Calcula tu prima de servicios semestral: 15 días de salario en junio y 15 en diciembre. Fórmula oficial CST actualizada 2026, gratis.",
    },
    "calculadora-vacaciones": {
      title: "Calculadora Vacaciones Colombia 2026 – 15 Días Hábiles por Año",
      description: "¿Cuántos días de vacaciones te corresponden en Colombia? 15 días hábiles por año. Calcula tu liquidación de vacaciones. CST 2026, gratis.",
    },
    "calculadora-nomina-neta": {
      title: "Calculadora Salario Neto Colombia 2026 – Bruto a Neto",
      description: "¿Cuánto cobras realmente en Colombia? Calcula tu salario neto descontando EPS, pensión y fondo de solidaridad. Gratis, sin registro.",
    },
  },
  espana: {
    "calculadora-paro": {
      title: "Calculadora del Paro España 2026 – ¿Cuánto Cobrarás?",
      description: "¿Cuánto paro te corresponde? Calcula tu prestación por desempleo según meses cotizados. Base reguladora y duración al instante. SEPE 2026, gratis.",
    },
    "calculadora-finiquito": {
      title: "Calculadora Finiquito España 2026 – ¿Qué Te Deben Pagar?",
      description: "¿Qué incluye tu finiquito? Calcula vacaciones pendientes y partes proporcionales de pagas extra. Estatuto de los Trabajadores 2026, gratis.",
    },
    "calculadora-despido-improcedente": {
      title: "Despido Improcedente España 2026 – Calcula Tu Indemnización",
      description: "¿Te han despedido? Calcula tu indemnización: 33 días por año trabajado. Resultado inmediato según Estatuto de los Trabajadores 2026. Gratis.",
    },
    "calculadora-irpf": {
      title: "Calculadora IRPF España 2026 – Retención e Impuesto Anual",
      description: "Calcula tu retención de IRPF y cuota anual según tramos 2026. Conoce exactamente cuánto pagas a Hacienda. Agencia Tributaria actualizada, gratis.",
    },
    "calculadora-vacaciones": {
      title: "Calculadora Vacaciones España 2026 – Días Pendientes y Pago",
      description: "Calcula tus vacaciones pendientes y su equivalente en dinero en España. 22 días laborables mínimos por año. ET actualizado 2026, gratis.",
    },
  },
  argentina: {
    "calculadora-indemnizacion": {
      title: "Calculadora Indemnización Argentina 2026 – Art. 245 LCT",
      description: "¿Cuánto te corresponde de indemnización? Calcula según Art. 245 LCT: 1 mes de sueldo por año trabajado. Resultado inmediato 2026, gratis.",
    },
    "calculadora-sac": {
      title: "Calculadora SAC Argentina 2026 – Aguinaldo Proporcional",
      description: "¿Cuánto SAC te corresponde? Calcula el aguinaldo proporcional según días trabajados en el semestre. LCT actualizada 2026, gratis y sin registro.",
    },
    "calculadora-liquidacion-final": {
      title: "Liquidación Final Argentina 2026 – ¿Cuánto Te Corresponde?",
      description: "Calcula tu liquidación final en Argentina: SAC proporcional, vacaciones no gozadas e indemnización. LCT 2026, resultado inmediato y gratis.",
    },
    "calculadora-vacaciones": {
      title: "Calculadora Vacaciones Argentina 2026 – Días Según LCT",
      description: "¿Cuántos días de vacaciones te corresponden en Argentina? Calcula según años de antigüedad. LCT actualizada 2026, gratis y sin registro.",
    },
  },
  chile: {
    "calculadora-finiquito": {
      title: "Calculadora Finiquito Chile 2026 – ¿Cuánto Te Corresponde?",
      description: "¿Cuánto finiquito te corresponde en Chile? Calcula indemnización, feriado proporcional y gratificación. Código del Trabajo 2026, gratis.",
    },
    "calculadora-indemnizacion": {
      title: "Calculadora Indemnización Chile 2026 – Años de Servicio",
      description: "Calcula tu indemnización por años de servicio en Chile: 1 mes de remuneración por año trabajado. Código del Trabajo actualizado 2026, gratis.",
    },
    "calculadora-afp": {
      title: "Calculadora AFP Chile 2026 – Cotización Obligatoria",
      description: "¿Cuánto descuenta la AFP de tu sueldo? Calcula tu cotización previsional obligatoria en Chile. Actualizado 2026, gratis y sin registro.",
    },
    "calculadora-feriado": {
      title: "Calculadora Feriado Anual Chile 2026 – ¿Cuántos Días Te Corresponden?",
      description: "¿Cuántos días de feriado (vacaciones) te corresponden en Chile? Calcula el feriado proporcional al cese: 1,25 días hábiles por mes. Código del Trabajo 2026, gratis.",
    },
  },
  peru: {
    "calculadora-cts": {
      title: "Calculadora CTS Perú 2026 – Compensación por Tiempo de Servicio",
      description: "Calcula tu CTS en Perú: depósito de mayo y noviembre. Compensación por tiempo de servicio según Ley 27735. Resultado inmediato, gratis.",
    },
    "calculadora-gratificaciones": {
      title: "Calculadora Gratificación Perú 2026 – Julio y Diciembre",
      description: "¿Cuánto de gratificación te corresponde? Calcula tu gratificación de Fiestas Patrias y Navidad. Un sueldo completo más 9% bonificación. Gratis 2026.",
    },
    "calculadora-liquidacion": {
      title: "Liquidación Laboral Perú 2026 – CTS + Vacaciones + Gratificación",
      description: "Calcula tu liquidación laboral en Perú: vacaciones truncas, gratificación proporcional y más. Ley 27735 y DL 713, resultado inmediato y gratis.",
    },
    "calculadora-vacaciones": {
      title: "Calculadora Vacaciones Perú 2026 – 30 Días por Año",
      description: "¿Cuántos días de vacaciones te corresponden en Perú? 30 días calendario por año trabajado. Calcula vacaciones truncas al cesar. Gratis 2026.",
    },
    "calculadora-afp-onp": {
      title: "Calculadora AFP vs ONP Perú 2026 – ¿Cuánto Te Descuentan?",
      description: "Compara AFP (~13%) y ONP (13%) en Perú: cuánto descuentan de tu sueldo y cuánto cobrarás en la jubilación. Elige el mejor sistema. Gratis 2026.",
    },
  },
  ecuador: {
    "calculadora-liquidacion": {
      title: "Liquidación Laboral Ecuador 2026 – ¿Cuánto Te Corresponde?",
      description: "Calcula tu liquidación en Ecuador: décimo tercero, décimo cuarto, fondos de reserva y vacaciones. Código del Trabajo 2026, gratis.",
    },
    "calculadora-decimo-tercero": {
      title: "Décimo Tercer Sueldo Ecuador 2026 – Calcula Fácil",
      description: "¿Cuánto décimo tercero te corresponde? Calcula el bono navideño proporcional según días trabajados. Código del Trabajo Ecuador 2026, gratis.",
    },
    "calculadora-decimo-cuarto": {
      title: "Décimo Cuarto Sueldo Ecuador 2026 – ¿Cuánto Te Toca?",
      description: "Calcula tu décimo cuarto sueldo en Ecuador: equivale a un salario básico unificado proporcional. Código del Trabajo 2026, gratis.",
    },
  },
  "costa-rica": {
    "calculadora-aguinaldo": {
      title: "Calculadora Aguinaldo Costa Rica 2026 – ¿Cuánto Te Toca?",
      description: "Calcula tu aguinaldo en Costa Rica: un sueldo entre noviembre y diciembre. Proporcional según tiempo trabajado. Código de Trabajo 2026, gratis.",
    },
    "calculadora-cesantia": {
      title: "Calculadora Cesantía Costa Rica 2026 – ¿Cuánto Te Corresponde?",
      description: "¿Cuánto de cesantía te corresponde? Calcula tu auxilio de cesantía en Costa Rica según años trabajados. Código de Trabajo 2026, gratis.",
    },
  },
  bolivia: {
    "calculadora-aguinaldo": {
      title: "Calculadora Aguinaldo Bolivia 2026 – ¿Cuánto Te Corresponde?",
      description: "Calcula tu aguinaldo en Bolivia: un sueldo completo en diciembre. Incluye doble aguinaldo si el PIB supera el 4.5%. Ley boliviana 2026, gratis.",
    },
    "calculadora-desahucio": {
      title: "Calculadora Desahucio Bolivia 2026 – Indemnización por Despido",
      description: "¿Cuánto desahucio te corresponde? Calcula tu indemnización por despido injustificado en Bolivia. Ley General del Trabajo 2026, gratis.",
    },
    "calculadora-liquidacion-final": {
      title: "Liquidación Final Bolivia 2026 – ¿Cuánto Te Corresponde?",
      description: "Calcula tu liquidación laboral en Bolivia: desahucio, aguinaldo proporcional y vacaciones. Ley General del Trabajo 2026, resultado inmediato.",
    },
  },
  venezuela: {
    "calculadora-prestaciones-sociales": {
      title: "Calculadora Prestaciones Sociales Venezuela 2026",
      description: "Calcula tus prestaciones sociales en Venezuela: garantía y días adicionales según años de servicio. LOTTT actualizada 2026, gratis.",
    },
    "calculadora-utilidades": {
      title: "Calculadora Utilidades Venezuela 2026 – ¿Cuántos Días Te Corresponden?",
      description: "¿Cuánto de utilidades te corresponde en Venezuela? Mínimo 15 días y máximo 4 meses según ganancias de la empresa. LOTTT 2026, gratis.",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pais, calculadora } = await params;
  const country = countries[pais];
  if (!country) return { title: "No encontrado" };

  const calc = country.calculators.find((c) => c.slug === calculadora);
  if (!calc) return { title: "No encontrado" };

  const year = new Date().getFullYear();
  const seoOverride = SEO_META[pais]?.[calculadora];

  const title = seoOverride?.title ?? `${calc.name} ${country.name} ${year} | Gratis`;
  const description = seoOverride?.description ?? `${calc.description} en ${country.name}. Calcula gratis y al instante con nuestra herramienta actualizada ${year}.`;

  return {
    title,
    description,
    openGraph: {
      title: seoOverride?.title ?? `${calc.name} ${country.name} ${year}`,
      description: seoOverride?.description ?? `${calc.description}. Resultado inmediato y desglose completo.`,
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
  espana: {
    "calculadora-paro": {
      howItWorks: [
        "La prestación por desempleo en España está regulada por el Real Decreto Legislativo 8/2015 (Ley General de la Seguridad Social). Para tener derecho al paro, es necesario haber cotizado un mínimo de 360 días en los últimos 6 años. La duración de la prestación oscila entre 120 días (si cotizaste entre 360 y 539 días) y 720 días (si cotizaste más de 2.160 días).",
        "La cuantía de la prestación equivale al 70% de la base reguladora durante los primeros 180 días, y al 50% a partir del día 181. La base reguladora se calcula dividiendo entre 180 la suma de las bases de cotización de los últimos 180 días cotizados antes de quedarse en desempleo. Existen topes mínimos y máximos que fija el SEPE anualmente según el Indicador Público de Renta de Efectos Múltiples (IPREM).",
        "Para solicitar el paro debes dirigirte al Servicio Público de Empleo Estatal (SEPE) o solicitarlo online en su sede electrónica dentro de los 15 días hábiles siguientes a la situación de desempleo. Perder ese plazo puede suponer perder días de prestación. La prestación también está sujeta a retención del IRPF, aunque en cuantías bajas puede quedar exenta.",
      ],
      faqs: [
        {
          question: "¿Cuánto paro me corresponde?",
          answer:
            "Los primeros 180 días cobras el 70% de tu base reguladora, y a partir del día 181 el 50%. La base reguladora es el promedio de tus últimas 6 nóminas brutas. Por ejemplo, con un salario de 1.500 € brutos mensuales, los primeros 6 meses cobrarías unos 1.050 € y después 750 €, siempre con los topes del SEPE.",
        },
        {
          question: "¿Cuántos días de paro me corresponden?",
          answer:
            "Depende de los días cotizados en los últimos 6 años: 360-539 días cotizados = 120 días de paro; 540-719 días = 180 días; 720-899 días = 240 días; y así sucesivamente hasta un máximo de 720 días con más de 2.160 días cotizados.",
        },
        {
          question: "¿Cuándo empieza a cobrarse el paro?",
          answer:
            "La prestación comienza el día siguiente a la situación legal de desempleo (por ejemplo, el día después de tu último día en la empresa). Sin embargo, debes solicitarla en el SEPE en los 15 días hábiles siguientes. Si lo solicitas después, perderás los días transcurridos entre el inicio del derecho y la solicitud.",
        },
        {
          question: "¿Qué pasa si encuentro trabajo mientras cobro el paro?",
          answer:
            "Debes comunicarlo al SEPE inmediatamente. Si el nuevo trabajo es a tiempo completo, se suspende la prestación y puedes reanudar el tiempo restante si vuelves a quedarte sin empleo. Si es a tiempo parcial, puedes compatibilizar parte del paro con el nuevo salario. No comunicarlo es fraude y puede conllevar sanción y devolución de cantidades.",
        },
      ],
    },
    "calculadora-finiquito": {
      howItWorks: [
        "El finiquito en España está regulado principalmente por el Artículo 49 del Estatuto de los Trabajadores (ET). Es el documento económico que recoge todos los conceptos pendientes de pago al finalizar una relación laboral, independientemente de la causa: renuncia, despido, fin de contrato temporal o cualquier otra causa de extinción.",
        "El finiquito debe incluir obligatoriamente: las vacaciones devengadas y no disfrutadas (el mínimo legal son 22 días laborables por año trabajado, proporcionales al tiempo trabajado), la parte proporcional de las pagas extraordinarias (mínimo 2 al año según el ET, aunque el convenio colectivo puede establecer más) y los salarios pendientes de cobro hasta la fecha de baja. No incluye la indemnización por despido, que es un concepto aparte.",
        "El trabajador tiene derecho a revisar el finiquito antes de firmarlo, incluso con un representante sindical. Si no estás de acuerdo con las cantidades, puedes firmar añadiendo la expresión 'no conforme', lo que preserva tu derecho a reclamar. El plazo para reclamar cantidades del finiquito es de 1 año desde que se hicieron exigibles (Art. 59 ET).",
      ],
      faqs: [
        {
          question: "¿Qué incluye el finiquito en España?",
          answer:
            "El finiquito debe incluir: vacaciones no disfrutadas (22 días laborables mínimos por año, proporcionales), partes proporcionales de las pagas extra (mínimo dos al año), y salarios o comisiones pendientes de cobro. El finiquito no incluye la indemnización por despido, que es un concepto independiente.",
        },
        {
          question: "¿Cuándo deben pagarme el finiquito?",
          answer:
            "El Estatuto de los Trabajadores no fija un plazo exacto, pero la jurisprudencia y los convenios colectivos suelen establecer que debe abonarse el último día de trabajo o en los días inmediatamente siguientes. El retraso injustificado puede dar lugar a intereses de demora e incluso a una reclamación de cantidad ante el Juzgado de lo Social.",
        },
        {
          question: "¿Debo firmar el finiquito si no estoy de acuerdo?",
          answer:
            "No estás obligado a firmarlo tal como está. Puedes firmarlo añadiendo 'no conforme' para dejar constancia de tu desacuerdo y conservar el derecho a reclamar. También puedes pedir que un delegado sindical o tu representante legal lo revise antes. Si lo firmas sin ninguna reserva, puede interpretarse como que aceptas las cantidades.",
        },
        {
          question: "¿Es lo mismo el finiquito que la indemnización?",
          answer:
            "No. El finiquito recoge las cantidades devengadas y pendientes de pago (vacaciones, pagas proporcionales, salarios). La indemnización es la compensación económica específica por la extinción del contrato, que solo corresponde en determinadas causas (despido improcedente, fin de contratos de obra o servicio, etc.). Ambas pueden aparecer en el mismo documento pero son conceptos distintos.",
        },
      ],
    },
    "calculadora-despido-improcedente": {
      howItWorks: [
        "El despido improcedente en España está regulado por el Artículo 56 del Estatuto de los Trabajadores. Se declara improcedente cuando el empresario no acredita la causa del despido o no cumple los requisitos formales. Ante un despido improcedente, el empleador tiene que optar entre readmitir al trabajador en las mismas condiciones o abonar una indemnización.",
        "La indemnización por despido improcedente es de 33 días de salario por año de servicio, con un máximo de 24 mensualidades. Para los contratos anteriores al 12 de febrero de 2012 (fecha de la reforma laboral), los periodos de servicio previos a esa fecha se calculan a razón de 45 días por año, con un límite de 42 mensualidades para esa parte, generando un cálculo mixto para contratos muy antiguos.",
        "El trabajador tiene 20 días hábiles para impugnar el despido ante el Juzgado de lo Social (Art. 59.3 ET), previa conciliación ante el SMAC o SERCLA (según la comunidad autónoma). Es importante no firmar el finiquito sin analizar si corresponde indemnización adicional. El coste del proceso judicial recae inicialmente sobre el trabajador, aunque si gana puede recuperar costas.",
      ],
      faqs: [
        {
          question: "¿Cuánto me corresponde por despido improcedente?",
          answer:
            "La indemnización es de 33 días de salario bruto por año trabajado, con un máximo de 24 mensualidades. Se calcula dividiendo el salario anual bruto entre 365 para obtener el salario diario, multiplicando por 33, y luego por los años de servicio. El resultado nunca puede superar 24 meses de salario.",
        },
        {
          question: "¿Qué diferencia hay con el despido procedente?",
          answer:
            "En el despido procedente (por causas objetivas como necesidades de la empresa), la indemnización es de 20 días por año trabajado con máximo de 12 mensualidades. En el despido disciplinario declarado procedente no hay indemnización. En el improcedente, la indemnización sube a 33 días y el tope es de 24 mensualidades.",
        },
        {
          question: "¿Puedo impugnar el despido?",
          answer:
            "Sí. Tienes 20 días hábiles desde la comunicación del despido para impugnarlo. Primero debes intentar una conciliación extrajudicial (obligatoria), y si no hay acuerdo, puedes presentar demanda en el Juzgado de lo Social. Muchos casos se resuelven en conciliación con un acuerdo económico.",
        },
        {
          question: "¿Cuánto tiempo tengo para reclamar?",
          answer:
            "Solo tienes 20 días hábiles desde la fecha del despido para impugnarlo judicialmente. Es un plazo muy corto y de caducidad (no de prescripción), lo que significa que una vez transcurrido, pierdes el derecho irrecuperablemente. Actúa cuanto antes y consúltalo con un abogado laboralista.",
        },
      ],
    },
    "calculadora-irpf": {
      howItWorks: [
        "El IRPF (Impuesto sobre la Renta de las Personas Físicas) está regulado por la Ley 35/2006. Es un impuesto progresivo que se aplica por tramos sobre la base liquidable general. Para 2026, los tramos estatales son: hasta 12.450 € al 19%; de 12.450 a 20.200 € al 24%; de 20.200 a 35.200 € al 30%; de 35.200 a 60.000 € al 37%; de 60.000 a 300.000 € al 45%; y más de 300.000 € al 47%. A esto se suman los tramos autonómicos, que varían según la comunidad.",
        "Las empresas aplican una retención mensual en nómina a cuenta del IRPF anual, calculada por el departamento de RRHH o la gestoría. Esta retención depende del salario bruto anual, la situación familiar del trabajador (número de hijos, discapacidad, etc.) y otras circunstancias. Cada año en la declaración de la renta (entre abril y junio) se regulariza la diferencia entre lo retenido y lo que realmente correspondía pagar.",
        "Existen múltiples deducciones y reducciones que pueden minorar la base imponible: reducción por rendimientos del trabajo (hasta 5.565 € anuales para rentas bajas), deducción por maternidad (1.200 € por hijo menor de 3 años), deducción por familia numerosa, por ascendientes o descendientes a cargo con discapacidad, y deducciones autonómicas específicas de cada comunidad autónoma.",
      ],
      faqs: [
        {
          question: "¿Cómo se calcula el IRPF?",
          answer:
            "El IRPF se aplica por tramos de forma progresiva sobre el salario bruto anual menos las deducciones aplicables. Cada tramo tiene un tipo distinto: solo se aplica el tipo mayor al importe que supera cada umbral. Por ejemplo, con 25.000 € brutos, los primeros 12.450 € tributan al 19%, los siguientes 7.750 € al 24%, y los restantes 4.800 € al 30%.",
        },
        {
          question: "¿Qué porcentaje de IRPF me retienen en nómina?",
          answer:
            "La retención en nómina es un porcentaje personalizado que calcula tu empresa. Con salarios entre 15.000 y 25.000 € brutos la retención suele estar entre el 10% y el 20%. Los factores que la reducen son: tener hijos, situación monoparental, discapacidad o cónyuge sin ingresos. Puedes pedir a tu empresa que cambie tu tipo de retención con el modelo 145.",
        },
        {
          question: "¿Cuándo hay que hacer la declaración de la renta?",
          answer:
            "La campaña de la renta se realiza cada año entre abril y junio (habitualmente del 3 de abril al 30 de junio). Están obligados a declarar los asalariados con más de 22.000 € brutos de un único pagador, o más de 15.000 € con dos o más pagadores. Aunque no estés obligado, puede interesarte declarar si te resulta a devolver.",
        },
        {
          question: "¿Cómo puedo pagar menos IRPF?",
          answer:
            "Las principales vías para reducir el IRPF son: aportaciones a planes de pensiones (hasta 1.500 € anuales reducen la base imponible), deducción por adquisición de vivienda habitual (solo para hipotecas anteriores a 2013), deducciones por donativos, y las deducciones autonómicas aplicables en tu comunidad. Además, aplicar correctamente las circunstancias familiares en el modelo 145 reduce la retención mensual.",
        },
      ],
    },
    "calculadora-iva": {
      howItWorks: [
        "El IVA (Impuesto sobre el Valor Añadido) en España está regulado por la Ley 37/1992. Es un impuesto indirecto que grava el consumo de bienes y servicios. Existen tres tipos impositivos: el tipo general del 21% (aplicable a la mayoría de bienes y servicios), el tipo reducido del 10% (alimentos procesados, transporte de viajeros, hostelería, servicios de peluquería, etc.) y el tipo superreducido del 4% (alimentos básicos como pan, leche o huevos, medicamentos, libros y periódicos, material escolar).",
        "Para calcular el precio con IVA incluido, se multiplica el precio base por (1 + el tipo de IVA en decimal). Por ejemplo, un servicio de 100 € con IVA general queda en 121 €. Para extraer el IVA de un precio ya incluido, se divide entre (1 + tipo) y se resta el resultado: 121 / 1,21 = 100 € (base), 121 − 100 = 21 € (IVA). Los autónomos y empresas deben declarar el IVA trimestralmente mediante el modelo 303.",
        "Existen operaciones exentas de IVA, como servicios médicos, educativos, financieros o de seguros, y operaciones intracomunitarias bajo ciertas condiciones. Los autónomos en módulos pueden estar acogidos al régimen de recargo de equivalencia. Desde julio de 2023, ciertos alimentos básicos tuvieron sus tipos de IVA reducidos temporalmente como medida antiinflación.",
      ],
      faqs: [
        {
          question: "¿Cómo se calcula el IVA?",
          answer:
            "Para añadir IVA a un precio base: precio × (1 + tipo IVA). Ejemplo: 200 € × 1,21 = 242 € con IVA general. Para desglosar el IVA de un precio final: precio final / (1 + tipo IVA) = base imponible. Ejemplo: 242 € / 1,21 = 200 € de base y 42 € de IVA.",
        },
        {
          question: "¿Cuál es el tipo de IVA en España en 2026?",
          answer:
            "Hay tres tipos: general (21%, para la mayoría de bienes y servicios), reducido (10%, para alimentos procesados, transporte, hostelería) y superreducido (4%, para alimentos básicos como pan, leche, huevos, así como libros y medicamentos). Algunas operaciones están exentas de IVA.",
        },
        {
          question: "¿Qué productos tienen IVA reducido o superreducido?",
          answer:
            "IVA reducido al 10%: frutas, verduras y hortalizas, carnes y pescados elaborados, agua, transporte de viajeros, hostelería y restauración, entradas a espectáculos. IVA superreducido al 4%: pan, cereales, leche, queso, huevos, frutas y verduras frescas, libros y revistas, medicamentos y productos farmacéuticos, prótesis e implantes.",
        },
        {
          question: "¿Cómo funciona el IVA para autónomos?",
          answer:
            "Los autónomos en régimen general deben repercutir IVA en sus facturas y declararlo trimestralmente con el modelo 303 (en enero, abril, julio y octubre). Pueden deducir el IVA soportado en sus compras y gastos de negocio. El resultado puede ser a ingresar (si repercutiste más del que soportaste) o a devolver/compensar en el siguiente trimestre.",
        },
      ],
    },
    "calculadora-vacaciones": {
      howItWorks: [
        "El derecho a vacaciones en España está regulado por el Artículo 38 del Estatuto de los Trabajadores. Todo trabajador tiene derecho a un mínimo de 30 días naturales de vacaciones al año, lo que equivale a 22 días laborables. Este mínimo es irrenunciable y no puede ser compensado en metálico durante la vigencia del contrato, salvo en el caso de extinción de la relación laboral.",
        "Las vacaciones se devengan desde el primer día de trabajo de forma proporcional. Si el trabajador no lleva un año completo en la empresa, tiene derecho a la parte proporcional de los 22 días laborables. El período de disfrute de vacaciones debe fijarse de común acuerdo entre empresa y trabajador, y el trabajador debe conocer la fecha de disfrute al menos con dos meses de antelación.",
        "Si el contrato se extingue (por cualquier causa: renuncia, despido, fin de contrato temporal) y el trabajador tiene días de vacaciones devengados no disfrutados, la empresa está obligada a abonar su importe en el finiquito. El importe se calcula multiplicando los días pendientes por el salario diario del trabajador (incluyendo todos los conceptos salariales fijos).",
      ],
      faqs: [
        {
          question: "¿Cuántos días de vacaciones tengo en España?",
          answer:
            "El mínimo legal es de 30 días naturales al año, que equivalen a 22 días laborables. Muchos convenios colectivos establecen más días. Si llevas menos de un año, tienes derecho a la parte proporcional: por ejemplo, si llevas 6 meses, te corresponden 11 días laborables.",
        },
        {
          question: "¿Me pueden pagar las vacaciones en vez de disfrutarlas?",
          answer:
            "No, mientras el contrato esté en vigor las vacaciones no se pueden sustituir por compensación económica; la ley obliga a disfrutarlas. La única excepción es cuando el contrato se extingue y quedan días pendientes: en ese caso, sí deben abonarse en el finiquito.",
        },
        {
          question: "¿Qué pasa si me despiden con vacaciones pendientes?",
          answer:
            "Tienes derecho a cobrar en el finiquito el valor de los días de vacaciones que hayas generado y no hayas disfrutado. Se calcula multiplicando los días pendientes por tu salario diario (salario anual dividido entre 365 días o entre los días laborables del año, según el convenio). Es un derecho irrenunciable.",
        },
        {
          question: "¿Las vacaciones caducan?",
          answer:
            "Las vacaciones deben disfrutarse dentro del año natural o en el período pactado con la empresa. Sin embargo, el Tribunal de Justicia de la UE ha establecido que si el trabajador no pudo disfrutarlas por causa no imputable a él (por ejemplo, por baja médica prolongada), no pierden el derecho sin que hayan sido debidamente informados por la empresa de su posible caducidad.",
        },
      ],
    },
  },
  argentina: {
    "calculadora-indemnizacion": {
      howItWorks: [
        "La indemnización por despido sin causa en Argentina está regulada por el Artículo 245 de la Ley de Contrato de Trabajo (LCT). El trabajador despedido sin justa causa tiene derecho a recibir una indemnización equivalente a un mes de la mejor remuneración mensual normal y habitual por cada año de servicio o fracción mayor a 3 meses, tomando como base el período de los últimos doce meses.",
        "La base de cálculo es la mejor remuneración mensual normal y habitual, no el promedio. Esto significa que si en algún mes del último año el trabajador cobró más (por horas extra habituales, comisiones regulares u otros conceptos de pago regular), ese mes puede ser la base. La indemnización mínima equivale a dos meses del salario base de convenio. Además, la CSJN estableció que no puede aplicarse un tope que resulte inferior al 67% del valor real del salario.",
        "Además de la indemnización del Art. 245, el empleador debe pagar el preaviso no otorgado (1 mes si la antigüedad es de 1 a 5 años, 2 meses si supera los 5 años), la integración del mes de despido (los días restantes hasta el fin del mes en que se notificó el despido), el SAC proporcional del semestre en curso y las vacaciones proporcionales no gozadas.",
      ],
      faqs: [
        {
          question: "¿Cuánto me corresponde de indemnización en Argentina?",
          answer:
            "La fórmula básica es: mejor sueldo mensual del último año × años trabajados (contando fracciones mayores a 3 meses). El mínimo son 2 sueldos. Por ejemplo, con un sueldo de $500.000 y 3 años y 4 meses de antigüedad, la indemnización base sería $500.000 × 4 = $2.000.000 (los 4 tramos anuales o fracciones mayores a 3 meses).",
        },
        {
          question: "¿Cómo se determina el 'mejor sueldo' para calcular la indemnización?",
          answer:
            "Se toma la mejor remuneración mensual normal y habitual de los últimos 12 meses. 'Normal y habitual' excluye conceptos extraordinarios y no repetitivos. Se incluyen el sueldo básico, horas extra habituales, comisiones regulares y adicionales fijos, pero no bonos esporádicos o pagos de una sola vez.",
        },
        {
          question: "¿Qué es el preaviso en Argentina?",
          answer:
            "El preaviso es la obligación de avisar con anticipación la finalización del contrato. Si el empleador no lo otorga, debe pagar su equivalente en dinero: 1 mes de salario para trabajadores con entre 90 días y 5 años de antigüedad; 2 meses para más de 5 años. Durante el preaviso el trabajador sigue trabajando normalmente o puede ser eximido de hacerlo.",
        },
        {
          question: "¿Cuándo prescriben los derechos laborales en Argentina?",
          answer:
            "Los créditos laborales prescriben a los 2 años desde que fueron exigibles (Art. 256 LCT). Esto significa que si te despidieron o tienes derechos laborales impagos, tienes 2 años para reclamarlos ante el Ministerio de Trabajo o la Justicia Laboral. Actos como telegrama de intimación interrumpen el plazo de prescripción.",
        },
      ],
    },
    "calculadora-sac": {
      howItWorks: [
        "El Sueldo Anual Complementario (SAC), conocido popularmente como aguinaldo, está regulado por los Artículos 121 a 123 de la Ley de Contrato de Trabajo. Todo trabajador en relación de dependencia tiene derecho a percibir el SAC, que equivale al 50% de la mayor remuneración mensual devengada en el semestre de referencia.",
        "El SAC se paga en dos cuotas: la primera cuota al 30 de junio (correspondiente al primer semestre, de enero a junio) y la segunda cuota al 18 de diciembre (correspondiente al segundo semestre, de julio a diciembre). Si el trabajador no trabajó todo el semestre, ya sea por ingreso posterior al inicio del período o por egreso antes del fin, tiene derecho al SAC proporcional calculado sobre los días efectivamente trabajados.",
        "La fórmula del SAC proporcional es: (mejor remuneración del período / 2) × (días trabajados en el semestre / días totales del semestre). El SAC no puede ser absorbido ni compensado por otras prestaciones, y su abono fuera de término genera intereses y puede dar lugar a multas. También incide en el cálculo de la indemnización por despido y las vacaciones.",
      ],
      faqs: [
        {
          question: "¿Qué es el SAC (aguinaldo) en Argentina?",
          answer:
            "El SAC o aguinaldo es un salario adicional anual obligatorio que equivale al 50% de la mejor remuneración mensual del semestre. No es un 'regalo' del empleador sino un derecho laboral establecido por la LCT. Lo deben pagar todos los empleadores a todos sus trabajadores en relación de dependencia, sin importar el tipo de contrato.",
        },
        {
          question: "¿Cuándo se paga el aguinaldo en Argentina?",
          answer:
            "Se paga en dos cuotas: la primera el 30 de junio y la segunda el 18 de diciembre. Si el empleador no paga en esas fechas, incurre en mora automáticamente y deben abonarse intereses. Si te vas antes de esas fechas, tienes derecho al SAC proporcional al tiempo trabajado en el semestre.",
        },
        {
          question: "¿Cómo se calcula el SAC proporcional?",
          answer:
            "Si no trabajaste el semestre completo, el SAC proporcional se calcula así: (mejor sueldo del período / 2) × (días trabajados / días del semestre). Por ejemplo, si trabajaste 90 días en un semestre de 181 días y tu mejor sueldo fue de $400.000: ($400.000 / 2) × (90 / 181) = $99.448 aproximadamente.",
        },
        {
          question: "¿El SAC se paga si me despiden?",
          answer:
            "Sí. Al desvincularte por cualquier causa (despido, renuncia o mutuo acuerdo), el empleador debe abonar el SAC proporcional correspondiente al tiempo trabajado en el semestre en curso. Forma parte de la liquidación final y es irrenunciable.",
        },
      ],
    },
    "calculadora-vacaciones": {
      howItWorks: [
        "Las vacaciones anuales en Argentina están reguladas por los Artículos 150 a 156 de la Ley de Contrato de Trabajo. La duración del período de descanso anual depende de la antigüedad del trabajador: hasta 5 años de antigüedad corresponden 14 días; de 5 a 10 años, 21 días; de 10 a 20 años, 28 días; y más de 20 años, 35 días. Para tener derecho al período completo, el trabajador debe haber prestado servicios al menos la mitad de los días hábiles del año.",
        "Si el trabajador no completó el tiempo mínimo de prestación efectiva de servicios, tiene derecho a un día de vacaciones por cada veinte días de trabajo efectivo. El goce de las vacaciones se produce entre el 1 de octubre y el 30 de abril del año siguiente, debiendo coincidir con el período estival siempre que las necesidades de la empresa lo permitan. Si hay cónyuges que trabajan en la misma empresa, tienen derecho a gozarlas simultáneamente.",
        "El pago de vacaciones debe realizarse antes del inicio del período de descanso. La remuneración por vacaciones se calcula dividiendo la remuneración mensual del trabajador por 25 y multiplicando por los días de vacaciones. Si el contrato se extingue antes de que el trabajador haya tomado las vacaciones del período iniciado, tiene derecho a percibir una compensación económica por los días proporcionales.",
      ],
      faqs: [
        {
          question: "¿Cuántos días de vacaciones me corresponden en Argentina?",
          answer:
            "Depende de tu antigüedad: hasta 5 años = 14 días corridos; de 5 a 10 años = 21 días corridos; de 10 a 20 años = 28 días corridos; más de 20 años = 35 días corridos. Para tener derecho al período completo debes haber trabajado al menos la mitad de los días hábiles del año.",
        },
        {
          question: "¿Cuándo se toman las vacaciones en Argentina?",
          answer:
            "El período de vacaciones debe otorgarse entre el 1 de octubre y el 30 de abril del año siguiente. El empleador puede elegir la fecha dentro de ese período según las necesidades de la empresa, pero debe avisar al trabajador con al menos 45 días de anticipación. En temporada de verano suele concentrarse enero y febrero.",
        },
        {
          question: "¿Cómo se calcula el pago de vacaciones?",
          answer:
            "La remuneración vacacional se calcula dividiendo el sueldo mensual entre 25 (no entre 30) para obtener el valor diario, y luego multiplicándolo por los días de vacaciones correspondientes. Por ejemplo, con un sueldo de $500.000 y 14 días de vacaciones: ($500.000 / 25) × 14 = $280.000.",
        },
        {
          question: "¿Puedo pedir que me paguen las vacaciones en vez de tomarlas?",
          answer:
            "No. Durante la vigencia del contrato laboral, las vacaciones son irrenunciables y no pueden sustituirse por compensación económica. Solo en caso de extinción del contrato, el empleador debe abonar en la liquidación final los días de vacaciones proporcionales no gozados del período en curso.",
        },
      ],
    },
    "calculadora-liquidacion-final": {
      howItWorks: [
        "La liquidación final en Argentina comprende todos los créditos laborales que corresponden al trabajador al momento de la extinción del vínculo laboral, regulados por la Ley de Contrato de Trabajo. Los conceptos que la integran varían según la causa del despido, pero en un despido sin causa incluyen: la indemnización por antigüedad (Art. 245 LCT), la indemnización sustitutiva de preaviso (1 o 2 meses según antigüedad) y la integración del mes de despido.",
        "Además de los conceptos indemnizatorios, la liquidación final siempre debe incluir los rubros salariales proporcionales al período trabajado: el SAC proporcional del semestre en curso (50% de la mejor remuneración mensual × días trabajados / días del semestre) y las vacaciones proporcionales no gozadas del período en curso (días de vacaciones × salario diario, siendo el salario diario = sueldo mensual / 25). Todos estos conceptos deben abonarse dentro de los 4 días hábiles de producida la extinción.",
        "Si el empleador no abona la liquidación en tiempo y forma, incurre en la sanción del Artículo 2 de la Ley 25.323, que puede duplicar las indemnizaciones si el trabajador debió recurrir a la vía judicial. También generará intereses. El trabajador puede intimar telegráficamente al empleador, lo que interrumpe la prescripción y da inicio formal a la reclamación.",
      ],
      faqs: [
        {
          question: "¿Qué incluye la liquidación final en Argentina?",
          answer:
            "En un despido sin causa incluye: indemnización por antigüedad (Art. 245), preaviso no otorgado (1 o 2 meses), integración del mes de despido (días restantes del mes hasta fin de mes), SAC proporcional del semestre, y vacaciones proporcionales no gozadas. Si es una renuncia, no hay indemnización por antigüedad ni preaviso, pero sí SAC proporcional y vacaciones proporcionales.",
        },
        {
          question: "¿Cuándo deben pagarme la liquidación final?",
          answer:
            "El empleador tiene 4 días hábiles contados desde la extinción del vínculo laboral para abonar la liquidación final. Si no lo hace en ese plazo, incurre en mora automática y se generan intereses. Puedes intimarlo por telegrama laboral gratuito (en el correo argentino) exigiendo el pago.",
        },
        {
          question: "¿Cuánto es el preaviso en Argentina?",
          answer:
            "El preaviso obligatorio depende de la antigüedad: durante el período de prueba (primeros 3 meses), el preaviso es de 15 días; con hasta 5 años de antigüedad, 1 mes; con más de 5 años, 2 meses. Si el empleador no otorga el preaviso, debe pagar su equivalente económico como 'preaviso omitido'.",
        },
        {
          question: "¿Cómo se calcula la integración del mes de despido?",
          answer:
            "La integración del mes de despido son los días que van desde la fecha de despido hasta el último día del mes en curso. Se calcula dividiendo el salario mensual entre 30 y multiplicando por los días restantes. Por ejemplo, si te despiden el 10 de marzo, la integración son los 21 días restantes de marzo: (sueldo / 30) × 21.",
        },
      ],
    },
    "calculadora-horas-extra": {
      howItWorks: [
        "Las horas extras en Argentina están reguladas por el Artículo 201 de la Ley de Contrato de Trabajo. Se considera hora extra aquella trabajada más allá de la jornada legal ordinaria, que es de 8 horas diarias o 48 horas semanales. La LCT establece un límite de 3 horas extra por día y 30 horas extra por mes, con un máximo de 200 horas extra por año.",
        "El recargo por hora extra varía según el momento en que se trabaja: las horas extra en días hábiles (de lunes a viernes y sábados hasta las 13 horas) tienen un recargo del 50% sobre el valor de la hora ordinaria. Las horas extra trabajadas en sábados después de las 13 horas, domingos y feriados tienen un recargo del 100% sobre el valor de la hora ordinaria.",
        "Para calcular el valor de la hora extra, primero se determina el valor de la hora ordinaria dividiendo el sueldo mensual entre los días laborables del mes y luego entre las horas de la jornada diaria (generalmente 8 horas). A ese valor se le aplica el recargo correspondiente. Las horas extra forman parte de la remuneración habitual y, si son frecuentes, deben computarse para el cálculo del SAC e incluso pueden considerarse parte de la 'mejor remuneración' para la indemnización.",
      ],
      faqs: [
        {
          question: "¿Cuánto se paga la hora extra en Argentina?",
          answer:
            "Las horas extra en días hábiles (lunes a sábado hasta las 13 h) se pagan con un 50% de recargo sobre el valor de la hora normal. Las trabajadas sábados después de las 13 h, domingos y feriados llevan un 100% de recargo. El valor de la hora normal se calcula dividiendo el sueldo mensual entre los días y horas de jornada.",
        },
        {
          question: "¿Cuántas horas extra puedo trabajar por ley?",
          answer:
            "La LCT fija un límite de 3 horas extra por día, 30 horas por mes y 200 horas por año. Superar estos límites no exime al empleador de pagarlas, pero puede dar lugar a sanciones administrativas. Algunos convenios colectivos establecen límites distintos o recargos mayores.",
        },
        {
          question: "¿Qué pasa si no me pagan las horas extra?",
          answer:
            "Puedes reclamarlas ante el Ministerio de Trabajo (de forma gratuita) o ante la Justicia Laboral. Tienes 2 años para reclamar desde que fueron exigibles. Se recomienda conservar registros como mensajes de WhatsApp, correos o planillas que acrediten que trabajaste esas horas.",
        },
        {
          question: "¿Las horas extra cuentan para el aguinaldo e indemnización?",
          answer:
            "Sí. Las horas extra habituales y regulares forman parte de la 'remuneración normal y habitual'. Si las cobrabas con cierta regularidad, deben incluirse en la base del SAC (aguinaldo) y pueden ser la 'mejor remuneración' para calcular la indemnización del Art. 245 LCT.",
        },
      ],
    },
  },
  chile: {
    "calculadora-finiquito": {
      howItWorks: [
        "El finiquito en Chile está regulado por los Artículos 159 al 163 del Código del Trabajo. Es el acto jurídico por el cual empleador y trabajador dejan constancia del término de la relación laboral y del pago de todas las obligaciones derivadas del contrato. Debe ser firmado por ambas partes ante ministro de fe (inspector del trabajo, notario, oficial civil o secretario municipal).",
        "El finiquito debe incluir todos los conceptos adeudados según la causal de término: el saldo de remuneraciones pendientes, el feriado proporcional (2,5 días hábiles por mes trabajado, o la fracción proporcional), la gratificación legal proporcional si la empresa tuvo utilidades o la gratificación garantizada si aplica, y la indemnización por años de servicio cuando la causal lo contemple (por ejemplo, necesidades de la empresa, Art. 161 CT). También incluye la indemnización sustitutiva de aviso previo si no se avisó con 30 días de anticipación.",
        "El trabajador tiene derecho a revisar el finiquito antes de firmarlo y puede solicitar hasta 3 días para hacerlo. Si no está de acuerdo, puede firmarlo 'con reserva', lo que le permite reclamar posteriormente ante la Inspección del Trabajo o los Tribunales Laborales. El plazo para demandar diferencias del finiquito es de 6 meses desde la fecha de separación.",
      ],
      faqs: [
        {
          question: "¿Qué incluye el finiquito en Chile?",
          answer:
            "Incluye: remuneraciones pendientes, feriado proporcional (2,5 días hábiles por mes trabajado), gratificación proporcional (si aplica), y según la causal de término, la indemnización por años de servicio (1 mes de remuneración por año, con tope de 11 años) y la indemnización sustitutiva de aviso previo (1 mes de remuneración si no hubo aviso).",
        },
        {
          question: "¿Cuándo deben pagarme el finiquito en Chile?",
          answer:
            "El empleador tiene la obligación de poner el finiquito a disposición del trabajador dentro de los 10 días hábiles siguientes al término del contrato. Si no lo hace en ese plazo, la Inspección del Trabajo puede multarlo. El pago debe hacerse efectivo al momento de la firma.",
        },
        {
          question: "¿Debo firmar el finiquito en Chile?",
          answer:
            "No estás obligado a firmarlo si no estás de acuerdo. Puedes firmarlo 'con reserva' para conservar el derecho a reclamar las diferencias. También puedes solicitar hasta 3 días para revisarlo. Si el empleador no te paga lo correcto, puedes denunciarlo ante la Inspección del Trabajo de forma gratuita.",
        },
        {
          question: "¿Puedo impugnar el finiquito después de firmarlo?",
          answer:
            "Si firmaste 'con reserva', tienes 6 meses para demandar las diferencias ante los Juzgados del Trabajo. Si firmaste sin reservas, es más difícil impugnarlo, aunque la jurisprudencia permite hacerlo si hubo error, dolo o fuerza. Se recomienda siempre asesorarse antes de firmar.",
        },
      ],
    },
    "calculadora-indemnizacion": {
      howItWorks: [
        "La indemnización por años de servicio en Chile está regulada por el Artículo 163 del Código del Trabajo. Corresponde un mes de la última remuneración mensual devengada por cada año de servicio o fracción superior a 6 meses, con un tope de 11 años de indemnización (equivalente a 11 meses de remuneración máximo). Esta indemnización solo procede cuando el empleador pone término al contrato por causales específicas: necesidades de la empresa (Art. 161) o desahucio.",
        "No todas las causales de despido dan derecho a indemnización por años de servicio. No corresponde en caso de renuncia voluntaria del trabajador, mutuo acuerdo, vencimiento del plazo, conclusión de la obra o faena, caso fortuito o fuerza mayor, ni en despido disciplinario justificado (Arts. 159 y 160 CT). Además, existe la indemnización sustitutiva de aviso previo (equivalente a 1 mes de remuneración) cuando el empleador no da aviso con 30 días de anticipación.",
        "La base de cálculo es la última remuneración mensual devengada, que incluye todos los estipendios fijos y variables que tengan el carácter de remuneración, excluyendo las horas extra esporádicas, las asignaciones no remuneracionales y los beneficios no remuneracionales. El importe de la indemnización está exento de impuesto de Segunda Categoría hasta el equivalente a 90 UF por año de servicio.",
      ],
      faqs: [
        {
          question: "¿Cuándo corresponde indemnización por años de servicio en Chile?",
          answer:
            "Solo corresponde cuando el empleador termina el contrato por 'necesidades de la empresa' (Art. 161 CT) o por desahucio (empleados de casa particular y trabajadores con más de 2 años en cargo de exclusiva confianza). No corresponde si renuncias, si termina un contrato a plazo o si te despiden por conducta grave (Art. 160).",
        },
        {
          question: "¿Cómo se calcula la indemnización en Chile?",
          answer:
            "Se multiplica la última remuneración mensual bruta por los años de servicio (contando fracciones superiores a 6 meses como año completo), con un tope de 11 años. Por ejemplo, si tu sueldo es $1.000.000 y llevas 7 años y 4 meses, la indemnización sería $1.000.000 × 7 = $7.000.000 (los 4 meses no superan los 6 meses para contar como año adicional).",
        },
        {
          question: "¿Existe un tope máximo de indemnización?",
          answer:
            "Sí. El tope legal es de 11 años de indemnización, equivalente a 11 meses de remuneración. Sin embargo, por mutuo acuerdo entre empleador y trabajador se puede pactar una indemnización mayor. El tope de años fue fijado en la reforma laboral de 1990 y no ha sido modificado.",
        },
        {
          question: "¿La renuncia tiene indemnización en Chile?",
          answer:
            "No. La renuncia voluntaria no da derecho a indemnización por años de servicio. Sin embargo, sí tienes derecho al feriado proporcional, remuneraciones pendientes y gratificación proporcional en el finiquito. Algunos convenios colectivos o contratos individuales pueden contemplar una indemnización voluntaria por renuncia.",
        },
      ],
    },
    "calculadora-gratificacion": {
      howItWorks: [
        "La gratificación en Chile está regulada por los Artículos 47 al 49 del Código del Trabajo. Es obligatoria para las empresas que hayan obtenido utilidades o excedentes líquidos en su giro. Existen dos modalidades: la gratificación legal (el empleador reparte el 30% de sus utilidades líquidas entre todos sus trabajadores en proporción a los sueldos) y la gratificación garantizada (el empleador paga el 25% de la remuneración mensual de cada trabajador, con un tope de 4,75 Ingresos Mínimos Mensuales al año).",
        "La modalidad más común en la práctica es la gratificación garantizada mensualizada, en la que el empleador paga mensualmente el 25% del sueldo imponible del trabajador hasta un tope de 4,75 IMM anuales. Esto facilita la planificación del empleador y la liquidez del trabajador. Si el trabajador no trabaja el año completo, tiene derecho a la gratificación proporcional a los meses completos trabajados.",
        "Al término de la relación laboral, si el trabajador no recibió la gratificación del año en curso (porque la empresa la paga anualmente), tiene derecho a la gratificación proporcional correspondiente a los meses completos trabajados en el año. Esta gratificación proporcional forma parte del finiquito y debe calcularse sobre la base del 25% del sueldo mensual imponible por mes trabajado.",
      ],
      faqs: [
        {
          question: "¿Qué es la gratificación en Chile?",
          answer:
            "La gratificación es un beneficio legal obligatorio que deben pagar las empresas que obtienen utilidades. Puede pagarse como gratificación legal (30% de las utilidades repartidas proporcionalmente) o como gratificación garantizada (25% del sueldo mensual imponible, con tope de 4,75 IMM anuales). La mayoría de las empresas usa la garantizada mensualizada.",
        },
        {
          question: "¿Cómo se calcula la gratificación legal en Chile?",
          answer:
            "En la modalidad legal: el empleador toma el 30% de sus utilidades líquidas anuales y lo divide entre la suma de todos los salarios anuales de sus trabajadores para obtener un factor; cada trabajador recibe ese factor multiplicado por su sueldo anual, con tope de 4,75 IMM. En la modalidad garantizada mensual: 25% del sueldo imponible mensual del trabajador, con tope de (4,75 IMM / 12) al mes.",
        },
        {
          question: "¿Todas las empresas pagan gratificación en Chile?",
          answer:
            "No. Solo están obligadas las empresas, establecimientos o negocios con fines de lucro que hayan obtenido utilidades o excedentes líquidos en el ejercicio. Las empresas sin fines de lucro, fundaciones y corporaciones no tienen esta obligación. Tampoco las empresas que no obtuvieron utilidades ese año.",
        },
        {
          question: "¿Cuándo se paga la gratificación proporcional?",
          answer:
            "Si el contrato termina antes del cierre del año comercial y la empresa paga la gratificación anualmente, tienes derecho a la proporción correspondiente a los meses completos trabajados en el año. Se incluye en el finiquito. Si la empresa la paga mensualmente (modalidad garantizada mensualizada), ya la recibiste incluida en las remuneraciones mensuales.",
        },
      ],
    },
    "calculadora-afp": {
      howItWorks: [
        "El sistema de pensiones de AFP (Administradoras de Fondos de Pensiones) en Chile fue creado por el Decreto Ley 3.500 de 1980. Es un sistema de capitalización individual obligatorio para los trabajadores dependientes. La cotización obligatoria equivale aproximadamente al 10% del salario imponible mensual (varía ligeramente según la AFP), destinada a la cuenta de capitalización individual del trabajador.",
        "Además de la cotización del 10%, los trabajadores deben pagar el Seguro de Invalidez y Sobrevivencia (SIS), cuyo costo es de cargo del empleador desde 2008 (aproximadamente el 1,44% del salario imponible). Cada AFP cobra también una comisión que se descuenta del salario del trabajador; estas comisiones varían entre el 0,58% y el 1,45% dependiendo de la AFP. El tope imponible para las cotizaciones previsionales en 2026 es de aproximadamente 89,1 UF mensuales.",
        "Los fondos de pensiones se invierten en diferentes tipos de activos según el 'fondo' elegido por el trabajador. Existen 5 fondos: A (más riesgoso, mayor rentabilidad esperada), B, C (balanceado), D y E (más conservador, menor riesgo). Los trabajadores pueden cambiar de fondo y de AFP con ciertas restricciones. Al momento de la jubilación (65 años hombres, 60 mujeres), el trabajador puede optar por renta vitalicia, retiro programado o modalidades mixtas.",
      ],
      faqs: [
        {
          question: "¿Cuánto descuenta la AFP de mi sueldo en Chile?",
          answer:
            "La AFP descuenta aproximadamente el 10% del salario imponible para la cuenta de capitalización individual más la comisión de la AFP (entre 0,58% y 1,45% según la AFP). En total, entre el 10,58% y el 11,45% aproximadamente. El SIS (Seguro de Invalidez y Sobrevivencia) es de cargo del empleador y no se descuenta de tu sueldo.",
        },
        {
          question: "¿Puedo elegir mi AFP en Chile?",
          answer:
            "Sí. Tienes derecho a afiliarte a la AFP de tu preferencia y a cambiarte de AFP hasta dos veces por año. Los trabajadores nuevos que no eligen AFP son asignados automáticamente por licitación a la AFP con menor comisión vigente. Se recomienda comparar comisiones y rentabilidad histórica en el sitio de la Superintendencia de Pensiones.",
        },
        {
          question: "¿Qué diferencia hay entre las AFP y el sistema de pensiones antiguo?",
          answer:
            "El sistema antiguo (INP/IPS) era de reparto: los trabajadores activos financiaban las pensiones de los jubilados. El sistema AFP es de capitalización individual: cada trabajador ahorra para su propia pensión. Quienes cotizaban en el sistema antiguo antes de 1982 recibieron un 'bono de reconocimiento' al cambiarse al sistema AFP.",
        },
        {
          question: "¿Puedo retirar mis ahorros de la AFP?",
          answer:
            "En condiciones normales, los ahorros de AFP solo pueden retirarse al jubilarse (65 años hombres, 60 mujeres) o en situaciones de invalidez. Los retiros extraordinarios de 10% aprobados en 2020 y 2021 fueron medidas excepcionales de pandemia y no son parte de la normativa habitual. Actualmente no está permitido el retiro anticipado salvo causales específicas.",
        },
      ],
    },
    "calculadora-feriado": {
      howItWorks: [
        "El feriado anual (vacaciones) en Chile está regulado por los Artículos 67 al 70 del Código del Trabajo. Todo trabajador con más de un año de servicio tiene derecho a un feriado anual de 15 días hábiles con goce de remuneración íntegra. Los sábados no se consideran días hábiles para efectos del feriado. Este derecho es irrenunciable y no puede compensarse en dinero mientras subsista la relación laboral, salvo el feriado proporcional al término.",
        "Los trabajadores con más de 10 años de trabajo (para uno o más empleadores) tienen derecho al feriado progresivo: un día adicional de feriado por cada 3 nuevos años trabajados sobre los 10 años base, para el empleador actual. Así, con 13 años de servicio se tienen 16 días de feriado, con 16 años se tienen 17 días, etc. Para acreditar los años trabajados en empleadores anteriores se necesita certificado del empleador o comprobante de cotizaciones.",
        "El feriado proporcional corresponde al trabajador que termina su relación laboral sin haber completado el año que le daría derecho al feriado. Se calcula a razón de 1,25 días hábiles por mes completo trabajado. Al término del contrato, el empleador debe pagar este feriado proporcional independientemente de la causal de término. El período de feriado anual puede acumularse hasta por dos años de común acuerdo entre empleador y trabajador.",
      ],
      faqs: [
        {
          question: "¿Cuántos días de vacaciones tengo en Chile?",
          answer:
            "El mínimo legal son 15 días hábiles por año trabajado (los sábados no cuentan como hábiles). Con más de 10 años de trabajo acumulados (con cualquier empleador), tienes derecho al feriado progresivo: 1 día adicional por cada 3 años sobre los 10 años base. Por ejemplo, con 13 años totales y 4 en la empresa actual: 15 + 1 = 16 días.",
        },
        {
          question: "¿Cómo se calcula el feriado progresivo en Chile?",
          answer:
            "El feriado progresivo suma 1 día hábil adicional por cada 3 años de trabajo que el trabajador acredite haber prestado a su empleador actual, una vez superados los 10 años totales de trabajo. Los años en empleadores anteriores se acreditan con certificados o liquidaciones. Si tienes 16 años totales de trabajo y 7 con tu empleador actual, el feriado progresivo te da (7/3 = 2 días adicionales) = 17 días de feriado.",
        },
        {
          question: "¿Puedo pedir que me paguen las vacaciones en dinero?",
          answer:
            "No, durante la vigencia del contrato el feriado no puede compensarse en dinero. La única excepción es el feriado proporcional al término del contrato, y también el feriado acumulado: si acumulaste más de 2 períodos con acuerdo del empleador, el exceso sobre 2 períodos puede compensarse en dinero.",
        },
        {
          question: "¿Qué es el feriado proporcional en Chile?",
          answer:
            "Es el feriado que corresponde al trabajador que no ha completado el año de servicio para tener derecho al feriado anual completo. Se calcula a razón de 1,25 días hábiles por cada mes completo trabajado. Por ejemplo, si llevas 7 meses completos: 7 × 1,25 = 8,75 días, que se aproxima al entero superior = 9 días. Se paga siempre en el finiquito.",
        },
      ],
    },
  },
  peru: {
    "calculadora-cts": {
      howItWorks: [
        "La Compensación por Tiempo de Servicios (CTS) en Perú está regulada por el Decreto Legislativo 650 y sus modificatorias. Es un beneficio social que funciona como seguro de desempleo, depositado en una cuenta bancaria elegida por el trabajador. Los depósitos se realizan semestralmente: en mayo (por el período noviembre–abril) y en noviembre (por el período mayo–octubre), dentro de la primera quincena de cada mes.",
        "La remuneración computable para la CTS incluye la remuneración básica más todas las remuneraciones regulares (cualquier concepto que el trabajador reciba con regularidad mensual), más un sexto de la gratificación de julio o diciembre (la que corresponda al semestre). La fórmula de cálculo es: (remuneración computable / 12) × meses trabajados en el semestre, más (remuneración computable / 30) × días adicionales trabajados.",
        "Tienen derecho a la CTS los trabajadores del régimen laboral privado con contrato a tiempo indeterminado o a plazo fijo, siempre que trabajen al menos 4 horas diarias. Los trabajadores a tiempo parcial (menos de 4 horas diarias) no tienen derecho a CTS. Los fondos de CTS depositados pertenecen al trabajador y pueden ser retirados al cesar la relación laboral; durante la vigencia del contrato solo pueden retirarse bajo ciertas condiciones autorizadas por ley.",
      ],
      faqs: [
        {
          question: "¿Qué es la CTS en Perú?",
          answer:
            "La CTS (Compensación por Tiempo de Servicios) es un beneficio social que funciona como fondo de previsión ante el desempleo. El empleador deposita semestralmente en una cuenta bancaria del trabajador un monto equivalente a aproximadamente 1/12 de la remuneración computable por mes trabajado. No es un adelanto de sueldo sino un derecho social acumulado.",
        },
        {
          question: "¿Cuándo se deposita la CTS en Perú?",
          answer:
            "Los depósitos de CTS se hacen dos veces al año: en la primera quincena de mayo (correspondiente al semestre noviembre–abril) y en la primera quincena de noviembre (correspondiente al semestre mayo–octubre). Si el empleador no deposita en esas fechas, debe abonar intereses y puede ser multado por la SUNAFIL.",
        },
        {
          question: "¿Puedo usar mi CTS mientras trabajo?",
          answer:
            "La disponibilidad de la CTS ha variado por normas temporales. En condiciones normales, la CTS es intangible mientras la relación laboral esté vigente (solo puede retirarse al cese). Sin embargo, en determinados períodos el gobierno ha autorizado retiros parciales. Al momento de cesarte, puedes retirar el 100% de tu CTS acumulada.",
        },
        {
          question: "¿Cómo se calcula la CTS en Perú?",
          answer:
            "La remuneración computable = remuneración básica + asignación familiar (si aplica) + promedio de comisiones y otras remuneraciones variables de los últimos 6 meses + 1/6 de la gratificación del semestre. Luego: CTS del semestre = (remuneración computable / 6) × meses trabajados en el semestre. Por ejemplo, con S/ 1.200 de rem. computable y 6 meses: S/ 1.200 / 6 × 6 = S/ 1.200.",
        },
      ],
    },
    "calculadora-gratificaciones": {
      howItWorks: [
        "Las gratificaciones de Fiestas Patrias y Navidad en Perú están reguladas por la Ley 27735 y su Reglamento (DS 005-2002-TR). Todo trabajador del régimen laboral privado que haya laborado al menos 1 mes completo en el semestre tiene derecho a recibir gratificación. Se paga dos veces al año: en julio (por el período enero–junio) y en diciembre (por el período julio–diciembre), durante la primera quincena de cada mes.",
        "La gratificación equivale a una remuneración mensual íntegra si el trabajador laboró todo el semestre (6 meses completos). Si no completó los 6 meses, la gratificación es proporcional: se calcula dividiendo la remuneración mensual entre 6 y multiplicando por los meses completos trabajados en el semestre. La remuneración computable para la gratificación es la remuneración básica más la asignación familiar más los conceptos de naturaleza remunerativa que se perciben regularmente.",
        "A diferencia de la CTS, las gratificaciones están inafectas a descuentos de AFP u ONP (no se les descuenta aportaciones previsionales), aunque sí están afectas al Impuesto a la Renta de quinta categoría si la remuneración del trabajador supera el mínimo exento. El empleador también debe depositar un 9% del monto de la gratificación como 'bonificación extraordinaria' directamente al trabajador (en sustitución del aporte a EsSalud que se dejó de pagar sobre ese monto).",
      ],
      faqs: [
        {
          question: "¿Cuándo se paga la gratificación en Perú?",
          answer:
            "La gratificación de Fiestas Patrias se paga en la primera quincena de julio y la de Navidad en la primera quincena de diciembre. Si el empleador no paga en esa fecha, incurre en mora y debe abonar intereses. La SUNAFIL puede multarlo si no cumple. Los trabajadores contratados a plazo fijo también tienen derecho a gratificación proporcional.",
        },
        {
          question: "¿Cuánto es la gratificación en Perú?",
          answer:
            "Si trabajaste los 6 meses completos del semestre, recibes una remuneración mensual íntegra. Más un 9% adicional de bonificación extraordinaria (que el empleador paga en lugar del aporte a EsSalud sobre ese monto). En total, efectivamente recibes el 109% de tu sueldo mensual como gratificación completa.",
        },
        {
          question: "¿La gratificación tiene descuentos de AFP u ONP?",
          answer:
            "No. Las gratificaciones están inafectas a los descuentos de AFP y ONP (aportaciones al sistema de pensiones). Sí puede aplicarse retención de Impuesto a la Renta de quinta categoría si tus ingresos anuales superan las 7 UIT. La bonificación extraordinaria del 9% tampoco tiene descuentos previsionales.",
        },
        {
          question: "¿Cómo se calcula la gratificación proporcional en Perú?",
          answer:
            "Si no completaste el semestre completo, la gratificación proporcional es: (remuneración mensual / 6) × número de meses completos trabajados. Por ejemplo, si tu sueldo es S/ 2.000 y trabajaste 4 meses del semestre: (S/ 2.000 / 6) × 4 = S/ 1.333,33 de gratificación proporcional, más el 9% de bonificación: S/ 120, total S/ 1.453,33.",
        },
      ],
    },
    "calculadora-vacaciones": {
      howItWorks: [
        "Las vacaciones anuales remuneradas en Perú están reguladas por el Decreto Legislativo 713. Todo trabajador del régimen laboral privado que cumpla un año completo de servicios y haya cumplido con el récord vacacional (días mínimos trabajados según la jornada) tiene derecho a 30 días calendario de vacaciones remuneradas. A diferencia de otros países, las vacaciones en Perú son días calendario, no laborables ni hábiles.",
        "El monto del pago vacacional equivale a la remuneración ordinaria mensual que percibe el trabajador al momento del inicio del descanso vacacional. Las vacaciones se gozan dentro del año siguiente al año en que se generaron, pero pueden acumularse hasta por dos años con acuerdo entre las partes. Si el trabajador acumula más de dos períodos sin justificación del empleador, tiene derecho a una indemnización vacacional adicional por cada período no gozado.",
        "Al momento del cese, si el trabajador tiene vacaciones no gozadas (período ya generado pero no disfrutado), el empleador debe pagarlas íntegramente. Además, si hay días proporcionales del período en curso (vacaciones truncas), se pagan a razón de 1/12 de la remuneración mensual por mes completo trabajado desde el inicio del período vacacional no completado. El pago vacacional no está afecto a descuentos de AFP u ONP.",
      ],
      faqs: [
        {
          question: "¿Cuántos días de vacaciones hay en Perú?",
          answer:
            "30 días calendario por año completo de servicios. Son días calendario, no hábiles, por lo que incluyen sábados, domingos y feriados. Para tener derecho al período completo, el trabajador debe cumplir el récord vacacional (trabajar al menos 260 días en una jornada de 6 días o 210 días en jornada de 5 días en el año de labores).",
        },
        {
          question: "¿Cuándo se toman las vacaciones en Perú?",
          answer:
            "Las vacaciones deben gozarse dentro del año siguiente al año en que se generaron. La oportunidad del descanso vacacional se fija de común acuerdo entre empleador y trabajador; si no hay acuerdo, decide el empleador. Si el empleador no otorga las vacaciones en el plazo, el trabajador puede exigirlas y además tiene derecho a una triple remuneración vacacional (pago triple).",
        },
        {
          question: "¿Qué son las vacaciones truncas en Perú?",
          answer:
            "Son los días proporcionales de vacaciones generados en el período en curso (el año que aún no se ha completado) al momento del cese. Se calculan a razón de 1/12 de la remuneración mensual por cada mes completo trabajado del período en curso. Por ejemplo, si llevas 8 meses del nuevo período: (remuneración / 12) × 8 = pago por vacaciones truncas.",
        },
        {
          question: "¿Puedo acumular vacaciones en Perú?",
          answer:
            "Sí, puedes acumular hasta 2 períodos de vacaciones con acuerdo escrito entre trabajador y empleador. Si acumulas más de 2 períodos sin justificación del empleador, tienes derecho a cobrar una indemnización equivalente a una remuneración mensual adicional por cada período no otorgado oportuna e injustificadamente (conocida como 'triple vacacional').",
        },
      ],
    },
    "calculadora-liquidacion": {
      howItWorks: [
        "La liquidación final en Perú comprende el pago de todos los beneficios sociales y remuneraciones pendientes al momento del cese del trabajador, independientemente de si fue un despido, renuncia o término de contrato a plazo fijo. El empleador está obligado a efectuar el pago dentro de las 48 horas siguientes al cese. La SUNAFIL (Superintendencia Nacional de Fiscalización Laboral) supervisa el cumplimiento de estas obligaciones.",
        "Los conceptos que integran la liquidación final son: remuneraciones pendientes de pago (días trabajados del último mes no pagados), vacaciones truncas (1/12 de la remuneración por mes completo del período no completado), gratificación trunca (1/6 de la remuneración por mes completo del semestre no completado), y las aportaciones al sistema de pensiones (AFP u ONP) sobre esos montos. La CTS acumulada permanece en la cuenta bancaria del trabajador y puede ser retirada directamente por él.",
        "En caso de despido arbitrario (sin causa justificada), el trabajador tiene derecho adicionalmente a la indemnización por despido equivalente a 1,5 remuneraciones mensuales por año de servicios, con un máximo de 12 remuneraciones (para trabajadores en jornada ordinaria a tiempo completo con contrato indeterminado). Esta indemnización reemplaza la reposición al puesto de trabajo, aunque el trabajador puede optar por la reposición en lugar de la indemnización.",
      ],
      faqs: [
        {
          question: "¿Qué incluye la liquidación final en Perú?",
          answer:
            "Incluye: remuneraciones pendientes de los días trabajados no cobrados, vacaciones truncas (días proporcionales del período en curso), gratificación trunca (meses proporcionales del semestre en curso), y si hubo despido arbitrario, la indemnización por despido (1,5 sueldos por año, máximo 12 sueldos). La CTS no se incluye en la liquidación porque está depositada en el banco y el trabajador la retira directamente.",
        },
        {
          question: "¿Cuándo deben pagarme la liquidación en Perú?",
          answer:
            "El empleador tiene 48 horas desde el cese para entregar la liquidación de beneficios sociales y efectuar el pago. Si no lo hace en ese plazo, incurre en mora y deberá pagar intereses legales. El trabajador puede denunciar el incumplimiento ante la SUNAFIL para iniciar una fiscalización laboral, que es gratuita.",
        },
        {
          question: "¿Qué pasa con la CTS al renunciar en Perú?",
          answer:
            "Al renunciar o cesar por cualquier causa, el trabajador puede retirar el 100% de su CTS directamente de la cuenta bancaria donde está depositada, sin necesidad de esperar autorización del empleador. Solo debe presentar la carta de cese en la entidad financiera. Los fondos son suyos y están a su nombre.",
        },
        {
          question: "¿Cómo se calculan los días truncos en Perú?",
          answer:
            "Para vacaciones truncas: (remuneración mensual / 12) × meses completos del período vacacional en curso al momento del cese. Para gratificación trunca: (remuneración mensual / 6) × meses completos del semestre en curso al momento del cese. Por ejemplo, cesando en agosto (3 meses del semestre julio–diciembre): gratificación trunca = (sueldo / 6) × 3.",
        },
      ],
    },
    "calculadora-afp-onp": {
      howItWorks: [
        "La ONP (Oficina de Normalización Previsional) administra el Sistema Nacional de Pensiones (SNP) creado por la Ley 19990. Es el sistema público de pensiones basado en el principio de reparto: los trabajadores activos financian las pensiones de los jubilados actuales. La cotización obligatoria es del 13% del sueldo bruto del trabajador, que es descontada directamente de la planilla por el empleador y transferida a la ONP.",
        "Para obtener una pensión de jubilación en la ONP, el trabajador debe cumplir dos requisitos: tener 65 años de edad y acreditar un mínimo de 20 años de aportaciones efectivas (240 meses). La pensión mínima es de S/ 500 mensuales para quienes cumplan los requisitos. La pensión máxima está fijada en S/ 893 mensuales (tope legal). Existe también la pensión reducida para quienes tienen entre 15 y 19 años de aportes, aunque con montos menores.",
        "Si el trabajador no alcanza los 20 años de aportes requeridos para la jubilación, puede recuperar sus aportes en forma de 'devolución de aportes' bajo ciertas condiciones (aportes realizados a partir de agosto de 1995). Una alternativa es la pensión del régimen del DL 20530 ('cédula viva'), que aplica solo a trabajadores del Estado que ingresaron antes del 28 de julio de 1995.",
      ],
      faqs: [
        {
          question: "¿Qué es la ONP en Perú?",
          answer:
            "La ONP (Oficina de Normalización Previsional) administra el Sistema Nacional de Pensiones (SNP), el sistema público de jubilación en Perú. Los trabajadores aportan el 13% de su sueldo y al jubilarse (65 años con mínimo 20 años de aportes) reciben una pensión mensual. A diferencia de la AFP, no tienen cuenta individual: los aportes van a un fondo común.",
        },
        {
          question: "¿Cuánto descuenta la ONP de mi sueldo?",
          answer:
            "La ONP descuenta el 13% del sueldo bruto mensual. Este descuento lo hace automáticamente el empleador en cada planilla. Por ejemplo, con un sueldo de S/ 2.000 brutos, la ONP descuenta S/ 260 al mes. A diferencia de la AFP, este monto no va a una cuenta individual sino al fondo general del sistema.",
        },
        {
          question: "¿ONP o AFP, cuál conviene más?",
          answer:
            "Depende de múltiples factores: años de trabajo esperados, nivel salarial y rentabilidad futura. La ONP ofrece pensión mínima garantizada de S/ 500 y pensión máxima de S/ 893, pero requiere 20 años mínimos de aportes. La AFP ofrece pensión basada en lo acumulado (puede ser mayor o menor que la ONP) y no tiene requisito de años mínimos para acceder al fondo acumulado. Se recomienda consultar con un asesor previsional.",
        },
        {
          question: "¿Puedo cambiarme de ONP a AFP en Perú?",
          answer:
            "Sí, los trabajadores afiliados a la ONP pueden trasladarse al sistema privado de AFP. El trámite se realiza directamente con la AFP elegida. Al cambiar, tus aportes a la ONP se reconocen mediante un 'bono de reconocimiento' que se acredita en tu cuenta AFP. Sin embargo, el traslado es prácticamente irreversible, por lo que se aconseja analizarlo con cuidado.",
        },
      ],
    },
    "calculadora-afp": {
      howItWorks: [
        "El Sistema Privado de Pensiones (SPP) en Perú fue creado en 1992 y está regulado por el Decreto Ley 25897. Existen actualmente 4 AFPs operando en Perú: AFP Integra, Prima AFP, Profuturo AFP y AFP Habitat. Los trabajadores aportan obligatoriamente aproximadamente el 10% de su remuneración asegurable (remuneración bruta) a su cuenta individual de capitalización (CIC), más una comisión a la AFP (alrededor del 1,5% dependiendo de la AFP y el tipo de comisión).",
        "El trabajador puede elegir entre 4 tipos de fondos según su perfil de riesgo: Fondo Tipo 0 (Protección de Capital, para mayores de 60 años, muy conservador), Fondo Tipo 1 (Preservación de Capital, conservador con algo de renta variable), Fondo Tipo 2 (Mixto o Balanceado, es el fondo por defecto para la mayoría), y Fondo Tipo 3 (Crecimiento, mayor exposición a renta variable, mayor riesgo y potencial rentabilidad a largo plazo). El cambio de fondo es gratuito y puede hacerse hasta 2 veces por año.",
        "Al jubilarse (a partir de los 65 años, aunque existe jubilación anticipada si el fondo acumulado es suficiente para financiar una pensión mayor al 50% de las últimas remuneraciones), el afiliado puede optar por: renta vitalicia (la AFP o una aseguradora le paga una pensión mensual de por vida), retiro programado (retiros periódicos del fondo), o modalidades mixtas. También existe el Régimen Especial de Jubilación Anticipada (REJA) para desempleados.",
      ],
      faqs: [
        {
          question: "¿Cuánto descuenta la AFP de mi sueldo en Perú?",
          answer:
            "La AFP descuenta aproximadamente el 10% del sueldo bruto para tu cuenta de capitalización individual, más la comisión de la AFP (varía entre ~1,47% en comisión por flujo o una comisión mixta según la AFP). En total, el descuento ronda el 11,5% del sueldo bruto. A diferencia de la ONP, este dinero va a tu cuenta personal y puede heredarse.",
        },
        {
          question: "¿Cómo elijo el tipo de fondo AFP en Perú?",
          answer:
            "Si eres joven (menos de 45 años) y tolerante al riesgo, el Fondo Tipo 3 tiene mayor potencial de crecimiento a largo plazo. Para perfiles moderados o edad intermedia, el Fondo Tipo 2 (fondo por defecto) es el más común. Para personas mayores de 55–60 años que quieren proteger lo acumulado, el Fondo Tipo 1 o 0 es más adecuado. Puedes cambiarte de fondo gratuitamente hasta 2 veces al año.",
        },
        {
          question: "¿Puedo retirar mis fondos de la AFP en Perú?",
          answer:
            "En condiciones normales, los fondos solo se retiran al jubilarse. Existen excepciones: al cumplir 65 años puedes retirar hasta el 95,5% del fondo de una sola vez (opción introducida en 2016). También hay retiros por desempleo (REJA), enfermedad terminal o invalidez. Los retiros masivos extraordinarios del COVID (2020–2021) fueron medidas excepcionales ya no vigentes.",
        },
        {
          question: "¿Qué diferencia hay entre AFP y ONP en Perú?",
          answer:
            "AFP (sistema privado): cuenta individual, aportas el ~10% + comisión, el fondo es tuyo y puede heredarse, la pensión depende de lo acumulado. ONP (sistema público): aportas el 13%, no tienes cuenta individual, pensión fija entre S/ 500 y S/ 893 si cumples 20 años de aportes y 65 años. La AFP es generalmente más conveniente para carreras laborales largas y salarios altos; la ONP puede ser mejor para trabajadores con pocas perspectivas de acumular fondos suficientes.",
        },
      ],
    },
  },
  ecuador: {
    "calculadora-decimo-tercero": {
      howItWorks: [
        "El Décimo Tercer Sueldo (o bono navideño) es un beneficio obligatorio en Ecuador establecido en el Código del Trabajo. Equivale a la doceava parte de las remuneraciones percibidas en el período comprendido entre el 1 de diciembre del año anterior y el 30 de noviembre del año en curso. Todos los trabajadores en relación de dependencia tienen derecho a este pago.",
        "La fórmula de cálculo es sencilla: suma todos los ingresos percibidos en el período de cálculo (incluye sueldo básico, horas extra, comisiones y otros rubros remunerativos) y divídelos entre 12. Si no trabajaste el período completo, recibes la parte proporcional a los meses trabajados.",
        "El pago debe realizarse hasta el 24 de diciembre de cada año. Si el empleador no cumple este plazo, incurre en mora y debe pagar intereses. El décimo tercer sueldo está exento de aportes al IESS y no es parte de la base de cálculo de las utilidades.",
      ],
      faqs: [
        {
          question: "¿Cuándo se paga el décimo tercer sueldo en Ecuador?",
          answer: "El décimo tercer sueldo debe pagarse hasta el 24 de diciembre de cada año. Aplica al período del 1 de diciembre del año anterior al 30 de noviembre del año en curso. El empleador puede pagarlo de forma mensualizada (dividiéndolo entre 12 y pagando una doceava parte cada mes) si así lo acuerda con el trabajador.",
        },
        {
          question: "¿Cómo se calcula el décimo tercer sueldo?",
          answer: "Se suman todos los ingresos del período (1 dic año anterior – 30 nov año actual) y se divide entre 12. Por ejemplo: si ganaste $600/mes durante 12 meses → $600 × 12 / 12 = $600. Si trabajaste solo 6 meses → $600 × 6 / 12 = $300.",
        },
        {
          question: "¿El décimo tercer sueldo se descuenta del IESS?",
          answer: "No. El décimo tercer sueldo no forma parte de la materia gravada para el IESS. No se le aplica el descuento del 9.45% de aportación personal al seguro social.",
        },
        {
          question: "¿Qué diferencia hay entre el décimo tercero y el décimo cuarto?",
          answer: "El décimo tercer sueldo (bono navideño) es proporcional a tu sueldo anual y varía según lo que ganes. El décimo cuarto sueldo (bono escolar) es un monto fijo igual al Salario Básico Unificado vigente ($460 en 2026), igual para todos los trabajadores sin importar su remuneración.",
        },
      ],
    },
    "calculadora-decimo-cuarto": {
      howItWorks: [
        "El Décimo Cuarto Sueldo, también llamado bono escolar, es un beneficio obligatorio en Ecuador equivalente a un Salario Básico Unificado (SBU) por año. Para 2026, el SBU es de $460. A diferencia del décimo tercer sueldo, el décimo cuarto es un monto fijo igual para todos los trabajadores, independientemente de su remuneración.",
        "El período de cálculo y la fecha de pago varían según la región: en la Costa e Insular, el período es del 1 de marzo al 28 de febrero y se paga hasta el 15 de marzo. En la Sierra y Amazonia, el período es del 1 de agosto al 31 de julio y se paga hasta el 15 de agosto. Si el trabajador no completó el período, recibe el proporcional.",
        "El décimo cuarto sueldo está exento de aportes al IESS y no se incluye en el cálculo de utilidades ni de otros beneficios. Puede pagarse de forma acumulada en las fechas indicadas o en forma mensualizada si el trabajador así lo solicita.",
      ],
      faqs: [
        {
          question: "¿Cuánto es el décimo cuarto sueldo en Ecuador 2026?",
          answer: "El décimo cuarto sueldo en 2026 equivale a un Salario Básico Unificado (SBU): $460 por año completo trabajado. Si no trabajaste el año completo, recibes el proporcional: ($460 × meses trabajados) / 12.",
        },
        {
          question: "¿Cuándo se paga el décimo cuarto sueldo?",
          answer: "Depende de la región: en la Costa e Insular se paga hasta el 15 de marzo (período ago anterior – feb actual). En la Sierra y Amazonia se paga hasta el 15 de agosto (período ago anterior – jul actual). Si el trabajador optó por pago mensualizado, recibe $460/12 ≈ $38,33 mensualmente.",
        },
        {
          question: "¿El décimo cuarto tiene descuento del IESS?",
          answer: "No. El décimo cuarto sueldo no está sujeto a aportes al IESS ni a retención de impuesto a la renta. Se paga íntegro al trabajador.",
        },
        {
          question: "¿Si renuncio pierdo el décimo cuarto?",
          answer: "No. Si tu contrato termina antes de la fecha de pago, tienes derecho al décimo cuarto proporcional a los meses trabajados en el período. Este valor se incluye en tu liquidación laboral.",
        },
      ],
    },
    "calculadora-liquidacion": {
      howItWorks: [
        "La liquidación laboral en Ecuador comprende el conjunto de rubros económicos que el empleador debe pagar al trabajador al terminar la relación laboral. Los conceptos principales son: desahucio (si aplica), vacaciones no gozadas, décimos proporcionales (tercero y cuarto), y fondos de reserva acumulados.",
        "El desahucio equivale al 25% de la última remuneración mensual por cada año de servicio, con un máximo de 25 años (6.25 remuneraciones máximo). El desahucio aplica tanto cuando el empleador da por terminado el contrato sin causa, como cuando el trabajador lo termina por su propia voluntad. Si el empleador despide intempestivamente sin seguir el proceso legal, debe pagar adicionalmente una indemnización.",
        "Las vacaciones no gozadas se pagan a razón de una remuneración completa por cada 11 meses de trabajo, proporcional a los días no disfrutados. Los fondos de reserva acumulados deben pagarse al final de la relación laboral si el trabajador optó por que el empleador los guarde en lugar de recibirlos mensualmente.",
      ],
      faqs: [
        {
          question: "¿Qué incluye la liquidación laboral en Ecuador?",
          answer: "Incluye: desahucio (25% de la última remuneración × años de servicio, máx. 25 años), vacaciones no gozadas (proporcional), décimo tercer sueldo proporcional, décimo cuarto sueldo proporcional, y fondos de reserva si el empleador los tenía acumulados.",
        },
        {
          question: "¿Cuánto tiempo tiene el empleador para pagar la liquidación?",
          answer: "El empleador debe pagar la liquidación de forma inmediata al momento de la terminación del contrato. La demora en el pago genera el pago de intereses y puede dar lugar a sanciones por parte del Ministerio del Trabajo.",
        },
        {
          question: "¿Qué es el desahucio en Ecuador?",
          answer: "El desahucio es el aviso previo de terminación de contrato. Si no se da el aviso con 15 días de anticipación, se debe pagar una indemnización equivalente a 15 días de remuneración adicionales. El desahucio propiamente dicho es la indemnización del 25% por año de servicio que se paga en toda terminación de contrato.",
        },
        {
          question: "¿Puedo reclamar la liquidación si me despiden sin causa?",
          answer: "Sí. Si el despido es intempestivo (sin causa legal), además del desahucio tienes derecho a una indemnización adicional equivalente a tres meses de remuneración si llevas menos de 3 años, o un mes de remuneración por año de servicio si llevas más de 3 años, según el Código del Trabajo.",
        },
      ],
    },
  },
  venezuela: {
    "calculadora-utilidades": {
      howItWorks: [
        "Las utilidades en Venezuela están reguladas por el Artículo 131 de la Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT). Los empleadores deben distribuir entre sus trabajadores un mínimo del 15% de los beneficios líquidos obtenidos al final del ejercicio anual (mínimo 15 días de salario y máximo 4 meses). El pago debe realizarse dentro de los 2 meses siguientes al cierre del ejercicio fiscal.",
        "El monto de utilidades que recibe cada trabajador se calcula en proporción a los salarios devengados durante el año. Si el trabajador no estuvo todo el año, recibe la parte proporcional a los meses efectivamente trabajados. Los trabajadores que ganen más del equivalente a 3 salarios mínimos pueden tener un tope en el cálculo según convenga la empresa.",
        "Además de las utilidades anuales, los trabajadores tienen derecho a un anticipo del 50% de las utilidades estimadas, que el empleador debe pagar antes del 15 de diciembre de cada año. Este anticipo se descuenta del pago final de utilidades.",
      ],
      faqs: [
        {
          question: "¿Cuándo se pagan las utilidades en Venezuela?",
          answer: "Las utilidades deben pagarse dentro de los 2 meses siguientes al cierre del ejercicio económico. La mayoría de las empresas cierran ejercicio en diciembre, por lo que las utilidades se pagan entre enero y febrero del año siguiente. Adicionalmente, antes del 15 de diciembre debe pagarse un anticipo del 50% de las utilidades estimadas.",
        },
        {
          question: "¿Cuántos días de utilidades me corresponden?",
          answer: "El mínimo legal es 15 días de salario por año. El máximo es 4 meses (120 días). El monto exacto depende de las ganancias de la empresa: si el 15% de los beneficios da menos de 15 días, el empleador igual debe pagar 15 días. Si da más de 4 meses, el tope es 4 meses.",
        },
        {
          question: "¿Cómo se calcula el monto de utilidades?",
          answer: "Se toma el total de utilidades a distribuir (mín. 15 días de salario total de todos los trabajadores), se divide entre la suma de todos los salarios anuales para obtener un factor, y luego se multiplica por el salario anual de cada trabajador. El resultado no puede ser inferior a 15 días ni superior a 4 meses de salario.",
        },
        {
          question: "¿Qué pasa si la empresa no distribuye utilidades?",
          answer: "Si la empresa declara pérdidas o no distribuye utilidades, el trabajador igual tiene derecho a recibir el mínimo legal de 15 días de salario. La LOTTT establece este piso mínimo independientemente del resultado económico de la empresa. Puedes reclamar ante la Inspectoría del Trabajo.",
        },
      ],
    },
    "calculadora-prestaciones-sociales": {
      howItWorks: [
        "Las prestaciones sociales en Venezuela (antes denominadas antigüedad) están reguladas por los Artículos 141 al 148 de la LOTTT. Son una garantía de ahorro obligatorio que el empleador debe depositar a nombre del trabajador. A partir del cuarto mes de servicio, el empleador deposita mensualmente el equivalente a 15 días de salario integral del trabajador en un fondo de prestaciones.",
        "Adicionalmente, por cada año de servicio o fracción superior a 6 meses, el empleador deposita 2 días de salario adicionales por año de antigüedad, acumulativamente. Este beneficio adicional crece con la antigüedad: después del primer año, son 4 días adicionales; después del segundo año, 6 días adicionales, y así sucesivamente.",
        "El salario integral utilizado para el cálculo incluye el salario normal más la alícuota de utilidades (utilidades anuales / 12 meses) y la alícuota del bono vacacional (bono vacacional anual / 12 meses). Al terminar la relación laboral, el trabajador recibe el total acumulado en su cuenta de prestaciones.",
      ],
      faqs: [
        {
          question: "¿Cuánto son las prestaciones sociales en Venezuela?",
          answer: "A partir del cuarto mes se depositan 15 días de salario integral mensualmente. Además, por cada año de servicio se suman días adicionales acumulativos (2 días el primer año, 4 el segundo, etc.). El monto total depende de la antigüedad y el salario integral del trabajador.",
        },
        {
          question: "¿Cuándo puedo retirar mis prestaciones sociales?",
          answer: "Puedes solicitar hasta el 75% de las prestaciones como anticipo para cubrir: vivienda, educación, salud o adquisición de vehículo. El monto total se paga al terminar la relación laboral. Si el empleador no las ha depositado en un fideicomiso o fondo, las debe pagar directamente al finalizar el contrato.",
        },
        {
          question: "¿Qué es el salario integral en Venezuela?",
          answer: "El salario integral es la base de cálculo de las prestaciones. Incluye el salario normal más la alícuota mensual de utilidades (utilidades anuales estimadas / 12) y la alícuota mensual del bono vacacional (bono vacacional / 12). Es mayor que el salario normal, lo que incrementa el monto de las prestaciones.",
        },
        {
          question: "¿Qué pasa si mi empleador no depositó las prestaciones?",
          answer: "Si el empleador no depositó en fideicomiso o fondo de prestaciones, asume el riesgo de garantizar ese monto al trabajador y debe pagar intereses a una tasa no menor a la pasiva promedio del sistema bancario. Puedes reclamar ante la Inspectoría del Trabajo o la vía judicial.",
        },
      ],
    },
  },
  "costa-rica": {
    "calculadora-aguinaldo": {
      howItWorks: [
        "El aguinaldo en Costa Rica es un beneficio laboral obligatorio establecido en el Artículo 228 del Código de Trabajo. Equivale a la doceava parte del total de salarios devengados por el trabajador durante el año, calculado del 1 de diciembre del año anterior al 30 de noviembre del año en curso. Debe pagarse durante la primera quincena de diciembre.",
        "El cálculo considera todos los ingresos salariales del período, incluyendo salario ordinario, horas extra, comisiones y otros beneficios de naturaleza salarial. Se divide el total de ingresos del año entre 12 para obtener el aguinaldo. Si el trabajador no laboró todo el año, recibe la parte proporcional a los meses completos trabajados.",
        "El aguinaldo está exento de cargas sociales (CCSS) y no es parte de la base de cálculo para la liquidación ni el preaviso. Tiene la misma protección que el salario ordinario: no puede ser embargado ni retenido como sanción disciplinaria.",
      ],
      faqs: [
        {
          question: "¿Cuándo se paga el aguinaldo en Costa Rica?",
          answer: "El aguinaldo debe pagarse en la primera quincena de diciembre, es decir, antes del 15 de diciembre. El período de cálculo es del 1 de diciembre del año anterior al 30 de noviembre del año en curso. Si el empleador no lo paga en ese plazo, incurre en mora.",
        },
        {
          question: "¿Cómo se calcula el aguinaldo en Costa Rica?",
          answer: "Se suman todos los salarios devengados entre el 1 de diciembre (año anterior) y el 30 de noviembre (año actual) y se divide entre 12. Ejemplo: si ganaste ₡500.000/mes durante 12 meses → Aguinaldo = (₡500.000 × 12) / 12 = ₡500.000. Con 6 meses trabajados → (₡500.000 × 6) / 12 = ₡250.000.",
        },
        {
          question: "¿El aguinaldo tiene descuentos de la CCSS?",
          answer: "No. El aguinaldo está excluido de las cargas sociales de la Caja Costarricense de Seguro Social (CCSS). Se paga íntegro, sin descuentos de seguridad social. Sin embargo, podría estar sujeto a retención del impuesto sobre la renta si supera los montos exentos.",
        },
        {
          question: "¿Pierdo el aguinaldo si renuncio antes de diciembre?",
          answer: "No. Si el contrato termina antes de la fecha de pago, tienes derecho a la parte proporcional del aguinaldo correspondiente a los meses trabajados en el período. Este monto debe incluirse en el cálculo de la liquidación final.",
        },
      ],
    },
    "calculadora-cesantia": {
      howItWorks: [
        "El auxilio de cesantía en Costa Rica es una indemnización que el empleador debe pagar al trabajador cuando lo despide sin justa causa, o cuando el trabajador se retira por justa causa imputable al empleador. Está regulado por los Artículos 28 y 29 del Código de Trabajo.",
        "El cálculo del auxilio de cesantía utiliza una escala de días según la antigüedad: para los primeros 3 meses hasta 6 meses, 7 días de salario; entre 6 meses y 1 año, 14 días; de 1 a 2 años, 19.5 días; de 2 a 3 años, 20 días; de 3 a 4 años, 20.5 días; de 4 a 5 años, 21 días; de 5 a 6 años, 21.5 días; y de 6 a 7 años en adelante, un máximo de 22 días. Para trabajadores con más de 7 años, se calcula sobre los últimos 8 años de servicio.",
        "El tope legal es de 8 años de cesantía, lo que equivale aproximadamente a 22 días de salario por año para los primeros 8 años. Si el trabajador renuncia voluntariamente sin justa causa, generalmente no tiene derecho al auxilio de cesantía, salvo que tenga un contrato que lo contemple.",
      ],
      faqs: [
        {
          question: "¿Cuándo tengo derecho al auxilio de cesantía en Costa Rica?",
          answer: "Tienes derecho cuando el empleador te despide sin justa causa. También aplica si renuncias por justa causa imputable al empleador (hostigamiento, incumplimiento de contrato, etc.). La renuncia voluntaria sin causa justificada generalmente no da derecho a la cesantía.",
        },
        {
          question: "¿Cuánto es el auxilio de cesantía?",
          answer: "Depende de la antigüedad. Por ejemplo: 6 meses a 1 año = 14 días de salario; 1 a 2 años = 19.5 días; 5 a 6 años = 21.5 días. El tope máximo es de 8 años de antigüedad (aprox. 22 días por cada uno de los últimos 8 años).",
        },
        {
          question: "¿Qué es el Fondo de Capitalización Laboral (FCL)?",
          answer: "El FCL es un fondo al que el empleador aporta el 3% del salario mensual del trabajador desde el inicio del contrato. Al terminar la relación laboral, ese fondo se aplica al pago de la cesantía. Si el fondo acumulado es menor a la cesantía adeudada, el empleador debe pagar la diferencia.",
        },
        {
          question: "¿Cuánto es el preaviso en Costa Rica?",
          answer: "El preaviso (Artículo 28 del Código de Trabajo) depende de la antigüedad: menos de 3 meses = 1 semana; entre 3 meses y 1 año = 2 semanas; más de 1 año = 1 mes. Si el empleador no otorga el preaviso, debe pagar ese período adicional como indemnización.",
        },
      ],
    },
  },
  bolivia: {
    "calculadora-aguinaldo": {
      howItWorks: [
        "El aguinaldo de Navidad en Bolivia es un beneficio laboral obligatorio equivalente a un salario mensual completo, pagado en el mes de diciembre. Está regulado por el Decreto Supremo N° 229 y por la Ley General del Trabajo. Todos los trabajadores en relación de dependencia (sector privado y público) tienen derecho a este beneficio.",
        "El monto del aguinaldo es igual al último salario mensual percibido por el trabajador. Si no se trabajó el año completo, se recibe la parte proporcional a los meses trabajados: (salario mensual × meses trabajados) / 12. El pago debe realizarse antes del 20 de diciembre de cada año.",
        "El aguinaldo de Navidad está sujeto a descuentos previsionales (aporte AFP/CNS) e impuesto sobre utilidades de las empresas, pero no al Impuesto a las Transacciones (IT) ni al RC-IVA en los casos generales. Los trabajadores del sector público reciben el aguinaldo de acuerdo a las normas específicas del servicio civil.",
      ],
      faqs: [
        {
          question: "¿Cuándo se paga el aguinaldo en Bolivia?",
          answer: "El aguinaldo de Navidad debe pagarse antes del 20 de diciembre de cada año. Los empleadores que no cumplan este plazo son pasibles de multas por parte del Ministerio de Trabajo, más el pago de intereses al trabajador.",
        },
        {
          question: "¿Cuánto es el aguinaldo en Bolivia?",
          answer: "Equivale a un salario mensual completo por año trabajado. Si trabajaste menos de 12 meses, recibes la parte proporcional: (tu sueldo × meses trabajados) / 12. Por ejemplo, con Bs. 4.000 de sueldo y 8 meses trabajados: (Bs. 4.000 × 8) / 12 = Bs. 2.667.",
        },
        {
          question: "¿Qué es el segundo aguinaldo en Bolivia?",
          answer: "El segundo aguinaldo ('Esfuerzo por Bolivia') es un beneficio adicional que se paga cuando el crecimiento del PIB del país supera el 4.5%. No es automático cada año: depende de los indicadores económicos. Cuando corresponde, equivale a otro salario mensual adicional y se paga junto al aguinaldo de Navidad.",
        },
        {
          question: "¿Se puede pagar el aguinaldo en cuotas?",
          answer: "No. El aguinaldo debe pagarse de forma íntegra antes del 20 de diciembre. El pago en cuotas no está autorizado legalmente. Si el empleador tiene dificultades financieras, puede solicitar autorización especial al Ministerio de Trabajo, pero no queda eximido de la obligación.",
        },
      ],
    },
    "calculadora-desahucio": {
      howItWorks: [
        "El desahucio por despido intempestivo en Bolivia es la indemnización que debe pagar el empleador cuando pone fin al contrato de trabajo sin justa causa legal. Está regulado por el Artículo 12 de la Ley General del Trabajo y equivale a tres salarios mensuales, independientemente de la antigüedad del trabajador.",
        "Adicionalmente al desahucio de tres salarios, si el trabajador tiene más de 90 días de antigüedad, tiene derecho a recibir la indemnización por tiempo de servicios (un salario por año de servicio, con duodécimos proporcionales si no completó el año). Esta indemnización es distinta al desahucio y se acumula a él.",
        "El proceso de terminación de contrato requiere que el empleador otorgue un preaviso de 90 días o pague la indemnización equivalente si no da ese aviso. Si el despido es por causal justificada según la Ley, el empleador no está obligado a pagar el desahucio, pero siempre debe pagar las partes proporcionales de beneficios (aguinaldo, vacaciones) acumulados.",
      ],
      faqs: [
        {
          question: "¿Cuánto es el desahucio en Bolivia?",
          answer: "El desahucio equivale a 3 salarios mensuales cuando el empleador despide sin causa justificada. Si el trabajador lleva más de 90 días, también tiene derecho a la indemnización por tiempo de servicios (1 salario por año trabajado). Ambos conceptos se suman en la liquidación.",
        },
        {
          question: "¿Qué es la indemnización por tiempo de servicios en Bolivia?",
          answer: "Es un beneficio adicional al desahucio que equivale a un salario mensual por año de servicio (con duodécimos proporcionales). Se calcula sobre el promedio de los últimos 3 meses de remuneración. A diferencia del desahucio, esta indemnización corresponde a todos los trabajadores con más de 90 días, incluso en caso de renuncia justificada.",
        },
        {
          question: "¿El trabajador tiene derecho a desahucio si renuncia?",
          answer: "Si el trabajador renuncia voluntariamente sin causa justificada, no tiene derecho al desahucio de 3 salarios. Sin embargo, sí tiene derecho a la indemnización por tiempo de servicios (1 salario/año) si tiene más de 90 días de servicio, más las partes proporcionales de aguinaldo y vacaciones.",
        },
        {
          question: "¿Cuál es el plazo para pagar la liquidación en Bolivia?",
          answer: "El empleador tiene un plazo de 15 días hábiles para realizar el pago de la liquidación laboral completa. Si no paga en ese plazo, incurre en mora y debe pagar intereses. El trabajador puede presentar una denuncia ante el Ministerio de Trabajo para exigir el pago.",
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

// Featured snippet content for high-traffic calculator pages
const SNIPPETS: Record<string, Record<string, { question: string; answer: string }>> = {
  mexico: {
    "calculadora-finiquito": {
      question: "¿Cuánto es el finiquito en México?",
      answer:
        "Incluye aguinaldo proporcional (mín. 15 días/año), vacaciones no disfrutadas y prima vacacional (25%). Ejemplo: con $15,000/mes y 8 meses trabajados ≈ $4,250. La LFT exige pagarlo en máx. 3-5 días hábiles.",
    },
  },
  colombia: {
    "calculadora-liquidacion": {
      question: "¿Cuánto es la liquidación en Colombia?",
      answer:
        "Incluye cesantías (1 mes/año), intereses (12% anual), prima de servicios y vacaciones proporcionales. Con $2,000,000/mes y 1 año ≈ $3,600,000. El empleador tiene 15 días hábiles para pagar.",
    },
  },
  espana: {
    "calculadora-paro": {
      question: "¿Cuánto paro me corresponde en España?",
      answer:
        "El 70% de tu base reguladora los primeros 180 días, luego el 50%. Con cotización de 24 meses cobras 720 días de paro. Ejemplo: con base de 2,000€/mes → 1,400€/mes los primeros 6 meses.",
    },
  },
  argentina: {
    "calculadora-indemnizacion": {
      question: "¿Cuánto es la indemnización por despido en Argentina?",
      answer:
        "Art. 245 LCT: 1 mes del mejor sueldo por año trabajado (mín. 2 meses). Con $500,000/mes y 3 años → $1,500,000. El preaviso adicional es de 1-2 meses según antigüedad.",
    },
  },
  peru: {
    "calculadora-cts": {
      question: "¿Cuánto CTS me corresponde en Perú?",
      answer:
        "Aproximadamente 1/12 de tu remuneración mensual por cada mes trabajado. Con S/2,000/mes en un semestre completo → S/1,000. Se deposita en mayo y noviembre en tu cuenta bancaria.",
    },
  },
};

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

  const snippet = SNIPPETS[pais]?.[calculadora];

  // Other calculators for this country (excluding the current one)
  const otherCalculators = country.calculators
    .filter((c) => c.slug !== calculadora)
    .slice(0, 4);

  // Related blog articles: first those that link directly to this calculator, then country articles
  const directArticles = articles.filter((a) =>
    a.relatedCalculators.some((rc) => rc.pais === pais && rc.slug === calculadora)
  );
  const countryArticles = articles
    .filter((a) => a.country === pais && !directArticles.find((d) => d.slug === a.slug))
    .slice(0, 3 - directArticles.length);
  const relatedArticles = [...directArticles, ...countryArticles].slice(0, 3);

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
        name: country.name,
        item: `https://calculalaboral.net/${pais}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: calc.name,
        item: `https://calculalaboral.net/${pais}/${calculadora}`,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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

          {/* Featured snippet */}
          {snippet && (
            <section
              aria-label="Respuesta rápida"
              className="bg-emerald-50 border border-emerald-200 rounded-xl p-4"
            >
              <p className="text-sm font-semibold text-emerald-800 mb-1">
                {snippet.question}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {snippet.answer}
              </p>
            </section>
          )}

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

          {/* Related articles card */}
          {relatedArticles.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-base font-bold text-slate-800 mb-4">
                Artículos relacionados
              </h2>
              <ul className="space-y-3">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-sm text-slate-700 hover:text-blue-700 transition-colors leading-snug block"
                    >
                      &ndash; {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="inline-block mt-4 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                Ver todos los artículos &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
