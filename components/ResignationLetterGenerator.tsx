"use client";

import { useState } from "react";

type Props = {
  countrySlug: string;
  countryName: string;
};

type FormData = {
  workerName: string;
  workerPosition: string;
  companyName: string;
  employerName: string;
  city: string;
  startDate: string;
  lastDay: string;
  reason: string;
};

const emptyForm: FormData = {
  workerName: "",
  workerPosition: "",
  companyName: "",
  employerName: "",
  city: "",
  startDate: "",
  lastDay: "",
  reason: "",
};

function formatDate(iso: string): string {
  if (!iso) return "___________";
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function generateLetter(form: FormData, countrySlug: string, countryName: string): string {
  const today = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const city = form.city || "___________";
  const workerName = form.workerName || "___________";
  const position = form.workerPosition || "___________";
  const company = form.companyName || "___________";
  const employer = form.employerName || "___________";
  const lastDay = formatDate(form.lastDay);
  const startDate = formatDate(form.startDate);

  const legalNote = getLegalNote(countrySlug, lastDay);
  const finiquitoLine = getFiniquitoLine(countrySlug, company);
  const reasonLine = form.reason
    ? `\nLos motivos que me llevan a tomar esta decisión son los siguientes:\n${form.reason}\n`
    : "";

  return `${city}, ${today}

${employer}
${company}
Presente

Estimado/a Sr./Sra.:

Por medio de la presente, yo ${workerName}, en mi carácter de ${position}, me dirijo a usted respetuosamente para comunicarle mi renuncia voluntaria al cargo que actualmente desempeño en ${company}, a partir del día ${lastDay}.
${reasonLine}
He prestado mis servicios en esta empresa desde el ${startDate}, y agradezco la oportunidad de desarrollo profesional que me fue brindada durante este tiempo.
${legalNote}
${finiquitoLine}

Quedo a su disposición para facilitar la transición y el proceso de entrega del cargo durante el tiempo que reste.

Sin otro particular, quedo en espera de su confirmación.

Atentamente,


_______________________________
${workerName}
${position}
`;
}

function getLegalNote(countrySlug: string, lastDay: string): string {
  switch (countrySlug) {
    case "mexico":
      return `Doy el aviso correspondiente conforme a las disposiciones de la Ley Federal del Trabajo, siendo mi último día laboral el ${lastDay}.`;
    case "colombia":
      return `Comunico mi renuncia con el preaviso establecido conforme al Código Sustantivo del Trabajo, siendo mi último día laborable el ${lastDay}.`;
    case "espana":
      return `Comunico la presente con un preaviso de 15 días naturales conforme al Estatuto de los Trabajadores (Art. 49.1.d), siendo mi último día de trabajo el ${lastDay}.`;
    case "argentina":
      return `Notifico la presente con el preaviso correspondiente según la Ley de Contrato de Trabajo (Art. 231 LCT), siendo mi último día laboral el ${lastDay}.`;
    case "chile":
      return `Comunico mi renuncia con el aviso previo correspondiente conforme al Código del Trabajo, siendo mi último día laboral el ${lastDay}.`;
    case "peru":
      return `Comunicó la presente con 30 días de anticipación conforme a la Ley de Productividad y Competitividad Laboral (D.S. 003-97-TR), siendo mi último día laboral el ${lastDay}.`;
    case "ecuador":
      return `Notifico la presente conforme al Código del Trabajo ecuatoriano, siendo mi último día laboral el ${lastDay}.`;
    case "venezuela":
      return `Comunico la presente con el preaviso correspondiente según la LOTTT, siendo mi último día laboral el ${lastDay}.`;
    case "costa-rica":
      return `Comunico la presente con el preaviso legal correspondiente conforme al Código de Trabajo de Costa Rica, siendo mi último día laboral el ${lastDay}.`;
    case "bolivia":
      return `Notifico la presente conforme a la Ley General del Trabajo de Bolivia, siendo mi último día laboral el ${lastDay}.`;
    default:
      return `Mi último día laboral será el ${lastDay}.`;
  }
}

function getFiniquitoLine(countrySlug: string, company: string): string {
  switch (countrySlug) {
    case "mexico":
      return `Asimismo, solicito que ${company} proceda a elaborar y pagar el finiquito correspondiente, incluyendo los días trabajados, aguinaldo proporcional, vacaciones proporcionales y prima vacacional, conforme a la Ley Federal del Trabajo.`;
    case "colombia":
      return `Solicito que ${company} realice la liquidación de mis prestaciones sociales (cesantías, intereses sobre cesantías, prima de servicios y vacaciones proporcionales) conforme al Código Sustantivo del Trabajo.`;
    case "espana":
      return `Solicito que ${company} proceda a liquidar y abonar el finiquito correspondiente, incluyendo el salario devengado, vacaciones no disfrutadas y las partes proporcionales de las pagas extraordinarias.`;
    case "argentina":
      return `Solicito a ${company} la liquidación final correspondiente, incluyendo SAC proporcional, vacaciones proporcionales y demás conceptos que correspondan conforme a la Ley de Contrato de Trabajo.`;
    case "chile":
      return `Solicito que ${company} proceda a liquidar el finiquito correspondiente, incluyendo feriado proporcional, gratificación proporcional y demás conceptos que correspondan.`;
    case "peru":
      return `Solicito que ${company} realice el cálculo y pago de los beneficios sociales que correspondan, incluyendo CTS, vacaciones truncas y gratificaciones proporcionales.`;
    default:
      return `Solicito a ${company} proceder con la liquidación de todos los beneficios y prestaciones que me correspondan por ley.`;
  }
}

const inputClass =
  "w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 text-sm";
const labelClass = "block text-sm font-semibold text-slate-700 mb-1";

export default function ResignationLetterGenerator({ countrySlug, countryName }: Props) {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [showLetter, setShowLetter] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setShowLetter(false);
  }

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setShowLetter(true);
  }

  function handleDownload() {
    const text = generateLetter(form, countrySlug, countryName);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `carta-de-renuncia-${countrySlug}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  }

  const letter = generateLetter(form, countrySlug, countryName);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Tus datos
          </h2>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tu nombre completo</label>
                <input
                  name="workerName"
                  type="text"
                  value={form.workerName}
                  onChange={handleChange}
                  placeholder="Ej: María García López"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Tu puesto de trabajo</label>
                <input
                  name="workerPosition"
                  type="text"
                  value={form.workerPosition}
                  onChange={handleChange}
                  placeholder="Ej: Analista de Marketing"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nombre de la empresa</label>
                <input
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Ej: Empresa S.A. de C.V."
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Nombre del empleador / destinatario</label>
                <input
                  name="employerName"
                  type="text"
                  value={form.employerName}
                  onChange={handleChange}
                  placeholder="Ej: Carlos Martínez"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Ciudad</label>
                <input
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Ej: Ciudad de México"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Fecha de inicio laboral</label>
                <input
                  name="startDate"
                  type="date"
                  value={form.startDate}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Último día de trabajo</label>
              <input
                name="lastDay"
                type="date"
                value={form.lastDay}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>
                Motivo de la renuncia{" "}
                <span className="text-slate-400 font-normal">(opcional)</span>
              </label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                rows={3}
                placeholder="Puedes dejarlo en blanco para una carta más formal"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl w-full transition-colors"
            >
              Generar carta
            </button>
          </form>
        </div>

        {/* Preview */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              Vista previa
            </h2>
            {showLetter && (
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                {downloaded ? "¡Descargado!" : "Descargar .txt"}
              </button>
            )}
          </div>

          {showLetter ? (
            <pre className="flex-1 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50 rounded-lg p-4 border border-slate-200 overflow-auto font-mono">
              {letter}
            </pre>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-300 text-slate-400 text-sm p-6 text-center">
              Completa el formulario y pulsa &ldquo;Generar carta&rdquo; para ver la vista previa.
            </div>
          )}
        </div>
      </div>

      {showLetter && (
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          Esta carta es una plantilla orientativa adaptada a {countryName}. Revisa el contenido y
          consúltala con un asesor laboral si tienes dudas antes de presentarla.
        </div>
      )}
    </div>
  );
}
