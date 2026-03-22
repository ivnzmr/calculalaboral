"use client";

import { useState, useEffect } from "react";
import {
  calculateFiniquito,
  calculateLiquidacion as calculateLiquidacionMX,
  calculateAguinaldo,
  calculateVacaciones as calculateVacacionesMX,
  calculatePrimaVacacional,
  calculateHorasExtra as calculateHorasExtraMX,
  calculatePTU,
  calculateIMSS,
} from "@/lib/calculations/mexico";
import {
  calculateLiquidacion as calculateLiquidacionCO,
  calculatePrimaServicios,
  calculateCesantias,
  calculateInteresesCesantias,
  calculateVacaciones as calculateVacacionesCO,
  calculateHorasExtra as calculateHorasExtraCO,
  calculateAuxilioTransporte,
  calculateSeguridadSocial,
} from "@/lib/calculations/colombia";
import {
  calculateFiniquito as calculateFiniquitoES,
  calculateDespidoImprocedente,
  calculateDespidoObjetivo,
  calculatePagasExtra,
  calculateVacaciones as calculateVacacionesES,
  calculateParo,
  calculateIRPF,
  calculateHorasExtraES,
} from "@/lib/calculations/spain";
import {
  calculateIndemnizacion as calculateIndemnizacionAR,
  calculateSAC,
  calculateVacaciones as calculateVacacionesAR,
  calculateLiquidacionFinal as calculateLiquidacionFinalAR,
  calculateHorasExtra as calculateHorasExtraAR,
} from "@/lib/calculations/argentina";
import {
  calculateIndemnizacion as calculateIndemnizacionCL,
  calculateGratificacion,
  calculateFeriado,
  calculateFiniquito as calculateFiniquitoCL,
  calculateAFP,
  calculateHorasExtraCL,
} from "@/lib/calculations/chile";
import {
  calculateCTS,
  calculateGratificaciones,
  calculateVacaciones as calculateVacacionesPE,
  calculateLiquidacion as calculateLiquidacionPE,
  calculateAfpOnp,
  calculateHorasExtraPE,
} from "@/lib/calculations/peru";
import {
  calculateDecimoTercero,
  calculateDecimoCuarto,
  calculateFondosReserva,
  calculateLiquidacion as calculateLiquidacionEC,
  calculateIESS,
  calculateHorasExtraEC,
  calculateIVA as calculateIVAEC,
} from "@/lib/calculations/ecuador";
import {
  calculateIVA as calculateIVAMX,
  calculateNominaNeta as calculateNominaNetaMX,
} from "@/lib/calculations/mexico";
import {
  calculateIVA as calculateIVACO,
  calculateNominaNeta as calculateNominaNetaCO,
} from "@/lib/calculations/colombia";
import { calculateIVA as calculateIVAES } from "@/lib/calculations/spain";
import { calculateIVA as calculateIVAAR } from "@/lib/calculations/argentina";
import { calculateIVA as calculateIVACL } from "@/lib/calculations/chile";
import { calculateIGV } from "@/lib/calculations/peru";
import {
  calculateUtilidades,
  calculatePrestacionesSociales,
  calculateVacaciones as calculateVacacionesVE,
  calculateBonoVacacional,
  calculateHorasExtra as calculateHorasExtraVE,
  calculateIVA as calculateIVAVE,
  calculateNominaNeta as calculateNominaNetaVE,
} from "@/lib/calculations/venezuela";
import {
  calculateAguinaldo as calculateAguinaldoCR,
  calculateCesantia as calculateCesantiaCR,
  calculatePreaviso,
  calculateVacaciones as calculateVacacionesCR,
  calculateHorasExtra as calculateHorasExtraCR,
  calculateIVA as calculateIVACR,
  calculateNominaNeta as calculateNominaNetaCR,
} from "@/lib/calculations/costa-rica";
import {
  calculateAguinaldo as calculateAguinaldoBO,
  calculateSegundoAguinaldo,
  calculateDesahucio as calculateDesahucioBO,
  calculateVacaciones as calculateVacacionesBO,
  calculateHorasExtra as calculateHorasExtraBO,
  calculateIVA as calculateIVABO,
  calculateNominaNeta as calculateNominaNetaBO,
} from "@/lib/calculations/bolivia";
import { calculateNominaNeta as calculateNominaNetaAR } from "@/lib/calculations/argentina";
import { calculateSeguridadSocial as calculateSeguridadSocialES, calculateNominaNetaES } from "@/lib/calculations/spain";
import { calculateNominaNetaCL } from "@/lib/calculations/chile";
import { calculateNominaNetaPE } from "@/lib/calculations/peru";
import { calculateNominaNetaEC } from "@/lib/calculations/ecuador";
import type { CalculationResult } from "@/lib/calculations/mexico";

