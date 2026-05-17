import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ comparacion: string }> };

interface CountryProfile {
  name: string;
  flag: string;
  currency: string;
  minWage: string; // monthly in local currency
  minWageUSD: number;
  vacationDays: number;
  bonusMonths: number;
  bonusName: string;
  severance: string;
  socialSecurity: string;
  retirementAge: number;
  maxWorkHours: number;
  noticePeriod: string;
  mainLaw: string;
}

const PROFILES: Record<string, CountryProfile> = {
  mexico: {
    name: "México",
    flag: "🇲🇽",
    currency: "MXN",
    minWage: "$278/día",
    minWageUSD: 428,
    vacationDays: 12,
    bonusMonths: 0.5,
    bonusName: "Aguinaldo",
    severance: "3 meses + 20 días/año (despido injustificado)",
    socialSecurity: "IMSS — 32% patronal + 2% empleado (aprox.)",
    retirementAge: 65,
    maxWorkHours: 48,
    noticePeriod: "No obligatorio para empleado; 30 días para el patrón",
    mainLaw: "Ley Federal del Trabajo (LFT)",
  },
  espana: {
    name: "España",
    flag: "🇪🇸",
    currency: "EUR",
    minWage: "€1.184/mes",
    minWageUSD: 1290,
    vacationDays: 22,
    bonusMonths: 2,
    bonusName: "Pagas extra (junio y diciembre)",
    severance: "20 días/año trabajado (máx. 12 meses) — despido procedente",
    socialSecurity: "29.9% patronal + 6.47% empleado",
    retirementAge: 67,
    maxWorkHours: 40,
    noticePeriod: "15 días (renuncia); según contrato (empleador)",
    mainLaw: "Estatuto de los Trabajadores (ET)",
  },
  colombia: {
    name: "Colombia",
    flag: "🇨🇴",
    currency: "COP",
    minWage: "$1.423.500/mes",
    minWageUSD: 350,
    vacationDays: 15,
    bonusMonths: 1,
    bonusName: "Prima de servicios",
    severance: "1 mes por año trabajado (cesantías)",
    socialSecurity: "21.5% patronal + 9% empleado (salud + pensión)",
    retirementAge: 62,
    maxWorkHours: 46,
    noticePeriod: "15 días (renuncia); indemnización (despido)",
    mainLaw: "Código Sustantivo del Trabajo (CST)",
  },
  argentina: {
    name: "Argentina",
    flag: "🇦🇷",
    currency: "ARS",
    minWage: "$271.571/mes",
    minWageUSD: 280,
    vacationDays: 14,
    bonusMonths: 1,
    bonusName: "SAC (Sueldo Anual Complementario)",
    severance: "1 mes por año trabajado (mín. 2 meses)",
    socialSecurity: "26.5% patronal + 17% empleado",
    retirementAge: 65,
    maxWorkHours: 48,
    noticePeriod: "15–60 días según antigüedad",
    mainLaw: "Ley de Contrato de Trabajo (LCT)",
  },
  chile: {
    name: "Chile",
    flag: "🇨🇱",
    currency: "CLP",
    minWage: "$500.000/mes",
    minWageUSD: 550,
    vacationDays: 15,
    bonusMonths: 1,
    bonusName: "Gratificación legal",
    severance: "1 mes por año trabajado (máx. 11 años)",
    socialSecurity: "AFP (10%) + Salud (7%) + SIS — empleado; ~3% patronal",
    retirementAge: 65,
    maxWorkHours: 40,
    noticePeriod: "30 días (aviso previo o pago equivalente)",
    mainLaw: "Código del Trabajo",
  },
  peru: {
    name: "Perú",
    flag: "🇵🇪",
    currency: "PEN",
    minWage: "S/ 1.025/mes",
    minWageUSD: 275,
    vacationDays: 30,
    bonusMonths: 2,
    bonusName: "Gratificaciones (julio y diciembre)",
    severance: "CTS semestral + 1.5 meses por año (despido arbitrario)",
    socialSecurity: "9% empleado (EsSalud patronal); ONP o AFP",
    retirementAge: 65,
    maxWorkHours: 48,
    noticePeriod: "30 días (aviso previo)",
    mainLaw: "D. Leg. 728 — Ley de Fomento del Empleo",
  },
};

