import type { CalculationResult, CalculationBreakdown } from "./mexico";

function getDaysBetween(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
}

function getYearsBetween(startDate: Date, endDate: Date): number {
  return getDaysBetween(startDate, endDate) / 365;
}

function getDailyWage(monthlySalary: number): number {
  return (monthlySalary * 12) / 365;
}

/**
 * Finiquito - Spain Estatuto de los Trabajadores Art. 38, 31
 * Includes: unpaid salary, proportional extra pays, unused vacation days.
 */
export function calculateFiniquito(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);

  // Salary for days worked in current month
  const daysInCurrentMonth = endDate.getDate();
  const salarioPendiente = (monthlySalary / 30) * daysInCurrentMonth;

  // Proportional extra pays (2 per year = 30 days each, Art. 31 ET)
  // Calculate days worked in current semester for each extra pay
  const daysInCurrentYear = totalDays % 365;
  const pagasExtraProporcionales = (60 / 365) * daysInCurrentYear * dailySalary;

  // Unused vacation days (30 natural days/year minimum, Art. 38 ET)
  const vacacionesAnuales = 30;
  const vacacionesProporcionales = (vacacionesAnuales / 365) * daysInCurrentYear;
  const vacacionesAmount = vacacionesProporcionales * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Salario pendiente (${daysInCurrentMonth} días del mes en curso)`,
      days: daysInCurrentMonth,
      amount: salarioPendiente,
    },
    {
      concept: "Pagas extraordinarias proporcionales (2 pagas × 30 días)",
      days: Math.round((60 / 365) * daysInCurrentYear * 100) / 100,
      amount: pagasExtraProporcionales,
    },
    {
      concept: `Vacaciones no disfrutadas proporcionales (base 30 días/año)`,
      days: Math.round(vacacionesProporcionales * 100) / 100,
      amount: vacacionesAmount,
    },
  ];

  const total = breakdown.reduce((sum, item) => sum + item.amount, 0);
  return { total, breakdown, currency: "EUR" };
}

/**
 * Indemnización por despido improcedente - Spain ET Art. 56
 * 33 days per year worked (post-reform 2012), max 24 monthly salaries.
 * For contracts before Feb 12 2012: 45 days/year for that period.
 */
export function calculateDespidoImprocedente(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const yearsWorked = getYearsBetween(startDate, endDate);

  const reformDate = new Date("2012-02-12");

  let indemnizacion = 0;
  const breakdown: CalculationBreakdown[] = [];

  if (startDate < reformDate) {
    // Period before reform: 45 days/year (capped at 42 monthly salaries)
    const daysPreReform = getDaysBetween(startDate, reformDate);
    const yearsPreReform = daysPreReform / 365;
    const indemnizacionPreReform = Math.min(
      dailySalary * 45 * yearsPreReform,
      monthlySalary * 42
    );

    // Period after reform: 33 days/year
    const daysPostReform = getDaysBetween(reformDate, endDate);
    const yearsPostReform = daysPostReform / 365;
    const indemnizacionPostReform = dailySalary * 33 * yearsPostReform;

    indemnizacion = indemnizacionPreReform + indemnizacionPostReform;

    breakdown.push(
      {
        concept: `Período anterior a reforma (45 días/año × ${yearsPreReform.toFixed(2)} años)`,
        days: Math.round(45 * yearsPreReform),
        amount: indemnizacionPreReform,
      },
      {
        concept: `Período posterior a reforma (33 días/año × ${yearsPostReform.toFixed(2)} años)`,
        days: Math.round(33 * yearsPostReform),
        amount: indemnizacionPostReform,
      }
    );
  } else {
    // All post-reform: 33 days/year
    indemnizacion = dailySalary * 33 * yearsWorked;
    breakdown.push({
      concept: `Indemnización (33 días/año × ${yearsWorked.toFixed(2)} años)`,
      days: Math.round(33 * yearsWorked),
      amount: indemnizacion,
    });
  }

  // Cap at 24 monthly salaries (Art. 56 ET)
  const tope = monthlySalary * 24;
  const indemnizacionFinal = Math.min(indemnizacion, tope);

  if (indemnizacion > tope) {
    breakdown.push({
      concept: "Tope máximo aplicado (24 mensualidades)",
      amount: -( indemnizacion - tope),
    });
  }

  void totalDays;

  const total = indemnizacionFinal;
  return { total, breakdown, currency: "EUR" };
}

/**
 * Indemnización por despido objetivo - Spain ET Art. 53
 * 20 days per year worked, max 12 monthly salaries.
 * Causes: economic, technical, organizational reasons.
 */
export function calculateDespidoObjetivo(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const yearsWorked = getYearsBetween(startDate, endDate);

  const indemnizacion = dailySalary * 20 * yearsWorked;

  // Cap at 12 monthly salaries (Art. 53 ET)
  const tope = monthlySalary * 12;
  const indemnizacionFinal = Math.min(indemnizacion, tope);

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Indemnización (20 días/año × ${yearsWorked.toFixed(2)} años)`,
      days: Math.round(20 * yearsWorked),
      amount: indemnizacion,
    },
  ];

  if (indemnizacion > tope) {
    breakdown.push({
      concept: "Tope máximo aplicado (12 mensualidades)",
      amount: -(indemnizacion - tope),
    });
  }

  return { total: indemnizacionFinal, breakdown, currency: "EUR" };
}

