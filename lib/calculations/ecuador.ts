import type { CalculationResult, CalculationBreakdown } from "./mexico";

function getDaysBetween(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
}

function getYearsBetween(startDate: Date, endDate: Date): number {
  return getDaysBetween(startDate, endDate) / 365;
}

// SBU 2026 (Salario Básico Unificado)
const SBU_2026 = 460;

/**
 * Décimo tercer sueldo - Ecuador Código del Trabajo Art. 111
 * 1/12 of total annual remuneration.
 * Period: December 1 to November 30.
 * Paid by December 24 each year.
 * Proportional for partial year.
 * Currency: USD (Ecuador uses USD).
 */
export function calculateDecimoTercero(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);

  // Period for 13th salary: Dec 1 to Nov 30
  const year = endDate.getFullYear();
  const periodStart = endDate.getMonth() >= 11
    ? new Date(year, 11, 1)      // Dec 1 of current year
    : new Date(year - 1, 11, 1); // Dec 1 of previous year
  const periodEnd = endDate.getMonth() >= 11
    ? new Date(year + 1, 10, 30) // Nov 30 of next year
    : new Date(year, 10, 30);    // Nov 30 of current year

  const effectiveStart = startDate > periodStart ? startDate : periodStart;
  const effectiveEnd = endDate < periodEnd ? endDate : periodEnd;
  const daysInPeriod = Math.max(0, getDaysBetween(effectiveStart, effectiveEnd));
  const totalPeriodDays = getDaysBetween(periodStart, periodEnd);

  // 1/12 of annual remuneration proportional
  const annualRemuneration = monthlySalary * 12;
  const decimoTerceroFull = annualRemuneration / 12; // = 1 monthly salary
  const decimoTerceroProporcional = (decimoTerceroFull / totalPeriodDays) * daysInPeriod;

  void totalDays;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Período de cálculo: dic 1 - nov 30",
      days: totalPeriodDays,
      amount: 0,
    },
    {
      concept: `Días trabajados en el período`,
      days: daysInPeriod,
      amount: 0,
    },
    {
      concept: "Décimo tercer sueldo completo (1/12 remuneración anual)",
      amount: decimoTerceroFull,
    },
    {
      concept: "Décimo tercer sueldo proporcional (Art. 111 CT)",
      days: daysInPeriod,
      amount: decimoTerceroProporcional,
    },
  ];

  return { total: decimoTerceroProporcional, breakdown, currency: "USD" };
}

/**
 * Décimo cuarto sueldo - Ecuador Código del Trabajo Art. 113
 * 1 SBU (Salario Básico Unificado) per year.
 * SBU 2026: $460/month.
 * Paid August 15 (coast/Amazon) or March 15 (highlands/Galapagos).
 * Proportional for partial year.
 */
export function calculateDecimoCuarto(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);

  // Proportional 14th salary based on days worked
  const decimoCuartoAnnual = SBU_2026;
  const decimoCuartoProporcional = (decimoCuartoAnnual / 365) * totalDays;

  void yearsWorked;
  void monthlySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `SBU 2026 utilizado para el cálculo`,
      amount: SBU_2026,
    },
    {
      concept: `Días trabajados en el período`,
      days: totalDays,
      amount: 0,
    },
    {
      concept: "Décimo cuarto completo (1 SBU anual, Art. 113 CT)",
      amount: decimoCuartoAnnual,
    },
    {
      concept: "Décimo cuarto proporcional según días trabajados",
      days: totalDays,
      amount: decimoCuartoProporcional,
    },
  ];

  return { total: decimoCuartoProporcional, breakdown, currency: "USD" };
}

/**
 * Fondos de reserva - Ecuador Código del Trabajo Art. 196
 * 8.33% of monthly salary per month (after first year of employment).
 * Only applies after 1 complete year.
 * Can be paid monthly or accumulated in IESS.
 */