type Props = {
  country: string;
  calculatorType: string;
  calculatorName: string;
};

// Determine which input layout to render for each calculator
type InputMode =
  | "salary-dates"         // default: salary + startDate + endDate
  | "salary-only"          // only salary (no dates)
  | "salary-hours"         // salary + total overtime hours
  | "salary-hours-ar"      // salary + weekday hours + holiday hours (Argentina)
  | "salary-hours-co"      // salary + 4 overtime types (Colombia)
  | "salary-hours-ec"      // salary + 3 overtime types (Ecuador)
  | "salary-dias-cotizados"// salary + days contributed (Spain paro)
  | "salary-ptu-fondo"     // salary + dates + PTU fund amount
  | "salary-afp-pct"       // salary + AFP percentage (Chile)
  | "salary-afp-onp"       // salary + AFP/ONP radio (Peru)
  | "precio-iva"           // price + IVA included/excluded toggle (+ Spain tipo select)
  | "salary-only-nomina";  // only salary for nomina neta calculators

function getInputMode(country: string, calculatorType: string): InputMode {
  // IVA/IGV calculators: price + toggle
  if (
    calculatorType === "calculadora-iva" ||
    calculatorType === "calculadora-igv"
  ) {
    return "precio-iva";
  }

  // Nomina neta: salary only
  if (calculatorType === "calculadora-nomina-neta") {
    return "salary-only-nomina";
  }

  // Salary-only calculators (no dates needed)
  if (
    (country === "mexico" && calculatorType === "calculadora-imss") ||
    (country === "colombia" && calculatorType === "calculadora-seguridad-social") ||
    (country === "espana" && calculatorType === "calculadora-irpf") ||
    (country === "espana" && calculatorType === "calculadora-seguridad-social")
  ) {
    return "salary-only";
  }

  // Overtime hours (simple: salary + total hours)
  if (
    (country === "espana" && calculatorType === "calculadora-horas-extra") ||
    (country === "chile" && calculatorType === "calculadora-horas-extra") ||
    (country === "peru" && calculatorType === "calculadora-horas-extra") ||
    (country === "costa-rica" && calculatorType === "calculadora-horas-extra") ||
    (country === "bolivia" && calculatorType === "calculadora-horas-extra")
  ) {
    return "salary-hours";
  }

  // Argentina/Venezuela overtime: weekday + holiday hours
  if (
    (country === "argentina" && calculatorType === "calculadora-horas-extra") ||
    (country === "venezuela" && calculatorType === "calculadora-horas-extra")
  ) {
    return "salary-hours-ar";
  }

  // Mexico overtime: extra hours/week + number of weeks
  if (country === "mexico" && calculatorType === "calculadora-horas-extra") {
    return "salary-hours-ar"; // reuse the 2-field hours layout
  }

  // Colombia overtime: 4 different hour types
  if (country === "colombia" && calculatorType === "calculadora-horas-extra") {
    return "salary-hours-co";
  }

  // Ecuador overtime: 3 hour types
  if (country === "ecuador" && calculatorType === "calculadora-horas-extra") {
    return "salary-hours-ec";
  }

  // Spain paro: salary + days contributed
  if (country === "espana" && calculatorType === "calculadora-paro") {
    return "salary-dias-cotizados";
  }

  // Mexico PTU: salary + dates + PTU fund
  if (country === "mexico" && calculatorType === "calculadora-ptu") {
    return "salary-ptu-fondo";
  }

  // Chile AFP: salary + AFP percentage
  if (country === "chile" && calculatorType === "calculadora-afp") {
    return "salary-afp-pct";
  }

  // Peru AFP vs ONP: salary + system selector
  if (country === "peru" && calculatorType === "calculadora-afp-onp") {
    return "salary-afp-onp";
  }

  return "salary-dates";
}

type FormState = {
  salary: string;
  startDate: string;
  endDate: string;
  // Overtime hours
  hours1: string; // primary hours field (also used for horasDiurnas / horasHabil / horasExtraSemanales)
  hours2: string; // secondary hours field (horasNocturnas / horasFestivo / semanasWorked)
  hours3: string; // tertiary (horasDominicalDiurno / horasDiurnasMas4)
  hours4: string; // quaternary (horasDominicalNocturno / horasNocturnas EC)
  // PTU fondo
  ptuFondo: string;
  // AFP percentage
  afpPct: string;
  // AFP/ONP selector
  sistema: "afp" | "onp";
  // Days contributed (Spain paro)
  diasCotizados: string;
  // IVA/IGV calculator fields
  precio: string;
  ivaIncluido: boolean;
  ivaTipo: "general" | "reducido" | "superreducido";
};

