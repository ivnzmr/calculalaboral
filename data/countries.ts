export type CalculatorConfig = {
  slug: string;
  name: string;
  description: string;
};

export type CountryConfig = {
  name: string;
  slug: string;
  currency: string;
  currencySymbol: string;
  calculators: CalculatorConfig[];
};

export type CountriesConfig = {
  [key: string]: CountryConfig;
};

export const countries: CountriesConfig = {
  mexico: {
    name: "México",
    slug: "mexico",
    currency: "MXN",
    currencySymbol: "$",
    calculators: [
      {
        slug: "calculadora-finiquito",
        name: "Calculadora de Finiquito",
        description: "Calcula tu finiquito por renuncia voluntaria",
      },
      {
        slug: "calculadora-liquidacion-despido-injustificado",
        name: "Liquidación por Despido Injustificado",
        description: "Calcula tu indemnización por despido injustificado",
      },
      {
        slug: "calculadora-aguinaldo",
        name: "Calculadora de Aguinaldo",
        description: "Calcula tu aguinaldo proporcional según días trabajados",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Calculadora de Vacaciones",
        description: "Días de vacaciones según años trabajados",
      },
      {
        slug: "calculadora-prima-vacacional",
        name: "Prima Vacacional",
        description: "Calcula tu prima vacacional del 25%",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extra",
        description: "Calcula el pago de horas extra: dobles (hasta 9h/semana) y triples (más de 9h)",
      },
      {
        slug: "calculadora-ptu",
        name: "PTU / Utilidades",
        description: "Participación de Trabajadores en Utilidades (LFT Art. 117)",
      },
      {
        slug: "calculadora-imss",
        name: "Cuotas IMSS",
        description: "Descuentos IMSS del trabajador: enfermedad, invalidez y retiro",
      },
      {
        slug: "calculadora-iva",
        name: "Calculadora de IVA",
        description: "Calcula el IVA al 16%: añadir o desglosar impuesto de cualquier precio",
      },
      {
        slug: "calculadora-nomina-neta",
        name: "Nómina Neta (Bruto a Neto)",
        description: "Cuánto cobras realmente: salario bruto menos ISR y IMSS",
      },
    ],
  },
  colombia: {
    name: "Colombia",
    slug: "colombia",
    currency: "COP",
    currencySymbol: "$",
    calculators: [
      {
        slug: "calculadora-liquidacion",
        name: "Calculadora de Liquidación",
        description: "Calcula tu liquidación laboral completa",
      },
      {
        slug: "calculadora-prima-servicios",
        name: "Prima de Servicios",
        description: "Calcula tu prima de servicios semestral",
      },
      {
        slug: "calculadora-cesantias",
        name: "Cesantías",
        description: "Calcula tus cesantías e intereses sobre cesantías",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "Calcula tus días y dinero de vacaciones",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extras",
        description: "Recargos: diurno +25%, nocturno +75%, dominical +75% o +110%",
      },
      {
        slug: "calculadora-auxilio-transporte",
        name: "Auxilio de Transporte",
        description: "Auxilio de transporte 2026: $200,000 COP para salarios ≤ 2 SMMLV",
      },
      {
        slug: "calculadora-seguridad-social",
        name: "Seguridad Social",
        description: "Aportes a salud (4%) y pensión (4%) del trabajador",
      },
      {
        slug: "calculadora-iva",
        name: "Calculadora de IVA",
        description: "Calcula el IVA al 19%: añadir o desglosar de cualquier precio",
      },
      {
        slug: "calculadora-nomina-neta",
        name: "Nómina Neta (Bruto a Neto)",
        description: "Salario bruto menos salud, pensión y retención en la fuente",
      },
    ],
  },
  espana: {
    name: "España",
    slug: "espana",
    currency: "EUR",
    currencySymbol: "€",
    calculators: [
      {
        slug: "calculadora-finiquito",
        name: "Calculadora de Finiquito",
        description: "Calcula tu finiquito: salario pendiente, pagas extra y vacaciones",
      },
      {
        slug: "calculadora-despido-improcedente",
        name: "Despido Improcedente",
        description: "Indemnización por despido improcedente (33 días/año)",
      },
      {
        slug: "calculadora-despido-objetivo",
        name: "Despido Objetivo",
        description: "Indemnización por causas económicas u organizativas (20 días/año)",
      },
      {
        slug: "calculadora-pagas-extra",
        name: "Pagas Extraordinarias",
        description: "Calcula tus pagas extra proporcionales (junio y diciembre)",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "Días y valor económico de tus vacaciones (30 días naturales/año)",
      },
      {
        slug: "calculadora-paro",
        name: "Prestación por Desempleo (Paro)",
        description: "Calcula tu prestación de desempleo según días cotizados",
      },
      {
        slug: "calculadora-irpf",
        name: "IRPF y Salario Neto",
        description: "Estima tu retención IRPF y salario neto mensual en mano",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extraordinarias",
        description: "Pago de horas extra según ET Art. 35 (mínimo mismo valor hora)",
      },
      {
        slug: "calculadora-iva",
        name: "Calculadora de IVA",
        description: "IVA general 21%, reducido 10% y superreducido 4%: añadir o desglosar",
      },
    ],
  },
  argentina: {
    name: "Argentina",
    slug: "argentina",
    currency: "ARS",
    currencySymbol: "$",
    calculators: [
      {
        slug: "calculadora-indemnizacion",
        name: "Indemnización por Despido",
        description: "Art. 245 LCT: mejor remuneración × años de antigüedad",
      },
      {
        slug: "calculadora-sac",
        name: "SAC / Aguinaldo",
        description: "50% del mejor salario del semestre",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "Días según antigüedad (14 a 35 días hábiles)",
      },
      {
        slug: "calculadora-liquidacion-final",
        name: "Liquidación Final",
        description: "Indemnización + integración + vacaciones + SAC proporcional",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extra",
        description: "Recargo 50% días hábiles, 100% domingos y feriados (LCT Art. 201)",
      },
      {
        slug: "calculadora-iva",
        name: "Calculadora de IVA",
        description: "Calcula el IVA al 21%: añadir o desglosar de cualquier precio",
      },
    ],
  },
  chile: {
    name: "Chile",
    slug: "chile",
    currency: "CLP",
    currencySymbol: "$",
    calculators: [
      {
        slug: "calculadora-indemnizacion",
        name: "Indemnización por Años de Servicio",
        description: "1 mes por año trabajado, máximo 11 meses",
      },
      {
        slug: "calculadora-gratificacion",
        name: "Gratificación Legal",
        description: "25% remuneraciones o 4.75 sueldos (Art. 47)",
      },
      {
        slug: "calculadora-feriado",
        name: "Feriado Legal (Vacaciones)",
        description: "15 días hábiles mínimo por año trabajado",
      },
      {
        slug: "calculadora-finiquito",
        name: "Finiquito",
        description: "Liquidación completa al término del contrato",
      },
      {
        slug: "calculadora-afp",
        name: "AFP y Descuentos Previsionales",
        description: "AFP (10%) + SIS + seguro desempleo + salud: descuentos y sueldo líquido",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extra",
        description: "Mínimo 50% de recargo, máximo 2h/día y 12h/semana",
      },
      {
        slug: "calculadora-iva",
        name: "Calculadora de IVA",
        description: "Calcula el IVA al 19%: añadir o desglosar de cualquier precio",
      },
    ],
  },
  peru: {
    name: "Perú",
    slug: "peru",
    currency: "PEN",
    currencySymbol: "S/",
    calculators: [
      {
        slug: "calculadora-cts",
        name: "CTS",
        description: "Compensación por Tiempo de Servicios semestral",
      },
      {
        slug: "calculadora-gratificaciones",
        name: "Gratificaciones",
        description: "1 sueldo en julio y 1 sueldo en diciembre",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "30 días calendario por año (Dec. Leg. 713)",
      },
      {
        slug: "calculadora-liquidacion",
        name: "Liquidación Laboral",
        description: "Vacaciones truncas + CTS + gratificación proporcional",
      },
      {
        slug: "calculadora-afp-onp",
        name: "AFP vs ONP",
        description: "Compara descuentos AFP (~13%) vs ONP (13% fijo) en tu sueldo",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extra",
        description: "Primeras 2h: +25%, horas siguientes: +35% (DL 854)",
      },
      {
        slug: "calculadora-igv",
        name: "Calculadora de IGV",
        description: "Calcula el IGV al 18%: añadir o desglosar de cualquier precio",
      },
    ],
  },
  ecuador: {
    name: "Ecuador",
    slug: "ecuador",
    currency: "USD",
    currencySymbol: "$",
    calculators: [
      {
        slug: "calculadora-decimo-tercero",
        name: "Décimo Tercer Sueldo",
        description: "1/12 de la remuneración anual, pagado en diciembre",
      },
      {
        slug: "calculadora-decimo-cuarto",
        name: "Décimo Cuarto Sueldo",
        description: "1 salario básico unificado por año (SBU 2026: $460)",
      },
      {
        slug: "calculadora-fondos-reserva",
        name: "Fondos de Reserva",
        description: "8.33% mensual del salario (desde el segundo año)",
      },
      {
        slug: "calculadora-liquidacion",
        name: "Liquidación Laboral",
        description: "Desahucio + vacaciones + décimos + fondos de reserva",
      },
      {
        slug: "calculadora-iess",
        name: "Aportaciones IESS",
        description: "Aporte personal IESS 9.45% y descuento en nómina",
      },
      {
        slug: "calculadora-horas-extra",
        name: "Horas Extra",
        description: "Diurnas +50% (hasta 4h) o +100%, nocturnas +100%",
      },
      {
        slug: "calculadora-iva",
        name: "Calculadora de IVA",
        description: "Calcula el IVA al 12%: añadir o desglosar de cualquier precio",
      },
    ],
  },
  venezuela: {
    name: "Venezuela",
    slug: "venezuela",
    currency: "VES",
    currencySymbol: "Bs.",
    calculators: [
      {
        slug: "calculadora-utilidades",
        name: "Utilidades",
        description: "Mínimo 15 días de salario por año (LOTTT Art. 131)",
      },
      {
        slug: "calculadora-prestaciones-sociales",
        name: "Prestaciones Sociales",
        description: "15 días primer año + 2 días adicionales por año de servicio",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "15 días + 1 día por año de servicio (máximo 30)",
      },
      {
        slug: "calculadora-bono-vacacional",
        name: "Bono Vacacional",
        description: "7 días base + 1 día por cada año de servicio",
      },
    ],
  },
  "costa-rica": {
    name: "Costa Rica",
    slug: "costa-rica",
    currency: "CRC",
    currencySymbol: "₡",
    calculators: [
      {
        slug: "calculadora-aguinaldo",
        name: "Aguinaldo",
        description: "1/12 del salario anual, obligatorio en diciembre (Art. 228)",
      },
      {
        slug: "calculadora-cesantia",
        name: "Auxilio de Cesantía",
        description: "Escala de 19.5 a 23 días de salario según antigüedad",
      },
      {
        slug: "calculadora-preaviso",
        name: "Preaviso",
        description: "7 días a 1 mes según tiempo trabajado",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "Mínimo 2 semanas (14 días) por año trabajado",
      },
    ],
  },
  bolivia: {
    name: "Bolivia",
    slug: "bolivia",
    currency: "BOB",
    currencySymbol: "Bs.",
    calculators: [
      {
        slug: "calculadora-aguinaldo",
        name: "Aguinaldo de Navidad",
        description: "1 salario mensual completo, pagado en diciembre",
      },
      {
        slug: "calculadora-segundo-aguinaldo",
        name: "Segundo Aguinaldo",
        description: "1 salario extra cuando el PIB crece más del 4.5%",
      },
      {
        slug: "calculadora-desahucio",
        name: "Desahucio por Despido",
        description: "3 salarios mensuales por despido intempestivo",
      },
      {
        slug: "calculadora-vacaciones",
        name: "Vacaciones",
        description: "15 a 30 días según antigüedad (1-5, 5-8 y +8 años)",
      },
    ],
  },
};

export function getCountry(slug: string): CountryConfig | undefined {
  return countries[slug];
}

export function getAllCountrySlugs(): string[] {
  return Object.keys(countries);
}

export function getAllCalculatorPaths(): { pais: string; calculadora: string }[] {
  const paths: { pais: string; calculadora: string }[] = [];
  for (const countrySlug of Object.keys(countries)) {
    const country = countries[countrySlug];
    for (const calc of country.calculators) {
      paths.push({ pais: countrySlug, calculadora: calc.slug });
    }
  }
  return paths;
}