const VALID_PAIRS = [
  "mexico-vs-espana", "colombia-vs-mexico", "argentina-vs-chile",
  "espana-vs-colombia", "chile-vs-peru", "mexico-vs-colombia",
];

interface ComparacionEditorial {
  intro: string[];
  faqs: { q: string; a: string }[];
}

const COMPARACION_EDITORIAL: Record<string, ComparacionEditorial> = {
  "mexico-vs-espana": {
    intro: [
      "El salario mínimo en España supera los 1.184 €/mes (~1.290 USD), mientras que en México equivale a aproximadamente 428 USD mensuales. Esta diferencia refleja las distintas estructuras de costo de vida, productividad y marco de protección social de cada país.",
      "En vacaciones, España garantiza 30 días naturales al año (equivalentes a unos 22 días hábiles) según el artículo 38 del Estatuto de los Trabajadores, frente a los 12 días hábiles del primer año en México según la LFT — aunque México incrementa progresivamente hasta 20 días a partir del cuarto año.",
      "En seguridad social, España aplica el 29.9% de cotización patronal más el 6.47% del empleado, mientras que en México el IMSS supone aproximadamente el 32% patronal y el 2% del trabajador (porcentajes aproximados que varían según el salario). Ambos sistemas cubren salud, pensión y riesgo de trabajo.",
    ],
    faqs: [
      {
        q: "¿Cuánto más se gana trabajando en España respecto a México?",
        a: "En términos absolutos, el salario mínimo mensual en España es aproximadamente 3 veces mayor al de México en dólares (1.290 USD vs 428 USD). Sin embargo, el costo de vida en España también es superior, especialmente en ciudades como Madrid o Barcelona. Para comparar poder adquisitivo real es necesario ajustar por el costo de la vivienda, alimentación y transporte de cada país.",
      },
      {
        q: "¿España tiene aguinaldo como México?",
        a: "España tiene dos pagas extraordinarias obligatorias al año (junio y diciembre), que equivalen a 2 salarios mensuales adicionales. México tiene aguinaldo equivalente a 15 días de salario mínimo (aunque muchas empresas pagan más). En términos de meses adicionales, España (2 pagas extra) supera al aguinaldo mexicano estándar (medio mes), aunque los convenios colectivos españoles pueden variar.",
      },
      {
        q: "¿Es más fácil despedir en España o en México?",
        a: "En México, el despido injustificado implica pagar 3 meses de salario más 20 días por año trabajado. En España, el despido procedente implica 20 días de salario por año trabajado (máximo 12 meses), y el improcedente se indemniza con 33 días por año (máximo 24 meses). Para despidos de larga duración, la indemnización española puede ser mayor en términos absolutos.",
      },
      {
        q: "¿Los años cotizados en México al IMSS sirven en España?",
        a: "No de forma automática. México y España tienen un Convenio de Seguridad Social que permite totalizar períodos cotizados en ambos países para acceder a la pensión en cada uno, pero los años cotizados en México no se transfieren directamente al sistema español ni viceversa. Cada país reconoce la pensión proporcional según los años cotizados en su propio sistema.",
      },
    ],
  },
  "colombia-vs-mexico": {
    intro: [
      "Colombia y México son los dos mayores mercados laborales hispanohablantes de América Latina. Aunque tienen PIB per cápita similares, sus arquitecturas de protección social difieren radicalmente: Colombia separa las cesantías en fondos privados independientes (Porvenir, Protección, etc.) mientras que en México el pago equivalente se realiza al terminar la relación laboral.",
      "El sistema de cesantías colombiano es único en la región: cada año el empleador deposita el equivalente a un mes de salario en el fondo de cesantías elegido por el trabajador. Ese dinero pertenece al trabajador y puede retirarse anticipadamente para vivienda o educación. En México, la liquidación equivalente (20 días por año) solo se cobra al ser despedido injustificadamente.",
      "En vacaciones, Colombia otorga 15 días hábiles por año según el CST, frente a los 12 días hábiles del primer año en México (con incremento progresivo). En seguridad social, Colombia distingue entre EPS (salud), AFP o Colpensiones (pensión) y ARL (riesgos laborales), mientras que México centraliza todo en el IMSS.",
    ],
    faqs: [
      {
        q: "¿Las cesantías colombianas equivalen al AFORE mexicano?",
        a: "No exactamente. Las cesantías en Colombia son un beneficio laboral de 1 mes de salario por año, depositado anualmente en un fondo privado al que el trabajador puede acceder para vivienda o educación. El AFORE mexicano es exclusivamente para la pensión de jubilación. Ambos son fondos individuales, pero su propósito y reglas de retiro son distintos.",
      },
      {
        q: "¿Cuánto equivale el aguinaldo mexicano en Colombia?",
        a: "El aguinaldo mexicano estándar es de 15 días de salario al año. En Colombia no existe el aguinaldo como tal, pero hay la prima de servicios que equivale a 1 mes completo de salario pagado en dos partes (junio y diciembre). La prima colombiana duplica al aguinaldo mexicano mínimo.",
      },
      {
        q: "¿Cuáles son los descuentos de nómina en cada país?",
        a: "En México el trabajador aporta aproximadamente el 2% al IMSS (salud, pensión, guarderías). En Colombia el trabajador aporta el 4% a salud y el 4% a pensión (8% en total). Los descuentos de nómina del empleado son mayores en Colombia que en México, aunque el patrón colombiano también aporta porcentajes significativos.",
      },
      {
        q: "¿Cuál de los dos países tiene más días de vacaciones?",
        a: "Colombia otorga 15 días hábiles por año desde el primer año. México empieza con 12 días hábiles el primer año y aumenta 2 días cada año, llegando a 20 días en el cuarto año y manteniéndose. A partir del 5° año ambos países están en rangos similares, aunque Colombia mantiene los 15 días hábiles fijos mientras México sigue incrementando.",
      },
    ],
  },
  "argentina-vs-chile": {
    intro: [
      "Argentina y Chile representan dos modelos laborales contrapuestos: la Ley de Contrato de Trabajo argentina (LCT) es considerada una de las más protectoras de la región, con amplia intervención estatal. Chile, en cambio, construyó su sistema previsional sobre la capitalización individual con las AFP, con mayor protagonismo del mercado.",
      "En pensiones, el sistema chileno de AFP implica que el trabajador ahorra el 10% de su sueldo en una cuenta individual más el 7% de salud, con beneficios que dependen del rendimiento del fondo elegido. Argentina tiene el SIPA (Sistema Integrado Previsional Argentino), un sistema de reparto donde el trabajador aporta el 11% y el empleador el 26.5%, con jubilación garantizada por el Estado.",
      "En jornada laboral, Chile redujo la semana laboral a 40 horas mediante la Ley 21.561 (vigente desde abril de 2026), mientras que Argentina mantiene las 48 horas semanales según la LCT, aunque muchos CCT establecen jornadas menores.",
    ],
    faqs: [
      {
        q: "¿La indemnización por despido es igual en Argentina y Chile?",
        a: "No. En Chile la indemnización por despido sin causa es de 1 mes de remuneración por año trabajado, con un tope de 11 años (11 meses máximo). En Argentina la indemnización por antigüedad es de 1 mes de mejor remuneración mensual por año, sin tope de años (aunque existe un tope de 3 veces el promedio del CCT), más el preaviso.",
      },
      {
        q: "¿El SAC argentino tiene equivalente en Chile?",
        a: "No directamente. El SAC (Sueldo Anual Complementario) argentino equivale al 50% de la mejor remuneración semestral, pagado en junio y diciembre. En Chile existe la gratificación legal equivalente al 25% de las remuneraciones anuales del trabajador (hasta cierto tope), pero no es idéntica en su cálculo ni propósito al SAC.",
      },
      {
        q: "¿Cuál de los dos países tiene más días de vacaciones?",
        a: "Argentina tiene un sistema escalonado: 14 días hábiles (hasta 5 años de antigüedad), 21 días hábiles (5-10 años), 28 días hábiles (10-20 años) y 35 días hábiles (más de 20 años). Chile otorga 15 días hábiles a todos los trabajadores (más días por feriado progresivo después de 10 años). Para trabajadores con poca antigüedad, Argentina y Chile son similares; para trabajadores de larga data, Argentina ofrece más días.",
      },
      {
        q: "¿La AFP chilena es obligatoria para los trabajadores?",
        a: "Sí, para los trabajadores dependientes chilenos la cotización al sistema de AFP es obligatoria (10% del sueldo imponible más el 7% de salud). Los trabajadores independientes pueden cotizar voluntariamente. Hay debate político sobre reforma del sistema AFP en Chile, pero a 2026 sigue siendo el pilar previsional obligatorio.",
      },
    ],
  },
  "espana-vs-colombia": {
    intro: [
      "El salario mínimo interprofesional de España (1.184 €/mes en 2024) equivale aproximadamente a 3.7 veces el salario mínimo colombiano en dólares. Esta brecha refleja diferencias estructurales profundas: España es una economía de alto ingreso integrada en la Unión Europea, mientras Colombia es una economía de ingreso medio-alto con mercado laboral en desarrollo.",
      "En pensiones, los sistemas son radicalmente distintos: España tiene un sistema de reparto de beneficio definido donde se requieren al menos 15 años cotizados para acceder a cualquier pensión y 37 años para la pensión completa (a partir de 2027). Colombia tiene un sistema dual que mezcla el régimen de prima media (Colpensiones, estilo reparto) con el de ahorro individual (AFP privadas como Porvenir o Protección).",
    ],
    faqs: [
      {
        q: "¿Cuánto más vale trabajar en España que en Colombia en términos salariales?",
        a: "El salario mínimo mensual en España (~1.290 USD) triplica al colombiano (~350 USD). Sin embargo, el costo de vida en España, especialmente la vivienda en grandes ciudades, también es significativamente mayor. Un trabajador colombiano que emigra a España generalmente mejora su poder adquisitivo, pero el diferencial real depende de la ciudad de destino y el sector laboral.",
      },
      {
        q: "¿Las vacaciones son similares en España y Colombia?",
        a: "Sí, son bastante parecidas. España garantiza 30 días naturales (unos 22 hábiles) por año según el ET, y Colombia otorga 15 días hábiles (equivalentes a unos 21-22 días naturales) por año según el CST. Ambos países están en rangos similares, aunque los convenios colectivos españoles frecuentemente mejoran el mínimo legal.",
      },
      {
        q: "¿Existe un convenio de seguridad social entre España y Colombia?",
        a: "Sí. Existe un Convenio de Seguridad Social bilateral entre España y Colombia que permite totalizar los períodos cotizados en ambos países para el acceso a la pensión de jubilación. Esto significa que si cotizaste años en Colombia y años en España, ambos períodos pueden sumarse para alcanzar el mínimo requerido en cada país, aunque la pensión que paga cada uno será proporcional a los años cotizados allí.",
      },
    ],
  },
  "chile-vs-peru": {
    intro: [
      "Chile y Perú son economías de orientación similar y con acuerdos comerciales estrechos, pero sus sistemas laborales difieren en aspectos fundamentales. El más notable: Perú tiene la CTS (Compensación por Tiempo de Servicios), un beneficio sin equivalente directo en Chile, que actúa como un fondo de contingencia personal del trabajador.",
      "La CTS peruana implica que el empleador deposita semestralmente (mayo y noviembre) el equivalente a medio sueldo en una cuenta bancaria exclusiva a nombre del trabajador. Este dinero solo puede retirarse en casos específicos (desempleo, vivienda, salud). En Chile, el Seguro de Cesantía es el mecanismo más análogo, pero funciona distinto: se financia con aportes mensuales del empleador (~0.8%) y trabajador (~0.6%) y solo se accede al perder el empleo involuntariamente.",
      "En vacaciones, la diferencia es notable: Perú otorga 30 días calendario por año de trabajo, mientras Chile otorga 15 días hábiles. Los 30 días calendarios peruanos equivalen aproximadamente a 22 días hábiles, por lo que la brecha real es menor de lo que parece, pero Perú sigue teniendo más días de descanso efectivo.",
    ],
    faqs: [
      {
        q: "¿La CTS peruana equivale al seguro de cesantía chileno?",
        a: "Son conceptualmente distintos. La CTS peruana es un fondo acumulativo personal al que el trabajador tiene acceso parcial incluso estando empleado (para vivienda, salud, etc.) y se deposita semestralmente. El Seguro de Cesantía chileno es un seguro de desempleo al que solo se accede al perder el trabajo involuntariamente. La CTS es un activo del trabajador; el Seguro de Cesantía es un seguro colectivo.",
      },
      {
        q: "¿Cuántas gratificaciones recibe un trabajador de cada país?",
        a: "Perú otorga 2 gratificaciones al año: en julio (Fiestas Patrias) y en diciembre (Navidad), cada una equivalente a un sueldo completo. Chile tiene gratificación legal equivalente al 25% de las remuneraciones anuales (con tope). En términos de beneficios anuales totales, un trabajador peruano con 2 gratificaciones de 1 sueldo recibe más que uno chileno con la gratificación legal estándar.",
      },
      {
        q: "¿Es más fácil despedir en Chile o en Perú?",
        a: "En Chile, el despido arbitrario implica indemnización de 1 mes por año trabajado (máximo 11 meses) más el aviso previo de 30 días. En Perú, el despido arbitrario genera una indemnización de 1.5 remuneraciones por año trabajado (máximo 12 remuneraciones), sin límite de años hasta ese tope. Para trabajadores con pocos años, Chile puede resultar más económico para el empleador; para los de larga data, los topes limitan el costo en ambos países.",
      },
      {
        q: "¿Los descuentos previsionales son mayores en Chile o en Perú?",
        a: "En Chile, el trabajador descuenta el 10% de su sueldo imponible para AFP más el 7% para salud (FONASA o ISAPRE), totalizando aproximadamente el 17% de descuento personal. En Perú, el trabajador aporta el 13% al SNP (ONP) o una tasa similar a la AFP privada (aproximadamente 10% al fondo más comisión). Chile tiene mayor descuento de nómina al trabajador individual.",
      },
    ],
  },
  "mexico-vs-colombia": {
    intro: [
      "México y Colombia son los dos mayores mercados laborales de habla hispana en América Latina. Sus sistemas de seguridad social presentan diferencias estructurales relevantes: México centraliza salud, pensión y vivienda en el IMSS (una sola institución con múltiples ramas), mientras Colombia atomiza la protección social entre EPS (salud), AFP o Colpensiones (pensión), ARL (riesgos laborales) y Cajas de Compensación.",
      "La gestión de las cesantías es quizás la diferencia más práctica entre ambos países. En Colombia el empleador deposita anualmente el equivalente a 1 mes de salario en un fondo de cesantías independiente que pertenece al trabajador y puede retirar para vivienda o educación. En México el equivalente (20 días por año de antigüedad) solo se paga al momento del despido injustificado, lo que supone un riesgo si la empresa quiebra.",
      "En caso de terminación del contrato, México establece una indemnización constitucional de 3 meses de salario más 20 días por año trabajado (despido injustificado). Colombia aplica una tabla escalonada según el artículo 64 del CST: para salarios ordinarios, 30 días por año para los primeros 10 años y 20 días por año para los siguientes.",
    ],
    faqs: [
      {
        q: "¿Cuánto aguinaldo tiene cada país?",
        a: "México tiene aguinaldo de mínimo 15 días de salario al año (Art. 87 LFT), aunque muchas empresas pagan más. Colombia tiene la prima de servicios equivalente a 1 mes de salario pagado en dos partes (junio y diciembre). La prima colombiana es el doble del aguinaldo mínimo mexicano.",
      },
      {
        q: "¿Cuáles son los descuentos de nómina del trabajador en cada país?",
        a: "En México el trabajador aporta aproximadamente el 2% de su salario al IMSS (cuotas obrero-patronales, que son menores para el trabajador). En Colombia el trabajador aporta el 4% a salud (EPS) y el 4% a pensión (AFP o Colpensiones), totalizando el 8% de descuento de nómina. El trabajador colombiano tiene mayores descuentos de nómina individuales que el mexicano.",
      },
      {
        q: "¿Cuál de los dos países tiene más semanas de licencia de maternidad?",
        a: "Colombia tiene 18 semanas de licencia de maternidad desde la Ley 2114 de 2021 (anteriormente eran 14). México tiene 84 días (12 semanas). Colombia supera a México en 6 semanas adicionales de licencia de maternidad pagada. En ambos países la licencia la paga la seguridad social al 100% del salario base de cotización.",
      },
      {
        q: "¿Cuál tiene mayor estabilidad laboral, México o Colombia?",
        a: "Ambos países tienen mecanismos de protección al empleado. Colombia tiene el fuero sindical y el fuero de maternidad, y la jurisprudencia de la Corte Constitucional ha ampliado la estabilidad laboral reforzada. México tiene el fuero de maternidad (Art. 170 LFT) y la reinstalación como opción en despidos injustificados. En términos prácticos, Colombia tiene mayor desarrollo jurisprudencial en estabilidad laboral reforzada para grupos vulnerables.",
      },
    ],
  },
};

