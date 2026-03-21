export type SalarioMinimo = {
  countrySlug: string;
  countryName: string;
  year: number;
  amount: number;
  amountUSD: number;
  currency: string;
  currencySymbol: string;
  periodLabel: string;
  salarioDiario: number;
  salarioHora: number;
  updatedDate: string;
  historico: { year: number; amount: number; variacion: number }[];
  notas: string;
  calculadoraSlug: string | null; // slug de la calculadora de nómina neta si existe
};

export const salariosMinimos: SalarioMinimo[] = [
  {
    countrySlug: "mexico",
    countryName: "México",
    year: 2026,
    amount: 2984.72,
    amountUSD: 149,
    currency: "MXN",
    currencySymbol: "$",
    periodLabel: "mensual",
    salarioDiario: 99.49,
    salarioHora: 12.44,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 3399.06, variacion: 0 },
      { year: 2023, amount: 3798.36, variacion: 11.74 },
      { year: 2024, amount: 4746.60, variacion: 24.96 },
      { year: 2025, amount: 2686.68, variacion: -43.38 },
      { year: 2026, amount: 2984.72, variacion: 11.09 },
    ],
    notas:
      "El salario mínimo general aplica a trabajadores en todo el territorio nacional. Existe un salario mínimo diferenciado (zona libre de la frontera norte) superior al general. La Comisión Nacional de Salarios Mínimos (CONASAMI) actualiza el valor anualmente.",
    calculadoraSlug: "calculadora-nomina-neta",
  },
  {
    countrySlug: "colombia",
    countryName: "Colombia",
    year: 2026,
    amount: 1423500,
    amountUSD: 346,
    currency: "COP",
    currencySymbol: "$",
    periodLabel: "mensual",
    salarioDiario: 47450,
    salarioHora: 5931,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 1000000, variacion: 0 },
      { year: 2023, amount: 1160000, variacion: 16.0 },
      { year: 2024, amount: 1300000, variacion: 12.07 },
      { year: 2025, amount: 1423500, variacion: 9.5 },
      { year: 2026, amount: 1423500, variacion: 0 },
    ],
    notas:
      "El Gobierno Nacional fija el salario mínimo mensual legal vigente (SMMLV) mediante decreto cada inicio de año. Aplica a trabajadores del sector privado. Adicionalmente, los trabajadores que ganen hasta 2 SMMLV tienen derecho al auxilio de transporte.",
    calculadoraSlug: "calculadora-nomina-neta",
  },
  {
    countrySlug: "espana",
    countryName: "España",
    year: 2026,
    amount: 1184,
    amountUSD: 1290,
    currency: "EUR",
    currencySymbol: "€",
    periodLabel: "mensual (14 pagas)",
    salarioDiario: 39.47,
    salarioHora: 8.22,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 1000, variacion: 0 },
      { year: 2023, amount: 1080, variacion: 8.0 },
      { year: 2024, amount: 1134, variacion: 5.0 },
      { year: 2025, amount: 1184, variacion: 4.41 },
      { year: 2026, amount: 1184, variacion: 0 },
    ],
    notas:
      "El Salario Mínimo Interprofesional (SMI) se expresa en 14 pagas anuales (12 mensualidades + 2 pagas extraordinarias). El salario bruto anual equivale a €16,576. El Gobierno lo revisa anualmente mediante Real Decreto.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "argentina",
    countryName: "Argentina",
    year: 2026,
    amount: 871200,
    amountUSD: 710,
    currency: "ARS",
    currencySymbol: "$",
    periodLabel: "mensual",
    salarioDiario: 29040,
    salarioHora: 3630,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 84512, variacion: 0 },
      { year: 2023, amount: 146000, variacion: 72.76 },
      { year: 2024, amount: 662000, variacion: 353.42 },
      { year: 2025, amount: 871200, variacion: 31.6 },
      { year: 2026, amount: 871200, variacion: 0 },
    ],
    notas:
      "El Salario Mínimo Vital y Móvil (SMVM) lo fija el Consejo del Salario Mínimo. Argentina ha tenido alta inflación, lo que produce actualizaciones frecuentes durante el año. El valor en USD varía según el tipo de cambio oficial.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "chile",
    countryName: "Chile",
    year: 2026,
    amount: 500000,
    amountUSD: 530,
    currency: "CLP",
    currencySymbol: "$",
    periodLabel: "mensual",
    salarioDiario: 16667,
    salarioHora: 2083,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 380000, variacion: 0 },
      { year: 2023, amount: 440000, variacion: 15.79 },
      { year: 2024, amount: 460796, variacion: 4.73 },
      { year: 2025, amount: 500000, variacion: 8.51 },
      { year: 2026, amount: 500000, variacion: 0 },
    ],
    notas:
      "El Ingreso Mínimo Mensual (IMM) lo fija el Congreso Nacional. Aplica a trabajadores mayores de 18 años. Existen valores diferenciados para trabajadores menores de 18 años y para fines no remuneracionales.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "peru",
    countryName: "Perú",
    year: 2026,
    amount: 1130,
    amountUSD: 305,
    currency: "PEN",
    currencySymbol: "S/",
    periodLabel: "mensual",
    salarioDiario: 37.67,
    salarioHora: 4.71,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 1025, variacion: 0 },
      { year: 2023, amount: 1025, variacion: 0 },
      { year: 2024, amount: 1130, variacion: 10.24 },
      { year: 2025, amount: 1130, variacion: 0 },
      { year: 2026, amount: 1130, variacion: 0 },
    ],
    notas:
      "La Remuneración Mínima Vital (RMV) aplica a trabajadores de la actividad privada. Incluye la remuneración mensual más cualquier otra cantidad que perciba el trabajador. El Gobierno la fija por Decreto Supremo.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "ecuador",
    countryName: "Ecuador",
    year: 2026,
    amount: 460,
    amountUSD: 460,
    currency: "USD",
    currencySymbol: "$",
    periodLabel: "mensual",
    salarioDiario: 15.33,
    salarioHora: 1.92,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 425, variacion: 0 },
      { year: 2023, amount: 450, variacion: 5.88 },
      { year: 2024, amount: 460, variacion: 2.22 },
      { year: 2025, amount: 460, variacion: 0 },
      { year: 2026, amount: 460, variacion: 0 },
    ],
    notas:
      "El Salario Básico Unificado (SBU) aplica a los trabajadores del sector privado en general. Ecuador usa el dólar estadounidense como moneda, por lo que no hay efecto de devaluación. El Ministerio de Trabajo lo fija anualmente.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "venezuela",
    countryName: "Venezuela",
    year: 2026,
    amount: 130,
    amountUSD: 130,
    currency: "USD",
    currencySymbol: "$",
    periodLabel: "mensual (referencia USD)",
    salarioDiario: 4.33,
    salarioHora: 0.54,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 30, variacion: 0 },
      { year: 2023, amount: 60, variacion: 100 },
      { year: 2024, amount: 100, variacion: 66.67 },
      { year: 2025, amount: 130, variacion: 30 },
      { year: 2026, amount: 130, variacion: 0 },
    ],
    notas:
      "Venezuela tiene un salario mínimo oficial fijado en bolívares, pero debido a la hiperinflación y la dolarización de facto de la economía, los salarios efectivos se expresan frecuentemente en dólares. El valor aquí es una referencia en USD.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "costa-rica",
    countryName: "Costa Rica",
    year: 2026,
    amount: 374700,
    amountUSD: 685,
    currency: "CRC",
    currencySymbol: "₡",
    periodLabel: "mensual (no calificados)",
    salarioDiario: 12490,
    salarioHora: 1561,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 320000, variacion: 0 },
      { year: 2023, amount: 340000, variacion: 6.25 },
      { year: 2024, amount: 358000, variacion: 5.29 },
      { year: 2025, amount: 374700, variacion: 4.66 },
      { year: 2026, amount: 374700, variacion: 0 },
    ],
    notas:
      "Costa Rica tiene una escala de salarios mínimos por categoría ocupacional fijada por el Consejo Nacional de Salarios (CONASALO). El valor indicado corresponde a los trabajadores no calificados. Se actualiza semestralmente.",
    calculadoraSlug: null,
  },
  {
    countrySlug: "bolivia",
    countryName: "Bolivia",
    year: 2026,
    amount: 2500,
    amountUSD: 363,
    currency: "BOB",
    currencySymbol: "Bs.",
    periodLabel: "mensual",
    salarioDiario: 83.33,
    salarioHora: 10.42,
    updatedDate: "2026-01-01",
    historico: [
      { year: 2022, amount: 2250, variacion: 0 },
      { year: 2023, amount: 2362, variacion: 4.98 },
      { year: 2024, amount: 2500, variacion: 5.84 },
      { year: 2025, amount: 2500, variacion: 0 },
      { year: 2026, amount: 2500, variacion: 0 },
    ],
    notas:
      "El Salario Mínimo Nacional (SMN) lo fija el Gobierno mediante Decreto Supremo cada 1 de mayo (Día del Trabajo). Aplica a trabajadores del sector privado. El boliviano tiene una paridad fija con el dólar estadounidense.",
    calculadoraSlug: null,
  },
];

export function getSalarioMinimo(countrySlug: string): SalarioMinimo | undefined {
  return salariosMinimos.find((s) => s.countrySlug === countrySlug);
}
