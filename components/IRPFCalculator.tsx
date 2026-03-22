"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CountryKey = "espana" | "mexico";

type TaxBracket = {
  from: number;
  to: number;
  rate: number;
};

type SpainSituation = "soltero" | "casado_con" | "casado_sin";
type MexicoSituation = "soltero" | "casado";
type InputMode = "annual" | "monthly";

type TaxResult = {
  grossAnnual: number;
  ssContributions: number;
  incomeTax: number;
  netAnnual: number;
  netMonthly: number;
  effectiveRate: number;
  taxableBase: number;
};

// ---------------------------------------------------------------------------
// Tax brackets
// ---------------------------------------------------------------------------

const SPAIN_BRACKETS: TaxBracket[] = [
  { from: 0, to: 12450, rate: 0.19 },
  { from: 12450, to: 20200, rate: 0.24 },
  { from: 20200, to: 35200, rate: 0.30 },
  { from: 35200, to: 60000, rate: 0.37 },
  { from: 60000, to: 300000, rate: 0.45 },
  { from: 300000, to: Infinity, rate: 0.47 },
];

const MEXICO_BRACKETS: TaxBracket[] = [
  { from: 0, to: 8952.49, rate: 0.0192 },
  { from: 8952.49, to: 75984.55, rate: 0.064 },
  { from: 75984.55, to: 133536.07, rate: 0.1088 },
  { from: 133536.07, to: 155229.8, rate: 0.16 },
  { from: 155229.8, to: 185852.57, rate: 0.1792 },
  { from: 185852.57, to: 374837.88, rate: 0.2136 },
  { from: 374837.88, to: 590795.99, rate: 0.2352 },
  { from: 590795.99, to: 1127926.84, rate: 0.30 },
  { from: 1127926.84, to: 1503902.46, rate: 0.32 },
  { from: 1503902.46, to: 4511707.37, rate: 0.34 },
  { from: 4511707.37, to: Infinity, rate: 0.35 },
];

// Fixed lower-limit tax amounts for Mexico brackets (cuota fija)
const MEXICO_CUOTA_FIJA: number[] = [
  0, 171.88, 4461.94, 10664.02, 14966.08, 17805.73, 28228.52, 78404.82,
  132222.42, 197932.35, 737203.42,
];

// ---------------------------------------------------------------------------
// Progressive tax engine
// ---------------------------------------------------------------------------

function applyProgressiveTax(base: number, brackets: TaxBracket[]): number {
  if (base <= 0) return 0;
  let tax = 0;
  for (const bracket of brackets) {
    if (base <= bracket.from) break;
    const taxable = Math.min(base, bracket.to) - bracket.from;
    tax += taxable * bracket.rate;
  }
  return tax;
}

function applyMexicoISR(base: number): number {
  if (base <= 0) return 0;
  let bracketIndex = 0;
  for (let i = 0; i < MEXICO_BRACKETS.length; i++) {
    if (base > MEXICO_BRACKETS[i].from) bracketIndex = i;
    else break;
  }
  const bracket = MEXICO_BRACKETS[bracketIndex];
  const cuotaFija = MEXICO_CUOTA_FIJA[bracketIndex];
  const marginal = (base - bracket.from) * bracket.rate;
  return cuotaFija + marginal;
}

// ---------------------------------------------------------------------------
// Spain calculation
// ---------------------------------------------------------------------------

function calculateSpainIRPF(
  grossAnnual: number,
  situation: SpainSituation,
  children: number
): TaxResult {
  const SS_RATE = 0.0647;
  const PERSONAL_ALLOWANCE = 5550;
  const MARITAL_EXTRA = 3400;

  const ssContributions = grossAnnual * SS_RATE;
  const baseImponiblePrevia = grossAnnual - ssContributions;

  // Child allowances
  const childAllowances = [0, 2400, 2700, 4000, 4500];
  let childDeduction = 0;
  for (let i = 0; i < Math.min(children, 5); i++) {
    childDeduction += childAllowances[Math.min(i, 4)];
  }

  const maritalBonus = situation === "casado_sin" ? MARITAL_EXTRA : 0;
  const totalAllowance = PERSONAL_ALLOWANCE + childDeduction + maritalBonus;

  const baseLiquidable = Math.max(0, baseImponiblePrevia - totalAllowance);
  const incomeTax = applyProgressiveTax(baseLiquidable, SPAIN_BRACKETS);

  const netAnnual = grossAnnual - ssContributions - incomeTax;
  const netMonthly = netAnnual / 12;
  const effectiveRate = grossAnnual > 0 ? (incomeTax / grossAnnual) * 100 : 0;

  return {
    grossAnnual,
    ssContributions,
    incomeTax,
    netAnnual,
    netMonthly,
    effectiveRate,
    taxableBase: baseLiquidable,
  };
}

