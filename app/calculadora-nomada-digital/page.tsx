import type { Metadata } from "next";
import Link from "next/link";
import NomadaDigitalCalculator from "@/components/NomadaDigitalCalculator";

export const metadata: Metadata = {
  title: "Calculadora Nómada Digital 2026 | ¿Puedes vivir y trabajar desde otro país?",
  description:
    "Calcula si puedes vivir como nómada digital: coste de vida estimado en destino, ahorro vs tu ciudad actual, runway con tus ahorros y visas disponibles. Para trabajadores remotos hispanohablantes.",
  openGraph: {
    title: "Calculadora Nómada Digital 2026",
    description: "¿Te sale a cuenta trabajar de forma remota desde México, España, Colombia o Portugal? Calcula tu viabilidad.",
  },
};

const faqs = [
  {
    q: "¿Qué es un nómada digital?",
    a: "Un nómada digital es un trabajador que realiza su trabajo de forma remota desde distintos países, aprovechando que sus ingresos provienen de clientes o empleadores en otros lugares con mayor poder adquisitivo.",
  },
  {
    q: "¿Necesito una visa especial para trabajar remotamente?",
    a: "Depende del país y la duración. Para estancias cortas (hasta 90 días) suele bastar el pasaporte. Países como España, Colombia, Portugal o Costa Rica tienen visas específicas para nómadas digitales que permiten estancias más largas con condiciones fiscales favorables.",
  },
  {
    q: "¿Debo pagar impuestos en el país donde estoy?",
    a: "En general, si pasas más de 183 días en un país, puedes considerarte residente fiscal y estar obligado a tributar allí. Para estancias cortas, normalmente tributa solo en tu país de origen. Consulta a un asesor fiscal especializado en expatriados.",
  },
  {
    q: "¿El cálculo incluye el coste del seguro médico?",
    a: "No. El seguro médico internacional para nómadas digitales varía mucho según edad, cobertura y destinos. Presupuesta entre $50 y $300 USD mensuales adicionales según tu perfil.",
  },
];

export default function CalculadoraNomadaDigitalPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Calculadora Nómada Digital</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora Nómada Digital {year}
        </h1>
        <p className="text-lg text-slate-600">
          Descubre si te sale a cuenta trabajar remotamente desde otro país:
          calcula el coste de vida estimado, cuánto ahorrarías y si hay visa disponible.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">¿Cómo funciona?</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Selecciona tu destino, introduce tus ingresos en USD y tu coste de vida
          actual. Compararemos el coste estimado en el destino con lo que gastas ahora
          para mostrarte si es una opción viable económicamente.
        </p>
      </div>

      <NomadaDigitalCalculator />

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-800 mb-2">{faq.q}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <p className="font-semibold text-slate-800 mb-3">Herramientas relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: "/calculadora-freelance", label: "Calculadora Freelance" },
            { href: "/calculadora-irpf", label: "IRPF / ISR" },
            { href: "/comparar-ofertas", label: "Comparar Ofertas" },
            { href: "/carta-de-renuncia", label: "Carta de Renuncia" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm bg-white border border-slate-200 hover:border-blue-400 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
