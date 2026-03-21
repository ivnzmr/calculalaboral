import type { CalculationResult, CalculationBreakdown } from "./mexico";

function getDaysBetween(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
}

function getYearsBetween(startDate: Date, endDate: Date): number {
  return getDaysBetween(startDate, endDate) / 365;
}

/**
 * CTS - Compensación por Tiempo de Servicios
 * Peru Decreto Supremo 001-97-TR
 * (Monthly salary + 1/6 of gratification) / 12 × months worked.
 * Deposited semi-annually (May and November).
 */
export function calculateCTS(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);

  // Monthly gratification = 1/6 of monthly salary (since gratification = 1 salary per semester = 2/year)
  const gratificacionMensual = monthlySalary / 6;

  // Remuneración computable = salary + 1/6 of gratification
  const remuneracionComputable = monthlySalary + gratificacionMensual;

  // CTS = (remuneración computable / 12) × months worked
  const monthsWorked = totalDays / 30;
  const ctsAmount = (remuneracionComputable / 12) * monthsWorked;

  // Semi-annual deposits
  const year = endDate.getFullYear();
  const month = endDate.getMonth();

  let semesterStart: Date;
  let semesterEnd: Date;
  let semesterName: string;
  let depositMonth: string;

  if (month < 5) {
    // Nov 1 - Apr 30 semester (deposited May)
    semesterStart = new Date(year - 1, 10, 1);
    semesterEnd = new Date(year, 3, 30);
    semesterName = "nov-abr";
    depositMonth = "mayo";
  } else if (month < 11) {
    // May 1 - Oct 31 semester (deposited November)
    semesterStart = new Date(year, 4, 1);
    semesterEnd = new Date(year, 9, 31);
    semesterName = "may-oct";
    depositMonth = "noviembre";
  } else {
    // Nov 1 - Apr 30 semester for following year (deposited May)
    semesterStart = new Date(year, 10, 1);
    semesterEnd = new Date(year + 1, 3, 30);
    semesterName = "nov-abr";
    depositMonth = "mayo";
  }

  const effectiveStart = startDate > semesterStart ? startDate : semesterStart;
  const effectiveEnd = endDate < semesterEnd ? endDate : semesterEnd;
  const daysInSemester = Math.max(0, getDaysBetween(effectiveStart, effectiveEnd));
  const monthsInSemester = daysInSemester / 30;
  const ctsSemestral = (remuneracionComputable / 12) * monthsInSemester;

  void semesterName;
  void depositMonth;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Remuneración mensual base",
      amount: monthlySalary,
    },
    {
      concept: "1/6 de gratificación semestral",
      amount: gratificacionMensual,
    },
    {
      concept: "Remuneración computable para CTS",
      amount: remuneracionComputable,
    },
    {
      concept: `Días trabajados en el período`,
      days: totalDays,
      amount: 0,
    },
    {
      concept: `CTS acumulada total (${Math.round(monthsWorked * 10) / 10} meses)`,
      days: totalDays,
      amount: ctsAmount,
    },
    {
      concept: `CTS del semestre en curso (${daysInSemester} días)`,
      days: daysInSemester,
      amount: ctsSemestral,
    },
  ];

  return { total: ctsAmount, breakdown, currency: "PEN" };
}

/**
 * Gratificaciones - Peru Ley 27735
 * 1 monthly salary in July (for Jan-Jun work).
 * 1 monthly salary in December (for Jul-Dec work).
 * Proportional if partial semester.
 */
