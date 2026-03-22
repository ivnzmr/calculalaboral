import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ comparacion: string }> };

interface CountryProfile {
  name: string;
  flag: string;
  currency: string;
  minWage: string; // monthly in local currency
  minWageUSD: number;
  vacationDays: number;
  bonusMonths: number;
  bonusName: string;
  severance: string;
  socialSecurity: string;
  retirementAge: number;
  maxWorkHours: number;
  noticePeriod: string;
  mainLaw: string;
}

const PROFILES: Record<string, CountryProfile> = {
  mexico: {
    name: "México",
    flag: "🇲🇽",
    currency: "MXN",
    minWage: "$278/día",
    minWageUSD: 428,
    vacationDays: 12,
    bonusMonths: 0.5,
    bonusName: "Aguinaldo",
    severance: "3 meses + 20 días/año (despido injustificado)",
    socialSecurity: "IMSS — 32% patronal + 2% empleado (aprox.)",
    retirementAge: 65,
    maxWorkHours: 48,
    noticePeriod: "No obligatorio para empleado; 30 días para el patrón",
    mainLaw: "Ley Federal del Trabajo (LFT)",
  },
  espana: {
    name: "España",
    flag: "🇪🇸",
    currency: "EUR",
    minWage: "€1.184/mes",
    minWageUSD: 1290,
    vacationDays: 22,
    bonusMonths: 2,
    bonusName: "Pagas extra (junio y diciembre)",
    severance: "20 días/año trabajado (máx. 12 meses) — despido procedente",
    socialSecurity: "29.9% patronal + 6.47% empleado",
    retirementAge: 67,
    maxWorkHours: 40,
    noticePeriod: "15 días (renuncia); según contrato (empleador)",
    mainLaw: "Estatuto de los Trabajadores (ET)",
  },
  colombia: {
    name: "Colombia",
    flag: "🇨🇴",
    currency: "COP",
    minWage: "$1.423.500/mes",
    minWageUSD: 350,
    vacationDays: 15,
    bonusMonths: 1,
    bonusName: "Prima de servicios",
    severance: "1 mes por año trabajado (cesantías)",
    socialSecurity: "21.5% patronal + 9% empleado (salud + pensión)",
    retirementAge: 62,
    maxWorkHours: 46,
    noticePeriod: "15 días (renuncia); indemnización (despido)",
    mainLaw: "Código Sustantivo del Trabajo (CST)",
  },
  argentina: {
    name: "Argentina",
    flag: "🇦🇷",
    currency: "ARS",
    minWage: "$271.571/mes",
    minWageUSD: 280,
    vacationDays: 14,
    bonusMonths: 1,
    bonusName: "SAC (Sueldo Anual Complementario)",
    severance: "1 mes por año trabajado (mín. 2 meses)",
    socialSecurity: "26.5% patronal + 17% empleado",
    retirementAge: 65,
    maxWorkHours: 48,
    noticePeriod: "15–60 días según antigüedad",
    mainLaw: "Ley de Contrato de Trabajo (LCT)",
  },
  chile: {
    name: "Chile",
    flag: "🇨🇱",
    currency: "CLP",
    minWage: "$500.000/mes",
    minWageUSD: 550,
    vacationDays: 15,
    bonusMonths: 1,
    bonusName: "Gratificación legal",
    severance: "1 mes por año trabajado (máx. 11 años)",
    socialSecurity: "AFP (10%) + Salud (7%) + SIS — empleado; ~3% patronal",
    retirementAge: 65,
    maxWorkHours: 40,
    noticePeriod: "30 días (aviso previo o pago equivalente)",
    mainLaw: "Código del Trabajo",
  },
  peru: {
    name: "Perú",
    flag: "🇵🇪",
    currency: "PEN",
    minWage: "S/ 1.025/mes",
    minWageUSD: 275,
    vacationDays: 30,
    bonusMonths: 2,
    bonusName: "Gratificaciones (julio y diciembre)",
    severance: "CTS semestral + 1.5 meses por año (despido arbitrario)",
    socialSecurity: "9% empleado (EsSalud patronal); ONP o AFP",
    retirementAge: 65,
    maxWorkHours: 48,
    noticePeriod: "30 días (aviso previo)",
    mainLaw: "D. Leg. 728 — Ley de Fomento del Empleo",
  },
};

const VALID_PAIRS = [
  "mexico-vs-espana", "colombia-vs-mexico", "argentina-vs-chile",
  "espana-vs-colombia", "chile-vs-peru", "mexico-vs-colombia",
];

function parsePair(comparacion: string): [string, string] | null {
  const match = comparacion.match(/^(\w+(?:-\w+)*)-vs-(\w+(?:-\w+)*)$/);
  if (!match) return null;
  return [match[1], match[2]];
}

