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
    title: "Prima de Servicios en Colombia 2026: Cuándo y Cómo se Paga",
    description: "Todo sobre la prima de servicios en Colombia 2026: fechas de pago (junio y diciembre), cálculo según el Art. 306 del CST, quién tiene derecho y cómo calcular la parte proporcional.",
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
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCountry(country: string): Article[] {
  return articles.filter((a) => a.country === country || a.country === null);
}
