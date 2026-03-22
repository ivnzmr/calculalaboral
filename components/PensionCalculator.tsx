"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CountryKey = "mexico" | "colombia" | "espana" | "argentina" | "chile" | "peru";

type CountryConfig = {
  name: string;
  currency: string;
  symbol: string;
  defaultRetirementAge: number;
  minContributionYears: number;
  system: string;
};

type PensionResult = {
  yearsUntilRetirement: number;
  totalContributionYears: number;
  estimatedMonthlyPension: number;
  replacementRate: number;
  qualifies: boolean;
  missingYears: number;
};

// ---------------------------------------------------------------------------
// Country config
// ---------------------------------------------------------------------------

const COUNTRIES: Record<CountryKey, CountryConfig> = {
  mexico: {
    name: "México",
    currency: "MXN",
    symbol: "$",
    defaultRetirementAge: 65,
    minContributionYears: 25,
    system: "IMSS",
  },
  colombia: {
    name: "Colombia",
    currency: "COP",
    symbol: "$",
    defaultRetirementAge: 62,
    minContributionYears: 25,
    system: "Colpensiones (RPM)",
  },
  espana: {
    name: "España",
    currency: "EUR",
    symbol: "€",
    defaultRetirementAge: 67,
    minContributionYears: 15,
    system: "Seguridad Social",
  },
  argentina: {
    name: "Argentina",
    currency: "ARS",
    symbol: "$",
    defaultRetirementAge: 63,
    minContributionYears: 30,
    system: "ANSES",
  },
  chile: {
    name: "Chile",
    currency: "CLP",
    symbol: "$",
    defaultRetirementAge: 63,
    minContributionYears: 0,
    system: "AFP",
  },
  peru: {
    name: "Perú",
    currency: "PEN",
    symbol: "S/",
    defaultRetirementAge: 65,
    minContributionYears: 20,
    system: "AFP / ONP",
  },
};

// ---------------------------------------------------------------------------
// Pension calculation logic
// ---------------------------------------------------------------------------

