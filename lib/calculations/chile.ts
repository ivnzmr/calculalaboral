import type { CalculationResult, CalculationBreakdown } from "./mexico";

function getDaysBetween(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
}

function getYearsBetween(startDate: Date, endDate: Date): number {
  return getDaysBetween(startDate, endDate) / 365;
}

function getDailyWage(monthlySalary: number): number {
  return monthlySalary / 30;
}

/**
 * Indemnización por años de servicio - Chile Código del Trabajo Art. 163
 * 1 month salary per year of service.
 * Maximum: 11 months (statutory cap).
 * Minimum 1 year of service to be eligible.
 */
export function calculateIndemnizacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  const breakdown: CalculationBreakdown[] = [];

  if (completedYears < 1) {
    breakdown.push({
      concept: "Sin derecho a indemnización (se requiere mínimo 1 año de servicio, Art. 163)",
      amount: 0,
    });
    return { total: 0, breakdown, currency: "CLP" };
  }

  // 1 month per year, capped at 11 months
  const monthsCapped = Math.min(completedYears, 11);
  const indemnizacion = monthlySalary * monthsCapped;

  breakdown.push(
    {
      concept: `Años de servicio completos: ${completedYears}`,
      days: completedYears,
      amount: 0,
    },
    {
      concept: `Indemnización (1 mes × ${monthsCapped} meses, tope 11 meses)`,
      days: monthsCapped,
      amount: indemnizacion,
    }
  );

  if (completedYears > 11) {
    breakdown.push({
      concept: "Tope máximo legal aplicado (11 meses, Art. 163)",
      amount: 0,
    });
  }

  return { total: indemnizacion, breakdown, currency: "CLP" };
}

/**
 * Gratificación legal - Chile Código del Trabajo Art. 47
 * Option A: 25% of annual remuneration (if company has profits).
 * Option B (most common): 4.75 monthly salaries per year cap.
 * Proportional for partial year.
 */
export function calculateGratificacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);

  // Annual remuneration
  const annualRemuneration = monthlySalary * 12;

  // Option A: 25% of annual remuneration
  const optionA = annualRemuneration * 0.25;
  const optionAProportional = optionA * (totalDays / 365);

  // Option B: Cap of 4.75 monthly salaries per year
  const optionBCap = monthlySalary * 4.75;
  const optionBProportional = Math.min(
    annualRemuneration * 0.25,
    optionBCap
  ) * (totalDays / 365);

  void yearsWorked;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Días trabajados: ${totalDays}`,
      days: totalDays,
      amount: 0,
    },
    {
      concept: "Opción A: 25% de la remuneración anual proporcional",
      days: Math.round(totalDays * 100) / 100,
      amount: optionAProportional,
    },
    {
      concept: "Opción B (más común): Tope 4.75 sueldos/año proporcional",
      days: Math.round(totalDays * 100) / 100,
      amount: optionBProportional,
    },
    {
      concept: "Tope máximo opción B (4.75 mensualidades/año)",
      amount: optionBCap,
    },
  ];

  // Most common calculation is option B
  return { total: optionBProportional, breakdown, currency: "CLP" };
}

/**
 * Feriado legal (vacaciones) - Chile Código del Trabajo Art. 67
 * 15 working days per year minimum.
 * After 10 years: +1 day per 3 additional years.
 * Proportional for partial year.
 * Daily wage = monthly salary / 30.
 */
export function calculateFeriado(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailyWage = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // Base: 15 working days per year
  let annualDays = 15;

  // After 10 years: +1 day per 3 additional years
  if (completedYears > 10) {
    const extraYears = completedYears - 10;
    annualDays += Math.floor(extraYears / 3);
  }

  // Proportional for the period worked
  const proportionalDays = (annualDays / 365) * totalDays;
  const proportionalAmount = proportionalDays * dailyWage;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Años de servicio completos: ${completedYears}`,
      days: completedYears,
      amount: 0,
    },
    {
      concept: `Días de feriado legal anual (Art. 67 CT)`,
      days: annualDays,
      amount: annualDays * dailyWage,
    },
    {
      concept: `Feriado proporcional según días trabajados`,
      days: Math.round(proportionalDays * 100) / 100,
      amount: proportionalAmount,
    },
  ];

  const total = proportionalAmount;
  return { total, breakdown, currency: "CLP" };
}

/**
 * Finiquito - Chile Código del Trabajo
 * Feriado proporcional + Gratificación proporcional
 * + Indemnización por años de servicio
 * + Aviso previo (30 days salary if no notice given - optional).
 */
