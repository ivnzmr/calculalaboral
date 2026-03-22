import { countries } from "@/data/countries";

const BASE_URL = "https://calculalaboral.net";

const FEATURED_WIDGETS = [
  { pais: "mexico", slug: "calculadora-finiquito", label: "Finiquito México" },
  { pais: "colombia", slug: "calculadora-liquidacion", label: "Liquidación Colombia" },
  { pais: "espana", slug: "calculadora-finiquito", label: "Finiquito España" },
  { pais: "argentina", slug: "calculadora-indemnizacion", label: "Indemnización Argentina" },
  { pais: "chile", slug: "calculadora-finiquito", label: "Finiquito Chile" },
  { pais: "mexico", slug: "calculadora-aguinaldo", label: "Aguinaldo México" },
];

export default function WidgetIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Widgets Embebibles</h1>
        <p className="text-slate-600 text-sm">
          Integra nuestras calculadoras en tu web o blog con un simple iframe.
          Copia el código HTML y pégalo en tu página.
        </p>
      </div>

      <div className="space-y-6">
        {FEATURED_WIDGETS.map((w) => {
          const country = countries[w.pais];
          if (!country) return null;
          const iframeSrc = `${BASE_URL}/${w.pais}/${w.slug}`;
          const embedCode = `<iframe src="${iframeSrc}?embed=1" width="100%" height="700" frameborder="0" loading="lazy" title="${w.label} - CalculaLaboral"></iframe>`;

          return (
            <div key={`${w.pais}-${w.slug}`} className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-800">{w.label}</h2>
                <a
                  href={iframeSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Ver calculadora →
                </a>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs font-medium text-slate-500 mb-2">Código de integración:</p>
                <code className="text-xs text-slate-700 break-all">{embedCode}</code>
              </div>
              <p className="text-xs text-slate-400">
                Atribución requerida: incluye un enlace visible a{" "}
                <a href={BASE_URL} className="text-blue-500 hover:underline">calculalaboral.net</a>
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-slate-700">
        <strong className="text-slate-800">Condiciones de uso:</strong> Las calculadoras son gratuitas para uso personal y editorial.
        Para uso comercial o integraciones masivas, contáctanos en{" "}
        <a href={`${BASE_URL}/contacto`} className="text-blue-600 hover:underline">calculalaboral.net/contacto</a>.
        Se requiere mantener el enlace de atribución visible.
      </div>
    </div>
  );
}