function calculatePension(
  country: CountryKey,
  salary: number,
  totalYears: number
): number {
  switch (country) {
    case "mexico": {
      const rate = Math.min(totalYears * 0.0125, 1.0);
      return salary * rate;
    }
    case "colombia": {
      if (totalYears < 25) return 0;
      const rate = Math.min(0.65 + (totalYears - 25) * 0.02, 0.85);
      return salary * rate;
    }
    case "espana": {
      const rate = Math.min(totalYears / 37, 1.0) * 0.8;
      const raw = salary * rate;
      return Math.min(raw, 3175);
    }
    case "argentina": {
      const rate = 0.6 * Math.min(totalYears / 30, 1.0);
      return salary * rate;
    }
    case "chile": {
      const monthsContributed = totalYears * 12;
      const annualReturn = 1.05;
      const totalFund =
        salary * 0.1 * monthsContributed * Math.pow(annualReturn, totalYears);
      return totalFund / 240;
    }
    case "peru": {
      // AFP-style: accumulated fund / 240 months
      const monthsContributed = totalYears * 12;
      const totalFund =
        salary * 0.1 * monthsContributed * Math.pow(1.05, totalYears);
      return totalFund / 240;
    }
    default:
      return 0;
  }
}

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
    };
    const maxFrac = ["COP", "ARS", "CLP"].includes(currency) ? 0 : 2;
    return new Intl.NumberFormat(locales[currency] ?? "es", {
      style: "currency",
      currency,
      maximumFractionDigits: maxFrac,
    }).format(amount);
  } catch {
    return `${symbol}${amount.toFixed(0)}`;
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PensionCalculator() {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>("espana");
  const [currentAge, setCurrentAge] = useState("35");
  const [salary, setSalary] = useState("");
  const [yearsContributed, setYearsContributed] = useState("10");
  const [retirementAge, setRetirementAge] = useState("67");
  const [result, setResult] = useState<PensionResult | null>(null);
  const [error, setError] = useState("");

  const config = COUNTRIES[selectedCountry];

  function handleCountryChange(next: CountryKey) {
    setSelectedCountry(next);
    setRetirementAge(String(COUNTRIES[next].defaultRetirementAge));
    setResult(null);
    setError("");
  }

  function handleCalcular(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const age = parseInt(currentAge, 10);
    const sal = parseFloat(salary);
    const yearsAlready = parseInt(yearsContributed, 10);
    const retAge = parseInt(retirementAge, 10);

    if (!sal || sal <= 0) {
      setError("Ingresa un salario mensual válido.");
      return;
    }
    if (age < 18 || age > 65) {
      setError("La edad actual debe estar entre 18 y 65 años.");
      return;
    }
    if (retAge <= age) {
      setError("La edad de jubilación debe ser mayor que la edad actual.");
      return;
    }
    if (yearsAlready < 0 || yearsAlready > 40) {
      setError("Los años cotizados deben estar entre 0 y 40.");
      return;
    }

    const yearsUntilRetirement = retAge - age;
    const totalContributionYears = yearsAlready + yearsUntilRetirement;
    const pension = calculatePension(selectedCountry, sal, totalContributionYears);
    const replacementRate = sal > 0 ? (pension / sal) * 100 : 0;
    const qualifies = totalContributionYears >= config.minContributionYears;
    const missingYears = qualifies
      ? 0
      : config.minContributionYears - totalContributionYears;

    setResult({
      yearsUntilRetirement,
      totalContributionYears,
      estimatedMonthlyPension: pension,
      replacementRate,
      qualifies,
      missingYears,
    });
  }

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
          <select
            value={selectedCountry}
            onChange={(e) => handleCountryChange(e.target.value as CountryKey)}
            className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {(Object.entries(COUNTRIES) as [CountryKey, CountryConfig][]).map(
              ([slug, c]) => (
                <option key={slug} value={slug}>
                  {c.name} — {c.system}
                </option>
              )
            )}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Current age */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Edad actual
            </label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => {
                setCurrentAge(e.target.value);
                setResult(null);
              }}
              min={18}
              max={65}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Retirement age */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Edad de jubilación{" "}
              <span className="text-slate-400 font-normal">
                (por defecto {config.defaultRetirementAge})
              </span>
            </label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => {
                setRetirementAge(e.target.value);
                setResult(null);
              }}
              min={50}
              max={75}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Salario mensual bruto ({config.symbol})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
              {config.symbol}
            </span>
            <input
              type="number"
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
                setResult(null);
              }}
              placeholder="Ej. 2500"
              className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Years already contributing */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Años cotizados hasta hoy
          </label>
          <input
            type="number"
            value={yearsContributed}
            onChange={(e) => {
              setYearsContributed(e.target.value);
              setResult(null);
            }}
            min={0}
            max={40}
            className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Estimar mi pensión
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Header cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-blue-200">
              <div className="bg-blue-600 text-white p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-blue-100 mb-1">
                  Pensión mensual estimada
                </p>
                <p className="text-3xl font-black">
                  {formatCurrency(
                    result.estimatedMonthlyPension,
                    config.currency,
                    config.symbol
                  )}
                </p>
                <p className="text-xs text-blue-100 mt-1">{config.system}</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <div className="bg-slate-700 text-white p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-300 mb-1">
                  Tasa de reemplazo
                </p>
                <p className="text-3xl font-black">
                  {result.replacementRate.toFixed(1)}%
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  del salario actual
                </p>
              </div>
            </div>
          </div>

          {/* Qualification status */}
          {result.qualifies ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
              <span className="text-emerald-500 text-xl leading-none">✓</span>
              <p className="text-sm text-emerald-800">
                Con{" "}
                <strong>{result.totalContributionYears} años</strong> de
                cotización al momento de jubilarte cumples el requisito mínimo
                de <strong>{config.minContributionYears} años</strong> de{" "}
                {config.name}.
              </p>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <span className="text-amber-500 text-xl leading-none">⚠</span>
              <p className="text-sm text-amber-800">
                Te faltan{" "}
                <strong>{result.missingYears} años</strong> de cotización para
                alcanzar el mínimo de{" "}
                <strong>{config.minContributionYears} años</strong> requerido en{" "}
                {config.name}. La pensión estimada podría ser{" "}
                <strong>$0</strong> o reducida.
              </p>
            </div>
          )}

          {/* Detail breakdown */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Desglose
            </p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 text-slate-500">Años hasta jubilación</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {result.yearsUntilRetirement} años
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">
                    Años de cotización totales
                  </td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {result.totalContributionYears} años
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">Salario mensual actual</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {formatCurrency(
                      parseFloat(salary),
                      config.currency,
                      config.symbol
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">Pensión mensual estimada</td>
                  <td className="py-2 text-right font-semibold text-blue-700">
                    {formatCurrency(
                      result.estimatedMonthlyPension,
                      config.currency,
                      config.symbol
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">Sistema previsional</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {config.system}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Nota:</strong> Cálculo simplificado. Los sistemas de pensiones
              son complejos y dependen de muchos factores individuales, ajustes por
              inflación, lagunas de cotización y cambios legislativos. Consulta con
              tu institución previsional para un cálculo oficial.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
