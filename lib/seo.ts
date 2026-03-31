export const HREFLANG_MAP: Record<string, string> = {
  mexico: "es-MX",
  colombia: "es-CO",
  espana: "es-ES",
  argentina: "es-AR",
  chile: "es-CL",
  peru: "es-PE",
  ecuador: "es-EC",
  venezuela: "es-VE",
  "costa-rica": "es-CR",
  bolivia: "es-BO",
};

export function buildAlternates(
  canonicalUrl: string,
  pais: string
): { canonical: string; languages: Record<string, string> } {
  return {
    canonical: canonicalUrl,
    languages: {
      [HREFLANG_MAP[pais] ?? "es"]: canonicalUrl,
      es: "https://calculalaboral.net",
      "x-default": "https://calculalaboral.net",
    },
  };
}
