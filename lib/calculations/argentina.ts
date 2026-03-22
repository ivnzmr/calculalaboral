import type { CalculationResult, CalculationBreakdown } from "./mexico";

function getDaysBetween(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
}

function getYearsBetween(startDate: Date, endDate: Date): number {
  return getDaysBetween(startDate, endDate) / 365;
}

// Argentina uses monthly salary / 25 working days for daily wage (LCT)
function getDailyWage(monthlySalary: number): number {
  return monthlySalary / 25;
}

/**
 * Indemnización por despido sin causa - Argentina LCT Art. 245
 * Best monthly salary × completed years worked.
 * Minimum: 2 months salary. No statutory cap.
 */
export function calculateIndemnizacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // Art. 245: indemnización = mejor remuneración mensual normal × años de antigüedad
  const indemnizacion = monthlySalary * completedYears;

  // Minimum: 2 months salary
  const minimum = monthlySalary * 2;
  const indemnizacionFinal = Math.max(indemnizacion, minimum);

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Mejor remuneración mensual normal y habitual",
      amount: monthlySalary,
    },
    {
      concept: `Años de antigüedad: ${completedYears}`,
      days: completedYears,
      amount: 0,
    },
    {
      concept: "Indemnización (Art. 245 LCT)",
      days: completedYears,
      amount: indemnizacionFinal,
    },
  ];

  if (indemnizacion < minimum) {
    breakdown.push({
      concept: "Mínimo legal aplicado (2 mensualidades)",
      amount: 0,
    });
  }

  return { total: indemnizacionFinal, breakdown, currency: "ARS" };
}

/**
 * SAC / Aguinaldo - Argentina LCT Art. 121
 * 50% of the best salary earned in the semester.
 * Two semesters: Jan-Jun (paid June 30) and Jul-Dec (paid Dec 18).
 * Proportional if partial semester.
 */
export function calculateSAC(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);

  // Determine current semester boundaries relative to endDate
  const year = endDate.getFullYear();
  const month = endDate.getMonth(); // 0-indexed

  let semesterStart: Date;
  let semesterEnd: Date;
  let semesterName: string;

  if (month < 6) {
    // First semester: Jan 1 - Jun 30
    semesterStart = new Date(year, 0, 1);
    semesterEnd = new Date(year, 5, 30);
    semesterName = "1er semestre (ene-jun)";
  } else {
    // Second semester: Jul 1 - Dec 31
    semesterStart = new Date(year, 6, 1);
    semesterEnd = new Date(year, 11, 31);
    semesterName = "2do semestre (jul-dic)";
  }

  // Days worked within the current semester
  const effectiveStart = startDate > semesterStart ? startDate : semesterStart;
  const effectiveEnd = endDate < semesterEnd ? endDate : semesterEnd;
  const daysInSemester = Math.max(0, getDaysBetween(effectiveStart, effectiveEnd));

  // Total semester days (approx 180)
  const totalSemesterDays = getDaysBetween(semesterStart, semesterEnd);

  // SAC = 50% of best salary, proportional to days worked in semester
  const sacFull = monthlySalary * 0.5;
  const sacProporcional = (sacFull / totalSemesterDays) * daysInSemester;

  void totalDays;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Semestre: ${semesterName}`,
      days: totalSemesterDays,
      amount: 0,
    },
    {
      concept: `Días trabajados en el semestre`,
      days: daysInSemester,
      amount: 0,
    },
    {
      concept: "SAC completo (50% del mejor salario del semestre)",
      amount: sacFull,
    },
    {
      concept: "SAC proporcional según días trabajados",
      days: daysInSemester,
      amount: sacProporcional,
    },
  ];

  return { total: sacProporcional, breakdown, currency: "ARS" };
}

/**
 * Vacaciones - Argentina LCT Art. 150
 * Progressive scale by completed years worked:
 *   0-5 years:   14 working days
 *   6-10 years:  21 working days
 *   11-20 years: 28 working days
 *   20+ years:   35 working days
 * Proportional if less than 1 year: 1 day per 20 worked days.
 * Daily wage = monthly salary / 25.
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailyWage = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  function getVacationDays(years: number): number {
    if (years < 1) return 0;
    if (years < 6) return 14;
    if (years < 11) return 21;
    if (years < 20) return 28;
    return 35;
  }

  const breakdown: CalculationBreakdown[] = [];
  let total = 0;

  if (completedYears < 1) {
    // Proportional: 1 day per 20 worked days (Art. 150 LCT)
    const proportionalDays = Math.floor(totalDays / 20);
    const amount = proportionalDays * dailyWage;
    total = amount;

    breakdown.push(
      {
        concept: `Días trabajados: ${totalDays} (menos de 1 año)`,
        days: totalDays,
        amount: 0,
      },
      {
        concept: "Vacaciones proporcionales (1 día c/20 días trabajados)",
        days: proportionalDays,
        amount,
      }
    );
  } else {
    const annualDays = getVacationDays(completedYears);
    const annualAmount = annualDays * dailyWage;

    // Proportional days in current incomplete year
    const daysInCurrentYear = totalDays % 365;
    const proportionalDays = Math.floor(daysInCurrentYear / 20);
    const proportionalAmount = proportionalDays * dailyWage;
    total = annualAmount + proportionalAmount;

    breakdown.push(
      {
        concept: `Años de antigüedad completos: ${completedYears}`,
        days: completedYears,
        amount: 0,
      },
      {
        concept: `Vacaciones anuales según escala (Art. 150 LCT)`,
        days: annualDays,
        amount: annualAmount,
      },
      {
        concept: `Vacaciones proporcionales del año en curso`,
        days: proportionalDays,
        amount: proportionalAmount,
      }
    );
  }

  return { total, breakdown, currency: "ARS" };
}

/**
 * Liquidación Final - Argentina LCT
 * Indemnización (Art. 245) + integración mes de despido
 * + vacaciones proporcionales + SAC proporcional.
 */
export function calculateLiquidacionFinal(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailyWage = getDailyWage(monthlySalary);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);
  const totalDays = getDaysBetween(startDate, endDate);

  // Indemnización Art. 245
  const indemnizacionBase = monthlySalary * completedYears;
  const indemnizacion = Math.max(indemnizacionBase, monthlySalary * 2);

  // Integración mes de despido: remaining days of current month × daily wage
  const daysInCurrentMonth = endDate.getDate();
  const daysRemainingInMonth = new Date(
    endDate.getFullYear(),
    endDate.getMonth() + 1,
    0
  ).getDate() - daysInCurrentMonth;
  const integracionMes = daysRemainingInMonth * dailyWage;

  // Vacaciones proporcionales
  function getVacationDays(years: number): number {
    if (years < 1) return 0;
    if (years < 6) return 14;
    if (years < 11) return 21;
    if (years < 20) return 28;
    return 35;
  }

  let vacacionesAmount = 0;
  let vacacionesDays = 0;

  if (completedYears < 1) {
    vacacionesDays = Math.floor(totalDays / 20);
  } else {
    const daysInCurrentYear = totalDays % 365;
    vacacionesDays = getVacationDays(completedYears) + Math.floor(daysInCurrentYear / 20);
  }
  vacacionesAmount = vacacionesDays * dailyWage;

  // SAC proporcional
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
  const sacProporcional = (monthlySalary * 0.5 / totalSemesterDays) * daysInSemester;

  const total = indemnizacion + integracionMes + vacacionesAmount + sacProporcional;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Indemnización Art. 245 LCT (${completedYears} años)`,
      days: completedYears,
      amount: indemnizacion,
    },
    {
      concept: `Integración mes de despido (${daysRemainingInMonth} días restantes)`,
      days: daysRemainingInMonth,
      amount: integracionMes,
    },
    {
      concept: "Vacaciones proporcionales no gozadas",
      days: vacacionesDays,
      amount: vacacionesAmount,
    },
    {
      concept: "SAC proporcional del semestre en curso",
      days: daysInSemester,
      amount: sacProporcional,
    },
  ];

  return { total, breakdown, currency: "ARS" };
}

