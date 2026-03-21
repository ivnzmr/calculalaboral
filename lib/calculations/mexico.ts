export type CalculationBreakdown = {
  concept: string;
  days?: number;
  amount: number;
};

export type CalculationResult = {
  total: number;
  breakdown: CalculationBreakdown[];
  currency: string;
};

function getDaysBetween(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
}

function getYearsBetween(startDate: Date, endDate: Date): number {
  const totalDays = getDaysBetween(startDate, endDate);
  return totalDays / 365;
}

function getDailyWage(monthlySalary: number): number {
  return monthlySalary / 30;
}

/**
 * Returns vacation days according to Mexico Federal Labor Law (LFT).
 * Art. 76: 12 days year 1, +2 days each subsequent year, +2 days every 5 years after year 5.
 */
export function getVacationDaysPerYear(yearsWorked: number): number {
  const completedYears = Math.floor(yearsWorked);
  if (completedYears <= 0) return 6;
  if (completedYears === 1) return 12;
  if (completedYears === 2) return 14;
  if (completedYears === 3) return 16;
  if (completedYears === 4) return 18;

  // From year 5 onwards: 20 days + 2 days every 5 years
  const extraPeriods = Math.floor((completedYears - 5) / 5);
  return 20 + extraPeriods * 2;
}

/**
 * Calculates proportional vacation days for partial year.
 */
function getProportionalVacationDays(
  yearsWorked: number,
  totalDays: number
): number {
  const annualDays = getVacationDaysPerYear(yearsWorked);
  const daysInCurrentYear = totalDays % 365;
  return (annualDays / 365) * daysInCurrentYear;
}

/**
 * Finiquito (voluntary resignation) - Mexico LFT Art. 76, 79, 87
 * Includes: proportional aguinaldo, proportional prima vacacional,
 * unused vacation days, and proportional vacation days for current year.
 */
export function calculateFiniquito(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);

  // Proportional aguinaldo (15 days minimum per year, Art. 87)
  const daysInCurrentYear = totalDays % 365;
  const aguinaldoDays = (15 / 365) * daysInCurrentYear;
  const aguinaldoAmount = aguinaldoDays * dailySalary;

  // Proportional vacation days for current year
  const vacationDays = getProportionalVacationDays(yearsWorked, totalDays);
  const vacationAmount = vacationDays * dailySalary;

  // Prima vacacional (25% of vacation salary, Art. 80)
  const primaAmount = vacationAmount * 0.25;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Aguinaldo proporcional",
      days: Math.round(aguinaldoDays * 100) / 100,
      amount: aguinaldoAmount,
    },
    {
      concept: "Vacaciones proporcionales",
      days: Math.round(vacationDays * 100) / 100,
      amount: vacationAmount,
    },
    {
      concept: "Prima vacacional (25%)",
      days: Math.round(vacationDays * 100) / 100,
      amount: primaAmount,
    },
  ];

  const total = breakdown.reduce((sum, item) => sum + item.amount, 0);

  return { total, breakdown, currency: "MXN" };
}

/**
 * Liquidación por despido injustificado - Mexico LFT Art. 50, 84, 87
 * Includes: 3 months salary + 20 days per year + proportional benefits
 */
export function calculateLiquidacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  // 3 months constitutional indemnification (Art. 50)
  const indemnizacionConstitucional = dailySalary * 90;

  // 20 days per year of service (Art. 50)
  const veintiDiasPorAno = dailySalary * 20 * completedYears;

  // Proportional aguinaldo
  const daysInCurrentYear = totalDays % 365;
  const aguinaldoDays = (15 / 365) * daysInCurrentYear;
  const aguinaldoAmount = aguinaldoDays * dailySalary;

  // Proportional vacation days
  const vacationDays = getProportionalVacationDays(yearsWorked, totalDays);
  const vacationAmount = vacationDays * dailySalary;

  // Prima vacacional
  const primaAmount = vacationAmount * 0.25;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Indemnización constitucional (3 meses)",
      days: 90,
      amount: indemnizacionConstitucional,
    },
    {
      concept: `20 días por año trabajado (${completedYears} años)`,
      days: 20 * completedYears,
      amount: veintiDiasPorAno,
    },
    {
      concept: "Aguinaldo proporcional",
      days: Math.round(aguinaldoDays * 100) / 100,
      amount: aguinaldoAmount,
    },
    {
      concept: "Vacaciones proporcionales",
      days: Math.round(vacationDays * 100) / 100,
      amount: vacationAmount,
    },
    {
      concept: "Prima vacacional (25%)",
      days: Math.round(vacationDays * 100) / 100,
      amount: primaAmount,
    },
  ];

  const total = breakdown.reduce((sum, item) => sum + item.amount, 0);

  return { total, breakdown, currency: "MXN" };
}

