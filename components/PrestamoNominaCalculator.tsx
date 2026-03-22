"use client";

import { useState } from "react";

type CountryKey =
  | "mexico" | "colombia" | "espana" | "argentina" | "chile"
  | "peru" | "ecuador" | "venezuela" | "costa-rica" | "bolivia";

interface CountryData {
  label: string;
  currency: string;
  symbol: string;
  defaultRate: number;
  highInflation?: boolean;
}

const COUNTRIES: Record<CountryKey, CountryData> = {
  mexico: { label: "México", currency: "MXN", symbol: "$", defaultRate: 28 },
  colombia: { label: "Colombia", currency: "COP", symbol: "$", defaultRate: 18 },
  espana: { label: "España", currency: "EUR", symbol: "€", defaultRate: 8 },
  argentina: { label: "Argentina", currency: "ARS", symbol: "$", defaultRate: 85, highInflation: true },
  chile: { label: "Chile", currency: "CLP", symbol: "$", defaultRate: 12 },
  peru: { label: "Perú", currency: "PEN", symbol: "S/", defaultRate: 20 },
  ecuador: { label: "Ecuador", currency: "USD", symbol: "$", defaultRate: 15 },
  venezuela: { label: "Venezuela", currency: "VES", symbol: "Bs.", defaultRate: 40, highInflation: true },
  "costa-rica": { label: "Costa Rica", currency: "CRC", symbol: "₡", defaultRate: 14 },
  bolivia: { label: "Bolivia", currency: "BOB", symbol: "Bs.", defaultRate: 16 },
};

const TERM_OPTIONS = [6, 12, 18, 24, 36, 48, 60];

interface AmortRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface Results {
  monthlyPayment: number;
  salaryPercentage: number;
  totalPayment: number;
  totalInterest: number;
  rows: AmortRow[];
  exceedsThreshold: boolean;
}

function fmt(amount: number, currency: string, symbol: string): string {
  try {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
  } catch {
    return `${symbol}${new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)}`;
  }
}

