"use client";

import { useState } from "react";

interface DeclaracionEstimatorProps {
  label: string;
  currency: string;
  symbol: string;
  threshold: number;
  thresholdLabel: string;
  obligadoText: string;
  noObligadoText: string;
}

export default function DeclaracionEstimator({
  label,
  currency,
  symbol,
  threshold,
  thresholdLabel,
  obligadoText,
  noObligadoText,
}: DeclaracionEstimatorProps) {
  const [ingresos, setIngresos] = useState(0);
  const [checked, setChecked] = useState(false);

  const obligado = ingresos > threshold;

  function handleCheck() {
    setChecked(true);
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-4">
        <p className="font-bold text-slate-800">¿Tengo que declarar?</p>
        <p className="text-xs text-slate-500 mt-0.5">Estimación rápida basada en el umbral de ingresos</p>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
              {symbol}
            </span>
            <input
              type="number"
              min={0}
              step="1000"
              value={ingresos === 0 ? "" : ingresos}
              placeholder="0"
              onChange={(e) => {
                setIngresos(parseFloat(e.target.value) || 0);
                setChecked(false);
              }}
              className="w-full border border-slate-300 rounded-lg pl-7 pr-16 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
              {currency}
            </span>
          </div>
        </div>

        <button
          onClick={handleCheck}
          disabled={ingresos <= 0}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
        >
          Verificar obligación
        </button>

        {checked && ingresos > 0 && (
          <div
            className={`rounded-xl p-4 border ${
              obligado
                ? "bg-red-50 border-red-200"
                : "bg-green-50 border-green-200"
            }`}
          >
            <p className={`font-bold text-base mb-1 ${obligado ? "text-red-700" : "text-green-700"}`}>
              {obligado ? "Probablemente debes declarar" : "Probablemente no estás obligado"}
            </p>
            <p className={`text-sm ${obligado ? "text-red-600" : "text-green-600"}`}>
              {obligado ? obligadoText : noObligadoText}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Umbral orientativo: {thresholdLabel}. Consulta las condiciones exactas con un asesor fiscal o en el sitio oficial del organismo tributario.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
