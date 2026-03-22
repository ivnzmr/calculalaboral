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

/**
 * Horas Extra - Venezuela LOTTT Art. 118
 * Dias habiles: +50% (1.5x), Feriados/Domingos: +100% (2x)
 */
export function calculateHorasExtra(
  monthlySalary: number,
  horasHabil: number,
  horasFestivo: number
): CalculationResult {
  const hourlyRate = monthlySalary / (8 * 30);
  const pagoHabil = hourlyRate * 1.5 * horasHabil;
  const pagoFestivo = hourlyRate * 2.0 * horasFestivo;

  const breakdown: CalculationBreakdown[] = [
    ...(horasHabil > 0 ? [{ concept: `Horas extra dias habiles (+50%): ${horasHabil}h`, days: horasHabil, amount: pagoHabil }] : []) as CalculationBreakdown[],
    ...(horasFestivo > 0 ? [{ concept: `Horas extra feriados/domingos (+100%): ${horasFestivo}h`, days: horasFestivo, amount: pagoFestivo }] : []) as CalculationBreakdown[],
  ];

  return { total: pagoHabil + pagoFestivo, breakdown, currency: "VES" };
}

/**
 * Calculadora de IVA - Venezuela
 * Tasa general 16% (Ley del IVA)
 */
export function calculateIVA(precio: number, incluido: boolean): CalculationResult {
  const tasa = 0.16;
  const base = incluido ? precio / (1 + tasa) : precio;
  const iva = base * tasa;
  const total = base + iva;
  const breakdown: CalculationBreakdown[] = [
    { concept: "Precio base (sin IVA)", amount: base },
    { concept: "IVA (16%)", amount: iva },
    { concept: "Total con IVA", amount: total },
  ];
  return { total: incluido ? iva : total, breakdown, currency: "VES" };
}

/**
 * Nomina Neta - Venezuela
 * SSO (Seguro Social Obligatorio): 4%
 * FAOV (Fondo Ahorro Obligatorio Vivienda): 1%
 * RPAE (Paro Forzoso): 0.5%
 */
export function calculateNominaNeta(monthlySalary: number): CalculationResult {
  const sso = monthlySalary * 0.04;
  const faov = monthlySalary * 0.01;
  const rpae = monthlySalary * 0.005;
  const totalDescuento = sso + faov + rpae;
  const salarioNeto = monthlySalary - totalDescuento;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: "SSO - Seguro Social Obligatorio (4%)", amount: sso },
    { concept: "FAOV - Fondo Ahorro Obligatorio Vivienda (1%)", amount: faov },
    { concept: "RPAE - Paro Forzoso (0.5%)", amount: rpae },
    { concept: "Total descuentos", amount: totalDescuento },
    { concept: "Salario neto estimado (en mano)", amount: salarioNeto },
  ];

  return { total: salarioNeto, breakdown, currency: "VES" };
}