export default function PrestamoNominaCalculator() {
  const [country, setCountry] = useState<CountryKey>("mexico");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [annualRate, setAnnualRate] = useState(String(COUNTRIES["mexico"].defaultRate));
  const [termMonths, setTermMonths] = useState(24);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const handleCountryChange = (value: CountryKey) => {
    setCountry(value);
    setAnnualRate(String(COUNTRIES[value].defaultRate));
    setResults(null);
    setError("");
  };

  const handleSalaryChange = (value: string) => {
    setMonthlySalary(value);
    const n = parseFloat(value.replace(/,/g, ""));
    if (!isNaN(n) && n > 0 && !loanAmount) setLoanAmount(String(n * 3));
  };

  const handleCalculate = () => {
    setError("");
    setResults(null);
    const salaryNum = parseFloat(monthlySalary.replace(/,/g, ""));
    const loanNum = parseFloat(loanAmount.replace(/,/g, ""));
    const rateNum = parseFloat(annualRate);
    if (!monthlySalary || isNaN(salaryNum) || salaryNum <= 0) { setError("Introduce un salario mensual válido."); return; }
    if (!loanAmount || isNaN(loanNum) || loanNum <= 0) { setError("Introduce un monto de préstamo válido."); return; }
    if (isNaN(rateNum) || rateNum <= 0) { setError("Introduce una tasa de interés válida."); return; }

    const monthlyRate = rateNum / 100 / 12;
    const n = termMonths;
    const monthlyPayment = monthlyRate === 0
      ? loanNum / n
      : (loanNum * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - loanNum;
    const salaryPercentage = (monthlyPayment / salaryNum) * 100;

    let balance = loanNum;
    const rows: AmortRow[] = [];
    for (let m = 1; m <= n; m++) {
      const interest = balance * monthlyRate;
      const principal = monthlyPayment - interest;
      balance = Math.max(0, balance - principal);
      rows.push({ month: m, payment: monthlyPayment, principal, interest, balance });
    }

    setResults({ monthlyPayment, salaryPercentage, totalPayment, totalInterest, rows, exceedsThreshold: salaryPercentage > 30 });
  };

  const countryData = COUNTRIES[country];
  const displayRows = results
    ? results.rows.length <= 7 ? results.rows : [...results.rows.slice(0, 6), results.rows[results.rows.length - 1]]
    : [];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">País</label>
          <select value={country} onChange={(e) => handleCountryChange(e.target.value as CountryKey)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {(Object.keys(COUNTRIES) as CountryKey[]).map((key) => (
              <option key={key} value={key}>{COUNTRIES[key].label} ({COUNTRIES[key].currency})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Salario mensual neto ({countryData.currency})</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{countryData.symbol}</span>
            <input type="number" min="0" value={monthlySalary} onChange={(e) => handleSalaryChange(e.target.value)}
              placeholder="Ej: 20000"
              className="w-full border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Monto solicitado ({countryData.currency})</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{countryData.symbol}</span>
            <input type="number" min="0" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Ej: 60000"
              className="w-full border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Por defecto 3× tu salario mensual.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tasa de interés anual (%)</label>
          <div className="relative">
            <input type="number" min="0" step="0.1" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 pr-8 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Tasa referencial para {countryData.label}. Puedes modificarla.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Plazo</label>
          <select value={termMonths} onChange={(e) => setTermMonths(Number(e.target.value))}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {TERM_OPTIONS.map((t) => (
              <option key={t} value={t}>{t} meses</option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

        <button onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors">
          Calcular cuota mensual
        </button>
      </div>

      {results && (
        <div className="space-y-4">
          {countryData.highInflation && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Nota:</strong> Las tasas para {countryData.label} son aproximadas.
            </div>
          )}
          {results.exceedsThreshold && (
            <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-sm text-red-700 font-medium">
              Precaución: la cuota supera el 30% de tu salario. Esto puede comprometer tu estabilidad financiera.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-blue-200 p-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Cuota mensual</p>
              <p className="text-2xl font-bold text-blue-600">{fmt(results.monthlyPayment, countryData.currency, countryData.symbol)}</p>
              <p className={`text-xs mt-1 font-medium ${results.exceedsThreshold ? "text-red-500" : "text-slate-500"}`}>
                {results.salaryPercentage.toFixed(1)}% de tu salario mensual
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Total a pagar</p>
              <p className="text-2xl font-bold text-slate-700">{fmt(results.totalPayment, countryData.currency, countryData.symbol)}</p>
              <p className="text-xs text-slate-400 mt-1">Capital + intereses en {termMonths} meses</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-sm font-medium text-slate-600 mb-1">Total de intereses pagados</p>
            <p className="text-2xl font-bold text-orange-500">{fmt(results.totalInterest, countryData.currency, countryData.symbol)}</p>
            <p className="text-xs text-slate-400 mt-1">Coste financiero total a una tasa de {annualRate}% anual.</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">Tabla de amortización</h3>
              {results.rows.length > 7 && <p className="text-xs text-slate-400 mt-0.5">Primeros 6 meses y el último.</p>}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    <th className="px-4 py-3">Mes</th>
                    <th className="px-4 py-3">Cuota</th>
                    <th className="px-4 py-3">Capital</th>
                    <th className="px-4 py-3">Intereses</th>
                    <th className="px-4 py-3">Saldo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {displayRows.map((row, idx) => {
                    const isLast = results.rows.length > 7 && idx === displayRows.length - 1;
                    return (
                      <>
                        {isLast && (
                          <tr key="ellipsis">
                            <td colSpan={5} className="px-4 py-2 text-center text-slate-300 text-xs tracking-widest">· · ·</td>
                          </tr>
                        )}
                        <tr key={row.month} className={isLast ? "bg-slate-50 font-semibold" : "hover:bg-slate-50"}>
                          <td className="px-4 py-3 text-slate-700">{row.month}</td>
                          <td className="px-4 py-3 text-slate-700">{fmt(row.payment, countryData.currency, countryData.symbol)}</td>
                          <td className="px-4 py-3 text-green-600">{fmt(row.principal, countryData.currency, countryData.symbol)}</td>
                          <td className="px-4 py-3 text-orange-500">{fmt(row.interest, countryData.currency, countryData.symbol)}</td>
                          <td className="px-4 py-3 text-slate-600">{fmt(row.balance, countryData.currency, countryData.symbol)}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
