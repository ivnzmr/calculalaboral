"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CountryData = {
  name: string;
  currency: string;
  symbol: string;
};

type OfertaInputs = {
  empresa: string;
  salarioBruto: string;
  pais: string;
  diasVacaciones: string;
  diasRemoto: string;
  bonusMeses: string;
  transporte: string;
  seguroSalud: boolean;
  horasSemana: string;
};

type OfertaResult = {
  salarioNeto: number;
  tarifaHora: number;
  compensacionAnualTotal: number;
  valorVacaciones: number;
  valorSeguroSalud: number;
  scoreTotal: number;
  pais: CountryData;
};

// ---------------------------------------------------------------------------
// Country data
// ---------------------------------------------------------------------------

const countryData: Record<string, CountryData> = {
  mexico: { name: "México", currency: "MXN", symbol: "$" },
  colombia: { name: "Colombia", currency: "COP", symbol: "$" },
  espana: { name: "España", currency: "EUR", symbol: "€" },
  argentina: { name: "Argentina", currency: "ARS", symbol: "$" },
  chile: { name: "Chile", currency: "CLP", symbol: "$" },
  peru: { name: "Perú", currency: "PEN", symbol: "S/" },
  ecuador: { name: "Ecuador", currency: "USD", symbol: "$" },
  venezuela: { name: "Venezuela", currency: "VES", symbol: "Bs." },
  "costa-rica": { name: "Costa Rica", currency: "CRC", symbol: "₡" },
  bolivia: { name: "Bolivia", currency: "BOB", symbol: "Bs." },
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

function fmt(n: number, c: CountryData): string {
  return formatCurrency(n, c.currency, c.symbol);
}

function calculateOferta(inputs: OfertaInputs): OfertaResult | null {
  const salarioBruto = parseFloat(inputs.salarioBruto);
  if (!salarioBruto || salarioBruto <= 0) return null;

  const diasVacaciones = parseFloat(inputs.diasVacaciones) || 15;
  const diasRemoto = parseFloat(inputs.diasRemoto) || 0;
  const bonusMeses = parseFloat(inputs.bonusMeses) || 1;
  const transporte = parseFloat(inputs.transporte) || 0;
  const horasSemana = parseFloat(inputs.horasSemana) || 40;
  const pais = countryData[inputs.pais];

  // Net salary approximation (gross × 0.82)
  const salarioNeto = salarioBruto * 0.82;

  // Hourly rate: net monthly / (hours/week × 4.33 weeks/month)
  const tarifaHora = salarioNeto / (horasSemana * 4.33);

  // Vacation value: hourly rate × (hours/week / 5 days) × vacation days
  const horasDia = horasSemana / 5;
  const valorVacaciones = tarifaHora * horasDia * diasVacaciones;

  // Health insurance value: estimated flat $50/month × 12 if included
  const valorSeguroSalud = inputs.seguroSalud ? 50 * 12 : 0;

  // Annual total compensation
  const compensacionAnualTotal =
    salarioNeto * 12 +
    bonusMeses * salarioNeto +
    transporte * 12 +
    valorVacaciones +
    valorSeguroSalud;

  // Weighted score
  // 50% salary (net annual), 20% vacation days, 15% remote days, 15% benefits
  const maxSalary = 1_000_000; // normalisation ceiling (arbitrary but consistent across both offers)
  const scoreSalario = Math.min(salarioNeto * 12, maxSalary) / maxSalary;
  const scoreVacaciones = Math.min(diasVacaciones, 30) / 30;
  const scoreRemoto = Math.min(diasRemoto, 5) / 5;
  const scoreBeneficios =
    (Math.min(bonusMeses, 3) / 3) * 0.5 +
    (inputs.seguroSalud ? 1 : 0) * 0.3 +
    (Math.min(transporte, salarioBruto * 0.2) / (salarioBruto * 0.2)) * 0.2;

  const scoreTotal =
    scoreSalario * 50 +
    scoreVacaciones * 20 +
    scoreRemoto * 15 +
    scoreBeneficios * 15;

  return {
    salarioNeto,
    tarifaHora,
    compensacionAnualTotal,
    valorVacaciones,
    valorSeguroSalud,
    scoreTotal,
    pais,
  };
}

// ---------------------------------------------------------------------------
// Default input state
// ---------------------------------------------------------------------------

const defaultInputs = (): OfertaInputs => ({
  empresa: "",
  salarioBruto: "",
  pais: "mexico",
  diasVacaciones: "15",
  diasRemoto: "0",
  bonusMeses: "1",
  transporte: "0",
  seguroSalud: false,
  horasSemana: "40",
});

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

type OfertaFormProps = {
  label: string;
  accentBorder: string;
  accentBg: string;
  accentText: string;
  inputs: OfertaInputs;
  onChange: (updated: OfertaInputs) => void;
};

function OfertaForm({
  label,
  accentBorder,
  accentBg,
  accentText,
  inputs,
  onChange,
}: OfertaFormProps) {
  const country = countryData[inputs.pais];

  function set<K extends keyof OfertaInputs>(key: K, value: OfertaInputs[K]) {
    onChange({ ...inputs, [key]: value });
  }

  return (
    <div className={`rounded-xl border-2 ${accentBorder} overflow-hidden`}>
      {/* Header */}
      <div className={`${accentBg} px-5 py-3`}>
        <p className={`text-xs font-bold uppercase tracking-wide ${accentText}`}>{label}</p>
      </div>

      <div className="bg-white p-5 space-y-4">
        {/* Company name */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Empresa (opcional)
          </label>
          <input
            type="text"
            value={inputs.empresa}
            onChange={(e) => set("empresa", e.target.value)}
            placeholder="Nombre de la empresa"
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">País</label>
          <select
            value={inputs.pais}
            onChange={(e) => set("pais", e.target.value)}
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Salario bruto mensual ({country.symbol})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              {country.symbol}
            </span>
            <input
              type="number"
              value={inputs.salarioBruto}
              onChange={(e) => set("salarioBruto", e.target.value)}
              placeholder="Ej. 30000"
              min="0"
              className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Vacation days */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Días vacaciones/año
            </label>
            <input
              type="number"
              value={inputs.diasVacaciones}
              onChange={(e) => set("diasVacaciones", e.target.value)}
              min="0"
              max="60"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remote days */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Días remoto/semana
            </label>
            <input
              type="number"
              value={inputs.diasRemoto}
              onChange={(e) => set("diasRemoto", e.target.value)}
              min="0"
              max="5"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bonus months */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Bono anual (meses extra)
            </label>
            <input
              type="number"
              value={inputs.bonusMeses}
              onChange={(e) => set("bonusMeses", e.target.value)}
              min="0"
              max="12"
              step="0.5"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Working hours */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Horas laborales/semana
            </label>
            <input
              type="number"
              value={inputs.horasSemana}
              onChange={(e) => set("horasSemana", e.target.value)}
              min="1"
              max="80"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Transport allowance */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Auxilio de transporte / mes ({country.symbol}, opcional)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              {country.symbol}
            </span>
            <input
              type="number"
              value={inputs.transporte}
              onChange={(e) => set("transporte", e.target.value)}
              placeholder="0"
              min="0"
              className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Health insurance toggle */}
        <div className="flex items-center justify-between py-1">
          <span className="text-xs font-medium text-slate-600">
            ¿Incluye seguro médico?
          </span>
          <button
            type="button"
            onClick={() => set("seguroSalud", !inputs.seguroSalud)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
              inputs.seguroSalud ? "bg-blue-600" : "bg-slate-200"
            }`}
            aria-pressed={inputs.seguroSalud}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                inputs.seguroSalud ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Comparison row helper
// ---------------------------------------------------------------------------

type CompareRowProps = {
  label: string;
  valueA: string;
  valueB: string;
  winnerA: boolean;
  winnerB: boolean;
};

function CompareRow({ label, valueA, valueB, winnerA, winnerB }: CompareRowProps) {
  return (
    <tr className="border-b border-slate-100 last:border-0">
      <td className="py-2.5 pr-3 text-xs text-slate-600 font-medium">{label}</td>
      <td
        className={`py-2.5 text-center text-sm font-semibold rounded-sm px-2 ${
          winnerA ? "text-amber-700 bg-amber-50" : "text-slate-700"
        }`}
      >
        {valueA}
      </td>
      <td
        className={`py-2.5 text-center text-sm font-semibold rounded-sm px-2 ${
          winnerB ? "text-emerald-700 bg-emerald-50" : "text-slate-700"
        }`}
      >
        {valueB}
      </td>
    </tr>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function ComparadorOfertas() {
  const [ofertaA, setOfertaA] = useState<OfertaInputs>(defaultInputs());
  const [ofertaB, setOfertaB] = useState<OfertaInputs>(defaultInputs());
  const [resultA, setResultA] = useState<OfertaResult | null>(null);
  const [resultB, setResultB] = useState<OfertaResult | null>(null);
  const [error, setError] = useState<string>("");

  function handleComparar(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const rA = calculateOferta(ofertaA);
    const rB = calculateOferta(ofertaB);

    if (!rA || !rB) {
      setError(
        "Introduce el salario bruto mensual en ambas ofertas para poder comparar."
      );
      return;
    }

    setResultA(rA);
    setResultB(rB);
  }

  // Determine winner
  const winner =
    resultA && resultB
      ? resultA.scoreTotal > resultB.scoreTotal
        ? "A"
        : resultB.scoreTotal > resultA.scoreTotal
        ? "B"
        : "empate"
      : null;

  const labelA = ofertaA.empresa.trim() || "Oferta A";
  const labelB = ofertaB.empresa.trim() || "Oferta B";

  function better(a: number, b: number): [boolean, boolean] {
    return [a > b, b > a];
  }

  return (
    <div className="space-y-6">
      {/* Two-column form */}
      <form onSubmit={handleComparar} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <OfertaForm
            label="Oferta A"
            accentBorder="border-amber-300"
            accentBg="bg-amber-50"
            accentText="text-amber-700"
            inputs={ofertaA}
            onChange={setOfertaA}
          />
          <OfertaForm
            label="Oferta B"
            accentBorder="border-emerald-300"
            accentBg="bg-emerald-50"
            accentText="text-emerald-700"
            inputs={ofertaB}
            onChange={setOfertaB}
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Comparar ofertas
        </button>
      </form>

      {/* Results */}
      {resultA && resultB && (
        <div className="space-y-4">
          {/* Winner banner */}
          {winner !== "empate" ? (
            <div
              className={`rounded-xl p-4 text-center border ${
                winner === "A"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-emerald-50 border-emerald-200"
              }`}
            >
              <p
                className={`font-bold text-lg ${
                  winner === "A" ? "text-amber-800" : "text-emerald-800"
                }`}
              >
                {winner === "A" ? labelA : labelB} ofrece mayor compensación total estimada
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Diferencia en compensación anual:{" "}
                <span className="font-semibold">
                  {winner === "A"
                    ? fmt(
                        resultA.compensacionAnualTotal - resultB.compensacionAnualTotal,
                        resultA.pais
                      )
                    : fmt(
                        resultB.compensacionAnualTotal - resultA.compensacionAnualTotal,
                        resultB.pais
                      )}{" "}
                  más
                </span>
              </p>
            </div>
          ) : (
            <div className="rounded-xl p-4 text-center border border-slate-200 bg-slate-50">
              <p className="font-bold text-lg text-slate-700">
                Ambas ofertas tienen compensación equivalente
              </p>
            </div>
          )}

          {/* Comparison table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
              <div className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Concepto
              </div>
              <div className="py-3 px-3 text-center text-xs font-bold text-amber-700 uppercase tracking-wide">
                {labelA}
              </div>
              <div className="py-3 px-3 text-center text-xs font-bold text-emerald-700 uppercase tracking-wide">
                {labelB}
              </div>
            </div>

            <div className="px-4 py-1">
              <table className="w-full">
                <tbody>
                  {(() => {
                    const [wNA, wNB] = better(resultA.salarioNeto, resultB.salarioNeto);
                    return (
                      <CompareRow
                        label="Salario neto estimado / mes"
                        valueA={fmt(resultA.salarioNeto, resultA.pais)}
                        valueB={fmt(resultB.salarioNeto, resultB.pais)}
                        winnerA={wNA}
                        winnerB={wNB}
                      />
                    );
                  })()}
                  {(() => {
                    const [wA, wB] = better(resultA.tarifaHora, resultB.tarifaHora);
                    return (
                      <CompareRow
                        label="Tarifa efectiva / hora"
                        valueA={fmt(resultA.tarifaHora, resultA.pais)}
                        valueB={fmt(resultB.tarifaHora, resultB.pais)}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                  {(() => {
                    const [wA, wB] = better(
                      resultA.compensacionAnualTotal,
                      resultB.compensacionAnualTotal
                    );
                    return (
                      <CompareRow
                        label="Compensación anual total"
                        valueA={fmt(resultA.compensacionAnualTotal, resultA.pais)}
                        valueB={fmt(resultB.compensacionAnualTotal, resultB.pais)}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                  {(() => {
                    const vA = parseFloat(ofertaA.diasVacaciones) || 0;
                    const vB = parseFloat(ofertaB.diasVacaciones) || 0;
                    const [wA, wB] = better(vA, vB);
                    return (
                      <CompareRow
                        label="Días de vacaciones"
                        valueA={`${vA} días`}
                        valueB={`${vB} días`}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                  {(() => {
                    const [wA, wB] = better(resultA.valorVacaciones, resultB.valorVacaciones);
                    return (
                      <CompareRow
                        label="Valor económico vacaciones"
                        valueA={fmt(resultA.valorVacaciones, resultA.pais)}
                        valueB={fmt(resultB.valorVacaciones, resultB.pais)}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                  {(() => {
                    const rA = parseFloat(ofertaA.diasRemoto) || 0;
                    const rB = parseFloat(ofertaB.diasRemoto) || 0;
                    const [wA, wB] = better(rA, rB);
                    return (
                      <CompareRow
                        label="Días teletrabajo / semana"
                        valueA={`${rA} día${rA !== 1 ? "s" : ""}`}
                        valueB={`${rB} día${rB !== 1 ? "s" : ""}`}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                  {(() => {
                    const [wA, wB] = better(
                      resultA.valorSeguroSalud,
                      resultB.valorSeguroSalud
                    );
                    return (
                      <CompareRow
                        label="Seguro médico (valor est. anual)"
                        valueA={ofertaA.seguroSalud ? fmt(resultA.valorSeguroSalud, resultA.pais) : "No incluido"}
                        valueB={ofertaB.seguroSalud ? fmt(resultB.valorSeguroSalud, resultB.pais) : "No incluido"}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                  {(() => {
                    const [wA, wB] = better(resultA.scoreTotal, resultB.scoreTotal);
                    return (
                      <CompareRow
                        label="Puntuación total ponderada"
                        valueA={`${resultA.scoreTotal.toFixed(1)} / 100`}
                        valueB={`${resultB.scoreTotal.toFixed(1)} / 100`}
                        winnerA={wA}
                        winnerB={wB}
                      />
                    );
                  })()}
                </tbody>
              </table>
            </div>

            {/* Score weighting explanation */}
            <div className="px-4 py-3 bg-slate-50 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                <strong>Puntuación:</strong> 50% salario · 20% vacaciones · 15% teletrabajo · 15% beneficios
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs text-blue-800">
              <strong>Nota:</strong> Los cálculos son orientativos. El impuesto real depende de tu situación
              fiscal, deducciones personales y legislación aplicable en cada país. El salario neto se estima
              aplicando un 18% de retención aproximada (salario bruto × 0,82). Consulta con un asesor fiscal
              para obtener cifras exactas.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
