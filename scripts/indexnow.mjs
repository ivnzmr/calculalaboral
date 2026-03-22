/**
 * IndexNow bulk submission script
 * Sends all site URLs to Bing/IndexNow for immediate indexing.
 * Run with: node scripts/indexnow.mjs
 */

const KEY = "f8e3462c66bf4be1b760d1cd6f03e179";
const HOST = "calculalaboral.net";
const BASE_URL = `https://${HOST}`;

const COUNTRIES = [
  "mexico", "colombia", "espana", "argentina", "chile",
  "peru", "ecuador", "venezuela", "costa-rica", "bolivia",
];

// All country-specific calculator slugs (mirrors data/countries.ts exactly)
const CALCULATORS = {
  mexico: [
    "calculadora-finiquito",
    "calculadora-liquidacion-despido-injustificado",
    "calculadora-aguinaldo",
    "calculadora-vacaciones",
    "calculadora-prima-vacacional",
    "calculadora-horas-extra",
    "calculadora-ptu",
    "calculadora-imss",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  colombia: [
    "calculadora-liquidacion",
    "calculadora-prima-servicios",
    "calculadora-cesantias",
    "calculadora-vacaciones",
    "calculadora-horas-extra",
    "calculadora-auxilio-transporte",
    "calculadora-seguridad-social",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  espana: [
    "calculadora-finiquito",
    "calculadora-despido-improcedente",
    "calculadora-despido-objetivo",
    "calculadora-pagas-extra",
    "calculadora-vacaciones",
    "calculadora-paro",
    "calculadora-irpf",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-seguridad-social",
    "calculadora-nomina-neta",
  ],
  argentina: [
    "calculadora-indemnizacion",
    "calculadora-sac",
    "calculadora-vacaciones",
    "calculadora-liquidacion-final",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  chile: [
    "calculadora-indemnizacion",
    "calculadora-gratificacion",
    "calculadora-feriado",
    "calculadora-finiquito",
    "calculadora-afp",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  peru: [
    "calculadora-cts",
    "calculadora-gratificaciones",
    "calculadora-vacaciones",
    "calculadora-liquidacion",
    "calculadora-afp-onp",
    "calculadora-horas-extra",
    "calculadora-igv",
    "calculadora-nomina-neta",
  ],
  ecuador: [
    "calculadora-decimo-tercero",
    "calculadora-decimo-cuarto",
    "calculadora-fondos-reserva",
    "calculadora-liquidacion",
    "calculadora-iess",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  venezuela: [
    "calculadora-utilidades",
    "calculadora-prestaciones-sociales",
    "calculadora-vacaciones",
    "calculadora-bono-vacacional",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  "costa-rica": [
    "calculadora-aguinaldo",
    "calculadora-cesantia",
    "calculadora-preaviso",
    "calculadora-vacaciones",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
  bolivia: [
    "calculadora-aguinaldo",
    "calculadora-segundo-aguinaldo",
    "calculadora-desahucio",
    "calculadora-vacaciones",
    "calculadora-horas-extra",
    "calculadora-iva",
    "calculadora-nomina-neta",
  ],
};

function buildUrlList() {
  const urls = [];

  // Homepage
  urls.push(`${BASE_URL}/`);

  // Country hubs
  for (const country of COUNTRIES) {
    urls.push(`${BASE_URL}/${country}`);
    urls.push(`${BASE_URL}/${country}/salario-minimo`);
    urls.push(`${BASE_URL}/${country}/dias-festivos-2026`);

    // Country calculators
    for (const calc of CALCULATORS[country] ?? []) {
      urls.push(`${BASE_URL}/${country}/${calc}`);
    }

    // Finiquito vs despido (where available)
    if (["mexico", "espana", "argentina", "colombia", "chile"].includes(country)) {
      urls.push(`${BASE_URL}/${country}/finiquito-vs-despido`);
    }
  }

  // Global tools
  const globalTools = [
    "/calculadora-freelance",
    "/calculadora-inflacion",
    "/calculadora-prestamo-nomina",
    "/calculadora-irpf",
    "/calculadora-pension",
    "/para-empleadores",
    "/comparar-ofertas",
    "/quiz-laboral",
    "/calculadora-nomada-digital",
  ];
  for (const tool of globalTools) urls.push(`${BASE_URL}${tool}`);

  // Blog
  urls.push(`${BASE_URL}/blog`);

  // Blog articles
  const BLOG_ARTICLES = [
    "como-calcular-finiquito-mexico",
    "liquidacion-colombia-guia-completa",
    "prestacion-desempleo-espana",
    "indemnizacion-despido-argentina",
    "finiquito-vs-liquidacion-diferencias",
    "calculo-aguinaldo-mexico",
    "vacaciones-colombia",
    "cts-peru-guia-completa",
    "carta-renuncia-voluntaria-mexico",
    "horas-extras-calculo",
    "diferencia-finiquito-liquidacion-mexico",
    "diferencia-finiquito-liquidacion-colombia",
    "diferencia-finiquito-liquidacion-espana",
    "diferencia-finiquito-liquidacion-argentina",
    "diferencia-finiquito-liquidacion-chile",
    "aguinaldo-colombia-2026",
    "aguinaldo-argentina-2026",
    "aguinaldo-venezuela-2026",
    "aguinaldo-costa-rica-2026",
    "aguinaldo-bolivia-2026",
    "aguinaldo-latam-cuando-se-paga-2026",
    "checklist-antes-de-renunciar-mexico",
    "checklist-antes-de-renunciar-colombia",
    "checklist-antes-de-renunciar-espana",
    "checklist-antes-de-renunciar-argentina",
    "checklist-antes-de-renunciar-chile",
    "salario-minimo-america-latina-2026",
    "derechos-laborales-que-no-sabias-mexico",
    "derechos-laborales-que-no-sabias-colombia",
    "derechos-laborales-que-no-sabias-espana",
    "derechos-laborales-que-no-sabias-argentina",
    "derechos-laborales-que-no-sabias-chile",
  ];
  for (const slug of BLOG_ARTICLES) urls.push(`${BASE_URL}/blog/${slug}`);

  // Carta de renuncia
  urls.push(`${BASE_URL}/carta-de-renuncia`);
  for (const country of COUNTRIES) {
    urls.push(`${BASE_URL}/carta-de-renuncia/${country}`);
  }

  // Comparar
  urls.push(`${BASE_URL}/comparar`);
  const pairs = [
    "mexico-vs-espana", "colombia-vs-mexico", "argentina-vs-chile",
    "espana-vs-colombia", "chile-vs-peru", "mexico-vs-colombia",
  ];
  for (const pair of pairs) urls.push(`${BASE_URL}/comparar/${pair}`);

  // Legal
  urls.push(`${BASE_URL}/politica-de-privacidad`);
  urls.push(`${BASE_URL}/aviso-legal`);
  urls.push(`${BASE_URL}/contacto`);

  return [...new Set(urls)]; // deduplicate
}

async function submitToIndexNow(urls) {
  const BATCH_SIZE = 1000; // IndexNow limit per request
  const batches = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }

  console.log(`\nSending ${urls.length} URLs in ${batches.length} batch(es)...\n`);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const body = {
      host: HOST,
      key: KEY,
      keyLocation: `${BASE_URL}/${KEY}.txt`,
      urlList: batch,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    const status = res.status;
    if (status === 200 || status === 202) {
      console.log(`✓ Batch ${i + 1}: ${batch.length} URLs accepted (HTTP ${status})`);
    } else {
      const text = await res.text();
      console.error(`✗ Batch ${i + 1}: HTTP ${status} — ${text}`);
    }
  }
}

const urls = buildUrlList();
console.log(`Built ${urls.length} URLs for ${HOST}`);
submitToIndexNow(urls).catch(console.error);