function runCalculation(
  country: string,
  calculatorType: string,
  form: FormState
): CalculationResult | null {
  const salary = parseFloat(form.salary);
  const precio = parseFloat(form.precio);
  const startDate = form.startDate ? new Date(form.startDate + "T00:00:00") : new Date();
  const endDate = form.endDate ? new Date(form.endDate + "T00:00:00") : new Date();

  if (country === "mexico") {
    switch (calculatorType) {
      case "calculadora-finiquito":
        return calculateFiniquito(salary, startDate, endDate);
      case "calculadora-liquidacion-despido-injustificado":
        return calculateLiquidacionMX(salary, startDate, endDate);
      case "calculadora-aguinaldo":
        return calculateAguinaldo(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesMX(salary, startDate, endDate);
      case "calculadora-prima-vacacional":
        return calculatePrimaVacacional(salary, startDate, endDate);
      case "calculadora-horas-extra":
        return calculateHorasExtraMX(salary, parseFloat(form.hours1) || 0, parseFloat(form.hours2) || 0);
      case "calculadora-ptu":
        return calculatePTU(salary, startDate, endDate, parseFloat(form.ptuFondo) || 0);
      case "calculadora-imss":
        return calculateIMSS(salary);
      case "calculadora-iva":
        return calculateIVAMX(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaMX(salary);
      default:
        return null;
    }
  }

  if (country === "colombia") {
    switch (calculatorType) {
      case "calculadora-liquidacion":
        return calculateLiquidacionCO(salary, startDate, endDate);
      case "calculadora-prima-servicios":
        return calculatePrimaServicios(salary, startDate, endDate);
      case "calculadora-cesantias":
        return calculateCesantias(salary, startDate, endDate);
      case "calculadora-intereses-cesantias":
        return calculateInteresesCesantias(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesCO(salary, startDate, endDate);
      case "calculadora-horas-extra":
        return calculateHorasExtraCO(
          salary,
          parseFloat(form.hours1) || 0,
          parseFloat(form.hours2) || 0,
          parseFloat(form.hours3) || 0,
          parseFloat(form.hours4) || 0
        );
      case "calculadora-auxilio-transporte":
        return calculateAuxilioTransporte(salary, startDate, endDate);
      case "calculadora-seguridad-social":
        return calculateSeguridadSocial(salary);
      case "calculadora-iva":
        return calculateIVACO(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaCO(salary);
      default:
        return null;
    }
  }

  if (country === "espana") {
    switch (calculatorType) {
      case "calculadora-finiquito":
        return calculateFiniquitoES(salary, startDate, endDate);
      case "calculadora-despido-improcedente":
        return calculateDespidoImprocedente(salary, startDate, endDate);
      case "calculadora-despido-objetivo":
        return calculateDespidoObjetivo(salary, startDate, endDate);
      case "calculadora-pagas-extra":
        return calculatePagasExtra(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesES(salary, startDate, endDate);
      case "calculadora-paro":
        return calculateParo(salary, parseFloat(form.diasCotizados) || 0);
      case "calculadora-irpf":
        return calculateIRPF(salary);
      case "calculadora-horas-extra":
        return calculateHorasExtraES(salary, parseFloat(form.hours1) || 0, "convenio");
      case "calculadora-iva":
        return calculateIVAES(precio, form.ivaIncluido, form.ivaTipo);
      case "calculadora-seguridad-social":
        return calculateSeguridadSocialES(salary);
      case "calculadora-nomina-neta":
        return calculateNominaNetaES(salary);
      default:
        return null;
    }
  }

  if (country === "argentina") {
    switch (calculatorType) {
      case "calculadora-indemnizacion":
        return calculateIndemnizacionAR(salary, startDate, endDate);
      case "calculadora-sac":
        return calculateSAC(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesAR(salary, startDate, endDate);
      case "calculadora-liquidacion-final":
        return calculateLiquidacionFinalAR(salary, startDate, endDate);
      case "calculadora-horas-extra":
        return calculateHorasExtraAR(salary, parseFloat(form.hours1) || 0, parseFloat(form.hours2) || 0);
      case "calculadora-iva":
        return calculateIVAAR(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaAR(salary);
      default:
        return null;
    }
  }

  if (country === "chile") {
    switch (calculatorType) {
      case "calculadora-indemnizacion":
        return calculateIndemnizacionCL(salary, startDate, endDate);
      case "calculadora-gratificacion":
        return calculateGratificacion(salary, startDate, endDate);
      case "calculadora-feriado":
        return calculateFeriado(salary, startDate, endDate);
      case "calculadora-finiquito":
        return calculateFiniquitoCL(salary, startDate, endDate);
      case "calculadora-afp":
        return calculateAFP(salary, parseFloat(form.afpPct) || 10);
      case "calculadora-horas-extra":
        return calculateHorasExtraCL(salary, parseFloat(form.hours1) || 0);
      case "calculadora-iva":
        return calculateIVACL(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaCL(salary);
      default:
        return null;
    }
  }

  if (country === "peru") {
    switch (calculatorType) {
      case "calculadora-cts":
        return calculateCTS(salary, startDate, endDate);
      case "calculadora-gratificaciones":
        return calculateGratificaciones(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesPE(salary, startDate, endDate);
      case "calculadora-liquidacion":
        return calculateLiquidacionPE(salary, startDate, endDate);
      case "calculadora-afp-onp":
        return calculateAfpOnp(salary, form.sistema);
      case "calculadora-horas-extra":
        return calculateHorasExtraPE(salary, parseFloat(form.hours1) || 0);
      case "calculadora-igv":
        return calculateIGV(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaPE(salary);
      default:
        return null;
    }
  }

  if (country === "ecuador") {
    switch (calculatorType) {
      case "calculadora-decimo-tercero":
        return calculateDecimoTercero(salary, startDate, endDate);
      case "calculadora-decimo-cuarto":
        return calculateDecimoCuarto(salary, startDate, endDate);
      case "calculadora-fondos-reserva":
        return calculateFondosReserva(salary, startDate, endDate);
      case "calculadora-liquidacion":
        return calculateLiquidacionEC(salary, startDate, endDate);
      case "calculadora-iess":
        return calculateIESS(salary);
      case "calculadora-horas-extra":
        return calculateHorasExtraEC(
          salary,
          parseFloat(form.hours1) || 0,
          parseFloat(form.hours2) || 0,
          parseFloat(form.hours3) || 0
        );
      case "calculadora-iva":
        return calculateIVAEC(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaEC(salary);
      default:
        return null;
    }
  }

  if (country === "venezuela") {
    switch (calculatorType) {
      case "calculadora-utilidades":
        return calculateUtilidades(salary, startDate, endDate);
      case "calculadora-prestaciones-sociales":
        return calculatePrestacionesSociales(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesVE(salary, startDate, endDate);
      case "calculadora-bono-vacacional":
        return calculateBonoVacacional(salary, startDate, endDate);
      case "calculadora-horas-extra":
        return calculateHorasExtraVE(salary, parseFloat(form.hours1) || 0, parseFloat(form.hours2) || 0);
      case "calculadora-iva":
        return calculateIVAVE(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaVE(salary);
      default:
        return null;
    }
  }

  if (country === "costa-rica") {
    switch (calculatorType) {
      case "calculadora-aguinaldo":
        return calculateAguinaldoCR(salary, startDate, endDate);
      case "calculadora-cesantia":
        return calculateCesantiaCR(salary, startDate, endDate);
      case "calculadora-preaviso":
        return calculatePreaviso(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesCR(salary, startDate, endDate);
      case "calculadora-horas-extra":
        return calculateHorasExtraCR(salary, parseFloat(form.hours1) || 0);
      case "calculadora-iva":
        return calculateIVACR(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaCR(salary);
      default:
        return null;
    }
  }

  if (country === "bolivia") {
    switch (calculatorType) {
      case "calculadora-aguinaldo":
        return calculateAguinaldoBO(salary, startDate, endDate);
      case "calculadora-segundo-aguinaldo":
        return calculateSegundoAguinaldo(salary, startDate, endDate);
      case "calculadora-desahucio":
        return calculateDesahucioBO(salary, startDate, endDate);
      case "calculadora-vacaciones":
        return calculateVacacionesBO(salary, startDate, endDate);
      case "calculadora-horas-extra":
        return calculateHorasExtraBO(salary, parseFloat(form.hours1) || 0);
      case "calculadora-iva":
        return calculateIVABO(precio, form.ivaIncluido);
      case "calculadora-nomina-neta":
        return calculateNominaNetaBO(salary);
      default:
        return null;
    }
  }

  return null;
}

function formatCurrency(amount: number, country: string): string {
  if (country === "mexico") {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  }
  if (country === "colombia") {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  if (country === "espana") {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  }
  if (country === "argentina") {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  if (country === "chile") {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  if (country === "peru") {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(amount);
  }
  if (country === "ecuador") {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
  if (country === "venezuela") {
    try {
      return new Intl.NumberFormat("es-VE", {
        style: "currency",
        currency: "VES",
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return "Bs. " + amount.toFixed(0);
    }
  }
  if (country === "costa-rica") {
    return new Intl.NumberFormat("es-CR", {
      style: "currency",
      currency: "CRC",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  if (country === "bolivia") {
    return new Intl.NumberFormat("es-BO", {
      style: "currency",
      currency: "BOB",
    }).format(amount);
  }
  return amount.toFixed(2);
}

function getCurrencySymbol(country: string): string {
  if (country === "espana") return "€";
  if (country === "peru") return "S/";
  if (country === "costa-rica") return "₡";
  if (country === "venezuela" || country === "bolivia") return "Bs.";
  return "$";
}

function getCurrencyLabel(country: string): string {
  if (country === "mexico") return "MXN";
  if (country === "colombia") return "COP";
  if (country === "espana") return "EUR";
  if (country === "argentina") return "ARS";
  if (country === "chile") return "CLP";
  if (country === "peru") return "PEN";
  if (country === "ecuador") return "USD";
  if (country === "venezuela") return "VES";
  if (country === "costa-rica") return "CRC";
  if (country === "bolivia") return "BOB";
  return "";
}

function getTodayString(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

const inputClass =
  "w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400";

const labelClass = "block text-sm font-semibold text-slate-700 mb-1";

export default function Calculator({
  country,
  calculatorType,
  calculatorName,
}: Props) {
  const [form, setForm] = useState<FormState>({
    salary: "",
    startDate: "",
    endDate: getTodayString(),
    hours1: "",
    hours2: "",
    hours3: "",
    hours4: "",
    ptuFondo: "",
    afpPct: "10",
    sistema: "afp",
    diasCotizados: "",
    precio: "",
    ivaIncluido: false,
    ivaTipo: "general",
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const inputMode = getInputMode(country, calculatorType);

  // Pre-fill form from URL params (shared links)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates: Partial<FormState> = {};
    if (params.has("salary")) updates.salary = params.get("salary")!;
    if (params.has("startDate")) updates.startDate = params.get("startDate")!;
    if (params.has("endDate")) updates.endDate = params.get("endDate")!;
    if (params.has("hours1")) updates.hours1 = params.get("hours1")!;
    if (params.has("hours2")) updates.hours2 = params.get("hours2")!;
    if (params.has("hours3")) updates.hours3 = params.get("hours3")!;
    if (params.has("hours4")) updates.hours4 = params.get("hours4")!;
    if (params.has("ptuFondo")) updates.ptuFondo = params.get("ptuFondo")!;
    if (params.has("afpPct")) updates.afpPct = params.get("afpPct")!;
    if (params.has("sistema")) updates.sistema = params.get("sistema") as "afp" | "onp";
    if (params.has("diasCotizados")) updates.diasCotizados = params.get("diasCotizados")!;
    if (params.has("precio")) updates.precio = params.get("precio")!;
    if (params.has("ivaIncluido")) updates.ivaIncluido = params.get("ivaIncluido") === "1";
    if (params.has("ivaTipo")) updates.ivaTipo = params.get("ivaTipo") as FormState["ivaTipo"];
    if (Object.keys(updates).length > 0) {
      setForm((prev) => ({ ...prev, ...updates }));
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setError(null);
  }

  function validateAndSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // For IVA/IGV mode: validate precio instead of salary
    if (inputMode === "precio-iva") {
      const precio = parseFloat(form.precio);
      if (!form.precio || isNaN(precio) || precio <= 0) {
        setError("Por favor ingresa un precio válido mayor a 0.");
        return;
      }
      const calculation = runCalculation(country, calculatorType, form);
      if (!calculation) {
        setError("No se pudo realizar el cálculo. Verifica los datos ingresados.");
        return;
      }
      setResult(calculation);
      return;
    }

    const salary = parseFloat(form.salary);
    if (!form.salary || isNaN(salary) || salary <= 0) {
      setError("Por favor ingresa un salario mensual válido mayor a 0.");
      return;
    }

    // Salary-only modes: skip date validation
    if (inputMode === "salary-only" || inputMode === "salary-only-nomina") {
      const calculation = runCalculation(country, calculatorType, form);
      if (!calculation) {
        setError("No se pudo realizar el cálculo. Verifica los datos ingresados.");
        return;
      }
      setResult(calculation);
      return;
    }

    // Date validation only for modes that require dates
    const needsDates =
      inputMode === "salary-dates" ||
      inputMode === "salary-ptu-fondo";

    if (needsDates) {
      if (!form.startDate) {
        setError("Por favor ingresa la fecha de inicio.");
        return;
      }
      if (!form.endDate) {
        setError("Por favor ingresa la fecha de fin.");
        return;
      }
      const start = new Date(form.startDate + "T00:00:00");
      const end = new Date(form.endDate + "T00:00:00");
      if (end <= start) {
        setError("La fecha de fin debe ser posterior a la fecha de inicio.");
        return;
      }
    }

    // Also validate dates for auxilio-transporte (colombia)
    if (
      country === "colombia" &&
      calculatorType === "calculadora-auxilio-transporte"
    ) {
      if (!form.startDate || !form.endDate) {
        setError("Por favor ingresa las fechas de inicio y fin.");
        return;
      }
      const start = new Date(form.startDate + "T00:00:00");
      const end = new Date(form.endDate + "T00:00:00");
      if (end <= start) {
        setError("La fecha de fin debe ser posterior a la fecha de inicio.");
        return;
      }
    }

    const calculation = runCalculation(country, calculatorType, form);

    if (!calculation) {
      setError("No se pudo realizar el cálculo. Verifica los datos ingresados.");
      return;
    }

    setResult(calculation);
  }

  function handleShare() {
    const params = new URLSearchParams();
    if (form.salary) params.set("salary", form.salary);
    if (form.startDate) params.set("startDate", form.startDate);
    if (form.endDate && form.endDate !== getTodayString()) params.set("endDate", form.endDate);
    if (form.hours1) params.set("hours1", form.hours1);
    if (form.hours2) params.set("hours2", form.hours2);
    if (form.hours3) params.set("hours3", form.hours3);
    if (form.hours4) params.set("hours4", form.hours4);
    if (form.ptuFondo) params.set("ptuFondo", form.ptuFondo);
    if (form.afpPct && form.afpPct !== "10") params.set("afpPct", form.afpPct);
    if (form.sistema !== "afp") params.set("sistema", form.sistema);
    if (form.diasCotizados) params.set("diasCotizados", form.diasCotizados);
    if (form.precio) params.set("precio", form.precio);
    if (form.ivaIncluido) params.set("ivaIncluido", "1");
    if (form.ivaTipo !== "general") params.set("ivaTipo", form.ivaTipo);
    const url =
      window.location.origin +
      window.location.pathname +
      (params.toString() ? "?" + params.toString() : "");
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handlePrint() {
    window.print();
  }

  function handleClear() {
    setForm({
      salary: "",
      startDate: "",
      endDate: getTodayString(),
      hours1: "",
      hours2: "",
      hours3: "",
      hours4: "",
      ptuFondo: "",
      afpPct: "10",
      sistema: "afp",
      diasCotizados: "",
      precio: "",
      ivaIncluido: false,
      ivaTipo: "general",
    });
    setResult(null);
    setError(null);
  }

  const currencySymbol = getCurrencySymbol(country);
  const currencyLabel = getCurrencyLabel(country);

  // Determine label text for the two-field overtime layout
  function getHours1Label(): string {
    if (country === "mexico" && calculatorType === "calculadora-horas-extra") return "Horas extra por semana";
    if (country === "argentina" && calculatorType === "calculadora-horas-extra") return "Horas extra días hábiles";
    return "Horas extra";
  }

  function getHours2Label(): string {
    if (country === "mexico" && calculatorType === "calculadora-horas-extra") return "Número de semanas trabajadas";
    if (country === "argentina" && calculatorType === "calculadora-horas-extra") return "Horas extra domingos/feriados";
    return "Horas extra (2do tipo)";
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-5">
        {calculatorName}
      </h2>

      {/* ADSENSE SLOT */}

      <form onSubmit={validateAndSubmit} className="space-y-5 no-print">
        {/* Precio field - IVA/IGV mode only */}
        {inputMode === "precio-iva" && (
          <div>
            <label htmlFor="precio" className={labelClass}>
              Precio ({currencyLabel})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                {currencySymbol}
              </span>
              <input
                id="precio"
                name="precio"
                type="number"
                min="0.01"
                step="0.01"
                value={form.precio}
                onChange={handleChange}
                placeholder="Ej: 1000"
                className="w-full pl-8 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                required
              />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                id="ivaIncluido"
                name="ivaIncluido"
                type="checkbox"
                checked={form.ivaIncluido}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
              <label htmlFor="ivaIncluido" className="text-sm text-slate-700 cursor-pointer">
                {calculatorType === "calculadora-igv"
                  ? "IGV ya incluido en el precio"
                  : "IVA ya incluido en el precio"}
              </label>
            </div>
            {country === "espana" && (
              <div className="mt-3">
                <label htmlFor="ivaTipo" className={labelClass}>
                  Tipo de IVA
                </label>
                <select
                  id="ivaTipo"
                  name="ivaTipo"
                  value={form.ivaTipo}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="general">General (21%)</option>
                  <option value="reducido">Reducido (10%)</option>
                  <option value="superreducido">Superreducido (4%)</option>
                </select>
              </div>
            )}
          </div>
        )}

        {/* Salary field - shown for all modes except precio-iva */}
        {inputMode !== "precio-iva" && (
        <div>
          <label htmlFor="salary" className={labelClass}>
            Salario mensual ({currencyLabel})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
              {currencySymbol}
            </span>
            <input
              id="salary"
              name="salary"
              type="number"
              min="1"
              step="0.01"
              value={form.salary}
              onChange={handleChange}
              placeholder="Ej: 15000"
              className="w-full pl-8 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
              required
            />
          </div>
        </div>
        )}

        {/* salary-dates: default two-date layout */}
        {(inputMode === "salary-dates" || inputMode === "salary-ptu-fondo") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className={labelClass}>
                Fecha de inicio laboral
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={form.startDate}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className={labelClass}>
                Fecha de fin / hoy
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={form.endDate}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>
        )}

        {/* Colombia auxilio transporte also needs dates */}
        {country === "colombia" &&
          calculatorType === "calculadora-auxilio-transporte" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className={labelClass}>
                  Fecha de inicio laboral
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={form.startDate}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="endDate" className={labelClass}>
                  Fecha de fin / hoy
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={form.endDate}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>
          )}

        {/* PTU extra field: fondo total */}
        {inputMode === "salary-ptu-fondo" && (
          <div>
            <label htmlFor="ptuFondo" className={labelClass}>
              Fondo total PTU de la empresa ({currencyLabel})
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                {currencySymbol}
              </span>
              <input
                id="ptuFondo"
                name="ptuFondo"
                type="number"
                min="0"
                step="0.01"
                value={form.ptuFondo}
                onChange={handleChange}
                placeholder="Ej: 50000"
                className="w-full pl-8 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                required
              />
            </div>
          </div>
        )}

        {/* Spain paro: days contributed */}
        {inputMode === "salary-dias-cotizados" && (
          <div>
            <label htmlFor="diasCotizados" className={labelClass}>
              Días cotizados en los últimos 6 años (mínimo 360)
            </label>
            <input
              id="diasCotizados"
              name="diasCotizados"
              type="number"
              min="0"
              max="2160"
              step="1"
              value={form.diasCotizados}
              onChange={handleChange}
              placeholder="Ej: 720"
              className={inputClass}
              required
            />
          </div>
        )}

        {/* Simple overtime: salary + total hours */}
        {inputMode === "salary-hours" && (
          <div>
            <label htmlFor="hours1" className={labelClass}>
              Número de horas extra
            </label>
            <input
              id="hours1"
              name="hours1"
              type="number"
              min="0"
              step="0.5"
              value={form.hours1}
              onChange={handleChange}
              placeholder="Ej: 10"
              className={inputClass}
              required
            />
          </div>
        )}

        {/* Two-field overtime: Argentina (habil/festivo) and Mexico (h/semana + semanas) */}
        {inputMode === "salary-hours-ar" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hours1" className={labelClass}>
                {getHours1Label()}
              </label>
              <input
                id="hours1"
                name="hours1"
                type="number"
                min="0"
                step="0.5"
                value={form.hours1}
                onChange={handleChange}
                placeholder="Ej: 8"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="hours2" className={labelClass}>
                {getHours2Label()}
              </label>
              <input
                id="hours2"
                name="hours2"
                type="number"
                min="0"
                step="0.5"
                value={form.hours2}
                onChange={handleChange}
                placeholder="Ej: 4"
                className={inputClass}
                required
              />
            </div>
          </div>
        )}

        {/* Colombia overtime: 4 hour types */}
        {inputMode === "salary-hours-co" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hours1" className={labelClass}>
                Horas extra diurnas (+25%)
              </label>
              <input
                id="hours1"
                name="hours1"
                type="number"
                min="0"
                step="0.5"
                value={form.hours1}
                onChange={handleChange}
                placeholder="Ej: 5"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="hours2" className={labelClass}>
                Horas extra nocturnas (+75%)
              </label>
              <input
                id="hours2"
                name="hours2"
                type="number"
                min="0"
                step="0.5"
                value={form.hours2}
                onChange={handleChange}
                placeholder="Ej: 3"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="hours3" className={labelClass}>
                Horas dominical/festivo diurno (+75%)
              </label>
              <input
                id="hours3"
                name="hours3"
                type="number"
                min="0"
                step="0.5"
                value={form.hours3}
                onChange={handleChange}
                placeholder="Ej: 2"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="hours4" className={labelClass}>
                Horas dominical/festivo nocturno (+110%)
              </label>
              <input
                id="hours4"
                name="hours4"
                type="number"
                min="0"
                step="0.5"
                value={form.hours4}
                onChange={handleChange}
                placeholder="Ej: 1"
                className={inputClass}
              />
            </div>
          </div>
        )}

        {/* Ecuador overtime: 3 hour types */}
        {inputMode === "salary-hours-ec" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hours1" className={labelClass}>
                Horas diurnas hasta 4/día (+50%)
              </label>
              <input
                id="hours1"
                name="hours1"
                type="number"
                min="0"
                step="0.5"
                value={form.hours1}
                onChange={handleChange}
                placeholder="Ej: 4"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="hours2" className={labelClass}>
                Horas diurnas más de 4/día (+100%)
              </label>
              <input
                id="hours2"
                name="hours2"
                type="number"
                min="0"
                step="0.5"
                value={form.hours2}
                onChange={handleChange}
                placeholder="Ej: 2"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="hours3" className={labelClass}>
                Horas nocturnas (+100%)
              </label>
              <input
                id="hours3"
                name="hours3"
                type="number"
                min="0"
                step="0.5"
                value={form.hours3}
                onChange={handleChange}
                placeholder="Ej: 2"
                className={inputClass}
              />
            </div>
          </div>
        )}

        {/* Chile AFP: AFP percentage selector */}
        {inputMode === "salary-afp-pct" && (
          <div>
            <label htmlFor="afpPct" className={labelClass}>
              Porcentaje AFP (habitualmente 10%)
            </label>
            <input
              id="afpPct"
              name="afpPct"
              type="number"
              min="1"
              max="20"
              step="0.01"
              value={form.afpPct}
              onChange={handleChange}
              placeholder="10"
              className={inputClass}
              required
            />
          </div>
        )}

        {/* Peru AFP/ONP: radio selector */}
        {inputMode === "salary-afp-onp" && (
          <div>
            <p className={labelClass}>Sistema de pensiones</p>
            <div className="flex gap-6 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sistema"
                  value="afp"
                  checked={form.sistema === "afp"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span className="text-sm text-slate-700">AFP (privado)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sistema"
                  value="onp"
                  checked={form.sistema === "onp"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span className="text-sm text-slate-700">ONP (público)</span>
              </label>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl w-full transition-colors text-base"
        >
          Calcular
        </button>
      </form>

      {result && (
        <div className="mt-6 rounded-xl overflow-hidden border border-emerald-200">
          <div className="bg-emerald-600 text-white rounded-t-xl p-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-100">
              Total estimado
            </p>
            <p className="text-5xl font-black mt-2">
              {formatCurrency(result.total, country)}
            </p>
          </div>

          <div className="bg-white rounded-b-xl border-t-0 p-5">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Desglose del calculo:
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-500 uppercase">
                  <th className="text-left pb-2 font-medium">Concepto</th>
                  <th className="text-right pb-2 font-medium">Dias</th>
                  <th className="text-right pb-2 font-medium">Importe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {result.breakdown.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-slate-50" : ""}
                  >
                    <td className="py-2 text-slate-700 pr-2">{item.concept}</td>
                    <td className="py-2 text-right text-slate-500 w-16">
                      {item.days !== undefined && item.days > 0
                        ? item.days.toFixed(1)
                        : "-"}
                    </td>
                    <td className="py-2 text-right font-medium text-slate-800 w-32">
                      {item.amount > 0
                        ? formatCurrency(item.amount, country)
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200">
                  <td
                    colSpan={2}
                    className="pt-2 font-bold text-slate-800 text-sm uppercase"
                  >
                    Total
                  </td>
                  <td className="pt-2 text-right font-bold text-emerald-600">
                    {formatCurrency(result.total, country)}
                  </td>
                </tr>
              </tfoot>
            </table>

            <p className="mt-4 text-xs text-slate-500 text-center">
              Calculo orientativo. Los resultados pueden variar segun tu
              contrato y legislacion aplicable.
            </p>

            <div className="mt-4 flex gap-2 no-print">
              <button
                onClick={handleShare}
                className="flex-1 border border-blue-200 bg-blue-50 rounded-xl py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
              >
                {copied ? "¡Enlace copiado!" : "Compartir resultado"}
              </button>
              <button
                onClick={handlePrint}
                className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Descargar PDF
              </button>
              <button
                onClick={handleClear}
                className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
