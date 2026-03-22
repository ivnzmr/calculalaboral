import type { Metadata } from "next";
import Link from "next/link";
import EmpleadorCalculator from "@/components/EmpleadorCalculator";

export const metadata: Metadata = {
  title: "Calculadora Coste de Contratar Empleado 2026 | Para empleadores",
  description:
    "Calcula el coste real de contratar a un empleado: salario, Seguridad Social patronal, aguinaldo, vacaciones e indemnización. Para empresas y emprendedores. Disponible para 9 países.",
  openGraph: {
    title: "¿Cuánto cuesta contratar un empleado? Calculadora 2026",
    description: "Descubre el coste total de contratación incluyendo todos los beneficios laborales obligatorios.",
  },
};

const faqs = [
  {
    q: "¿Por qué el coste real de un empleado es mayor que su salario?",
    a: "Además del salario bruto, el empleador debe pagar: contribuciones patronales a la seguridad social (pensiones, salud, desempleo), aguinaldo o gratificación anual obligatoria, vacaciones pagadas, y en algunos países, aportaciones a fondos de retiro. Estos costes pueden representar entre el 30% y el 60% adicional sobre el salario.",
  },
  {
    q: "¿Qué es la Seguridad Social patronal?",
    a: "Es la contribución que el empleador paga al sistema de seguridad social sobre el salario del trabajador. Financia pensiones, atención médica, seguro de desempleo y otros beneficios. El porcentaje varía por país: España ~29.5%, México ~32%, Colombia ~21.5%.",
  },
  {
    q: "¿La indemnización se paga siempre?",
    a: "La indemnización por despido se paga únicamente en caso de despido sin causa justificada. Si el trabajador renuncia voluntariamente o hay causa justificada de despido, generalmente no corresponde indemnización. Este cálculo muestra el escenario de mayor coste posible.",
  },
  {
    q: "¿Para qué sirve conocer el coste total?",
    a: "Es fundamental para fijar precios de productos o servicios, elaborar presupuestos anuales, comparar el coste de contratar empleados vs. externalizar, y tomar decisiones de contratación informadas.",
  },
];

export default function ParaEmpleadoresPage() {
  const year = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Para Empleadores</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Calculadora de Coste de Contratación {year}
        </h1>
        <p className="text-lg text-slate-600">
          Descubre el coste real de contratar un empleado más allá del salario bruto:
          seguridad social, aguinaldo, vacaciones e indemnización estimada.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-slate-800 mb-2">Para emprendedores y empresas</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Esta herramienta te ayuda a conocer el coste laboral total antes de hacer
          una oferta de empleo. Introduce el salario bruto mensual que ofrecerás y la
          duración estimada del contrato para ver el coste completo del periodo.
        </p>
      </div>

      <EmpleadorCalculator />

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
            { href: "/comparar-ofertas", label: "Comparar Ofertas Laborales" },
            { href: "/calculadora-freelance", label: "Tarifa Freelance" },
            { href: "/mexico/finiquito-vs-despido", label: "Finiquito vs Despido México" },
            { href: "/espana/finiquito-vs-despido", label: "Finiquito vs Despido España" },
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