// ---------------------------------------------------------------------------
// Mexico calculation
// ---------------------------------------------------------------------------

function calculateMexicoISR(
  grossAnnual: number,
  _situation: MexicoSituation
): TaxResult {
  const SS_RATE = 0.115;
  const PERSONAL_ALLOWANCE = 30000;

  const ssContributions = grossAnnual * SS_RATE;
  const afterSS = grossAnnual - ssContributions;
  const taxableBase = Math.max(0, afterSS - PERSONAL_ALLOWANCE);

  const incomeTax = applyMexicoISR(taxableBase);

  const netAnnual = grossAnnual - ssContributions - incomeTax;
  const netMonthly = netAnnual / 12;
  const effectiveRate = grossAnnual > 0 ? (incomeTax / grossAnnual) * 100 : 0;

  return {
    grossAnnual,
    ssContributions,
    incomeTax,
    netAnnual,
    netMonthly,
    effectiveRate,
    taxableBase,
  };
}

// ---------------------------------------------------------------------------
// Formatter
// ---------------------------------------------------------------------------

function fmt(amount: number, currency: string): string {
  try {
    const localeMap: Record<string, string> = { EUR: "es-ES", MXN: "es-MX" };
    return new Intl.NumberFormat(localeMap[currency] ?? "es", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(2)}`;
  }
}

function pct(value: number): string {
  return `${value.toFixed(2)}%`;
}

// ---------------------------------------------------------------------------
// Sub-component: visual bar chart
// ---------------------------------------------------------------------------

function BreakdownBar({
  ssRatio,
  taxRatio,
  netRatio,
}: {
  ssRatio: number;
  taxRatio: number;
  netRatio: number;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-700 mb-2">
        Distribución del salario bruto
      </p>
      <div className="flex h-8 rounded-xl overflow-hidden w-full text-xs font-semibold text-white">
        {ssRatio > 0.5 && (
          <div
            className="flex items-center justify-center bg-amber-500 transition-all"
            style={{ width: `${ssRatio}%` }}
            title={`Seguridad Social: ${pct(ssRatio)}`}
          >
            {ssRatio >= 6 ? `SS ${pct(ssRatio)}` : ""}
          </div>
        )}
        {ssRatio <= 0.5 && ssRatio > 0 && (
          <div
            className="bg-amber-500 transition-all"
            style={{ width: `${ssRatio}%` }}
            title={`Seguridad Social: ${pct(ssRatio)}`}
          />
        )}
        {taxRatio > 0.5 && (
          <div
            className="flex items-center justify-center bg-red-500 transition-all"
            style={{ width: `${taxRatio}%` }}
            title={`Impuesto: ${pct(taxRatio)}`}
          >
            {taxRatio >= 6 ? `IRPF/ISR ${pct(taxRatio)}` : ""}
          </div>
        )}
        {taxRatio <= 0.5 && taxRatio > 0 && (
          <div
            className="bg-red-500 transition-all"
            style={{ width: `${taxRatio}%` }}
            title={`Impuesto: ${pct(taxRatio)}`}
          />
        )}
        <div
          className="flex items-center justify-center bg-emerald-500 transition-all flex-1"
          title={`Neto: ${pct(netRatio)}`}
        >
          {netRatio >= 10 ? `Neto ${pct(netRatio)}` : ""}
        </div>
      </div>
      <div className="flex gap-4 mt-2 text-xs text-slate-500 flex-wrap">
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-sm bg-amber-500" />
          Seguridad Social ({pct(ssRatio)})
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-sm bg-red-500" />
          IRPF / ISR ({pct(taxRatio)})
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-sm bg-emerald-500" />
          Salario neto ({pct(netRatio)})
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function IRPFCalculator() {
  const [country, setCountry] = useState<CountryKey>("espana");
  const [rawSalary, setRawSalary] = useState("");
  const [inputMode, setInputMode] = useState<InputMode>("annual");
  const [spainSituation, setSpainSituation] = useState<SpainSituation>("soltero");
  const [children, setChildren] = useState("0");
  const [mexicoSituation, setMexicoSituation] = useState<MexicoSituation>("soltero");
  const [result, setResult] = useState<TaxResult | null>(null);
  const [error, setError] = useState("");

  const currency = country === "espana" ? "EUR" : "MXN";
  const symbol = country === "espana" ? "€" : "$";
  const taxLabel = country === "espana" ? "IRPF" : "ISR";

  function handleCountryChange(next: CountryKey) {
    setCountry(next);
    setResult(null);
    setError("");
  }

  function handleCalcular(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const rawVal = parseFloat(rawSalary);
    if (!rawVal || rawVal <= 0) {
      setError("Ingresa un salario válido.");
      return;
    }

    const grossAnnual = inputMode === "monthly" ? rawVal * 12 : rawVal;

    let calculated: TaxResult;
    if (country === "espana") {
      calculated = calculateSpainIRPF(
        grossAnnual,
        spainSituation,
        parseInt(children, 10) || 0
      );
    } else {
      calculated = calculateMexicoISR(grossAnnual, mexicoSituation);
    }

    setResult(calculated);
  }

  // Compute ratios for bar chart (as percentage of gross)
  const ssRatio = result ? (result.ssContributions / result.grossAnnual) * 100 : 0;
  const taxRatio = result ? (result.incomeTax / result.grossAnnual) * 100 : 0;
  const netRatio = result ? (result.netAnnual / result.grossAnnual) * 100 : 0;

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleCalcular}
        className="bg-white rounded-xl border border-slate-200 p-6 space-y-5"
      >
        {/* Country selector */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            País
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(["espana", "mexico"] as CountryKey[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleCountryChange(c)}
                className={`py-2.5 rounded-xl border font-medium text-sm transition-colors ${
                  country === c
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:border-blue-300"
                }`}
              >
                {c === "espana" ? "🇪🇸 España" : "🇲🇽 México"}
              </button>
            ))}
          </div>
        </div>

        {/* Salary input */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-slate-700">
              Salario bruto ({symbol})
            </label>
            {/* Annual / Monthly toggle — only for Mexico */}
            {country === "mexico" && (
              <div className="flex text-xs rounded-lg overflow-hidden border border-slate-200">
                <button
                  type="button"
                  onClick={() => setInputMode("annual")}
                  className={`px-3 py-1 transition-colors ${
                    inputMode === "annual"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Anual
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode("monthly")}
                  className={`px-3 py-1 transition-colors ${
                    inputMode === "monthly"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Mensual
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
              {symbol}
            </span>
            <input
              type="number"
              value={rawSalary}
              onChange={(e) => {
                setRawSalary(e.target.value);
                setResult(null);
              }}
              placeholder={
                country === "espana"
                  ? "Ej. 35000"
                  : inputMode === "monthly"
                  ? "Ej. 25000"
                  : "Ej. 300000"
              }
              className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {country === "espana"
              ? "Salario bruto anual en euros"
              : inputMode === "monthly"
              ? "Salario mensual bruto en pesos mexicanos"
              : "Salario anual bruto en pesos mexicanos"}
          </p>
        </div>

        {/* Spain-specific fields */}
        {country === "espana" && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Situación personal
              </label>
              <select
                value={spainSituation}
                onChange={(e) => {
                  setSpainSituation(e.target.value as SpainSituation);
                  setResult(null);
                }}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="soltero">Soltero/a</option>
                <option value="casado_con">
                  Casado/a — cónyuge con ingresos
                </option>
                <option value="casado_sin">
                  Casado/a — cónyuge sin ingresos (+€3,400)
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Hijos menores de 25 años a cargo
              </label>
              <select
                value={children}
                onChange={(e) => {
                  setChildren(e.target.value);
                  setResult(null);
                }}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n === 0 ? "Sin hijos" : `${n} hijo${n > 1 ? "s" : ""}`}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-400 mt-1">
                1.º: €2,400 · 2.º: €2,700 · 3.º: €4,000 · 4.º+: €4,500
              </p>
            </div>
          </>
        )}

        {/* Mexico-specific fields */}
        {country === "mexico" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Estado civil
            </label>
            <select
              value={mexicoSituation}
              onChange={(e) => {
                setMexicoSituation(e.target.value as MexicoSituation);
                setResult(null);
              }}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="soltero">Soltero/a</option>
              <option value="casado">Casado/a</option>
            </select>
          </div>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Calcular {taxLabel} {new Date().getFullYear()}
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Top summary cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-emerald-200">
              <div className="bg-emerald-600 text-white p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-emerald-100 mb-1">
                  Salario neto mensual
                </p>
                <p className="text-3xl font-black">
                  {fmt(result.netMonthly, currency)}
                </p>
                <p className="text-xs text-emerald-100 mt-1">
                  {fmt(result.netAnnual, currency)} / año
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-red-200">
              <div className="bg-red-600 text-white p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-red-100 mb-1">
                  Tipo efectivo {taxLabel}
                </p>
                <p className="text-3xl font-black">
                  {result.effectiveRate.toFixed(2)}%
                </p>
                <p className="text-xs text-red-100 mt-1">
                  {fmt(result.incomeTax, currency)} / año
                </p>
              </div>
            </div>
          </div>

          {/* Detailed table */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Desglose fiscal
            </p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 text-slate-500">Salario bruto anual</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.grossAnnual, currency)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">
                    Cotización Seg. Social (
                    {country === "espana" ? "6.47%" : "11.5%"})
                  </td>
                  <td className="py-2 text-right font-medium text-amber-600">
                    − {fmt(result.ssContributions, currency)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">Base liquidable</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.taxableBase, currency)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">
                    {taxLabel} (tipo efectivo {result.effectiveRate.toFixed(2)}%)
                  </td>
                  <td className="py-2 text-right font-medium text-red-600">
                    − {fmt(result.incomeTax, currency)}
                  </td>
                </tr>
                <tr className="border-t-2 border-slate-300">
                  <td className="py-2 text-slate-700 font-semibold">
                    Salario neto anual
                  </td>
                  <td className="py-2 text-right font-bold text-emerald-700">
                    {fmt(result.netAnnual, currency)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-700 font-semibold">
                    Salario neto mensual
                  </td>
                  <td className="py-2 text-right font-bold text-emerald-700">
                    {fmt(result.netMonthly, currency)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bar chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <BreakdownBar
              ssRatio={ssRatio}
              taxRatio={taxRatio}
              netRatio={netRatio}
            />
          </div>

          {/* Spain deductions info */}
          {country === "espana" && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Deducciones aplicadas:</strong> Mínimo personal €5,550
                {spainSituation === "casado_sin" ? " + €3,400 mínimo cónyuge" : ""}
                {parseInt(children, 10) > 0
                  ? ` + reducción por descendientes (${children} hijo${parseInt(children, 10) > 1 ? "s" : ""})`
                  : ""}
                . Cotización SS empleado: 6.47% del bruto.
              </p>
            </div>
          )}

          {/* Mexico deductions info */}
          {country === "mexico" && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Deducciones aplicadas:</strong> Deducción personal base
                ~$30,000 MXN/año. Aportaciones IMSS/SS empleado: ~11.5% del
                salario bruto.
              </p>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Nota:</strong> Cálculo orientativo. No incluye deducciones
              especiales, retenciones adicionales, aportaciones voluntarias,
              regímenes especiales ni situaciones particulares. Para una liquidación
              exacta consulta a un asesor fiscal o a la Agencia Tributaria /{" "}
              SAT correspondiente.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