/**
 * Pagas extraordinarias - Spain ET Art. 31
 * 2 extra pays per year (minimum), 30 days each. Proportional if partial year.
 */
export function calculatePagasExtra(
  monthlySalary: number,
  startDate: Date,
  endDate: Date
): CalculationResult {
  const dailySalary = getDailyWage(monthlySalary);
  const totalDays = getDaysBetween(startDate, endDate);
  const daysInCurrentYear = totalDays % 365;

  // Each extra pay = 30 days salary
  const pagaCompleta = dailySalary * 30;

  // Proportional for current period
  const pagaJunioProporcional = (daysInCurrentYear / 365) * pagaCompleta;
  const pagaDiciembreProporcional = (daysInCurrentYear / 365) * pagaCompleta;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: "Paga extra de junio proporcional (30 días base)",
      days: Math.round((30 / 365) * daysInCurrentYear * 100) / 100,
      amount: pagaJunioProporcional,
    },
    {
      concept: "Paga extra de diciembre proporcional (30 días base)",
      days: Math.round((30 / 365) * daysInCurrentYear * 100) / 100,
      amount: pagaDiciembreProporcional,
    },
  ];

  const total = pagaJunioProporcional + pagaDiciembreProporcional;
  return { total, breakdown, currency: "EUR" };
}

/**
 * Vacaciones - Spain ET Art. 38
 * Minimum 30 natural days per year. Monetary value if not taken.
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

  // 30 natural days per full year
  const vacacionesAnuales = 30;
  const daysInCurrentYear = totalDays % 365;
  const vacacionesProporcionales = (vacacionesAnuales / 365) * daysInCurrentYear;

  const vacacionesAnualesAmount = vacacionesAnuales * dailySalary;
  const vacacionesProporcionalesAmount = vacacionesProporcionales * dailySalary;

  const breakdown: CalculationBreakdown[] = [
    {
      concept: `Años trabajados completos`,
      days: completedYears,
      amount: 0,
    },
    {
      concept: `Vacaciones anuales (30 días naturales mínimo, Art. 38 ET)`,
      days: vacacionesAnuales,
      amount: vacacionesAnualesAmount,
    },
    {
      concept: `Vacaciones proporcionales del año en curso`,
      days: Math.round(vacacionesProporcionales * 100) / 100,
      amount: vacacionesProporcionalesAmount,
    },
  ];

  const total = vacacionesAnualesAmount + vacacionesProporcionalesAmount;
  return { total, breakdown, currency: "EUR" };
}

/**
 * Prestacion por Desempleo (Paro) - Spain LGSS
 * Based on 70% of regulatory base for first 6 months, 50% after.
 * Requires minimum 360 days contributed in last 6 years.
 * Duration: 1 day of benefit per 3 days contributed (max 2 years).
 */