export function calculateGratificaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);

  // First semester: Jan - Jun (gratification paid July)
  const year = endDate.getFullYear();

  const firstSemStart = new Date(year, 0, 1);   // Jan 1
  const firstSemEnd = new Date(year, 5, 30);     // Jun 30
  const secondSemStart = new Date(year, 6, 1);   // Jul 1
  const secondSemEnd = new Date(year, 11, 31);   // Dec 31

  // First semester days
  const fsEffStart = startDate > firstSemStart ? startDate : firstSemStart;
  const fsEffEnd = endDate < firstSemEnd ? endDate : firstSemEnd;
  const daysFirstSem = Math.max(0, getDaysBetween(fsEffStart, fsEffEnd));
  const totalFirstSemDays = getDaysBetween(firstSemStart, firstSemEnd);
  const gratificacionJulio = (daysFirstSem / totalFirstSemDays) * monthlySalary;

  // Second semester days
  const ssEffStart = startDate > secondSemStart ? startDate : secondSemStart;
  const ssEffEnd = endDate < secondSemEnd ? endDate : secondSemEnd;
  const daysSecondSem = Math.max(0, getDaysBetween(ssEffStart, ssEffEnd));
  const totalSecondSemDays = getDaysBetween(secondSemStart, secondSemEnd);
  const gratificacionDiciembre = daysSecondSem > 0
    ? (daysSecondSem / totalSecondSemDays) * monthlySalary
    : 0;

  void totalDays;

  const total = gratificacionJulio + gratificacionDiciembre;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Gratificación julio (${daysFirstSem} días trabajados ene-jun)`,
      days: daysFirstSem,
      amount: gratificacionJulio,
    },
    {
      concept: `Gratificación diciembre (${daysSecondSem} días trabajados jul-dic)`,
      days: daysSecondSem,
      amount: gratificacionDiciembre,
    },
  ];

  return { total, breakdown, currency: "PEN" };
}

/**
 * Vacaciones - Peru Decreto Legislativo 713
 * 30 calendar days per year of service.
 * Vacaciones truncas (earned but not taken) on termination.
 * Proportional for partial year.
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // Daily wage for vacation calculation
  const dailyWage = monthlySalary / 30;

  // Full annual vacation value (30 calendar days)
  const annualVacationDays = 30;
  const annualVacationAmount = annualVacationDays * dailyWage;

  // Vacaciones truncas: proportional days in incomplete year
  const daysInCurrentYear = totalDays % 365;
  const truncasDays = (annualVacationDays / 365) * daysInCurrentYear;
  const truncasAmount = truncasDays * dailyWage;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Años de servicio completos: ${completedYears}`,
      days: completedYears,
      amount: 0,
    },
    {
      concept: `Vacaciones anuales (30 días calendario, Dec. Leg. 713)`,
      days: annualVacationDays,
      amount: annualVacationAmount,
    },
    {
      concept: `Vacaciones truncas del período en curso`,
      days: Math.round(truncasDays * 100) / 100,
      amount: truncasAmount,
    },
  ];

  const total = annualVacationAmount + truncasAmount;
  return { total, breakdown, currency: "PEN" };
}

/**
 * Liquidación laboral - Peru
 * Vacaciones truncas + CTS proporcional + Gratificación trunca.
 * For unjustified dismissal (despido arbitrario): 1.5 salaries per year (no statutory max).
 */
export function calculateLiquidacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // Vacaciones truncas
  const daysInCurrentYear = totalDays % 365;
  const truncasDays = (30 / 365) * daysInCurrentYear;
  const truncasAmount = truncasDays * (monthlySalary / 30);

  // CTS proporcional
  const gratificacionMensual = monthlySalary / 6;
  const remuneracionComputable = monthlySalary + gratificacionMensual;
  const monthsWorked = totalDays / 30;
  const ctsAmount = (remuneracionComputable / 12) * monthsWorked;

  // Gratificación trunca (proportional of current semester)
  const year = endDate.getFullYear();
  const month = endDate.getMonth();
  let semesterStart: Date;
  let semesterEnd: Date;

  if (month < 6) {
    semesterStart = new Date(year, 0, 1);
    semesterEnd = new Date(year, 5, 30);
  } else {
    semesterStart = new Date(year, 6, 1);
    semesterEnd = new Date(year, 11, 31);
  }

  const effectiveStart = startDate > semesterStart ? startDate : semesterStart;
  const daysInSemester = Math.max(0, getDaysBetween(effectiveStart, endDate));
  const totalSemesterDays = getDaysBetween(semesterStart, semesterEnd);
  const gratificacionTrunca = (daysInSemester / totalSemesterDays) * monthlySalary;

  // Indemnización por despido arbitrario: 1.5 salaries per year (shown separately)
  const indemnizacionDespido = monthlySalary * 1.5 * completedYears;

  const total = truncasAmount + ctsAmount + gratificacionTrunca;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Vacaciones truncas proporcionales (Dec. Leg. 713)",
      days: Math.round(truncasDays * 100) / 100,
      amount: truncasAmount,
    },
    {
      concept: `CTS proporcional (${Math.round(monthsWorked * 10) / 10} meses)`,
      days: totalDays,
      amount: ctsAmount,
    },
    {
      concept: `Gratificación trunca del semestre en curso`,
      days: daysInSemester,
      amount: gratificacionTrunca,
    },
    {
      concept: `Indemnización despido arbitrario (1.5 sueldos × ${completedYears} años)`,
      days: completedYears,
      amount: indemnizacionDespido,
    },
  ];

  return { total: total + indemnizacionDespido, breakdown, currency: "PEN" };
}