export async function generateStaticParams() {
  return VALID_PAIRS.map((pair) => ({ comparacion: pair }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparacion } = await params;
  const pair = parsePair(comparacion);
  if (!pair) return { title: "Comparación no encontrada" };
  const [a, b] = pair;
  const pA = PROFILES[a];
  const pB = PROFILES[b];
  if (!pA || !pB) return { title: "Comparación no encontrada" };
  return {
    title: `${pA.name} vs ${pB.name} | Derechos laborales comparados 2026`,
    description: `Compara los derechos laborales entre ${pA.name} y ${pB.name}: salario mínimo, vacaciones, aguinaldo, indemnización y más. Actualizado 2026.`,
  };
}

export default async function ComparacionPage({ params }: Props) {
  const { comparacion } = await params;
  const pair = parsePair(comparacion);
  if (!pair) notFound();
  const [slugA, slugB] = pair;
  const pA = PROFILES[slugA];
  const pB = PROFILES[slugB];
  if (!pA || !pB) notFound();

  const rows: { label: string; a: string | number; b: string | number; higherIsBetter: boolean }[] = [
    { label: "Salario mínimo mensual", a: pA.minWage, b: pB.minWage, higherIsBetter: true },
    { label: "Salario mínimo (USD ref.)", a: `~$${pA.minWageUSD}`, b: `~$${pB.minWageUSD}`, higherIsBetter: true },
    { label: "Días de vacaciones", a: `${pA.vacationDays} días`, b: `${pB.vacationDays} días`, higherIsBetter: true },
    { label: "Aguinaldo / bonus", a: `${pA.bonusName} (${pA.bonusMonths} mes${pA.bonusMonths !== 1 ? "es" : ""})`, b: `${pB.bonusName} (${pB.bonusMonths} mes${pB.bonusMonths !== 1 ? "es" : ""})`, higherIsBetter: true },
    { label: "Seguridad social", a: pA.socialSecurity, b: pB.socialSecurity, higherIsBetter: false },
    { label: "Edad de jubilación", a: `${pA.retirementAge} años`, b: `${pB.retirementAge} años`, higherIsBetter: false },
    { label: "Horas máx. semanales", a: `${pA.maxWorkHours}h`, b: `${pB.maxWorkHours}h`, higherIsBetter: false },
    { label: "Preaviso por renuncia", a: pA.noticePeriod, b: pB.noticePeriod, higherIsBetter: false },
    { label: "Indemnización por despido", a: pA.severance, b: pB.severance, higherIsBetter: false },
    { label: "Legislación principal", a: pA.mainLaw, b: pB.mainLaw, higherIsBetter: false },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <Link href="/comparar" className="hover:text-slate-800 transition-colors">Comparar</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">{pA.name} vs {pB.name}</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          {pA.flag} {pA.name} vs {pB.flag} {pB.name}
        </h1>
        <p className="text-lg text-slate-600">
          Comparación de derechos laborales, beneficios y condiciones de trabajo entre ambos países. Datos 2026.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-4xl mb-2">{pA.flag}</p>
          <p className="font-bold text-xl text-slate-800">{pA.name}</p>
          <p className="text-sm text-slate-500 mt-1">{pA.mainLaw}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
          <p className="text-4xl mb-2">{pB.flag}</p>
          <p className="font-bold text-xl text-slate-800">{pB.name}</p>
          <p className="text-sm text-slate-500 mt-1">{pB.mainLaw}</p>
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600 uppercase tracking-wide">
          <div className="px-4 py-3">Concepto</div>
          <div className="px-4 py-3 border-l border-slate-200">{pA.flag} {pA.name}</div>
          <div className="px-4 py-3 border-l border-slate-200">{pB.flag} {pB.name}</div>
        </div>
        <div className="divide-y divide-slate-100">
          {rows.map((row) => {
            const aNum = typeof row.a === "string" ? parseFloat(row.a.replace(/[^0-9.]/g, "")) : row.a as number;
            const bNum = typeof row.b === "string" ? parseFloat(row.b.replace(/[^0-9.]/g, "")) : row.b as number;
            const aWins = row.higherIsBetter ? aNum > bNum : aNum < bNum;
            const bWins = row.higherIsBetter ? bNum > aNum : bNum < aNum;

            return (
              <div key={row.label} className="grid grid-cols-3 text-sm">
                <div className="px-4 py-3 text-slate-600 font-medium">{row.label}</div>
                <div className={`px-4 py-3 border-l border-slate-100 ${aWins ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-700"}`}>
                  {String(row.a)}
                </div>
                <div className={`px-4 py-3 border-l border-slate-100 ${bWins ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-700"}`}>
                  {String(row.b)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">
        Datos orientativos basados en la legislación laboral general vigente en 2026. Los montos en moneda local pueden variar
        por actualizaciones del salario mínimo. Consulta siempre las fuentes oficiales para decisiones laborales importantes.
      </p>

      {/* Related calculators */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Calcula tus derechos en cada país</p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/${slugA}`} className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadoras {pA.name}
          </Link>
          <Link href={`/${slugB}`} className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Calculadoras {pB.name}
          </Link>
          <Link href="/comparar" className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            Otras comparaciones
          </Link>
        </div>
      </section>
    </div>
  );
}
