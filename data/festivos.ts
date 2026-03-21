export type Festivo = {
  date: string; // "2026-MM-DD"
  name: string;
  type: "obligatorio" | "opcional";
};

export type FestivosConfig = {
  countrySlug: string;
  countryName: string;
  year: number;
  festivos: Festivo[];
  notaLegal: string;
};

export const festivosPorPais: FestivosConfig[] = [
  {
    countrySlug: "mexico",
    countryName: "México",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-02-02", name: "Día de la Constitución (primer lunes de febrero)", type: "obligatorio" },
      { date: "2026-03-16", name: "Natalicio de Benito Juárez (tercer lunes de marzo)", type: "obligatorio" },
      { date: "2026-04-02", name: "Jueves Santo", type: "opcional" },
      { date: "2026-04-03", name: "Viernes Santo", type: "opcional" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-09-16", name: "Día de la Independencia", type: "obligatorio" },
      { date: "2026-11-02", name: "Día de Muertos", type: "opcional" },
      { date: "2026-11-16", name: "Revolución Mexicana (tercer lunes de noviembre)", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "La Ley Federal del Trabajo (Art. 74) establece los días de descanso obligatorio. Los días opcionales son tradición pero no son de descanso obligatorio por ley federal (pueden serlo por contrato colectivo). Los días que caen en domingo se trasladan al lunes siguiente.",
  },
  {
    countrySlug: "colombia",
    countryName: "Colombia",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-01-12", name: "Día de los Reyes Magos (lunes siguiente al 6 de enero)", type: "obligatorio" },
      { date: "2026-03-23", name: "Día de San José (lunes siguiente al 19 de marzo)", type: "obligatorio" },
      { date: "2026-04-02", name: "Jueves Santo", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-05-25", name: "Ascensión del Señor (40 días después de Pascua)", type: "obligatorio" },
      { date: "2026-06-15", name: "Corpus Christi (60 días después de Pascua)", type: "obligatorio" },
      { date: "2026-06-22", name: "Sagrado Corazón de Jesús", type: "obligatorio" },
      { date: "2026-06-29", name: "San Pedro y San Pablo", type: "obligatorio" },
      { date: "2026-07-20", name: "Día de la Independencia", type: "obligatorio" },
      { date: "2026-08-07", name: "Batalla de Boyacá", type: "obligatorio" },
      { date: "2026-08-17", name: "Asunción de la Virgen (lunes siguiente al 15 de agosto)", type: "obligatorio" },
      { date: "2026-10-12", name: "Día de la Raza (lunes siguiente al 12 de octubre)", type: "obligatorio" },
      { date: "2026-11-02", name: "Día de Todos los Santos (lunes siguiente al 1 de noviembre)", type: "obligatorio" },
      { date: "2026-11-16", name: "Independencia de Cartagena (lunes siguiente al 11 de noviembre)", type: "obligatorio" },
      { date: "2026-12-08", name: "Día de la Inmaculada Concepción", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "La Ley 51 de 1983 establece que cuando un festivo cae entre martes y domingo, se traslada al lunes siguiente (excepto los festivos con fecha fija: 1 enero, 1 mayo, 20 julio, 7 agosto, 8 diciembre y 25 diciembre). El trabajo en festivo genera un recargo del 100% adicional al salario ordinario.",
  },
  {
    countrySlug: "espana",
    countryName: "España",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-01-06", name: "Epifanía del Señor (Reyes)", type: "obligatorio" },
      { date: "2026-04-02", name: "Jueves Santo", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Fiesta del Trabajo", type: "obligatorio" },
      { date: "2026-08-15", name: "Asunción de la Virgen", type: "obligatorio" },
      { date: "2026-10-12", name: "Fiesta Nacional de España", type: "obligatorio" },
      { date: "2026-11-01", name: "Todos los Santos", type: "obligatorio" },
      { date: "2026-12-06", name: "Día de la Constitución Española", type: "obligatorio" },
      { date: "2026-12-08", name: "Inmaculada Concepción", type: "obligatorio" },
      { date: "2026-12-25", name: "Natividad del Señor (Navidad)", type: "obligatorio" },
    ],
    notaLegal:
      "El Estatuto de los Trabajadores (Art. 37) establece 14 festivos nacionales al año: 8 son fijos nacionales y 6 los determinan las Comunidades Autónomas. El trabajo en festivo debe compensarse con descanso alternativo o con el pago del 175% del salario ordinario.",
  },
  {
    countrySlug: "argentina",
    countryName: "Argentina",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-02-16", name: "Lunes de Carnaval", type: "obligatorio" },
      { date: "2026-02-17", name: "Martes de Carnaval", type: "obligatorio" },
      { date: "2026-03-24", name: "Día Nacional de la Memoria por la Verdad y la Justicia", type: "obligatorio" },
      { date: "2026-04-02", name: "Día del Veterano y de los Caídos en la Guerra de Malvinas", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajador", type: "obligatorio" },
      { date: "2026-05-25", name: "Día de la Revolución de Mayo", type: "obligatorio" },
      { date: "2026-06-15", name: "Paso a la Inmortalidad del Gral. Martín Miguel de Güemes", type: "obligatorio" },
      { date: "2026-06-20", name: "Paso a la Inmortalidad del Gral. Manuel Belgrano", type: "obligatorio" },
      { date: "2026-07-09", name: "Día de la Independencia", type: "obligatorio" },
      { date: "2026-08-17", name: "Paso a la Inmortalidad del Gral. José de San Martín", type: "obligatorio" },
      { date: "2026-10-12", name: "Día del Respeto a la Diversidad Cultural", type: "obligatorio" },
      { date: "2026-11-20", name: "Día de la Soberanía Nacional", type: "obligatorio" },
      { date: "2026-12-08", name: "Inmaculada Concepción de María", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "La Ley 27.399 regula los feriados nacionales en Argentina. Los feriados que caen martes o miércoles pueden trasladarse al lunes anterior o al viernes posterior (feriados puente), según decreto del Poder Ejecutivo. El trabajo en feriado se abona con un 100% de recargo.",
  },
  {
    countrySlug: "chile",
    countryName: "Chile",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-04-04", name: "Sábado Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-05-21", name: "Día de las Glorias Navales (Combate Naval de Iquique)", type: "obligatorio" },
      { date: "2026-06-29", name: "San Pedro y San Pablo", type: "obligatorio" },
      { date: "2026-07-16", name: "Día de la Virgen del Carmen", type: "obligatorio" },
      { date: "2026-08-15", name: "Asunción de la Virgen", type: "obligatorio" },
      { date: "2026-09-18", name: "Día de la Independencia Nacional", type: "obligatorio" },
      { date: "2026-09-19", name: "Día de las Glorias del Ejército", type: "obligatorio" },
      { date: "2026-10-12", name: "Encuentro de Dos Mundos", type: "obligatorio" },
      { date: "2026-10-31", name: "Día de las Iglesias Evangélicas y Protestantes", type: "obligatorio" },
      { date: "2026-11-01", name: "Día de Todos los Santos", type: "obligatorio" },
      { date: "2026-12-08", name: "Inmaculada Concepción", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "La Ley 2.977 y sus modificaciones regulan los días festivos en Chile. El Código del Trabajo establece que los trabajadores que laboren en día festivo tienen derecho a un recargo del 50% sobre el sueldo convenido. Algunos sectores (comercio, transporte) tienen normas especiales.",
  },
  {
    countrySlug: "peru",
    countryName: "Perú",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-04-02", name: "Jueves Santo", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-06-07", name: "Batalla de Arica (Día de la Bandera)", type: "obligatorio" },
      { date: "2026-06-24", name: "Día del Campesino (San Juan Bautista)", type: "obligatorio" },
      { date: "2026-06-29", name: "San Pedro y San Pablo", type: "obligatorio" },
      { date: "2026-07-28", name: "Día de la Independencia Nacional", type: "obligatorio" },
      { date: "2026-07-29", name: "Fiestas Patrias (segundo día)", type: "obligatorio" },
      { date: "2026-08-30", name: "Santa Rosa de Lima", type: "obligatorio" },
      { date: "2026-10-08", name: "Combate de Angamos", type: "obligatorio" },
      { date: "2026-11-01", name: "Todos los Santos", type: "obligatorio" },
      { date: "2026-12-08", name: "Inmaculada Concepción", type: "obligatorio" },
      { date: "2026-12-09", name: "Batalla de Ayacucho", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "El D.Leg. 713 regula los días feriados en Perú. Si el trabajador presta servicios en un día feriado no laborable, tiene derecho a una remuneración adicional equivalente a la que le correspondería por trabajar ese día (pago doble). El empleador puede sustituir el pago por un descanso compensatorio.",
  },
  {
    countrySlug: "ecuador",
    countryName: "Ecuador",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-02-16", name: "Carnaval (lunes)", type: "obligatorio" },
      { date: "2026-02-17", name: "Carnaval (martes)", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-05-24", name: "Batalla del Pichincha", type: "obligatorio" },
      { date: "2026-08-10", name: "Primer Grito de Independencia", type: "obligatorio" },
      { date: "2026-10-09", name: "Independencia de Guayaquil", type: "obligatorio" },
      { date: "2026-11-02", name: "Día de los Difuntos", type: "obligatorio" },
      { date: "2026-11-03", name: "Independencia de Cuenca", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
      { date: "2026-12-31", name: "Víspera de Año Nuevo", type: "obligatorio" },
    ],
    notaLegal:
      "El Código del Trabajo ecuatoriano establece que el trabajo en días de descanso obligatorio debe remunerarse con el 200% del valor de la jornada ordinaria. Los días de fiesta nacional y asueto local se rigen por disposiciones específicas.",
  },
  {
    countrySlug: "venezuela",
    countryName: "Venezuela",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-02-16", name: "Lunes de Carnaval", type: "obligatorio" },
      { date: "2026-02-17", name: "Martes de Carnaval", type: "obligatorio" },
      { date: "2026-04-02", name: "Jueves Santo", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-04-19", name: "Declaración de la Independencia", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajador", type: "obligatorio" },
      { date: "2026-06-24", name: "Batalla de Carabobo", type: "obligatorio" },
      { date: "2026-07-05", name: "Día de la Independencia", type: "obligatorio" },
      { date: "2026-07-24", name: "Natalicio del Libertador Simón Bolívar", type: "obligatorio" },
      { date: "2026-10-12", name: "Día de la Resistencia Indígena", type: "obligatorio" },
      { date: "2026-12-24", name: "Nochebuena", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
      { date: "2026-12-31", name: "Fin de Año", type: "obligatorio" },
    ],
    notaLegal:
      "La LOTTT (Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras) establece los días feriados. El trabajo en días feriados genera derecho a un día adicional de descanso compensatorio o al pago del día con un 50% de recargo.",
  },
  {
    countrySlug: "costa-rica",
    countryName: "Costa Rica",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-04-02", name: "Jueves Santo", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-04-11", name: "Día de Juan Santamaría", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-07-25", name: "Anexión del Partido de Nicoya", type: "obligatorio" },
      { date: "2026-08-02", name: "Día de Nuestra Señora de los Ángeles", type: "opcional" },
      { date: "2026-08-15", name: "Día de la Madre (Asunción)", type: "obligatorio" },
      { date: "2026-09-15", name: "Día de la Independencia", type: "obligatorio" },
      { date: "2026-10-12", name: "Día de las Culturas", type: "opcional" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "El Código de Trabajo costarricense distingue entre días de asueto con goce de salario (obligatorios) y días de fiesta nacional (opcionales). El trabajo en días de asueto obligatorio debe remunerarse con el doble del salario ordinario.",
  },
  {
    countrySlug: "bolivia",
    countryName: "Bolivia",
    year: 2026,
    festivos: [
      { date: "2026-01-01", name: "Año Nuevo", type: "obligatorio" },
      { date: "2026-01-22", name: "Día del Estado Plurinacional de Bolivia", type: "obligatorio" },
      { date: "2026-02-16", name: "Carnaval (lunes)", type: "obligatorio" },
      { date: "2026-02-17", name: "Carnaval (martes)", type: "obligatorio" },
      { date: "2026-04-03", name: "Viernes Santo", type: "obligatorio" },
      { date: "2026-05-01", name: "Día del Trabajo", type: "obligatorio" },
      { date: "2026-06-21", name: "Año Nuevo Andino Amazónico (Willka Kuti)", type: "obligatorio" },
      { date: "2026-06-04", name: "Corpus Christi", type: "obligatorio" },
      { date: "2026-08-06", name: "Día de la Independencia", type: "obligatorio" },
      { date: "2026-11-02", name: "Día de los Difuntos", type: "obligatorio" },
      { date: "2026-12-25", name: "Navidad", type: "obligatorio" },
    ],
    notaLegal:
      "La Ley General del Trabajo boliviana establece los días feriados. El trabajo en días feriados debe compensarse con un día libre adicional o con el pago del salario doble. Algunos departamentos tienen festivos locales adicionales (ej: 24 de septiembre en Santa Cruz).",
  },
];

export function getFestivos(countrySlug: string): FestivosConfig | undefined {
  return festivosPorPais.find((f) => f.countrySlug === countrySlug);
}
