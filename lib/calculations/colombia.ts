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

function getDailyWage(monthlySalary: number): number {
  // Colombia uses 360-day year for labor calculations
  return (monthlySalary * 12) / 360;
}

function getSemesterDays(startDate: Date, endDate: Date): number {
  // Count days worked within current semester periods
  const totalDays = getDaysBetween(startDate, endDate);
  // Proportional days for prima calculation (max 180 days per semester)
  return Math.min(totalDays % 180, 180);
}

/**
 * Cesantías - Colombia Labor Code Art. 249
 * Formula: (monthly_salary × days_worked) / 360
 */
export function calculateCesantias(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const cesantiasAmount = (monthlySalary * totalDays) / 360;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Días trabajados",
      days: totalDays,
      amount: 0,
    },
    {
      concept: "Cesantías (salario × días / 360)",
      days: totalDays,
      amount: cesantiasAmount,
    },
  ];

  return { total: cesantiasAmount, breakdown, currency: "COP" };
}

/**
 * Intereses sobre Cesantías - Colombia Labor Code Art. 99
 * 12% annual over the cesantías balance.
 */
export function calculateInteresesCesantias(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const cesantiasAmount = (monthlySalary * totalDays) / 360;

  // 12% annual = 1% per month
  // Interest = cesantías × days × 0.12 / 360
  const interesesAmount = (cesantiasAmount * totalDays * 0.12) / 360;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Cesantías base",
      days: totalDays,
      amount: cesantiasAmount,
    },
    {
      concept: "Intereses sobre cesantías (12% anual)",
      days: totalDays,
      amount: interesesAmount,
    },
  ];

  return { total: interesesAmount, breakdown, currency: "COP" };
}

/**
 * Prima de Servicios - Colombia Labor Code Art. 306
 * 15 days of salary per semester worked (2 times per year = 30 days total).
 */
export function calculatePrimaServicios(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const dailySalary = getDailyWage(monthlySalary);

  // Prima = (salary × days_worked) / 360
  // Equivalent to 15 days per 180-day semester
  const primaAmount = (monthlySalary * totalDays) / 360;

  const completedSemesters = Math.floor(totalDays / 180);
  const remainingDays = totalDays % 180;
  const proportionalPrima = (monthlySalary * remainingDays) / 360;
  const fullSemesterPrima = completedSemesters * (monthlySalary / 2);

  void getSemesterDays(startDate, endDate);
  void dailySalary;
  void primaAmount;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Semestres completos (${completedSemesters})`,
      days: completedSemesters * 180,
      amount: fullSemesterPrima,
    },
    {
      concept: `Prima proporcional (${remainingDays} días restantes)`,
      days: remainingDays,
      amount: proportionalPrima,
    },
  ];

  const total = fullSemesterPrima + proportionalPrima;

  return { total, breakdown, currency: "COP" };
}

/**
 * Vacaciones - Colombia Labor Code Art. 186
 * 15 working days per year of service.
 */
export function calculateVacaciones(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);
  const dailySalary = getDailyWage(monthlySalary);

  // 15 days per year = (salary × days) / 720
  // (720 = 360 × 2 because 15 days vacation per 360-day work year)
  const vacacionesAmount = (monthlySalary * totalDays) / 720;
  const vacacionesDays = (15 / 360) * totalDays;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Días trabajados",
      days: totalDays,
      amount: 0,
    },
    {
      concept: "Días de vacaciones proporcionales (15 días/año)",
      days: Math.round(vacacionesDays * 100) / 100,
      amount: vacacionesDays * dailySalary * 30,
    },
    {
      concept: "Valor monetario de vacaciones",
      days: Math.round(vacacionesDays * 100) / 100,
      amount: vacacionesAmount,
    },
  ];

  return { total: vacacionesAmount, breakdown, currency: "COP" };
}

/**
 * Liquidación completa - Colombia Labor Code
 * Includes: cesantías + intereses cesantías + prima servicios + vacaciones proporcionales
 */
export function calculateLiquidacion(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const totalDays = getDaysBetween(startDate, endDate);

  // Cesantías: (salary × days) / 360
  const cesantiasAmount = (monthlySalary * totalDays) / 360;

  // Intereses cesantías: cesantías × days × 12% / 360
  const interesesAmount = (cesantiasAmount * totalDays * 0.12) / 360;

  // Prima de servicios: (salary × days) / 360
  const primaAmount = (monthlySalary * totalDays) / 360;

  // Vacaciones proporcionales: (salary × days) / 720
  const vacacionesAmount = (monthlySalary * totalDays) / 720;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Cesantías",
      days: totalDays,
      amount: cesantiasAmount,
    },
    {
      concept: "Intereses sobre cesantías (12% anual)",
      days: totalDays,
      amount: interesesAmount,
    },
    {
      concept: "Prima de servicios",
      days: totalDays,
      amount: primaAmount,
    },
    {
      concept: "Vacaciones proporcionales",
      days: totalDays,
      amount: vacacionesAmount,
    },
  ];

  const total = breakdown.reduce((sum, item) => sum + item.amount, 0);

  return { total, breakdown, currency: "COP" };
}

/**
 * Horas Extra - Colombia CST Art. 168
 * Diurno recargo: +25%, Nocturno: +75%, Dominical/festivo diurno: +75%, nocturno: +110%
 */
export function calculateHorasExtra(
  monthlySalary: number,
  horasDiurnas: number,
  horasNocturnas: number,
  horasDominicalDiurno: number,
  horasDominicalNocturno: number
): CalculationResult {
  const hourlyRate = monthlySalary / 240;

  const extraDiurna = hourlyRate * 1.25 * horasDiurnas;
  const extraNocturna = hourlyRate * 1.75 * horasNocturnas;
  const dominicalDiurno = hourlyRate * 1.75 * horasDominicalDiurno;
  const dominicalNocturno = hourlyRate * 2.10 * horasDominicalNocturno;

  const breakdown: CalculationBreakdown[] = [
    ...(horasDiurnas > 0 ? [{ concept: `Horas extra diurnas (recargo 25%): ${horasDiurnas}h`, days: horasDiurnas, amount: extraDiurna }] : []) as CalculationBreakdown[],
    ...(horasNocturnas > 0 ? [{ concept: `Horas extra nocturnas (recargo 75%): ${horasNocturnas}h`, days: horasNocturnas, amount: extraNocturna }] : []) as CalculationBreakdown[],
    ...(horasDominicalDiurno > 0 ? [{ concept: `Dominical/festivo diurno (recargo 75%): ${horasDominicalDiurno}h`, days: horasDominicalDiurno, amount: dominicalDiurno }] : []) as CalculationBreakdown[],
    ...(horasDominicalNocturno > 0 ? [{ concept: `Dominical/festivo nocturno (recargo 110%): ${horasDominicalNocturno}h`, days: horasDominicalNocturno, amount: dominicalNocturno }] : []) as CalculationBreakdown[],
  ];

  const totalResult = extraDiurna + extraNocturna + dominicalDiurno + dominicalNocturno;
  return { total: totalResult, breakdown, currency: "COP" };
}

/**
 * Auxilio de Transporte - Colombia
 * 2026 value: $200,000 COP/month (mandatory for salaries <= 2 SMMLV)
 * SMMLV 2026: $1,423,500 COP
 */
export function calculateAuxilioTransporte(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const SMMLV_2026 = 1423500;
  const AUXILIO_2026 = 200000;
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
  const months = totalDays / 30;

  const eligible = monthlySalary <= SMMLV_2026 * 2;
  const auxilioMensual = eligible ? AUXILIO_2026 : 0;
  const auxilioTotal = auxilioMensual * months;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Salario mensual vs tope (2 SMMLV = ${(SMMLV_2026 * 2).toLocaleString("es-CO")} COP)`, amount: 0 },
    { concept: eligible ? "Aplica auxilio de transporte" : "Salario supera el tope, no aplica", amount: 0 },
    { concept: `Auxilio mensual 2026: ${AUXILIO_2026.toLocaleString("es-CO")} COP x ${months.toFixed(1)} meses`, days: Math.round(totalDays), amount: auxilioTotal },
  ];

  return { total: auxilioTotal, breakdown, currency: "COP" };
}

