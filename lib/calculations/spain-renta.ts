// Cálculo de la Declaración de la Renta — Ejercicio 2025 (Campaña 2026)
// Basado en la LIRPF (Ley 35/2006) con las modificaciones vigentes para 2025.

// ---------------------------------------------------------------------------
// Tipos públicos
// ---------------------------------------------------------------------------

export interface TaxBracket {
  from: number;
  to: number;
  rate: number;
}

export interface RentaInput {
  // Rendimientos del trabajo (Art. 17 LIRPF)
  salarioBruto: number;
  irpfRetenido: number;

  // Rendimientos del capital inmobiliario (Art. 22 LIRPF)
  ingresosAlquiler: number;
  gastosAlquiler: number;

  // Rendimientos del capital mobiliario + ganancias (escala ahorro, Art. 46 LIRPF)
  dividendos: number;
  intereses: number;
  gananciasPatrimoniales: number;

  // Situación personal y familiar (Art. 57-61 LIRPF)
  situacionFamiliar: "soltero" | "casado_con" | "casado_sin";
  numHijos: number; // hijos < 25 años a cargo

  // Reducciones y deducciones
  aportacionPlanPensiones: number;
  hipotecaPrevia2013: boolean;     // derecho transitorio Art. 18ª LIRPF
  cuotaHipotecaAnual: number;      // capital + intereses pagados en 2025
  donaciones: number;              // donaciones a entidades sin ánimo de lucro
}

export interface RentaDesglose {
  // Rendimientos
  cotizacionSS: number;
  reduccionPlanPensiones: number;
  rendimientoNetoTrabajo: number;
  reduccionTrabajo: number;
  rendimientoNetoCapInmob: number;
  baseImponibleGeneral: number;
  baseImponibleAhorro: number;

  // Mínimos personales y familiares
  minimoPersonalFamiliar: number;

  // Cuotas
  cuotaIntegralGeneral: number;
  cuotaIntegralAhorro: number;
  deduccionHipoteca: number;
  deduccionDonaciones: number;
  cuotaLiquidaTotal: number;

  // Resultado
  irpfRetenido: number;
  resultado: number; // positivo = a pagar, negativo = a devolver
}

export interface RentaResult {
  desglose: RentaDesglose;
  aDevolver: boolean;
  importe: number;
  currency: "EUR";
}

// ---------------------------------------------------------------------------
// Constantes fiscales 2025
// ---------------------------------------------------------------------------

// Escala general combinada (estado + autonómica media aproximada, Art. 63 LIRPF)
export const ESCALA_GENERAL: readonly TaxBracket[] = [
  { from: 0,       to: 12450,   rate: 0.19 },
  { from: 12450,   to: 20200,   rate: 0.24 },
  { from: 20200,   to: 35200,   rate: 0.30 },
  { from: 35200,   to: 60000,   rate: 0.37 },
  { from: 60000,   to: 300000,  rate: 0.45 },
  { from: 300000,  to: Infinity, rate: 0.47 },
] as const;

// Escala del ahorro (Art. 66 LIRPF)
export const ESCALA_AHORRO: readonly TaxBracket[] = [
  { from: 0,       to: 6000,    rate: 0.19 },
  { from: 6000,    to: 50000,   rate: 0.21 },
  { from: 50000,   to: 200000,  rate: 0.23 },
  { from: 200000,  to: 300000,  rate: 0.27 },
  { from: 300000,  to: Infinity, rate: 0.28 },
] as const;

// Seguridad Social — tipo trabajador 2025
const SS_RATE = 0.0647;

// Mínimos personales y familiares (Art. 57-58 LIRPF)
const MINIMO_PERSONAL = 5550;
const MINIMO_CONYUGE_SIN_INGRESOS = 3400;
const MINIMOS_DESCENDIENTES = [2400, 2700, 4000, 4500] as const;

// Reducción por rendimientos del trabajo (Art. 20 LIRPF, redacción Ley 28/2022)
const REDUCCION_TRABAJO_MAXIMA = 7302;
const UMBRAL_REDUCCION_PLENA = 14047.5; // renta neta ≤ → reducción máxima
const UMBRAL_REDUCCION_CERO = 19747.5;  // renta neta ≥ → sin reducción

// Aportaciones a planes de pensiones (Art. 51.1 LIRPF, Ley 12/2022)
const MAX_PLAN_PENSIONES = 1500; // límite individual general 2025

// Reducción por alquiler de vivienda habitual arrendada (Art. 23.2 LIRPF)
const REDUCCION_ALQUILER = 0.60;

// Deducción por inversión en vivienda habitual (Disp. transitoria 18ª LIRPF)
const BASE_MAXIMA_HIPOTECA = 9040;
const TASA_DEDUCCION_HIPOTECA = 0.15;

// Deducción por donativos (Art. 68.3 LIRPF, Ley 49/2002)
const UMBRAL_DONACIONES = 150;
const TASA_DONACIONES_PRIMEROS = 0.80;
const TASA_DONACIONES_RESTO = 0.40;

// ---------------------------------------------------------------------------
// Funciones auxiliares
// ---------------------------------------------------------------------------

/**
 * Aplica una escala progresiva de tramos sobre una base dada.
 * Función pura, sin efectos secundarios.
 */
export function applyProgressiveTax(
  base: number,
  brackets: readonly TaxBracket[]
): number {
  if (base <= 0) return 0;
  let tax = 0;
  for (const bracket of brackets) {
    if (base <= bracket.from) break;
    const taxable = Math.min(base, bracket.to) - bracket.from;
    tax += taxable * bracket.rate;
  }
  return tax;
}

