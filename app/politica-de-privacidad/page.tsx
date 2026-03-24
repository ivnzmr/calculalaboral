import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de CalculaLaboral. Información sobre el tratamiento de datos personales, cookies y publicidad.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Política de Privacidad</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900">Política de Privacidad</h1>
      <p className="text-sm text-slate-500">Última actualización: marzo 2026</p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">1. Responsable del tratamiento</h2>
          <p>CalculaLaboral (<strong>calculalaboral.net</strong>) es el responsable del tratamiento de los datos personales recogidos a través de este sitio web. Puedes contactarnos en <a href="mailto:contacto@calculalaboral.net" className="text-blue-600 hover:underline">contacto@calculalaboral.net</a>.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">2. Datos que recopilamos</h2>
          <p>CalculaLaboral no recopila datos personales identificables de forma directa. No existe registro de usuarios ni formularios que almacenen información personal.</p>
          <p>Sin embargo, utilizamos servicios de terceros que pueden recopilar datos de forma automática:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Analytics</strong> — recopila datos de navegación anónimos (páginas visitadas, tiempo de sesión, país de origen, dispositivo). ID de medición: G-K16W12FKYE.</li>
            <li><strong>Google AdSense</strong> — muestra anuncios personalizados y puede utilizar cookies para medir su rendimiento. Publisher ID: ca-pub-7911209835387769.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">3. Cookies</h2>
          <p>Este sitio utiliza cookies propias y de terceros:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cookies técnicas</strong> — necesarias para el funcionamiento del sitio (preferencia de consentimiento de cookies).</li>
            <li><strong>Cookies analíticas</strong> — Google Analytics para medir el tráfico y comportamiento de los usuarios.</li>
            <li><strong>Cookies publicitarias</strong> — Google AdSense para mostrar anuncios relevantes.</li>
          </ul>
          <p>Puedes gestionar o desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que desactivar cookies puede afectar al funcionamiento del sitio.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">4. Finalidad del tratamiento</h2>
          <p>Los datos recopilados se utilizan para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Analizar el tráfico web y mejorar la experiencia del usuario.</li>
            <li>Mostrar publicidad relevante a través de Google AdSense.</li>
            <li>Garantizar la seguridad y el correcto funcionamiento del sitio.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">5. Base legal</h2>
          <p>El tratamiento de datos se basa en el consentimiento del usuario (Art. 6.1.a RGPD) para cookies no esenciales, y en el interés legítimo para el análisis del tráfico web.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">6. Transferencias internacionales</h2>
          <p>Google LLC (proveedor de Analytics y AdSense) puede transferir datos a servidores ubicados en Estados Unidos. Google cumple con el marco EU-EE.UU. de protección de datos.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">7. Tus derechos</h2>
          <p>De acuerdo con el RGPD, tienes derecho a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Acceder a tus datos personales.</li>
            <li>Rectificar datos inexactos.</li>
            <li>Solicitar la supresión de tus datos.</li>
            <li>Oponerte al tratamiento.</li>
            <li>Presentar una reclamación ante la autoridad de control (AEPD en España).</li>
          </ul>
          <p>Para ejercer tus derechos, contacta en <a href="mailto:contacto@calculalaboral.net" className="text-blue-600 hover:underline">contacto@calculalaboral.net</a>.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">8. Cambios en esta política</h2>
          <p>Podemos actualizar esta política de privacidad en cualquier momento. La fecha de última actualización aparece al inicio de esta página.</p>
        </section>

      </div>
    </div>
  );
}
