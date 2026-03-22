"use client";

import { useState } from "react";

interface Destination {
  name: string;
  costIndex: number; // relative to NYC=100
  avgRent: number;   // USD/month 1 bedroom city center
  visaMonths: number; // max stay on digital nomad / tourist visa
  hasNomadVisa: boolean;
  taxRate: number;   // rough income tax for non-residents
}

const DESTINATIONS: Record<string, Destination> = {
  mexico: { name: "México (CDMX)", costIndex: 38, avgRent: 900, visaMonths: 6, hasNomadVisa: false, taxRate: 0 },
  colombia: { name: "Colombia (Medellín)", costIndex: 36, avgRent: 600, visaMonths: 3, hasNomadVisa: true, taxRate: 0 },
  espana: { name: "España (Barcelona)", costIndex: 69, avgRent: 1600, visaMonths: 12, hasNomadVisa: true, taxRate: 24 },
  argentina: { name: "Argentina (Buenos Aires)", costIndex: 30, avgRent: 500, visaMonths: 3, hasNomadVisa: false, taxRate: 0 },
  chile: { name: "Chile (Santiago)", costIndex: 52, avgRent: 900, visaMonths: 3, hasNomadVisa: true, taxRate: 0 },
  peru: { name: "Perú (Lima)", costIndex: 32, avgRent: 600, visaMonths: 3, hasNomadVisa: false, taxRate: 0 },
  portugal: { name: "Portugal (Lisboa)", costIndex: 62, avgRent: 1500, visaMonths: 12, hasNomadVisa: true, taxRate: 20 },
  costarica: { name: "Costa Rica (San José)", costIndex: 51, avgRent: 800, visaMonths: 3, hasNomadVisa: true, taxRate: 0 },
};

const USD_BASE_MONTHLY = 3000; // reference cost of living in NYC

interface Results {
  estimatedMonthlyCost: number;
  savingsVsHome: number;
  savingsPercent: number;
  breakdown: { label: string; amount: number }[];
  runwayMonths: number;
}