/**
 * Aguinaldo (Christmas bonus) - Mexico LFT Art. 87
 * Minimum 15 days of salary per year, proportional if less than 1 year.
 */
export function calculateAguinaldo(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);

  // Calculate worked days in current calendar year
  const currentYear = endDate.getFullYear();
  const yearStart = new Date(currentYear, 0, 1);
  const workedDaysThisYear = getDaysBetween(
    startDate > yearStart ? startDate : yearStart,
    endDate
  );

  // Proportional aguinaldo: 15 days minimum per year
  const aguinaldoDays = (15 / 365) * workedDaysThisYear;
  const aguinaldoAmount = aguinaldoDays * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Días trabajados en ${currentYear}: ${workedDaysThisYear} días`,
      days: workedDaysThisYear,
      amount: 0,
    },
    {
      concept: "Aguinaldo proporcional (base 15 días/año)",
      days: Math.round(aguinaldoDays * 100) / 100,
      amount: aguinaldoAmount,
    },
  ];

  // Remove informational row from total
  const total = aguinaldoAmount;
  const breakdownForDisplay: CalculationBreakdown[] = [
    {
      concept: `Días trabajados en ${currentYear}`,
      days: workedDaysThisYear,
      amount: 0,
    },
    {
      concept: "Aguinaldo proporcional",
      days: Math.round(aguinaldoDays * 100) / 100,
      amount: aguinaldoAmount,
    },
  ];

  void breakdown;

  return { total, breakdown: breakdownForDisplay, currency: "MXN" };
}

/**
 * Vacaciones - Mexico LFT Art. 76
 * Returns vacation days and monetary value.
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);
  const completedYears = Math.floor(yearsWorked);

  const annualVacationDays = getVacationDaysPerYear(yearsWorked);
  const proportionalDays = getProportionalVacationDays(yearsWorked, totalDays);
  const proportionalAmount = proportionalDays * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Años trabajados completos`,
      days: completedYears,
      amount: 0,
    },
    {
      concept: `Días de vacaciones por año (Art. 76 LFT)`,
      days: annualVacationDays,
      amount: annualVacationDays * dailySalary,
    },
    {
      concept: `Vacaciones proporcionales del año en curso`,
      days: Math.round(proportionalDays * 100) / 100,
      amount: proportionalAmount,
    },
  ];

  const total = annualVacationDays * dailySalary + proportionalAmount;

  return { total, breakdown, currency: "MXN" };
}

/**
 * Prima Vacacional - Mexico LFT Art. 80
 * 25% of the vacation salary.
 */
export function calculatePrimaVacacional(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);

  const annualVacationDays = getVacationDaysPerYear(yearsWorked);
  const vacationSalary = annualVacationDays * dailySalary;
  const primaAmount = vacationSalary * 0.25;

  // Proportional for partial year
  const daysInCurrentYear = totalDays % 365;
  const proportionalVacationDays = (annualVacationDays / 365) * daysInCurrentYear;
  const proportionalVacationSalary = proportionalVacationDays * dailySalary;
  const proportionalPrima = proportionalVacationSalary * 0.25;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Días de vacaciones anuales`,
      days: annualVacationDays,
      amount: vacationSalary,
    },
    {
      concept: `Prima vacacional anual (25%)`,
      days: annualVacationDays,
      amount: primaAmount,
    },
    {
      concept: `Prima vacacional proporcional`,
      days: Math.round(proportionalVacationDays * 100) / 100,
      amount: proportionalPrima,
    },
  ];

  const total = primaAmount + proportionalPrima;

  return { total, breakdown, currency: "MXN" };
}

/**
 * Horas Extra - Mexico LFT Art. 67-68
 * Regular overtime: double pay. Over 9hrs/week: triple pay.
 */
export function calculateHorasExtra(
  monthlySalary: number,
  horasExtraSemanales: number,
  semanasWorked: number
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const hourlySalary = dailySalary / 8;

  const horasDobles = Math.min(horasExtraSemanales, 9);
  const horasTriples = Math.max(0, horasExtraSemanales - 9);

  const pagoDoble = hourlySalary * 2 * horasDobles * semanasWorked;
  const pagoTriple = hourlySalary * 3 * horasTriples * semanasWorked;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Horas dobles (hasta 9h/semana): ${horasDobles}h × ${semanasWorked} semanas`, days: horasDobles * semanasWorked, amount: pagoDoble },
    ...(horasTriples > 0 ? [{ concept: `Horas triples (más de 9h/semana): ${horasTriples}h × ${semanasWorked} semanas`, days: horasTriples * semanasWorked, amount: pagoTriple }] : []) as CalculationBreakdown[],
  ];

  return { total: pagoDoble + pagoTriple, breakdown, currency: "MXN" };
}

