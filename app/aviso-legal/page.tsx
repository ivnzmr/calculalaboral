import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal y términos de uso de CalculaLaboral. Información sobre el uso del sitio y limitación de responsabilidad.",
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Aviso Legal</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900">Aviso Legal</h1>
      <p className="text-sm text-slate-500">Última actualización: marzo 2026</p>

      <div className="space-y-6 text-slate-700 leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">1. Titularidad del sitio</h2>
          <p>El presente sitio web <strong>calculalaboral.net</strong> es operado por CalculaLaboral. Para cualquier consulta puedes contactarnos en <a href="mailto:contacto@calculalaboral.net" className="text-blue-600 hover:underline">contacto@calculalaboral.net</a>.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">2. Objeto y condiciones de uso</h2>
          <p>CalculaLaboral es una plataforma gratuita de calculadoras laborales orientativas para trabajadores hispanohablantes. El acceso y uso del sitio implica la aceptación de las presentes condiciones.</p>
          <p>El usuario se compromete a hacer un uso lícito de los servicios ofrecidos, sin incurrir en actividades contrarias a la ley, la moral o el orden público.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">3. Carácter orientativo de los cálculos</h2>
          <p>Los resultados proporcionados por las calculadoras de este sitio tienen <strong>carácter meramente orientativo e informativo</strong>. No constituyen asesoramiento jurídico, fiscal, laboral ni de ningún otro tipo.</p>
          <p>Los cálculos se basan en la legislación laboral general de cada país y pueden no reflejar situaciones específicas derivadas de convenios colectivos, contratos individuales, sentencias judiciales o modificaciones legislativas recientes.</p>
          <p>CalculaLaboral recomienda consultar siempre con un abogado o asesor laboral certificado para casos concretos.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">4. Limitación de responsabilidad</h2>
          <p>CalculaLaboral no se hace responsable de:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Los daños o perjuicios derivados del uso de las calculadoras o de la información contenida en el sitio.</li>
            <li>La exactitud, integridad o actualización de los datos presentados.</li>
            <li>Los errores u omisiones en los contenidos del sitio.</li>
            <li>La disponibilidad y continuidad del funcionamiento del sitio.</li>
            <li>Los contenidos de sitios web de terceros enlazados desde este sitio.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">5. Propiedad intelectual</h2>
          <p>Todos los contenidos del sitio (textos, diseño, código, logotipos) son propiedad de CalculaLaboral o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual aplicables.</p>
          <p>Queda prohibida la reproducción, distribución o modificación de los contenidos sin autorización expresa, salvo para uso personal y no comercial.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">6. Ley aplicable y jurisdicción</h2>
          <p>El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales competentes conforme a la normativa aplicable.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">7. Modificaciones</h2>
          <p>CalculaLaboral se reserva el derecho de modificar el presente aviso legal en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio.</p>
        </section>

      </div>
    </div>
  );
}
