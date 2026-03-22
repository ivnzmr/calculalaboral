"use client";

import { useState } from "react";

type CountryData = {
  name: string;
  currency: string;
  symbol: string;
  diasLaborablesAnio: number;
  diasVacaciones: number;
  diasFestivos: number;
  ssPatronal: number; // % coste social del empleador sobre salario bruto
};

const countryData: Record<string, CountryData> = {
  mexico: {
    name: "México",
    currency: "MXN",
    symbol: "$",
    diasLaborablesAnio: 260,
    diasVacaciones: 12,
    diasFestivos: 7,
    ssPatronal: 0.35,
  },
  colombia: {
    name: "Colombia",
    currency: "COP",
    symbol: "$",
    diasLaborablesAnio: 252,
    diasVacaciones: 15,
    diasFestivos: 18,
    ssPatronal: 0.36,
  },
  espana: {
    name: "España",
    currency: "EUR",
    symbol: "€",
    diasLaborablesAnio: 251,
    diasVacaciones: 22,
    diasFestivos: 14,
    ssPatronal: 0.31,
  },
  argentina: {
    name: "Argentina",
    currency: "ARS",
    symbol: "$",
    diasLaborablesAnio: 250,
    diasVacaciones: 14,
    diasFestivos: 15,
    ssPatronal: 0.26,
  },
  chile: {
    name: "Chile",
    currency: "CLP",
    symbol: "$",
    diasLaborablesAnio: 251,
    diasVacaciones: 15,
    diasFestivos: 16,
    ssPatronal: 0.21,
  },
  peru: {
    name: "Perú",
    currency: "PEN",
    symbol: "S/",
    diasLaborablesAnio: 260,
    diasVacaciones: 30,
    diasFestivos: 12,
    ssPatronal: 0.21,
  },
  ecuador: {
    name: "Ecuador",
    currency: "USD",
    symbol: "$",
    diasLaborablesAnio: 253,
    diasVacaciones: 15,
    diasFestivos: 11,
    ssPatronal: 0.1215,
  },
  venezuela: {
    name: "Venezuela",
    currency: "VES",
    symbol: "Bs.",
    diasLaborablesAnio: 240,
    diasVacaciones: 15,
    diasFestivos: 15,
    ssPatronal: 0.14,
  },
  "costa-rica": {
    name: "Costa Rica",
    currency: "CRC",
    symbol: "₡",
    diasLaborablesAnio: 250,
    diasVacaciones: 14,
    diasFestivos: 9,
    ssPatronal: 0.26,
  },
  bolivia: {
    name: "Bolivia",
    currency: "BOB",
    symbol: "Bs.",
    diasLaborablesAnio: 250,
    diasVacaciones: 15,
    diasFestivos: 11,
    ssPatronal: 0.16,
  },
};

