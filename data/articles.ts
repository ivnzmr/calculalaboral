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
  modifiedDate?: string;
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

  // ── Diferencia finiquito vs liquidación ──────────────────────────────────
  {
    slug: "diferencia-finiquito-liquidacion-mexico",
    title: "Diferencia entre finiquito y liquidación en México",
    description: "Aprende cuándo corresponde un finiquito y cuándo una liquidación en México, qué conceptos incluye cada uno y cómo calcularlos correctamente según la Ley Federal del Trabajo.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>¿Qué es el finiquito en México?</h2>
<p>El <strong>finiquito</strong> es el pago que recibe un trabajador al concluir su relación laboral. En el contexto coloquial mexicano se asocia principalmente con la <strong>renuncia voluntaria</strong> o la terminación por acuerdo mutuo, donde no existe responsabilidad del patrón. Cuando un trabajador decide renunciar, el patrón está obligado a liquidar los conceptos proporcionales generados hasta la fecha de separación, sin obligación de pagar indemnización adicional.</p>

<h2>Conceptos que integran el finiquito por renuncia</h2>
<ul>
  <li><strong>Salarios pendientes:</strong> Todos los días trabajados y no pagados hasta la fecha de baja.</li>
  <li><strong>Aguinaldo proporcional:</strong> 15 días de salario por año, calculado en proporción a los meses trabajados en el año en curso (Art. 87 LFT).</li>
  <li><strong>Vacaciones proporcionales:</strong> Los días de vacaciones generados y no disfrutados según la tabla del Art. 76 LFT (mínimo 12 días el primer año).</li>
  <li><strong>Prima vacacional:</strong> El 25% sobre el valor de las vacaciones proporcionales (Art. 80 LFT).</li>
</ul>

<h2>¿Qué es la liquidación en México?</h2>
<p>La <strong>liquidación</strong> aplica cuando el patrón rescinde el contrato <em>sin causa justificada</em>. En este escenario, la LFT obliga al patrón a pagar, además del finiquito, una <strong>indemnización constitucional</strong> según el Artículo 50.</p>

<h2>Componentes de la liquidación por despido injustificado</h2>
<ul>
  <li>Todos los conceptos del finiquito (salarios, aguinaldo, vacaciones y prima proporcionales).</li>
  <li><strong>Tres meses de salario integrado</strong> como indemnización constitucional.</li>
  <li><strong>20 días de salario integrado por cada año de servicio</strong> prestado.</li>
  <li><strong>Prima de antigüedad:</strong> 12 días de salario por año trabajado (Art. 162 LFT).</li>
</ul>
<p>El salario integrado incluye el salario base más las partes proporcionales de gratificaciones, percepciones, habitación, primas, comisiones y cualquier cantidad que se entregue regularmente al trabajador.</p>

<h2>Diferencias clave: quién termina y por qué</h2>
<p>La distinción fundamental radica en <strong>quién termina la relación laboral y por qué motivo</strong>. Si el trabajador renuncia voluntariamente, solo corresponde el finiquito. Si el patrón despide sin causa justificada, corresponde la liquidación completa.</p>
<p>Para comparar ambos escenarios con tus datos reales, visita nuestro <a href="/mexico/finiquito-vs-despido" class="text-blue-600 underline">Comparador finiquito vs liquidación México</a>.</p>

<h2>Errores frecuentes al calcular</h2>
<ul>
  <li>Usar el salario nominal en lugar del <em>salario diario integrado</em>.</li>
  <li>No incluir el aguinaldo proporcional del año en curso.</li>
  <li>Ignorar las prestaciones superiores a la ley pactadas en contrato.</li>
</ul>

<h2>Consejo práctico</h2>
<p>Nunca firmes un finiquito o liquidación sin haber verificado los montos. Utiliza nuestra <strong>Calculadora de Finiquito</strong> y <strong>Calculadora de Liquidación</strong> para obtener un desglose detallado según tu salario, antigüedad y tipo de terminación.</p>
    `.trim(),
  },
  {
    slug: "diferencia-finiquito-liquidacion-colombia",
    title: "Diferencia entre finiquito y liquidación en Colombia",
    description: "Descubre qué incluye la liquidación laboral en Colombia, cómo cambia según el tipo de terminación del contrato y qué dice el Código Sustantivo del Trabajo sobre la indemnización por despido sin justa causa.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Calculadora de Cesantías" },
    ],
    content: `
<h2>El concepto de liquidación en Colombia</h2>
<p>En Colombia se habla de <strong>liquidación del contrato de trabajo</strong>: el pago de todos los conceptos prestacionales generados durante la vigencia del vínculo laboral. El monto total varía significativamente según si la terminación es voluntaria o si existe un despido sin justa causa.</p>

<h2>Liquidación por terminación voluntaria o con justa causa</h2>
<ul>
  <li><strong>Vacaciones proporcionales:</strong> 15 días hábiles por año, en proporción al tiempo servido.</li>
  <li><strong>Cesantías:</strong> Un mes de salario por año de servicio (proporcional).</li>
  <li><strong>Intereses sobre cesantías:</strong> El 12% anual sobre el saldo de cesantías.</li>
  <li><strong>Prima de servicios proporcional:</strong> 15 días de salario por semestre trabajado.</li>
  <li>Salarios pendientes y cualquier otra prestación contractual no pagada.</li>
</ul>

<h2>Indemnización por despido sin justa causa (Art. 64 CST)</h2>
<p>Cuando el empleador termina el contrato <strong>sin justa causa</strong>, el trabajador tiene derecho a la liquidación completa más una indemnización adicional. Para contratos a término indefinido:</p>
<ul>
  <li><strong>Primer año:</strong> 30 días de salario.</li>
  <li><strong>Años adicionales:</strong> 20 días de salario por cada año completo de servicio posterior al primero.</li>
</ul>
<p>Para trabajadores que devenguen más de 10 SMMLV, los días se reducen a 20 días por el primer año y 15 días por cada año adicional.</p>

<h2>Diferencia práctica</h2>
<p>Un empleado con 5 años de servicio y salario mínimo recibiría en caso de despido sin justa causa aproximadamente <strong>110 días adicionales de salario</strong> por encima de su liquidación ordinaria. Para analizar tu situación, visita nuestro <a href="/colombia/finiquito-vs-despido" class="text-blue-600 underline">Comparador finiquito vs liquidación Colombia</a>.</p>

<h2>Las cesantías: un concepto único</h2>
<p>Las <strong>cesantías</strong> funcionan como un ahorro forzoso. Desde 1990, los empleadores deben consignarlas anualmente en un fondo (Porvenir, Protección, Colfondos, etc.). Al terminar el contrato, el trabajador solicita el retiro directamente al fondo. Las cesantías <em>siempre</em> se generan, independientemente de la causa de terminación.</p>

<h2>Herramienta de cálculo</h2>
<p>Utiliza nuestra <strong>Calculadora de Liquidación Colombia</strong> y la <strong>Calculadora de Cesantías</strong> para conocer exactamente a qué tienes derecho antes de cualquier negociación.</p>
    `.trim(),
  },
  {
    slug: "diferencia-finiquito-liquidacion-espana",
    title: "Diferencia entre finiquito y liquidación en España",
    description: "Entiende qué es el finiquito, qué diferencia hay con la indemnización por despido en España y cuánto corresponde según el tipo de despido: improcedente, procedente u objetivo.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "espana", slug: "calculadora-despido-improcedente", name: "Indemnización por Despido" },
    ],
    content: `
<h2>¿Qué es el finiquito en España?</h2>
<p>En España, el <strong>finiquito</strong> es el documento y el pago que extingue la relación laboral. Se genera en <em>cualquier tipo</em> de terminación contractual: renuncia voluntaria, despido, fin de contrato temporal o baja por mutuo acuerdo. Es la <strong>liquidación de los conceptos devengados y no cobrados</strong>. La clave: el finiquito no incluye indemnización por sí mismo; esta depende del tipo y causa de la extinción.</p>

<h2>Contenido del finiquito: conceptos comunes a toda extinción</h2>
<ul>
  <li><strong>Salarios pendientes:</strong> Días trabajados en el mes de baja no cobrados.</li>
  <li><strong>Vacaciones no disfrutadas:</strong> Los días generados y no tomados hasta la fecha de extinción.</li>
  <li><strong>Pagas extraordinarias proporcionales:</strong> La parte de las pagas extra desde la última percepción hasta la baja.</li>
  <li>Horas extraordinarias pendientes y cualquier otro concepto retributivo devengado.</li>
</ul>

<h2>Despido improcedente: indemnización máxima</h2>
<p>El <strong>despido improcedente</strong> genera una indemnización de <strong>33 días de salario por año de servicio</strong>, con un máximo de <strong>24 mensualidades</strong>. Para contratos anteriores al 12 de febrero de 2012 existe un régimen transitorio (45 días/año para el tramo previo a esa fecha).</p>

<h2>Despido procedente y objetivo</h2>
<p>El <strong>despido procedente</strong> (causas disciplinarias probadas) no genera indemnización adicional. El <strong>despido objetivo</strong> (causas económicas, técnicas, organizativas) genera <strong>20 días por año de servicio</strong>, máximo 12 mensualidades.</p>

<h2>Renuncia voluntaria</h2>
<p>Al dimitir, el trabajador tiene derecho únicamente al finiquito básico, sin indemnización. Debe respetar el preaviso pactado en convenio o contrato (normalmente 15 días). Para comparar cuánto recibirías en cada escenario: <a href="/espana/finiquito-vs-despido" class="text-blue-600 underline">Comparador finiquito vs liquidación España</a>.</p>

<h2>Consejo: revisa antes de firmar</h2>
<p>Puedes firmar el finiquito con la coletilla <em>"no conforme"</em> si hay discrepancias, y reclamar posteriormente ante el SMAC. Usa nuestra <strong>Calculadora de Finiquito</strong> para contrastar los números antes de cualquier firma.</p>
    `.trim(),
  },
  {
    slug: "diferencia-finiquito-liquidacion-argentina",
    title: "Diferencia entre finiquito y liquidación en Argentina",
    description: "Conoce qué conceptos corresponden al renunciar y cuáles al ser despedido sin causa en Argentina, incluyendo el cálculo de la indemnización del Art. 245 de la LCT y el SAC proporcional.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora de SAC" },
    ],
    content: `
<h2>Renuncia vs. despido en Argentina</h2>
<p>La <strong>Ley de Contrato de Trabajo (LCT)</strong> diferencia claramente los conceptos según la forma en que se extingue el vínculo. La distinción clave es si el empleador tiene o no <strong>causa justificada</strong> para despedir. Si no la tiene, debe abonar la indemnización por despido sin justa causa del Art. 245 LCT.</p>

<h2>Conceptos por renuncia voluntaria</h2>
<ul>
  <li><strong>Salarios pendientes</strong> hasta la fecha de egreso.</li>
  <li><strong>SAC proporcional:</strong> La doceava parte del mejor salario mensual del período desde el último aguinaldo.</li>
  <li><strong>Vacaciones proporcionales:</strong> Días de descanso no tomados en proporción a los meses trabajados en el año.</li>
  <li><strong>Preaviso:</strong> Si el empleador lo dispensa, igual debe abonarlo.</li>
</ul>
<p>No hay indemnización por antigüedad cuando la desvinculación es voluntaria.</p>

<h2>Indemnización por despido sin causa (Art. 245 LCT)</h2>
<ul>
  <li><strong>Indemnización por antigüedad:</strong> Un mes de la <em>mejor remuneración mensual, normal y habitual</em> del último año por cada año de antigüedad o fracción mayor a 3 meses. Mínimo equivalente a 2 meses de la mejor remuneración.</li>
  <li><strong>Integración del mes de despido:</strong> Si no coincide con el último día del mes.</li>
  <li><strong>Preaviso omitido:</strong> Si el empleador no lo otorgó (15 días o 1 mes según antigüedad).</li>
</ul>

<h2>El tope remuneratorio</h2>
<p>La base de cálculo tiene un <strong>tope máximo</strong>: no puede exceder tres veces el promedio de remuneraciones del convenio colectivo aplicable. Este tope varía según el CCT y debe verificarse al momento del cálculo.</p>
<p>Visita nuestro <a href="/argentina/finiquito-vs-despido" class="text-blue-600 underline">Comparador finiquito vs liquidación Argentina</a> para ver la diferencia exacta en tu caso.</p>

<h2>Multas por incumplimientos</h2>
<p>Las leyes 24.013 y 25.323 establecen multas adicionales cuando el empleador no registró correctamente al trabajador o no abonó en tiempo la liquidación. Estas multas pueden duplicar o triplicar los montos indemnizatorios.</p>

<h2>Herramienta de cálculo</h2>
<p>Usá nuestra <strong>Calculadora de Indemnización Argentina</strong> y la <strong>Calculadora de SAC</strong> para obtener un resultado preciso antes de firmar cualquier acuerdo.</p>
    `.trim(),
  },
  {
    slug: "diferencia-finiquito-liquidacion-chile",
    title: "Diferencia entre finiquito y liquidación en Chile",
    description: "Aprende qué incluye el finiquito en Chile, qué conceptos adicionales genera el despido por necesidades de la empresa y cómo se calcula la indemnización por años de servicio según el Código del Trabajo.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "chile", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
    ],
    content: `
<h2>El finiquito en Chile</h2>
<p>En Chile, el <strong>finiquito</strong> es el instrumento legal que da por terminada la relación laboral. Debe constar por escrito y ratificarse ante un ministro de fe (inspector del trabajo o notario) para tener plena validez liberatoria. Su contenido económico varía según la <strong>causal de despido</strong>.</p>

<h2>Conceptos en toda liquidación (incluye renuncia)</h2>
<ul>
  <li><strong>Feriado proporcional:</strong> Los días de vacaciones generados y no disfrutados en el año en curso (base legal: 15 días hábiles anuales).</li>
  <li><strong>Gratificación proporcional:</strong> Si la empresa paga gratificación anual, se liquida en proporción a los meses trabajados.</li>
  <li>Salarios devengados y beneficios contractuales pendientes.</li>
</ul>

<h2>Despido por necesidades de la empresa (Art. 161)</h2>
<p>La causal más utilizada para despedir en Chile. Además del finiquito ordinario corresponde:</p>
<ul>
  <li><strong>Indemnización por años de servicio:</strong> <em>30 días de la última remuneración mensual por cada año de servicio</em>, con tope de 11 años (330 días máximo).</li>
  <li><strong>Indemnización sustitutiva del aviso previo:</strong> Si el empleador no da 30 días de aviso, paga una remuneración mensual adicional.</li>
</ul>
<p>Visita nuestro <a href="/chile/finiquito-vs-despido" class="text-blue-600 underline">Comparador finiquito vs liquidación Chile</a> para ver la diferencia exacta.</p>

<h2>Causales sin indemnización por años de servicio</h2>
<ul>
  <li>Vencimiento del plazo del contrato (Art. 159 N°4).</li>
  <li>Conclusión del trabajo o servicio (Art. 159 N°5).</li>
  <li>Causales disciplinarias del Art. 160 (conductas indebidas, incumplimiento grave).</li>
</ul>

<h2>Recargo por despido injustificado</h2>
<p>Si el tribunal declara el despido injustificado, se aplica un <strong>recargo del 30%</strong> sobre la indemnización por años de servicio. Dependiendo de la causal invocada, puede llegar hasta el 100%.</p>

<h2>Consejo: calcula antes de firmar</h2>
<p>Usa nuestra <strong>Calculadora de Finiquito Chile</strong> y la <strong>Calculadora de Indemnización</strong> para verificar que los montos sean correctos antes de firmar el finiquito.</p>
    `.trim(),
  },

  // ── Aguinaldo por país ────────────────────────────────────────────────────
  {
    slug: "aguinaldo-colombia-2026",
    title: "¿Cuándo pagan la prima de junio 2026 en Colombia? Fecha y Cálculo",
    description: "La prima de junio se paga a más tardar el 30 de junio de 2026. Equivale a 15 días de salario. Aprende cuánto te corresponde y cómo calcularla según el Art. 306 del CST.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-prima", name: "Calculadora de Prima de Servicios" },
    ],
    content: `
<h2>¿Qué es la prima de servicios en Colombia?</h2>
<p>La <strong>prima de servicios</strong> es una prestación social obligatoria regulada por el <strong>Artículo 306 del Código Sustantivo del Trabajo (CST)</strong>. Todo empleador está obligado a pagar a sus trabajadores una suma equivalente a <strong>15 días de salario por cada semestre</strong> trabajado. No es un beneficio voluntario: es un derecho irrenunciable.</p>

<h2>¿Cuándo se paga la prima en 2026?</h2>
<ul>
  <li><strong>Primera cuota:</strong> a más tardar el <strong>30 de junio de 2026</strong> (semestre enero-junio).</li>
  <li><strong>Segunda cuota:</strong> a más tardar el <strong>20 de diciembre de 2026</strong> (semestre julio-diciembre).</li>
</ul>
<p>El incumplimiento genera intereses moratorios y puede dar lugar a sanciones del Ministerio del Trabajo.</p>

<h2>¿Cómo se calcula la prima?</h2>
<p><strong>Prima = (Salario mensual × días trabajados en el semestre) / 360</strong></p>
<p>Se toma el salario ordinario más los pagos que constituyan salario. Si el trabajador devenga hasta dos SMLMV, el auxilio de transporte se suma al salario para efectos de la prima.</p>

<h2>Prima proporcional: menos de un semestre completo</h2>
<p>Si el trabajador no completó el semestre, tiene derecho a prima proporcional a los días efectivamente trabajados. Esta se incluye en la liquidación final del contrato.</p>

<h2>Consecuencias del no pago</h2>
<p>El empleador que no pague en los plazos estipulados debe intereses de mora equivalentes a la tasa máxima del Banco de la República. El trabajador puede acudir al inspector de trabajo o presentar demanda ordinaria laboral.</p>
<p>Usa nuestra <strong>Calculadora de Prima de Servicios</strong> para obtener el valor exacto según tu salario y los días trabajados en el semestre.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-argentina-2026",
    title: "SAC / Aguinaldo en Argentina 2026: Fechas, Cálculo y Proporcional",
    description: "Guía completa del Sueldo Anual Complementario (SAC) en Argentina 2026: cuándo se paga, cómo se calcula el 50% del mejor salario semestral, proporcional y SAC sobre vacaciones según el Art. 122 LCT.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora de SAC/Aguinaldo" },
    ],
    content: `
<h2>¿Qué es el SAC en Argentina?</h2>
<p>El <strong>Sueldo Anual Complementario (SAC)</strong>, conocido como aguinaldo, es una remuneración adicional obligatoria establecida en el <strong>Artículo 122 de la LCT</strong>. Representa la mitad del mejor salario mensual del semestre. Todo trabajador en relación de dependencia tiene derecho al SAC; no puede ser renunciado ni compensado de otra forma.</p>

<h2>¿Cuándo se paga el SAC en 2026?</h2>
<ul>
  <li><strong>Primera cuota:</strong> hasta el <strong>30 de junio de 2026</strong> (período enero-junio).</li>
  <li><strong>Segunda cuota:</strong> hasta el <strong>18 de diciembre de 2026</strong> (período julio-diciembre).</li>
</ul>
<p>Si la fecha cae en día inhábil, el pago debe realizarse el día hábil inmediatamente anterior.</p>

<h2>¿Cómo se calcula el SAC?</h2>
<p><strong>SAC = 50% del mejor salario mensual devengado en el semestre</strong></p>
<p>Se toma el salario bruto más alto del semestre (incluidas horas extras, comisiones y adicionales remunerativos). Ejemplo: si el mejor sueldo fue $500.000 en mayo, el SAC de junio será <strong>$250.000 brutos</strong>.</p>

<h2>SAC proporcional</h2>
<p>Si no se cumplió el semestre completo: <strong>SAC proporcional = (Mejor salario × días trabajados en el semestre) / 180</strong>. Se abona en la liquidación final.</p>

<h2>SAC sobre vacaciones</h2>
<p>Cuando el trabajador sale de vacaciones, el empleador debe abonar también la parte proporcional del SAC correspondiente a esos días: <strong>SAC vacacional = (Remuneración diaria × días de vacaciones) / 12</strong>. Es uno de los conceptos más frecuentemente omitidos en liquidaciones.</p>

<h2>¿Qué pasa si la empresa no paga el SAC?</h2>
<p>El empleador incurre en mora automática y debe intereses a la tasa activa del Banco Nación. Utilizá nuestra <strong>Calculadora de SAC/Aguinaldo</strong> para calcular el monto exacto que te corresponde en cada cuota.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-venezuela-2026",
    title: "Utilidades y Aguinaldo en Venezuela 2026: Cálculo según la LOTTT",
    description: "Conoce cómo se calculan las utilidades en Venezuela 2026 según el Art. 131 de la LOTTT: mínimo 15 días, máximo 4 meses, fecha de pago en diciembre y el bono vacacional adicional.",
    country: "venezuela",
    countryName: "Venezuela",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "venezuela", slug: "calculadora-utilidades", name: "Calculadora de Utilidades" },
    ],
    content: `
<h2>¿Qué son las utilidades en Venezuela?</h2>
<p>En Venezuela, el equivalente al aguinaldo se denomina <strong>utilidades</strong> o participación en los beneficios. Están reguladas por el <strong>Artículo 131 de la LOTTT</strong>. Su monto depende de los beneficios obtenidos por la empresa, aunque la ley establece un <strong>mínimo garantizado</strong> independientemente de las ganancias.</p>

<h2>¿Cuánto se paga en utilidades?</h2>
<ul>
  <li><strong>Mínimo garantizado:</strong> 15 días de salario al año, sin importar si la empresa tuvo ganancias.</li>
  <li><strong>Máximo legal:</strong> 4 meses de salario (120 días).</li>
  <li>En la práctica, muchas empresas pagan entre 30 y 60 días; los 30 días son el monto más habitual en el sector privado.</li>
</ul>

<h2>¿Cuándo se pagan en 2026?</h2>
<p>Deben pagarse dentro de los <strong>primeros 3 meses del siguiente ejercicio económico</strong>. Para empresas con ejercicio que cierra el 31 de diciembre, el plazo máximo es el <strong>31 de marzo de 2027</strong>. La mayoría de los empleadores paga en <strong>diciembre</strong>.</p>

<h2>Fórmula de cálculo</h2>
<p><strong>Utilidades = Número de días de utilidades × Salario diario normal</strong></p>
<p>El salario diario se calcula dividiendo el salario mensual entre 30. Se incluyen comisiones, primas y horas extras habituales. Si el trabajador no completó el año, las utilidades se pagan de forma proporcional a los meses trabajados.</p>

<h2>Bono vacacional</h2>
<p>Además de las utilidades, la LOTTT establece el <strong>bono vacacional</strong>: mínimo 15 días adicionales de salario el primer año, con 1 día adicional por cada año subsiguiente hasta 30 días. Se paga junto con las vacaciones anuales, no en diciembre.</p>
<p>Usa nuestra <strong>Calculadora de Utilidades</strong> para determinar exactamente cuánto debes recibir.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-costa-rica-2026",
    title: "Aguinaldo en Costa Rica 2026: Pago en Diciembre y Cálculo Proporcional",
    description: "Todo sobre el aguinaldo en Costa Rica 2026: equivale a un mes de salario, se paga entre el 1 y 20 de diciembre según el Art. 228 del Código de Trabajo, con cálculo proporcional para trabajos parciales.",
    country: "costa-rica",
    countryName: "Costa Rica",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "costa-rica", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>¿Qué es el aguinaldo en Costa Rica?</h2>
<p>El <strong>aguinaldo</strong> es una prestación económica obligatoria contemplada en el <strong>Artículo 228 del Código de Trabajo</strong>. Representa un pago equivalente a <strong>un doceavo del total de salarios devengados en los doce meses anteriores al 30 de noviembre</strong>. En términos prácticos, equivale aproximadamente a un mes de salario. Es un derecho irrenunciable para todo trabajador en relación de dependencia.</p>

<h2>¿Cuándo se paga en 2026?</h2>
<p>El aguinaldo debe pagarse entre el <strong>1 de diciembre y el 20 de diciembre de 2026</strong>. El empleador que no cumpla puede ser denunciado ante el Ministerio de Trabajo y obligado a pagar el aguinaldo más intereses de mora.</p>

<h2>Fórmula oficial de cálculo</h2>
<p><strong>Aguinaldo = Suma total de salarios del período (1 dic 2025 al 30 nov 2026) / 12</strong></p>
<p>Se incluyen: salario base, horas extraordinarias regulares, comisiones y pluses salariales permanentes. No se incluyen viáticos ni pagos no salariales.</p>

<h2>Aguinaldo proporcional</h2>
<p>Si el trabajador ingresó después del 1 de diciembre del año anterior o su contrato terminó antes del pago, tiene derecho a aguinaldo proporcional. El cálculo es igual, pero la suma corresponde solo a los meses efectivamente trabajados. En caso de despido o renuncia antes de diciembre, el aguinaldo proporcional se incluye en la liquidación final.</p>

<h2>Consecuencias del no pago</h2>
<p>El incumplimiento constituye una falta grave. El trabajador puede presentar denuncia ante la Inspección del Trabajo. En casos extremos, puede invocar el despido indirecto conforme al Art. 83 del Código de Trabajo.</p>
<p>Utiliza nuestra <strong>Calculadora de Aguinaldo</strong> para conocer exactamente el monto que deberías recibir en diciembre.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-bolivia-2026",
    title: "Aguinaldo en Bolivia 2026: Navidad y Posible Segundo Aguinaldo",
    description: "Guía completa del aguinaldo boliviano 2026: equivale a un salario mensual, se paga antes del 20 de diciembre. Conoce las condiciones para el segundo aguinaldo según el crecimiento del PIB.",
    country: "bolivia",
    countryName: "Bolivia",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "bolivia", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>¿Qué es el aguinaldo de Navidad en Bolivia?</h2>
<p>El <strong>Aguinaldo de Navidad</strong> es una prestación social obligatoria reconocida en el <strong>Decreto Supremo N.° 3161</strong>. Equivale a <strong>un salario mensual completo</strong> y aplica tanto al sector público como al privado. Es un derecho irrenunciable.</p>
<p>Bolivia es uno de los pocos países con la posibilidad legal de un <em>segundo aguinaldo</em>, lo que lo convierte en uno de los sistemas de beneficios más generosos de la región cuando se cumplen las condiciones macroeconómicas.</p>

<h2>¿Cuándo se paga en 2026?</h2>
<p>El aguinaldo de Navidad debe pagarse <strong>antes del 20 de diciembre de 2026</strong>. El incumplimiento genera una multa equivalente al doble del monto adeudado más intereses de mora.</p>

<h2>Fórmula de cálculo</h2>
<p><strong>Aguinaldo = Salario mensual promedio de los últimos tres meses</strong></p>
<p>Se incluyen salario básico, bono de antigüedad y beneficios permanentes y remunerativos. Para salarios variables se promedian los últimos tres meses.</p>

<h2>Aguinaldo proporcional</h2>
<p>Si el trabajador no completó el año: <strong>(Salario mensual × meses trabajados) / 12</strong>. Un trabajador que ingresó en julio recibirá el 50% del aguinaldo. Este monto proporcional se incluye en la liquidación final si el contrato concluye antes de diciembre.</p>

<h2>El Segundo Aguinaldo "Esfuerzo por Bolivia"</h2>
<p>Desde el <strong>Decreto Supremo N.° 1802 de 2013</strong>, existe un segundo aguinaldo condicional:</p>
<ul>
  <li>Solo se otorga si el <strong>crecimiento del PIB supera el 4,5%</strong> en el año.</li>
  <li>El Gobierno lo anuncia en noviembre.</li>
  <li>Si corresponde, debe pagarse <strong>antes del 31 de diciembre</strong>.</li>
  <li>Equivale también a un salario mensual completo.</li>