export function calculateFiniquito(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const dailyWage = getDailyWage(monthlySalary);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // Feriado proporcional
  let annualDays = 15;
  if (completedYears > 10) {
    annualDays += Math.floor((completedYears - 10) / 3);
  }
  const feriadoDays = (annualDays / 365) * totalDays;
  const feriadoAmount = feriadoDays * dailyWage;

  // Gratificación proporcional (Option B most common)
  const annualRemuneration = monthlySalary * 12;
  const optionBCap = monthlySalary * 4.75;
  const gratificacionProporcional = Math.min(
    annualRemuneration * 0.25,
    optionBCap
  ) * (totalDays / 365);

  // Indemnización por años de servicio
  const monthsCapped = Math.min(completedYears, 11);
  const indemnizacion = completedYears >= 1 ? monthlySalary * monthsCapped : 0;

  // Aviso previo (30 days - shown as optional line item)
  const avisoPrevio = monthlySalary;

  const total = feriadoAmount + gratificacionProporcional + indemnizacion;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Feriado proporcional (${annualDays} días/año base)`,
      days: Math.round(feriadoDays * 100) / 100,
      amount: feriadoAmount,
    },
    {
      concept: "Gratificación proporcional (tope 4.75 sueldos, Art. 47)",
      days: Math.round(totalDays * 100) / 100,
      amount: gratificacionProporcional,
    },
    {
      concept: `Indemnización por años de servicio (${monthsCapped} meses)`,
      days: monthsCapped,
      amount: indemnizacion,
    },
    {
      concept: "Aviso previo (30 días - si no se dio aviso al empleador)",
      days: 30,
      amount: avisoPrevio,
    },
  ];

  return { total, breakdown, currency: "CLP" };
}

/**
 * AFP Cotizacion - Chile
 * Worker: ~12.45% (10% AFP + 0.69% SIS + 0.6% seguro desempleo)
 * Plus 7% health (Fonasa/Isapre)
 */
export function calculateAFP(
  monthlySalary: number,
  porcentajeAFP: number = 10
): CalculationResult {
  const afpObligatorio = monthlySalary * (porcentajeAFP / 100);
  const sis = monthlySalary * 0.0069;
  const seguroDesempleoTrab = monthlySalary * 0.006;
  const totalDescuento = afpObligatorio + sis + seguroDesempleoTrab;

  const saludFonasa = monthlySalary * 0.07;
  const totalConSalud = totalDescuento + saludFonasa;
  const salarioLiquido = monthlySalary - totalConSalud;

  const breakdown: CalculationBreakdown[] = [
    { concept: `AFP obligatorio (${porcentajeAFP}%)`, amount: afpObligatorio },
    { concept: "SIS - Seguro Invalidez y Sobrevivencia (0.69%)", amount: sis },
    { concept: "Seguro de Desempleo trabajador (0.6%)", amount: seguroDesempleoTrab },
    { concept: "Salud (Fonasa/Isapre 7%)", amount: saludFonasa },
    { concept: "Total descuentos previsionales", amount: totalConSalud },
    { concept: "Sueldo liquido estimado", amount: salarioLiquido },
  ];

  return { total: totalDescuento, breakdown, currency: "CLP" };
}

/**
 * Horas Extra - Chile Codigo del Trabajo Art. 32
 * Max 2 hours/day, 12 hours/week. Minimum 50% surcharge.
 */
export function calculateHorasExtraCL(
  monthlySalary: number,
  horasExtra: number
): CalculationResult {
  const hourlyRate = monthlySalary / (8 * 22);
  const pagoHora = hourlyRate * 1.5;
  const total = pagoHora * horasExtra;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Valor hora ordinaria: ${hourlyRate.toFixed(0)} CLP`, amount: 0 },
    { concept: `${horasExtra} horas extra con recargo 50%`, days: horasExtra, amount: total },
    { concept: "Limite legal: maximo 2 h/dia y 12 h/semana", amount: 0 },
  ];

  return { total, breakdown, currency: "CLP" };
}

/**
 * Calculadora de IVA - Chile
 * Tasa general 19% (DL 825)
 */
export function calculateIVA(precio: number, incluido: boolean): CalculationResult {
  const tasa = 0.19;
  const base = incluido ? precio / (1 + tasa) : precio;
  const iva = base * tasa;
  const total = base + iva;
  const breakdown: CalculationBreakdown[] = [
    { concept: "Precio base (sin IVA)", amount: base },
    { concept: "IVA (19%)", amount: iva },
    { concept: "Total con IVA", amount: total },
  ];
  return { total: incluido ? iva : total, breakdown, currency: "CLP" };
}