/**
 * Horas Extra - Argentina LCT Art. 201
 * 50% recargo weekdays, 100% recargo Sundays/holidays
 */
export function calculateHorasExtra(
  monthlySalary: number,
  horasHabil: number,
  horasFestivo: number
): CalculationResult {
  const horasMes = monthlySalary / (8 * 25);

  const pagoHabil = horasMes * 1.5 * horasHabil;
  const pagoFestivo = horasMes * 2.0 * horasFestivo;

  const breakdown: CalculationBreakdown[] = [
    ...(horasHabil > 0 ? [{ concept: `Horas extra dias habiles (50% recargo): ${horasHabil}h`, days: horasHabil, amount: pagoHabil }] : []) as CalculationBreakdown[],
    ...(horasFestivo > 0 ? [{ concept: `Horas extra domingos/feriados (100% recargo): ${horasFestivo}h`, days: horasFestivo, amount: pagoFestivo }] : []) as CalculationBreakdown[],
  ];

  return { total: pagoHabil + pagoFestivo, breakdown, currency: "ARS" };
}

/**
 * Calculadora de IVA - Argentina
 * Tasa general 21% (Ley 23.349)
 */
export function calculateIVA(precio: number, incluido: boolean): CalculationResult {
  const tasa = 0.21;
  const base = incluido ? precio / (1 + tasa) : precio;
  const iva = base * tasa;
  const total = base + iva;
  const breakdown: CalculationBreakdown[] = [
    { concept: "Precio base (sin IVA)", amount: base },
    { concept: "IVA (21%)", amount: iva },
    { concept: "Total con IVA", amount: total },
  ];
  return { total: incluido ? iva : total, breakdown, currency: "ARS" };
}

/**
 * Nomina Neta - Argentina
 * Jubilacion SIPA: 11%
 * INSSJP (PAMI): 3%
 * Obra Social: 3%
 * Total aportes SS: 17%
 */
export function calculateNominaNeta(monthlySalary: number): CalculationResult {
  const jubilacion = monthlySalary * 0.11;
  const pami = monthlySalary * 0.03;
  const obraSocial = monthlySalary * 0.03;
  const totalDescuento = jubilacion + pami + obraSocial;
  const salarioNeto = monthlySalary - totalDescuento;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: "Jubilacion SIPA (11%)", amount: jubilacion },
    { concept: "INSSJP - PAMI (3%)", amount: pami },
    { concept: "Obra Social (3%)", amount: obraSocial },
    { concept: "Total aportes SS (17%)", amount: totalDescuento },
    { concept: "Salario neto estimado (sin Impuesto Ganancias)", amount: salarioNeto },
  ];

  return { total: salarioNeto, breakdown, currency: "ARS" };
}
