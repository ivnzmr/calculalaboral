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
 * Aguinaldo de Navidad - Bolivia Decreto Ley 1592
 * Full month salary for December, proportional if < 1 year.
 */
export function calculateAguinaldo(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const proporcional = monthlySalary * (Math.min(totalDays, 365) / 365);

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Aguinaldo proporcional (${Math.min(totalDays, 365)} dias / 365)`,
      days: Math.min(totalDays, 365),
      amount: proporcional,
    },
    { concept: "Pagadero hasta el 20 de diciembre de cada ano", amount: 0 },
  ];
  return { total: proporcional, breakdown, currency: "BOB" };
}

/**
 * Segundo Aguinaldo - Bolivia
 * Extra bonus when GDP growth exceeds 4.5% (declared by government).
 */
export function calculateSegundoAguinaldo(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const proporcional = monthlySalary * (Math.min(totalDays, 365) / 365);

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Segundo aguinaldo (cuando el PIB crece mas del 4.5%)",
      amount: 0,
    },
    {
      concept: "Monto proporcional estimado",
      days: Math.min(totalDays, 365),
      amount: proporcional,
    },
    {
      concept: "Nota: Solo se paga cuando el gobierno lo declara",
      amount: 0,
    },
  ];
  return { total: proporcional, breakdown, currency: "BOB" };
}

/**
 * Desahucio - Bolivia
 * 3 months salary if dismissed without cause after 90 days worked.
 */
export function calculateDesahucio(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const totalDays = getDaysBetween(startDate, endDate);

  if (totalDays < 90) {
    return {
      total: 0,
      breakdown: [
        {
          concept: "No corresponde desahucio: menos de 90 dias trabajados",
          amount: 0,
        },
      ],
      currency: "BOB",
    };
  }

  const desahucio = monthlySalary * 3;
  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Desahucio: 3 salarios mensuales por despido intempestivo",
      days: 90,
      amount: desahucio,
    },
    { concept: `Anos de servicio: ${yearsWorked.toFixed(1)}`, amount: 0 },
  ];
  return { total: desahucio, breakdown, currency: "BOB" };
}

/**
 * Vacaciones - Bolivia
 * 15 days (1-4 years), 20 days (5-7 years), 30 days (8+ years).
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);
  const dailySalary = getDailyWage(monthlySalary);

  let diasVacaciones = 15;
  if (completedYears >= 8) diasVacaciones = 30;
  else if (completedYears >= 5) diasVacaciones = 20;

  const amount = diasVacaciones * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Anos trabajados: ${completedYears}`, amount: 0 },
    {
      concept: `Vacaciones anuales: ${diasVacaciones} dias de salario`,
      days: diasVacaciones,
      amount,
    },
  ];
  return { total: amount, breakdown, currency: "BOB" };
}

/**
 * Horas Extra - Bolivia Ley General del Trabajo
 * Recargo: 100% sobre valor hora ordinaria (doble pago)
 */
export function calculateHorasExtra(
  monthlySalary: number,
  horasExtra: number
): CalculationResult {
  const hourlyRate = monthlySalary / (8 * 25);
  const pagoHora = hourlyRate * 2.0;
  const total = pagoHora * horasExtra;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Valor hora ordinaria: ${hourlyRate.toFixed(2)} BOB`, amount: 0 },
    { concept: `${horasExtra} horas extra con recargo 100% (LGT)`, days: horasExtra, amount: total },
    { concept: "Nota: jornada maxima ordinaria 8 horas/dia", amount: 0 },
  ];

  return { total, breakdown, currency: "BOB" };
}

/**
 * Calculadora de IVA - Bolivia
 * Tasa general 13% (Ley 843)
 */
export function calculateIVA(precio: number, incluido: boolean): CalculationResult {
  const tasa = 0.13;
  const base = incluido ? precio / (1 + tasa) : precio;
  const iva = base * tasa;
  const total = base + iva;
  const breakdown: CalculationBreakdown[] = [
    { concept: "Precio base (sin IVA)", amount: base },
    { concept: "IVA (13%)", amount: iva },
    { concept: "Total con IVA", amount: total },
  ];
  return { total: incluido ? iva : total, breakdown, currency: "BOB" };
}

/**
 * Nomina Neta - Bolivia
 * AFP cuenta individual: 10%
 * SGRA (Seguro por Riesgo Profesional): 1.71%
 * Comision AFP estimada: 0.5%
 * Total: ~12.21%
 */
export function calculateNominaNeta(monthlySalary: number): CalculationResult {
  const afpIndividual = monthlySalary * 0.10;
  const sgra = monthlySalary * 0.0171;
  const comisionAfp = monthlySalary * 0.005;
  const totalDescuento = afpIndividual + sgra + comisionAfp;
  const salarioNeto = monthlySalary - totalDescuento;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: "AFP - Cuenta Individual (10%)", amount: afpIndividual },
    { concept: "SGRA - Seguro por Riesgo (1.71%)", amount: sgra },
    { concept: "Comision AFP estimada (0.5%)", amount: comisionAfp },
    { concept: "Total descuentos previsionales", amount: totalDescuento },
    { concept: "Salario neto estimado (en mano)", amount: salarioNeto },
  ];

  return { total: salarioNeto, breakdown, currency: "BOB" };
}