export default function NomadaDigitalCalculator() {
  const [destination, setDestination] = useState("mexico");
  const [income, setIncome] = useState("");
  const [savings, setSavings] = useState("");
  const [homeCost, setHomeCost] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResults(null);
    const incomeNum = parseFloat(income.replace(/,/g, ""));
    const savingsNum = parseFloat(savings.replace(/,/g, "")) || 0;
    const homeCostNum = parseFloat(homeCost.replace(/,/g, ""));

    if (!income || isNaN(incomeNum) || incomeNum <= 0) { setError("Introduce tus ingresos mensuales en USD."); return; }
    if (!homeCost || isNaN(homeCostNum) || homeCostNum <= 0) { setError("Introduce tu coste de vida mensual actual en USD."); return; }

    const dest = DESTINATIONS[destination];
    const costMultiplier = dest.costIndex / 100;
    const base = USD_BASE_MONTHLY * costMultiplier;
    const rentEstimate = dest.avgRent;
    const foodEstimate = base * 0.25;
    const transportEstimate = base * 0.08;
    const otherEstimate = base * 0.15;
    const estimatedMonthlyCost = rentEstimate + foodEstimate + transportEstimate + otherEstimate;

    const savingsVsHome = homeCostNum - estimatedMonthlyCost;
    const savingsPercent = (savingsVsHome / homeCostNum) * 100;
    const runwayMonths = savingsNum > 0 ? Math.floor(savingsNum / estimatedMonthlyCost) : 0;

    setResults({
      estimatedMonthlyCost,
      savingsVsHome,
      savingsPercent,
      breakdown: [
        { label: "Alquiler (1 habitación)", amount: rentEstimate },
        { label: "Alimentación", amount: foodEstimate },
        { label: "Transporte", amount: transportEstimate },
        { label: "Otros gastos", amount: otherEstimate },
      ],
      runwayMonths,
    });
  };

  const dest = DESTINATIONS[destination];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Destino</label>
          <select value={destination} onChange={(e) => { setDestination(e.target.value); setResults(null); }}
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {Object.entries(DESTINATIONS).map(([key, d]) => (
              <option key={key} value={key}>{d.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ingresos mensuales (USD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input type="number" min="0" value={income} onChange={(e) => setIncome(e.target.value)}
                placeholder="Ej: 3000"
                className="w-full border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Coste de vida actual (USD/mes)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input type="number" min="0" value={homeCost} onChange={(e) => setHomeCost(e.target.value)}
                placeholder="Ej: 2500"
                className="w-full border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Ahorros actuales (USD) — opcional</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
            <input type="number" min="0" value={savings} onChange={(e) => setSavings(e.target.value)}
              placeholder="Ej: 10000"
              className="w-full border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Para calcular cuántos meses podrías vivir sin ingresos.</p>
        </div>

        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

        <button onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors">
          Calcular viabilidad
        </button>
      </div>

      {/* Destination info card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Índice de coste</p>
          <p className="font-bold text-slate-800">{dest.costIndex}/100</p>
          <p className="text-xs text-slate-400">vs NYC=100</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Alquiler ref.</p>
          <p className="font-bold text-slate-800">${dest.avgRent}/mes</p>
          <p className="text-xs text-slate-400">1 hab. centro</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Visa nómada</p>
          <p className={`font-bold ${dest.hasNomadVisa ? "text-emerald-600" : "text-slate-500"}`}>
            {dest.hasNomadVisa ? "Disponible" : "No disponible"}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Estancia turista</p>
          <p className="font-bold text-slate-800">{dest.visaMonths} meses</p>
        </div>
      </div>

      {results && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-blue-200 p-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Coste estimado en {dest.name}</p>
              <p className="text-2xl font-bold text-blue-600">${results.estimatedMonthlyCost.toFixed(0)}/mes</p>
              <p className="text-xs text-slate-400 mt-1">Estimación para estilo de vida local</p>
            </div>
            <div className={`bg-white rounded-xl border p-5 ${results.savingsVsHome >= 0 ? "border-emerald-200" : "border-red-200"}`}>
              <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${results.savingsVsHome >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                {results.savingsVsHome >= 0 ? "Ahorro mensual" : "Coste adicional"}
              </p>
              <p className={`text-2xl font-bold ${results.savingsVsHome >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                ${Math.abs(results.savingsVsHome).toFixed(0)}/mes
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {results.savingsPercent >= 0 ? "Ahorras" : "Gastas"} un {Math.abs(results.savingsPercent).toFixed(0)}% {results.savingsPercent >= 0 ? "menos" : "más"}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">Desglose estimado</h3>
            </div>
            <div className="divide-y divide-slate-100 text-sm">
              {results.breakdown.map((item) => (
                <div key={item.label} className="flex justify-between items-center px-5 py-3">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-semibold text-slate-800">${item.amount.toFixed(0)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center px-5 py-3 bg-slate-50 font-bold">
                <span className="text-slate-800">Total mensual</span>
                <span>${results.estimatedMonthlyCost.toFixed(0)}</span>
              </div>
            </div>
          </div>

          {results.runwayMonths > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-amber-800 mb-1">Runway con tus ahorros</p>
              <p className="text-2xl font-bold text-amber-700">{results.runwayMonths} meses</p>
              <p className="text-xs text-slate-500 mt-1">Podrías vivir en {dest.name} sin ingresos durante {results.runwayMonths} meses.</p>
            </div>
          )}

          {dest.hasNomadVisa && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
              <strong>Visa de nómada digital disponible</strong> — {dest.name} tiene un programa de visa especial para trabajadores remotos.
              Consulta los requisitos específicos en el consulado o sitio oficial de inmigración.
            </div>
          )}

          <p className="text-xs text-slate-400 leading-relaxed">
            Estimaciones basadas en datos de coste de vida promedio. Los precios reales varían según barrio, estilo de vida y temporada.
            No incluye seguros de salud, impuestos de tu país de origen ni gastos de instalación.
          </p>
        </div>
      )}
    </div>
  );
}
