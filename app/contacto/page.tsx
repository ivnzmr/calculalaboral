import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con el equipo de CalculaLaboral para dudas, sugerencias o colaboraciones.",
};

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800 transition-colors">Inicio</Link>
        <span className="mx-2 text-slate-300">&rsaquo;</span>
        <span className="text-slate-800 font-medium">Contacto</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900">Contacto</h1>

      <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
        <p className="text-slate-600 leading-relaxed">
          ¿Tienes alguna pregunta, sugerencia o has encontrado un error en alguna calculadora? Estamos aquí para ayudarte.
        </p>

        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Correo electrónico</p>
            <a href="mailto:contacto@calculalaboral.net" className="text-blue-600 hover:underline font-medium">
              contacto@calculalaboral.net
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-800">¿En qué podemos ayudarte?</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Errores o discrepancias en los cálculos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Sugerencias de nuevas calculadoras</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Colaboraciones y patrocinios</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Cualquier otra consulta</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-800">
          <strong>Aviso importante:</strong> CalculaLaboral no ofrece asesoramiento jurídico ni laboral. Para consultas legales específicas, consulta siempre con un abogado o asesor laboral certificado.
        </div>
      </div>
    </div>
  );
}
