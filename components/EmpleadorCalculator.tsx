"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CountryData = {
  name: string;
  currency: string;
  symbol: string;
  ssPatronal: number;       // employer social security rate (decimal)
  bonusMonths: number;      // extra months of salary paid per year (aguinaldo / pagas extra)
  severancePerYear: number; // months of salary per year of service on dismissal without cause
};

type ContractType = "indefinido" | "determinado" | "obra";

type EmpleadorResult = {
  salarioMensual: number;
  ssPatronalMensual: number;
  costeMensualTotal: number;
  salarioBrutoAnual: number;
  ssPatronalAnual: number;
  bonusPago: number;
  vacacionesPago: number;
  costeAnualTotal: number;
  indemnizacion: number;
  costeTotalPeriodo: number;
  anios: number;
};

// ---------------------------------------------------------------------------
// Country data
// ---------------------------------------------------------------------------

const countryData: Record<string, CountryData> = {
  mexico: {
    name: "México",
    currency: "MXN",
    symbol: "$",
    ssPatronal: 0.35,
    bonusMonths: 1.25,
    severancePerYear: 3.5,
  },
  colombia: {
    name: "Colombia",
    currency: "COP",
    symbol: "$",
    ssPatronal: 0.36,
    bonusMonths: 2.0,
    severancePerYear: 1.5,
  },
  espana: {
    name: "España",
    currency: "EUR",
    symbol: "€",
    ssPatronal: 0.31,
    bonusMonths: 2.0,
    severancePerYear: 2.75,
  },
  argentina: {
    name: "Argentina",
    currency: "ARS",
    symbol: "$",
    ssPatronal: 0.26,
    bonusMonths: 1.5,
    severancePerYear: 2.0,
  },
  chile: {
    name: "Chile",
    currency: "CLP",
    symbol: "$",
    ssPatronal: 0.21,
    bonusMonths: 1.0,
    severancePerYear: 1.5,
  },
  peru: {
    name: "Perú",
    currency: "PEN",
    symbol: "S/",
    ssPatronal: 0.21,
    bonusMonths: 2.0,
    severancePerYear: 1.5,
  },
  ecuador: {
    name: "Ecuador",
    currency: "USD",
    symbol: "$",
    ssPatronal: 0.1215,
    bonusMonths: 2.0,
    severancePerYear: 1.0,
  },
  venezuela: {
    name: "Venezuela",
    currency: "VES",
    symbol: "Bs.",
    ssPatronal: 0.14,
    bonusMonths: 0.5,
    severancePerYear: 1.0,
  },
  "costa-rica": {
    name: "Costa Rica",
    currency: "CRC",
    symbol: "₡",
    ssPatronal: 0.26,
    bonusMonths: 1.0,
    severancePerYear: 1.0,
  },
  bolivia: {
    name: "Bolivia",
    currency: "BOB",
    symbol: "Bs.",
    ssPatronal: 0.16,
    bonusMonths: 1.0,
    severancePerYear: 1.0,
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCurrency(amount: number, currency: string, symbol: string): string {
  try {
    const locales: Record<string, string> = {
      MXN: "es-MX",
      COP: "es-CO",
      EUR: "es-ES",
      ARS: "es-AR",
      CLP: "es-CL",
      PEN: "es-PE",
      USD: "es-EC",
      VES: "es-VE",
      CRC: "es-CR",
      BOB: "es-BO",
    };
    const maxFrac = ["COP", "ARS", "CLP", "VES"].includes(currency) ? 0 : 2;
    return new Intl.NumberFormat(locales[currency] ?? "es", {
      style: "currency",
      currency,
      maximumFractionDigits: maxFrac,
    }).format(amount);
  } catch {
    return `${symbol}${amount.toFixed(0)}`;
  }
}

function calculateResults(
  salario: number,
  country: CountryData,
  anios: number,
): EmpleadorResult {
  // Monthly
  const ssPatronalMensual = salario * country.ssPatronal;
  const costeMensualTotal = salario + ssPatronalMensual;

  // Annual base
  const salarioBrutoAnual = salario * 12;
  const ssPatronalAnual = salarioBrutoAnual * country.ssPatronal;

  // Mandatory bonuses (aguinaldo / pagas extra / SAC, etc.)
  const bonusPago = salario * country.bonusMonths;

  // Vacation pay: approx 4.33% of annual salary (standard accrual ~15 days/year)
  const vacacionesPago = salario * 0.0433 * 12;

  const costeAnualTotal = salarioBrutoAnual + ssPatronalAnual + bonusPago + vacacionesPago;

  // Dismissal severance
  const indemnizacion = salario * country.severancePerYear * anios;

  // Total cost of employment for full period
  const costeTotalPeriodo = costeAnualTotal * anios + indemnizacion;

  return {
    salarioMensual: salario,
    ssPatronalMensual,
    costeMensualTotal,
    salarioBrutoAnual,
    ssPatronalAnual,
    bonusPago,
    vacacionesPago,
    costeAnualTotal,
    indemnizacion,
    costeTotalPeriodo,
    anios,
  };
}

// ---------------------------------------------------------------------------
// Sub-component: result card
// ---------------------------------------------------------------------------

type ResultCardProps = {
  label: string;
  value: string;
  sublabel?: string;
  colorClass: string;
};

function ResultCard({ label, value, sublabel, colorClass }: ResultCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden border ${colorClass}`}>
      <div className="p-4 text-center">
        <p className="text-xs uppercase tracking-wide opacity-80 mb-1 font-semibold">{label}</p>
        <p className="text-2xl font-black">{value}</p>
        {sublabel && <p className="text-xs opacity-70 mt-1">{sublabel}</p>}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const CONTRACT_LABELS: Record<ContractType, string> = {
  indefinido: "Tiempo indefinido",
  determinado: "Tiempo determinado",
  obra: "Por obra o servicio",
};

export default function EmpleadorCalculator() {
  const [selectedCountry, setSelectedCountry] = useState<string>("mexico");
  const [salarioBruto, setSalarioBruto] = useState<string>("");
  const [contractType, setContractType] = useState<ContractType>("indefinido");
  const [anios, setAnios] = useState<string>("3");
  const [result, setResult] = useState<EmpleadorResult | null>(null);
  const [error, setError] = useState<string>("");

  const country = countryData[selectedCountry];

  function handleCalcular(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const salario = parseFloat(salarioBruto);
    if (!salario || salario <= 0) {
      setError("Ingresa un salario mensual bruto válido.");
      return;
    }

    const yearsNum = parseInt(anios, 10);
    if (!yearsNum || yearsNum < 1 || yearsNum > 10) {
      setError("Los años esperados deben estar entre 1 y 10.");
      return;
    }

    setResult(calculateResults(salario, country, yearsNum));
  }

  function handleCountryChange(value: string) {
    setSelectedCountry(value);
    setResult(null);
  }

  const fmt = (n: number) => formatCurrency(n, country.currency, country.symbol);

  return (
    <div className="space-y-6">
      {/* Form */}
      <form
        onSubmit={handleCalcular}
        className="bg-white rounded-xl border border-slate-200 p-6 space-y-5"
      >
        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            País
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {Object.entries(countryData).map(([slug, c]) => (
              <option key={slug} value={slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Gross salary */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Salario bruto mensual ofrecido ({country.symbol})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
              {country.symbol}
            </span>
            <input
              type="number"
              value={salarioBruto}
              onChange={(e) => setSalarioBruto(e.target.value)}
              placeholder="Ej. 25000"
              min="0"
              className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            El salario bruto que aparecerá en el contrato
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Contract type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Tipo de contrato
            </label>
            <select
              value={contractType}
              onChange={(e) => setContractType(e.target.value as ContractType)}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {(Object.entries(CONTRACT_LABELS) as [ContractType, string][]).map(
                ([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Years */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Años esperados de trabajo (1–10)
            </label>
            <input
              type="number"
              value={anios}
              onChange={(e) => setAnios(e.target.value)}
              min="1"
              max="10"
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-slate-400 mt-1">
              Para estimar la indemnización por despido
            </p>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Calcular coste real del empleado
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Key metric cards */}
          <div className="grid grid-cols-2 gap-4">
            <ResultCard
              label="Coste mensual total"
              value={fmt(result.costeMensualTotal)}
              sublabel={`Salario + SS patronal (~${Math.round(country.ssPatronal * 100)}%)`}
              colorClass="border-slate-200 bg-slate-700 text-white"
            />
            <ResultCard
              label="Coste anual total"
              value={fmt(result.costeAnualTotal)}
              sublabel="Incluye bonos y vacaciones"
              colorClass="border-blue-200 bg-blue-600 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ResultCard
              label="Indemnización estimada"
              value={fmt(result.indemnizacion)}
              sublabel={`Despido sin causa tras ${result.anios} año${result.anios !== 1 ? "s" : ""}`}
              colorClass="border-amber-200 bg-amber-500 text-white"
            />
            <ResultCard
              label="Coste total del período"
              value={fmt(result.costeTotalPeriodo)}
              sublabel={`${result.anios} año${result.anios !== 1 ? "s" : ""} + indemnización`}
              colorClass="border-emerald-200 bg-emerald-600 text-white"
            />
          </div>

          {/* Detailed breakdown */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Desglose completo de conceptos
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Concepto
                  </th>
                  <th className="text-right py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Importe
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 text-slate-600">Salario bruto mensual</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.salarioMensual)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">
                    Seguridad social patronal mensual ({Math.round(country.ssPatronal * 100)}%)
                  </td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.ssPatronalMensual)}
                  </td>
                </tr>
                <tr className="font-semibold">
                  <td className="py-2 text-slate-700">= Coste mensual total</td>
                  <td className="py-2 text-right text-blue-700">
                    {fmt(result.costeMensualTotal)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600 pt-4">Salario bruto anual (× 12)</td>
                  <td className="py-2 text-right font-medium text-slate-800 pt-4">
                    {fmt(result.salarioBrutoAnual)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">
                    Seguridad social patronal anual
                  </td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.ssPatronalAnual)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">
                    Bonos obligatorios / aguinaldo ({country.bonusMonths} meses)
                  </td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.bonusPago)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">Vacaciones pagadas (aprox.)</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.vacacionesPago)}
                  </td>
                </tr>
                <tr className="font-semibold">
                  <td className="py-2 text-slate-700">= Coste anual total</td>
                  <td className="py-2 text-right text-blue-700">
                    {fmt(result.costeAnualTotal)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600 pt-4">
                    Indemnización por despido sin causa ({country.severancePerYear} meses/año × {result.anios} años)
                  </td>
                  <td className="py-2 text-right font-medium text-slate-800 pt-4">
                    {fmt(result.indemnizacion)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">
                    Coste anual total × {result.anios} años
                  </td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {fmt(result.costeAnualTotal * result.anios)}
                  </td>
                </tr>
                <tr className="font-bold border-t-2 border-slate-200">
                  <td className="py-3 text-slate-800">
                    = Coste total del empleado ({result.anios} año{result.anios !== 1 ? "s" : ""})
                  </td>
                  <td className="py-3 text-right text-emerald-700">
                    {fmt(result.costeTotalPeriodo)}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                <strong>Nota:</strong> Cálculo orientativo basado en tasas de seguridad social patronal estándar
                para {country.name}. Las tasas exactas varían según categoría profesional, convenio colectivo y
                situación específica. El tipo de contrato seleccionado ({CONTRACT_LABELS[contractType]}) puede
                afectar los requisitos legales aplicables. Consulta con un asesor laboral o de RRHH.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
