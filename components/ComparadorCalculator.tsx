"use client";

import { useState } from "react";
import {
  calculateFiniquito,
  calculateLiquidacion as calculateLiquidacionMX,
} from "@/lib/calculations/mexico";
import {
  calculateLiquidacion as calculateLiquidacionCO,
  calculateVacaciones as calculateVacacionesCO,
  calculateCesantias,
} from "@/lib/calculations/colombia";
import {
  calculateFiniquito as calculateFiniquitoES,
  calculateDespidoImprocedente,
} from "@/lib/calculations/spain";
import {
  calculateSAC,
  calculateVacaciones as calculateVacacionesAR,
  calculateLiquidacionFinal as calculateLiquidacionFinalAR,
} from "@/lib/calculations/argentina";
import {
  calculateFeriado,
  calculateGratificacion,
  calculateFiniquito as calculateFiniquitoCL,
} from "@/lib/calculations/chile";
import type { CalculationResult } from "@/lib/calculations/mexico";

type Props = {
  country: string;
  countryName: string;
  currency: string;
  currencySymbol: string;
};

function formatCurrencyLocal(amount: number, currency: string): string {
  try {
    const locales: Record<string, string> = {
      MXN: "es-MX", COP: "es-CO", EUR: "es-ES",
      ARS: "es-AR", CLP: "es-CL",
    };
    return new Intl.NumberFormat(locales[currency] ?? "es", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "COP" || currency === "ARS" || currency === "CLP" ? 0 : 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(0)} ${currency}`;
  }
}

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

function calcularRenuncia(
  country: string,
  salary: number,
  startDate: Date,
  endDate: Date
): CalculationResult | null {
  switch (country) {
    case "mexico":
      return calculateFiniquito(salary, startDate, endDate);
    case "espana":
      return calculateFiniquitoES(salary, startDate, endDate);
    case "argentina": {
      const sac = calculateSAC(salary, startDate, endDate);
      const vac = calculateVacacionesAR(salary, startDate, endDate);
      return {
        total: sac.total + vac.total,
        breakdown: [
          { concept: "SAC / Aguinaldo proporcional", amount: sac.total },
          { concept: "Vacaciones proporcionales", amount: vac.total },
        ],
        currency: "ARS",
      };
    }
    case "colombia": {
      const vac = calculateVacacionesCO(salary, startDate, endDate);
      const ces = calculateCesantias(salary, startDate, endDate);
      return {
        total: vac.total + ces.total,
        breakdown: [
          { concept: "Vacaciones proporcionales", amount: vac.total },
          { concept: "Cesantías proporcionales", amount: ces.total },
        ],
        currency: "COP",
      };
    }
    case "chile": {
      const feriado = calculateFeriado(salary, startDate, endDate);
      const grat = calculateGratificacion(salary, startDate, endDate);
      return {
        total: feriado.total + grat.total,
        breakdown: [
          { concept: "Feriado legal proporcional", amount: feriado.total },
          { concept: "Gratificación proporcional", amount: grat.total },
        ],
        currency: "CLP",
      };
    }
    default:
      return null;
  }
}

function calcularDespido(
  country: string,
  salary: number,
  startDate: Date,
  endDate: Date
): CalculationResult | null {
  switch (country) {
    case "mexico":
      return calculateLiquidacionMX(salary, startDate, endDate);
    case "espana":
      return calculateDespidoImprocedente(salary, startDate, endDate);
    case "argentina":
      return calculateLiquidacionFinalAR(salary, startDate, endDate);
    case "colombia":
      return calculateLiquidacionCO(salary, startDate, endDate);
    case "chile":
      return calculateFiniquitoCL(salary, startDate, endDate);
    default:
      return null;
  }
}

const labelsByCountry: Record<string, { renuncia: string; despido: string }> = {
  mexico: { renuncia: "Si renuncias (finiquito)", despido: "Si te despiden (liquidación)" },
  espana: { renuncia: "Si renuncias (finiquito)", despido: "Si te despiden (despido improcedente)" },
  argentina: { renuncia: "Si renuncias (SAC + vacaciones)", despido: "Si te despiden (liquidación LCT)" },
  colombia: { renuncia: "Si renuncias (vacaciones + cesantías)", despido: "Si te despiden (liquidación)" },
  chile: { renuncia: "Si renuncias (feriado + gratificación)", despido: "Si te despiden (finiquito)" },
};

export default function ComparadorCalculator({ country, countryName, currency, currencySymbol }: Props) {
  const [salary, setSalary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(getTodayString());
  const [results, setResults] = useState<{ renuncia: CalculationResult | null; despido: CalculationResult | null } | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const sal = parseFloat(salary);
    if (!sal || sal <= 0) { setError("Ingresa un salario válido."); return; }
    if (!startDate) { setError("Ingresa la fecha de inicio."); return; }

    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");
    if (start >= end) { setError("La fecha de inicio debe ser anterior a la fecha de fin."); return; }

    const renuncia = calcularRenuncia(country, sal, start, end);
    const despido = calcularDespido(country, sal, start, end);
    setResults({ renuncia, despido });
  }

  const labels = labelsByCountry[country] ?? { renuncia: "Si renuncias", despido: "Si te despiden" };

  return (
    <div className="space-y-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Salario mensual ({currencySymbol})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{currencySymbol}</span>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Ej. 15000"
              className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Fecha de inicio</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Fecha de fin</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Comparar escenarios
        </button>
      </form>

      {/* Results */}
      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Renuncia */}
          <div className="rounded-xl overflow-hidden border border-amber-200">
            <div className="bg-amber-500 text-white p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-100 mb-1">Escenario A</p>
              <p className="font-bold text-sm">{labels.renuncia}</p>
              {results.renuncia && (
                <p className="text-3xl font-black mt-2">
                  {formatCurrencyLocal(results.renuncia.total, currency)}
                </p>
              )}
            </div>
            {results.renuncia && (
              <div className="bg-white p-4">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {results.renuncia.breakdown.filter(b => b.amount > 0).map((item, i) => (
                      <tr key={i}>
                        <td className="py-1.5 text-slate-600 pr-2 text-xs">{item.concept}</td>
                        <td className="py-1.5 text-right font-medium text-slate-800 text-xs">
                          {formatCurrencyLocal(item.amount, currency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Despido */}
          <div className="rounded-xl overflow-hidden border border-emerald-200">
            <div className="bg-emerald-600 text-white p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100 mb-1">Escenario B</p>
              <p className="font-bold text-sm">{labels.despido}</p>
              {results.despido && (
                <p className="text-3xl font-black mt-2">
                  {formatCurrencyLocal(results.despido.total, currency)}
                </p>
              )}
            </div>
            {results.despido && (
              <div className="bg-white p-4">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {results.despido.breakdown.filter(b => b.amount > 0).map((item, i) => (
                      <tr key={i}>
                        <td className="py-1.5 text-slate-600 pr-2 text-xs">{item.concept}</td>
                        <td className="py-1.5 text-right font-medium text-slate-800 text-xs">
                          {formatCurrencyLocal(item.amount, currency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Diferencia */}
      {results?.renuncia && results?.despido && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-600">
            Diferencia: si te despiden recibes{" "}
            <span className="font-bold text-emerald-700">
              {formatCurrencyLocal(Math.abs(results.despido.total - results.renuncia.total), currency)} más
            </span>{" "}
            que si renuncias
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Calculo orientativo. Consulta con un asesor laboral para tu caso especifico.
          </p>
        </div>
      )}
    </div>
  );
}
