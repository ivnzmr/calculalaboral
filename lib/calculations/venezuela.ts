import type { CalculationResult, CalculationBreakdown } from "./mexico";

function getDaysBetween(start: Date, end: Date): number {
  return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function getYearsBetween(start: Date, end: Date): number {
  return getDaysBetween(start, end) / 365;
}

function getDailyWage(monthlySalary: number): number {
  return monthlySalary / 30;
}

/**
 * Utilidades - Venezuela LOTTT Art. 131
 * Minimum 15 days of salary per year worked.
 */
export function calculateUtilidades(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const daysInYear = Math.min(totalDays, 365);
  const dailySalary = getDailyWage(monthlySalary);
  const utilidadesBase = dailySalary * 15 * (daysInYear / 365);

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Dias trabajados en el ano: ${daysInYear}`,
      days: daysInYear,
      amount: 0,
    },
    {
      concept: "Utilidades proporcionales (15 dias minimo, LOTTT Art. 131)",
      days: Math.round((15 * daysInYear) / 365 * 100) / 100,
      amount: utilidadesBase,
    },
  ];
  return { total: utilidadesBase, breakdown, currency: "VES" };
}

/**
 * Prestaciones Sociales - Venezuela LOTTT
 * 15 days first year + 2 additional days per completed year.
 */
export function calculatePrestacionesSociales(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);
  const dailySalary = getDailyWage(monthlySalary);
  const diasBase = 15 + Math.max(0, completedYears - 1) * 2;
  const prestaciones = diasBase * dailySalary * completedYears;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Anos de servicio: ${completedYears}`, amount: 0 },
    {
      concept: `Dias de prestacion por ano: ${diasBase} dias`,
      days: diasBase,
      amount: prestaciones,
    },
  ];
  return { total: prestaciones, breakdown, currency: "VES" };
}

/**
 * Vacaciones - Venezuela LOTTT Art. 190
 * 15 days + 1 day per year of service (max 30 days).
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);
  const dailySalary = getDailyWage(monthlySalary);
  const diasVacaciones = Math.min(15 + completedYears, 30);
  const totalDays = getDaysBetween(startDate, endDate);
  const proporcional = (diasVacaciones / 365) * (totalDays % 365);
  const proporcionalAmount = proporcional * dailySalary;
  const annualAmount = diasVacaciones * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Dias de vacaciones anuales (${diasVacaciones} dias)`,
      days: diasVacaciones,
      amount: annualAmount,
    },
    {
      concept: "Vacaciones proporcionales",
      days: Math.round(proporcional * 100) / 100,
      amount: proporcionalAmount,
    },
  ];
  return { total: annualAmount + proporcionalAmount, breakdown, currency: "VES" };
}

/**
 * Bono Vacacional - Venezuela LOTTT Art. 192
 * 7 days base + 1 day per year of service.
 */
export function calculateBonoVacacional(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);
  const dailySalary = getDailyWage(monthlySalary);
  const diasBono = 7 + completedYears;
  const amount = diasBono * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Bono vacacional (7 dias base + ${completedYears} dias por anos de servicio)`,
      days: diasBono,
      amount,
    },
  ];
  return { total: amount, breakdown, currency: "VES" };
}
