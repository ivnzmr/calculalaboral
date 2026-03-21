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
 * Aguinaldo - Costa Rica Codigo de Trabajo Art. 228
 * 1/12 of all salary received Dec 1 to Nov 30, proportional if < 1 year.
 */
export function calculateAguinaldo(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const aguinaldo = monthlySalary * (Math.min(totalDays, 365) / 365);

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Salario mensual x dias trabajados / 12`,
      days: Math.min(totalDays, 365),
      amount: aguinaldo,
    },
    { concept: "Periodo: 1 diciembre al 30 noviembre siguiente", amount: 0 },
  ];
  return { total: aguinaldo, breakdown, currency: "CRC" };
}

/**
 * Auxilio de Cesantia - Costa Rica Codigo de Trabajo Art. 29
 * Scale from 19.5 to 23 days per year of service.
 */
export function calculateCesantia(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);
  const dailySalary = getDailyWage(monthlySalary);

  const scale: Record<number, number> = {
    1: 19.5,
    2: 20,
    3: 20.5,
    4: 21,
    5: 21.5,
    6: 22,
    7: 22.5,
    8: 23,
  };
  const diasCesantia =
    completedYears >= 8
      ? 23
      : scale[completedYears] ?? 0;
  const amount = diasCesantia * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Anos de servicio: ${completedYears}`, amount: 0 },
    {
      concept: `Auxilio de cesantia: ${diasCesantia} dias de salario`,
      days: diasCesantia,
      amount,
    },
  ];
  return { total: amount, breakdown, currency: "CRC" };
}

/**
 * Preaviso - Costa Rica Codigo de Trabajo
 * Scale: < 3 months = 1 week, 3-6 months = 2 weeks, 6-12 months = 1 month, > 1 year = 1 month.
 */
export function calculatePreaviso(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const dailySalary = getDailyWage(monthlySalary);

  let diasPreaviso = 30;
  if (totalDays < 90) diasPreaviso = 7;
  else if (totalDays < 180) diasPreaviso = 14;

  const amount = diasPreaviso * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Preaviso (${diasPreaviso} dias segun antiguedad)`,
      days: diasPreaviso,
      amount,
    },
  ];
  return { total: amount, breakdown, currency: "CRC" };
}

/**
 * Vacaciones - Costa Rica Codigo de Trabajo Art. 153
 * Minimum 2 weeks (14 days) per year worked.
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const dailySalary = getDailyWage(monthlySalary);
  const diasVacaciones = 14;
  const proporcional = (diasVacaciones / 365) * Math.min(totalDays, 365);
  const proporcionalAmount = proporcional * dailySalary;
  const annualAmount = diasVacaciones * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Vacaciones anuales minimas: ${diasVacaciones} dias`,
      days: diasVacaciones,
      amount: annualAmount,
    },
    {
      concept: "Vacaciones proporcionales",
      days: Math.round(proporcional * 100) / 100,
      amount: proporcionalAmount,
    },
  ];
  return { total: annualAmount + proporcionalAmount, breakdown, currency: "CRC" };
}