export function calculateFondosReserva(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);

  if (yearsWorked < 1) {
    const breakdown: CalculationBreakdown[] = [
      {
        concept: "Sin derecho a fondos de reserva (se requiere mínimo 1 año de trabajo, Art. 196)",
        amount: 0,
      },
      {
        concept: `Tiempo trabajado: ${Math.round(totalDays)} días`,
        days: totalDays,
        amount: 0,
      },
    ];
    return { total: 0, breakdown, currency: "USD" };
  }

  // Start counting from end of first year
  const firstYearEnd = new Date(startDate);
  firstYearEnd.setFullYear(firstYearEnd.getFullYear() + 1);

  const daysAfterFirstYear = Math.max(0, getDaysBetween(firstYearEnd, endDate));
  const monthsAfterFirstYear = daysAfterFirstYear / 30;

  // 8.33% per month = 1/12 annual = one month salary per year
  const fondosMensual = monthlySalary * 0.0833;
  const fondosTotal = fondosMensual * monthsAfterFirstYear;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Años de servicio: ${Math.floor(yearsWorked)} (fondos desde el 2do año)`,
      days: Math.floor(yearsWorked),
      amount: 0,
    },
    {
      concept: `Meses con derecho a fondos de reserva`,
      days: Math.round(monthsAfterFirstYear * 10) / 10,
      amount: 0,
    },
    {
      concept: "Fondo de reserva mensual (8.33% del salario, Art. 196 CT)",
      amount: fondosMensual,
    },
    {
      concept: "Total fondos de reserva acumulados",
      days: Math.round(daysAfterFirstYear),
      amount: fondosTotal,
    },
  ];

  return { total: fondosTotal, breakdown, currency: "USD" };
}

/**
 * Liquidación laboral - Ecuador Código del Trabajo
 * Desahucio (employer terminates): 25% of last monthly salary per year.
 * + Vacaciones proporcionales (15 working days/year).
 * + Décimos proporcionales.
 * + Fondos de reserva proportional.
 * All in USD.
 */
export function calculateLiquidacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // Desahucio: 25% of monthly salary per year (employer-initiated termination)
  const desahucio = monthlySalary * 0.25 * completedYears;

  // Vacaciones proporcionales: 15 working days per year
  const dailyWage = monthlySalary / 30;
  const annualVacationDays = 15;
  const vacacionesDays = (annualVacationDays / 365) * totalDays;
  const vacacionesAmount = vacacionesDays * dailyWage;

  // Décimo tercero proporcional
  const decimoTerceroProporcional = (monthlySalary / 365) * totalDays;

  // Décimo cuarto proporcional
  const decimoCuartoProporcional = (SBU_2026 / 365) * totalDays;

  // Fondos de reserva (only after first year)
  let fondosReserva = 0;
  if (yearsWorked >= 1) {
    const firstYearEnd = new Date(startDate);
    firstYearEnd.setFullYear(firstYearEnd.getFullYear() + 1);
    const daysAfterFirstYear = Math.max(0, getDaysBetween(firstYearEnd, endDate));
    fondosReserva = (monthlySalary * 0.0833 / 30) * daysAfterFirstYear;
  }

  const total = desahucio + vacacionesAmount + decimoTerceroProporcional + decimoCuartoProporcional + fondosReserva;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Desahucio (25% × ${completedYears} años de servicio)`,
      days: completedYears,
      amount: desahucio,
    },
    {
      concept: `Vacaciones proporcionales (15 días hábiles/año)`,
      days: Math.round(vacacionesDays * 100) / 100,
      amount: vacacionesAmount,
    },
    {
      concept: "Décimo tercer sueldo proporcional",
      days: totalDays,
      amount: decimoTerceroProporcional,
    },
    {
      concept: `Décimo cuarto proporcional (SBU 2026: $${SBU_2026})`,
      days: totalDays,
      amount: decimoCuartoProporcional,
    },
    {
      concept: "Fondos de reserva proporcionales (8.33%/mes desde 2do año)",
      days: totalDays,
      amount: fondosReserva,
    },
  ];

  return { total, breakdown, currency: "USD" };
}

/**
 * IESS Aportaciones - Ecuador
 * Worker: 9.45% personal contribution
 * Employer: 12.15% contribution
 */
export function calculateIESS(
  monthlySalary: number
): CalculationResult {
  const aporteTrabajador = monthlySalary * 0.0945;
  const aporteEmpleador = monthlySalary * 0.1215;
  const salarioNeto = monthlySalary - aporteTrabajador;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Aporte personal IESS trabajador (9.45%)", amount: aporteTrabajador },
    { concept: "Descuento de tu nomina", amount: aporteTrabajador },
    { concept: "Aporte patronal IESS empleador (12.15%) - referencia", amount: aporteEmpleador },
    { concept: "Sueldo neto estimado (en mano)", amount: salarioNeto },
  ];

  return { total: aporteTrabajador, breakdown, currency: "USD" };
}

/**
 * Horas Extra - Ecuador Codigo del Trabajo Art. 55
 * Diurnas (6am-12am): +50% first 4 hours, +100% after
 * Nocturnas (12am-6am): +100% always
 */
export function calculateHorasExtraEC(
  monthlySalary: number,
  horasDiurnasHasta4: number,
  horasDiurnasMas4: number,
  horasNocturnas: number
): CalculationResult {
  const hourlyRate = monthlySalary / (8 * 30);

  const pagoDiurna4 = hourlyRate * 1.5 * horasDiurnasHasta4;
  const pagoDiurnaMas = hourlyRate * 2.0 * horasDiurnasMas4;
  const pagoNocturna = hourlyRate * 2.0 * horasNocturnas;
  const total = pagoDiurna4 + pagoDiurnaMas + pagoNocturna;

  const breakdown: CalculationBreakdown[] = [
    ...(horasDiurnasHasta4 > 0 ? [{ concept: `Horas extra diurnas (hasta 4/dia, +50%): ${horasDiurnasHasta4}h`, days: horasDiurnasHasta4, amount: pagoDiurna4 }] : []) as CalculationBreakdown[],
    ...(horasDiurnasMas4 > 0 ? [{ concept: `Horas extra diurnas (mas de 4/dia, +100%): ${horasDiurnasMas4}h`, days: horasDiurnasMas4, amount: pagoDiurnaMas }] : []) as CalculationBreakdown[],
    ...(horasNocturnas > 0 ? [{ concept: `Horas nocturnas (+100%): ${horasNocturnas}h`, days: horasNocturnas, amount: pagoNocturna }] : []) as CalculationBreakdown[],
  ];

  return { total, breakdown, currency: "USD" };
}

/**
 * Calculadora de IVA - Ecuador
 * Tasa general 12% (Ley de Regimen Tributario Interno Art. 65)
 */
export function calculateIVA(precio: number, incluido: boolean): CalculationResult {
  const tasa = 0.12;
  const base = incluido ? precio / (1 + tasa) : precio;
  const iva = base * tasa;
  const total = base + iva;
  const breakdown: CalculationBreakdown[] = [
    { concept: "Precio base (sin IVA)", amount: base },
    { concept: "IVA (12%)", amount: iva },
    { concept: "Total con IVA", amount: total },
  ];
  return { total: incluido ? iva : total, breakdown, currency: "USD" };
}
