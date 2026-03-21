export type RelatedCalculator = {
  pais: string;
  slug: string;
  name: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  country: string | null; // null = aplica a varios países
  countryName: string | null;
  publishDate: string;
  relatedCalculators: RelatedCalculator[];
  content: string; // HTML seguro (solo etiquetas de prosa)
};

export const articles: Article[] = [
  {
    slug: "como-calcular-finiquito-mexico",
    title: "Cómo calcular tu finiquito en México 2026",
    description:
      "Guía completa para calcular tu finiquito por renuncia voluntaria en México: partes proporcionales de aguinaldo, vacaciones y prima vacacional según la Ley Federal del Trabajo.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-01-10",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
      { pais: "mexico", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
    ],
    content: `
<h2>¿Qué es el finiquito en México?</h2>
<p>El finiquito es el pago que el empleador debe entregar al trabajador cuando termina una relación laboral por <strong>renuncia voluntaria</strong>. A diferencia de la liquidación, el finiquito no incluye indemnización.</p>

<h2>¿Qué conceptos incluye el finiquito?</h2>
<ul>
  <li><strong>Días de salario pendientes:</strong> los días trabajados del mes en curso que no se han pagado aún.</li>
  <li><strong>Aguinaldo proporcional:</strong> la parte del aguinaldo correspondiente al tiempo trabajado en el año.</li>
  <li><strong>Vacaciones proporcionales:</strong> los días de vacaciones que no se han disfrutado.</li>
  <li><strong>Prima vacacional proporcional:</strong> el 25% sobre las vacaciones proporcionales.</li>
</ul>

<h2>Fórmula del aguinaldo proporcional</h2>
<p>La Ley Federal del Trabajo (Art. 87) establece que los trabajadores tienen derecho a un mínimo de <strong>15 días de salario</strong> de aguinaldo por año completo. Si no completaste el año, el cálculo es proporcional:</p>
<p><em>Aguinaldo proporcional = (Salario diario × 15 días × meses trabajados) / 12</em></p>

<h2>Fórmula de las vacaciones proporcionales</h2>
<p>Según el Art. 76 de la LFT, en el primer año corresponden <strong>12 días de vacaciones</strong> mínimo. La proporción se calcula según los meses trabajados:</p>
<p><em>Vacaciones proporcionales = (12 días × meses trabajados) / 12</em></p>

<h2>¿Cuándo te deben pagar el finiquito?</h2>
<p>El empleador debe entregar el finiquito en un plazo razonable tras la renuncia, generalmente en los siguientes <strong>3 a 5 días hábiles</strong>. Si no lo paga, puedes presentar una demanda ante el Tribunal Laboral.</p>

<h2>Diferencia entre finiquito y liquidación</h2>
<p>El finiquito aplica cuando el trabajador <em>renuncia voluntariamente</em>. La liquidación aplica cuando el empleador despide al trabajador <em>sin causa justificada</em>, e incluye adicionalmente tres meses de salario y 20 días por año de servicio (Art. 50 LFT).</p>

<h2>Consejo práctico</h2>
<p>Antes de firmar el finiquito, revisa que todos los conceptos estén correctamente calculados. Usa nuestra calculadora gratuita para verificar el importe y lleva un desglose impreso cuando vayas a cobrarlo.</p>
    `.trim(),
  },
  {
    slug: "liquidacion-colombia-guia-completa",
    title: "Liquidación laboral en Colombia 2026: guía completa",
    description:
      "Todo lo que necesitas saber sobre la liquidación en Colombia: cesantías, prima de servicios, vacaciones proporcionales e intereses sobre cesantías.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-01-15",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Calculadora de Cesantías" },
      { pais: "colombia", slug: "calculadora-prima-servicios", name: "Prima de Servicios" },
    ],
    content: `
<h2>¿Qué incluye la liquidación laboral en Colombia?</h2>
<p>Cuando termina un contrato de trabajo en Colombia, el empleador debe liquidar todos los conceptos prestacionales. La liquidación incluye:</p>
<ul>
  <li><strong>Cesantías:</strong> equivalente a un mes de salario por cada año de servicio.</li>
  <li><strong>Intereses sobre cesantías:</strong> el 12% anual sobre el saldo de cesantías.</li>
  <li><strong>Prima de servicios:</strong> 15 días de salario por semestre trabajado.</li>
  <li><strong>Vacaciones:</strong> 15 días hábiles por año de trabajo.</li>
  <li><strong>Días pendientes de salario.</strong></li>
</ul>

<h2>Cálculo de cesantías</h2>
<p>Las cesantías se calculan con la siguiente fórmula:</p>
<p><em>Cesantías = (Salario mensual × días trabajados) / 360</em></p>
<p>Si el trabajador recibe auxilio de transporte, este se suma al salario base para el cálculo.</p>

<h2>Prima de servicios</h2>
<p>Se paga en dos momentos del año: el 30 de junio y el 20 de diciembre. Al terminar el contrato, se paga la parte proporcional al tiempo trabajado en el semestre en curso.</p>

<h2>Vacaciones proporcionales</h2>
<p>El Código Sustantivo del Trabajo establece 15 días hábiles por cada año de servicio. Para períodos incompletos, se calcula la proporción.</p>
<p><em>Vacaciones = (Salario mensual × días trabajados) / 720</em></p>

<h2>Indemnización por despido injusto</h2>
<p>Si el despido es sin justa causa, además de la liquidación normal, el empleador debe pagar una <strong>indemnización</strong> que varía según el tipo de contrato y el tiempo de servicio.</p>

<h2>Plazo para pagar la liquidación</h2>
<p>La liquidación debe pagarse en el momento de la terminación del contrato. Si el empleador se demora, incurre en una sanción moratoria equivalente a un día de salario por cada día de retardo.</p>
    `.trim(),
  },
  {
    slug: "prestacion-desempleo-espana",
    title: "Prestación por desempleo en España 2026: cuánto cobras",
    description:
      "Cómo calcular el paro en España: días cotizados necesarios, porcentaje del salario regulador, duración máxima y ejemplos prácticos.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-01-20",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-paro", name: "Calculadora de Paro" },
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Quién tiene derecho al paro?</h2>
<p>Para cobrar la prestación contributiva por desempleo en España debes cumplir los siguientes requisitos:</p>
<ul>
  <li>Haber cotizado al menos <strong>360 días</strong> en los últimos 6 años.</li>
  <li>Encontrarte en situación legal de desempleo (despido, fin de contrato, ERE, etc.).</li>
  <li>Estar inscrito como demandante de empleo en el SEPE.</li>
  <li>No tener la edad de jubilación ni estar jubilado.</li>
</ul>

<h2>¿Cuánto se cobra?</h2>
<p>La cuantía se calcula como un porcentaje de tu <strong>base reguladora</strong> (promedio de las bases de cotización de los últimos 180 días):</p>
<ul>
  <li>El <strong>70%</strong> durante los primeros 180 días.</li>
  <li>El <strong>50%</strong> a partir del día 181.</li>
</ul>
<p>Hay un máximo y mínimo establecido cada año por el SEPE.</p>

<h2>¿Cuánto tiempo dura el paro?</h2>
<p>La duración depende de los días cotizados en los últimos 6 años:</p>
<ul>
  <li>360 a 539 días cotizados → <strong>4 meses de prestación</strong></li>
  <li>540 a 719 días → <strong>6 meses</strong></li>
  <li>720 a 899 días → <strong>8 meses</strong></li>
  <li>2.160 días o más → <strong>24 meses</strong> (máximo)</li>
</ul>

<h2>¿Cómo se solicita?</h2>
<p>Debes solicitarlo en el SEPE (presencialmente o por internet) dentro de los <strong>15 días hábiles</strong> siguientes a la situación de desempleo. Si te retrasas, los días de retraso se descuentan de la prestación.</p>

<h2>Diferencia entre paro contributivo y subsidio</h2>
<p>El paro contributivo requiere cotizaciones previas. El subsidio de desempleo es una ayuda para quienes han agotado la prestación contributiva o no tienen suficientes cotizaciones, con condiciones de renta.</p>
    `.trim(),
  },
  {
    slug: "indemnizacion-despido-argentina",
    title: "Indemnización por despido en Argentina 2026",
    description:
      "Cómo se calcula la indemnización por despido sin causa en Argentina según el Art. 245 de la Ley de Contrato de Trabajo: fórmula, tope y ejemplos.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-01-25",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
      { pais: "argentina", slug: "calculadora-liquidacion-final", name: "Liquidación Final" },
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora de SAC" },
    ],
    content: `
<h2>Marco legal: Art. 245 LCT</h2>
<p>En Argentina, cuando un trabajador es despedido sin justa causa, el empleador debe pagar una indemnización según el <strong>Art. 245 de la Ley de Contrato de Trabajo</strong>.</p>

<h2>Fórmula de la indemnización</h2>
<p><em>Indemnización = Mejor remuneración mensual × años de antigüedad</em></p>
<p>La "mejor remuneración mensual" es el salario más alto percibido en los últimos 12 meses (bruto, incluyendo SAC proporcional). La fracción de año superior a 3 meses se cuenta como un año completo.</p>

<h2>Tope indemnizatorio</h2>
<p>Existe un <strong>tope máximo</strong>: la indemnización no puede superar 3 veces el promedio de las remuneraciones del convenio colectivo aplicable. Este monto lo actualiza periódicamente el Ministerio de Trabajo.</p>
<p>El tope mínimo es siempre <strong>un mes de la mejor remuneración</strong>.</p>

<h2>Liquidación final completa</h2>
<p>Además de la indemnización, el empleador debe pagar:</p>
<ul>
  <li><strong>Integración del mes de despido:</strong> los días restantes del mes en que se produjo el despido.</li>
  <li><strong>Preaviso:</strong> según la antigüedad (15 días en el primer año, 1 mes para más de 1 año).</li>
  <li><strong>SAC proporcional:</strong> la parte del aguinaldo correspondiente al semestre en curso.</li>
  <li><strong>Vacaciones proporcionales.</strong></li>
</ul>

<h2>Despido con causa</h2>
<p>Si el despido se produce con justa causa (por ejemplo, por incumplimiento grave del trabajador), el empleador no debe pagar indemnización. Sin embargo, la causa debe ser comunicada por escrito y debe ser suficientemente grave.</p>

<h2>¿Qué hacer si no te pagan?</h2>
<p>Puedes reclamar ante el Ministerio de Trabajo de tu provincia o iniciar un proceso judicial laboral. Existen plazos de prescripción de 2 años para los créditos laborales.</p>
    `.trim(),
  },
  {
    slug: "finiquito-vs-liquidacion-diferencias",
    title: "Finiquito vs Liquidación: diferencias en cada país",
    description:
      "Explicación clara de las diferencias entre finiquito y liquidación en México, Colombia, España, Argentina, Chile y Perú.",
    country: null,
    countryName: null,
    publishDate: "2026-02-01",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Finiquito México" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Liquidación Colombia" },
      { pais: "espana", slug: "calculadora-finiquito", name: "Finiquito España" },
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Indemnización Argentina" },
    ],
    content: `
<h2>¿Por qué se confunden estos términos?</h2>
<p>Los términos "finiquito" y "liquidación" se usan en distintos países con significados diferentes. Entender qué aplica en tu país es fundamental para saber cuánto dinero te corresponde al terminar una relación laboral.</p>

<h2>México</h2>
<p><strong>Finiquito:</strong> es el pago al trabajador cuando <em>renuncia voluntariamente</em>. Incluye días trabajados, aguinaldo proporcional, vacaciones proporcionales y prima vacacional proporcional. <em>No incluye indemnización.</em></p>
<p><strong>Liquidación:</strong> aplica cuando el empleador despide al trabajador sin causa justificada. Además de los conceptos del finiquito, incluye 3 meses de salario y 20 días por año de servicio.</p>

<h2>Colombia</h2>
<p>En Colombia se habla de <strong>liquidación</strong> para referirse al pago de todos los conceptos al terminar el contrato: cesantías, prima de servicios, vacaciones e intereses sobre cesantías. Si el despido es injusto, se añade indemnización.</p>

<h2>España</h2>
<p><strong>Finiquito:</strong> documento que liquida todos los conceptos pendientes al terminar la relación laboral (salario pendiente, vacaciones no disfrutadas, pagas extra). No es una indemnización.</p>
<p><strong>Indemnización:</strong> concepto separado que aplica en despidos improcedentes (33 días por año de servicio desde 2012).</p>

<h2>Argentina</h2>
<p>Se denomina <strong>liquidación final</strong> al pago de todos los conceptos al terminar el contrato. Si hay despido sin causa, se añade la <strong>indemnización por antigüedad</strong> (Art. 245 LCT).</p>

<h2>Chile</h2>
<p>Al terminar el contrato se paga el <strong>finiquito</strong>, que incluye: feriado proporcional, gratificación proporcional y otros conceptos. Si el despido es sin causa, se añade la <strong>indemnización por años de servicio</strong>.</p>

<h2>Perú</h2>
<p>Al cesar el trabajador recibe: vacaciones truncas, gratificaciones truncas, CTS y beneficios pendientes. Si el despido es arbitrario, también recibe <strong>indemnización</strong> equivalente a 1.5 remuneraciones por año (máximo 12).</p>

<h2>Conclusión</h2>
<p>En todos los países el concepto base es similar: al terminar una relación laboral, el trabajador tiene derecho a recibir los beneficios proporcionales al tiempo trabajado. La diferencia está en la nomenclatura y en si corresponde indemnización adicional según el tipo de terminación.</p>
    `.trim(),
  },
  {
    slug: "calculo-aguinaldo-mexico",
    title: "Cómo calcular el aguinaldo en México 2026",
    description:
      "Guía para calcular el aguinaldo: quiénes tienen derecho, cuándo se paga, la fórmula de cálculo y qué pasa si llevas menos de un año trabajando.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-02-05",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Qué es el aguinaldo?</h2>
<p>El aguinaldo es una prestación legal obligatoria que deben recibir todos los trabajadores en México. Está regulado por el <strong>Art. 87 de la Ley Federal del Trabajo</strong>.</p>

<h2>¿Cuánto es el aguinaldo?</h2>
<p>El mínimo legal es de <strong>15 días de salario</strong> por año completo trabajado. Muchos contratos colectivos o empresas ofrecen más días, pero nunca puede ser menos de 15.</p>

<h2>¿Cuándo se paga?</h2>
<p>Debe pagarse antes del <strong>20 de diciembre</strong> de cada año. Si el empleador no lo paga en esa fecha, incurre en incumplimiento y el trabajador puede reclamar ante el Tribunal Laboral.</p>

<h2>Fórmula para calcular el aguinaldo</h2>
<p>Si trabajaste el año completo:</p>
<p><em>Aguinaldo = Salario diario × 15 días</em></p>
<p>Si llevas menos de un año:</p>
<p><em>Aguinaldo = Salario diario × 15 × (días trabajados / 365)</em></p>

<h2>¿Se paga sobre salario bruto o neto?</h2>
<p>El aguinaldo se calcula sobre el <strong>salario integrado</strong> (salario base más partes proporcionales de comisiones y otras percepciones ordinarias). El ISR se retiene sobre el aguinaldo, aunque la LFT establece una exención de 30 UMAs.</p>

<h2>Trabajadores con menos de un año</h2>
<p>Si llevas menos de un año en la empresa, tienes derecho al aguinaldo <em>proporcional</em> al tiempo trabajado. No importa si llevas solo un mes: corresponde la parte proporcional.</p>

<h2>¿Qué pasa si me despiden antes de diciembre?</h2>
<p>Si eres despedido o renuncias antes de diciembre, el aguinaldo proporcional forma parte del finiquito o la liquidación que debes recibir.</p>
    `.trim(),
  },
  {
    slug: "vacaciones-colombia",
    title: "Cómo calcular las vacaciones en Colombia 2026",
    description:
      "Todo sobre las vacaciones en Colombia: días que corresponden, cómo se calculan, cuándo se pagan y qué pasa con las vacaciones no disfrutadas.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-02-10",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>¿Cuántos días de vacaciones corresponden?</h2>
<p>Según el Código Sustantivo del Trabajo (Art. 186), todo trabajador tiene derecho a <strong>15 días hábiles de vacaciones</strong> remuneradas por cada año de trabajo.</p>

<h2>¿Cuándo se deben tomar?</h2>
<p>Las vacaciones deben disfrutarse dentro del año siguiente a la fecha en que se generaron. El empleador y el trabajador pueden acordar la fecha de disfrute por mutuo acuerdo.</p>

<h2>Fórmula para vacaciones proporcionales</h2>
<p>Si no has completado un año o si te vas de la empresa antes:</p>
<p><em>Vacaciones proporcionales = (Salario mensual × días trabajados) / 720</em></p>
<p>Esta fórmula convierte los días trabajados en meses y los multiplica por los 15 días proporcionales.</p>

<h2>¿Se pueden compensar en dinero?</h2>
<p>En Colombia, las vacaciones deben disfrutarse. Solo se pueden <strong>compensar en dinero</strong> la mitad (7.5 días hábiles) si así lo acuerdan empleador y trabajador. El resto debe tomarse efectivamente.</p>

<h2>¿Qué pasa al terminar el contrato?</h2>
<p>Si al terminar el contrato quedan vacaciones no disfrutadas, el empleador debe pagar su equivalente en dinero. Esto se incluye en la liquidación final.</p>

<h2>Vacaciones con auxilio de transporte</h2>
<p>El auxilio de transporte <strong>no se incluye</strong> en la base para calcular las vacaciones, a diferencia de las cesantías. La base es únicamente el salario ordinario.</p>
    `.trim(),
  },
  {
    slug: "cts-peru-guia-completa",
    title: "CTS en Perú 2026: qué es y cómo se calcula",
    description:
      "Guía completa sobre la Compensación por Tiempo de Servicios (CTS) en Perú: quiénes tienen derecho, cuándo se deposita, cómo se calcula y cuándo puedes retirarla.",
    country: "peru",
    countryName: "Perú",
    publishDate: "2026-02-15",
    relatedCalculators: [
      { pais: "peru", slug: "calculadora-cts", name: "Calculadora de CTS" },
      { pais: "peru", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "peru", slug: "calculadora-gratificaciones", name: "Calculadora de Gratificaciones" },
    ],
    content: `
<h2>¿Qué es la CTS?</h2>
<p>La Compensación por Tiempo de Servicios (CTS) es un beneficio social obligatorio que tiene como finalidad ser un <strong>fondo de previsión</strong> para el trabajador cuando queda desempleado. Está regulada por el D.S. 001-97-TR.</p>

<h2>¿Quiénes tienen derecho a la CTS?</h2>
<p>Los trabajadores que presten servicios por un mínimo de <strong>4 horas diarias</strong> y cuenten con al menos un mes de servicio. Están excluidos los trabajadores de microempresas que hayan optado por el régimen especial.</p>

<h2>¿Cuándo se deposita?</h2>
<p>La CTS se deposita dos veces al año:</p>
<ul>
  <li>Del 1 al 15 de <strong>mayo</strong> (por el período noviembre–abril).</li>
  <li>Del 1 al 15 de <strong>noviembre</strong> (por el período mayo–octubre).</li>
</ul>

<h2>Fórmula de cálculo</h2>
<p>La base de cálculo es la <strong>remuneración computable</strong>, que incluye el salario básico más 1/6 de la gratificación legal (julio y diciembre).</p>
<p><em>CTS semestral = (Remuneración computable / 12) × meses del semestre</em></p>
<p>Para días fraccionados: <em>días / 30</em></p>

<h2>¿Cuándo puedes retirar la CTS?</h2>
<p>Durante la vigencia del contrato, la CTS intangible actúa como fondo de reserva. Solo puedes retirar el exceso por encima de 4 remuneraciones brutas. Al cesar el vínculo laboral, puedes retirar el total.</p>

<h2>CTS al término del contrato</h2>
<p>Al terminar la relación laboral, el empleador debe depositar la CTS proporcional correspondiente al período trabajado en el último semestre, dentro de las 48 horas de producido el cese.</p>
    `.trim(),
  },
  {
    slug: "carta-renuncia-voluntaria-mexico",
    title: "Cómo redactar una carta de renuncia voluntaria en México 2026",
    description:
      "Guía paso a paso para redactar una carta de renuncia laboral en México: qué debe incluir, el preaviso recomendado y qué derechos tienes al renunciar.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-02-20",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>¿Es obligatorio presentar una carta de renuncia?</h2>
<p>La Ley Federal del Trabajo no exige formalmente una carta de renuncia escrita, pero es <strong>muy recomendable</strong> para dejar constancia de la terminación voluntaria y proteger tus derechos.</p>

<h2>¿Qué debe incluir la carta de renuncia?</h2>
<ul>
  <li>Lugar y fecha de redacción.</li>
  <li>Nombre y cargo del trabajador.</li>
  <li>Nombre del empleador y empresa.</li>
  <li>Fecha en que se hace efectiva la renuncia.</li>
  <li>Solicitud expresa del finiquito.</li>
  <li>Firma del trabajador.</li>
</ul>

<h2>¿Hay preaviso obligatorio en México?</h2>
<p>La LFT no establece un preaviso obligatorio para el trabajador que renuncia. Sin embargo, por cortesía profesional y para mantener una buena relación, se recomienda dar un preaviso de <strong>15 días a un mes</strong>.</p>

<h2>¿Qué derechos tienes al renunciar?</h2>
<p>Al renunciar voluntariamente, tienes derecho a recibir el <strong>finiquito</strong>:</p>
<ul>
  <li>Días de salario pendientes.</li>
  <li>Aguinaldo proporcional.</li>
  <li>Vacaciones proporcionales no disfrutadas.</li>
  <li>Prima vacacional proporcional.</li>
</ul>
<p>No tienes derecho a indemnización por renuncia voluntaria.</p>

<h2>¿Puedes arrepentirte de la renuncia?</h2>
<p>Si la renuncia aún no ha sido aceptada formalmente por el empleador, puedes retractarla. Una vez aceptada, solo es posible anularla si ambas partes están de acuerdo.</p>

<h2>Usa nuestro generador gratuito</h2>
<p>Para ahorrarte tiempo, puedes usar nuestro <strong>generador de carta de renuncia</strong> que crea automáticamente un documento formal adaptado a México con todos los elementos necesarios.</p>
    `.trim(),
  },
  {
    slug: "horas-extras-calculo",
    title: "Cómo calcular las horas extra en Latinoamérica 2026",
    description:
      "Guía comparativa sobre el cálculo de horas extra en México, Colombia, España, Argentina, Chile, Perú y Ecuador: porcentajes, límites y ejemplos prácticos.",
    country: null,
    countryName: null,
    publishDate: "2026-02-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-horas-extra", name: "Horas Extra México" },
      { pais: "colombia", slug: "calculadora-horas-extra", name: "Horas Extra Colombia" },
      { pais: "espana", slug: "calculadora-horas-extra", name: "Horas Extra España" },
      { pais: "argentina", slug: "calculadora-horas-extra", name: "Horas Extra Argentina" },
    ],
    content: `
<h2>¿Qué son las horas extra?</h2>
<p>Las horas extra (o horas extraordinarias) son las horas trabajadas por encima de la jornada laboral ordinaria establecida por la ley o el contrato. Todos los países tienen distintos recargos y límites.</p>

<h2>México</h2>
<p>La jornada máxima es de <strong>8 horas diarias</strong> (48 semanales). Las primeras 9 horas extra por semana se pagan al <strong>doble</strong> del salario ordinario. A partir de la 10ª hora, se pagan al <strong>triple</strong>.</p>

<h2>Colombia</h2>
<p>La jornada máxima es de <strong>47 horas semanales</strong> (desde 2023, reducción gradual). Los recargos son:</p>
<ul>
  <li>Hora extra diurna: +25%</li>
  <li>Hora extra nocturna: +75%</li>
  <li>Hora dominical/festivo diurna: +75%</li>
  <li>Hora dominical/festivo nocturna: +110%</li>
</ul>

<h2>España</h2>
<p>El límite es de <strong>80 horas extra al año</strong>. El precio se fija por convenio colectivo, pero no puede ser inferior al valor de la hora ordinaria. Es habitual compensarlas con tiempo libre.</p>

<h2>Argentina</h2>
<p>Las primeras 3 horas extra por día (o las primeras 9 por semana) se pagan con un recargo del <strong>50%</strong>. Las siguientes, con un recargo del <strong>100%</strong>.</p>

<h2>Chile</h2>
<p>El límite es de <strong>2 horas diarias</strong> de trabajo extra. Se pagan con un recargo mínimo del <strong>50%</strong> sobre el valor de la hora ordinaria.</p>

<h2>Perú</h2>
<p>Las dos primeras horas extra se pagan con un recargo del <strong>25%</strong>. A partir de la tercera hora, el recargo es del <strong>35%</strong>.</p>

<h2>Ecuador</h2>
<p>Las horas extra diurnas (hasta 4 por día) tienen un recargo del <strong>50%</strong>. Las diurnas que superan 4 horas diarias tienen un recargo del <strong>100%</strong>. Las nocturnas también tienen un recargo del <strong>100%</strong>.</p>

<h2>Consejo práctico</h2>
<p>Lleva siempre un registro de las horas trabajadas. Si tu empleador no te paga las horas extra correctamente, puedes reclamar ante la autoridad laboral de tu país con ese registro como evidencia.</p>
    `.trim(),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCountry(country: string): Article[] {
  return articles.filter((a) => a.country === country || a.country === null);
}