</ul>
<p>Usa nuestra <strong>Calculadora de Aguinaldo</strong> para estimar el monto que te corresponde, tanto para el aguinaldo de Navidad como para el segundo aguinaldo si el Gobierno lo declara para 2026.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-latam-cuando-se-paga-2026",
    title: "Aguinaldo en Latinoamérica 2026: Cuándo se Paga en Cada País",
    description: "Guía comparativa del aguinaldo y gratificación en 9 países de Latinoamérica en 2026: fechas de pago, nombre del beneficio, equivalencia y calculadoras disponibles.",
    country: null,
    countryName: null,
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Aguinaldo México" },
      { pais: "colombia", slug: "calculadora-prima", name: "Prima Colombia" },
      { pais: "argentina", slug: "calculadora-sac", name: "SAC Argentina" },
    ],
    content: `
<h2>El aguinaldo en Latinoamérica: un derecho con muchos nombres</h2>
<p>En prácticamente todos los países de América Latina existe alguna forma de <strong>bonificación anual o semestral</strong> para los trabajadores. Su nombre, monto, frecuencia y fecha límite varían considerablemente. Conocer las reglas del país donde trabajas es fundamental para reclamar lo que te corresponde a tiempo.</p>

<h2>Tabla comparativa: aguinaldo 2026 por país</h2>
<table>
  <tr><th>País</th><th>Nombre del beneficio</th><th>Cuándo se paga en 2026</th><th>Equivale a</th></tr>
  <tr><td><strong>México</strong></td><td>Aguinaldo</td><td>1 al 20 de diciembre</td><td>Mínimo 15 días de salario (anual)</td></tr>
  <tr><td><strong>Colombia</strong></td><td>Prima de servicios</td><td>30 de junio / 20 de diciembre</td><td>15 días de salario por semestre</td></tr>
  <tr><td><strong>Argentina</strong></td><td>SAC / Aguinaldo</td><td>30 de junio / 18 de diciembre</td><td>50% del mejor sueldo mensual semestral</td></tr>
  <tr><td><strong>Chile</strong></td><td>Gratificación</td><td>Mensual o anual (según modalidad)</td><td>25% de lo devengado con tope o 4,75 IMM mensual</td></tr>
  <tr><td><strong>Perú</strong></td><td>Gratificación</td><td>Julio (Patrias) / Diciembre (Navidad)</td><td>1 salario mensual completo por período</td></tr>
  <tr><td><strong>Ecuador</strong></td><td>Décimo Tercer y Cuarto Sueldo</td><td>Dic. (13°) / Ago. o Mar. (14°)</td><td>1/12 salarios anuales y 1 salario básico unificado</td></tr>
  <tr><td><strong>Venezuela</strong></td><td>Utilidades</td><td>Diciembre (o hasta marzo)</td><td>Mín. 15 días – máx. 4 meses de salario</td></tr>
  <tr><td><strong>Costa Rica</strong></td><td>Aguinaldo</td><td>1 al 20 de diciembre</td><td>1/12 del total de salarios del año</td></tr>
  <tr><td><strong>Bolivia</strong></td><td>Aguinaldo de Navidad</td><td>Antes del 20 de diciembre</td><td>1 salario mensual (+ 2.° si PIB supera 4,5%)</td></tr>
</table>

<h2>Países con pago semestral: Colombia y Argentina</h2>
<p>Colombia y Argentina dividen el beneficio en <strong>dos cuotas semestrales</strong>. En Colombia, la prima de servicios equivale a 15 días de salario por semestre (Art. 306 CST). En Argentina, el SAC equivale al 50% del mejor sueldo mensual del semestre (Art. 122 LCT). Ambos países pagan en junio y diciembre.</p>

<h2>Países con pago único en diciembre: México, Costa Rica y Bolivia</h2>
<p>México garantiza mínimo 15 días pagaderos antes del 20 de diciembre. Costa Rica usa la fórmula del doceavo: suma de todos los salarios del año dividida entre 12. Bolivia paga un salario mensual completo, con posibilidad de un <strong>segundo aguinaldo</strong> si el crecimiento económico supera el 4,5% anual.</p>

<h2>El caso particular de Chile y Perú</h2>
<p>En <strong>Chile</strong>, la gratificación puede pagarse mensualmente (incluida en el sueldo) o de forma anual. En <strong>Perú</strong>, las gratificaciones se pagan dos veces al año y equivalen cada una a un sueldo mensual completo, representando <strong>dos salarios adicionales anuales</strong>.</p>

<h2>Ecuador: dos sueldos adicionales con fechas distintas</h2>
<p>El <strong>Décimo Tercer Sueldo</strong> equivale al doceavo de lo devengado y se paga antes del 24 de diciembre. El <strong>Décimo Cuarto Sueldo</strong> equivale a un Salario Básico Unificado y se paga en agosto (Sierra/Oriente) o marzo (Costa/Galápagos). Los trabajadores pueden optar por recibirlos mensualmente (acumulación mensual).</p>
<p>Usa las calculadoras de nuestra plataforma para obtener el monto exacto que te corresponde según tu país y salario.</p>
    `.trim(),
  },

  // ── Checklist antes de renunciar ─────────────────────────────────────────
  {
    slug: "checklist-antes-de-renunciar-mexico",
    title: "Checklist Antes de Renunciar en México: Todo lo que Debes Hacer",
    description: "Guía paso a paso para renunciar correctamente en México: cómo calcular tu finiquito, qué documentos pedir, prestaciones pendientes y qué hacer si no te pagan.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>Calcula tu finiquito antes de renunciar</h2>
<p>Antes de entregar tu carta de renuncia, calcula a cuánto tienes derecho. Al renunciar voluntariamente en México tienes derecho a un <strong>finiquito</strong> que incluye:</p>
<ul>
  <li><strong>Aguinaldo proporcional:</strong> 15 días de salario por año, proporcional a los meses trabajados en el año en curso.</li>
  <li><strong>Vacaciones no disfrutadas</strong> según tu antigüedad, más la prima vacacional del 25%.</li>
  <li><strong>Días de salario pendientes</strong> del mes en curso.</li>
</ul>
<p>No tienes derecho a indemnización por renuncia voluntaria (eso aplica solo en despidos injustificados). Usa nuestra calculadora de finiquito para conocer tu cifra exacta antes de tomar la decisión.</p>

<h2>Cuándo presentar tu carta de renuncia</h2>
<p>En México <strong>no existe una obligación legal de dar preaviso</strong> al renunciar. Sin embargo, avisar con al menos 15 días de anticipación mantiene buenas relaciones, facilita la transición y ayuda a obtener referencias positivas. Guarda siempre una copia sellada por Recursos Humanos.</p>

<h2>Documentos que debes solicitar</h2>
<ul>
  <li><strong>Finiquito firmado:</strong> Con los conceptos pagados y ambas firmas. Nunca firmes en blanco ni sin revisar las cifras.</li>
  <li><strong>Baja del IMSS:</strong> Solicita el aviso de baja y verifica en el portal del IMSS con tu NSS.</li>
  <li><strong>Constancia de trabajo:</strong> Carta con fechas, puesto y salario para futuros empleos.</li>
  <li><strong>Carta de recomendación:</strong> No es obligatoria, pero puedes solicitarla si la relación fue positiva.</li>
</ul>

<h2>Checklist de prestaciones pendientes</h2>
<ul>
  <li><strong>AFORE:</strong> Tus ahorros no se pierden. Puedes dejarlos en tu AFORE actual o trasladarlos.</li>
  <li><strong>Fondo de ahorro:</strong> Solicita la devolución de tu parte más los rendimientos.</li>
  <li><strong>Vales de despensa:</strong> Verifica el saldo disponible en tu tarjeta.</li>
  <li><strong>PTU (Utilidades):</strong> Si renuncias antes del reparto, tienes derecho a la parte proporcional del año anterior.</li>
</ul>

<h2>Qué hacer si no te pagan el finiquito</h2>
<p>Presenta una conciliación ante el <strong>Centro Federal de Conciliación y Registro Laboral (CFCRL)</strong>. Es gratuita y obligatoria antes de ir a juicio. El plazo para reclamar prestaciones es de <em>un año</em> desde la terminación. Documenta todo: conversaciones escritas, recibos de nómina y estados de cuenta.</p>

<h2>Tip: Calcula antes de firmar</h2>
<p>Usa nuestra <strong>Calculadora de Finiquito México</strong> para obtener un estimado de lo que te corresponde. No aceptes menos de lo que marca la Ley Federal del Trabajo.</p>
    `.trim(),
  },
  {
    slug: "checklist-antes-de-renunciar-colombia",
    title: "Checklist Antes de Renunciar en Colombia: Guía Completa 2026",
    description: "Todo lo que debes verificar antes de renunciar en Colombia: cálculo de liquidación, cesantías, preaviso, documentos y transferencia de afiliaciones.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Calculadora de Cesantías" },
    ],
    content: `
<h2>Calcula tu liquidación proporcional antes de renunciar</h2>
<p>Al renunciar en Colombia tienes derecho a una <strong>liquidación de contrato</strong> con varios conceptos proporcionales:</p>
<ul>
  <li><strong>Cesantías:</strong> Un mes de salario por cada año trabajado (proporcional).</li>
  <li><strong>Intereses sobre cesantías:</strong> El 12% anual sobre el saldo acumulado.</li>
  <li><strong>Prima de servicios:</strong> 15 días de salario por semestre (proporcional si renuncias en el primer semestre).</li>
  <li><strong>Vacaciones:</strong> 15 días hábiles por año, proporcional al tiempo no disfrutado.</li>
</ul>
<p>Usa nuestra calculadora para obtener el valor exacto antes de negociar.</p>

<h2>Preaviso: ¿debes dar aviso previo?</h2>
<p>En Colombia <strong>no existe una obligación legal general de dar preaviso</strong> para contratos indefinidos. Sin embargo, tu contrato individual puede estipularlo. No dar el preaviso pactado puede dar al empleador base para descontarte los días correspondientes.</p>

<h2>Documentos a solicitar</h2>
<ul>
  <li><strong>Paz y salvo:</strong> Certifica que no tienes deudas con la empresa ni la empresa contigo.</li>
  <li><strong>Carta de trabajo / certificado laboral:</strong> Con fechas, cargo y salario. Exigido por bancos y futuros empleadores.</li>
  <li><strong>Certificado de afiliación y aportes</strong> a EPS, AFP y ARL.</li>
  <li><strong>Colilla de liquidación definitiva</strong> firmada por ambas partes.</li>
</ul>

<h2>Las cesantías: atención especial</h2>
<p>Si estás en <strong>régimen de fondo (Ley 50/1990)</strong>, el empleador deposita anualmente. Al renunciar solicitas el retiro al fondo directamente. Si el empleador no hizo los depósitos, puede ser sancionado con un día de salario por cada día de retardo. Verifica en el fondo que todos los aportes estén al día.</p>

<h2>Afiliaciones a transferir</h2>
<ul>
  <li><strong>EPS:</strong> 30 días de gracia tras la renuncia. Luego debes afiliarte como independiente.</li>
  <li><strong>AFP:</strong> Puedes mantenerla y hacer aportes voluntarios como independiente.</li>
  <li><strong>ARL:</strong> La cobertura cesa al terminar. Se restablece con el nuevo empleador.</li>
</ul>

<h2>Tip: Calcula tu liquidación antes de firmar</h2>
<p>Nunca firmes sin verificar los números. Usa nuestra <strong>Calculadora de Liquidación Colombia</strong>. Si hay discrepancias, acude al Ministerio del Trabajo para una conciliación laboral gratuita.</p>
    `.trim(),
  },
  {
    slug: "checklist-antes-de-renunciar-espana",
    title: "Checklist Antes de Renunciar en España: Lo que Debes Saber en 2026",
    description: "Guía completa para renunciar en España: finiquito, preaviso obligatorio, documentos, si puedes cobrar el paro y qué hacer con la Seguridad Social.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "espana", slug: "calculadora-paro", name: "Calculadora del Paro" },
    ],
    content: `
<h2>Calcula tu finiquito antes de presentar la renuncia</h2>
<p>Cuando presentas una <strong>baja voluntaria</strong> en España, tienes derecho a un finiquito que incluye:</p>
<ul>
  <li><strong>Vacaciones no disfrutadas</strong> generadas hasta la fecha de baja.</li>
  <li><strong>Parte proporcional de pagas extraordinarias</strong> desde el último cobro.</li>
  <li><strong>Salario del mes en curso</strong> hasta la fecha de baja.</li>
  <li>Comisiones, horas extra y otros conceptos devengados y no abonados.</li>
</ul>
<p>No hay indemnización por años de servicio en la baja voluntaria. Calcula tu finiquito antes de reunirte con RRHH para negociar con números propios.</p>

<h2>El preaviso: obligatorio y con consecuencias</h2>
<p>En España el <strong>preaviso es obligatorio</strong> según convenio colectivo. Plazos habituales:</p>
<ul>
  <li><strong>15 días</strong> para la mayoría de trabajadores.</li>
  <li><strong>1 mes</strong> para técnicos, mandos intermedios y directivos.</li>
</ul>
<p>Si no cumples el preaviso pactado, el empleador puede <strong>descontarte los días no avisados de tu finiquito</strong>. Entrega el preaviso siempre por escrito y guarda el acuse de recibo; un burofax garantiza constancia fehaciente.</p>

<h2>Documentos a solicitar</h2>
<ul>
  <li><strong>Certificado de empresa:</strong> Necesario para tramitar cualquier prestación de desempleo en el futuro.</li>
  <li><strong>Vida laboral actualizada</strong> con la baja correctamente registrada.</li>
  <li><strong>Copia del finiquito firmado</strong> con detalle de todos los conceptos.</li>
  <li>Carta de recomendación (no obligatoria pero útil).</li>
</ul>

<h2>¿Puedes cobrar el paro si renuncias voluntariamente?</h2>
<p>La respuesta general es <strong>NO</strong>. Sin embargo, hay excepciones de <em>baja voluntaria justificada</em>:</p>
<ul>
  <li>Traslado geográfico que implique cambio de residencia.</li>
  <li>Modificación sustancial de condiciones de trabajo (reducción salarial, cambio de jornada).</li>
  <li>Falta de pago reiterada del salario.</li>
  <li>Acoso laboral debidamente acreditado.</li>
</ul>
<p>En estos casos, si obtienes sentencia favorable del Juzgado de lo Social, sí tendrías derecho a la prestación.</p>

<h2>Qué hacer con la Seguridad Social</h2>
<p>Verifica que el empleador te haya dado de baja en la SS en el plazo correcto (3 días hábiles). Revisa tu vida laboral para confirmar que todos los periodos cotizados están correctamente registrados.</p>

<h2>Tip: Calcula el impacto antes de renunciar</h2>
<p>Usa nuestra <strong>Calculadora de Finiquito España</strong> para saber exactamente cuánto recibirás. Si tienes dudas sobre si tu situación podría constituir baja voluntaria justificada, consulta con el SEPE antes de tomar la decisión.</p>
    `.trim(),
  },
  {
    slug: "checklist-antes-de-renunciar-argentina",
    title: "Checklist Antes de Renunciar en Argentina: Guía Completa 2026",
    description: "Todo lo que tenés que hacer antes de renunciar en Argentina: liquidación final, preaviso, documentos del Art. 80 LCT, ANSES y si podés cobrar desempleo.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora de SAC" },
      { pais: "argentina", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
    ],
    content: `
<h2>Calculá tu liquidación final antes de renunciar</h2>
<p>Al renunciar en Argentina, el empleador debe pagarte una <strong>liquidación final</strong> que incluye:</p>
<ul>
  <li><strong>SAC proporcional:</strong> La mitad del mejor salario del semestre en curso, proporcional a los meses trabajados desde el último pago del aguinaldo.</li>
  <li><strong>Vacaciones proporcionales:</strong> Los días de vacaciones generados en el año no tomados, según antigüedad y meses trabajados.</li>
  <li><strong>Días trabajados del mes</strong> hasta la fecha de renuncia.</li>
  <li><strong>Preaviso:</strong> Si el empleador te exime del preaviso, debe pagarlo igual.</li>
</ul>
<p>No hay indemnización por antigüedad cuando la desvinculación es voluntaria.</p>

<h2>El preaviso en Argentina: plazos según antigüedad</h2>
<ul>
  <li><strong>15 días:</strong> menos de 3 meses de antigüedad (período de prueba).</li>
  <li><strong>1 mes:</strong> entre 3 meses y 5 años.</li>
  <li><strong>2 meses:</strong> más de 5 años.</li>
</ul>
<p>El preaviso debe notificarse <strong>por escrito con fecha cierta</strong> (carta documento o telegrama laboral gratuito). Si no cumplís el preaviso, el empleador puede descontar esos días de tu liquidación.</p>

<h2>¿Podés cobrar el seguro de desempleo si renunciás?</h2>
<p><strong>NO.</strong> La prestación por desempleo (Ley 24.013) solo corresponde cuando el despido es sin causa. La renuncia voluntaria la excluye expresamente. Evaluá bien tu situación financiera antes de renunciar sin tener otro trabajo asegurado.</p>

<h2>Documentos a solicitar: el Art. 80 LCT</h2>
<ul>
  <li><strong>Certificado de trabajo (Art. 80 LCT):</strong> Obligatorio. Si no lo entrega en el plazo legal, podés reclamar una indemnización equivalente a 3 veces la última remuneración mensual.</li>
  <li><strong>Certificado de remuneraciones y retenciones</strong> para la declaración de ganancias.</li>
  <li><strong>Formulario PS 6.2 de ANSES</strong> para certificar los aportes previsionales.</li>
</ul>

<h2>Verificá tu historial en ANSES</h2>
<p>Ingresá a <strong>Mi ANSES</strong> con tu CUIL para verificar que el empleador haya depositado correctamente las contribuciones de los últimos meses. Los períodos sin aportes pueden regularizarse voluntariamente.</p>

<h2>Tip: Calculá tus conceptos antes de negociar</h2>
<p>Usá nuestra <strong>Calculadora de SAC</strong> y la <strong>Calculadora de Vacaciones Argentina</strong>. Podés firmar "en disconformidad" si los montos no son correctos, sin perder tu derecho a reclamar.</p>
    `.trim(),
  },
  {
    slug: "checklist-antes-de-renunciar-chile",
    title: "Checklist Antes de Renunciar en Chile: Todo lo que Debes Saber en 2026",
    description: "Guía completa para renunciar en Chile: finiquito notariado, aviso previo de 30 días, seguro de cesantía, documentos AFP y qué hacer paso a paso.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "chile", slug: "calculadora-afp", name: "Calculadora AFP" },
    ],
    content: `
<h2>Calcula tu finiquito antes de renunciar</h2>
<p>En Chile, al renunciar voluntariamente tienes derecho a un finiquito con:</p>
<ul>
  <li><strong>Feriado proporcional:</strong> Días de vacaciones devengados y no tomados en el año en curso.</li>
  <li><strong>Gratificación proporcional:</strong> Si la empresa paga gratificación anual, recibes la parte proporcional al tiempo trabajado.</li>
  <li><strong>Remuneración del período trabajado</strong> hasta la fecha de término.</li>
  <li><strong>Indemnización sustitutiva del aviso previo:</strong> Si el empleador decide que no trabajes los 30 días, debe pagarte el equivalente.</li>
</ul>

<h2>El aviso previo: 30 días</h2>
<p>El Código del Trabajo establece que debes dar <strong>30 días de aviso previo</strong>, por escrito. Si no los das, el empleador puede descontar los días no avisados del finiquito. En la práctica, muchos empleadores aceptan períodos menores por mutuo acuerdo.</p>

<h2>¿Puedes cobrar el seguro de cesantía si renuncias?</h2>
<p>Sí, pero con restricciones:</p>
<ul>
  <li><strong>Cuenta Individual (AFC):</strong> Puedes retirar los fondos acumulados. Requiere mínimo 12 cotizaciones.</li>
  <li><strong>Fondo Solidario:</strong> NO está disponible para renuncias voluntarias.</li>
</ul>
<p>Tramita el beneficio directamente con la <strong>AFC Chile</strong>.</p>

<h2>Documentos a solicitar</h2>
<ul>
  <li><strong>Finiquito notariado o ante inspector del trabajo:</strong> En Chile, el finiquito debe ratificarse ante notario público o Inspector del Trabajo para tener plena validez.</li>
  <li><strong>Certificado de AFP</strong> con historial de cotizaciones (verifica que los últimos meses estén depositados).</li>
  <li><strong>Certificado de salud</strong> (FONASA o ISAPRE).</li>
  <li><strong>Certificado de AFC</strong> con historial del seguro de cesantía.</li>
</ul>

<h2>La importancia del finiquito notariado</h2>
<p>Una vez firmado ante ministro de fe, el empleador queda liberado de las obligaciones incluidas en el finiquito. Por eso debes revisarlo minuciosamente antes de firmar. Si hay discrepancias, firma "con reserva de derechos". El plazo para reclamar diferencias es de <strong>6 meses</strong> desde la firma. La Inspección del Trabajo puede revisarlo de forma gratuita.</p>

<h2>Tip: Calcula antes de negociar</h2>
<p>Usa nuestra <strong>Calculadora de Finiquito Chile</strong> y la <strong>Calculadora AFP</strong> para estimar cuánto tienes acumulado en tu cuenta individual del seguro de cesantía. Con estos números, estarás en mejor posición al revisar el finiquito.</p>
    `.trim(),
  },

  // ── Tabla salarios mínimos LATAM ─────────────────────────────────────────
  {
    slug: "salario-minimo-america-latina-2026",
    title: "Salario Mínimo en América Latina 2026: Tabla Comparativa de Todos los Países",
    description: "Tabla actualizada del salario mínimo en los 10 países de habla hispana: México, Colombia, España, Argentina, Chile, Perú, Ecuador, Venezuela, Costa Rica y Bolivia. Comparativa en dólares USD.",
    country: null,
    countryName: null,
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "mexico", slug: "salario-minimo", name: "Salario Mínimo México" },
      { pais: "colombia", slug: "salario-minimo", name: "Salario Mínimo Colombia" },
      { pais: "espana", slug: "salario-minimo", name: "Salario Mínimo España" },
    ],
    content: `
<h2>¿Por qué los salarios mínimos varían tanto en la región?</h2>
<p>El salario mínimo es uno de los indicadores laborales más importantes de cualquier economía, pero su comparación entre países es más compleja de lo que parece. En América Latina y España, las diferencias son abismales: desde los <strong>~$130 USD mensuales</strong> de Venezuela hasta los <strong>~$1,290 USD</strong> de España. Estas diferencias responden a: el nivel de desarrollo económico de cada país, la inflación y estabilidad monetaria, la productividad laboral, la presión sindical, y el costo de vida local.</p>

<h2>Tabla de salarios mínimos 2026</h2>
<table>
  <tr><th>País</th><th>Salario Mínimo Mensual</th><th>Moneda</th><th>Equivalente USD aprox.</th></tr>
  <tr><td><strong>España</strong></td><td>1,184</td><td>EUR (€)</td><td>~$1,290 USD</td></tr>
  <tr><td><strong>Costa Rica</strong></td><td>395,000</td><td>CRC (₡)</td><td>~$760 USD (varía por categoría)</td></tr>
  <tr><td><strong>Argentina</strong></td><td>~820,000</td><td>ARS ($)</td><td>~$780 USD (tipo oficial)*</td></tr>
  <tr><td><strong>Chile</strong></td><td>500,000</td><td>CLP ($)</td><td>~$530 USD</td></tr>
  <tr><td><strong>Ecuador</strong></td><td>460</td><td>USD ($)</td><td>$460 USD</td></tr>
  <tr><td><strong>Bolivia</strong></td><td>2,500</td><td>BOB (Bs.)</td><td>~$360 USD</td></tr>
  <tr><td><strong>Colombia</strong></td><td>1,423,500</td><td>COP ($)</td><td>~$345 USD</td></tr>
  <tr><td><strong>Perú</strong></td><td>1,130</td><td>PEN (S/)</td><td>~$295 USD</td></tr>
  <tr><td><strong>México</strong></td><td>~2,900 (general)</td><td>MXN ($)</td><td>~$145 USD</td></tr>
  <tr><td><strong>Venezuela</strong></td><td>Variable (Bs.)</td><td>VES (Bs.)</td><td>~$130 USD (referencial)**</td></tr>
</table>
<p><em>*Tipo de cambio oficial argentino. Al tipo de cambio paralelo, el equivalente puede ser considerablemente menor.</em></p>
<p><em>**Cifra referencial sujeta a alta volatilidad. Ver nota sobre Venezuela abajo.</em></p>
<p><em>Nota México: el salario mínimo general se fija por día ($278 MXN/día para 2026). En la zona libre de la Frontera Norte el salario es considerablemente mayor.</em></p>

<h2>Nota especial: Argentina y el tipo de cambio dual</h2>
<p>Argentina presenta una situación única por la <strong>brecha cambiaria</strong> entre el tipo oficial y el paralelo ("dólar blue"). Al tipo oficial el salario mínimo ronda $780 USD; al tipo paralelo puede representar menos de la mitad. La inflación acumulada erosiona constantemente el poder adquisitivo real, independientemente del tipo de cambio utilizado.</p>

<h2>Nota especial: Venezuela y la hiperinflación</h2>
<p>El salario mínimo venezolano en bolívares se actualiza con frecuencia irregular y su equivalente en dólares fluctúa semana a semana. En la práctica, gran parte de la economía opera en dólares de facto, y los salarios reales del sector privado suelen estar por encima del mínimo oficial.</p>

<h2>Salario mínimo vs. costo de vida</h2>
<p>Un salario más alto en dólares no siempre significa mejor calidad de vida. <strong>España</strong> lidera en términos absolutos con acceso a servicios públicos que complementan el ingreso. <strong>Ecuador</strong> destaca por la estabilidad del dólar y costos moderados. <strong>Chile</strong> tiene el costo de vida más alto de Sudamérica, por lo que sus $530 USD se consumen rápidamente en Santiago. Los países con mayor dificultad para que el salario mínimo cubra la canasta básica son Venezuela, Bolivia y México (zonas no fronterizas).</p>
<p>Visita las páginas de salario mínimo de cada país en nuestra plataforma para consultar el valor actualizado y su evolución histórica.</p>
    `.trim(),
  },

  // ── Derechos laborales que no sabías ─────────────────────────────────────
  {
    slug: "derechos-laborales-que-no-sabias-mexico",
    title: "10 derechos laborales en México que probablemente no sabías que tenías",
    description: "¿Sabías que tienes derecho a una silla en tu lugar de trabajo? Estos son los derechos laborales más ignorados de la Ley Federal del Trabajo en México.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<p>La Ley Federal del Trabajo mexicana tiene más de 1,000 artículos. No es exactamente lectura de playa. Y justo por eso, la mayoría de los trabajadores no tiene idea de los derechos que ya están ahí, escritos en blanco y negro, esperando a ser usados. Aquí van 10 de los más sorprendentes —y más ignorados.</p>

<h2>1. Tienes derecho a una silla (en serio)</h2>
<p>El <strong>Artículo 132 de la LFT</strong> obliga al patrón a tener sillas o asientos disponibles para los trabajadores. Si pasas horas de pie innecesariamente, tu empleador podría estar violando la ley.</p>

<h2>2. Trabajar en domingo vale más: la prima dominical</h2>
<p>Si te toca trabajar el domingo, tienes derecho a un <strong>25% adicional sobre tu salario ordinario</strong>, conocido como prima dominical (Art. 71 LFT). No es opcional ni un favor del patrón.</p>

<h2>3. Lactancia: dos pausas pagadas al día</h2>
<p>Las madres trabajadoras tienen derecho a <strong>dos períodos de 30 minutos</strong> durante la jornada para amamantar (Art. 170 LFT). Estos tiempos son pagados y no pueden descontarse del salario.</p>

<h2>4. Un día de descanso obligatorio por cada seis trabajados</h2>
<p>Por cada seis días que trabajes, tienes derecho a <strong>un día completo de descanso con goce de sueldo</strong> (Art. 69 LFT). Se paga aunque no hayas trabajado horas extra.</p>

<h2>5. Uniformes y herramientas: cuenta del patrón</h2>
<p>El <strong>Artículo 132, fracción III de la LFT</strong> establece que es obligación del patrón proporcionar los instrumentos, herramientas y materiales necesarios. Si pagas de tu bolsillo lo que es responsabilidad del empleador, puedes reclamar el reembolso.</p>

<h2>6. Capacitación pagada, dentro del horario laboral</h2>
<p>Tu empleador tiene la obligación de capacitarte (Art. 153-A LFT) <strong>dentro del horario de trabajo y con goce de sueldo</strong>. Si te piden cursos en tu tiempo libre sin pago, están incumpliendo la ley.</p>

<h2>7. No pueden despedirte por enfermedad (en los primeros meses)</h2>
<p>Si te enfermas, el <strong>Artículo 42 de la LFT</strong> protege tu empleo durante los primeros tres meses de incapacidad por enfermedad general. Tu contrato queda suspendido, no rescindido.</p>

<h2>8. Utilidades: el 10% de las ganancias de la empresa es tuyo</h2>
<p>El <strong>reparto de utilidades (PTU)</strong> obliga a las empresas a distribuir el <strong>10% de sus ganancias anuales</strong> entre todos los trabajadores (Art. 117 LFT). Se paga dentro de los 60 días siguientes a la declaración anual. Muchos no lo saben y nunca lo reclaman.</p>

<h2>9. Prima de antigüedad, aunque renuncies</h2>
<p>Si tienes <strong>15 o más años en la misma empresa</strong>, tienes derecho a prima de antigüedad aunque hayas renunciado tú mismo (Art. 162 LFT): 12 días de salario por año trabajado, tope de dos veces el salario mínimo. No es solo para despidos.</p>

<h2>10. El escalafón ciego: la antigüedad manda en los ascensos</h2>
<p>Cuando hay una vacante y dos trabajadores tienen condiciones similares, <strong>la antigüedad define quién asciende primero</strong>. Si llevas años esperando un ascenso que le dieron a alguien de menor antigüedad sin justificación objetiva, tienes base para cuestionar esa decisión.</p>

<p>Ahora que ya conoces tus derechos, asegúrate también de entender lo que te corresponde al terminar la relación laboral. Usa nuestra <strong>Calculadora de Finiquito</strong> o la <strong>Calculadora de Liquidación</strong> para saber exactamente cuánto deberías recibir.</p>
    `.trim(),
  },
  {
    slug: "derechos-laborales-que-no-sabias-colombia",
    title: "10 derechos laborales en Colombia que probablemente no sabías que tenías",
    description: "La mayoría de trabajadores colombianos desconoce estos derechos que el Código Sustantivo del Trabajo les garantiza. ¿Estás recibiendo todo lo que te corresponde?",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "horas-extra", name: "Calculadora Horas Extra" },
    ],
    content: `
<p>El <strong>Código Sustantivo del Trabajo (CST)</strong> colombiano lleva décadas acumulando derechos que los trabajadores deberían conocer de memoria. El problema es que nadie los enseña en el colegio, en la universidad, ni —sorpresa— en la empresa donde los deberían aplicar. Estos son 10 de los derechos más desconocidos y más valiosos que tenés como trabajador en Colombia.</p>

<h2>1. Dotación tres veces al año: ropa y zapatos por cuenta de la empresa</h2>
<p>Si tu salario es igual o menor a <strong>dos SMLMV</strong>, tu empleador está obligado a darte dotación de ropa de labor y calzado <strong>tres veces al año</strong>: en abril, agosto y diciembre (Art. 230 CST). No puede descontarse del salario ni reemplazarse con dinero.</p>

<h2>2. Prima de servicios: plata que te deben aunque renuncies</h2>
<p>Dos veces al año tu empleador debe pagarte una <strong>prima equivalente a 15 días de salario por semestre</strong>. Si renuncias antes, te corresponde la parte proporcional. Muchos trabajadores creen que la pierden al renunciar. No es así.</p>

<h2>3. Auxilio de transporte incluye más de lo que parece</h2>
<p>El auxilio de transporte aplica para salarios hasta <strong>dos SMLMV</strong>. Lo que poca gente sabe: <strong>este auxilio se incluye en la base de cálculo de las cesantías</strong>, haciendo tu liquidación final mayor de lo esperado.</p>

<h2>4. Licencia de maternidad: 18 semanas pagadas al 100%</h2>
<p>Colombia tiene una de las licencias de maternidad más generosas de la región. El empleador no puede presionarte para que regreses antes, y durante ese período tienes protección especial contra el despido.</p>

<h2>5. Licencia de paternidad: y va en aumento</h2>
<p>Los padres tienen derecho a <strong>2 semanas de licencia pagadas por la EPS</strong>. Con las reformas laborales en curso, este período está en proceso de ampliación. Si tu empleador solo te da 3 o 4 días "por favor", no está cumpliendo la ley.</p>

<h2>6. Recargo nocturno: trabajar de noche vale más</h2>
<p>Cualquier hora trabajada entre las <strong>9:00 p.m. y las 6:00 a.m.</strong> tiene un recargo del <strong>35%</strong> sobre el valor de la hora ordinaria. Si trabajas turnos nocturnos y no ves ese recargo en tu colilla de pago, revisa tu liquidación.</p>

<h2>7. Horas extra: los recargos que casi nadie calcula bien</h2>
<ul>
  <li><strong>Hora extra diurna:</strong> 25% adicional.</li>
  <li><strong>Hora extra nocturna:</strong> 75% adicional.</li>
  <li><strong>Hora extra en dominical o festivo:</strong> 100% adicional.</li>
</ul>
<p>Los recargos se acumulan. Si trabajas horas extra durante la noche de un domingo festivo, usa una calculadora para verificar que te estén pagando correctamente.</p>

<h2>8. Acoso laboral: tienes dónde denunciar</h2>
<p>La <strong>Ley 1010 de 2006</strong> tipifica el acoso laboral. Conductas como humillaciones, sobrecarga malintencionada o amenazas repetidas son denunciables ante el Ministerio del Trabajo y los comités de convivencia laboral. No tienes que aguantarlo en silencio.</p>

<h2>9. Derecho a conocer tu hoja de vida ante el empleador</h2>
<p>Tienes derecho a saber qué información tiene tu empleador sobre ti, incluidas evaluaciones de desempeño y referencias registradas. Es tu derecho al <em>habeas data</em> laboral.</p>

<h2>10. Cesantías parciales: para educación y vivienda sin perder el trabajo</h2>
<p>Puedes solicitar <strong>retiros parciales de cesantías</strong> para pagar educación (tuya, de tu cónyuge o de tus hijos) o para mejoras en vivienda. El fondo los desembolsa directamente y tu empleador no puede negarse.</p>

<p>Usa nuestra <strong>Calculadora de Liquidación</strong> o la <strong>Calculadora de Horas Extra</strong> para verificar que estés recibiendo lo que la ley te garantiza.</p>
    `.trim(),
  },
  {
    slug: "derechos-laborales-que-no-sabias-espana",
    title: "10 derechos laborales en España que probablemente no sabías que tenías",
    description: "Desde el derecho a la desconexión digital hasta los permisos retribuidos poco conocidos, estos son los derechos del Estatuto de los Trabajadores que muchos empleados ignoran.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "espana", slug: "calculadora-paro", name: "Calculadora del Paro" },
    ],
    content: `
<p>El <strong>Estatuto de los Trabajadores</strong> español es uno de los marcos laborales más completos de Europa. El problema es que entre convenios colectivos, reformas laborales y el ritmo del trabajo diario, hay derechos que se quedan en el papel porque nadie los reclama. Aquí van 10 de los más sorprendentes —y menos conocidos— que tienes como trabajador en España.</p>

<h2>1. Desconexión digital: no estás obligado a responder fuera de horario</h2>
<p>Desde la <strong>Ley Orgánica de Protección de Datos (LOPD) de 2018</strong>, tienes derecho a la desconexión digital fuera de tu jornada laboral. No estás obligado a responder correos, WhatsApp ni llamadas de trabajo cuando ya terminaste. Las empresas con más de 10 empleados deben tener una política interna sobre esto.</p>

<h2>2. Un día de permiso pagado por mudanza</h2>
<p>El <strong>Artículo 37.3 del Estatuto de los Trabajadores</strong> te garantiza <strong>1 día de permiso retribuido por mudanza</strong>. No hace falta justificarlo con nada. Solo avisa con antelación y ese día es tuyo, pagado.</p>

<h2>3. Permiso por boda de un familiar: también tienes derecho</h2>
<p>Si un familiar directo se casa, tienes derecho a <strong>1 día de permiso retribuido</strong>. Si la boda es en otra localidad y debes desplazarte, ese permiso puede ampliarse. Consulta tu convenio colectivo: muchos mejoran lo que establece la ley general.</p>

<h2>4. Reducción de jornada para cuidar a un familiar</h2>
<p>El <strong>Artículo 37.6 del ET</strong> te permite solicitar una reducción de jornada de entre un octavo y la mitad para cuidar a un familiar de hasta segundo grado que no pueda valerse por sí mismo. La reducción lleva aparejada una reducción proporcional del salario, pero el derecho a pedirla no puede ser denegado arbitrariamente.</p>

<h2>5. Adaptación de jornada para conciliar: el empresario debe negociar</h2>
<p>El <strong>Artículo 34.8 del ET</strong> reconoce el derecho a solicitar adaptaciones de la jornada para conciliación familiar. El empresario no puede simplemente decir que no: debe negociar de buena fe durante 30 días. Si no hay acuerdo, puede acudirse a la jurisdicción social.</p>

<h2>6. Registro de jornada: tu empresa tiene la obligación legal</h2>
<p>Desde el <strong>Real Decreto-Ley 8/2019</strong>, todas las empresas están obligadas a registrar diariamente la jornada de cada trabajador. Los registros deben conservarse cuatro años y tienes derecho a acceder a ellos. Si tu empresa no lo lleva, puedes reclamar horas extra no pagadas.</p>

<h2>7. Las vacaciones no caducan si estás de baja médica</h2>
<p>Si estás de <strong>baja médica prolongada</strong> y no puedes disfrutar tus vacaciones, <em>no las pierdes</em>. El Tribunal Supremo y el Tribunal de Justicia de la UE lo han confirmado: las vacaciones no disfrutadas por incapacidad temporal pueden recuperarse en el siguiente año natural.</p>

<h2>8. Despido durante el embarazo: automáticamente nulo</h2>
<p>Si una trabajadora es despedida durante el embarazo, ese despido es <strong>nulo de pleno derecho</strong>, aunque la empresa no supiera del embarazo. La nulidad implica readmisión inmediata y pago de todos los salarios dejados de percibir.</p>

<h2>9. Pausa de 15 minutos si trabajas más de 6 horas</h2>
<p>En muchos <strong>convenios colectivos</strong> se reconoce el derecho a una pausa de 15 minutos cuando la jornada supera las 6 horas continuas. Revisa el tuyo: ese descanso puede ser tuyo y pagado.</p>

<h2>10. Teletrabajo: puedes solicitarlo vinculado a la adaptación de jornada</h2>
<p>Aunque el teletrabajo no es un derecho universal, <strong>sí puedes solicitarlo como parte de una adaptación de jornada</strong> por motivos de conciliación (Art. 34.8 ET). La empresa debe valorar la petición y, si la deniega, justificarlo.</p>

<p>Conocer tus derechos es el primer paso. Calcula tu <strong>finiquito</strong> o infórmate sobre la <strong>prestación por desempleo</strong> que podrías recibir con nuestras calculadoras.</p>
    `.trim(),
  },
  {
    slug: "derechos-laborales-que-no-sabias-argentina",
    title: "10 derechos laborales en Argentina que probablemente no sabías que tenías",
    description: "La LCT argentina esconde derechos que muchos trabajadores desconocen. Desde el preaviso hasta el certificado de trabajo obligatorio, aquí están los más ignorados.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora de SAC" },
    ],
    content: `
<p>La <strong>Ley de Contrato de Trabajo (LCT)</strong> argentina es una de las legislaciones laborales más protectoras de América Latina. Y sin embargo, muchísimos trabajadores no conocen ni la mitad de los derechos que tienen reconocidos. Acá te contamos 10 que probablemente te van a sorprender.</p>

<h2>1. El certificado de trabajo no es un favor: es una obligación legal</h2>
<p>Cuando termina una relación laboral, tu empleador está <strong>obligado</strong> a entregarte el certificado de trabajo (Art. 80 LCT). Si no lo hace en el plazo legal, incurre en una <strong>multa equivalente a tres veces la última remuneración mensual</strong>. No tenés que pedirlo de rodillas: es un derecho con consecuencias económicas.</p>

<h2>2. El período de prueba: te protege a vos también</h2>
<p>Durante los primeros <strong>tres meses</strong>, cualquiera de las dos partes puede terminar el contrato sin pagar indemnización (Art. 92 bis LCT). Todos saben que la empresa puede echarte. Lo que pocos saben: <em>vos también podés irte sin preaviso ni costos</em>.</p>

<h2>3. Licencia por examen: hasta 10 días al año</h2>
<p>Si estás estudiando —secundario, terciario, universitario— tenés derecho a <strong>2 días de licencia paga por examen</strong>, hasta <strong>10 días por año calendario</strong> (Art. 158 LCT). Solo tenés que presentar el comprobante de examen.</p>

<h2>4. Doble indemnización: cuándo y por qué existe</h2>
<p>En ciertos momentos de crisis económica, el Poder Ejecutivo puede decretar <strong>la duplicación de las indemnizaciones por despido sin justa causa</strong> mediante DNU. Si fuiste despedido durante un período en que estaba vigente y no la aplicaron, podés reclamarla retroactivamente.</p>

<h2>5. El SAC también se calcula sobre las vacaciones</h2>
<p>El <strong>aguinaldo (SAC)</strong> también debe calcularse sobre los días de vacaciones, ya que se consideran tiempo trabajado. Si tu empleador nunca incluyó esto en tu liquidación, podría deberte diferencias.</p>

<h2>6. Licencia por matrimonio: 10 días corridos</h2>
<p>¿Te casás? Tenés derecho a <strong>10 días corridos de licencia paga</strong> (Art. 158 LCT). No son hábiles, son corridos. La licencia arranca desde el día de la boda o hasta tres días antes, a tu elección.</p>

<h2>7. Período de excedencia: más tiempo después de la maternidad</h2>
<p>Luego de la licencia por maternidad, la trabajadora puede optar por un <strong>período de excedencia de hasta 6 meses adicionales</strong> sin goce de sueldo pero con reserva del puesto. Al volver, la empresa debe reincorporarla en las mismas condiciones.</p>

<h2>8. El empleador tiene que pagarte al día siguiente del despido</h2>
<p>La LCT establece que el pago debe realizarse al <strong>día hábil siguiente</strong> a la extinción del contrato. Si no lo hace en término, se generan multas e intereses. No es normal esperar semanas para cobrar tu liquidación.</p>

<h2>9. Ius variandi: la empresa no puede cambiar tus condiciones a su antojo</h2>
<p>Tu empleador no puede cambiar unilateralmente tu <strong>cargo, horario, lugar de trabajo o remuneración</strong> de manera que te cause perjuicio (Art. 66 LCT). Si lo hace, podés considerarlo un despido indirecto y reclamar indemnización.</p>

<h2>10. Tarea insalubre: menos horas y más protección</h2>
<p>Si trabajás en un ambiente declarado insalubre, tu <strong>jornada máxima es de 6 horas</strong> y no podés trabajar horas extra. Los menores de 18 años no pueden realizar tareas insalubres bajo ningún concepto.</p>

<p>Tu liquidación puede ser más compleja de lo que parece. Usá nuestra <strong>Calculadora de Indemnización</strong> o la <strong>Calculadora de SAC</strong> para verificar que los montos sean correctos.</p>
    `.trim(),
  },
  {
    slug: "derechos-laborales-que-no-sabias-chile",
    title: "10 derechos laborales en Chile que probablemente no sabías que tenías",
    description: "El Código del Trabajo chileno garantiza derechos que la mayoría de trabajadores desconoce. Desde el fuero maternal hasta el seguro de cesantía, conoce lo que te corresponde.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "chile", slug: "calculadora-afp", name: "Calculadora AFP" },
    ],
    content: `
<p>El <strong>Código del Trabajo</strong> chileno tiene más protecciones de las que la mayoría de los trabajadores imagina. Entre la urgencia del día a día y la falta de educación laboral formal, esos derechos simplemente no se ejercen. Acá te presentamos 10 que probablemente no conocías.</p>

<h2>1. Fuero maternal: el despido necesita autorización del tribunal</h2>
<p>Desde el momento en que se confirma el embarazo <strong>hasta un año después del término del postnatal</strong>, ninguna trabajadora puede ser despedida sin que el empleador obtenga previamente autorización judicial. Aplica incluso si el empleador no sabía del embarazo. El despido sin autorización es nulo.</p>

<h2>2. Sala cuna: derecho que muchas trabajadoras no reclaman</h2>
<p>Las empresas con <strong>20 o más mujeres de cualquier edad</strong> están obligadas a mantener sala cuna o pagar el costo de una sala cuna externa para hijos menores de 2 años. Este beneficio también aplica para padres viudos o con tuición del menor.</p>

<h2>3. Seguro de cesantía AFC: también se activa si renuncias</h2>
<p>Al renunciar voluntariamente, igual puedes acceder a los fondos acumulados en tu <strong>Cuenta Individual de la AFC</strong>. El Fondo Solidario NO está disponible en renuncias, pero tu cuenta individual sí. No dejes ese dinero olvidado.</p>

<h2>4. Feriado progresivo: más vacaciones por más años de trabajo</h2>
<p>Desde los <strong>10 años trabajados</strong> (en el mismo empleador o sumando al menos 3 en el actual), tienes derecho a <strong>1 día adicional de vacaciones por cada 3 años que excedan esos 10</strong>. Muchos empleadores no lo mencionan espontáneamente.</p>

<h2>5. Semana corrida: si tu sueldo tiene parte variable, te afecta</h2>
<p>Si parte de tu remuneración depende del día trabajado (comisiones diarias, tratos), tienes derecho a que los días de descanso semanal se paguen igualmente, calculados en base al promedio de los días laborables. Es uno de los conceptos más mal aplicados en liquidaciones.</p>

<h2>6. La hora de colación larga no es tuya: es de la empresa</h2>
<p>Si en la práctica no puedes salir ni desconectarte durante la colación, ese tiempo debería contarse como jornada y tu empleador podría estar estirando ilegalmente tu horario.</p>

<h2>7. Sindicalizarse: no necesitas permiso de nadie</h2>
<p>Todo trabajador tiene el derecho <strong>irrenunciable</strong> de afiliarse a un sindicato sin que el empleador pueda oponerse ni tomar represalias. Si tu empleador ha presionado para desalentarlo, eso puede constituir una <strong>práctica antisindical</strong> denunciable ante la Dirección del Trabajo.</p>

<h2>8. Licencia médica vigente: protección contra el despido</h2>
<p>Durante el período en que tienes una <strong>licencia médica válida y autorizada</strong>, tu empleador no puede despedirte. Si lo intenta, el despido puede ser declarado nulo o improcedente. La Inspección del Trabajo puede actuar rápidamente.</p>

<h2>9. Cambio unilateral de condiciones: práctica antisindical y demandable</h2>
<p>Tu empleador no puede modificar unilateralmente aspectos esenciales del contrato como remuneración, cargo o jornada. Si los cambios te perjudican y son impuestos sin tu acuerdo, puedes invocar el <strong>despido indirecto</strong> y exigir todas las indemnizaciones correspondientes.</p>

<h2>10. El finiquito sin notario o inspector del trabajo no te obliga plenamente</h2>
<p>Un finiquito solo tiene pleno valor legal si es <strong>firmado ante notario público, inspector del trabajo u oficial del Registro Civil</strong>. Si te hicieron firmarlo informalmente, ese documento puede ser impugnado. Nunca firmes sin que sea debidamente autorizado.</p>

<p>¿Estás terminando una relación laboral? Usa nuestra <strong>Calculadora de Finiquito</strong> o la <strong>Calculadora AFP</strong> para entender exactamente lo que deberías recibir.</p>
    `.trim(),
  },
  {
    slug: "ptu-utilidades-mexico-2026",
    title: "PTU 2026: cómo calcular tus utilidades en México",
    description:
      "Guía completa sobre el reparto de utilidades (PTU) en México 2026: quiénes tienen derecho, cómo se calcula, cuándo se paga y qué hacer si tu empresa no reparte.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-01",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-ptu", name: "PTU / Utilidades" },
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Nómina Neta (Bruto a Neto)" },
    ],
    content: `
<h2>¿Qué es la PTU?</h2>
<p>La <strong>Participación de los Trabajadores en las Utilidades (PTU)</strong> es un derecho constitucional en México (Art. 123 CPEUM) que obliga a las empresas a repartir el <strong>10% de su utilidad fiscal</strong> entre sus trabajadores. Se paga una vez al año y es uno de los conceptos más importantes del calendario laboral.</p>

<h2>¿Cuándo se paga la PTU 2026?</h2>
<p>El plazo para pagar la PTU varía según el tipo de empresa:</p>
<ul>
  <li><strong>Personas morales (empresas):</strong> dentro de los <strong>60 días siguientes</strong> a la presentación de la declaración anual, generalmente entre <strong>abril y mayo</strong>.</li>
  <li><strong>Personas físicas con actividad empresarial:</strong> dentro de los <strong>60 días siguientes</strong> a su declaración, normalmente en <strong>junio</strong>.</li>
</ul>
<p>La fecha límite habitual para la mayoría de empresas es el <strong>31 de mayo</strong>.</p>

<h2>¿Quiénes tienen derecho a la PTU?</h2>
<p>Tienen derecho a PTU todos los trabajadores que hayan prestado servicios durante el ejercicio fiscal, incluyendo:</p>
<ul>
  <li>Trabajadores con contrato indefinido o temporal.</li>
  <li>Trabajadores con al menos 60 días trabajados en el año.</li>
  <li>Ex-trabajadores que laboraron ese año (aunque ya no estén en la empresa).</li>
</ul>
<p><strong>No tienen derecho a PTU:</strong> directores generales, administradores y gerentes generales; trabajadores domésticos; trabajadores eventuales con menos de 60 días.</p>

<h2>¿Cómo se calcula la PTU?</h2>
<p>La PTU total de la empresa se divide en <strong>dos partes iguales del 50% cada una</strong>:</p>
<ul>
  <li><strong>Primera mitad (50%):</strong> se reparte en partes iguales entre todos los trabajadores según los <strong>días trabajados</strong> en el año.</li>
  <li><strong>Segunda mitad (50%):</strong> se reparte proporcionalmente a los <strong>salarios percibidos</strong> durante el año.</li>
</ul>
<p>Fórmula para tu parte por días trabajados:</p>
<p><em>PTU días = (Días trabajados por ti / Total días trabajados por todos) × 50% del fondo PTU</em></p>
<p>Fórmula para tu parte por salario:</p>
<p><em>PTU salario = (Tu salario anual / Suma de salarios de todos) × 50% del fondo PTU</em></p>

<h2>¿Cuánto PTU recibirás en 2026?</h2>
<p>El monto depende directamente de la utilidad fiscal de tu empresa. Si la empresa tuvo pérdidas o utilidad cero, no hay PTU. Para estimar tu participación, usa nuestra <strong>Calculadora PTU</strong> con los datos de tu empresa.</p>

<h2>¿Mi empresa no quiere pagar la PTU?</h2>
<p>Si tu empleador se niega a pagar o no lo hace en plazo, puedes:</p>
<ul>
  <li>Presentar una queja ante la <strong>Secretaría del Trabajo y Previsión Social (STPS)</strong>.</li>
  <li>Acudir a la <strong>Procuraduría Federal de la Defensa del Trabajo (PROFEDET)</strong>, que brinda asesoría y representación legal gratuita.</li>
  <li>Demandar ante el <strong>Tribunal Federal de Conciliación y Arbitraje</strong>.</li>
</ul>
<p>El incumplimiento del reparto de PTU es una infracción grave con multas de hasta <strong>5,000 veces el salario mínimo</strong>.</p>

<h2>Tope de PTU para trabajadores de confianza</h2>
<p>Los trabajadores de <strong>confianza</strong> tienen un tope: su salario máximo para calcular PTU no puede exceder en <strong>20%</strong> al salario del trabajador sindicalizado de más alto salario, o en su defecto del trabajador de planta de mayor salario.</p>
    `.trim(),
  },
  {
    slug: "prima-servicios-colombia-2026",
    title: "Prima de Servicios Colombia 2026: Cálculo, Fecha de Pago y Derechos",
    description:
      "¿Cuánto te corresponde de prima de servicios en Colombia? 15 días de salario en junio y 15 en diciembre. Fórmula, fecha límite y qué hacer si no te la pagan. CST 2026.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-05",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-prima-servicios", name: "Prima de Servicios" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Cesantías" },
    ],
    content: `
<h2>¿Qué es la prima de servicios?</h2>
<p>La <strong>prima de servicios</strong> es un beneficio laboral obligatorio en Colombia, equivalente a <strong>un salario mensual por año trabajado</strong>, pagado en dos cuotas iguales. Está regulada por el artículo 306 del Código Sustantivo del Trabajo (CST).</p>

<h2>¿Cuándo se paga la prima de servicios 2026?</h2>
<p>El pago se realiza en dos momentos del año:</p>
<ul>
  <li><strong>Primera cuota:</strong> a más tardar el <strong>30 de junio</strong> (corresponde al primer semestre: 1 enero – 30 junio).</li>
  <li><strong>Segunda cuota:</strong> a más tardar el <strong>20 de diciembre</strong> (corresponde al segundo semestre: 1 julio – 31 diciembre).</li>
</ul>

<h2>¿Cuánto es la prima de servicios?</h2>
<p>Equivale a <strong>15 días de salario por semestre</strong> completo. Si no trabajaste el semestre completo, se paga de forma proporcional a los días trabajados.</p>
<p><em>Prima = (Salario mensual × Días trabajados en el semestre) / 360</em></p>
<p><strong>Ejemplo:</strong> Si ganas $2.000.000 COP y trabajaste 90 días en el semestre:</p>
<p><em>Prima = ($2.000.000 × 90) / 360 = $500.000 COP</em></p>

<h2>¿Qué salario se toma en cuenta?</h2>
<p>Para calcular la prima se considera el <strong>salario ordinario</strong>, incluyendo:</p>
<ul>
  <li>Salario básico mensual.</li>
  <li>Horas extra y recargos nocturnos (si son habituales).</li>
  <li>Comisiones y auxilio de transporte (si aplica).</li>
</ul>
<p>El salario integral (más de 10 SMMLV) tiene un tratamiento diferente: la prima se calcula sobre el <strong>70% del salario integral</strong>.</p>

<h2>¿Quiénes tienen derecho a la prima?</h2>
<p>Todos los trabajadores vinculados mediante contrato de trabajo, independientemente de:</p>
<ul>
  <li>Tipo de contrato (fijo, indefinido, obra o labor).</li>
  <li>Tiempo trabajado (incluso si llevas solo días en la empresa).</li>
  <li>Modalidad (presencial o teletrabajo).</li>
</ul>

<h2>Prima proporcional al terminar el contrato</h2>
<p>Si te retiras o te despiden antes de que se cumpla el semestre, el empleador debe pagarte la <strong>prima proporcional</strong> a los días trabajados en ese período como parte de la liquidación laboral.</p>

<h2>¿Qué pasa si no te pagan la prima?</h2>
<p>El incumplimiento en el pago de la prima de servicios genera una sanción de un día de salario por cada día de retraso. Puedes reclamar ante el <strong>Ministerio del Trabajo</strong> o interponer demanda ordinaria laboral.</p>
    `.trim(),
  },
  {
    slug: "gratificacion-julio-peru-2026",
    title: "Gratificación de julio 2026 en Perú: cómo calcularla y cuándo cobrarla",
    description:
      "Guía completa sobre la gratificación de Fiestas Patrias julio 2026 en Perú: quiénes tienen derecho, cómo se calcula, bonificación extraordinaria y fechas de pago.",
    country: "peru",
    countryName: "Perú",
    publishDate: "2026-03-10",
    relatedCalculators: [
      { pais: "peru", slug: "calculadora-gratificaciones", name: "Gratificaciones" },
      { pais: "peru", slug: "calculadora-cts", name: "CTS" },
      { pais: "peru", slug: "calculadora-liquidacion", name: "Liquidación Laboral" },
    ],
    content: `
<h2>¿Qué es la gratificación de julio?</h2>
<p>La <strong>gratificación de Fiestas Patrias</strong> es un beneficio obligatorio para los trabajadores del régimen laboral privado en Perú, equivalente a <strong>un sueldo mensual completo</strong>. Se paga en julio y está regulada por la Ley N° 27735.</p>

<h2>¿Cuándo se paga la gratificación julio 2026?</h2>
<p>El empleador debe depositarla durante la <strong>primera quincena de julio</strong>, a más tardar el <strong>15 de julio de 2026</strong>. El período computable es del <strong>1 de enero al 30 de junio</strong>.</p>

<h2>¿Cuánto es la gratificación?</h2>
<p>Si trabajaste todo el semestre enero-junio, recibes <strong>1 remuneración mensual completa</strong>. Si trabajaste solo parte del semestre, se paga proporcionalmente:</p>
<p><em>Gratificación proporcional = (Remuneración mensual × Meses completos trabajados) / 6</em></p>
<p>Los días adicionales dentro de un mes se calculan a razón de <strong>1/6 de la gratificación mensual por cada mes</strong>, y si no completaste el mes, se usa: <em>(días trabajados × gratificación mensual) / 30</em>.</p>

<h2>¿Qué incluye la remuneración base?</h2>
<p>Para calcular la gratificación, la remuneración mensual incluye:</p>
<ul>
  <li>Sueldo básico.</li>
  <li>Asignación familiar (si corresponde).</li>
  <li>Cualquier remuneración regular y permanente.</li>
</ul>
<p>No se incluyen: horas extra esporádicas, bonos por productividad ocasionales ni beneficios no remunerativos.</p>

<h2>Bonificación extraordinaria del 9%</h2>
<p>Gracias a la Ley N° 29351 (prorrogada), las gratificaciones están <strong>inafectas a descuentos de EsSalud y AFP/ONP</strong>. En su lugar, el empleador paga al trabajador una <strong>bonificación extraordinaria equivalente al 9%</strong> de la gratificación (el aporte que normalmente iría a EsSalud). Esta bonificación se paga junto con la gratificación.</p>
<p><em>Bonificación extra = Gratificación × 9%</em></p>

<h2>¿Quiénes tienen derecho?</h2>
<p>Todos los trabajadores del régimen laboral de la actividad privada, incluyendo:</p>
<ul>
  <li>Trabajadores a tiempo completo o parcial (a partir de 4 horas diarias).</li>
  <li>Trabajadores con contrato a plazo fijo o indefinido.</li>
  <li>Trabajadores que al momento del pago estén con vínculo laboral vigente o que hayan sido despedidos en los 6 meses previos a la quincena de julio.</li>
</ul>

<h2>¿Qué pasa si renuncias antes de julio?</h2>
<p>Si tu contrato termina antes del 15 de julio, tienes derecho a la <strong>gratificación trunca proporcional</strong> a los meses trabajados desde enero. Se incluye en tu liquidación laboral.</p>
    `.trim(),
  },
  {
    slug: "declaracion-renta-espana-2026",
    title: "Declaración de la Renta 2026 España: fechas, quién debe presentarla y cómo",
    description:
      "Todo sobre la campaña de la Renta 2025-2026 en España: plazos, quién está obligado a declarar, tramos IRPF 2026, deducciones clave y cómo pagar menos.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-15",
    relatedCalculators: [
      { pais: "espana", slug: "declaracion-renta-2025", name: "Calculadora Declaración de la Renta 2025" },
      { pais: "espana", slug: "calculadora-irpf", name: "IRPF y Salario Neto" },
      { pais: "espana", slug: "calculadora-nomina-neta", name: "Nómina Neta (Bruto a Neto)" },
      { pais: "espana", slug: "calculadora-paro", name: "Prestación por Desempleo (Paro)" },
    ],
    content: `
<h2>¿Cuándo empieza la campaña de la Renta 2026?</h2>
<p>La campaña de la Renta 2025 (que se presenta en 2026) tiene los siguientes plazos:</p>
<ul>
  <li><strong>Presentación por internet (Renta Web):</strong> desde el <strong>2 de abril de 2026</strong>.</li>
  <li><strong>Presentación por teléfono (plan Le Llamamos):</strong> desde el <strong>6 de mayo de 2026</strong>.</li>
  <li><strong>Presentación presencial en oficinas de la AEAT:</strong> desde el <strong>2 de junio de 2026</strong>.</li>
  <li><strong>Fecha límite para todas las modalidades:</strong> <strong>30 de junio de 2026</strong>.</li>
</ul>
<p>Si el resultado es a ingresar y domicilias el pago, el plazo se anticipa al <strong>25 de junio de 2026</strong>.</p>

<h2>¿Quién está obligado a declarar en 2026?</h2>
<p>Debes presentar la declaración si has obtenido:</p>
<ul>
  <li><strong>Rendimientos del trabajo superiores a 22.000 €</strong> de un solo pagador.</li>
  <li><strong>Rendimientos del trabajo superiores a 15.000 €</strong> si tienes dos o más pagadores y el segundo supera 1.500 € anuales.</li>
  <li><strong>Rendimientos del capital mobiliario o ganancias patrimoniales</strong> superiores a 1.600 €.</li>
  <li><strong>Rendimientos inmobiliarios</strong> imputados superiores a 1.000 €.</li>
  <li><strong>Cualquier actividad económica</strong> (autónomos siempre deben declarar).</li>
</ul>
<p>Incluso si no estás obligado, puede convenirte declarar si tienes deducciones que te generan devolución.</p>

<h2>Tramos IRPF 2026 (escala estatal)</h2>
<table>
  <thead><tr><th>Base liquidable</th><th>Tipo estatal</th></tr></thead>
  <tbody>
    <tr><td>Hasta 12.450 €</td><td>9,50%</td></tr>
    <tr><td>12.450 € – 20.200 €</td><td>12,00%</td></tr>
    <tr><td>20.200 € – 35.200 €</td><td>15,00%</td></tr>
    <tr><td>35.200 € – 60.000 €</td><td>18,50%</td></tr>
    <tr><td>60.000 € – 300.000 €</td><td>22,50%</td></tr>
    <tr><td>Más de 300.000 €</td><td>24,50%</td></tr>
  </tbody>
</table>
<p>A esta escala estatal se suma la escala autonómica, que varía según tu comunidad. El tipo final efectivo suele oscilar entre el 19% y el 47%.</p>

<h2>Principales deducciones para reducir la factura fiscal</h2>
<ul>
  <li><strong>Reducción por rendimientos del trabajo:</strong> hasta 5.565 € para rentas bajas (automática).</li>
  <li><strong>Deducción por alquiler de vivienda habitual:</strong> si firmaste contrato antes del 1 de enero de 2015.</li>
  <li><strong>Deducción por hipoteca:</strong> si la adquisición fue antes de 2013 (deducción por inversión en vivienda habitual).</li>
  <li><strong>Aportaciones a planes de pensiones:</strong> reducen la base imponible (límite: menor de 1.500 € o 30% de rendimientos netos del trabajo y actividades económicas).</li>
  <li><strong>Donativos a entidades sin ánimo de lucro:</strong> entre el 35% y el 80% de lo donado.</li>
  <li><strong>Deducciones autonómicas:</strong> varían por comunidad (nacimiento de hijos, rehabilitación de vivienda, etc.).</li>
</ul>

<h2>¿Cómo presentar la declaración?</h2>
<p>La forma más sencilla es usar <strong>Renta Web</strong> en la sede electrónica de la AEAT con tu certificado digital, Cl@ve PIN o número de referencia. La AEAT ya prerrellena muchos datos con la información que recibe de empresas, bancos y otros pagadores.</p>
<p>Revisa siempre el borrador antes de confirmarlo: puede contener errores u omisiones, especialmente en inmuebles, fondos de inversión o deducciones autonómicas.</p>
    `.trim(),
  },
  {
    slug: "sac-aguinaldo-junio-argentina-2026",
    title: "SAC junio 2026 Argentina: cómo calcular el aguinaldo y cuándo lo cobras",
    description:
      "Todo sobre el SAC (Sueldo Anual Complementario) del primer semestre 2026 en Argentina: cuándo se paga, cómo se calcula, descuentos y qué pasa si el empleador no abona.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-20",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-sac", name: "SAC / Aguinaldo" },
      { pais: "argentina", slug: "calculadora-liquidacion-final", name: "Liquidación Final" },
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Indemnización por Despido" },
    ],
    content: `
<h2>¿Qué es el SAC?</h2>
<p>El <strong>Sueldo Anual Complementario (SAC)</strong>, conocido popularmente como aguinaldo, es el equivalente al 50% de la mejor remuneración mensual percibida en el semestre. Está regulado por el artículo 121 de la Ley de Contrato de Trabajo (LCT) y es un derecho irrenunciable de todos los trabajadores en relación de dependencia.</p>

<h2>¿Cuándo se paga el SAC en 2026?</h2>
<p>El SAC se abona en dos cuotas:</p>
<ul>
  <li><strong>Primera cuota (primer semestre):</strong> a más tardar el <strong>30 de junio de 2026</strong> (período enero-junio).</li>
  <li><strong>Segunda cuota (segundo semestre):</strong> a más tardar el <strong>31 de diciembre de 2026</strong> (período julio-diciembre).</li>
</ul>

<h2>¿Cómo se calcula el SAC?</h2>
<p>El cálculo es el siguiente:</p>
<p><em>SAC = Mejor remuneración mensual del semestre / 2</em></p>
<p>Si no trabajaste todo el semestre, el SAC es proporcional a los días trabajados:</p>
<p><em>SAC proporcional = (Mejor remuneración × Días trabajados en el semestre) / (2 × 180)</em></p>
<p><strong>Ejemplo:</strong> Si tu mejor sueldo del semestre fue $500.000 ARS y trabajaste 90 días:</p>
<p><em>SAC = ($500.000 × 90) / (2 × 180) = $125.000 ARS</em></p>

<h2>¿Qué se incluye en la remuneración base?</h2>
<p>Se toma la <strong>remuneración bruta más alta del semestre</strong>, incluyendo:</p>
<ul>
  <li>Sueldo básico.</li>
  <li>Horas extra (si fueron habituales ese mes).</li>
  <li>Comisiones y premios habituales.</li>
  <li>Adicionales convencionales o contractuales.</li>
</ul>
<p>No se incluyen beneficios no remunerativos (viáticos, tickets alimentarios, etc.).</p>

<h2>¿El SAC tiene descuentos?</h2>
<p>Sí. El SAC está sujeto a los mismos descuentos que el salario mensual:</p>
<ul>
  <li>Jubilación SIPA: 11%.</li>
  <li>PAMI: 3%.</li>
  <li>Obra social: 3%.</li>
  <li>Impuesto a las Ganancias (si tu salario supera el mínimo no imponible).</li>
</ul>

<h2>SAC proporcional al despido o renuncia</h2>
<p>Si la relación laboral termina antes del fin del semestre (por despido, renuncia o cualquier otra causa), el trabajador tiene derecho al <strong>SAC proporcional</strong> como parte de la liquidación final. Este se calcula considerando los días trabajados desde el inicio del semestre hasta la fecha de egreso.</p>

<h2>¿Qué pasa si el empleador no paga?</h2>
<p>El incumplimiento en el pago del SAC habilita al trabajador a reclamar el importe más intereses. Si el empleador persiste en el incumplimiento, puede constituir injuria grave y justificar el despido indirecto con derecho a indemnización completa. La denuncia puede realizarse ante el <strong>Ministerio de Trabajo</strong> provincial o ante la Justicia Laboral.</p>
    `.trim(),
  },
  {
    slug: "retencion-fuente-colombia-2026",
    title: "Retención en la fuente sobre salarios Colombia 2026: tabla y cómo calcularla",
    description:
      "Guía práctica sobre la retención en la fuente por salarios en Colombia 2026: tabla UVT actualizada, quiénes aplica, cómo se descuenta y cómo minimizarla legalmente.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-22",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-nomina-neta", name: "Nómina Neta (Bruto a Neto)" },
      { pais: "colombia", slug: "calculadora-seguridad-social", name: "Seguridad Social" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>¿Qué es la retención en la fuente?</h2>
<p>La <strong>retención en la fuente</strong> es un mecanismo de recaudo anticipado del impuesto de renta. El empleador actúa como agente retenedor y descuenta mensualmente del salario del trabajador un porcentaje estimado del impuesto que este deberá pagar al año. Está regulada por el artículo 383 del Estatuto Tributario.</p>

<h2>Valor de la UVT en 2026</h2>
<p>El cálculo de la retención se basa en la <strong>Unidad de Valor Tributario (UVT)</strong>. Para 2026, la DIAN fijó la UVT en <strong>$49.799 COP</strong> (valor aproximado sujeto a resolución oficial). Todos los rangos de la tabla de retención están expresados en UVT.</p>

<h2>¿A partir de qué salario aplica la retención?</h2>
<p>La retención en la fuente aplica cuando el ingreso laboral mensual, una vez depurado, supera <strong>95 UVT</strong> (aproximadamente $4.730.905 COP en 2026). Por debajo de este umbral, no hay retención.</p>

<h2>¿Cómo se calcula la base de retención?</h2>
<p>No se retiene sobre el salario bruto total. El proceso de depuración es:</p>
<ol>
  <li>Salario bruto mensual.</li>
  <li>Menos aportes obligatorios a salud (4%) y pensión (4%).</li>
  <li>Menos el 25% de renta exenta (sobre el ingreso laboral, con tope de 240 UVT mensuales).</li>
  <li>Menos deducciones adicionales (intereses de vivienda, dependientes, medicina prepagada).</li>
</ol>
<p>La base resultante se convierte a UVT y se aplica la tabla del artículo 383 ET.</p>

<h2>Tabla de retención en la fuente 2026 (rangos principales)</h2>
<table>
  <thead><tr><th>Ingreso mensual (UVT)</th><th>Tarifa marginal</th></tr></thead>
  <tbody>
    <tr><td>Menor a 95 UVT</td><td>0%</td></tr>
    <tr><td>95 – 150 UVT</td><td>19% sobre exceso de 95 UVT</td></tr>
    <tr><td>150 – 360 UVT</td><td>28% sobre exceso de 150 UVT + 10,44 UVT</td></tr>
    <tr><td>360 – 640 UVT</td><td>33% sobre exceso de 360 UVT + 69,24 UVT</td></tr>
    <tr><td>640 – 945 UVT</td><td>35% sobre exceso de 640 UVT + 162,24 UVT</td></tr>
    <tr><td>945 – 2.300 UVT</td><td>37% sobre exceso de 945 UVT + 269,04 UVT</td></tr>
    <tr><td>Más de 2.300 UVT</td><td>39% sobre exceso de 2.300 UVT + 770,04 UVT</td></tr>
  </tbody>
</table>

<h2>¿Cómo reducir legalmente la retención?</h2>
<p>Puedes disminuir la base de retención informando a tu empleador las siguientes deducciones:</p>
<ul>
  <li><strong>Intereses de crédito hipotecario:</strong> hasta 100 UVT mensuales.</li>
  <li><strong>Dependientes económicos:</strong> hasta el 10% del ingreso bruto, máximo 32 UVT mensuales.</li>
  <li><strong>Medicina prepagada:</strong> hasta 16 UVT mensuales.</li>
  <li><strong>Aportes voluntarios a pensión obligatoria:</strong> deducibles.</li>
  <li><strong>AFC (Ahorro para el Fomento a la Construcción):</strong> aportes voluntarios a cuentas AFC reducen la base.</li>
</ul>
<p>Para aplicar estas deducciones, debes entregarle a tu empleador los soportes correspondientes antes del primer pago del año o cuando varíen tus circunstancias.</p>
    `.trim(),
  },
  {
    slug: "tabla-isr-mexico-2026",
    title: "Tabla ISR 2026 México: tarifas, cálculo y cómo pagar menos impuestos",
    description:
      "Tabla del Impuesto Sobre la Renta (ISR) 2026 en México: tarifas mensuales y anuales, subsidio al empleo, cómo se calcula el descuento en nómina y estrategias para optimizar tu carga fiscal.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Nómina Neta (Bruto a Neto)" },
      { pais: "mexico", slug: "calculadora-imss", name: "Cuotas IMSS" },
      { pais: "mexico", slug: "calculadora-ptu", name: "PTU / Utilidades" },
    ],
    content: `
<h2>¿Qué es el ISR sobre salarios?</h2>
<p>El <strong>Impuesto Sobre la Renta (ISR)</strong> es el principal impuesto que grava los ingresos de las personas físicas en México. Para trabajadores asalariados, el empleador retiene mensualmente una cantidad estimada del ISR anual y la entera al SAT. La base legal es la Ley del ISR, artículos 94 al 99.</p>

<h2>Tabla ISR mensual 2026</h2>
<p>Las tarifas para el cálculo mensual del ISR 2026 son (tabla del Artículo 96 LISR, actualizada para 2026):</p>
<table>
  <thead><tr><th>Límite inferior ($)</th><th>Límite superior ($)</th><th>Cuota fija ($)</th><th>% sobre excedente</th></tr></thead>
  <tbody>
    <tr><td>0,01</td><td>746,04</td><td>0,00</td><td>1,92%</td></tr>
    <tr><td>746,05</td><td>6.332,05</td><td>14,32</td><td>6,40%</td></tr>
    <tr><td>6.332,06</td><td>11.128,01</td><td>371,83</td><td>10,88%</td></tr>
    <tr><td>11.128,02</td><td>12.935,82</td><td>893,63</td><td>16,00%</td></tr>
    <tr><td>12.935,83</td><td>15.487,71</td><td>1.182,88</td><td>17,92%</td></tr>
    <tr><td>15.487,72</td><td>31.236,49</td><td>1.640,18</td><td>21,36%</td></tr>
    <tr><td>31.236,50</td><td>49.233,00</td><td>5.004,12</td><td>23,52%</td></tr>
    <tr><td>49.233,01</td><td>93.993,90</td><td>9.236,89</td><td>30,00%</td></tr>
    <tr><td>93.993,91</td><td>125.325,20</td><td>22.665,17</td><td>32,00%</td></tr>
    <tr><td>125.325,21</td><td>375.975,61</td><td>32.691,18</td><td>34,00%</td></tr>
    <tr><td>375.975,62</td><td>En adelante</td><td>117.912,32</td><td>35,00%</td></tr>
  </tbody>
</table>

<h2>¿Cómo se calcula el ISR mensual?</h2>
<ol>
  <li>Toma tu <strong>ingreso gravable mensual</strong> (salario menos deducciones autorizadas).</li>
  <li>Ubica el rango en la tabla anterior.</li>
  <li>Resta el límite inferior a tu ingreso gravable.</li>
  <li>Multiplica la diferencia por el porcentaje sobre excedente.</li>
  <li>Suma la cuota fija del rango.</li>
  <li>Resta el <strong>subsidio al empleo</strong> (si aplica).</li>
</ol>
<p><em>ISR = Cuota fija + (Ingreso gravable − Límite inferior) × % sobre excedente − Subsidio al empleo</em></p>

<h2>¿Qué es el subsidio al empleo?</h2>
<p>El <strong>subsidio al empleo</strong> es un crédito fiscal que beneficia a trabajadores de ingresos bajos y medios. Si el ISR calculado es mayor al subsidio, pagas la diferencia. Si el subsidio es mayor que el ISR, en algunos casos tu empleador te debe entregar la diferencia en efectivo. El subsidio aplica para ingresos mensuales hasta aproximadamente <strong>$10.171 MXN</strong>.</p>

<h2>¿Qué deducciones reducen el ISR?</h2>
<p>Para trabajadores asalariados, las deducciones personales que puedes aplicar en la declaración anual son:</p>
<ul>
  <li>Honorarios médicos, dentales y hospitalarios.</li>
  <li>Intereses reales pagados por crédito hipotecario.</li>
  <li>Primas de seguros de gastos médicos mayores.</li>
  <li>Colegiaturas (deducción especial con topes por nivel educativo).</li>
  <li>Donativos a instituciones autorizadas.</li>
  <li>Aportaciones complementarias al fondo de retiro (AFORE).</li>
  <li>Gastos funerarios (equivalente a una UMA anual).</li>
</ul>
<p>Conserva siempre las facturas (CFDI) de estos gastos para poder deducirlos en tu declaración anual de abril.</p>
    `.trim(),
  },
  {
    slug: "reforma-laboral-2026-mexico",
    title: "Reforma laboral 2026 en México: cambios clave y cómo te afectan",
    description:
      "Resumen de los principales cambios laborales en México para 2026: nuevos derechos, salario mínimo actualizado, reducción de jornada, plataformas digitales y más.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-28",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>El panorama laboral en México en 2026</h2>
<p>El marco laboral mexicano continúa evolucionando en 2026 con cambios relevantes en materia de jornada de trabajo, derechos de plataformas digitales y actualización del salario mínimo. A continuación, los puntos clave que todo trabajador y empleador debe conocer.</p>

<h2>Salario mínimo 2026</h2>
<p>La Comisión Nacional de los Salarios Mínimos (CONASAMI) actualizó los salarios mínimos para 2026:</p>
<ul>
  <li><strong>Zona general:</strong> $278,00 MXN diarios (aprox. $8.348 MXN mensuales).</li>
  <li><strong>Zona libre de la Frontera Norte:</strong> $419,88 MXN diarios.</li>
</ul>
<p>Estos importes son los mínimos legales; ningún empleador puede pagar por debajo de estas cantidades. El incumplimiento es sancionable por la Secretaría del Trabajo.</p>

<h2>Reducción de jornada laboral</h2>
<p>La reforma constitucional aprobada en 2024 estableció la reducción progresiva de la jornada máxima de <strong>48 a 40 horas semanales</strong>. La implementación es gradual:</p>
<ul>
  <li>Primera etapa: reducción a <strong>44 horas</strong> semanales.</li>
  <li>Segunda etapa: reducción a <strong>40 horas</strong> semanales.</li>
</ul>
<p>Esta reforma implica que el cálculo de horas extra cambia proporcionalmente: las horas que excedan el nuevo máximo semanal deben pagarse con los recargos establecidos en la LFT (dobles las primeras 9 horas, triples a partir de la décima).</p>

<h2>Días de vacaciones: tabla actualizada</h2>
<p>Tras la reforma de 2023 (Ley Silla), los días mínimos de vacaciones en México se incrementaron significativamente. Para 2026 aplica la siguiente tabla:</p>
<table>
  <thead><tr><th>Años de servicio</th><th>Días de vacaciones mínimos</th></tr></thead>
  <tbody>
    <tr><td>1 año</td><td>12 días</td></tr>
    <tr><td>2 años</td><td>14 días</td></tr>
    <tr><td>3 años</td><td>16 días</td></tr>
    <tr><td>4 años</td><td>18 días</td></tr>
    <tr><td>5 años</td><td>20 días</td></tr>
    <tr><td>6–10 años</td><td>22 días</td></tr>
    <tr><td>11–15 años</td><td>24 días</td></tr>
    <tr><td>16–20 años</td><td>26 días</td></tr>
    <tr><td>21–25 años</td><td>28 días</td></tr>
    <tr><td>26–30 años</td><td>30 días</td></tr>
    <tr><td>31+ años</td><td>32 días</td></tr>
  </tbody>
</table>

<h2>Trabajadores de plataformas digitales</h2>
<p>La reforma al artículo 311-A de la LFT regula el trabajo a través de plataformas digitales (Uber, DiDi, Rappi, etc.). Los puntos clave son:</p>
<ul>
  <li>Los repartidores y conductores que superen ciertos umbrales de conexión y dependencia económica son reconocidos como trabajadores dependientes con derechos laborales plenos.</li>
  <li>Las plataformas deben registrarlos ante el IMSS y cubrir cuotas de seguridad social.</li>
  <li>Los trabajadores esporádicos pueden optar por el régimen de trabajadores independientes.</li>
</ul>

<h2>Ley Silla: derecho al descanso durante la jornada</h2>
<p>La llamada <strong>Ley Silla</strong>, en vigor desde 2023 y consolidada en 2026, obliga a los empleadores a proporcionar asientos con respaldo a todos los trabajadores que deban permanecer de pie por razón de su trabajo. También garantiza descansos mínimos durante la jornada. El incumplimiento es sancionable por la STPS.</p>

<h2>¿Cómo afectan estos cambios a tu liquidación o finiquito?</h2>
<p>Los cambios en jornada y vacaciones impactan directamente en el cálculo de indemnizaciones y finiquitos, ya que se elevan los montos de vacaciones proporcionales y horas extra. Usa nuestra calculadora de finiquito o liquidación para obtener los importes exactos con los parámetros actualizados de 2026.</p>
    `.trim(),
  },
  {
    slug: "decimo-tercero-cuarto-ecuador-2026",
    title: "Décimo tercero y cuarto sueldo Ecuador 2026: cómo calcularlos y cuándo cobrarlos",
    description:
      "Guía completa sobre el décimo tercer sueldo (bono navideño) y el décimo cuarto sueldo (bono escolar) en Ecuador 2026: fechas de pago, fórmulas, quiénes tienen derecho y qué hacer si no te pagan.",
    country: "ecuador",
    countryName: "Ecuador",
    publishDate: "2026-03-28",
    relatedCalculators: [
      { pais: "ecuador", slug: "calculadora-decimo-tercero", name: "Décimo Tercer Sueldo" },
      { pais: "ecuador", slug: "calculadora-decimo-cuarto", name: "Décimo Cuarto Sueldo" },
      { pais: "ecuador", slug: "calculadora-liquidacion", name: "Liquidación Laboral" },
    ],
    content: `
<h2>¿Qué son los décimos sueldos en Ecuador?</h2>
<p>Ecuador es uno de los pocos países de América Latina que otorga a sus trabajadores <strong>dos sueldos adicionales obligatorios</strong> al año: el décimo tercer sueldo (bono navideño) y el décimo cuarto sueldo (bono escolar). Ambos son derechos irrenunciables establecidos en el Código del Trabajo.</p>

<h2>Décimo tercer sueldo (bono navideño)</h2>
<p>Equivale a la <strong>doceava parte del total de remuneraciones</strong> percibidas en el período del 1 de diciembre del año anterior al 30 de noviembre del año en curso.</p>
<p><em>Fórmula: Total salarios del período / 12</em></p>
<p><strong>Fecha de pago:</strong> hasta el 24 de diciembre.</p>
<p><strong>Ejemplo:</strong> Si ganas $600/mes y trabajaste 12 meses → Décimo tercero = $600. Si trabajaste 8 meses → ($600 × 8) / 12 = $400.</p>

<h2>Décimo cuarto sueldo (bono escolar)</h2>
<p>Es un monto fijo igual al <strong>Salario Básico Unificado (SBU)</strong>, igual para todos los trabajadores sin importar su remuneración. Para 2026, el SBU es de <strong>$460</strong>.</p>
<p><strong>Fechas de pago según región:</strong></p>
<ul>
  <li><strong>Costa e Insular:</strong> hasta el 15 de marzo (período agosto anterior – febrero actual).</li>
  <li><strong>Sierra y Amazonia:</strong> hasta el 15 de agosto (período agosto anterior – julio actual).</li>
</ul>
<p>Si no trabajaste el período completo, recibes proporcional: ($460 × meses trabajados) / 12.</p>

<h2>¿Se pueden recibir de forma mensualizada?</h2>
<p>Sí. El trabajador puede solicitar el pago mensualizado de ambos décimos: en lugar de recibirlos en las fechas establecidas, se divide el monto entre 12 y se incluye en la nómina mensual. Esta opción debe solicitarse por escrito al empleador.</p>

<h2>¿Tienen descuentos del IESS?</h2>
<p>No. Ambos décimos están <strong>exentos del aporte personal al IESS</strong> (9.45%). Se pagan íntegros al trabajador. Sin embargo, pueden estar sujetos a retención de impuesto a la renta si el total de ingresos anuales supera la base imponible.</p>

<h2>¿Qué pasa si no te pagan los décimos?</h2>
<p>Puedes presentar una denuncia ante el <strong>Ministerio del Trabajo</strong>. La entidad puede sancionar al empleador con multas y obligarlo a pagar el valor adeudado con intereses. El empleador que no pague en los plazos establecidos incurre en mora automática.</p>
    `.trim(),
  },
  {
    slug: "liquidacion-laboral-ecuador-2026",
    title: "Liquidación laboral Ecuador 2026: qué te corresponde al salir de tu trabajo",
    description:
      "Todo sobre la liquidación laboral en Ecuador 2026: desahucio, vacaciones, décimos proporcionales, fondos de reserva y cómo reclamar si tu empleador no paga.",
    country: "ecuador",
    countryName: "Ecuador",
    publishDate: "2026-03-29",
    relatedCalculators: [
      { pais: "ecuador", slug: "calculadora-liquidacion", name: "Liquidación Laboral" },
      { pais: "ecuador", slug: "calculadora-decimo-tercero", name: "Décimo Tercer Sueldo" },
      { pais: "ecuador", slug: "calculadora-fondos-reserva", name: "Fondos de Reserva" },
    ],
    content: `
<h2>¿Qué incluye la liquidación laboral en Ecuador?</h2>
<p>Cuando termina una relación laboral en Ecuador, el trabajador tiene derecho a recibir el pago de todos los beneficios proporcionales al tiempo trabajado. Los componentes principales son:</p>
<ul>
  <li><strong>Desahucio:</strong> 25% de la última remuneración mensual × años de servicio (máximo 25 años).</li>
  <li><strong>Vacaciones no gozadas:</strong> proporcional a los días no disfrutados.</li>
  <li><strong>Décimo tercer sueldo proporcional:</strong> del período de cálculo vigente.</li>
  <li><strong>Décimo cuarto sueldo proporcional:</strong> según la región.</li>
  <li><strong>Fondos de reserva acumulados:</strong> si el empleador los guardaba en cuenta.</li>
</ul>

<h2>¿Qué es el desahucio en Ecuador?</h2>
<p>El desahucio aplica en toda terminación de contrato (tanto por parte del empleador como del trabajador) y equivale al <strong>25% de la última remuneración por cada año de servicio</strong>, con un tope de 25 años. No es una sanción por despido injustificado, sino un derecho de todos los trabajadores al terminar la relación laboral.</p>
<p><em>Desahucio = Último salario mensual × 25% × años de servicio</em></p>

<h2>¿Qué pasa si me despiden intempestivamente?</h2>
<p>Si el empleador termina el contrato sin seguir el proceso legal (sin previo visto bueno del Ministerio del Trabajo), debe pagar adicionalmente una <strong>indemnización por despido intempestivo</strong>:</p>
<ul>
  <li><strong>Menos de 3 años de servicio:</strong> 3 meses de remuneración.</li>
  <li><strong>Más de 3 años de servicio:</strong> 1 mes de remuneración por cada año de servicio.</li>
</ul>
<p>Esta indemnización se suma al desahucio y a los demás componentes de la liquidación.</p>

<h2>Fondos de reserva: qué son y cuándo los recibes</h2>
<p>Los fondos de reserva equivalen al 8.33% del salario mensual y se generan a partir del segundo año de trabajo. El trabajador puede optar por recibirlos mensualmente (incluidos en el rol de pagos) o que el empleador los deposite en el IESS. Si optaste por el depósito en IESS, al terminar el contrato puedes retirarlos directamente de esa institución.</p>

<h2>¿Cuánto tiempo tiene el empleador para pagar?</h2>
<p>La liquidación debe pagarse de forma <strong>inmediata al finalizar el contrato</strong>. El empleador que demora genera mora y debe pagar intereses. Puedes exigir el pago mediante una carta notariada y, si no responde, presentar una denuncia ante el Ministerio del Trabajo.</p>
    `.trim(),
  },
  {
    slug: "prestaciones-sociales-venezuela-2026",
    title: "Prestaciones sociales Venezuela 2026: cómo calcularlas y cuándo cobrarlas",
    description:
      "Guía completa sobre las prestaciones sociales en Venezuela 2026 (LOTTT): fórmula de cálculo, salario integral, anticipo, intereses y qué hacer si tu empresa no las deposita.",
    country: "venezuela",
    countryName: "Venezuela",
    publishDate: "2026-03-29",
    relatedCalculators: [
      { pais: "venezuela", slug: "calculadora-prestaciones-sociales", name: "Prestaciones Sociales" },
      { pais: "venezuela", slug: "calculadora-utilidades", name: "Utilidades" },
      { pais: "venezuela", slug: "calculadora-vacaciones", name: "Vacaciones" },
    ],
    content: `
<h2>¿Qué son las prestaciones sociales en Venezuela?</h2>
<p>Las prestaciones sociales son un mecanismo de <strong>ahorro obligatorio</strong> que acumula el empleador a favor del trabajador durante toda la relación laboral, reguladas por los Artículos 141 al 148 de la LOTTT (Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras).</p>

<h2>¿Cómo se acumulan?</h2>
<p>El empleador deposita mensualmente (a partir del cuarto mes de servicio) el equivalente a <strong>15 días de salario integral</strong>. Adicionalmente, por cada año de servicio se acumulan días adicionales de forma progresiva:</p>
<table>
  <thead><tr><th>Año de servicio</th><th>Días adicionales acumulados</th></tr></thead>
  <tbody>
    <tr><td>1er año</td><td>2 días</td></tr>
    <tr><td>2do año</td><td>4 días</td></tr>
    <tr><td>3er año</td><td>6 días</td></tr>
    <tr><td>Por cada año adicional</td><td>+2 días más</td></tr>
  </tbody>
</table>

<h2>¿Qué es el salario integral?</h2>
<p>El salario integral (base de cálculo) incluye:</p>
<ul>
  <li>Salario normal mensual.</li>
  <li>Alícuota mensual de utilidades: (utilidades anuales estimadas / 12).</li>
  <li>Alícuota mensual del bono vacacional: (bono vacacional / 12).</li>
</ul>
<p>Al usar el salario integral, el monto de las prestaciones es mayor que si se usara solo el salario base.</p>

<h2>¿Puedo solicitar un anticipo?</h2>
<p>Sí. El trabajador puede solicitar hasta el <strong>75% del saldo acumulado</strong> en prestaciones para:</p>
<ul>
  <li>Adquisición, mejora o reparación de vivienda.</li>
  <li>Educación propia o de familiares directos.</li>
  <li>Atención médica de emergencia.</li>
  <li>Adquisición de vehículo de uso personal.</li>
</ul>

<h2>¿El empleador debe depositarlas en un fondo?</h2>
<p>Sí. El empleador debe depositar mensualmente las prestaciones en un <strong>fideicomiso individual</strong> en una institución financiera a nombre del trabajador, o en el Fondo Nacional de Prestaciones Sociales. Si no lo hace, asume directamente la deuda y genera intereses a la tasa promedio pasiva del sistema bancario.</p>

<h2>¿Cuándo las cobro?</h2>
<p>Al terminar la relación laboral (por cualquier causa: renuncia, despido, retiro justificado o mutuo acuerdo), el trabajador tiene derecho a cobrar la totalidad de las prestaciones acumuladas. El empleador tiene 5 días hábiles para realizar el pago. El incumplimiento puede reclamarse ante la Inspectoría del Trabajo.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-cesantia-costa-rica-2026",
    title: "Aguinaldo y cesantía Costa Rica 2026: cuánto te corresponde y cómo calcularlo",
    description:
      "Guía completa sobre el aguinaldo y el auxilio de cesantía en Costa Rica 2026: fechas de pago, fórmulas oficiales del Código de Trabajo, Fondo de Capitalización Laboral y cómo reclamar tus derechos.",
    country: "costa-rica",
    countryName: "Costa Rica",
    publishDate: "2026-03-30",
    relatedCalculators: [
      { pais: "costa-rica", slug: "calculadora-aguinaldo", name: "Aguinaldo" },
      { pais: "costa-rica", slug: "calculadora-cesantia", name: "Auxilio de Cesantía" },
      { pais: "costa-rica", slug: "calculadora-vacaciones", name: "Vacaciones" },
    ],
    content: `
<h2>El aguinaldo en Costa Rica</h2>
<p>El aguinaldo costarricense es un beneficio obligatorio establecido en el Artículo 228 del Código de Trabajo. Equivale a la <strong>doceava parte del total de salarios</strong> percibidos entre el 1 de diciembre del año anterior y el 30 de noviembre del año en curso.</p>
<p><em>Aguinaldo = Total salarios del período / 12</em></p>
<p><strong>Pago:</strong> antes del 15 de diciembre.</p>
<p><strong>Importante:</strong> El aguinaldo está exento de cargas sociales de la CCSS y no puede embargarse ni reducirse como sanción.</p>

<h2>El auxilio de cesantía</h2>
<p>El auxilio de cesantía es la indemnización que recibe el trabajador despedido <strong>sin justa causa</strong>. Está regulado por el Artículo 29 del Código de Trabajo e incluye el Fondo de Capitalización Laboral (FCL).</p>

<h2>Escala del auxilio de cesantía</h2>
<table>
  <thead><tr><th>Antigüedad</th><th>Días de salario</th></tr></thead>
  <tbody>
    <tr><td>3 a 6 meses</td><td>7 días</td></tr>
    <tr><td>6 meses a 1 año</td><td>14 días</td></tr>
    <tr><td>1 a 2 años</td><td>19,5 días</td></tr>
    <tr><td>2 a 3 años</td><td>20 días</td></tr>
    <tr><td>3 a 4 años</td><td>20,5 días</td></tr>
    <tr><td>4 a 5 años</td><td>21 días</td></tr>
    <tr><td>5 a 6 años</td><td>21,5 días</td></tr>
    <tr><td>6 a 7 años</td><td>22 días</td></tr>
  </tbody>
</table>
<p>El tope legal es de <strong>8 años</strong> de antigüedad computable.</p>

<h2>¿Qué es el Fondo de Capitalización Laboral (FCL)?</h2>
<p>El FCL es un fondo al que el empleador aporta el <strong>3% del salario mensual</strong> desde el primer día de trabajo. Al finalizar la relación laboral (por cualquier causa, incluida la renuncia voluntaria), el trabajador puede retirar el monto acumulado en el FCL directamente del operador financiero. Si el despido es sin causa y el FCL no cubre el total de la cesantía, el empleador paga la diferencia.</p>

<h2>Preaviso: cuánto te deben avisar</h2>
<p>El preaviso (Artículo 28 del Código de Trabajo) depende de la antigüedad:</p>
<ul>
  <li>Menos de 3 meses: 1 semana.</li>
  <li>3 meses a 1 año: 2 semanas.</li>
  <li>Más de 1 año: 1 mes.</li>
</ul>
<p>Si el empleador no otorga el preaviso, debe pagar ese período adicional. Si el trabajador renuncia sin dar preaviso, puede descontársele ese monto de la liquidación.</p>

<h2>Vacaciones en Costa Rica</h2>
<p>Todo trabajador con más de 50 semanas continuas de trabajo tiene derecho a un mínimo de <strong>2 semanas (14 días) de vacaciones remuneradas</strong>. Las vacaciones no pueden sustituirse por dinero mientras el contrato esté vigente, salvo el proporcional al terminar la relación laboral.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-bolivia-2026",
    title: "Aguinaldo Bolivia 2026: cuánto es, cuándo lo pagan y qué es el segundo aguinaldo",
    description:
      "Todo sobre el aguinaldo de Navidad en Bolivia 2026: monto, fecha de pago, cálculo proporcional, descuentos y las condiciones para el segundo aguinaldo 'Esfuerzo por Bolivia'.",
    country: "bolivia",
    countryName: "Bolivia",
    publishDate: "2026-03-30",
    relatedCalculators: [
      { pais: "bolivia", slug: "calculadora-aguinaldo", name: "Aguinaldo de Navidad" },
      { pais: "bolivia", slug: "calculadora-segundo-aguinaldo", name: "Segundo Aguinaldo" },
      { pais: "bolivia", slug: "calculadora-desahucio", name: "Desahucio por Despido" },
    ],
    content: `
<h2>¿Qué es el aguinaldo en Bolivia?</h2>
<p>El aguinaldo de Navidad en Bolivia es un beneficio laboral obligatorio que equivale a <strong>un salario mensual completo</strong> y debe pagarse antes del 20 de diciembre de cada año. Está establecido en el Decreto Supremo N° 229 y aplica a todos los trabajadores del sector privado y público.</p>

<h2>¿Cuánto es el aguinaldo en Bolivia 2026?</h2>
<p>Equivale a tu <strong>último salario mensual completo</strong> si trabajaste los 12 meses del año. Si trabajaste menos tiempo, recibes la parte proporcional:</p>
<p><em>Aguinaldo = (Salario mensual × Meses trabajados) / 12</em></p>
<p><strong>Ejemplo:</strong> Con Bs. 5.000 de sueldo y 9 meses trabajados → (Bs. 5.000 × 9) / 12 = Bs. 3.750.</p>

<h2>¿Cuándo se paga el aguinaldo?</h2>
<p>El empleador tiene la obligación de pagar el aguinaldo antes del <strong>20 de diciembre</strong>. El incumplimiento está sancionado con multas por el Ministerio de Trabajo y Empleo, más el pago de intereses al trabajador.</p>

<h2>¿Qué es el segundo aguinaldo?</h2>
<p>El segundo aguinaldo "Esfuerzo por Bolivia" es un beneficio adicional que se activa cuando el crecimiento del PIB de Bolivia supera el <strong>4.5%</strong>. No es automático: depende de los datos del Banco Central de Bolivia para cada año fiscal.</p>
<p>Cuando corresponde, equivale a un salario mensual adicional y se paga junto con el aguinaldo de Navidad antes del 20 de diciembre. Si el trabajador no estuvo todo el año, recibe el proporcional igual que con el aguinaldo regular.</p>

<h2>¿Tiene descuentos?</h2>
<p>El aguinaldo está sujeto a los mismos descuentos que el salario mensual ordinario:</p>
<ul>
  <li>Aporte al sistema de pensiones (AFP): 10% + comisión.</li>
  <li>Aporte a la seguridad social de corto plazo (CNS/Caja): 10%.</li>
  <li>Impuesto RC-IVA (si el salario supera el mínimo no imponible).</li>
</ul>

<h2>Desahucio: qué te corresponde si te despiden</h2>
<p>Si el empleador termina el contrato sin causa justificada, debe pagar un desahucio de <strong>3 salarios mensuales</strong>. Adicionalmente, si tienes más de 90 días de servicio, tienes derecho a la indemnización por tiempo de servicios de 1 salario por año trabajado. Ambos conceptos son independientes y se acumulan.</p>
    `.trim(),
  },
  {
    slug: "finiquito-vs-liquidacion-diferencia-mexico",
    title: "Finiquito vs liquidación en México: ¿cuál es la diferencia y cuánto te corresponde?",
    description: "Muchos trabajadores confunden el finiquito con la liquidación. En México son conceptos distintos con montos muy diferentes. Te explicamos la diferencia y cómo calcular cada uno.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-liquidacion-despido-injustificado", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>¿Qué es el finiquito en México?</h2>
<p>El <strong>finiquito</strong> es el pago que recibe el trabajador cuando termina la relación laboral de forma voluntaria (renuncia) o al finalizar un contrato por tiempo determinado. Incluye únicamente las partes proporcionales que se hayan generado y que no han sido pagadas:</p>
<ul>
  <li><strong>Aguinaldo proporcional:</strong> días trabajados en el año × (15 ÷ 365).</li>
  <li><strong>Vacaciones proporcionales:</strong> días de vacaciones generados no gozados.</li>
  <li><strong>Prima vacacional proporcional:</strong> 25% del valor de las vacaciones.</li>
  <li><strong>Salarios pendientes:</strong> días trabajados y no pagados.</li>
</ul>
<p>No incluye los 3 meses de indemnización ni los 20 días por año. Esos son conceptos de la liquidación.</p>

<h2>¿Qué es la liquidación en México?</h2>
<p>La <strong>liquidación</strong> es el pago que corresponde cuando el patrón rescinde el contrato sin causa justificada (despido injustificado). Según el Art. 123 constitucional y la LFT, incluye:</p>
<ul>
  <li><strong>3 meses de salario</strong> (indemnización constitucional).</li>
  <li><strong>20 días de salario por cada año trabajado</strong>.</li>
  <li><strong>12 días de salario por año trabajado</strong> (partes proporcionales de prima de antigüedad).</li>
  <li>Más los mismos conceptos del finiquito: aguinaldo, vacaciones y prima vacacional proporcionales.</li>
</ul>

<h2>Tabla comparativa: finiquito vs liquidación</h2>
<table>
  <thead><tr><th>Concepto</th><th>Finiquito (renuncia)</th><th>Liquidación (despido injustificado)</th></tr></thead>
  <tbody>
    <tr><td>3 meses de salario</td><td>No</td><td>Sí</td></tr>
    <tr><td>20 días por año</td><td>No</td><td>Sí</td></tr>
    <tr><td>Prima de antigüedad</td><td>Solo si tiene 15+ años</td><td>Sí, siempre</td></tr>
    <tr><td>Aguinaldo proporcional</td><td>Sí</td><td>Sí</td></tr>
    <tr><td>Vacaciones proporcionales</td><td>Sí</td><td>Sí</td></tr>
    <tr><td>Prima vacacional</td><td>Sí</td><td>Sí</td></tr>
  </tbody>
</table>

<h2>¿Y si me obligan a renunciar?</h2>
<p>Si el patrón te presiona para que renuncies cuando en realidad te está despidiendo (renuncia forzada), legalmente tienes derecho a la liquidación completa. Puedes demandar ante la Junta de Conciliación y Arbitraje dentro de los 2 años siguientes al despido.</p>

<h2>¿Cuánto me toca en cada caso?</h2>
<p>Usa nuestras calculadoras gratuitas para obtener el monto exacto según tu salario y tiempo de servicio. Solo necesitas ingresar tu salario mensual y la fecha de inicio de tu relación laboral.</p>
    `.trim(),
  },
  {
    slug: "cuantos-dias-vacaciones-corresponden-colombia",
    title: "¿Cuántos días de vacaciones te corresponden en Colombia en 2026?",
    description: "En Colombia, la ley garantiza 15 días hábiles de vacaciones por año trabajado. Te explicamos cómo calcularlos, cuándo tomarlos y qué pasa si no los disfrutas.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>Derecho a vacaciones en Colombia</h2>
<p>Según el <strong>Artículo 186 del Código Sustantivo del Trabajo (CST)</strong>, todo trabajador que haya prestado servicios durante un año continuo tiene derecho a <strong>15 días hábiles consecutivos de vacaciones remuneradas</strong>. Los días hábiles excluyen domingos y festivos.</p>

<h2>¿Cómo se calcula el valor de las vacaciones?</h2>
<p>El valor se calcula sobre el <strong>salario ordinario promedio del último año</strong>, incluyendo el salario básico más los factores salariales que se paguen de forma habitual. La fórmula básica es:</p>
<p><em>Valor vacaciones = (Salario mensual × 15) ÷ 30</em></p>
<p>Es decir, corresponde a la mitad del salario mensual por los 15 días hábiles.</p>

<h2>¿Se pueden acumular vacaciones?</h2>
<p>La ley permite acumular vacaciones hasta por <strong>dos años</strong> con acuerdo entre empleador y trabajador. Para empleados de dirección, confianza y manejo, se pueden acumular hasta por <strong>cuatro años</strong>. Pasado ese plazo, el empleador está obligado a concederlas.</p>

<h2>¿Qué pasa si me liquidan sin haber tomado vacaciones?</h2>
<p>Al terminar el contrato, el empleador debe pagar las vacaciones proporcionales no disfrutadas. Se calcula así:</p>
<p><em>Vacaciones proporcionales = (Días trabajados en el período × Salario mensual) ÷ 720</em></p>

<h2>¿Las vacaciones tienen algún descuento?</h2>
<p>Las vacaciones están exentas de aportes a seguridad social. Solo se descuenta retención en la fuente si aplica según el nivel salarial del trabajador.</p>

<h2>¿Cuándo tengo derecho a disfrutarlas?</h2>
<p>Una vez cumplido el año de servicio, el trabajador puede exigir el disfrute de las vacaciones. El empleador tiene hasta un año para programarlas. Si no se conceden en ese plazo, el trabajador puede demandar su reconocimiento ante el Ministerio del Trabajo.</p>
    `.trim(),
  },
  {
    slug: "como-calcular-aguinaldo-2026-mexico",
    title: "Cómo calcular tu aguinaldo 2026 en México paso a paso",
    description: "El aguinaldo es un derecho irrenunciable en México. Aprende a calcularlo correctamente, cuándo se paga y qué sucede si tu empresa no te lo da a tiempo.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Qué es el aguinaldo?</h2>
<p>El aguinaldo es una prestación obligatoria establecida en el <strong>Artículo 87 de la Ley Federal del Trabajo (LFT)</strong>. Todo trabajador tiene derecho a recibir un mínimo de <strong>15 días de salario</strong> como aguinaldo antes del 20 de diciembre de cada año.</p>

<h2>Fórmula para calcular el aguinaldo</h2>
<p>Si trabajaste todo el año completo (365 días), recibes el equivalente a 15 días de salario diario:</p>
<p><em>Aguinaldo = Salario diario × 15</em></p>
<p>Si no trabajaste el año completo, el aguinaldo es proporcional a los días trabajados:</p>
<p><em>Aguinaldo proporcional = Salario diario × 15 × (Días trabajados ÷ 365)</em></p>

<h2>Ejemplo práctico</h2>
<p>Supongamos que ganas $300 diarios y trabajaste 180 días en el año:</p>
<ul>
  <li>Aguinaldo completo = $300 × 15 = $4,500</li>
  <li>Aguinaldo proporcional = $300 × 15 × (180 ÷ 365) = $2,219</li>
</ul>

<h2>¿Cuándo se paga el aguinaldo?</h2>
<p>La ley establece que debe pagarse antes del <strong>20 de diciembre</strong>. Si el empleador no lo paga en esa fecha, incurre en una violación a la LFT y el trabajador puede presentar una queja ante la STPS (Secretaría del Trabajo y Previsión Social).</p>

<h2>¿El aguinaldo lleva ISR?</h2>
<p>Sí, pero con una exención importante: los primeros <strong>30 días de salario mínimo</strong> de aguinaldo están exentos de ISR. Solo el excedente sobre ese monto está gravado. En la práctica, la mayoría de los trabajadores con aguinaldo de 15 días no pagan ISR o pagan muy poco.</p>

<h2>¿Qué incluye el aguinaldo si me dan más de 15 días?</h2>
<p>Muchas empresas otorgan aguinaldos superiores al mínimo legal, como 30 o 40 días. Esto es una prestación superior a la ley y debe pagarse en su totalidad según lo acordado en el contrato colectivo o individual.</p>
    `.trim(),
  },
  {
    slug: "indemnizacion-despido-injustificado-argentina",
    title: "Indemnización por despido injustificado en Argentina 2026: cómo calcularla",
    description: "Si te despidieron sin causa en Argentina, tienes derecho a una indemnización según la LCT. Aprende a calcularla, qué topes aplican y cuándo prescribe tu derecho.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora SAC" },
    ],
    content: `
<h2>¿Qué dice la Ley de Contrato de Trabajo?</h2>
<p>El <strong>Artículo 245 de la LCT (Ley 20.744)</strong> establece que, ante un despido sin causa justificada, el empleador debe abonar al trabajador una indemnización equivalente a <strong>1 mes de salario por cada año de servicio</strong> o fracción mayor a 3 meses, con un tope en la base de cálculo.</p>

<h2>Fórmula básica de la indemnización</h2>
<p><em>Indemnización = Mejor remuneración mensual normal y habitual × Años de antigüedad</em></p>
<p>El mínimo es siempre 2 meses del mejor salario, sin importar la antigüedad.</p>

<h2>¿Qué es la "mejor remuneración mensual normal y habitual"?</h2>
<p>Es el mayor salario mensual que el trabajador haya percibido en los últimos 12 meses previos al despido. Incluye el sueldo básico más comisiones, horas extra, bonos recurrentes y cualquier otro concepto salarial periódico. No se incluyen pagos ocasionales ni reintegros de gastos.</p>

<h2>Tope indemnizatorio</h2>
<p>La base de cálculo tiene un tope: no puede superar <strong>3 veces el salario promedio de los convenios colectivos vigentes</strong>, que el Ministerio de Trabajo actualiza periódicamente. En 2026, este tope se actualiza trimestralmente según índices de inflación.</p>

<h2>¿Y el preaviso?</h2>
<p>Además de la indemnización, si el empleador no otorga el preaviso correspondiente, debe pagar una <strong>indemnización sustitutiva de preaviso</strong>:</p>
<ul>
  <li>1 mes de salario si la antigüedad es menor a 5 años.</li>
  <li>2 meses de salario si la antigüedad supera los 5 años.</li>
</ul>

<h2>SAC proporcional sobre la indemnización</h2>
<p>También corresponde el pago del SAC (aguinaldo) proporcional al semestre en curso, calculado sobre la mejor remuneración.</p>

<h2>Plazo para reclamar</h2>
<p>El derecho a reclamar prescribe a los <strong>2 años</strong> desde que se tornó exigible (fecha del despido). Es fundamental actuar dentro de ese plazo.</p>
    `.trim(),
  },
  {
    slug: "cotizaciones-afp-chile-2026",
    title: "Cotizaciones AFP Chile 2026: cuánto descuentan de tu sueldo y para qué sirve",
    description: "En Chile, las cotizaciones previsionales se descuentan de tu sueldo bruto. Te explicamos para qué sirven, cuánto es el porcentaje exacto y cómo afectan tu sueldo líquido.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "chile", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
    ],
    content: `
<h2>¿Qué son las cotizaciones AFP?</h2>
<p>Las cotizaciones AFP son aportes obligatorios al sistema de pensiones que cada trabajador dependiente en Chile debe realizar mensualmente. Se rigen por el <strong>Decreto Ley 3.500</strong> y son administradas por las Administradoras de Fondos de Pensiones (AFP).</p>

<h2>¿Cuánto se descuenta del sueldo?</h2>
<p>El total de cotizaciones obligatorias en Chile para 2026 es:</p>
<table>
  <thead><tr><th>Concepto</th><th>Porcentaje</th><th>Quién paga</th></tr></thead>
  <tbody>
    <tr><td>AFP (pensión)</td><td>10%</td><td>Trabajador</td></tr>
    <tr><td>Comisión AFP</td><td>~0.58%–1.45% (varía por AFP)</td><td>Trabajador</td></tr>
    <tr><td>Seguro de invalidez y sobrevivencia (SIS)</td><td>~1.49%</td><td>Empleador</td></tr>
    <tr><td>Salud (Fonasa o Isapre)</td><td>7% (mínimo)</td><td>Trabajador</td></tr>
    <tr><td>Seguro de cesantía</td><td>0.6% (trabajador) + 2.4% (empleador)</td><td>Ambos</td></tr>
  </tbody>
</table>

<h2>¿Cuál es la rentabilidad de los fondos AFP?</h2>
<p>Las AFP ofrecen cinco tipos de fondos (A al E) con distintos niveles de riesgo y rentabilidad esperada:</p>
<ul>
  <li><strong>Fondo A (más riesgo):</strong> mayor inversión en renta variable, mayor rentabilidad histórica a largo plazo.</li>
  <li><strong>Fondo E (más conservador):</strong> principalmente renta fija, menor volatilidad, recomendado para personas próximas a la pensión.</li>
</ul>

<h2>¿Qué pasa con el seguro de cesantía?</h2>
<p>El seguro de cesantía es administrado por la AFC (Administradora de Fondos de Cesantía). Al quedar desempleado, puedes acceder a los fondos de tu cuenta individual o al fondo solidario dependiendo de la causal de término del contrato.</p>

<h2>¿Las cotizaciones forman parte del sueldo bruto?</h2>
<p>Sí. La AFP se descuenta del sueldo bruto antes de calcular el impuesto a la renta (impuesto único de segunda categoría). Esto reduce la base imponible y, por tanto, el impuesto a pagar.</p>
    `.trim(),
  },
  {
    slug: "prima-servicios-colombia-2026",
    title: "Prima de servicios Colombia 2026: cuándo se paga y cómo calcularla",
    description: "La prima de servicios en Colombia equivale a 30 días de salario al año, pagados en dos cuotas: junio y diciembre. Aprende a calcularla correctamente y qué hacer si no te la pagan.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-prima-servicios", name: "Prima de Servicios" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>¿Qué es la prima de servicios?</h2>
<p>La prima de servicios es una prestación social obligatoria en Colombia establecida en el <strong>Artículo 306 del Código Sustantivo del Trabajo</strong>. Equivale a <strong>30 días de salario por año</strong>, pagados en dos cuotas iguales de 15 días.</p>

<h2>¿Cuándo se paga?</h2>
<ul>
  <li><strong>Primera cuota:</strong> máximo el 30 de junio de cada año, por el semestre de enero a junio.</li>
  <li><strong>Segunda cuota:</strong> máximo el 20 de diciembre, por el semestre de julio a diciembre.</li>
</ul>
<p>Si el trabajador ingresó después del inicio del semestre, solo recibe la parte proporcional.</p>

<h2>Fórmula de cálculo</h2>
<p><em>Prima semestral = (Salario mensual × Días trabajados en el semestre) ÷ 360</em></p>
<p>Por ejemplo, si ganas $2.000.000 y trabajaste los 6 meses completos del semestre (180 días):</p>
<p><em>Prima = ($2.000.000 × 180) ÷ 360 = $1.000.000</em></p>

<h2>¿Qué incluye el "salario" para calcular la prima?</h2>
<p>Se incluyen todos los pagos que constituyan salario: salario básico, comisiones, horas extra y cualquier pago habitual con connotación salarial. No se incluyen viáticos, auxilio de transporte ni gastos de representación.</p>

<h2>Prima de servicios al terminar el contrato</h2>
<p>Si el contrato termina en cualquier momento del semestre, la empresa debe pagar la prima proporcional al número de días trabajados en ese semestre, independientemente de la causa del retiro.</p>

<h2>¿La prima lleva descuentos?</h2>
<p>La prima de servicios sí está sujeta a aportes a seguridad social (salud y pensión) y a retención en la fuente si aplica, al igual que el salario ordinario.</p>
    `.trim(),
  },
  {
    slug: "que-es-cts-peru-como-calcular",
    title: "CTS Perú 2026: qué es, cómo se calcula y cuándo depositan",
    description: "La Compensación por Tiempo de Servicios (CTS) es un beneficio laboral que funciona como seguro de desempleo en Perú. Aprende cuánto te depositan, cuándo y cómo calcularlo.",
    country: "peru",
    countryName: "Perú",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "peru", slug: "calculadora-cts", name: "Calculadora CTS" },
      { pais: "peru", slug: "calculadora-gratificacion", name: "Calculadora Gratificación" },
    ],
    content: `
<h2>¿Qué es la CTS?</h2>
<p>La <strong>Compensación por Tiempo de Servicios (CTS)</strong> es un beneficio laboral regulado por el <strong>Decreto Legislativo 650</strong>. Funciona como un fondo de previsión o seguro de desempleo: se deposita semestralmente en una cuenta bancaria a nombre del trabajador y puede retirarse en porcentajes establecidos por ley.</p>

<h2>¿Cuánto equivale la CTS?</h2>
<p>La CTS equivale a <strong>1/12 de la remuneración computable por cada mes trabajado</strong>, más 1/12 de la gratificación. En la práctica, por semestre completo recibe aproximadamente <strong>1 mes de sueldo</strong> (incluyendo gratificación).</p>

<h2>Fórmula de cálculo</h2>
<p><em>CTS semestral = (Remuneración mensual + 1/6 de la gratificación) × (Meses trabajados ÷ 12)</em></p>
<p>Donde la remuneración computable incluye el sueldo básico más asignación familiar si corresponde.</p>

<h2>¿Cuándo se deposita la CTS?</h2>
<ul>
  <li><strong>Primer depósito:</strong> del 1 al 15 de mayo (por el período de noviembre a abril).</li>
  <li><strong>Segundo depósito:</strong> del 1 al 15 de noviembre (por el período de mayo a octubre).</li>
</ul>
<p>Si el empleador no deposita en esos plazos, está obligado a pagar intereses.</p>

<h2>¿Puedo retirar mi CTS?</h2>
<p>Desde 2021, la legislación peruana ha permitido retiros extraordinarios de la CTS en varios momentos. Para 2026, la regla general es que puedes retirar el excedente que supere 4 remuneraciones brutas mensuales acumuladas en tu cuenta. Consulta las disposiciones vigentes en tu banco o en el MTPE.</p>

<h2>¿Qué trabajadores tienen derecho a CTS?</h2>
<p>Tienen derecho a CTS los trabajadores que laboran al menos 4 horas diarias (régimen general). Están excluidos los trabajadores que perciben CTS en su remuneración integral o bajo regímenes especiales como el agrario o el microempresarial.</p>
    `.trim(),
  },
  {
    slug: "carta-renuncia-por-maltrato-laboral",
    title: "Carta de renuncia por maltrato laboral: cómo redactarla y qué derechos tienes",
    description: "Si renuncias por acoso, maltrato o condiciones ilegales, en muchos países puedes exigir una liquidación como si te hubieran despedido. Te explicamos cómo hacerlo correctamente.",
    country: null,
    countryName: null,
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Finiquito México" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Liquidación Colombia" },
      { pais: "espana", slug: "calculadora-finiquito", name: "Finiquito España" },
    ],
    content: `
<h2>Renuncia voluntaria vs renuncia forzada por maltrato</h2>
<p>No toda renuncia es igual. Cuando un trabajador se ve obligado a abandonar su empleo por condiciones de trabajo intolerables — acoso laboral, hostigamiento sexual, incumplimiento de salario, violencia física o psicológica — la ley de muchos países reconoce el concepto de <strong>despido indirecto</strong> o <strong>rescisión por causa imputable al patrón</strong>. En estos casos, el trabajador tiene derecho a la misma indemnización que si lo hubieran despedido.</p>

<h2>¿En qué países aplica el despido indirecto?</h2>
<ul>
  <li><strong>México:</strong> Art. 51 LFT. El trabajador puede rescindir sin responsabilidad y exigir la liquidación completa (3 meses + 20 días por año).</li>
  <li><strong>Colombia:</strong> Terminación con justa causa imputable al empleador (Art. 62 CST). Derecho a cesantías, prima e indemnización.</li>
  <li><strong>España:</strong> Extinción del contrato por voluntad del trabajador por causa del empresario (Art. 50 ET). Indemnización igual que el despido improcedente (33 días por año).</li>
  <li><strong>Argentina:</strong> Art. 246 LCT. El trabajador puede considerarse despedido con derecho a indemnización.</li>
  <li><strong>Chile:</strong> Autodespido o despido indirecto (Art. 171 Código del Trabajo). Indemnización más recargo del 80%.</li>
</ul>

<h2>¿Cómo debe ser la carta de renuncia por maltrato?</h2>
<p>Es crucial que la carta <strong>no parezca una renuncia voluntaria ordinaria</strong>. Debe dejar constancia expresa de:</p>
<ol>
  <li>Las conductas o situaciones que motivaron la renuncia (fechas y hechos concretos).</li>
  <li>Las normas legales violadas por el empleador.</li>
  <li>La invocación explícita del artículo legal que ampara la rescisión por causa del patrón.</li>
  <li>La exigencia del pago de la liquidación o indemnización correspondiente.</li>
</ol>

<h2>Ejemplo de párrafo clave para tu carta</h2>
<p>"Por medio de la presente, y en ejercicio del derecho que me confiere el Artículo [número] de [ley], me veo obligado/a a rescindir la relación laboral por causa imputable exclusivamente al patrón/empleador, en virtud de [describir hechos: acoso, falta de pago, condiciones insalubres, etc.]. En consecuencia, exijo el pago de la indemnización de ley correspondiente."</p>

<h2>Recomendaciones prácticas</h2>
<ul>
  <li>Envía la carta por <strong>escrito y con acuse de recibo</strong> (carta certificada, correo con confirmación de lectura o ante testigos).</li>
  <li>Guarda todas las <strong>evidencias</strong>: mensajes, correos, testigos, informes médicos si aplica.</li>
  <li>Consulta con un abogado laboral antes de firmar cualquier documento de liquidación.</li>
  <li>En México, Colombia y España existen servicios gratuitos de asesoría laboral del gobierno.</li>
</ul>
    `.trim(),
  },
  {
    slug: "salario-minimo-2026-latinoamerica-comparativa",
    title: "Salario mínimo 2026 en Latinoamérica: comparativa de los 10 países",
    description: "¿En qué país de habla hispana se paga mejor? Comparamos los salarios mínimos de México, Colombia, Argentina, Chile, Perú y más países, en USD y ajustados por poder adquisitivo.",
    country: null,
    countryName: null,
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Nómina Neta México" },
      { pais: "colombia", slug: "calculadora-nomina-neta", name: "Nómina Neta Colombia" },
      { pais: "chile", slug: "calculadora-finiquito", name: "Finiquito Chile" },
    ],
    content: `
<h2>Salarios mínimos 2026 en países hispanohablantes</h2>
<p>A continuación presentamos los salarios mínimos vigentes para 2026 en los principales países de habla hispana, expresados en moneda local y en dólares USD (tipo de cambio aproximado de enero 2026):</p>
<table>
  <thead><tr><th>País</th><th>Salario mínimo mensual</th><th>Equivalente USD aprox.</th></tr></thead>
  <tbody>
    <tr><td>España</td><td>€1.184</td><td>~$1.270 USD</td></tr>
    <tr><td>Chile</td><td>$500.000 CLP</td><td>~$530 USD</td></tr>
    <tr><td>Costa Rica</td><td>₡380.000 aprox.</td><td>~$730 USD</td></tr>
    <tr><td>México</td><td>$278,80 MXN/día (~$8.375/mes)</td><td>~$415 USD</td></tr>
    <tr><td>Colombia</td><td>$1.423.500 COP</td><td>~$340 USD</td></tr>
    <tr><td>Perú</td><td>S/ 1.025</td><td>~$270 USD</td></tr>
    <tr><td>Ecuador</td><td>$460 USD</td><td>$460 USD</td></tr>
    <tr><td>Bolivia</td><td>Bs. 2.500</td><td>~$360 USD</td></tr>
    <tr><td>Argentina</td><td>$400.000+ ARS</td><td>~$380 USD (var. por inflación)</td></tr>
    <tr><td>Venezuela</td><td>Variable (muy bajo en USD)</td><td>~$5-8 USD</td></tr>
  </tbody>
</table>

<h2>¿El salario mínimo es suficiente para vivir?</h2>
<p>El poder adquisitivo real varía enormemente según el costo de vida de cada país. España tiene el salario más alto en términos nominales, pero también el costo de vida más elevado del grupo. Ecuador, aunque tiene salario mínimo en dólares, tiene un costo de vida relativamente bajo.</p>

<h2>Factores que afectan el salario real</h2>
<ul>
  <li><strong>Descuentos obligatorios:</strong> En México se descuenta IMSS e ISR; en Colombia, EPS y pensión; en España, Seguridad Social e IRPF.</li>
  <li><strong>Prestaciones adicionales:</strong> México tiene aguinaldo de 15 días; Ecuador tiene dos sueldos extra; Colombia tiene prima de servicios.</li>
  <li><strong>Inflación:</strong> Argentina y Venezuela tienen inflación muy alta, que erosiona el salario real constantemente.</li>
</ul>

<h2>¿Cuánto cobras realmente después de descuentos?</h2>
<p>El salario neto (lo que realmente recibes en la cuenta) es siempre menor al salario bruto. Usa nuestras calculadoras de nómina neta para conocer tu salario real después de todos los descuentos en tu país.</p>
    `.trim(),
  },
  {
    slug: "horas-extra-como-se-calculan-por-pais",
    title: "Horas extra en México, Colombia, España y Argentina: ¿cuánto te deben pagar?",
    description: "Las horas extra se calculan de forma diferente en cada país. Descubre el porcentaje de recargo que te corresponde y cómo reclamar si no te las pagan correctamente.",
    country: null,
    countryName: null,
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Nómina Neta México" },
      { pais: "argentina", slug: "calculadora-horas-extra", name: "Horas Extra Argentina" },
    ],
    content: `
<h2>Horas extra en México</h2>
<p>La <strong>Ley Federal del Trabajo</strong> permite trabajar hasta 3 horas extra por día y 9 horas por semana. Los recargos son:</p>
<ul>
  <li>Las primeras 9 horas extra semanales: se pagan al <strong>200%</strong> (doble del salario por hora).</li>
  <li>Las horas extra que excedan las 9 semanales: se pagan al <strong>300%</strong> (triple).</li>
</ul>
<p>Las horas extra en días de descanso obligatorio (domingos y festivos) se pagan también con recargo adicional.</p>

<h2>Horas extra en Colombia</h2>
<p>El <strong>Código Sustantivo del Trabajo</strong> establece:</p>
<ul>
  <li>Horas extra diurnas (6am-10pm): recargo del <strong>25%</strong> sobre el valor ordinario.</li>
  <li>Horas extra nocturnas (10pm-6am): recargo del <strong>75%</strong>.</li>
  <li>Máximo 2 horas extra diarias y 12 horas semanales sin autorización especial del Ministerio.</li>
</ul>

<h2>Horas extra en España</h2>
<p>El <strong>Estatuto de los Trabajadores</strong> limita las horas extra a <strong>80 por año</strong>. Pueden compensarse con:</p>
<ul>
  <li>Pago económico: mínimo al valor de la hora ordinaria (el convenio puede fijar un recargo mayor).</li>
  <li>Descanso compensatorio equivalente.</li>
</ul>

<h2>Horas extra en Argentina</h2>
<p>La <strong>LCT</strong> establece un límite de 3 horas diarias y 30 horas mensuales. Los recargos son:</p>
<ul>
  <li>Horas extra en días hábiles: recargo del <strong>50%</strong>.</li>
  <li>Horas extra en sábados después de las 13h, domingos y feriados: recargo del <strong>100%</strong>.</li>
</ul>

<h2>¿Qué pasa si no te pagan las horas extra?</h2>
<p>En todos estos países, el trabajador puede reclamar el pago retroactivo de horas extra con los recargos correspondientes, generalmente hasta 2 años atrás (prescripción). Para ello se puede acudir a la inspección de trabajo del país, presentar una demanda laboral o llegar a un acuerdo en sede de conciliación.</p>
    `.trim(),
  },
  {
    slug: "prestaciones-sociales-venezuela-lottt-2026",
    title: "Prestaciones sociales en Venezuela 2026: cómo se calculan según la LOTTT",
    description: "Las prestaciones sociales en Venezuela son un derecho irrenunciable. Aprende cómo se acumulan, cuándo cobrarlas y cuánto te corresponde según la Ley Orgánica del Trabajo.",
    country: "venezuela",
    countryName: "Venezuela",
    publishDate: "2026-03-25",
    relatedCalculators: [
      { pais: "venezuela", slug: "calculadora-prestaciones-sociales", name: "Prestaciones Sociales" },
      { pais: "venezuela", slug: "calculadora-utilidades", name: "Utilidades" },
    ],
    content: `
<h2>¿Qué son las prestaciones sociales en Venezuela?</h2>
<p>Las prestaciones sociales son el principal beneficio de estabilidad laboral en Venezuela, reguladas por el <strong>Artículo 141 de la LOTTT (Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras)</strong>. Se acumulan durante toda la relación laboral y funcionan como un fondo de ahorro garantizado por ley.</p>

<h2>¿Cómo se acumulan?</h2>
<p>Las prestaciones sociales se calculan de la siguiente forma:</p>
<ul>
  <li><strong>Primer y segundo año:</strong> 15 días de salario integral por cada trimestre trabajado.</li>
  <li><strong>A partir del tercer año:</strong> 45 días de salario integral por año, más 2 días adicionales por año acumulativos.</li>
</ul>
<p>El salario integral incluye el salario básico más alícuotas de bono vacacional y utilidades.</p>

<h2>¿Dónde se depositan?</h2>
<p>El empleador debe depositar las prestaciones sociales trimestralmente en un fondo individual del trabajador en una institución financiera elegida por el trabajador. El trabajador puede solicitar anticipos de hasta el 75% de las prestaciones para vivienda, salud o educación.</p>

<h2>Utilidades: otro derecho importante</h2>
<p>Además de las prestaciones, los trabajadores tienen derecho a <strong>utilidades equivalentes a un mínimo de 15 días de salario</strong> y un máximo de 4 meses, dependiendo de las ganancias de la empresa. Las empresas que obtengan beneficios deben distribuir al menos el 15% entre sus trabajadores.</p>

<h2>Contexto económico 2026</h2>
<p>Debido a la situación económica de Venezuela, muchos salarios y prestaciones se expresan en bolívares pero pueden ser complementados o negociados en dólares o petros según el sector. Es fundamental verificar el tipo de cambio oficial del BCV al momento del cálculo.</p>
    `.trim(),
  },
  {
    slug: "cuanto-finiquito-corresponde-por-anos-antiguedad-mexico",
    title: "¿Cuánto finiquito me corresponde según mis años de antigüedad en México?",
    description: "El finiquito varía según cuántos años llevas trabajando. Te mostramos exactamente cuántos días de vacaciones te corresponden con 1, 2, 5 o 10 años de antigüedad y cómo afecta al cálculo.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
    ],
    content: `
<h2>¿Por qué cambia el finiquito según la antigüedad?</h2>
<p>El componente del finiquito que varía con la antigüedad son las <strong>vacaciones proporcionales</strong>. A más años trabajados, más días de vacaciones acumulas por año según la tabla de la Ley Federal del Trabajo (reformada en 2023). El aguinaldo proporcional y la prima vacacional también aumentan, pero de forma lineal.</p>

<h2>Tabla de vacaciones según antigüedad (LFT 2026)</h2>
<table>
  <thead><tr><th>Años trabajados</th><th>Días de vacaciones por año</th></tr></thead>
  <tbody>
    <tr><td>1 año</td><td>12 días</td></tr>
    <tr><td>2 años</td><td>14 días</td></tr>
    <tr><td>3 años</td><td>16 días</td></tr>
    <tr><td>4 años</td><td>18 días</td></tr>
    <tr><td>5 años</td><td>20 días</td></tr>
    <tr><td>6 a 10 años</td><td>22 días</td></tr>
    <tr><td>11 a 15 años</td><td>24 días</td></tr>
    <tr><td>16 a 20 años</td><td>26 días</td></tr>
    <tr><td>21 a 25 años</td><td>28 días</td></tr>
    <tr><td>26 a 30 años</td><td>30 días</td></tr>
    <tr><td>31+ años</td><td>32 días</td></tr>
  </tbody>
</table>
<p>Esta es la reforma aprobada en 2023 que duplicó el mínimo de vacaciones de 6 a 12 días para el primer año.</p>

<h2>Ejemplo: finiquito con 2 años de antigüedad</h2>
<p>Supón que ganas $15,000 mensuales y llevas 2 años y 3 meses trabajando (2.25 años). Al renunciar en marzo:</p>
<ul>
  <li><strong>Salario diario:</strong> $15,000 ÷ 30 = $500</li>
  <li><strong>Aguinaldo proporcional:</strong> $500 × 15 × (90 días trabajados en el año ÷ 365) = $1,849</li>
  <li><strong>Vacaciones proporcionales:</strong> 14 días × (90 ÷ 365) = 3.45 días → $500 × 3.45 = $1,726</li>
  <li><strong>Prima vacacional:</strong> $1,726 × 25% = $431</li>
  <li><strong>Total finiquito:</strong> ~$4,006</li>
</ul>

<h2>Ejemplo: finiquito con 5 años de antigüedad</h2>
<p>Con el mismo salario de $15,000 y 5 años exactos trabajados (renunciando en enero, año completo):</p>
<ul>
  <li><strong>Aguinaldo:</strong> $500 × 15 = $7,500</li>
  <li><strong>Vacaciones:</strong> $500 × 20 días = $10,000</li>
  <li><strong>Prima vacacional:</strong> $10,000 × 25% = $2,500</li>
  <li><strong>Total finiquito:</strong> $20,000</li>
</ul>
<p>La diferencia entre 1 y 5 años de antigüedad puede ser de más del doble en el concepto de vacaciones.</p>

<h2>¿Y si no tomé mis vacaciones?</h2>
<p>Si tienes vacaciones acumuladas de años anteriores que no disfrutaste, también debes recibirlas en el finiquito. La LFT establece que las vacaciones no caducan y deben pagarse al momento de la separación.</p>
    `.trim(),
  },
  {
    slug: "vacaciones-proporcionales-al-renunciar-mexico",
    title: "Vacaciones proporcionales al renunciar en México: cómo se calculan en 2026",
    description: "Al renunciar antes de completar el año, tienes derecho a las vacaciones que generaste proporcionalmente. Aprende la fórmula exacta y cuánto te corresponde según tu salario y fecha de renuncia.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Tengo derecho a vacaciones si renuncio antes del año?</h2>
<p>Sí. Aunque no hayas completado el año de servicio, la <strong>Ley Federal del Trabajo</strong> te garantiza el pago de vacaciones proporcionales al tiempo trabajado. Este derecho es irrenunciable y debe incluirse en tu finiquito.</p>

<h2>Fórmula para calcular vacaciones proporcionales</h2>
<p><em>Días de vacaciones proporcionales = Días de vacaciones anuales × (Días trabajados en el año ÷ 365)</em></p>
<p>Los días de vacaciones anuales dependen de tu antigüedad:</p>
<ul>
  <li>Primer año: 12 días anuales</li>
  <li>Segundo año: 14 días anuales</li>
  <li>Tercer año: 16 días anuales</li>
</ul>

<h2>Ejemplo práctico</h2>
<p>Llevas 8 meses trabajando (240 días) en tu primer año. Tu salario es $12,000 mensuales:</p>
<ul>
  <li>Días de vacaciones anuales para el primer año: 12</li>
  <li>Vacaciones proporcionales: 12 × (240 ÷ 365) = <strong>7.89 días</strong></li>
  <li>Salario diario: $12,000 ÷ 30 = $400</li>
  <li>Valor de vacaciones proporcionales: 7.89 × $400 = <strong>$3,156</strong></li>
  <li>Prima vacacional (25%): $3,156 × 0.25 = <strong>$789</strong></li>
</ul>

<h2>¿Y si ya tomé algunas vacaciones durante el año?</h2>
<p>Se descuentan los días ya disfrutados. Si te corresponden 7.89 días y ya tomaste 5, solo recibes el pago de 2.89 días en el finiquito.</p>

<h2>¿Cuándo te pagan las vacaciones proporcionales?</h2>
<p>Deben pagarse el mismo día en que se formaliza la renuncia, junto con el resto del finiquito. Si el patrón no las paga, puede ser sancionado por la STPS y el trabajador puede demandar ante el Centro de Conciliación Laboral.</p>
    `.trim(),
  },
  {
    slug: "liquidacion-renuncia-voluntaria-colombia-que-incluye",
    title: "Liquidación por renuncia voluntaria en Colombia: ¿qué te pagan y qué no?",
    description: "En Colombia, renunciar voluntariamente no significa perder tus prestaciones. Te explicamos exactamente qué incluye la liquidación al renunciar y qué conceptos solo aplican al despido.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Calculadora de Cesantías" },
    ],
    content: `
<h2>¿Pierdo mis derechos si renuncio voluntariamente en Colombia?</h2>
<p>No. Al renunciar voluntariamente en Colombia tienes derecho a recibir todas tus <strong>prestaciones sociales</strong> generadas durante el tiempo trabajado. Lo que no recibes al renunciar es la indemnización por despido sin justa causa, que solo aplica cuando es el empleador quien termina el contrato sin razón válida.</p>

<h2>¿Qué incluye la liquidación por renuncia?</h2>
<ul>
  <li><strong>Cesantías:</strong> 1 mes de salario por año trabajado (proporcional si es menos de un año).</li>
  <li><strong>Intereses sobre cesantías:</strong> 12% anual sobre el saldo de cesantías.</li>
  <li><strong>Prima de servicios:</strong> 15 días de salario por semestre trabajado (proporcional).</li>
  <li><strong>Vacaciones:</strong> 15 días hábiles por año trabajado (proporcional si es menos de un año).</li>
  <li><strong>Salarios pendientes:</strong> días trabajados no pagados.</li>
  <li><strong>Auxilio de transporte proporcional:</strong> si aplica según tu nivel salarial.</li>
</ul>

<h2>¿Qué NO te pagan al renunciar?</h2>
<ul>
  <li><strong>Indemnización por despido sin justa causa:</strong> solo aplica cuando el empleador te despide sin justa causa.</li>
</ul>

<h2>Ejemplo de liquidación por renuncia con 1 año y 4 meses</h2>
<p>Salario mensual: $2.000.000 COP. Tiempo trabajado: 1 año y 4 meses (16 meses / 480 días).</p>
<ul>
  <li>Cesantías: ($2.000.000 × 480) ÷ 360 = <strong>$2.666.667</strong></li>
  <li>Intereses cesantías: $2.666.667 × 12% × (480÷360) = <strong>$426.667</strong></li>
  <li>Prima proporcional último semestre: ($2.000.000 × 120) ÷ 360 = <strong>$666.667</strong></li>
  <li>Vacaciones proporcionales: ($2.000.000 × 480) ÷ 720 = <strong>$1.333.333</strong></li>
  <li><strong>Total aproximado: $5.093.334</strong></li>
</ul>

<h2>¿Cuándo deben pagar la liquidación?</h2>
<p>El empleador tiene hasta <strong>15 días hábiles</strong> después de la fecha de retiro para realizar el pago de la liquidación. Si no cumple, debe pagar un día de salario adicional por cada día de mora hasta el momento del pago efectivo.</p>
    `.trim(),
  },
  {
    slug: "cuanto-paro-con-1-2-anos-cotizados-espana",
    title: "¿Cuánto paro cobro con 1 o 2 años cotizados en España en 2026?",
    description: "La duración y el importe del paro dependen directamente de tus meses cotizados. Te mostramos exactamente cuánto cobrarías con 12, 18, 24 meses cotizados y cómo se calcula la base reguladora.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-paro", name: "Calculadora del Paro" },
    ],
    content: `
<h2>¿Cuántos meses de paro me corresponden?</h2>
<p>La duración de la prestación por desempleo en España equivale a la tercera parte de los días cotizados en los últimos 6 años, con un mínimo de 120 días y un máximo de 720 días (2 años):</p>
<table>
  <thead><tr><th>Días cotizados</th><th>Duración del paro</th></tr></thead>
  <tbody>
    <tr><td>360 – 539 (1 año)</td><td>4 meses</td></tr>
    <tr><td>540 – 719</td><td>6 meses</td></tr>
    <tr><td>720 – 899 (2 años)</td><td>8 meses</td></tr>
    <tr><td>900 – 1.079</td><td>10 meses</td></tr>
    <tr><td>1.080 – 1.259</td><td>12 meses</td></tr>
    <tr><td>1.260 – 1.439</td><td>16 meses</td></tr>
    <tr><td>1.440 – 1.619</td><td>20 meses</td></tr>
    <tr><td>1.620+ (4,5 años+)</td><td>24 meses (máximo)</td></tr>
  </tbody>
</table>

<h2>¿Cuánto dinero cobro?</h2>
<p>El importe se calcula sobre tu <strong>base reguladora</strong>, que es el promedio de las bases de cotización de los últimos 180 días dividido entre 180:</p>
<ul>
  <li><strong>Primeros 180 días:</strong> 70% de la base reguladora.</li>
  <li><strong>A partir del día 181:</strong> 60% de la base reguladora.</li>
</ul>
<p>Existen topes máximos y mínimos que se actualizan anualmente con el IPREM.</p>

<h2>Ejemplo con 1 año cotizado (salario bruto €1.800/mes)</h2>
<ul>
  <li>Base reguladora: €1.800 × 12 meses ÷ 180 días = €120/día</li>
  <li>Prestación primeros 180 días: €120 × 70% = <strong>€84/día (~€2.520/mes)</strong></li>
  <li>Duración: 4 meses (360 días cotizados)</li>
  <li>Total prestación: ~€10.080</li>
</ul>

<h2>Ejemplo con 2 años cotizados (salario bruto €1.800/mes)</h2>
<ul>
  <li>Duración: 8 meses</li>
  <li>Primeros 6 meses: €84/día</li>
  <li>Meses 7-8: €120 × 60% = €72/día</li>
  <li>Total prestación: ~€18.720</li>
</ul>

<h2>¿Cotiza el paro para la jubilación?</h2>
<p>Sí. Durante el cobro de la prestación contributiva, la Seguridad Social sigue cotizando a tu nombre para la jubilación sobre el 100% de la base reguladora.</p>
    `.trim(),
  },
  {
    slug: "despido-procedente-improcedente-nulo-espana-diferencias",
    title: "Despido procedente, improcedente y nulo en España: diferencias y qué te pagan en cada caso",
    description: "No todos los despidos son iguales en España. El tipo de despido determina si cobras indemnización y cuánto. Te explicamos las diferencias entre procedente, improcedente y nulo.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-despido-improcedente", name: "Despido Improcedente" },
      { pais: "espana", slug: "calculadora-finiquito", name: "Finiquito España" },
      { pais: "espana", slug: "calculadora-paro", name: "Calculadora del Paro" },
    ],
    content: `
<h2>Tipos de despido en España</h2>

<h2>1. Despido procedente</h2>
<p>El empleador tiene causa justificada para despedirte (causas disciplinarias graves o causas objetivas válidas como necesidades productivas). En este caso:</p>
<ul>
  <li><strong>Indemnización:</strong> 0 € (despido disciplinario) o 20 días por año con tope de 12 mensualidades (despido objetivo).</li>
  <li><strong>Finiquito:</strong> sí se cobra (vacaciones pendientes, partes proporcionales de pagas extra).</li>
  <li><strong>Paro:</strong> sí tienes derecho si has cotizado suficiente.</li>
</ul>

<h2>2. Despido improcedente</h2>
<p>El empleador no puede probar la causa del despido o el procedimiento fue incorrecto. Es el tipo más frecuente. En este caso:</p>
<ul>
  <li><strong>Indemnización:</strong> 33 días de salario por año trabajado, con tope de 24 mensualidades (para contratos desde 12/02/2012). Contratos anteriores: 45 días/año hasta esa fecha y 33 desde entonces.</li>
  <li><strong>Finiquito:</strong> sí.</li>
  <li><strong>Paro:</strong> sí.</li>
  <li>El empleador puede optar por readmitirte o pagarte la indemnización.</li>
</ul>

<h2>3. Despido nulo</h2>
<p>El despido vulnera derechos fundamentales: discriminación por sexo, embarazo, maternidad, paternidad, religión, orientación sexual, o represalia por denunciar al empleador. En este caso:</p>
<ul>
  <li><strong>Readmisión obligatoria:</strong> el juez ordena tu reincorporación al puesto.</li>
  <li><strong>Salarios de tramitación:</strong> cobras todos los salarios que habrías percibido desde el despido hasta la readmisión.</li>
  <li>No existe la opción de indemnización en lugar de readmisión (salvo excepciones).</li>
</ul>

<h2>¿Cómo saber qué tipo de despido tienes?</h2>
<p>El empleador debe entregarte una <strong>carta de despido</strong> por escrito con las causas. Si la carta no especifica causa, si la causa es falsa o si vulnera tus derechos, puedes impugnar el despido en el Servicio de Mediación, Arbitraje y Conciliación (SMAC) dentro de los <strong>20 días hábiles</strong> desde la notificación.</p>
    `.trim(),
  },
  {
    slug: "sac-aguinaldo-argentina-como-calcular-proporcional",
    title: "SAC en Argentina 2026: cómo calcular el aguinaldo proporcional al terminar el contrato",
    description: "El SAC (sueldo anual complementario) se paga en junio y diciembre, pero si te van antes, te corresponde la parte proporcional. Aprende a calcularlo exactamente.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-sac", name: "Calculadora SAC" },
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Calculadora Indemnización" },
    ],
    content: `
<h2>¿Qué es el SAC y cuándo se paga?</h2>
<p>El <strong>Sueldo Anual Complementario (SAC)</strong>, conocido como aguinaldo, es una prestación obligatoria regulada por el <strong>Artículo 121 de la LCT</strong>. Equivale a la doceava parte del total de remuneraciones percibidas en el semestre y se abona en dos cuotas:</p>
<ul>
  <li><strong>Primera cuota:</strong> última jornada hábil del mes de junio.</li>
  <li><strong>Segunda cuota:</strong> última jornada hábil del mes de diciembre.</li>
</ul>

<h2>Fórmula del SAC proporcional al terminar el contrato</h2>
<p>Si el contrato termina antes de la fecha de pago del SAC, tienes derecho a la parte proporcional al tiempo trabajado en ese semestre:</p>
<p><em>SAC proporcional = (Mejor remuneración mensual del semestre × Días trabajados en el semestre) ÷ 365</em></p>

<h2>Ejemplo práctico</h2>
<p>Te despiden el 15 de abril. Tu salario es $350.000 ARS. Tiempo trabajado en el semestre enero-junio: 105 días.</p>
<ul>
  <li>SAC proporcional = ($350.000 × 105) ÷ 365 = <strong>$100.685 ARS</strong></li>
</ul>

<h2>¿El SAC se incluye en la indemnización?</h2>
<p>Sí. Cuando se calcula la indemnización por despido sin causa, también se debe sumar el SAC proporcional del semestre en curso. Algunos convenios colectivos establecen condiciones más favorables.</p>

<h2>¿Lleva descuentos el SAC?</h2>
<p>Sí. El SAC está sujeto a los mismos descuentos que el salario mensual: aportes jubilatorios (11%), obra social (3%), ANSSAL (0,5%) y, si corresponde, impuesto a las ganancias de cuarta categoría.</p>
    `.trim(),
  },
  {
    slug: "preaviso-argentina-cuanto-dias-corresponden",
    title: "Preaviso en Argentina: cuántos días corresponden y qué pasa si no lo otorgan",
    description: "El preaviso en Argentina es obligatorio tanto para el empleador como para el trabajador. Si no se otorga, se debe pagar la indemnización sustitutiva. Entérate de los plazos y montos exactos.",
    country: "argentina",
    countryName: "Argentina",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "argentina", slug: "calculadora-indemnizacion", name: "Calculadora Indemnización" },
    ],
    content: `
<h2>¿Qué es el preaviso?</h2>
<p>El preaviso es la obligación de notificar con anticipación la voluntad de terminar el contrato de trabajo. Está regulado por los <strong>Artículos 231 y 232 de la LCT</strong> y puede ser otorgado tanto por el empleador como por el trabajador.</p>

<h2>¿Cuántos días de preaviso corresponden?</h2>
<table>
  <thead><tr><th>Situación</th><th>Plazo de preaviso</th></tr></thead>
  <tbody>
    <tr><td>Durante el período de prueba</td><td>15 días</td></tr>
    <tr><td>Antigüedad menor a 5 años</td><td>1 mes</td></tr>
    <tr><td>Antigüedad de 5 años o más</td><td>2 meses</td></tr>
  </tbody>
</table>
<p>Estos plazos aplican tanto si el empleador despide al trabajador como si el trabajador renuncia.</p>

<h2>Indemnización sustitutiva de preaviso</h2>
<p>Si el empleador despide sin otorgar el período de preaviso, debe pagar la <strong>indemnización sustitutiva</strong> equivalente al salario que el trabajador habría percibido durante ese período:</p>
<ul>
  <li>Antigüedad menor a 5 años: 1 mes de salario.</li>
  <li>Antigüedad de 5+ años: 2 meses de salario.</li>
</ul>

<h2>Integración del mes de despido</h2>
<p>Si el despido ocurre en un día que no sea el último del mes, el empleador también debe pagar los días restantes hasta fin de mes (integración del mes de despido, Art. 233 LCT).</p>

<h2>¿Qué pasa si el trabajador no respeta el preaviso al renunciar?</h2>
<p>Si el trabajador renuncia sin dar preaviso, el empleador puede descontarle de la liquidación final el importe equivalente a los días de preaviso no otorgados. Sin embargo, en la práctica es poco frecuente que los empleadores ejerzan este derecho.</p>
    `.trim(),
  },
  {
    slug: "gratificacion-chile-como-calcular-legal-garantizada",
    title: "Gratificación en Chile 2026: cómo calcular la legal y la garantizada",
    description: "En Chile existen dos sistemas de gratificación: la legal (25% de las utilidades) y la garantizada (4,75 sueldos mínimos al año). Te explicamos cuál aplica en tu caso y cómo calcularla.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Qué es la gratificación en Chile?</h2>
<p>La gratificación es un beneficio legal obligatorio regulado por el <strong>Artículo 47 del Código del Trabajo</strong>. Las empresas que tengan utilidades líquidas en su giro deben repartir anualmente el 30% de esas utilidades entre sus trabajadores. Existen dos modalidades:</p>

<h2>Gratificación legal (Art. 47)</h2>
<p>El empleador paga el <strong>25% de las remuneraciones anuales del trabajador</strong>, con tope en 4,75 Ingresos Mínimos Mensuales (IMM) al año. En 2026, con el ingreso mínimo de $500.000:</p>
<p><em>Tope anual = 4,75 × $500.000 = $2.375.000</em></p>
<p>Si el 25% de tu sueldo anual supera ese tope, solo recibes el tope.</p>

<h2>Gratificación garantizada (la más común)</h2>
<p>La mayoría de las empresas opta por pagar la gratificación garantizada mensualmente: <strong>25% del sueldo mensual del trabajador</strong>, con tope mensual de:</p>
<p><em>Tope mensual = (4,75 × $500.000) ÷ 12 = $197.917</em></p>
<p>Esto significa que si tu sueldo base mensual es $790.000 o menos, recibes exactamente el 25% de tu sueldo como gratificación. Si ganas más, el tope se aplica.</p>

<h2>Ejemplo práctico</h2>
<p>Trabajador con sueldo base de $600.000 mensual:</p>
<ul>
  <li>25% de $600.000 = $150.000</li>
  <li>$150.000 &lt; tope de $197.917 → recibe <strong>$150.000 mensual</strong> de gratificación.</li>
  <li>Sueldo total: $600.000 + $150.000 = $750.000</li>
</ul>

<h2>¿Se paga gratificación proporcional al terminar?</h2>
<p>Sí. Al terminar el contrato antes de diciembre, si la empresa no ha pagado la gratificación mensualmente, debe pagar la parte proporcional al tiempo trabajado en el año. Si ya la pagaba mensualmente, no hay pago adicional al finiquito.</p>
    `.trim(),
  },
  {
    slug: "seguro-cesantia-chile-cuando-cobrar-requisitos",
    title: "Seguro de cesantía en Chile 2026: cuándo cobrar, requisitos y montos",
    description: "El seguro de cesantía en Chile es un fondo individual que se acumula durante tu vida laboral. Aprende cuándo puedes retirarlo, cuánto recibirías y qué diferencia hay entre cuenta individual y fondo solidario.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Qué es el seguro de cesantía?</h2>
<p>El seguro de cesantía es administrado por la <strong>AFC (Administradora de Fondos de Cesantía)</strong> y está regulado por la Ley 19.728. Funciona con dos componentes: una cuenta individual (de propiedad del trabajador) y un fondo solidario (colectivo).</p>

<h2>Cotizaciones mensuales</h2>
<table>
  <thead><tr><th>Aporte</th><th>Contrato indefinido</th><th>Contrato a plazo fijo</th></tr></thead>
  <tbody>
    <tr><td>Empleador → Cuenta individual</td><td>1,6%</td><td>3%</td></tr>
    <tr><td>Empleador → Fondo solidario</td><td>0,8%</td><td>0%</td></tr>
    <tr><td>Trabajador → Cuenta individual</td><td>0,6%</td><td>0%</td></tr>
  </tbody>
</table>

<h2>¿Cuándo puedo retirar el seguro?</h2>
<p><strong>Cuenta individual:</strong> puedes retirarla cuando termina el contrato, independientemente de la causal. El monto acumulado es tuyo.</p>
<p><strong>Fondo solidario:</strong> solo accedes si:</p>
<ul>
  <li>Fuiste despedido (contrato indefinido con al menos 12 meses de cotizaciones continuas).</li>
  <li>Tu cuenta individual no es suficiente para cubrir el beneficio mínimo.</li>
</ul>

<h2>¿Cuánto recibirías del fondo solidario?</h2>
<p>Los primeros meses recibes un porcentaje decreciente del promedio de tus últimas remuneraciones:</p>
<ul>
  <li>Mes 1: 70%</li>
  <li>Mes 2: 55%</li>
  <li>Mes 3: 45%</li>
  <li>Mes 4: 40%</li>
  <li>Mes 5: 35%</li>
</ul>
<p>Con topes mínimos y máximos definidos anualmente por la AFC.</p>

<h2>¿Si renuncio voluntariamente cobro el seguro de cesantía?</h2>
<p>Si renuncias, solo accedes a tu <strong>cuenta individual</strong> (lo que tú y tu empleador aportaron), no al fondo solidario. El fondo solidario está reservado para quienes pierden el trabajo involuntariamente.</p>
    `.trim(),
  },
  {
    slug: "vacaciones-truncas-peru-como-calcular",
    title: "Vacaciones truncas en Perú: qué son y cómo calcularlas al terminar el contrato",
    description: "Las vacaciones truncas son los días de descanso generados pero no gozados al momento de la liquidación en Perú. Aprende a calcularlas y cuándo te corresponden.",
    country: "peru",
    countryName: "Perú",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "peru", slug: "calculadora-cts", name: "Calculadora CTS" },
      { pais: "peru", slug: "calculadora-gratificacion", name: "Calculadora Gratificación" },
    ],
    content: `
<h2>¿Qué son las vacaciones truncas?</h2>
<p>Las <strong>vacaciones truncas</strong> son el derecho a recibir una compensación económica por los días de descanso vacacional generados pero no disfrutados al momento de cesar la relación laboral. Están reguladas por el <strong>Decreto Legislativo 713</strong>.</p>

<h2>¿Cuándo corresponden vacaciones truncas?</h2>
<p>Las vacaciones truncas corresponden cuando el trabajador no ha completado el año de servicios necesario para tener derecho al período vacacional completo (30 días). Se generan desde el primer mes de trabajo.</p>
<p><strong>Requisito mínimo:</strong> haber trabajado al menos 1 mes continuo.</p>

<h2>Fórmula de cálculo</h2>
<p><em>Vacaciones truncas = (Remuneración mensual × Meses trabajados en el período) ÷ 12</em></p>
<p>O en días: <em>(30 días × Meses trabajados) ÷ 12</em></p>

<h2>Ejemplo práctico</h2>
<p>Trabajaste 7 meses y 15 días (7.5 meses) con sueldo de S/ 1.800:</p>
<ul>
  <li>Días de vacaciones truncas: (30 × 7.5) ÷ 12 = <strong>18.75 días</strong></li>
  <li>Valor diario: S/ 1.800 ÷ 30 = S/ 60</li>
  <li>Monto vacaciones truncas: 18.75 × S/ 60 = <strong>S/ 1.125</strong></li>
</ul>

<h2>¿Vacaciones truncas y vacaciones vencidas son lo mismo?</h2>
<p>No. Las <strong>vacaciones vencidas</strong> son aquellas que ya cumpliste el año para ganarlas pero aún no has disfrutado (por acuerdo o imposibilidad). Las <strong>vacaciones truncas</strong> son las del período en curso, incompleto al momento del cese. Ambas deben pagarse en la liquidación final.</p>
    `.trim(),
  },
  {
    slug: "fondos-reserva-ecuador-que-son-cuando-cobrar",
    title: "Fondos de reserva en Ecuador 2026: qué son, cuánto es y cuándo cobrarlos",
    description: "Los fondos de reserva son un beneficio laboral equivalente a un mes de salario adicional al año en Ecuador. Aprende cuándo se generan, cómo cobrarlos mensualmente o acumulados en el IESS.",
    country: "ecuador",
    countryName: "Ecuador",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "ecuador", slug: "calculadora-liquidacion", name: "Liquidación Ecuador" },
      { pais: "ecuador", slug: "calculadora-decimo-tercero", name: "Décimo Tercer Sueldo" },
    ],
    content: `
<h2>¿Qué son los fondos de reserva?</h2>
<p>Los <strong>fondos de reserva</strong> son una prestación obligatoria establecida en el <strong>Artículo 196 del Código del Trabajo ecuatoriano</strong>. Equivalen al <strong>8,33% del salario mensual</strong> (aproximadamente 1 mes de salario al año) y se generan a partir del segundo año de trabajo con el mismo empleador.</p>

<h2>¿Cuándo empiezan a generarse?</h2>
<p>Los fondos de reserva se acumulan a partir del <strong>segundo año de trabajo continuo</strong> con el mismo empleador. En el primer año no corresponden.</p>

<h2>¿Cómo se cobran?</h2>
<p>Existen dos modalidades:</p>
<ul>
  <li><strong>Pago mensual directo:</strong> el empleador incluye el 8,33% en el sueldo mensual del trabajador. Es la opción más común hoy en día.</li>
  <li><strong>Acumulación en el IESS:</strong> el empleador deposita mensualmente el 8,33% en la cuenta del IESS a nombre del trabajador. El trabajador puede retirarlo después de 2 años de acumulación o al terminar la relación laboral.</li>
</ul>

<h2>¿Cuánto equivale al año?</h2>
<p>Con un sueldo de $600 mensuales:</p>
<ul>
  <li>Fondos de reserva mensuales: $600 × 8,33% = $49,98</li>
  <li>Fondos de reserva anuales: $49,98 × 12 = <strong>$599,76</strong> (~1 mes de sueldo)</li>
</ul>

<h2>¿Se pagan fondos de reserva en la liquidación?</h2>
<p>Si el empleador pagaba los fondos mensualmente, no hay saldo pendiente al terminar. Si los acumulaba en el IESS, al terminar la relación laboral se liquida el saldo acumulado junto con los rendimientos generados por el IESS.</p>
    `.trim(),
  },
  {
    slug: "aguinaldo-costa-rica-2026-como-calcular",
    title: "Aguinaldo en Costa Rica 2026: cómo calcular el proporcional y cuándo se paga",
    description: "El aguinaldo en Costa Rica equivale a un doceavo del total de salarios devengados en el año. Te explicamos la fórmula exacta, las fechas de pago y qué pasa si te van antes de diciembre.",
    country: "costa-rica",
    countryName: "Costa Rica",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "costa-rica", slug: "calculadora-aguinaldo", name: "Calculadora Aguinaldo" },
      { pais: "costa-rica", slug: "calculadora-cesantia", name: "Calculadora Cesantía" },
    ],
    content: `
<h2>¿Qué es el aguinaldo en Costa Rica?</h2>
<p>El aguinaldo o <strong>décimo tercer mes</strong> en Costa Rica está regulado por la <strong>Ley N° 2412 (Ley del Aguinaldo)</strong>. Equivale a la doceava parte del total de salarios ordinarios y extraordinarios percibidos por el trabajador durante el año, del 1 de diciembre al 30 de noviembre.</p>

<h2>Fórmula de cálculo</h2>
<p><em>Aguinaldo = Total salarios percibidos del 1 de diciembre al 30 de noviembre ÷ 12</em></p>
<p>Incluye salarios ordinarios, horas extra, comisiones y cualquier otro ingreso salarial del período.</p>

<h2>¿Cuándo se paga?</h2>
<p>El aguinaldo debe pagarse entre el <strong>1 y el 20 de diciembre</strong> de cada año. Si el empleador no lo paga en esa fecha, puede ser denunciado ante el Ministerio de Trabajo y Seguridad Social (MTSS).</p>

<h2>Aguinaldo proporcional si terminas antes de diciembre</h2>
<p>Si tu contrato termina antes del 30 de noviembre, tienes derecho al aguinaldo proporcional correspondiente a los meses trabajados en el período. Por ejemplo, si trabajaste 8 meses:</p>
<ul>
  <li>Total salarios 8 meses con ₡380.000/mes = ₡3.040.000</li>
  <li>Aguinaldo proporcional = ₡3.040.000 ÷ 12 = <strong>₡253.333</strong></li>
</ul>

<h2>¿Tiene deducciones el aguinaldo?</h2>
<p>El aguinaldo en Costa Rica está <strong>exento de cargas sociales</strong> (no se descuenta CCSS ni otras deducciones). Es uno de los pocos países donde el aguinaldo se paga limpio, sin retenciones de seguridad social ni impuesto sobre la renta.</p>
    `.trim(),
  },
  {
    slug: "que-es-prima-vacacional-mexico-como-calcular",
    title: "Prima vacacional en México: qué es, para qué sirve y cómo calcularla en 2026",
    description: "La prima vacacional es un pago adicional al valor de tus vacaciones que muy pocos trabajadores saben calcular correctamente. Es el 25% del valor de tus días de vacaciones y es obligatoria por ley.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Qué es la prima vacacional?</h2>
<p>La <strong>prima vacacional</strong> es un pago adicional que el patrón está obligado a entregar al trabajador cuando toma sus vacaciones. Está establecida en el <strong>Artículo 80 de la Ley Federal del Trabajo</strong> y equivale a un mínimo del <strong>25% del salario correspondiente a los días de vacaciones</strong>.</p>

<h2>¿Para qué sirve?</h2>
<p>La prima vacacional fue creada para que el trabajador tenga recursos adicionales durante su período de descanso, reconociendo que las vacaciones implican gastos extras (viajes, actividades, etc.).</p>

<h2>Fórmula de cálculo</h2>
<p><em>Prima vacacional = Días de vacaciones × Salario diario × 25%</em></p>

<h2>Ejemplo práctico</h2>
<p>Llevas 3 años trabajando (16 días de vacaciones). Tu salario mensual es $18,000:</p>
<ul>
  <li>Salario diario: $18,000 ÷ 30 = $600</li>
  <li>Valor de las vacaciones: 16 días × $600 = $9,600</li>
  <li>Prima vacacional: $9,600 × 25% = <strong>$2,400</strong></li>
  <li>Total que recibes al tomar vacaciones: $9,600 + $2,400 = $12,000</li>
</ul>

<h2>¿Cuándo se paga la prima vacacional?</h2>
<p>Debe pagarse <strong>antes de que el trabajador salga a disfrutar sus vacaciones</strong>, no después. Si el patrón paga la prima vacacional después del regreso, está incumpliendo la ley.</p>

<h2>¿Y si no tomo mis vacaciones?</h2>
<p>Si al terminar el contrato no disfrutaste tus vacaciones, la prima vacacional proporcional se incluye en el finiquito. No se pierde por no haberla disfrutado: siempre debes recibirla.</p>

<h2>¿Las empresas pueden dar más del 25%?</h2>
<p>Sí. Muchas empresas, especialmente las grandes corporaciones y sindicalizadas, otorgan primas vacacionales del 50%, 75% o incluso el 100%. El 25% es solo el mínimo legal.</p>
    `.trim(),
  },
  {
    slug: "descuentos-nomina-colombia-2026-cuanto-descuentan",
    title: "¿Cuánto descuentan del salario en Colombia en 2026? Guía completa de deducciones",
    description: "En Colombia, del salario bruto se descuentan aportes a salud, pensión y fondo de solidaridad. Aprende exactamente qué porcentajes aplican, cuál es el tope y cómo calcular tu salario neto.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora Liquidación" },
    ],
    content: `
<h2>Deducciones obligatorias del salario en Colombia</h2>
<p>Todo trabajador dependiente en Colombia tiene las siguientes deducciones sobre su salario mensual:</p>
<table>
  <thead><tr><th>Concepto</th><th>% Empleado</th><th>% Empleador</th></tr></thead>
  <tbody>
    <tr><td>Salud (EPS)</td><td>4%</td><td>8,5%</td></tr>
    <tr><td>Pensión (AFP)</td><td>4%</td><td>12%</td></tr>
    <tr><td>Fondo de solidaridad pensional</td><td>1% (salarios ≥ 4 SMMLV)</td><td>—</td></tr>
    <tr><td>Fondo de subsistencia</td><td>0,2%-1% (salarios ≥ 16 SMMLV)</td><td>—</td></tr>
  </tbody>
</table>
<p>El trabajador aporta en total el <strong>8% de su salario</strong> (4% salud + 4% pensión) como mínimo.</p>

<h2>¿Y la retención en la fuente?</h2>
<p>La retención en la fuente aplica para salarios que superen cierto umbral (aproximadamente $4.500.000 COP mensuales en 2026). Sigue una tabla marginal y puede oscilar entre el 0% y el 39% sobre el exceso gravable.</p>

<h2>Ejemplo: salario bruto $3.000.000 COP</h2>
<ul>
  <li>Descuento salud (4%): $120.000</li>
  <li>Descuento pensión (4%): $120.000</li>
  <li>Total deducciones: $240.000</li>
  <li><strong>Salario neto: $2.760.000</strong> (sin retención en la fuente, que no aplica a este nivel salarial)</li>
</ul>

<h2>¿El auxilio de transporte tiene descuentos?</h2>
<p>No. El <strong>auxilio de transporte</strong> ($200.000 COP aproximado en 2026 para salarios hasta 2 SMMLV) no está sujeto a descuentos de salud, pensión ni retención en la fuente. Se paga limpio.</p>

<h2>¿Los descuentos de pensión sirven para la jubilación?</h2>
<p>Sí. El 4% que aportas mensualmente va a tu fondo de pensión individual (en régimen de ahorro individual con solidaridad, RAIS) o al fondo público (RPM - Colpensiones). Al llegar a la edad de pensión o acumular semanas suficientes, tienes derecho a la pensión de vejez.</p>
    `.trim(),
  },
  {
    slug: "cuanto-tiempo-reclamar-liquidacion-derechos-laborales",
    title: "¿Cuánto tiempo tienes para reclamar tu liquidación o derechos laborales por país?",
    description: "Los derechos laborales prescriben. Si no reclamas a tiempo, puedes perder el derecho a cobrar tu liquidación, indemnización o prestaciones. Conoce el plazo exacto en México, Colombia, España, Argentina y Chile.",
    country: null,
    countryName: null,
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Finiquito México" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Liquidación Colombia" },
      { pais: "espana", slug: "calculadora-paro", name: "Paro España" },
    ],
    content: `
<h2>¿Qué es la prescripción laboral?</h2>
<p>La prescripción es el plazo máximo que tienes para reclamar tus derechos laborales ante las autoridades o tribunales. Pasado ese plazo, aunque tengas razón, puedes perder el derecho a cobrar. Es fundamental actuar antes de que prescriba.</p>

<h2>Plazos de prescripción por país</h2>
<table>
  <thead><tr><th>País</th><th>Plazo</th><th>Desde cuándo cuenta</th><th>Base legal</th></tr></thead>
  <tbody>
    <tr><td>México</td><td>2 años</td><td>Desde que la acción fue exigible (fecha de despido o terminación)</td><td>Art. 516 LFT</td></tr>
    <tr><td>Colombia</td><td>3 años</td><td>Desde que la obligación se hizo exigible</td><td>Art. 488 CST</td></tr>
    <tr><td>España</td><td>1 año (impugnar despido: 20 días hábiles)</td><td>Desde la extinción del contrato</td><td>Art. 59 ET</td></tr>
    <tr><td>Argentina</td><td>2 años</td><td>Desde que el crédito fue exigible</td><td>Art. 256 LCT</td></tr>
    <tr><td>Chile</td><td>2 años (acciones laborales generales) / 6 meses (despido)</td><td>Desde el término de los servicios</td><td>Art. 510 Código del Trabajo</td></tr>
    <tr><td>Perú</td><td>4 años</td><td>Desde que el derecho pudo ejercerse</td><td>Art. 44 Ley 26636</td></tr>
  </tbody>
</table>

<h2>Caso especial: España — 20 días para impugnar el despido</h2>
<p>En España, si quieres impugnar un despido (reclamar que sea declarado improcedente o nulo), tienes solo <strong>20 días hábiles desde la notificación del despido</strong>. Este plazo es mucho más corto que el general. Si no actúas en ese tiempo, el despido se considera consentido.</p>

<h2>¿Cómo interrumpir la prescripción?</h2>
<p>La prescripción se interrumpe al presentar una reclamación formal. En España, bastante con una papeleta de conciliación ante el SMAC. En México, con la demanda ante el Centro de Conciliación o la Junta. En Colombia, con cualquier reclamación escrita al empleador o demanda judicial.</p>

<h2>Recomendación</h2>
<p>No esperes a que el plazo esté por vencer. Si tienes dudas sobre si te pagaron correctamente, consulta con un abogado laboral cuanto antes. En muchos países existen servicios gratuitos de asesoría laboral (Procuraduría en México, CASC en Colombia, SMAC en España).</p>
    `.trim(),
  },
  {
    slug: "irpf-retencion-nomina-espana-como-funciona-2026",
    title: "IRPF en la nómina España 2026: cómo funciona la retención y cómo calcularla",
    description: "La retención de IRPF en nómina puede variar del 2% al 45% según tu salario y situación personal. Te explicamos cómo se calcula, por qué varía entre empleados y cómo ajustarla.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta" },
    ],
    content: `
<h2>¿Qué es la retención de IRPF en nómina?</h2>
<p>La <strong>retención del IRPF</strong> es un anticipo del Impuesto sobre la Renta de las Personas Físicas que el empleador descuenta mensualmente de tu nómina y lo ingresa directamente a Hacienda. Al hacer la declaración de la renta, se regulariza la diferencia entre lo retenido y lo que realmente debes.</p>

<h2>¿Cómo se calcula el porcentaje de retención?</h2>
<p>La retención no es un porcentaje fijo: se calcula individualmente para cada trabajador aplicando las tablas de la AEAT sobre el salario bruto anual estimado, teniendo en cuenta:</p>
<ul>
  <li>Salario bruto anual</li>
  <li>Situación personal (soltero, casado, número de hijos)</li>
  <li>Discapacidad</li>
  <li>Pagos de hipoteca (créditos anteriores a 2013)</li>
  <li>Aportaciones a planes de pensiones</li>
</ul>

<h2>Tramos IRPF 2026 (escala general)</h2>
<table>
  <thead><tr><th>Base liquidable</th><th>Tipo marginal</th></tr></thead>
  <tbody>
    <tr><td>Hasta €12.450</td><td>19%</td></tr>
    <tr><td>€12.450 – €20.200</td><td>24%</td></tr>
    <tr><td>€20.200 – €35.200</td><td>30%</td></tr>
    <tr><td>€35.200 – €60.000</td><td>37%</td></tr>
    <tr><td>€60.000 – €300.000</td><td>45%</td></tr>
    <tr><td>Más de €300.000</td><td>47%</td></tr>
  </tbody>
</table>

<h2>¿Por qué dos compañeros con el mismo sueldo tienen retenciones diferentes?</h2>
<p>Porque la retención tiene en cuenta la situación personal. Un trabajador casado con dos hijos tiene mayores deducciones personales y, por tanto, una base imponible menor y una retención más baja que un soltero con el mismo salario.</p>

<h2>¿Cómo ajustar tu retención?</h2>
<p>Puedes solicitar a tu empresa que aplique un porcentaje de retención diferente mediante el <strong>modelo 145</strong> (comunicación de datos al pagador). Esto es útil si tienes dos trabajos, si tu situación personal ha cambiado o si quieres evitar una sorpresa en la declaración de la renta.</p>
    `.trim(),
  },
  {
    slug: "bono-vacacional-venezuela-lottt-como-calcular",
    title: "Bono vacacional en Venezuela 2026: cuántos días te corresponden y cómo calcularlo",
    description: "El bono vacacional en Venezuela es un beneficio adicional a las vacaciones ordinarias. La LOTTT garantiza un mínimo según los años de servicio. Aprende a calcularlo correctamente.",
    country: "venezuela",
    countryName: "Venezuela",
    publishDate: "2026-03-26",
    relatedCalculators: [
      { pais: "venezuela", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "venezuela", slug: "calculadora-prestaciones-sociales", name: "Prestaciones Sociales" },
    ],
    content: `
<h2>¿Qué es el bono vacacional?</h2>
<p>El <strong>bono vacacional</strong> es un beneficio adicional que acompaña a las vacaciones ordinarias en Venezuela, regulado por el <strong>Artículo 192 de la LOTTT</strong>. No se trata solo de pagar el salario durante las vacaciones, sino de un bono adicional equivalente a varios días de salario.</p>

<h2>¿Cuántos días de bono vacacional corresponden?</h2>
<p>El mínimo establecido por la LOTTT es:</p>
<table>
  <thead><tr><th>Año de servicio</th><th>Días de bono vacacional</th></tr></thead>
  <tbody>
    <tr><td>1er año</td><td>15 días</td></tr>
    <tr><td>2do año</td><td>16 días</td></tr>
    <tr><td>3er año</td><td>17 días</td></tr>
    <tr><td>Años sucesivos</td><td>+1 día por año adicional</td></tr>
  </tbody>
</table>
<p>Estos días se suman a los días de vacaciones ordinarias (15 días el primer año, +1 día por año adicional hasta máximo 15 días más).</p>

<h2>¿Cómo se calcula el monto del bono vacacional?</h2>
<p><em>Bono vacacional = Salario diario normal × Días de bono vacacional que corresponden</em></p>
<p>El salario diario se calcula dividiendo el salario mensual entre 30.</p>

<h2>¿Cuándo se paga el bono vacacional?</h2>
<p>El bono vacacional debe pagarse al inicio del período de vacaciones, antes de que el trabajador salga a disfrutarlas. No puede diferirse ni pagarse después del regreso.</p>

<h2>Nota sobre el contexto económico de Venezuela</h2>
<p>Dada la situación económica, muchos empleadores en Venezuela pagan parte del salario en divisas. Al calcular el bono vacacional, debe tomarse como base el salario total acordado, incluyendo los componentes en bolívares y en divisas según el acuerdo laboral.</p>
    `.trim(),
  },
  // ─── 15 nuevos artículos SEO 2026 ───────────────────────────────────────
  {
    slug: "carta-de-renuncia-colombia-modelo-2026",
    title: "Carta de Renuncia Colombia 2026 – Modelo Gratis y Guía Completa",
    description:
      "¿Cómo redactar tu carta de renuncia en Colombia? Descarga un modelo gratis con preaviso de 30 días según el Código Sustantivo del Trabajo. Incluye guía paso a paso.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Calculadora de Cesantías" },
    ],
    content: `
<h2>¿Qué es la carta de renuncia voluntaria en Colombia?</h2>
<p>La carta de renuncia es el documento escrito con el que un trabajador comunica formalmente su decisión de terminar el contrato de trabajo. En Colombia, la renuncia voluntaria está regulada por el <strong>Código Sustantivo del Trabajo (CST)</strong>.</p>

<h2>¿Cuánto preaviso debo dar al renunciar en Colombia?</h2>
<p>El CST no establece un plazo mínimo de preaviso para el trabajador en contratos a término indefinido, pero la práctica generalizada y muchos contratos exigen <strong>30 días de anticipación</strong>. Si renuncias sin preaviso, el empleador puede descontarte los salarios correspondientes a los días no avisados.</p>
<p>Para contratos a término fijo, la renuncia debe comunicarse al menos con la misma anticipación que se acordó en el contrato.</p>

<h2>¿Qué derechos conservo al renunciar?</h2>
<p>Al renunciar voluntariamente en Colombia tienes derecho a:</p>
<ul>
  <li><strong>Liquidación de cesantías</strong> acumuladas y sus intereses</li>
  <li><strong>Prima de servicios</strong> proporcional al tiempo trabajado en el semestre</li>
  <li><strong>Vacaciones</strong> pendientes o compensadas en dinero</li>
  <li><strong>Auxilio de transporte</strong> si aplica</li>
  <li><strong>Salarios pendientes</strong> del período trabajado</li>
</ul>
<p>No tienes derecho a la indemnización por despido sin justa causa, que solo corresponde cuando el empleador termina el contrato.</p>

<h2>Fórmula de la liquidación al renunciar</h2>
<p>La liquidación al renunciar incluye los conceptos proporcionales acumulados:</p>
<p><em>Cesantías = Salario mensual × días trabajados en el año / 360</em></p>
<p><em>Prima proporcional = Salario mensual × días trabajados en el semestre / 180</em></p>
<p><em>Vacaciones = (Salario mensual / 720) × días trabajados en el año</em></p>

<h2>Ejemplo práctico</h2>
<p>Trabajador con salario de $2.000.000 COP, 8 meses trabajados en el año y 4 meses en el semestre:</p>
<ul>
  <li>Cesantías: $2.000.000 × 240 / 360 = <strong>$1.333.333</strong></li>
  <li>Prima proporcional: $2.000.000 × 120 / 180 = <strong>$1.333.333</strong></li>
  <li>Vacaciones: ($2.000.000 / 720) × 240 = <strong>$666.667</strong></li>
</ul>

<h2>¿Cómo redactar la carta de renuncia?</h2>
<p>La carta debe incluir: ciudad y fecha, nombre completo del trabajador, cargo, nombre del empleador, la fecha efectiva de retiro (respetando el preaviso), y la firma. No es obligatorio indicar el motivo de la renuncia.</p>
<p>Usa nuestra herramienta gratuita para generar tu carta en segundos.</p>
    `.trim(),
  },
  {
    slug: "carta-de-renuncia-ecuador-2026",
    title: "Carta de Renuncia Ecuador 2026 – Modelo Gratis con Desahucio",
    description:
      "Genera tu carta de renuncia en Ecuador con el desahucio correcto (15 días según Art. 184 del Código del Trabajo). Modelo gratis, descargable al instante.",
    country: "ecuador",
    countryName: "Ecuador",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "ecuador", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "ecuador", slug: "calculadora-decimo-tercero", name: "Calculadora Décimo Tercero" },
    ],
    content: `
<h2>¿Qué es el desahucio en Ecuador?</h2>
<p>En Ecuador, la notificación de renuncia por parte del trabajador se denomina <strong>desahucio</strong>. Según el artículo 184 del Código del Trabajo, el trabajador debe avisar al empleador con al menos <strong>15 días de anticipación</strong> antes de su último día de trabajo.</p>

<h2>¿Qué derechos tengo al renunciar en Ecuador?</h2>
<p>Al renunciar voluntariamente tienes derecho a:</p>
<ul>
  <li><strong>Décimo tercero proporcional</strong> (bono navideño)</li>
  <li><strong>Décimo cuarto proporcional</strong> (bono escolar)</li>
  <li><strong>Fondos de reserva</strong> acumulados</li>
  <li><strong>Vacaciones no gozadas</strong> liquidadas en dinero</li>
  <li><strong>IESS</strong>: Afiliación cubierta hasta el último día</li>
  <li>Parte proporcional de utilidades si corresponde al período fiscal</li>
</ul>

<h2>Fórmula del décimo tercero proporcional</h2>
<p><em>Décimo Tercero = Suma de remuneraciones del período / 12</em></p>
<p>Si trabajaste 8 meses del año con un sueldo de $500: ($500 × 8) / 12 = <strong>$333,33</strong></p>

<h2>Ejemplo práctico de liquidación</h2>
<p>Trabajador con sueldo de $600, 6 meses trabajados:</p>
<ul>
  <li>Décimo Tercero proporcional: ($600 × 6) / 12 = <strong>$300</strong></li>
  <li>Décimo Cuarto proporcional: (SBU × 6) / 12 ≈ <strong>$230</strong></li>
  <li>Vacaciones: ($600 / 24) × 6 meses = <strong>$150</strong></li>
</ul>

<h2>¿Cómo entregar el desahucio?</h2>
<p>La notificación puede entregarse directamente al empleador o al Inspector de Trabajo. Se recomienda hacerlo por escrito y guardar una copia sellada o con acuse de recibo para respaldo legal.</p>
    `.trim(),
  },
  {
    slug: "carta-de-renuncia-peru-2026",
    title: "Carta de Renuncia Perú 2026 – Modelo Gratis y Guía Legal",
    description:
      "¿Cómo renunciar en Perú? Descarga tu carta de renuncia gratis con preaviso de 30 días según LPCL Art. 18. Conserva tus beneficios laborales al 100%.",
    country: "peru",
    countryName: "Perú",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "peru", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "peru", slug: "calculadora-cts", name: "Calculadora CTS" },
    ],
    content: `
<h2>¿Cuánto preaviso debo dar al renunciar en Perú?</h2>
<p>La Ley de Productividad y Competitividad Laboral (LPCL, Art. 18) establece que el trabajador debe comunicar su renuncia con un mínimo de <strong>30 días de anticipación</strong>. El empleador puede exonerar este preaviso de forma expresa.</p>

<h2>¿Qué beneficios conservo al renunciar?</h2>
<p>Al renunciar voluntariamente en Perú tienes derecho a:</p>
<ul>
  <li><strong>CTS (Compensación por Tiempo de Servicios)</strong> acumulada en tu cuenta bancaria</li>
  <li><strong>Gratificaciones proporcionales</strong> de julio y/o diciembre según el período trabajado</li>
  <li><strong>Vacaciones truncas</strong> no gozadas pagadas en dinero</li>
  <li><strong>Utilidades</strong> proporcionales si la empresa tiene obligación de distribuirlas</li>
</ul>

<h2>Fórmula de vacaciones truncas</h2>
<p><em>Vacaciones truncas = (Remuneración mensual / 12) × meses trabajados sin gozar vacaciones</em></p>
<p>Con un sueldo de S/ 1.500 y 7 meses sin vacaciones: (1.500 / 12) × 7 = <strong>S/ 875</strong></p>

<h2>Ejemplo práctico de gratificación proporcional</h2>
<p>Trabajador con sueldo de S/ 2.000 que renuncia en octubre:</p>
<ul>
  <li>Gratificación de diciembre proporcional (julio–octubre = 4 meses): (S/ 2.000 / 6) × 4 = <strong>S/ 1.333</strong></li>
</ul>

<h2>¿Cómo redactar la carta de renuncia?</h2>
<p>La carta debe incluir: lugar y fecha, datos del trabajador y del empleador, cargo, fecha de último día de labores (respetando los 30 días de preaviso), y firma. No es obligatorio explicar los motivos.</p>
    `.trim(),
  },
  {
    slug: "carta-de-renuncia-bolivia-2026",
    title: "Carta de Renuncia Bolivia 2026 – Modelo Gratis y Guía",
    description:
      "Genera tu carta de renuncia en Bolivia según la Ley General del Trabajo. Modelo gratis, descargable al instante, con guía de derechos al retiro voluntario.",
    country: "bolivia",
    countryName: "Bolivia",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "bolivia", slug: "calculadora-desahucio", name: "Calculadora de Desahucio" },
      { pais: "bolivia", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>¿Qué dice la ley boliviana sobre la renuncia voluntaria?</h2>
<p>En Bolivia, la renuncia voluntaria está regulada por la <strong>Ley General del Trabajo (LGT)</strong> y su Decreto Reglamentario. Al renunciar, el trabajador pierde el derecho al desahucio (indemnización por despido), pero conserva los beneficios acumulados.</p>

<h2>¿Qué derechos tengo al renunciar en Bolivia?</h2>
<ul>
  <li><strong>Aguinaldo proporcional</strong> (doceava parte del sueldo anual por mes trabajado)</li>
  <li><strong>Vacaciones proporcionales</strong> no gozadas</li>
  <li><strong>Indemnización por antigüedad</strong>: en Bolivia, la indemnización se acumula incluso con la renuncia voluntaria después del primer año (Art. 13 LGT)</li>
  <li><strong>Salarios pendientes</strong></li>
</ul>

<h2>Fórmula de la indemnización por antigüedad en Bolivia</h2>
<p>A diferencia de otros países, en Bolivia la indemnización no requiere despido:</p>
<p><em>Indemnización = Sueldo mensual × años de servicio</em></p>
<p>Con un sueldo de Bs. 3.000 y 3 años de servicio: 3.000 × 3 = <strong>Bs. 9.000</strong></p>

<h2>Fórmula del aguinaldo proporcional</h2>
<p><em>Aguinaldo proporcional = (Sueldo mensual / 12) × meses trabajados en el año</em></p>
<p>Con sueldo de Bs. 3.000 y 8 meses trabajados: (3.000 / 12) × 8 = <strong>Bs. 2.000</strong></p>

<h2>¿Cómo redactar la carta de renuncia?</h2>
<p>La carta debe incluir lugar y fecha, nombre completo, cargo, nombre del empleador, fecha de término y firma. Se recomienda entregarla con acuse de recibo y solicitar de inmediato la liquidación de beneficios.</p>
    `.trim(),
  },
  {
    slug: "carta-de-renuncia-chile-modelo-2026",
    title: "Carta de Renuncia Chile 2026 – Modelo Gratis con Preaviso de 30 Días",
    description:
      "¿Cómo renunciar en Chile? Descarga un modelo de carta de renuncia gratis con preaviso de 30 días según el Código del Trabajo Art. 159. Incluye guía de beneficios.",
    country: "chile",
    countryName: "Chile",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "chile", slug: "calculadora-indemnizacion", name: "Calculadora de Indemnización" },
    ],
    content: `
<h2>¿Cómo se llama la renuncia voluntaria en Chile?</h2>
<p>En Chile, la renuncia voluntaria se denomina <strong>"renuncia voluntaria del trabajador"</strong> y está regulada por el artículo 159 N°2 del Código del Trabajo. El trabajador debe dar un aviso previo de al menos <strong>30 días</strong> o pagar una indemnización sustitutiva equivalente a 1 mes de sueldo.</p>

<h2>¿Qué incluye el finiquito al renunciar?</h2>
<ul>
  <li><strong>Feriado proporcional</strong>: 1,25 días por mes trabajado desde el último período de vacaciones</li>
  <li><strong>Gratificación proporcional</strong> si la empresa paga gratificación legal</li>
  <li><strong>Salarios pendientes</strong></li>
</ul>
<p>La renuncia voluntaria no da derecho a la indemnización por años de servicio (Art. 163 CT), salvo acuerdo expreso.</p>

<h2>Fórmula del feriado proporcional</h2>
<p><em>Feriado proporcional = (Sueldo diario × 1,25 días) × meses desde último período vacacional</em></p>
<p>Con sueldo de $900.000 CLP y 6 meses: sueldo diario = $30.000 → $30.000 × 1,25 × 6 = <strong>$225.000</strong></p>

<h2>Ejemplo práctico de finiquito</h2>
<p>Trabajador con sueldo líquido de $800.000, 2 años de antigüedad, renuncia en mes 10 del año:</p>
<ul>
  <li>Feriado proporcional (10 meses): $26.667 × 1,25 × 10 = <strong>$333.333</strong></li>
  <li>Gratificación proporcional (10/12 del 25% mensual): aprox. <strong>$166.667</strong></li>
  <li>Total finiquito estimado: <strong>$500.000</strong></li>
</ul>

<h2>¿Ante quién se presenta la renuncia?</h2>
<p>La carta de renuncia debe entregarse al empleador. Se recomienda hacerlo por escrito con dos copias: una para el empleador y otra con timbre o firma de recepción para el trabajador. También puede ratificarse ante un Ministro de Fe.</p>
    `.trim(),
  },
  {
    slug: "como-calcular-liquidacion-colombia-2026",
    title: "Cómo Calcular la Liquidación en Colombia 2026 – Guía Paso a Paso",
    description:
      "Aprende a calcular tu liquidación en Colombia 2026: cesantías, prima de servicios, vacaciones e intereses. Fórmulas exactas y ejemplos con el salario mínimo 2026.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "colombia", slug: "calculadora-cesantias", name: "Calculadora de Cesantías" },
      { pais: "colombia", slug: "calculadora-prima-servicios", name: "Calculadora Prima de Servicios" },
    ],
    content: `
<h2>¿Qué es la liquidación laboral en Colombia?</h2>
<p>La liquidación es el pago total de todos los derechos laborales que se le adeudan al trabajador cuando termina el contrato, ya sea por renuncia, despido o vencimiento del contrato.</p>

<h2>Componentes de la liquidación en Colombia 2026</h2>
<table>
  <thead><tr><th>Concepto</th><th>Fórmula</th></tr></thead>
  <tbody>
    <tr><td>Cesantías</td><td>Salario × días trabajados / 360</td></tr>
    <tr><td>Intereses sobre cesantías</td><td>Cesantías × 12% × días / 360</td></tr>
    <tr><td>Prima de servicios</td><td>Salario × días en semestre / 180</td></tr>
    <tr><td>Vacaciones</td><td>(Salario / 720) × días trabajados</td></tr>
    <tr><td>Auxilio de transporte</td><td>Proporcional si aplica</td></tr>
  </tbody>
</table>

<h2>Fórmula detallada de cesantías</h2>
<p>Las cesantías equivalen a un mes de salario por año trabajado. Para el cálculo exacto:</p>
<p><em>Cesantías = (Salario mensual + auxilio de transporte) × días trabajados / 360</em></p>

<h2>Ejemplo práctico con salario mínimo 2026</h2>
<p>Trabajador con salario mínimo 2026 ($1.423.500 COP), 10 meses trabajados:</p>
<ul>
  <li>Cesantías: ($1.423.500 + $200.000) × 300 / 360 = <strong>$1.353.000</strong></li>
  <li>Intereses cesantías (10 meses): $1.353.000 × 12% × 300/360 = <strong>$135.300</strong></li>
  <li>Prima proporcional (si trabaja en el 2.° semestre, 4 meses): $1.423.500 × 120/180 = <strong>$949.000</strong></li>
  <li>Vacaciones: ($1.423.500 / 720) × 300 = <strong>$592.917</strong></li>
  <li><strong>Total liquidación estimada: $3.030.217</strong></li>
</ul>

<h2>¿En cuánto tiempo deben pagar la liquidación?</h2>
<p>El empleador debe pagar la liquidación <strong>a más tardar 15 días hábiles</strong> después de la fecha de terminación del contrato. Si no paga en ese plazo, puede ser demandado ante el Ministerio de Trabajo o ante un juez laboral.</p>

<h2>Usa la calculadora de liquidación</h2>
<p>Para obtener el cálculo exacto según tus datos, ingresa tu salario, fecha de ingreso y fecha de retiro en nuestra calculadora gratuita.</p>
    `.trim(),
  },
  {
    slug: "salario-minimo-colombia-2026",
    title: "Salario Mínimo Colombia 2026 – Cuánto Es y Cómo Afecta tu Nómina",
    description:
      "El salario mínimo en Colombia para 2026 es $1.423.500 COP mensuales (+9,54% vs 2025). Conoce el impacto en cesantías, prima, vacaciones y auxilio de transporte.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
    ],
    content: `
<h2>¿Cuánto es el salario mínimo en Colombia 2026?</h2>
<p>El salario mínimo mensual legal vigente (SMMLV) en Colombia para 2026 fue fijado en <strong>$1.423.500 COP</strong>, lo que representa un incremento del <strong>9,54%</strong> respecto al 2025 ($1.300.000). El auxilio de transporte para 2026 es de <strong>$200.000 COP</strong> mensuales.</p>

<h2>Resumen del salario mínimo 2026</h2>
<table>
  <thead><tr><th>Concepto</th><th>Valor 2026</th></tr></thead>
  <tbody>
    <tr><td>Salario mínimo mensual</td><td>$1.423.500</td></tr>
    <tr><td>Auxilio de transporte</td><td>$200.000</td></tr>
    <tr><td>Salario mínimo diario</td><td>$47.450</td></tr>
    <tr><td>Salario mínimo por hora</td><td>$5.931</td></tr>
    <tr><td>Incremento vs 2025</td><td>+9,54%</td></tr>
  </tbody>
</table>

<h2>¿Cómo afecta el aumento al auxilio de cesantías?</h2>
<p>Las cesantías se calculan sobre el salario real. Con el salario mínimo 2026 más el auxilio de transporte:</p>
<p><em>Cesantías anuales = ($1.423.500 + $200.000) × 360 / 360 = <strong>$1.623.500</strong> por año completo</em></p>

<h2>Impacto en la prima de servicios</h2>
<p>La prima se paga en junio y diciembre. Para el primer semestre 2026 (6 meses con SMMLV):</p>
<p><em>Prima = $1.423.500 × 180 / 180 = <strong>$1.423.500</strong></em></p>

<h2>Historia del salario mínimo en Colombia</h2>
<table>
  <thead><tr><th>Año</th><th>Salario mínimo</th><th>Incremento</th></tr></thead>
  <tbody>
    <tr><td>2026</td><td>$1.423.500</td><td>+9,54%</td></tr>
    <tr><td>2025</td><td>$1.300.000</td><td>+9,33%</td></tr>
    <tr><td>2024</td><td>$1.300.000</td><td>+12%</td></tr>
    <tr><td>2023</td><td>$1.160.000</td><td>+16%</td></tr>
  </tbody>
</table>
    `.trim(),
  },
  {
    slug: "tabla-isr-2026-mexico-como-calcular",
    title: "Tabla ISR 2026 México – Cómo Calcular tu Impuesto sobre la Renta",
    description:
      "Aprende a usar la tabla ISR 2026 del SAT. Incluye tarifa mensual actualizada, límites inferior y superior, cuota fija y porcentaje. Calcula tu impuesto gratis.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta" },
      { pais: "mexico", slug: "calculadora-imss", name: "Calculadora IMSS" },
    ],
    content: `
<h2>¿Qué es el ISR en México?</h2>
<p>El Impuesto sobre la Renta (ISR) es la contribución que los trabajadores pagan al SAT sobre sus ingresos. Se calcula aplicando la <strong>tarifa del artículo 96 de la LISR</strong>, que establece rangos (límite inferior y superior), una cuota fija y un porcentaje sobre el excedente.</p>

<h2>Tabla ISR mensual 2026 (Art. 96 LISR)</h2>
<table>
  <thead><tr><th>Límite inferior</th><th>Límite superior</th><th>Cuota fija</th><th>Tasa</th></tr></thead>
  <tbody>
    <tr><td>$0.01</td><td>$746.04</td><td>$0.00</td><td>1.92%</td></tr>
    <tr><td>$746.05</td><td>$6,332.05</td><td>$14.32</td><td>6.40%</td></tr>
    <tr><td>$6,332.06</td><td>$11,128.01</td><td>$371.83</td><td>10.88%</td></tr>
    <tr><td>$11,128.02</td><td>$12,935.82</td><td>$893.63</td><td>16.00%</td></tr>
    <tr><td>$12,935.83</td><td>$15,487.71</td><td>$1,182.88</td><td>17.92%</td></tr>
    <tr><td>$15,487.72</td><td>$31,236.49</td><td>$1,640.18</td><td>21.36%</td></tr>
    <tr><td>$31,236.50</td><td>$49,233.00</td><td>$5,004.12</td><td>23.52%</td></tr>
    <tr><td>$49,233.01</td><td>$93,993.90</td><td>$9,236.89</td><td>30.00%</td></tr>
    <tr><td>$93,993.91</td><td>$125,325.20</td><td>$22,665.17</td><td>32.00%</td></tr>
    <tr><td>$125,325.21</td><td>$375,975.61</td><td>$32,691.18</td><td>34.00%</td></tr>
    <tr><td>$375,975.62</td><td>En adelante</td><td>$117,912.32</td><td>35.00%</td></tr>
  </tbody>
</table>

<h2>¿Cómo se calcula el ISR paso a paso?</h2>
<ol>
  <li>Localiza tu salario mensual gravable en la tabla y determina el rango que corresponde</li>
  <li>Resta al salario el límite inferior del rango</li>
  <li>Multiplica el excedente por la tasa del rango</li>
  <li>Suma la cuota fija</li>
  <li>Resta el subsidio al empleo si aplica</li>
</ol>

<h2>Ejemplo práctico con salario de $15,000 MXN</h2>
<ul>
  <li>Rango: $12,935.83 – $15,487.71, cuota fija $1,182.88, tasa 17.92%</li>
  <li>Excedente: $15,000 – $12,935.83 = $2,064.17</li>
  <li>ISR sobre excedente: $2,064.17 × 17.92% = $369.90</li>
  <li>ISR mensual = $1,182.88 + $369.90 = <strong>$1,552.78</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "finiquito-vs-despido-improcedente-espana",
    title: "Finiquito vs Despido Improcedente en España 2026 – Diferencias Clave",
    description:
      "¿Cuál es la diferencia entre finiquito y despido improcedente en España? Aprende qué incluye cada uno, las indemnizaciones según el ET y cómo reclamar.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "espana", slug: "calculadora-despido-improcedente", name: "Calculadora Despido Improcedente" },
    ],
    content: `
<h2>¿Qué es el finiquito en España?</h2>
<p>El finiquito es la liquidación de todos los conceptos pendientes al finalizar la relación laboral, independientemente de la causa. Incluye: días de salario pendientes, vacaciones no disfrutadas, partes proporcionales de pagas extra y cualquier otro concepto pactado en convenio.</p>

<h2>¿Qué es el despido improcedente?</h2>
<p>El despido improcedente es aquel que no tiene causa justificada o que no cumple los requisitos formales del Estatuto de los Trabajadores. En este caso, el empleador puede elegir entre:</p>
<ul>
  <li><strong>Readmitir al trabajador</strong> y pagar los salarios de tramitación</li>
  <li><strong>Pagar la indemnización</strong> por despido improcedente</li>
</ul>

<h2>Indemnización por despido improcedente 2026</h2>
<p>Según el artículo 56 del ET: <strong>33 días de salario por año de servicio</strong> con un máximo de 24 mensualidades.</p>
<p><em>Indemnización = (Salario diario × 33 días) × años de servicio</em></p>
<p>Para contratos anteriores al 12/02/2012, los años previos se calculan a 45 días/año.</p>

<h2>Ejemplo comparativo</h2>
<p>Trabajador con salario de €2.000/mes, 5 años de antigüedad:</p>
<table>
  <thead><tr><th>Concepto</th><th>Solo finiquito</th><th>Despido improcedente</th></tr></thead>
  <tbody>
    <tr><td>Vacaciones no disfrutadas (10 días)</td><td>€666</td><td>€666</td></tr>
    <tr><td>Paga extra proporcional (6 meses)</td><td>€1.000</td><td>€1.000</td></tr>
    <tr><td>Indemnización</td><td>—</td><td>€11.000</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>€1.666</strong></td><td><strong>€12.666</strong></td></tr>
  </tbody>
</table>

<h2>¿Puedo cobrar el paro si me despiden improcedentemente?</h2>
<p>Sí. Al ser despedido (incluso improcedentemente) tienes derecho a solicitar la prestación por desempleo (paro) si has cotizado al menos 360 días en los últimos 6 años. Si renuncias voluntariamente, NO tienes derecho al paro.</p>
    `.trim(),
  },
  {
    slug: "horas-extra-mexico-cuanto-pagan",
    title: "Horas Extra en México 2026 – ¿Cuánto Te Deben Pagar Legalmente?",
    description:
      "Aprende cuánto valen las horas extra en México según la LFT: doble las primeras 9 y triple a partir de la décima. Fórmulas y ejemplos para reclamar lo tuyo.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-horas-extra", name: "Calculadora Horas Extra" },
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta" },
    ],
    content: `
<h2>¿Qué dice la Ley Federal del Trabajo sobre horas extra?</h2>
<p>El artículo 67 de la LFT establece que las horas extra se pagan con un recargo sobre el salario ordinario. Las reglas son claras:</p>
<ul>
  <li>Las primeras <strong>9 horas extra a la semana</strong>: se pagan al <strong>doble</strong> del salario por hora</li>
  <li>A partir de la décima hora extra en la semana: se pagan al <strong>triple</strong></li>
  <li>Límite legal: 3 horas diarias, máximo 9 horas a la semana (Art. 66 LFT)</li>
</ul>

<h2>¿Cómo se calcula el pago de horas extra?</h2>
<p><em>Salario por hora = Salario mensual / (días de trabajo al mes × horas diarias)</em></p>
<p><em>Horas extra dobles = Salario por hora × 2 × número de horas</em></p>
<p><em>Horas extra triples = Salario por hora × 3 × número de horas</em></p>

<h2>Ejemplo práctico</h2>
<p>Trabajador con salario de $10,000 MXN mensual, jornada de 8 horas, 5 días a la semana, trabajó 6 horas extra esta semana:</p>
<ul>
  <li>Salario por hora: $10,000 / (22 días × 8 h) = <strong>$56.82/hora</strong></li>
  <li>6 horas extra dobles: $56.82 × 2 × 6 = <strong>$681.82</strong></li>
</ul>

<h2>¿Las horas extra se incluyen en el finiquito o aguinaldo?</h2>
<p>No directamente. Pero el "salario diario integrado" que se usa para calcular el aguinaldo, vacaciones y finiquito sí debe incluir el promedio de horas extra percibidas regularmente (Art. 84 LFT). Si trabajas horas extra de forma habitual, tu finiquito debe ser mayor.</p>

<h2>¿Qué pasa si el empleador no paga las horas extra?</h2>
<p>Puedes presentar una queja ante la <strong>STPS (Secretaría del Trabajo y Previsión Social)</strong> o demandar ante el Tribunal Laboral competente. Guarda registros (mensajes, tarjetas de entrada/salida) como evidencia.</p>
    `.trim(),
  },
  {
    slug: "vacaciones-proporcionales-espana-2026",
    title: "Vacaciones Proporcionales España 2026 – Cómo Calcularlas al Salir",
    description:
      "¿Cómo se calculan las vacaciones proporcionales en España al salir de la empresa? Mínimo 30 días naturales por año según el ET. Fórmulas y ejemplos.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
    ],
    content: `
<h2>¿Cuántas vacaciones corresponden en España?</h2>
<p>El artículo 38 del Estatuto de los Trabajadores establece un mínimo de <strong>30 días naturales</strong> de vacaciones por año trabajado. Los convenios colectivos pueden mejorar este mínimo.</p>

<h2>¿Cómo se calculan las vacaciones proporcionales?</h2>
<p>Si no trabajaste el año completo, las vacaciones se calculan proporcionalmente:</p>
<p><em>Días de vacaciones = 30 × (meses trabajados / 12)</em></p>
<p>Con 7 meses trabajados: 30 × (7/12) = <strong>17,5 días → 18 días</strong> (se redondea al alza)</p>

<h2>¿Cómo se compensan en dinero las vacaciones no disfrutadas?</h2>
<p>Si se extingue la relación laboral y quedan vacaciones sin disfrutar, el empleador debe pagar la <strong>compensación económica</strong> equivalente:</p>
<p><em>Importe = Salario diario bruto × días de vacaciones pendientes</em></p>
<p>Con salario mensual de €2.000 y 15 días pendientes: (€2.000 / 30) × 15 = <strong>€1.000</strong></p>

<h2>¿Puede el empleador no pagar las vacaciones no disfrutadas?</h2>
<p>No. Las vacaciones no disfrutadas que no se puedan disfrutar por extinción del contrato <strong>siempre deben compensarse económicamente</strong>. El Tribunal de Justicia de la UE y el TS español han reafirmado este derecho incluso en renuncias voluntarias.</p>

<h2>Ejemplo completo</h2>
<p>Trabajador que entra el 1 de marzo y renuncia el 31 de octubre (8 meses), salario de €1.800/mes:</p>
<ul>
  <li>Días de vacaciones: 30 × 8/12 = 20 días</li>
  <li>Si no disfrutó ninguna: compensación = (€1.800 / 30) × 20 = <strong>€1.200</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "cesantia-costa-rica-como-calcular-2026",
    title: "Cesantía Costa Rica 2026 – Cómo Se Calcula y Cuándo Corresponde",
    description:
      "Aprende a calcular la cesantía en Costa Rica: fórmula del auxilio de cesantía según el Código de Trabajo, tope de 8 años y ejemplos con salarios reales.",
    country: "costa-rica",
    countryName: "Costa Rica",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "costa-rica", slug: "calculadora-cesantia", name: "Calculadora de Cesantía" },
      { pais: "costa-rica", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>¿Qué es la cesantía en Costa Rica?</h2>
<p>El auxilio de cesantía es una indemnización que corresponde al trabajador cuando es <strong>despedido sin justa causa</strong>. Está regulado por el artículo 29 del Código de Trabajo de Costa Rica y tiene un tope de <strong>8 años de antigüedad</strong>.</p>

<h2>¿En qué casos corresponde la cesantía?</h2>
<ul>
  <li>Despido sin causa justificada por parte del empleador</li>
  <li>Renuncia indirecta (cuando el empleador incumple el contrato)</li>
</ul>
<p>Si el trabajador renuncia voluntariamente, <strong>no tiene derecho</strong> a la cesantía.</p>

<h2>Fórmula de la cesantía en Costa Rica</h2>
<table>
  <thead><tr><th>Años de servicio</th><th>Días de cesantía por año</th></tr></thead>
  <tbody>
    <tr><td>1 año</td><td>19,5 días</td></tr>
    <tr><td>2 años</td><td>20 días</td></tr>
    <tr><td>3 años</td><td>20,5 días</td></tr>
    <tr><td>4 años</td><td>21 días</td></tr>
    <tr><td>5 años</td><td>21,5 días</td></tr>
    <tr><td>6 años</td><td>22 días</td></tr>
    <tr><td>7 años</td><td>22,5 días</td></tr>
    <tr><td>8 años o más</td><td>23 días (tope)</td></tr>
  </tbody>
</table>

<h2>Ejemplo práctico</h2>
<p>Trabajador con salario de ₡700.000 mensual y 4 años de antigüedad, despedido sin causa:</p>
<ul>
  <li>Salario diario: ₡700.000 / 30 = ₡23.333</li>
  <li>Días de cesantía: 4 años × 21 días = 84 días</li>
  <li>Cesantía: ₡23.333 × 84 = <strong>₡1.960.000</strong></li>
</ul>

<h2>¿Se pierde la cesantía si renuncia el trabajador?</h2>
<p>Sí, en la mayoría de los casos. La excepción es la "renuncia justificada" o renuncia indirecta, cuando el empleador comete faltas graves que justifican la salida del trabajador. En ese caso, puede reclamarse la cesantía ante el Ministerio de Trabajo.</p>
    `.trim(),
  },
  {
    slug: "liquidacion-laboral-peru-que-incluye",
    title: "Liquidación Laboral Perú 2026 – ¿Qué Incluye y Cómo Calcularla?",
    description:
      "Conoce qué incluye la liquidación laboral en Perú: CTS, gratificaciones, vacaciones truncas y utilidades. Fórmulas exactas y ejemplo con sueldo mínimo 2026.",
    country: "peru",
    countryName: "Perú",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "peru", slug: "calculadora-liquidacion", name: "Calculadora de Liquidación" },
      { pais: "peru", slug: "calculadora-cts", name: "Calculadora CTS" },
      { pais: "peru", slug: "calculadora-gratificaciones", name: "Calculadora de Gratificaciones" },
    ],
    content: `
<h2>¿Qué incluye la liquidación laboral en Perú?</h2>
<p>La liquidación de beneficios sociales en Perú comprende todos los conceptos acumulados durante la relación laboral:</p>
<ul>
  <li><strong>CTS (Compensación por Tiempo de Servicios)</strong>: ya depositada en cuenta, se libera al término</li>
  <li><strong>Gratificaciones proporcionales</strong> de julio y/o diciembre</li>
  <li><strong>Vacaciones truncas</strong>: vacaciones ganadas pero no gozadas</li>
  <li><strong>Utilidades</strong>: si la empresa tiene obligación de distribuir</li>
  <li><strong>Salarios pendientes</strong> del período trabajado</li>
</ul>

<h2>Fórmula de vacaciones truncas</h2>
<p><em>Vacaciones truncas = (Remuneración mensual / 12) × meses completos trabajados sin gozar vacaciones</em></p>

<h2>Fórmula de gratificación proporcional</h2>
<p><em>Gratificación = (Remuneración mensual / 6) × meses trabajados en el semestre</em></p>

<h2>Ejemplo con sueldo mínimo 2026</h2>
<p>Sueldo mínimo Perú 2026: S/ 1.025. Trabajador que ingresó en enero y renuncia en octubre (10 meses):</p>
<table>
  <thead><tr><th>Concepto</th><th>Cálculo</th><th>Monto</th></tr></thead>
  <tbody>
    <tr><td>Vacaciones truncas</td><td>(1.025 / 12) × 10</td><td>S/ 854,17</td></tr>
    <tr><td>Gratificación diciembre (4 meses: jul–oct)</td><td>(1.025 / 6) × 4</td><td>S/ 683,33</td></tr>
    <tr><td>Gratificación julio (ya cobrada en julio)</td><td>—</td><td>S/ 1.025,00</td></tr>
    <tr><td>CTS (libre disposición al cese)</td><td>Saldo en cuenta</td><td>Variable</td></tr>
    <tr><td><strong>Total sin CTS</strong></td><td></td><td><strong>S/ 2.562,50</strong></td></tr>
  </tbody>
</table>

<h2>¿Cuándo deben pagar la liquidación?</h2>
<p>El empleador debe entregar la liquidación <strong>dentro de las 48 horas</strong> siguientes al cese (D.L. 728). Si no lo hace, el trabajador puede reclamar ante el Ministerio de Trabajo o el Poder Judicial.</p>
    `.trim(),
  },
  {
    slug: "nomina-neta-colombia-como-calcular",
    title: "Cómo Calcular tu Nómina Neta en Colombia 2026 – Descuentos Paso a Paso",
    description:
      "Aprende a calcular tu salario neto en Colombia 2026: descuentos de salud (4%), pensión (4%) y retención en la fuente. Ejemplo con salario mínimo y salario medio.",
    country: "colombia",
    countryName: "Colombia",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "colombia", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta" },
      { pais: "colombia", slug: "calculadora-seguridad-social", name: "Calculadora Seguridad Social" },
    ],
    content: `
<h2>¿Qué descuentos tiene la nómina en Colombia?</h2>
<p>El trabajador en Colombia tiene los siguientes descuentos obligatorios sobre su salario bruto:</p>
<table>
  <thead><tr><th>Concepto</th><th>Porcentaje del trabajador</th></tr></thead>
  <tbody>
    <tr><td>Salud (EPS)</td><td>4%</td></tr>
    <tr><td>Pensión (AFP)</td><td>4%</td></tr>
    <tr><td>Fondo de Solidaridad Pensional</td><td>1% (salarios ≥ 4 SMLV)</td></tr>
    <tr><td>Retención en la fuente</td><td>Variable según ingresos</td></tr>
  </tbody>
</table>

<h2>Fórmula del salario neto</h2>
<p><em>Salario neto = Salario bruto − Salud (4%) − Pensión (4%) − Retención en la fuente</em></p>

<h2>Ejemplo con salario mínimo 2026</h2>
<p>Salario bruto: $1.423.500 (SMMLV 2026)</p>
<ul>
  <li>Salud (4%): −$56.940</li>
  <li>Pensión (4%): −$56.940</li>
  <li>Retención en la fuente: $0 (no aplica al SMMLV)</li>
  <li><strong>Salario neto: $1.309.620</strong></li>
</ul>

<h2>Ejemplo con salario de $3.000.000 COP</h2>
<ul>
  <li>Salud (4%): −$120.000</li>
  <li>Pensión (4%): −$120.000</li>
  <li>Retención en la fuente: ≈ −$0 (depende de deducciones)</li>
  <li><strong>Salario neto aproximado: $2.760.000</strong></li>
</ul>

<h2>¿Qué aporta el empleador?</h2>
<p>Adicionalmente, el empleador aporta sobre el salario bruto: Salud (8,5%), Pensión (12%), ARL (entre 0,348% y 8,7%), Caja de Compensación (4%), SENA (2%) e ICBF (3%).</p>
    `.trim(),
  },
  {
    slug: "prestaciones-sociales-venezuela-2026",
    title: "Prestaciones Sociales Venezuela 2026 – Cómo Se Calculan Según la LOTTT",
    description:
      "Aprende a calcular tus prestaciones sociales en Venezuela 2026: garantía de 15 días al tercer mes más 2 días por año. Fórmulas según LOTTT Art. 142.",
    country: "venezuela",
    countryName: "Venezuela",
    publishDate: "2026-03-31",
    relatedCalculators: [
      { pais: "venezuela", slug: "calculadora-prestaciones-sociales", name: "Calculadora Prestaciones Sociales" },
      { pais: "venezuela", slug: "calculadora-utilidades", name: "Calculadora de Utilidades" },
    ],
    content: `
<h2>¿Qué son las prestaciones sociales en Venezuela?</h2>
<p>Las prestaciones sociales son un beneficio laboral garantizado por el artículo 142 de la <strong>LOTTT (Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras)</strong>. Se generan desde el primer día de trabajo y se depositan en un fideicomiso o fondo individual.</p>

<h2>¿Cuánto corresponde de prestaciones sociales?</h2>
<p>El cálculo tiene dos componentes:</p>
<ul>
  <li><strong>Garantía inicial:</strong> 15 días de salario integral al tercer mes de trabajo, luego 15 días adicionales por trimestre</li>
  <li><strong>Días adicionales:</strong> 2 días de salario integral por año de antigüedad, acumulativos hasta 30 días</li>
</ul>

<h2>¿Qué es el salario integral?</h2>
<p>El salario integral incluye el salario normal más los <strong>alícuotas</strong> (partes proporcionales diarias) de utilidades y bono vacacional:</p>
<p><em>Salario integral = Salario normal + (Utilidades anuales / 360) + (Bono vacacional / 360)</em></p>

<h2>Fórmula de prestaciones por antigüedad</h2>
<p><em>Prestaciones = Salario integral diario × (15 días por trimestre + días adicionales por año)</em></p>

<h2>Ejemplo práctico</h2>
<p>Trabajador con 2 años de servicio, salario integral de Bs. 500/día:</p>
<ul>
  <li>Trimestres completos en 2 años: 8 trimestres × 15 días = 120 días</li>
  <li>Días adicionales (año 1 = 2 días, año 2 = 4 días acumulados): 2 + 4 = 6 días</li>
  <li>Total días: 120 + 6 = 126 días</li>
  <li>Prestaciones: Bs. 500 × 126 = <strong>Bs. 63.000</strong></li>
</ul>

<h2>¿Cuándo se cobran las prestaciones sociales?</h2>
<p>Las prestaciones se pagan al terminar la relación laboral, ya sea por renuncia, despido o cualquier otra causa. El fideicomiso debe estar disponible inmediatamente. Si el empleador no las paga, el trabajador puede reclamar ante la Inspectoría del Trabajo con los intereses correspondientes.</p>
    `.trim(),
  },
  {
    slug: "como-hacer-declaracion-renta-2025-espana",
    title: "Cómo hacer la declaración de la renta 2025 paso a paso",
    description:
      "Guía completa para presentar la declaración de la renta 2025 en España: quién está obligado, plazos, cómo acceder al borrador y cómo confirmarlo con Renta Web.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-04-08",
    relatedCalculators: [
      { pais: "espana", slug: "declaracion-renta-2025", name: "Calculadora Declaración Renta 2025" },
      { pais: "espana", slug: "calculadora-irpf", name: "Calculadora IRPF" },
    ],
    content: `
<h2>¿Cuándo empieza la campaña de la renta 2025?</h2>
<p>La Agencia Tributaria abre la campaña de la renta 2025 el <strong>2 de abril de 2026</strong>. El plazo para presentar la declaración finaliza el <strong>30 de junio de 2026</strong>. Si el resultado sale a ingresar y domicilias el pago, el plazo termina el 25 de junio.</p>

<h2>¿Quién está obligado a declarar?</h2>
<p>Debes presentar la declaración si cumples alguno de estos supuestos:</p>
<ul>
  <li>Rendimientos del trabajo superiores a <strong>22.000 €</strong> anuales con un único pagador.</li>
  <li>Rendimientos del trabajo superiores a <strong>15.000 €</strong> con dos o más pagadores (si el segundo y sucesivos superan los 1.500 € en conjunto).</li>
  <li>Rendimientos del capital mobiliario (dividendos, intereses) o ganancias patrimoniales superiores a <strong>1.600 €</strong>.</li>
  <li>Rendimientos inmobiliarios, ganancias patrimoniales o imputaciones de renta superiores a <strong>1.000 €</strong>.</li>
</ul>

<h2>Paso 1 — Accede al borrador</h2>
<p>Entra en <strong>Renta Web</strong> a través de la web de la Agencia Tributaria (<em>sede.agenciatributaria.gob.es</em>). Puedes identificarte con certificado digital, DNIe, Cl@ve PIN o número de referencia (casilla 505 de la renta anterior + importe del borrador del año pasado).</p>

<h2>Paso 2 — Revisa el borrador</h2>
<p>La Agencia Tributaria habrá precargado los datos fiscales de los que dispone (salarios, retenciones, inmuebles, hipotecas…). Revísalos detenidamente porque el borrador no siempre está completo:</p>
<ul>
  <li>Verifica que aparecen todos tus pagadores (si cambiaste de empresa a mitad de año).</li>
  <li>Comprueba los rendimientos de alquiler si eres propietario.</li>
  <li>Añade deducciones autonómicas que no estén cargadas automáticamente.</li>
</ul>

<h2>Paso 3 — Introduce tus deducciones</h2>
<p>Las deducciones reducen la cuota final que pagas. Las más habituales son:</p>
<ul>
  <li><strong>Plan de pensiones:</strong> hasta 1.500 € anuales de reducción en la base imponible.</li>
  <li><strong>Hipoteca anterior a 2013:</strong> 15% sobre las cantidades pagadas (máximo 9.040 €).</li>
  <li><strong>Donativos:</strong> 80% de los primeros 150 € y 40% del resto.</li>
  <li><strong>Deducciones autonómicas:</strong> varían según tu comunidad autónoma.</li>
</ul>

<h2>Paso 4 — Confirma y presenta</h2>
<p>Una vez revisado, haz clic en <em>"Confirmar borrador / Declaración"</em>. Si el resultado es:</p>
<ul>
  <li><strong>A devolver:</strong> Hacienda te ingresará el importe en la cuenta bancaria que indiques en un plazo máximo de 6 meses.</li>
  <li><strong>A ingresar:</strong> Puedes domiciliar el pago o realizarlo por adeudo directo. También puedes fraccionar el pago en dos plazos (60% en junio y 40% en noviembre).</li>
</ul>

<h2>Consejo final</h2>
<p>No esperes al último día. Presentar la declaración a principios de abril te garantiza recibir la devolución antes del verano y evitar posibles cuellos de botella en la web de la AEAT.</p>
    `.trim(),
  },
  {
    slug: "deducciones-irpf-2025-que-no-debes-olvidar",
    title: "Las 8 deducciones del IRPF 2025 que no debes olvidar",
    description:
      "Descubre las deducciones fiscales más importantes en la renta 2025: planes de pensiones, hipoteca, donativos, maternidad y más. Ahorra en tu declaración.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-04-08",
    relatedCalculators: [
      { pais: "espana", slug: "declaracion-renta-2025", name: "Calculadora Declaración Renta 2025" },
      { pais: "espana", slug: "tramos-irpf-2026", name: "Tramos IRPF 2025" },
    ],
    content: `
<h2>¿Qué son las deducciones del IRPF?</h2>
<p>Las deducciones del IRPF son importes que se restan directamente de la <strong>cuota líquida</strong> (lo que pagarías sin deducciones) o de la base imponible, reduciendo así la cantidad que abones a Hacienda. Muchos contribuyentes las desconocen y acaban pagando más de lo necesario.</p>

<h2>1. Plan de pensiones o mutualidad</h2>
<p>Puedes reducir tu base imponible general en las aportaciones a planes de pensiones individuales hasta <strong>1.500 € anuales</strong> (o el 30% de los rendimientos netos del trabajo, si es menor). Si tu empresa también aporta a un plan de empleo, el límite conjunto sube a 10.000 €.</p>

<h2>2. Deducción por hipoteca anterior a 2013</h2>
<p>Si compraste tu vivienda habitual antes del 1 de enero de 2013, tienes derecho a deducirte el <strong>15% de las cantidades pagadas</strong> durante el año, con una base máxima de <strong>9.040 €</strong>. Esto supone hasta 1.356 € de deducción anual.</p>

<h2>3. Donativos a ONGs y fundaciones</h2>
<p>El 80% de los primeros 150 € donados y el 40% del resto se deducen de la cuota. Si llevas más de 2 años donando a la misma entidad, el porcentaje sube al 45% en el tramo superior.</p>

<h2>4. Deducción por maternidad</h2>
<p>Las madres trabajadoras con hijos menores de 3 años pueden deducirse hasta <strong>1.200 € anuales</strong> por cada hijo (100 €/mes). Pueden cobrarse de forma anticipada mensualmente o aplicarse en la declaración.</p>

<h2>5. Familia numerosa o discapacidad</h2>
<p>Las familias numerosas tienen derecho a deducciones de hasta 1.200 € (general) o 2.400 € (especial). Por cada ascendiente o descendiente con discapacidad, la deducción puede llegar a 1.200 €.</p>

<h2>6. Gastos de alquiler de vivienda habitual (deducciones autonómicas)</h2>
<p>Aunque la deducción estatal por alquiler desapareció en 2015, muchas comunidades autónomas mantienen sus propias deducciones. Consulta la normativa de tu comunidad: algunas permiten deducir hasta el 15-20% del alquiler pagado.</p>

<h2>7. Rendimientos del trabajo: reducción por obtención</h2>
<p>Esta reducción es automática y se aplica en el borrador. Permite reducir la base imponible hasta <strong>7.302 €</strong> para contribuyentes con rendimientos netos del trabajo inferiores a 14.047,50 €. Es inversamente proporcional al salario.</p>

<h2>8. Inversión en empresas de nueva creación</h2>
<p>Si inviertes en startups o empresas de nueva creación que cumplan ciertos requisitos, puedes deducirte el <strong>50% de la inversión</strong> hasta 100.000 €. Una de las deducciones más potentes para inversores.</p>

<h2>Cómo aplicarlas en la declaración</h2>
<p>Algunas deducciones (como la hipoteca) las carga automáticamente el borrador. Otras, como los donativos o las autonómicas, debes introducirlas tú manualmente. Usa nuestra calculadora de renta 2025 para estimar el impacto de cada deducción en tu resultado final.</p>
    `.trim(),
  },
  {
    slug: "reforma-laboral-mexico-2026",
    title: "Reforma laboral México 2026: qué cambia para los trabajadores",
    description:
      "Conoce los cambios más importantes de la reforma laboral en México 2026: aumento de vacaciones, subcontratación, home office y nuevas prestaciones.",
    country: "mexico",
    countryName: "México",
    publishDate: "2026-04-05",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "mexico", slug: "calculadora-vacaciones", name: "Calculadora de Vacaciones" },
      { pais: "mexico", slug: "calculadora-aguinaldo", name: "Calculadora de Aguinaldo" },
    ],
    content: `
<h2>Contexto de la reforma laboral en México</h2>
<p>En los últimos años, México ha impulsado una serie de reformas a la Ley Federal del Trabajo (LFT) orientadas a mejorar las condiciones de los trabajadores. Los cambios más relevantes que afectan a tu nómina y finiquito en 2026 son los siguientes.</p>

<h2>Aumento del periodo vacacional</h2>
<p>La reforma de 2023 duplicó el período mínimo de vacaciones. A partir de su entrada en vigor:</p>
<ul>
  <li>En el <strong>primer año</strong> de trabajo: 12 días de vacaciones (antes 6).</li>
  <li>En el <strong>segundo año</strong>: 14 días.</li>
  <li>En el <strong>tercer año</strong>: 16 días.</li>
  <li>En el <strong>cuarto año</strong>: 18 días.</li>
  <li>Del quinto al noveno: 20 días.</li>
  <li>A partir del décimo año: 2 días adicionales por cada 5 años.</li>
</ul>
<p>Esto impacta directamente en el cálculo del finiquito y las vacaciones proporcionales al renunciar o ser despedido.</p>

<h2>Regulación del Home Office</h2>
<p>El teletrabajo en México quedó regulado en la LFT. Los trabajadores en modalidad remota tienen derecho a:</p>
<ul>
  <li>Que el empleador proporcione o subsidie el equipo necesario (computadora, internet, silla ergonómica).</li>
  <li>Derecho a la desconexión digital fuera del horario laboral.</li>
  <li>Las mismas condiciones salariales y prestaciones que el trabajo presencial.</li>
</ul>

<h2>Subcontratación (outsourcing)</h2>
<p>La reforma de 2021 prohibió la subcontratación de personal en términos generales. Ahora las empresas solo pueden subcontratar <strong>servicios especializados</strong> distintos al objeto social de la empresa contratante, con registro ante el REPSE. Esto garantiza que los trabajadores tengan un patrón directo responsable de sus prestaciones.</p>

<h2>Salario mínimo en alza</h2>
<p>México ha incrementado el salario mínimo de forma sostenida. En 2026, el salario mínimo general supera los <strong>278 pesos diarios</strong> (más de 8.400 pesos mensuales), con un incremento especial en la Zona Libre de la Frontera Norte.</p>

<h2>¿Cómo afecta a tu finiquito?</h2>
<p>El aumento en días de vacaciones incrementa el importe de tu finiquito si renuncias, ya que las vacaciones proporcionales se calculan sobre el nuevo período. Usa nuestra calculadora actualizada para obtener el importe exacto con la normativa vigente.</p>
    `.trim(),
  },
  {
    slug: "salario-minimo-2026-latinoamerica",
    title: "Salario mínimo 2026 en Latinoamérica: comparativa actualizada",
    description:
      "Comparativa del salario mínimo 2026 en México, Colombia, Chile, Perú, Argentina, Ecuador y más países de América Latina. Datos actualizados en euros.",
    country: null,
    countryName: null,
    publishDate: "2026-04-01",
    relatedCalculators: [
      { pais: "mexico", slug: "calculadora-nomina-neta", name: "Calculadora Nómina Neta México" },
      { pais: "colombia", slug: "calculadora-liquidacion", name: "Calculadora Liquidación Colombia" },
      { pais: "chile", slug: "calculadora-finiquito", name: "Calculadora Finiquito Chile" },
    ],
    content: `
<h2>¿Por qué importa el salario mínimo?</h2>
<p>El salario mínimo es la referencia base para calcular finiquitos, liquidaciones, indemnizaciones y prestaciones sociales en todos los países de la región. Un aumento del salario mínimo impacta directamente en tus derechos laborales al momento de salir de una empresa.</p>

<h2>Salario mínimo 2026 por país</h2>
<p>Los datos siguientes corresponden al salario mínimo mensual vigente a enero de 2026:</p>
<ul>
  <li><strong>México:</strong> ~$8.400 MXN/mes (zona general) · ~$12.600 MXN/mes (zona frontera norte)</li>
  <li><strong>Colombia:</strong> $1.423.500 COP/mes + auxilio de transporte de $174.897 COP</li>
  <li><strong>Chile:</strong> $500.000 CLP/mes (aproximadamente)</li>
  <li><strong>Perú:</strong> S/1.025/mes (Remuneración Mínima Vital)</li>
  <li><strong>Argentina:</strong> Variable — actualizado trimestralmente por el SMVM</li>
  <li><strong>Ecuador:</strong> $460 USD/mes</li>
  <li><strong>Bolivia:</strong> Bs. 2.500/mes</li>
  <li><strong>Venezuela:</strong> Actualizado frecuentemente — consultar SENIAT</li>
  <li><strong>Costa Rica:</strong> Variable por categoría ocupacional — mínimo ~¢245.000/mes</li>
</ul>

<h2>México: incremento sostenido</h2>
<p>México ha experimentado los mayores aumentos porcentuales de salario mínimo en la región durante los últimos 5 años, con crecimientos superiores al 20% anual. El objetivo del gobierno es acercarse a un salario digno en relación con la canasta básica.</p>

<h2>Colombia: ajuste anual por inflación</h2>
<p>El salario mínimo en Colombia se negocia cada año entre el gobierno, los empresarios y los sindicatos. El reajuste de 2026 fue superior a la inflación, lo que supone una mejora del poder adquisitivo real.</p>

<h2>Chile: hacia los $500.000 CLP</h2>
<p>Chile completó en 2025 su plan de incrementos graduales del salario mínimo hasta alcanzar los 500.000 pesos, uno de los más altos en términos absolutos de la región.</p>

<h2>¿Cómo afecta a tus prestaciones?</h2>
<p>En la mayoría de países, el salario mínimo es la base para calcular:</p>
<ul>
  <li>Indemnizaciones por despido.</li>
  <li>Prestaciones sociales y cesantías.</li>
  <li>Pensiones contributivas.</li>
  <li>Multas laborales que los empleadores deben pagar.</li>
</ul>
<p>Usa nuestras calculadoras por país para conocer el impacto exacto en tu caso.</p>
    `.trim(),
  },
  {
    slug: "vacaciones-no-disfrutadas-finiquito-espana",
    title: "Vacaciones no disfrutadas al finiquito: qué te corresponde en España",
    description:
      "¿Qué pasa con las vacaciones que no has disfrutado cuando dejas la empresa en España? Te explicamos cuánto te deben pagar y cómo calcularlo.",
    country: "espana",
    countryName: "España",
    publishDate: "2026-03-28",
    relatedCalculators: [
      { pais: "espana", slug: "calculadora-finiquito", name: "Calculadora de Finiquito" },
      { pais: "espana", slug: "calculadora-paro", name: "Calculadora de Paro" },
    ],
    content: `
<h2>¿Puedo cobrar las vacaciones no disfrutadas?</h2>
<p>Sí. Cuando termina una relación laboral en España, ya sea por renuncia, despido o fin de contrato, el trabajador tiene derecho a cobrar en el finiquito el importe correspondiente a los días de vacaciones que no haya podido disfrutar. Esto es un derecho irrenunciable según el <strong>Estatuto de los Trabajadores (Art. 38)</strong>.</p>

<h2>¿Cuántos días de vacaciones me corresponden?</h2>
<p>El mínimo legal en España es de <strong>30 días naturales</strong> por año completo trabajado (Art. 38 ET). Si no has completado el año, se calcula de forma proporcional:</p>
<p><em>Días de vacaciones = 30 días × meses trabajados / 12</em></p>
<p>Si tu convenio colectivo establece más días, prevalece el convenio.</p>

<h2>¿Cómo se calcula el importe?</h2>
<p>El pago se hace a razón del <strong>salario diario ordinario</strong>, incluyendo los conceptos salariales fijos (no los extraordinarios o variables si no son habituales):</p>
<p><em>Importe vacaciones = Salario diario bruto × días de vacaciones pendientes</em></p>

<h2>Ejemplo práctico</h2>
<p>Imagina que ganas 2.000 € brutos al mes y llevas 8 meses trabajados en el año, sin haber disfrutado ninguna vacación:</p>
<ul>
  <li>Días de vacaciones proporcionales: 30 × 8 / 12 = <strong>20 días</strong></li>
  <li>Salario diario: 2.000 € × 12 / 365 = <strong>65,75 €/día</strong></li>
  <li>Importe a cobrar: 20 × 65,75 = <strong>1.315 €</strong></li>
</ul>

<h2>¿Y si me despiden sin haber podido disfrutar las vacaciones?</h2>
<p>Si el despido se produce antes de que puedas disfrutar las vacaciones, el importe íntegro se incluye en el finiquito. El empleador no puede "cancelar" las vacaciones devengadas. Si lo hace, incurre en un incumplimiento del Estatuto de los Trabajadores.</p>

<h2>¿Caducan las vacaciones no disfrutadas?</h2>
<p>El Tribunal de Justicia de la Unión Europea (TJUE) ha establecido que las vacaciones no pueden caducar automáticamente al final del año si el empleado no pudo disfrutarlas por causas como baja médica. Sin embargo, en situaciones normales el plazo de disfrute lo fija el convenio colectivo.</p>

<h2>Revisa tu finiquito antes de firmarlo</h2>
<p>Usa nuestra calculadora de finiquito para verificar que el importe de las vacaciones no disfrutadas está correctamente calculado. Si el importe que te ofrece la empresa no coincide, tienes derecho a no firmarlo y a reclamar.</p>
    `.trim(),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCountry(country: string): Article[] {
  return articles.filter((a) => a.country === country || a.country === null);
}
