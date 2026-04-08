"use client";

import { useState } from "react";
import Link from "next/link";
import { calculateDeclaracionRenta } from "@/lib/calculations/spain-renta";

function fmt(n: number): string {
  return n.toLocaleString("es-ES", { maximumFractionDigits: 0 });
}

export default function DeclaracionRentaRapida() {
  const [salario, setSalario] = useState(0);
  const [retenido, setRetenido] = useState(0);
  const [situacion, setSituacion] = useState<"soltero" | "casado_con" | "casado_sin">("soltero");
  const [hijos, setHijos] = useState(0);

  const result =
    salario > 0
      ? calculateDeclaracionRenta({
          salarioBruto: salario,
          irpfRetenido: retenido,
          ingresosAlquiler: 0,
          gastosAlquiler: 0,
          dividendos: 0,
          intereses: 0,
          gananciasPatrimoniales: 0,
          situacionFamiliar: situacion,
          numHijos: hijos,
          aportacionPlanPensiones: 0,
          hipotecaPrevia2013: false,
          cuotaHipotecaAnual: 0,
          donaciones: 0,
        })
      : null;

  const isDevolver = result?.aDevolver === true;
  const isPagar = result?.aDevolver === false;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <p className="font-bold text-white text-sm">Cálculo rápido — Renta 2025</p>
        <p className="text-blue-200 text-xs mt-0.5">Solo los datos esenciales. Sin registro.</p>
      </div>

      <div className="p-5 space-y-4">
        {/* Salario */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
            Salario bruto anual
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              step={500}
              value={salario || ""}
              placeholder="Ej: 28000"
              onChange={(e) => setSalario(parseFloat(e.target.value) || 0)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">€</span>
          </div>
        </div>

        {/* IRPF retenido */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
            IRPF retenido por tu empresa en 2025
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              step={100}
              value={retenido || ""}
              placeholder="Ej: 4200"
              onChange={(e) => setRetenido(parseFloat(e.target.value) || 0)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">€</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Lo encontrarás en el certificado de retenciones de tu empresa</p>
        </div>

        {/* Situación + hijos en una fila */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Estado civil
            </label>
            <select
              value={situacion}
              onChange={(e) => setSituacion(e.target.value as typeof situacion)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="soltero">Soltero/a</option>
              <option value="casado_con">Casado/a (pareja con ingresos)</option>
              <option value="casado_sin">Casado/a (pareja sin ingresos)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Hijos a cargo
            </label>
            <select
              value={hijos}
              onChange={(e) => setHijos(parseInt(e.target.value))}
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n === 4 ? "4 o más" : n}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultado inmediato */}
        {result && (
          <div className={`rounded-xl p-4 border-2 text-center transition-all ${
            isDevolver
              ? "bg-green-50 border-green-300"
              : isPagar
              ? "bg-red-50 border-red-300"
              : "bg-slate-50 border-slate-200"
          }`}>
            <p className={`text-3xl font-extrabold ${isDevolver ? "text-green-700" : isPagar ? "text-red-700" : "text-slate-700"}`}>
              {fmt(result.importe)} €
            </p>
            <p className={`text-sm font-bold mt-1 uppercase tracking-wide ${isDevolver ? "text-green-600" : isPagar ? "text-red-600" : "text-slate-500"}`}>
              {isDevolver ? "✅ A devolver por Hacienda" : isPagar ? "⚠️ A pagar a Hacienda" : "Resultado: 0 €"}
            </p>
            <p className="text-xs text-slate-400 mt-2">Estimación orientativa · Sin deducciones adicionales</p>
          </div>
        )}

        {!result && salario === 0 && (
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-center">
            <p className="text-sm text-slate-400">Introduce tu salario para ver el resultado al instante</p>
          </div>
        )}

        {/* CTA calculadora completa */}
        <Link
          href="/espana/declaracion-renta-2025"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
        >
          Calculadora completa con deducciones →
        </Link>
      </div>
    </div>
  );
}
