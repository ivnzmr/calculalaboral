/**
 * IndexNow bulk submission script
 * Sends all site URLs to Bing/IndexNow for immediate indexing.
 * Run with: node scripts/indexnow.mjs
 */

const KEY = "87e32b3a64bd409f951ca38604838b4e";
const HOST = "calculalaboral.net";
const BASE_URL = `https://${HOST}`;

const COUNTRIES = [
  "mexico", "colombia", "espana", "argentina", "chile",
  "peru", "ecuador", "venezuela", "costa-rica", "bolivia",
];

// All country-specific calculator slugs (mirrors data/countries.ts)
const CALCULATORS = {
  mexico: [
    "calculadora-finiquito",
    "calculadora-liquidacion-despido-injustificado",
    "calculadora-aguinaldo",
    "calculadora-vacaciones",
    "calculadora-prima-vacacional",
    "calculadora-isr",
    "calculadora-imss",
    "calculadora-nomina-neta",
  ],
  colombia: [
    "calculadora-liquidacion",
    "calculadora-cesantias",
    "calculadora-prima",
    "calculadora-vacaciones",
    "calculadora-intereses-cesantias",
    "calculadora-nomina-neta",
  ],
  espana: [
    "calculadora-finiquito",
    "calculadora-despido-improcedente",
    "calculadora-paro",
    "calculadora-irpf",
    "calculadora-iva",
    "calculadora-vacaciones",
  ],
  argentina: [
    "calculadora-indemnizacion",
    "calculadora-sac",
    "calculadora-vacaciones",
    "calculadora-liquidacion-final",
    "calculadora-horas-extra",
  ],
  chile: [
    "calculadora-finiquito",
    "calculadora-gratificacion",
    "calculadora-afp",
    "calculadora-vacaciones",
    "calculadora-indemnizacion",
  ],
  peru: [
    "calculadora-cts",
    "calculadora-gratificacion",
    "calculadora-vacaciones",
    "calculadora-liquidacion-final",
    "calculadora-onp",
    "calculadora-afp",
  ],
  ecuador: [
    "calculadora-decimo-tercero",
    "calculadora-decimo-cuarto",
    "calculadora-fondos-reserva",
    "calculadora-liquidacion-final",
    "calculadora-iess",
  ],
  venezuela: [
    "calculadora-prestaciones-sociales",
    "calculadora-utilidades",
    "calculadora-vacaciones",
    "calculadora-bono-vacacional",
  ],
  "costa-rica": [
    "calculadora-aguinaldo",
    "calculadora-cesantia",
    "calculadora-preaviso",
    "calculadora-vacaciones",
  ],
  bolivia: [
    "calculadora-aguinaldo",
    "calculadora-desahucio",
    "calculadora-vacaciones",
    "calculadora-liquidacion-final",
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