export function calculateParo(
  monthlySalary: number,
  diasCotizados: number
): CalculationResult {
  if (diasCotizados < 360) {
    return {
      total: 0,
      breakdown: [{ concept: "No tienes derecho: minimo 360 dias cotizados en los ultimos 6 anos", amount: 0 }],
      currency: "EUR",
    };
  }

  const diasPrestacion = Math.min(Math.floor(diasCotizados / 3), 720);
  const mesesPrestacion = Math.round(diasPrestacion / 30);
  const baseReguladora = getDailyWage(monthlySalary);

  const meses6 = Math.min(6, mesesPrestacion);
  const mesesResto = Math.max(0, mesesPrestacion - 6);

  const prestacion6meses = baseReguladora * 30 * 0.70 * meses6;
  const prestacionResto = baseReguladora * 30 * 0.50 * mesesResto;

  const topeDiario = 1225 / 30;
  const suelo = 560 / 30;
  const prestacionDiaria6 = Math.min(Math.max(baseReguladora * 0.70, suelo), topeDiario);
  const prestacionDiariaResto = Math.min(Math.max(baseReguladora * 0.50, suelo), topeDiario);

  const totalReal = (prestacionDiaria6 * 30 * meses6) + (prestacionDiariaResto * 30 * mesesResto);

  void prestacion6meses;
  void prestacionResto;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Dias cotizados: ${diasCotizados} - Duracion prestacion: ${mesesPrestacion} meses`, amount: 0 },
    { concept: `Primeros 6 meses (70% base reguladora): ${meses6} meses`, days: meses6 * 30, amount: prestacionDiaria6 * 30 * meses6 },
    ...(mesesResto > 0 ? [{ concept: `Resto del periodo (50% base reguladora): ${mesesResto} meses`, days: mesesResto * 30, amount: prestacionDiariaResto * 30 * mesesResto }] : []) as CalculationBreakdown[],
    { concept: "Total estimado con topes aplicados", amount: totalReal },
  ];

  return { total: totalReal, breakdown, currency: "EUR" };
}

/**
 * IRPF sobre nomina - Spain
 * Simplified estimation of IRPF withholding based on 2026 tax brackets.
 */
export function calculateIRPF(
  monthlySalary: number
): CalculationResult {
  const salarioAnual = monthlySalary * 14;

  let irpfAnual = 0;
  if (salarioAnual <= 12450) {
    irpfAnual = salarioAnual * 0.19;
  } else if (salarioAnual <= 20200) {
    irpfAnual = 12450 * 0.19 + (salarioAnual - 12450) * 0.24;
  } else if (salarioAnual <= 35200) {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + (salarioAnual - 20200) * 0.30;
  } else if (salarioAnual <= 60000) {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.30 + (salarioAnual - 35200) * 0.37;
  } else if (salarioAnual <= 300000) {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.30 + 24800 * 0.37 + (salarioAnual - 60000) * 0.45;
  } else {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.30 + 24800 * 0.37 + 240000 * 0.45 + (salarioAnual - 300000) * 0.47;
  }

  const irpfMensual = irpfAnual / 12;
  const ssObrero = monthlySalary * 0.0647;
  const salarioNetoFinal = monthlySalary - irpfMensual - ssObrero;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: `Retencion IRPF mensual estimada (${((irpfMensual / monthlySalary) * 100).toFixed(1)}%)`, amount: irpfMensual },
    { concept: "Cotizacion Seguridad Social trabajador (6.47%)", amount: ssObrero },
    { concept: "Salario neto estimado (en mano)", amount: salarioNetoFinal },
  ];

  return { total: salarioNetoFinal, breakdown, currency: "EUR" };
}

/**
 * Horas Extraordinarias - Spain ET Art. 35
 * Regular overtime: same hourly rate minimum (usually +75% by agreement)
 * Max 80 extra hours/year.
 */
export function calculateHorasExtraES(
  monthlySalary: number,
  horasExtra: number,
  tipoRecargo: "legal" | "convenio"
): CalculationResult {
  const horasMes = monthlySalary / (8 * 22);
  const recargo = tipoRecargo === "convenio" ? 1.75 : 1.0;
  const pagoHora = horasMes * recargo;
  const total = pagoHora * horasExtra;

  const breakdown: CalculationBreakdown[] = [
    { concept: `Valor hora ordinaria: ${horasMes.toFixed(2)} EUR`, amount: 0 },
    { concept: `Recargo aplicado: ${tipoRecargo === "convenio" ? "75% (convenio colectivo)" : "0% (minimo legal)"}`, amount: 0 },
    { concept: `${horasExtra} horas extra x ${pagoHora.toFixed(2)} EUR/hora`, days: horasExtra, amount: total },
    { concept: "Nota: maximo legal 80 horas extraordinarias/ano", amount: 0 },
  ];

  return { total, breakdown, currency: "EUR" };
}

/**
 * Calculadora de IVA - Spain
 * Tipos: general 21%, reducido 10%, superreducido 4%
 */
export function calculateIVA(
  precio: number,
  incluido: boolean,
  tipo: "general" | "reducido" | "superreducido" = "general"
): CalculationResult {
  const tasas = { general: 0.21, reducido: 0.10, superreducido: 0.04 };
  const tasa = tasas[tipo];
  const base = incluido ? precio / (1 + tasa) : precio;
  const iva = base * tasa;
  const total = base + iva;
  const nombres = {
    general: "IVA general (21%)",
    reducido: "IVA reducido (10%)",
    superreducido: "IVA superreducido (4%)",
  };
  const breakdown: CalculationBreakdown[] = [
    { concept: "Base imponible (sin IVA)", amount: base },
    { concept: nombres[tipo], amount: iva },
    { concept: "Total con IVA", amount: total },
  ];
  return { total: incluido ? iva : total, breakdown, currency: "EUR" };
}

/**
 * Seguridad Social Trabajador - Spain ET Art. 103
 * Contingencias comunes: 4.7%
 * Desempleo: 1.55%
 * Formacion profesional: 0.1%
 * FOGASA: 0.12%
 * Total: 6.47%
 */
export function calculateSeguridadSocial(monthlySalary: number): CalculationResult {
  const contingencias = monthlySalary * 0.047;
  const desempleo = monthlySalary * 0.0155;
  const formacion = monthlySalary * 0.001;
  const fogasa = monthlySalary * 0.0012;
  const total = contingencias + desempleo + formacion + fogasa;
  const baseAnteIRPF = monthlySalary - total;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: "Contingencias comunes (4.7%)", amount: contingencias },
    { concept: "Desempleo (1.55%)", amount: desempleo },
    { concept: "Formacion profesional (0.1%)", amount: formacion },
    { concept: "FOGASA (0.12%)", amount: fogasa },
    { concept: "Total cuota SS trabajador (6.47%)", amount: total },
    { concept: "Base liquida antes de IRPF", amount: baseAnteIRPF },
  ];

  return { total, breakdown, currency: "EUR" };
}

/**
 * Nomina Neta - Spain
 * SS trabajador 6.47% + IRPF estimado segun tramos 2026
 */
export function calculateNominaNetaES(monthlySalary: number): CalculationResult {
  const salarioAnual = monthlySalary * 14;

  let irpfAnual = 0;
  if (salarioAnual <= 12450) {
    irpfAnual = salarioAnual * 0.19;
  } else if (salarioAnual <= 20200) {
    irpfAnual = 12450 * 0.19 + (salarioAnual - 12450) * 0.24;
  } else if (salarioAnual <= 35200) {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + (salarioAnual - 20200) * 0.30;
  } else if (salarioAnual <= 60000) {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.30 + (salarioAnual - 35200) * 0.37;
  } else if (salarioAnual <= 300000) {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.30 + 24800 * 0.37 + (salarioAnual - 60000) * 0.45;
  } else {
    irpfAnual = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.30 + 24800 * 0.37 + 240000 * 0.45 + (salarioAnual - 300000) * 0.47;
  }

  const irpfMensual = irpfAnual / 12;
  const ssObrero = monthlySalary * 0.0647;
  const salarioNeto = monthlySalary - irpfMensual - ssObrero;

  const breakdown: CalculationBreakdown[] = [
    { concept: "Salario bruto mensual", amount: monthlySalary },
    { concept: `Retencion IRPF mensual estimada (${((irpfMensual / monthlySalary) * 100).toFixed(1)}%)`, amount: irpfMensual },
    { concept: "Cotizacion SS trabajador (6.47%)", amount: ssObrero },
    { concept: "Salario neto estimado (en mano)", amount: salarioNeto },
  ];

  return { total: salarioNeto, breakdown, currency: "EUR" };
}