function formatCurrencyLocal(amount: number, currency: string, symbol: string): string {
  try {
    const locales: Record<string, string> = {
      MXN: "es-MX", COP: "es-CO", EUR: "es-ES", ARS: "es-AR",
      CLP: "es-CL", PEN: "es-PE", USD: "es-EC", VES: "es-VE",
      CRC: "es-CR", BOB: "es-BO",
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

export default function FreelanceCalculator() {
  const [selectedCountry, setSelectedCountry] = useState("mexico");
  const [salarioMensual, setSalarioMensual] = useState("");
  const [horasDia, setHorasDia] = useState("8");
  const [pctNoFacturable, setPctNoFacturable] = useState("20");
  const [pctMargen, setPctMargen] = useState("30");
  const [result, setResult] = useState<null | {
    tarifaMinima: number;
    tarifaRecomendada: number;
    horasFacturablesAnio: number;
    costeAnualEmpleador: number;
    salarioBrutoAnual: number;
  }>(null);
  const [error, setError] = useState("");

  const country = countryData[selectedCountry];

  function handleCalcular(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const sal = parseFloat(salarioMensual);
    if (!sal || sal <= 0) { setError("Ingresa un salario mensual válido."); return; }
    const horas = parseFloat(horasDia) || 8;
    const noFact = (parseFloat(pctNoFacturable) || 20) / 100;
    const margen = (parseFloat(pctMargen) || 30) / 100;

    // Días laborables reales del freelance (sin vacaciones ni festivos)
    const diasTrabajablesFreelance = country.diasLaborablesAnio - country.diasVacaciones - country.diasFestivos;

    // Horas totales trabajadas al año
    const horasTotalesAnio = diasTrabajablesFreelance * horas;

    // Horas facturables (descontando tiempo no facturable)
    const horasFacturablesAnio = horasTotalesAnio * (1 - noFact);

    // Coste anual que el empleador paga por este trabajador
    const salarioBrutoAnual = sal * 14; // incluye pagas extra en países con 14 pagas; para otros, aprox 12-14
    const costeAnualEmpleador = salarioBrutoAnual * (1 + country.ssPatronal);

    // Tarifa mínima = coste anual / horas facturables
    const tarifaMinima = costeAnualEmpleador / horasFacturablesAnio;

    // Tarifa recomendada con margen de ganancia
    const tarifaRecomendada = tarifaMinima * (1 + margen);

    setResult({ tarifaMinima, tarifaRecomendada, horasFacturablesAnio, costeAnualEmpleador, salarioBrutoAnual });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCalcular} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
        {/* País */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">País de referencia</label>
          <select
            value={selectedCountry}
            onChange={(e) => { setSelectedCountry(e.target.value); setResult(null); }}
            className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {Object.entries(countryData).map(([slug, c]) => (
              <option key={slug} value={slug}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Salario mensual */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Salario mensual en relación de dependencia ({country.symbol})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">{country.symbol}</span>
            <input
              type="number"
              value={salarioMensual}
              onChange={(e) => setSalarioMensual(e.target.value)}
              placeholder="Ej. 30000"
              className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">El salario que querrías ganar como si fueras empleado</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Horas/día */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Horas de trabajo/día</label>
            <input
              type="number"
              value={horasDia}
              onChange={(e) => setHorasDia(e.target.value)}
              min="1"
              max="16"
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* % no facturable */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">% tiempo no facturable</label>
            <div className="relative">
              <input
                type="number"
                value={pctNoFacturable}
                onChange={(e) => setPctNoFacturable(e.target.value)}
                min="0"
                max="80"
                className="w-full pr-8 px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Reuniones, admin, formación</p>
          </div>

          {/* % margen */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">% margen de ganancia</label>
            <div className="relative">
              <input
                type="number"
                value={pctMargen}
                onChange={(e) => setPctMargen(e.target.value)}
                min="0"
                max="200"
                className="w-full pr-8 px-3 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Beneficio sobre el coste</p>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Calcular mi tarifa freelance
        </button>
      </form>

      {/* Result */}
      {result && (
        <div className="space-y-4">
          {/* Main results */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <div className="bg-slate-700 text-white p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-300 mb-1">Tarifa mínima/hora</p>
                <p className="text-3xl font-black">
                  {formatCurrencyLocal(result.tarifaMinima, country.currency, country.symbol)}
                </p>
                <p className="text-xs text-slate-300 mt-1">Para cubrir costes</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-blue-200">
              <div className="bg-blue-600 text-white p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-blue-100 mb-1">Tarifa recomendada/hora</p>
                <p className="text-3xl font-black">
                  {formatCurrencyLocal(result.tarifaRecomendada, country.currency, country.symbol)}
                </p>
                <p className="text-xs text-blue-100 mt-1">Con {pctMargen}% de margen</p>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-slate-700 mb-3">Desglose del cálculo</p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 text-slate-600">Salario bruto anual (empleado)</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {formatCurrencyLocal(result.salarioBrutoAnual, country.currency, country.symbol)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">Coste total empleador (+ SS patronal ~{Math.round(country.ssPatronal * 100)}%)</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {formatCurrencyLocal(result.costeAnualEmpleador, country.currency, country.symbol)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">Horas facturables al año</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {Math.round(result.horasFacturablesAnio)} h
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">Días laborables ({country.diasLaborablesAnio} - {country.diasVacaciones} vac - {country.diasFestivos} festivos)</td>
                  <td className="py-2 text-right font-medium text-slate-800">
                    {country.diasLaborablesAnio - country.diasVacaciones - country.diasFestivos} días
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-400 mt-3">
              Calculo orientativo. No incluye impuestos sobre la renta como freelance ni gastos operativos propios.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