/**
 * Seguridad Social - Colombia
 * Salud: 12.5% (8.5% empleador + 4% trabajador)
 * Pension: 16% (12% empleador + 4% trabajador)
 */
export function calculateSeguridadSocial(
  monthlySalary: number
): CalculationResult {
  const saludTrabajador = monthlySalary * 0.04;
  const saludEmpleador = monthlySalary * 0.085;
  const pensionTrabajador = monthlySalary * 0.04;
  const pensionEmpleador = monthlySalary * 0.12;
  const totalDescuento = saludTrabajador + pensionTrabajador;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salud trabajador (4%)", amount: saludTrabajador },
    { concept: "Pension trabajador (4%)", amount: pensionTrabajador },
    { concept: "Descuento total de tu nomina", amount: totalDescuento },
    { concept: "Salud empleador (8.5%) - referencia", amount: saludEmpleador },
    { concept: "Pension empleador (12%) - referencia", amount: pensionEmpleador },
  ];

  return { total: totalDescuento, breakdown, currency: "COP" };
}

/**
 * Calculadora de IVA - Colombia
 * Tasa general 19% (Estatuto Tributario Art. 468)
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
  return { total: incluido ? iva : total, breakdown, currency: "COP" };
}

/**
 * Nomina Neta (Bruto a Neto) - Colombia
 * Salud 4% + Pension 4% + Retencion en la fuente (si aplica)
 */
export function calculateNominaNeta(monthlySalary: number): CalculationResult {
  const SMMLV = 1423500;
  const salud = monthlySalary * 0.04;
  const pension = monthlySalary * 0.04;
  const UVT_2026 = 47065;
  const baseRetencion = monthlySalary - salud - pension;
  let retencion = 0;
  if (baseRetencion > 95 * UVT_2026) {
    retencion = (baseRetencion - 95 * UVT_2026) * 0.19;
  }
  const auxTransporte = monthlySalary <= SMMLV * 2 ? 200000 : 0;
  const neto = monthlySalary + auxTransporte - salud - pension - retencion;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    ...(auxTransporte > 0 ? [{ concept: "Auxilio de transporte 2026", amount: auxTransporte }] : []) as CalculationBreakdown[],
    { concept: "Aporte salud trabajador (4%)", amount: salud },
    { concept: "Aporte pension trabajador (4%)", amount: pension },
    ...(retencion > 0 ? [{ concept: "Retencion en la fuente", amount: retencion }] : []) as CalculationBreakdown[],
    { concept: "Salario neto (en mano)", amount: neto },
  ];
  return { total: neto, breakdown, currency: "COP" };
}
