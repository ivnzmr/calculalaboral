"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Option = {
  label: string;
  text: string;
};

type Question = {
  text: string;
  options: Option[];
  correctIndex: number; // 0-based index into options
  explanation: string;
};

type QuizData = Record<string, Question[]>;

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const QUIZ_DATA: QuizData = {
  mexico: [
    {
      text: "¿Cuántos días mínimos de aguinaldo establece la Ley Federal del Trabajo?",
      options: [
        { label: "A", text: "10 días" },
        { label: "B", text: "15 días" },
        { label: "C", text: "30 días" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 87 LFT establece un mínimo de 15 días de salario de aguinaldo por año trabajado.",
    },
    {
      text: "¿Cuántos días de vacaciones mínimas corresponden en el primer año de trabajo (reforma 2023)?",
      options: [
        { label: "A", text: "6 días" },
        { label: "B", text: "10 días" },
        { label: "C", text: "12 días" },
      ],
      correctIndex: 2,
      explanation:
        "Tras la reforma de 2023, el mínimo de vacaciones en el primer año pasó de 6 a 12 días.",
    },
    {
      text: "¿En qué plazo debe pagarse el aguinaldo?",
      options: [
        { label: "A", text: "Antes del 30 de noviembre" },
        { label: "B", text: "Antes del 20 de diciembre" },
        { label: "C", text: "Antes del 31 de diciembre" },
      ],
      correctIndex: 1,
      explanation:
        "La LFT obliga al empleador a pagar el aguinaldo antes del 20 de diciembre de cada año.",
    },
    {
      text: "¿Qué es la prima vacacional?",
      options: [
        { label: "A", text: "Un bono adicional al aguinaldo" },
        { label: "B", text: "El 25% adicional sobre el pago de vacaciones" },
        { label: "C", text: "Un seguro médico obligatorio" },
      ],
      correctIndex: 1,
      explanation:
        "La prima vacacional es un pago adicional equivalente al 25% del salario durante el período de vacaciones (Art. 80 LFT).",
    },
    {
      text: "¿Pueden despedirte durante una incapacidad por enfermedad en los primeros 3 meses?",
      options: [
        { label: "A", text: "Sí, siempre" },
        { label: "B", text: "No, el contrato se suspende" },
        { label: "C", text: "Sí, con 30 días de aviso" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 42 LFT establece que la enfermedad suspende la relación laboral; el empleador no puede despedirte en ese período.",
    },
    {
      text: "¿Qué porcentaje de las ganancias de la empresa se reparte como PTU?",
      options: [
        { label: "A", text: "5%" },
        { label: "B", text: "10%" },
        { label: "C", text: "15%" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 123 constitucional y la LFT fijan la Participación de los Trabajadores en las Utilidades en el 10% de la renta gravable de la empresa.",
    },
    {
      text: "¿A cuánto equivale la liquidación por despido injustificado?",
      options: [
        { label: "A", text: "1 mes de salario" },
        { label: "B", text: "2 meses + 12 días por año trabajado" },
        { label: "C", text: "3 meses + 20 días por año de salario integrado" },
      ],
      correctIndex: 2,
      explanation:
        "El Art. 89 LFT establece 3 meses de salario integrado más 20 días por año trabajado, además de partes proporcionales de prestaciones.",
    },
    {
      text: "¿El IMSS es obligatorio para todos los trabajadores?",
      options: [
        { label: "A", text: "Solo para empresas grandes" },
        { label: "B", text: "Sí, para todos los trabajadores en relación de dependencia" },
        { label: "C", text: "Solo si el trabajador lo solicita" },
      ],
      correctIndex: 1,
      explanation:
        "La Ley del Seguro Social obliga a inscribir a todos los trabajadores subordinados ante el IMSS desde el primer día de trabajo.",
    },
    {
      text: "¿Cuántos días de prima de antigüedad corresponden por año trabajado?",
      options: [
        { label: "A", text: "8 días" },
        { label: "B", text: "12 días" },
        { label: "C", text: "15 días" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 162 LFT establece 12 días de salario por cada año trabajado como prima de antigüedad.",
    },
    {
      text: "¿Existe obligación legal de dar preaviso al renunciar en México?",
      options: [
        { label: "A", text: "Sí, 15 días" },
        { label: "B", text: "Sí, 30 días" },
        { label: "C", text: "No existe obligación legal" },
      ],
      correctIndex: 2,
      explanation:
        "La LFT no establece ningún plazo legal de preaviso para los trabajadores que decidan renunciar voluntariamente.",
    },
  ],

  colombia: [
    {
      text: "¿Cada cuánto se paga la prima de servicios en Colombia?",
      options: [
        { label: "A", text: "Una vez al año" },
        { label: "B", text: "Dos veces al año" },
        { label: "C", text: "Cada trimestre" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 306 del CST establece que la prima de servicios se paga en dos cuotas: en junio y en diciembre.",
    },
    {
      text: "¿A cuánto equivale la prima de servicios?",
      options: [
        { label: "A", text: "30 días de salario al año" },
        { label: "B", text: "15 días de salario por semestre" },
        { label: "C", text: "Un salario mensual completo adicional" },
      ],
      correctIndex: 1,
      explanation:
        "La prima equivale a 15 días de salario por cada semestre trabajado, es decir, un salario completo al año.",
    },
    {
      text: "¿Cuántas semanas de licencia de maternidad garantiza la ley colombiana?",
      options: [
        { label: "A", text: "12 semanas" },
        { label: "B", text: "16 semanas" },
        { label: "C", text: "18 semanas" },
      ],
      correctIndex: 2,
      explanation:
        "La Ley 2114 de 2021 amplió la licencia de maternidad a 18 semanas remuneradas.",
    },
    {
      text: "¿Qué es el auxilio de transporte en Colombia?",
      options: [
        { label: "A", text: "Un beneficio voluntario del empleador" },
        { label: "B", text: "Obligatorio para salarios hasta 2 SMLMV" },
        { label: "C", text: "Solo para trabajadores del sector público" },
      ],
      correctIndex: 1,
      explanation:
        "El auxilio de transporte es un beneficio legal obligatorio para trabajadores con salario de hasta 2 salarios mínimos mensuales.",
    },
    {
      text: "¿Cuánto tiempo tiene el empleador para depositar las cesantías?",
      options: [
        { label: "A", text: "Al terminar el contrato" },
        { label: "B", text: "En enero de cada año (antes del 14)" },
        { label: "C", text: "Cada seis meses" },
      ],
      correctIndex: 1,
      explanation:
        "El empleador debe consignar las cesantías al fondo antes del 14 de febrero de cada año por el año anterior.",
    },
    {
      text: "¿Cuál es el recargo por trabajar en domingo o festivo en Colombia?",
      options: [
        { label: "A", text: "25%" },
        { label: "B", text: "75%" },
        { label: "C", text: "100%" },
      ],
      correctIndex: 2,
      explanation:
        "El Art. 179 del CST establece un recargo del 100% sobre el valor ordinario por el trabajo en dominicales y festivos.",
    },
    {
      text: "¿Qué ley regula el acoso laboral en Colombia?",
      options: [
        { label: "A", text: "Ley 100 de 1993" },
        { label: "B", text: "Ley 1010 de 2006" },
        { label: "C", text: "Ley 789 de 2002" },
      ],
      correctIndex: 1,
      explanation:
        "La Ley 1010 de 2006 define, previene y sanciona el acoso laboral en Colombia.",
    },
    {
      text: "¿Cuántos días de vacaciones corresponden por año trabajado en Colombia?",
      options: [
        { label: "A", text: "15 días hábiles" },
        { label: "B", text: "15 días calendario" },
        { label: "C", text: "20 días hábiles" },
      ],
      correctIndex: 0,
      explanation:
        "El Art. 186 del CST establece 15 días hábiles de vacaciones remuneradas por cada año de trabajo.",
    },
    {
      text: "¿El empleador puede descontar el valor de la dotación del salario del trabajador?",
      options: [
        { label: "A", text: "Sí, hasta el 10% del salario" },
        { label: "B", text: "Solo si el trabajador lo acepta por escrito" },
        { label: "C", text: "No, está prohibido por ley" },
      ],
      correctIndex: 2,
      explanation:
        "La ley prohíbe expresamente que el empleador descuente el costo de la dotación del salario del trabajador.",
    },
    {
      text: "¿Qué pasa con las cesantías si el empleador no las deposita a tiempo?",
      options: [
        { label: "A", text: "Se pierden automáticamente" },
        { label: "B", text: "El empleador paga un día de salario por cada día de mora" },
        { label: "C", text: "Solo debe pagar intereses del 5% anual" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 99 de la Ley 50 de 1990 establece que el empleador debe pagar una indemnización de un día de salario por cada día de retardo.",
    },
  ],

  espana: [
    {
      text: "¿Cuántos días de indemnización por año corresponden en un despido improcedente?",
      options: [
        { label: "A", text: "20 días por año" },
        { label: "B", text: "33 días por año" },
        { label: "C", text: "45 días por año (solo contratos anteriores a 2012 en ese tramo)" },
      ],
      correctIndex: 1,
      explanation:
        "Desde la reforma laboral de 2012, la indemnización por despido improcedente es de 33 días por año trabajado, con máximo de 24 mensualidades.",
    },
    {
      text: "¿Puedes cobrar el paro (prestación por desempleo) si renuncias voluntariamente?",
      options: [
        { label: "A", text: "Sí, siempre" },
        { label: "B", text: "No, salvo excepciones justificadas" },
        { label: "C", text: "Sí, si llevas más de 2 años en la empresa" },
      ],
      correctIndex: 1,
      explanation:
        "La renuncia voluntaria no genera derecho al paro salvo situaciones excepcionales como acoso laboral u otras causas justificadas reconocidas por la ley.",
    },
    {
      text: "¿Cuántos días de preaviso debe dar un trabajador al renunciar (según el convenio colectivo general)?",
      options: [
        { label: "A", text: "7 días" },
        { label: "B", text: "15 días" },
        { label: "C", text: "30 días" },
      ],
      correctIndex: 1,
      explanation:
        "El ET establece el preaviso en 15 días como regla general, aunque el convenio colectivo puede modificarlo.",
    },
    {
      text: "¿Tiene derecho a vacaciones un trabajador que ha estado de baja médica durante el año?",
      options: [
        { label: "A", text: "No, pierde las vacaciones por la baja" },
        { label: "B", text: "Sí, se acumulan para disfrutarlas en otro momento" },
        { label: "C", text: "Solo conserva las primeras 2 semanas" },
      ],
      correctIndex: 1,
      explanation:
        "El Tribunal de Justicia de la UE y el TS español reconocen que las vacaciones no pueden perderse por incapacidad temporal y se acumulan.",
    },
    {
      text: "¿Es obligatorio el registro de jornada para todas las empresas desde 2019?",
      options: [
        { label: "A", text: "Solo para empresas de más de 50 empleados" },
        { label: "B", text: "Sí, para todas las empresas sin excepción" },
        { label: "C", text: "Solo en sectores con convenio colectivo específico" },
      ],
      correctIndex: 1,
      explanation:
        "El RDL 8/2019 obliga a todas las empresas, independientemente de su tamaño, a registrar diariamente la jornada de sus trabajadores.",
    },
    {
      text: "¿Qué es el finiquito en España?",
      options: [
        { label: "A", text: "Una indemnización por despido" },
        { label: "B", text: "La liquidación de todos los conceptos pendientes al fin del contrato" },
        { label: "C", text: "El pago del último mes trabajado" },
      ],
      correctIndex: 1,
      explanation:
        "El finiquito es un documento que recoge la liquidación de todos los conceptos pendientes: vacaciones no disfrutadas, pagas extras proporcionales, etc.",
    },
    {
      text: "¿Cuántos días de permiso retribuido corresponden por mudanza?",
      options: [
        { label: "A", text: "1 día" },
        { label: "B", text: "2 días" },
        { label: "C", text: "No existe ese permiso en la ley" },
      ],
      correctIndex: 0,
      explanation:
        "El Art. 37.3 del ET reconoce 1 día de permiso retribuido por traslado del domicilio habitual.",
    },
    {
      text: "¿Qué calificación tiene el despido de una embarazada sin autorización judicial?",
      options: [
        { label: "A", text: "Válido con preaviso de 30 días" },
        { label: "B", text: "Nulo de pleno derecho" },
        { label: "C", text: "Improcedente con indemnización" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 55.5 ET declara nulo el despido de trabajadoras embarazadas salvo que se acredite una causa ajena al embarazo.",
    },
    {
      text: "¿Cuántos días cotizados mínimos se necesitan para cobrar el paro?",
      options: [
        { label: "A", text: "180 días" },
        { label: "B", text: "360 días" },
        { label: "C", text: "720 días" },
      ],
      correctIndex: 1,
      explanation:
        "Se necesitan al menos 360 días cotizados en los últimos 6 años para acceder a la prestación contributiva por desempleo (mínimo de 4 meses de prestación).",
    },
    {
      text: "¿Tiene el trabajador derecho a la desconexión digital fuera de su horario laboral?",
      options: [
        { label: "A", text: "Solo si lo solicita expresamente" },
        { label: "B", text: "Sí, reconocido desde la Ley Orgánica 3/2018 (LOPD)" },
        { label: "C", text: "No existe ese derecho en la legislación española" },
      ],
      correctIndex: 1,
      explanation:
        "La Ley Orgánica 3/2018 reconoció el derecho a la desconexión digital de los trabajadores para garantizar el respeto a su tiempo de descanso.",
    },
  ],

  argentina: [
    {
      text: "¿Cuándo se paga el SAC (aguinaldo) en Argentina?",
      options: [
        { label: "A", text: "Una vez en diciembre" },
        { label: "B", text: "Dos veces: el 30 de junio y el 18 de diciembre" },
        { label: "C", text: "Tres veces al año" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 122 LCT establece que el SAC (Sueldo Anual Complementario) se abona en dos cuotas: 30 de junio y 18 de diciembre.",
    },
    {
      text: "¿A cuánto equivale la indemnización por despido sin causa según el Art. 245 LCT?",
      options: [
        { label: "A", text: "15 días de salario por año trabajado" },
        { label: "B", text: "1 mes de la mejor remuneración mensual por año trabajado" },
        { label: "C", text: "2 meses de salario fijo" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 245 LCT establece una indemnización equivalente a 1 mes de la mejor remuneración mensual, normal y habitual por cada año de antigüedad.",
    },
    {
      text: "¿Qué documento está obligado a entregar el empleador al finalizar el vínculo laboral?",
      options: [
        { label: "A", text: "Solo el recibo final de haberes" },
        { label: "B", text: "El certificado de trabajo (Art. 80 LCT)" },
        { label: "C", text: "Una carta de recomendación" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 80 LCT obliga al empleador a entregar el certificado de trabajo con datos de remuneraciones y aportes dentro de los 30 días de extinguido el vínculo.",
    },
    {
      text: "¿Cuántos días de licencia por matrimonio establece la LCT?",
      options: [
        { label: "A", text: "5 días" },
        { label: "B", text: "10 días" },
        { label: "C", text: "15 días" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 158 LCT otorga 10 días corridos de licencia por matrimonio, con goce de haberes.",
    },
    {
      text: "¿Puede el empleador cambiar arbitrariamente las condiciones de trabajo?",
      options: [
        { label: "A", text: "Sí, como parte de su facultad de organización" },
        { label: "B", text: "No, el ius variandi tiene límites legales" },
        { label: "C", text: "Solo puede modificar el salario" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 66 LCT reconoce el ius variandi pero con límites: no puede alterar condiciones esenciales ni causar perjuicio material o moral al trabajador.",
    },
    {
      text: "¿Cuántos días de preaviso corresponden con más de 5 años de antigüedad?",
      options: [
        { label: "A", text: "15 días" },
        { label: "B", text: "1 mes" },
        { label: "C", text: "2 meses" },
      ],
      correctIndex: 2,
      explanation:
        "El Art. 231 LCT establece 2 meses de preaviso para trabajadores con más de 5 años de antigüedad.",
    },
    {
      text: "¿Cuántos días de licencia por examen permite la LCT?",
      options: [
        { label: "A", text: "1 día por examen, hasta 5 por año" },
        { label: "B", text: "2 días por examen, hasta 10 por año" },
        { label: "C", text: "3 días por examen, sin límite anual" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 158 LCT otorga 2 días corridos por examen, con un máximo de 10 días por año calendario.",
    },
    {
      text: "¿El SAC se calcula también sobre el importe de las vacaciones?",
      options: [
        { label: "A", text: "No, el SAC es independiente de las vacaciones" },
        { label: "B", text: "Sí, las vacaciones inciden en el cálculo del SAC" },
        { label: "C", text: "Solo en el sector público" },
      ],
      correctIndex: 1,
      explanation:
        "El SAC se calcula sobre la remuneración devengada en el semestre, lo que incluye el pago de vacaciones.",
    },
    {
      text: "¿Se puede cobrar el seguro de desempleo si el trabajador renuncia voluntariamente?",
      options: [
        { label: "A", text: "Sí, siempre" },
        { label: "B", text: "No" },
        { label: "C", text: "Sí, si lleva más de 3 años en la empresa" },
      ],
      correctIndex: 1,
      explanation:
        "La Ley 24.013 solo otorga el seguro de desempleo en caso de despido sin justa causa, no ante renuncia voluntaria.",
    },
    {
      text: "¿Cuánto tiempo dura el período de prueba en Argentina?",
      options: [
        { label: "A", text: "1 mes" },
        { label: "B", text: "3 meses" },
        { label: "C", text: "6 meses" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 92 bis LCT establece un período de prueba de 3 meses para los contratos de tiempo indeterminado.",
    },
  ],

  chile: [
    {
      text: "¿Cuántos días hábiles de vacaciones mínimas establece el Código del Trabajo chileno?",
      options: [
        { label: "A", text: "10 días hábiles" },
        { label: "B", text: "15 días hábiles" },
        { label: "C", text: "20 días hábiles" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 67 del Código del Trabajo garantiza un feriado anual mínimo de 15 días hábiles con goce de remuneraciones.",
    },
    {
      text: "¿Ante quién debe ratificarse un finiquito para tener plena validez legal en Chile?",
      options: [
        { label: "A", text: "Solo con la firma del empleador" },
        { label: "B", text: "Ante notario público o inspector del trabajo" },
        { label: "C", text: "Solo con dos testigos" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 177 del Código del Trabajo exige que el finiquito sea ratificado ante notario o inspector del trabajo para surtir plenos efectos.",
    },
    {
      text: "¿Qué es el feriado progresivo en Chile?",
      options: [
        { label: "A", text: "Un bono anual por años de servicio" },
        { label: "B", text: "Días adicionales de vacaciones por más de 10 años trabajados" },
        { label: "C", text: "Un permiso pagado especial por mérito" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 68 del Código del Trabajo otorga 1 día hábil adicional de vacaciones por cada 3 años trabajados sobre los primeros 10 años.",
    },
    {
      text: "¿Cuántas mujeres trabajadoras se necesitan para que el empleador esté obligado a sala cuna?",
      options: [
        { label: "A", text: "Más de 50 mujeres" },
        { label: "B", text: "20 o más mujeres" },
        { label: "C", text: "Solo en el sector público" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 203 del Código del Trabajo obliga a proveer sala cuna cuando se tienen 20 o más trabajadoras de cualquier edad.",
    },
    {
      text: "¿Cuántos días de aviso previo debe dar el trabajador al renunciar en Chile?",
      options: [
        { label: "A", text: "15 días" },
        { label: "B", text: "30 días" },
        { label: "C", text: "No hay obligación legal" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 159 N°2 del Código del Trabajo establece que la renuncia voluntaria debe darse con al menos 30 días de anticipación.",
    },
    {
      text: "¿Qué indemnización corresponde por despido por necesidades de la empresa (Art. 161)?",
      options: [
        { label: "A", text: "15 días de salario por año trabajado" },
        { label: "B", text: "30 días de salario por año, con máximo de 11 años" },
        { label: "C", text: "45 días de salario por año trabajado" },
      ],
      correctIndex: 1,
      explanation:
        "El Art. 163 del Código del Trabajo fija 30 días de la última remuneración por año de servicio, con un tope de 11 años.",
    },
    {
      text: "¿Puedes acceder a tu Cuenta Individual del Seguro de Cesantía si renuncias voluntariamente?",
      options: [
        { label: "A", text: "No, solo si te despiden" },
        { label: "B", text: "Sí, puedes acceder a tu cuenta individual" },
        { label: "C", text: "Solo después de 2 años desempleado" },
      ],
      correctIndex: 1,
      explanation:
        "Al renunciar, el trabajador puede girar los fondos de su Cuenta Individual del Seguro de Cesantía, aunque no los del Fondo de Cesantía Solidario.",
    },
    {
      text: "¿Qué es la 'semana corrida' en Chile?",
      options: [
        { label: "A", text: "Un tipo de contrato especial de trabajo" },
        { label: "B", text: "El pago de días de descanso basado en remuneración variable diaria" },
        { label: "C", text: "Un beneficio exclusivo del sector minero" },
      ],
      correctIndex: 1,
      explanation:
        "La semana corrida (Art. 45 CT) garantiza que los trabajadores con remuneración variable diaria reciban el pago de sus días de descanso.",
    },
    {
      text: "¿Durante una licencia médica el empleador puede despedirte en Chile?",
      options: [
        { label: "A", text: "Sí, con 30 días de aviso previo" },
        { label: "B", text: "No, el despido está prohibido mientras dura la licencia" },
        { label: "C", text: "Solo si la licencia dura más de 6 meses" },
      ],
      correctIndex: 1,
      explanation:
        "La Ley de Licencias Médicas protege al trabajador de ser despedido mientras se encuentra con licencia médica activa.",
    },
    {
      text: "¿Cuántos años de trabajo se necesitan para acceder al feriado progresivo en Chile?",
      options: [
        { label: "A", text: "5 años" },
        { label: "B", text: "10 años" },
        { label: "C", text: "15 años" },
      ],
      correctIndex: 1,
      explanation:
        "El feriado progresivo se activa a partir de los 10 años de trabajo continuos o discontinuos en uno o más empleadores.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Rating helpers
// ---------------------------------------------------------------------------

type RatingInfo = {
  label: string;
  emoji: string;
  color: string;
};

function getRating(score: number): RatingInfo {
  if (score <= 4) {
    return { label: "Necesitas repasar", emoji: "📚", color: "text-red-600" };
  }
  if (score <= 7) {
    return { label: "Buen nivel", emoji: "👍", color: "text-yellow-600" };
  }
  if (score <= 9) {
    return { label: "Muy bien", emoji: "🌟", color: "text-blue-600" };
  }
  return { label: "¡Experto laboral!", emoji: "🏆", color: "text-green-600" };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

type AnswerButtonProps = {
  option: Option;
  index: number;
  selectedIndex: number | null;
  correctIndex: number;
  onSelect: (index: number) => void;
};

function AnswerButton({
  option,
  index,
  selectedIndex,
  correctIndex,
  onSelect,
}: AnswerButtonProps) {
  const answered = selectedIndex !== null;
  const isSelected = selectedIndex === index;
  const isCorrect = index === correctIndex;

  let buttonClass =
    "w-full text-left border-2 rounded-xl py-3 px-4 transition-all duration-200 flex items-center gap-3 ";

  if (!answered) {
    buttonClass +=
      "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
  } else if (isCorrect) {
    buttonClass += "border-green-500 bg-green-50 cursor-default";
  } else if (isSelected && !isCorrect) {
    buttonClass += "border-red-500 bg-red-50 cursor-default";
  } else {
    buttonClass += "border-gray-200 bg-white opacity-60 cursor-default";
  }

  return (
    <button
      className={buttonClass}
      onClick={() => !answered && onSelect(index)}
      disabled={answered}
      aria-pressed={isSelected}
    >
      <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
        {answered && isCorrect ? (
          "✓"
        ) : answered && isSelected && !isCorrect ? (
          "✗"
        ) : (
          option.label
        )}
      </span>
      <span className="text-sm sm:text-base">{option.text}</span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

type Props = {
  country: string;
  countryName: string;
};

export default function QuizLaboral({ country, countryName }: Props) {
  const questions = QUIZ_DATA[country] ?? QUIZ_DATA["mexico"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const score = answers.filter(
    (answer, i) => answer === questions[i]?.correctIndex
  ).length;

  function handleSelect(index: number) {
    if (selectedIndex !== null) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    setSelectedIndex(index);
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  }

  function handleShare() {
    const rating = getRating(score);
    const text = `¡Hice el quiz de derechos laborales en ${countryName}! Obtuve ${score}/${questions.length} — ${rating.emoji} ${rating.label}. ¿Cuánto sabes tú? Pruébalo en calculalaboral.com`;
    navigator.clipboard.writeText(text).catch(() => {});
  }

  // ---- Finished screen ----
  if (finished) {
    const rating = getRating(score);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center space-y-6">
          <div className="text-6xl">{rating.emoji}</div>
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">
              Resultado final
            </p>
            <p className="text-5xl font-bold text-gray-900">
              {score}
              <span className="text-gray-400 text-3xl">/{questions.length}</span>
            </p>
          </div>
          <div>
            <span
              className={`inline-block text-xl font-semibold px-4 py-2 rounded-full bg-gray-100 ${rating.color}`}
            >
              {rating.label}
            </span>
          </div>

          {/* Score bar */}
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full bg-blue-500 transition-all duration-700"
              style={{ width: `${(score / questions.length) * 100}%` }}
            />
          </div>

          {/* Answer summary */}
          <div className="grid grid-cols-10 gap-1.5 justify-center">
            {answers.map((a, i) => {
              const correct = a === questions[i]?.correctIndex;
              return (
                <div
                  key={i}
                  className={`h-3 rounded-full ${correct ? "bg-green-400" : "bg-red-400"}`}
                  title={`Pregunta ${i + 1}: ${correct ? "Correcta" : "Incorrecta"}`}
                />
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={handleRetry}
              className="px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
            >
              Volver a intentar
            </button>
            <a
              href={`/${country}`}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Ver mis derechos
            </a>
            <button
              onClick={handleShare}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
            >
              Compartir resultado
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- Quiz screen ----
  const answered = selectedIndex !== null;
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">
            Pregunta {currentIndex + 1} de {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
        <p className="text-gray-900 font-semibold text-lg leading-snug">
          {currentQuestion.text}
        </p>

        <div className="space-y-3">
          {currentQuestion.options.map((opt, i) => (
            <AnswerButton
              key={i}
              option={opt}
              index={i}
              selectedIndex={selectedIndex}
              correctIndex={currentQuestion.correctIndex}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Explanation */}
        {answered && (
          <div
            className={`rounded-xl p-4 flex gap-3 items-start ${
              isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <span className="text-xl flex-shrink-0">{isCorrect ? "✅" : "❌"}</span>
            <div>
              <p
                className={`font-semibold text-sm mb-1 ${
                  isCorrect ? "text-green-800" : "text-red-800"
                }`}
              >
                {isCorrect ? "¡Correcto!" : "Respuesta incorrecta"}
              </p>
              <p className="text-sm text-gray-700">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}

        {/* Next button */}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            {currentIndex + 1 < questions.length
              ? "Siguiente pregunta →"
              : "Ver resultado final"}
          </button>
        )}
      </div>
    </div>
  );
}