/**
 * AFP vs ONP - Peru
 * AFP: ~13% (10% cuenta individual + 1.84% comision + 1.35% seguro)
 * ONP: 13% flat to state pension system
 */
export function calculateAfpOnp(
  monthlySalary: number,
  sistema: "afp" | "onp"
): CalculationResult {
  if (sistema === "afp") {
    const cuentaIndividual = monthlySalary * 0.10;
    const comision = monthlySalary * 0.0184;
    const seguroInvalidez = monthlySalary * 0.0135;
    const totalAFP = cuentaIndividual + comision + seguroInvalidez;
    const neto = monthlySalary - totalAFP;

    const breakdown: CalculationBreakdown[] = [
      { concept: "Aporte cuenta individual AFP (10%)", amount: cuentaIndividual },
      { concept: "Comision AFP promedio (1.84%)", amount: comision },
      { concept: "Prima seguro de invalidez (1.35%)", amount: seguroInvalidez },
      { concept: "Total descuento AFP", amount: totalAFP },
      { concept: "Sueldo neto estimado", amount: neto },
    ];
    return { total: totalAFP, breakdown, currency: "PEN" };
  } else {
    const aporte = monthlySalary * 0.13;
    const neto = monthlySalary - aporte;
    const breakdown: CalculationBreakdown[] = [
      { concept: "Aporte ONP (13% fijo)", amount: aporte },
      { concept: "Sueldo neto estimado", amount: neto },
    ];
    return { total: aporte, breakdown, currency: "PEN" };
  }
}

/**
 * Horas Extra - Peru DL 854 Art. 10
 * First 2 extra hours: +25%, subsequent hours: +35%
 */
export function calculateHorasExtraPE(
  monthlySalary: number,
  horasExtra: number
): CalculationResult {
  const hourlyRate = monthlySalary / (8 * 26);

  const horas25 = Math.min(2, horasExtra);
  const horas35 = Math.max(0, horasExtra - 2);

  const pago25 = hourlyRate * 1.25 * horas25;
  const pago35 = hourlyRate * 1.35 * horas35;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Primeras 2 horas extra (25% recargo): ${horas25}h`, days: horas25, amount: pago25 },
    ...(horas35 > 0 ? [{ concept: `Horas adicionales (35% recargo): ${horas35}h`, days: horas35, amount: pago35 }] : []) as CalculationBreakdown[],
  ];

  return { total: pago25 + pago35, breakdown, currency: "PEN" };
}

/**
 * Calculadora de IGV - Peru
 * Tasa 18% (TUO IGV Art. 17)
 */
export function calculateIGV(precio: number, incluido: boolean): CalculationResult {
  const tasa = 0.18;
  const base = incluido ? precio / (1 + tasa) : precio;
  const igv = base * tasa;
  const total = base + igv;
  const breakdown: CalculationBreakdown[] = [
    { concept: "Precio base (sin IGV)", amount: base },
    { concept: "IGV (18%)", amount: igv },
    { concept: "Total con IGV", amount: total },
  ];
  return { total: incluido ? igv : total, breakdown, currency: "PEN" };
}