/**
 * PTU - Participación de los Trabajadores en las Utilidades
 * Mexico LFT Art. 117-131: 10% of company profits distributed to workers.
 */
export function calculatePTU(
  monthlySalary: number,
  startDate: Date,
  endDate: Date,
  totalPTUFondo: number
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const diasTrabajados = Math.min(totalDays, 365);
  const dailySalary = getDailyWage(monthlySalary);

  const porDias = (totalPTUFondo * 0.5) * (diasTrabajados / 365);
  const porSalario = (totalPTUFondo * 0.5) * (dailySalary * diasTrabajados) / (dailySalary * 365);

  const breakdown: CalculationBreakdown[] = [
    { concept: `50% del fondo por días trabajados (${diasTrabajados} días)`, days: diasTrabajados, amount: porDias },
    { concept: `50% del fondo por salario`, days: diasTrabajados, amount: porSalario },
  ];

  return { total: porDias + porSalario, breakdown, currency: "MXN" };
}

/**
 * IMSS Cuotas Obrero-Patronales - Mexico
 * Worker contributions to social security (approximate rates 2026)
 */
export function calculateIMSS(
  monthlySalary: number
): CalculationResult {
  const enfermedadMaternidad = monthlySalary * 0.004;
  const invalidezVida = monthlySalary * 0.00625;
  const ceseAnciandad = monthlySalary * 0.01125;
  const totalObrero = enfermedadMaternidad + invalidezVida + ceseAnciandad;

  const patronEnfMat = monthlySalary * 0.204;
  const patronInvalidez = monthlySalary * 0.01750;
  const patronRetiro = monthlySalary * 0.02;
  const patronCesantia = monthlySalary * 0.03150;
  const totalPatron = patronEnfMat + patronInvalidez + patronRetiro + patronCesantia;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Cuota obrera: Enfermedad y Maternidad (0.4%)", amount: enfermedadMaternidad },
    { concept: "Cuota obrera: Invalidez y Vida (0.625%)", amount: invalidezVida },
    { concept: "Cuota obrera: Retiro/Cesantía (1.125%)", amount: ceseAnciandad },
    { concept: "Total descuento de tu nómina", amount: totalObrero },
    { concept: "Cuota patronal total (referencia)", amount: totalPatron },
  ];

  return { total: totalObrero, breakdown, currency: "MXN" };
}

/**
 * Calculadora de IVA - Mexico
 * Tasa general 16% (LIVA Art. 1)
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
  return { total: incluido ? iva : total, breakdown, currency: "MXN" };
}

/**
 * Nómina Neta (Bruto a Neto) - Mexico
 * ISR 2026 + IMSS obrero estimado
 */
export function calculateNominaNeta(monthlySalary: number): CalculationResult {
  const anual = monthlySalary * 12;
  let isrAnual = 0;
  if (anual <= 8952.49) isrAnual = anual * 0.0192;
  else if (anual <= 21269.14) isrAnual = 171.88 + (anual - 8952.49) * 0.064;
  else if (anual <= 37480.85) isrAnual = 960.46 + (anual - 21269.14) * 0.1088;
  else if (anual <= 87135.48) isrAnual = 2723.02 + (anual - 37480.85) * 0.16;
  else if (anual <= 136703.21) isrAnual = 10594.06 + (anual - 87135.48) * 0.1792;
  else if (anual <= 174746.13) isrAnual = 19490.15 + (anual - 136703.21) * 0.2136;
  else if (anual <= 349496.13) isrAnual = 27631.30 + (anual - 174746.13) * 0.2352;
  else isrAnual = 68727.44 + (anual - 349496.13) * 0.30;
  const isrMensual = isrAnual / 12;

  const imss = monthlySalary * 0.02026;
  const totalDescuentos = isrMensual + imss;
  const neto = monthlySalary - totalDescuentos;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: `ISR mensual estimado (${((isrMensual / monthlySalary) * 100).toFixed(1)}%)`, amount: isrMensual },
    { concept: "Cuotas IMSS obrero (~2%)", amount: imss },
    { concept: "Total descuentos", amount: totalDescuentos },
    { concept: "Salario neto (en mano)", amount: neto },
  ];
  return { total: neto, breakdown, currency: "MXN" };
}
