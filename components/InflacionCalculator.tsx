"use client";

import { useState } from "react";

type CountryKey =
  | "mexico"
  | "colombia"
  | "espana"
  | "argentina"
  | "chile"
  | "peru"
  | "ecuador"
  | "venezuela"
  | "costa-rica"
  | "bolivia";

interface CountryData {
  label: string;
  currency: string;
  symbol: string;
  defaultRate: number;
  highInflation?: boolean;
}

const COUNTRIES: Record<CountryKey, CountryData> = {
  mexico: { label: "México", currency: "MXN", symbol: "$", defaultRate: 5.5 },
  colombia: { label: "Colombia", currency: "COP", symbol: "$", defaultRate: 7.2 },
  espana: { label: "España", currency: "EUR", symbol: "€", defaultRate: 3.8 },
  argentina: { label: "Argentina", currency: "ARS", symbol: "$", defaultRate: 120, highInflation: true },
  chile: { label: "Chile", currency: "CLP", symbol: "$", defaultRate: 5.1 },
  peru: { label: "Perú", currency: "PEN", symbol: "S/", defaultRate: 4.8 },
  ecuador: { label: "Ecuador", currency: "USD", symbol: "$", defaultRate: 2.8 },
  venezuela: { label: "Venezuela", currency: "VES", symbol: "Bs.", defaultRate: 200, highInflation: true },
  "costa-rica": { label: "Costa Rica", currency: "CRC", symbol: "₡", defaultRate: 4.5 },
  bolivia: { label: "Bolivia", currency: "BOB", symbol: "Bs.", defaultRate: 3.2 },
};

const CURRENT_YEAR = 2026;

interface YearRow {
  year: number;
  value: number;
  percentage: number;
}

interface Results {
  adjustedSalary: number;
  purchasingPowerLoss: number;
  yearRows: YearRow[];
}

function fmt(amount: number, currency: string, symbol: string): string {
  try {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${symbol}${new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)}`;
  }
}

export default function InflacionCalculator() {
  const [country, setCountry] = useState<CountryKey>("mexico");
  const [salary, setSalary] = useState("");
  const [refYear, setRefYear] = useState(2020);
  const [inflationRate, setInflationRate] = useState(String(COUNTRIES["mexico"].defaultRate));
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const handleCountryChange = (value: CountryKey) => {
    setCountry(value);
    setInflationRate(String(COUNTRIES[value].defaultRate));
    setResults(null);
    setError("");
  };

  const handleCalculate = () => {
    setError("");
    setResults(null);
    const salaryNum = parseFloat(salary.replace(/,/g, ""));
    const rateNum = parseFloat(inflationRate);
    if (!salary || isNaN(salaryNum) || salaryNum <= 0) {
      setError("Introduce un salario válido mayor que cero.");
      return;
    }
    if (isNaN(rateNum) || rateNum < 0) {
      setError("Introduce una tasa de inflación válida.");
      return;
    }
    const yearsCount = CURRENT_YEAR - refYear;
    const yearRows: YearRow[] = [];
    for (let i = 0; i <= yearsCount; i++) {
      const yr = refYear + i;
      const value = salaryNum * Math.pow(1 + rateNum / 100, i);
      yearRows.push({ year: yr, value, percentage: (value / salaryNum) * 100 });
    }
    const adjustedSalary = salaryNum * Math.pow(1 + rateNum / 100, yearsCount);
    const purchasingPowerLoss = ((adjustedSalary - salaryNum) / adjustedSalary) * 100;
    setResults({ adjustedSalary, purchasingPowerLoss, yearRows });
  };

  const countryData = COUNTRIES[country];
  const refYears = Array.from({ length: 8 }, (_, i) => 2018 + i);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">País</label>
          <select
            value={country}
            onChange={(e) => handleCountryChange(e.target.value as CountryKey)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {(Object.keys(COUNTRIES) as CountryKey[]).map((key) => (
              <option key={key} value={key}>{COUNTRIES[key].label} ({COUNTRIES[key].currency})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Salario ({countryData.currency})</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{countryData.symbol}</span>
            <input
              type="number" min="0" value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Ej: 15000"
              className="w-full border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Año de referencia</label>
          <select
            value={refYear}
            onChange={(e) => { setRefYear(Number(e.target.value)); setResults(null); }}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {refYears.map((yr) => <option key={yr} value={yr}>{yr}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tasa de inflación anual (%)</label>
          <div className="relative">
            <input
              type="number" min="0" step="0.1" value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 pr-8 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Valor predeterminado para {countryData.label}. Puedes modificarlo.</p>
        </div>

        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Calcular pérdida de poder adquisitivo
        </button>
      </div>

      {results && (
        <div className="space-y-4">
          {countryData.highInflation && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Nota:</strong> Cifra orientativa. La alta inflación hace que los valores varíen significativamente.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Tu salario de {refYear}</p>
              <p className="text-2xl font-bold text-slate-700">{fmt(parseFloat(salary.replace(/,/g, "")), countryData.currency, countryData.symbol)}</p>
              <p className="text-xs text-slate-400 mt-1">Poder adquisitivo en {refYear}</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-200 p-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Necesitas hoy ({CURRENT_YEAR})</p>
              <p className="text-2xl font-bold text-blue-600">{fmt(results.adjustedSalary, countryData.currency, countryData.symbol)}</p>
              <p className="text-xs text-slate-400 mt-1">Para mantener el mismo poder adquisitivo</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-red-200 p-5">
            <p className="text-sm font-medium text-slate-600 mb-1">Pérdida de poder adquisitivo desde {refYear}</p>
            <p className="text-3xl font-bold text-red-500">{results.purchasingPowerLoss.toFixed(1)}%</p>
            <p className="text-sm text-slate-500 mt-1">
              Tu salario de {refYear} ahora equivale a <strong>{(100 - results.purchasingPowerLoss).toFixed(1)}%</strong> de lo que valía entonces.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">Evolución año a año</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    <th className="px-4 py-3">Año</th>
                    <th className="px-4 py-3">Valor equivalente</th>
                    <th className="px-4 py-3">% del valor original</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {results.yearRows.map((row) => (
                    <tr key={row.year} className={row.year === CURRENT_YEAR ? "bg-blue-50 font-semibold" : "hover:bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-800">{row.year}</td>
                      <td className="px-4 py-3 text-slate-700">{fmt(row.value, countryData.currency, countryData.symbol)}</td>
                      <td className="px-4 py-3">
                        <span className={row.year === refYear ? "text-slate-600" : "text-red-500"}>{row.percentage.toFixed(1)}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