/**
 * Calcula la reducción por rendimientos del trabajo según el rendimiento neto.
 * Art. 20 LIRPF — reducción lineal entre los dos umbrales.
 */
function calcularReduccionTrabajo(rendimientoNeto: number): number {
  if (rendimientoNeto <= UMBRAL_REDUCCION_PLENA) return REDUCCION_TRABAJO_MAXIMA;
  if (rendimientoNeto >= UMBRAL_REDUCCION_CERO) return 0;
  return REDUCCION_TRABAJO_MAXIMA - 1.5 * (rendimientoNeto - UMBRAL_REDUCCION_PLENA);
}

/**
 * Calcula el mínimo personal y familiar aplicable.
 * Art. 57-60 LIRPF.
 */
function calcularMinimoPersonalFamiliar(
  situacionFamiliar: RentaInput["situacionFamiliar"],
  numHijos: number
): number {
  const minimoConjuge =
    situacionFamiliar === "casado_sin" ? MINIMO_CONYUGE_SIN_INGRESOS : 0;
  const minimoDescendientes = Array.from({ length: numHijos }, (_, i) =>
    MINIMOS_DESCENDIENTES[Math.min(i, MINIMOS_DESCENDIENTES.length - 1)]
  ).reduce((sum, v) => sum + v, 0);
  return MINIMO_PERSONAL + minimoConjuge + minimoDescendientes;
}

// ---------------------------------------------------------------------------
// Función principal de cálculo
// ---------------------------------------------------------------------------

/**
 * Calcula el resultado de la declaración de la renta 2025 (ejercicio 2025).
 * Retorna un objeto inmutable con el desglose completo y el resultado final.
 */
export function calculateDeclaracionRenta(input: RentaInput): RentaResult {
  // --- 1. Rendimientos del trabajo ---
  const cotizacionSS = input.salarioBruto * SS_RATE;
  const reduccionPlanPensiones = Math.min(
    input.aportacionPlanPensiones,
    MAX_PLAN_PENSIONES
  );
  const rendimientoNetoSinReduccion =
    input.salarioBruto - cotizacionSS - reduccionPlanPensiones;
  const reduccionTrabajo = calcularReduccionTrabajo(
    Math.max(0, rendimientoNetoSinReduccion)
  );
  const rendimientoNetoTrabajo = Math.max(
    0,
    rendimientoNetoSinReduccion - reduccionTrabajo
  );

  // --- 2. Rendimientos del capital inmobiliario ---
  const rendimientoInmob = input.ingresosAlquiler - input.gastosAlquiler;
  const reduccionAlquiler =
    rendimientoInmob > 0 ? rendimientoInmob * REDUCCION_ALQUILER : 0;
  const rendimientoNetoCapInmob = rendimientoInmob - reduccionAlquiler;

  // --- 3. Bases imponibles ---
  const baseImponibleGeneral = rendimientoNetoTrabajo + rendimientoNetoCapInmob;
  const baseImponibleAhorro =
    input.dividendos + input.intereses + input.gananciasPatrimoniales;

  // --- 4. Mínimo personal y familiar ---
  const minimoPersonalFamiliar = calcularMinimoPersonalFamiliar(
    input.situacionFamiliar,
    input.numHijos
  );

  // --- 5. Cuota íntegra general ---
  // La base de cálculo es la base imponible general menos el mínimo
  const baseParaCuotaGeneral = Math.max(0, baseImponibleGeneral - minimoPersonalFamiliar);
  const cuotaIntegralGeneral = applyProgressiveTax(
    baseParaCuotaGeneral,
    ESCALA_GENERAL
  );

  // --- 6. Cuota íntegra del ahorro ---
  const cuotaIntegralAhorro = applyProgressiveTax(
    Math.max(0, baseImponibleAhorro),
    ESCALA_AHORRO
  );

  // --- 7. Deducciones de la cuota ---
  const deduccionHipoteca = input.hipotecaPrevia2013
    ? Math.min(input.cuotaHipotecaAnual, BASE_MAXIMA_HIPOTECA) *
      TASA_DEDUCCION_HIPOTECA
    : 0;

  const donaciones = input.donaciones;
  const deduccionDonaciones =
    donaciones <= 0
      ? 0
      : Math.min(donaciones, UMBRAL_DONACIONES) * TASA_DONACIONES_PRIMEROS +
        Math.max(0, donaciones - UMBRAL_DONACIONES) * TASA_DONACIONES_RESTO;

  const cuotaLiquidaTotal = Math.max(
    0,
    cuotaIntegralGeneral +
      cuotaIntegralAhorro -
      deduccionHipoteca -
      deduccionDonaciones
  );

  // --- 8. Resultado final ---
  const resultado = cuotaLiquidaTotal - input.irpfRetenido;

  const desglose: RentaDesglose = {
    cotizacionSS,
    reduccionPlanPensiones,
    rendimientoNetoTrabajo,
    reduccionTrabajo,
    rendimientoNetoCapInmob,
    baseImponibleGeneral,
    baseImponibleAhorro,
    minimoPersonalFamiliar,
    cuotaIntegralGeneral,
    cuotaIntegralAhorro,
    deduccionHipoteca,
    deduccionDonaciones,
    cuotaLiquidaTotal,
    irpfRetenido: input.irpfRetenido,
    resultado,
  };

  return {
    desglose,
    aDevolver: resultado < 0,
    importe: Math.abs(resultado),
    currency: "EUR",
  };
}