function parsePair(comparacion: string): [string, string] | null {
  const match = comparacion.match(/^(\w+(?:-\w+)*)-vs-(\w+(?:-\w+)*)$/);
  if (!match) return null;
  return [match[1], match[2]];
}

export async function generateStaticParams() {
  return VALID_PAIRS.map((pair) => ({ comparacion: pair }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparacion } = await params;
  const pair = parsePair(comparacion);
  if (!pair) return { title: "Comparación no encontrada" };
  const [a, b] = pair;
  const pA = PROFILES[a];
  const pB = PROFILES[b];
  if (!pA || !pB) return { title: "Comparación no encontrada" };
  return {
    title: `${pA.name} vs ${pB.name} | Derechos laborales comparados 2026`,
    description: `Compara los derechos laborales entre ${pA.name} y ${pB.name}: salario mínimo, vacaciones, aguinaldo, indemnización y más. Actualizado 2026.`,
  };
}

export default async function ComparacionPage({ params }: Props) {
  const { comparacion } = await params;
  const pair = parsePair(comparacion);
  if (!pair) notFound();
  const [slugA, slugB] = pair;
  const pA = PROFILES[slugA];
  const pB = PROFILES[slugB];
  if (!pA || !pB) notFound();

  const rows: { label: string; a: string | number; b: string | number; higherIsBetter: boolean }[] = [
    { label: "Salario mínimo mensual", a: pA.minWage, b: pB.minWage, higherIsBetter: true },
    { label: "Salario mínimo (USD ref.)", a: `~$${pA.minWageUSD}`, b: `~$${pB.minWageUSD}`, higherIsBetter: true },
    { label: "Días de vacaciones", a: `${pA.vacationDays} días`, b: `${pB.vacationDays} días`, higherIsBetter: true },
    { label: "Aguinaldo / bonus", a: `${pA.bonusName} (${pA.bonusMonths} mes${pA.bonusMonths !== 1 ? "es" : ""})`, b: `${pB.bonusName} (${pB.bonusMonths} mes${pB.bonusMonths !== 1 ? "es" : ""})`, higherIsBetter: true },
    { label: "Seguridad social", a: pA.socialSecurity, b: pB.socialSecurity, higherIsBetter: false },
    { label: "Edad de jubilación", a: `${pA.retirementAge} años`, b: `${pB.retirementAge} años`, higherIsBetter: false },
    { label: "Horas máx. semanales", a: `${pA.maxWorkHours}h`, b: `${pB.maxWorkHours}h`, higherIsBetter: false },
    { label: "Preaviso por renuncia", a: pA.noticePeriod, b: pB.noticePeriod, higherIsBetter: false },
    { label: "Indemnización por despido", a: pA.severance, b: pB.severance, higherIsBetter: false },
    { label: "Legislación principal", a: pA.mainLaw, b: pB.mainLaw, higherIsBetter: false },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {COMPARACION_EDITORIAL[comparacion] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: COMPARACION_EDITORIAL[comparacion].faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
      )}
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <Link href="/comparar" className="hover:text-slate-800 transition-colors">Comparar</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">{pA.name} vs {pB.name}</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          {pA.flag} {pA.name} vs {pB.flag} {pB.name}
        </h1>
        <p className="text-lg text-slate-600">
          Comparación de derechos laborales, beneficios y condiciones de trabajo entre ambos países. Datos 2026.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-4xl mb-2">{pA.flag}</p>
          <p className="font-bold text-xl text-slate-800">{pA.name}</p>
          <p className="text-sm text-slate-500 mt-1">{pA.mainLaw}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-4xl mb-2">{pB.flag}</p>
          <p className="font-bold text-xl text-slate-800">{pB.name}</p>
          <p className="text-sm text-slate-500 mt-1">{pB.mainLaw}</p>
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600 uppercase tracking-wide">
          <div className="px-4 py-3">Concepto</div>
          <div className="px-4 py-3 border-l border-slate-200">{pA.flag} {pA.name}</div>
          <div className="px-4 py-3 border-l border-slate-200">{pB.flag} {pB.name}</div>
        </div>
        <div className="divide-y divide-slate-100">
          {rows.map((row) => {
            const aNum = typeof row.a === "string" ? parseFloat(row.a.replace(/[^0-9.]/g, "")) : row.a as number;
            const bNum = typeof row.b === "string" ? parseFloat(row.b.replace(/[^0-9.]/g, "")) : row.b as number;
            const aWins = row.higherIsBetter ? aNum > bNum : aNum < bNum;
            const bWins = row.higherIsBetter ? bNum > aNum : bNum < aNum;

            return (
              <div key={row.label} className="grid grid-cols-3 text-sm">
                <div className="px-4 py-3 text-slate-600 font-medium">{row.label}</div>
                <div className={`px-4 py-3 border-l border-slate-100 ${aWins ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-700"}`}>
                  {String(row.a)}
                </div>
                <div className={`px-4 py-3 border-l border-slate-100 ${bWins ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-700"}`}>
                  {String(row.b)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {COMPARACION_EDITORIAL[comparacion] && (() => {
        const ed = COMPARACION_EDITORIAL[comparacion];
        return (
          <>
            <section className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                ¿Por qué difieren los sistemas laborales de {pA.name} y {pB.name}?
              </h2>
              {ed.intro.map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed">{para}</p>
              ))}
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Preguntas frecuentes</h2>
              {ed.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </section>
          </>
        );
      })()}

      <p className="text-xs text-slate-400 leading-relaxed">
        Datos orientativos basados en la legislación laboral general vigente en 2026. Los montos en moneda local pueden variar
        por actualizaciones del salario mínimo. Consulta siempre las fuentes oficiales para decisiones laborales importantes.
      </p>

      {/* Related calculators */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Calcula tus derechos en cada país</p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/${slugA}`} className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadoras {pA.name}
          </Link>
          <Link href={`/${slugB}`} className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadoras {pB.name}
          </Link>
          <Link href="/comparar" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Otras comparaciones
          </Link>
        </div>
      </section>
    </div>
  );
}
