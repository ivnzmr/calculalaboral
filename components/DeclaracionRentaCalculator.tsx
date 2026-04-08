"use client";

import { useState } from "react";
import {
  calculateDeclaracionRenta,
  type RentaInput,
  type RentaDesglose,
} from "@/lib/calculations/spain-renta";

// ---------------------------------------------------------------------------
// Tipos internos
// ---------------------------------------------------------------------------

type Tab = "ingresos" | "personal" | "deducciones";

// ---------------------------------------------------------------------------
// Utilidades de formato
// ---------------------------------------------------------------------------

function fmt(n: number): string {
  return n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ---------------------------------------------------------------------------
// Panel de resultados
// ---------------------------------------------------------------------------

function ResultPanel({
  desglose,
  aDevolver,
  importe,
}: {
  desglose: RentaDesglose;
  aDevolver: boolean;
  importe: number;
}) {
  const resultColor = aDevolver
    ? "bg-green-50 border-green-200 text-green-800"
    : "bg-red-50 border-red-200 text-red-800";
  const badgeColor = aDevolver
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700";
  const resultLabel = aDevolver ? "A DEVOLVER" : "A PAGAR";

  const rows: { label: string; value: number; highlight?: boolean; negative?: boolean }[] = [
    { label: "Salario bruto", value: desglose.rendimientoNetoTrabajo + desglose.reduccionTrabajo + desglose.cotizacionSS + desglose.reduccionPlanPensiones },
    { label: "Cotización Seguridad Social", value: -desglose.cotizacionSS, negative: true },
    { label: "Reducción plan de pensiones", value: -desglose.reduccionPlanPensiones, negative: true },
    { label: "Reducción por trabajo", value: -desglose.reduccionTrabajo, negative: true },
    { label: "Rendimiento neto trabajo", value: desglose.rendimientoNetoTrabajo, highlight: true },
    ...(desglose.rendimientoNetoCapInmob !== 0
      ? [{ label: "Rendimiento neto capital inmobiliario", value: desglose.rendimientoNetoCapInmob }]
      : []),
    ...(desglose.baseImponibleAhorro > 0
      ? [{ label: "Base imponible del ahorro", value: desglose.baseImponibleAhorro }]
      : []),
    { label: "Base imponible general", value: desglose.baseImponibleGeneral, highlight: true },
    { label: "Mínimo personal y familiar", value: -desglose.minimoPersonalFamiliar, negative: true },
    { label: "Cuota íntegra (renta general)", value: desglose.cuotaIntegralGeneral },
    ...(desglose.cuotaIntegralAhorro > 0
      ? [{ label: "Cuota íntegra (renta ahorro)", value: desglose.cuotaIntegralAhorro }]
      : []),
    ...(desglose.deduccionHipoteca > 0
      ? [{ label: "Deducción hipoteca (pre-2013)", value: -desglose.deduccionHipoteca, negative: true }]
      : []),
    ...(desglose.deduccionDonaciones > 0
      ? [{ label: "Deducción donativos", value: -desglose.deduccionDonaciones, negative: true }]
      : []),
    { label: "Cuota líquida total", value: desglose.cuotaLiquidaTotal, highlight: true },
    { label: "IRPF ya retenido por la empresa", value: -desglose.irpfRetenido, negative: true },
  ];

  return (
    <div className="mt-6 space-y-4">
      {/* Badge resultado */}
      <div className={`border rounded-xl p-5 text-center ${resultColor}`}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-1 opacity-70">Resultado de tu declaración 2025</p>
        <p className={`text-4xl font-extrabold mb-1`}>{fmt(importe)} €</p>
        <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full ${badgeColor}`}>
          {resultLabel}
        </span>
      </div>

      {/* Desglose */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50">
          <p className="text-sm font-semibold text-slate-700">Desglose del cálculo</p>
        </div>
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-slate-100 ${row.highlight ? "bg-blue-50" : ""}`}>
                <td className="px-4 py-2 text-slate-600">{row.label}</td>
                <td className={`px-4 py-2 text-right font-mono font-semibold ${row.negative ? "text-red-600" : "text-slate-800"}`}>
                  {row.value < 0 || row.negative ? "−" : "+"} {fmt(Math.abs(row.value))} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-slate-400 leading-relaxed">
        Cálculo orientativo basado en la escala general estatal + autonómica media para el ejercicio 2025.
        No sustituye al borrador oficial de la AEAT. Consulta a un asesor fiscal para casos complejos
        (segunda actividad, rendimientos de actividades económicas, imputaciones de renta, etc.).
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Componente principal
// ---------------------------------------------------------------------------

const INITIAL_INPUT: RentaInput = {
  salarioBruto: 0,
  irpfRetenido: 0,
  ingresosAlquiler: 0,
  gastosAlquiler: 0,
  dividendos: 0,
  intereses: 0,
  gananciasPatrimoniales: 0,
  situacionFamiliar: "soltero",
  numHijos: 0,
  aportacionPlanPensiones: 0,
  hipotecaPrevia2013: false,
  cuotaHipotecaAnual: 0,
  donaciones: 0,
};

function NumericInput({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-slate-400 mb-1">{hint}</p>}
      <div className="relative">
        <input
          type="number"
          min={0}
          step="0.01"
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">€</span>
      </div>
    </div>
  );
}

export default function DeclaracionRentaCalculator() {
  const [input, setInput] = useState<RentaInput>(INITIAL_INPUT);
  const [activeTab, setActiveTab] = useState<Tab>("ingresos");
  const [result, setResult] = useState<ReturnType<typeof calculateDeclaracionRenta> | null>(null);

  function setField<K extends keyof RentaInput>(key: K, value: RentaInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  function handleCalcular() {
    setResult(calculateDeclaracionRenta(input));
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "ingresos", label: "1. Ingresos" },
    { key: "personal", label: "2. Personal" },
    { key: "deducciones", label: "3. Deducciones" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
        <h2 className="text-white font-bold text-lg">Calculadora Declaración de la Renta 2025</h2>
        <p className="text-blue-100 text-sm mt-1">Ejercicio 2025 · Campaña 2 abril – 30 junio 2026</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 text-sm font-medium py-3 px-2 transition-colors border-b-2 ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-700 bg-white"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6 space-y-4">
        {activeTab === "ingresos" && (
          <>
            <NumericInput
              label="Salario bruto anual"
              value={input.salarioBruto}
              onChange={(v) => setField("salarioBruto", v)}
              hint="Total de retribuciones brutas de tu nómina en 2025"
            />
            <NumericInput
              label="IRPF ya retenido por la empresa"
              value={input.irpfRetenido}
              onChange={(v) => setField("irpfRetenido", v)}
              hint="Suma de todas las retenciones de IRPF de tus nóminas 2025 (casilla 7 del certificado de retenciones)"
            />
            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Capital inmobiliario (alquiler)</p>
              <div className="grid grid-cols-2 gap-3">
                <NumericInput
                  label="Ingresos por alquiler"
                  value={input.ingresosAlquiler}
                  onChange={(v) => setField("ingresosAlquiler", v)}
                />
                <NumericInput
                  label="Gastos deducibles"
                  value={input.gastosAlquiler}
                  onChange={(v) => setField("gastosAlquiler", v)}
                  hint="IBI, comunidad, seguros, etc."
                />
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Capital mobiliario y ganancias (escala ahorro)</p>
              <div className="space-y-3">
                <NumericInput
                  label="Dividendos"
                  value={input.dividendos}
                  onChange={(v) => setField("dividendos", v)}
                />
                <NumericInput
                  label="Intereses de cuentas y depósitos"
                  value={input.intereses}
                  onChange={(v) => setField("intereses", v)}
                />
                <NumericInput
                  label="Ganancias patrimoniales (acciones, fondos…)"
                  value={input.gananciasPatrimoniales}
                  onChange={(v) => setField("gananciasPatrimoniales", v)}
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "personal" && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Situación familiar</label>
              <select
                value={input.situacionFamiliar}
                onChange={(e) =>
                  setField("situacionFamiliar", e.target.value as RentaInput["situacionFamiliar"])
                }
                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="soltero">Soltero/a o separado/a</option>
                <option value="casado_con">Casado/a (cónyuge con ingresos)</option>
                <option value="casado_sin">Casado/a (cónyuge sin ingresos o &lt;1.500€)</option>
              </select>
              {input.situacionFamiliar === "casado_sin" && (
                <p className="text-xs text-blue-600 mt-1">
                  Se aplica el mínimo por cónyuge: +3.400 € (Art. 57 LIRPF)
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Hijos a cargo menores de 25 años
              </label>
              <select
                value={input.numHijos}
                onChange={(e) => setField("numHijos", parseInt(e.target.value))}
                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n === 4 ? "4 o más" : n}
                    {n > 0 && ` (+${[0, 2400, 2700, 4000, 4500][n]} € mínimo)`}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {activeTab === "deducciones" && (
          <>
            <NumericInput
              label="Aportación a plan de pensiones"
              value={input.aportacionPlanPensiones}
              onChange={(v) => setField("aportacionPlanPensiones", v)}
              hint="Máximo deducible: 1.500 €/año (Art. 51.1 LIRPF)"
            />

            <div className="border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">Hipoteca contratada antes del 1/1/2013</p>
                  <p className="text-xs text-slate-400 mt-0.5">Deducción transitoria Art. 18ª LIRPF — 15% sobre máx. 9.040€</p>
                </div>
                <button
                  onClick={() => setField("hipotecaPrevia2013", !input.hipotecaPrevia2013)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    input.hipotecaPrevia2013 ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      input.hipotecaPrevia2013 ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              {input.hipotecaPrevia2013 && (
                <NumericInput
                  label="Cuotas pagadas en 2025 (capital + intereses)"
                  value={input.cuotaHipotecaAnual}
                  onChange={(v) => setField("cuotaHipotecaAnual", v)}
                  hint={`Deducción = ${Math.min(input.cuotaHipotecaAnual, 9040) * 0.15 > 0 ? (Math.min(input.cuotaHipotecaAnual, 9040) * 0.15).toFixed(2) : "0.00"} €`}
                />
              )}
            </div>

            <NumericInput
              label="Donativos a ONG y fundaciones (Ley 49/2002)"
              value={input.donaciones}
              onChange={(v) => setField("donaciones", v)}
              hint="Primeros 150€: 80% deducción · Resto: 40% deducción"
            />
          </>
        )}

        {/* Botón calcular */}
        <button
          onClick={handleCalcular}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm mt-2"
        >
          Calcular declaración
        </button>

        {/* Navegación entre tabs */}
        <div className="flex gap-2 pt-1">
          {activeTab !== "ingresos" && (
            <button
              onClick={() => setActiveTab(activeTab === "personal" ? "ingresos" : "personal")}
              className="flex-1 text-xs text-slate-500 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              ← Anterior
            </button>
          )}
          {activeTab !== "deducciones" && (
            <button
              onClick={() => setActiveTab(activeTab === "ingresos" ? "personal" : "deducciones")}
              className="flex-1 text-xs text-blue-600 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Siguiente →
            </button>
          )}
        </div>
      </div>

      {/* Resultados */}
      {result && (
        <div className="px-6 pb-6">
          <ResultPanel
            desglose={result.desglose}
            aDevolver={result.aDevolver}
            importe={result.importe}
          />
        </div>
      )}
    </div>
  );
}
