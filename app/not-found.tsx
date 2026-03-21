import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <p className="text-6xl font-bold text-slate-200">404</p>
      <h1 className="text-2xl font-bold text-slate-900">Página no encontrada</h1>
      <p className="text-slate-500">
        La página que buscas no existe o ha sido movida.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Ir al inicio
        </Link>
        <Link
          href="/mexico/calculadora-finiquito"
          className="bg-white border border-slate-200 hover:border-blue-400 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Calcular finiquito México
        </Link>
        <Link
          href="/colombia/calculadora-liquidacion"
          className="bg-white border border-slate-200 hover:border-blue-400 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Calcular liquidación Colombia
        </Link>
      </div>
    </div>
  );
}
