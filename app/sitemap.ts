import type { MetadataRoute } from "next";
import { countries, getAllCalculatorPaths } from "@/data/countries";
import { articles } from "@/data/articles";

const BASE_URL = "https://calculalaboral.net";

// Static dates prevent Google from ignoring lastModified due to constant "today" values
const DATE_CALC_UPDATED = new Date("2026-01-15"); // when 2026 legal data was updated
const DATE_SEASONAL = new Date("2026-01-01");
const DATE_STATIC = new Date("2026-01-15");

export default function sitemap(): MetadataRoute.Sitemap {

  // Homepage
  const homePage: MetadataRoute.Sitemap[number] = {
    url: BASE_URL,
    lastModified: DATE_STATIC,
    changeFrequency: "monthly",
    priority: 1,
  };

  // Country hub pages
  const countryPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}`,
      lastModified: DATE_STATIC,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Individual calculator pages
  const calculatorPages: MetadataRoute.Sitemap = getAllCalculatorPaths().map(
    ({ pais, calculadora }) => ({
      url: `${BASE_URL}/${pais}/${calculadora}`,
      lastModified: DATE_CALC_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })
  );

  // Blog pages
  const blogIndexPage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/blog`,
    lastModified: DATE_STATIC,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const blogArticlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.modifiedDate ?? article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Carta de renuncia pages
  const cartaIndexPage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/carta-de-renuncia`,
    lastModified: DATE_STATIC,
    changeFrequency: "monthly",
    priority: 0.8,
  };

  const cartaPaisPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/carta-de-renuncia/${countrySlug}`,
      lastModified: DATE_STATIC,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Salario mínimo pages
  const salarioMinimoPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}/salario-minimo`,
      lastModified: DATE_STATIC,
      changeFrequency: "yearly" as const,
      priority: 0.85,
    })
  );

  // Días festivos pages
  const diasFestivosPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}/dias-festivos-2026`,
      lastModified: DATE_STATIC,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })
  );

  // Comparador finiquito vs despido pages
  const comparadorPages: MetadataRoute.Sitemap = ["mexico", "espana", "argentina", "colombia", "chile"].map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}/finiquito-vs-despido`,
      lastModified: DATE_STATIC,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  );

  // Calculadora freelance
  const freelancePage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/calculadora-freelance`,
    lastModified: DATE_STATIC,
    changeFrequency: "monthly",
    priority: 0.8,
  };

  // New tools (Category A: calculators, Category B: audiences, Category D: SEO)
  const newToolPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/calculadora-inflacion`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/calculadora-prestamo-nomina`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/calculadora-irpf`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/calculadora-pension`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE_URL}/para-empleadores`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/comparar-ofertas`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/quiz-laboral`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/calculadora-nomada-digital`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/comparar`, lastModified: DATE_STATIC, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const comparacionPages: MetadataRoute.Sitemap = [
    "mexico-vs-espana", "colombia-vs-mexico", "argentina-vs-chile",
    "espana-vs-colombia", "chile-vs-peru", "mexico-vs-colombia",
  ].map((pair) => ({
    url: `${BASE_URL}/comparar/${pair}`,
    lastModified: DATE_STATIC,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Seasonal pages (year-targeted, high search spike)
  const seasonalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/mexico/aguinaldo-2026`, lastModified: DATE_SEASONAL, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/colombia/prima-servicios-2026`, lastModified: DATE_SEASONAL, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/peru/gratificacion-julio-2026`, lastModified: DATE_SEASONAL, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/peru/cts-mayo-2026`, lastModified: DATE_SEASONAL, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/argentina/sac-junio-2026`, lastModified: DATE_SEASONAL, changeFrequency: "yearly" as const, priority: 0.85 },
  ];

  // Tax reference pages
  const taxPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/mexico/tabla-isr-2026`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/espana/tramos-irpf-2026`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.85 },
  ];

  // Comparativa salario mínimo
  const comparativaSalarioPage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/comparar-salario-minimo`,
    lastModified: DATE_STATIC,
    changeFrequency: "yearly",
    priority: 0.85,
  };

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/metodologia`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${BASE_URL}/politica-de-privacidad`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/aviso-legal`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/contacto`, lastModified: DATE_STATIC, changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  return [
    homePage,
    ...countryPages,
    ...calculatorPages,
    ...salarioMinimoPages,
    ...diasFestivosPages,
    blogIndexPage,
    ...blogArticlePages,
    cartaIndexPage,
    ...cartaPaisPages,
    ...comparadorPages,
    freelancePage,
    ...newToolPages,
    ...comparacionPages,
    ...taxPages,
    comparativaSalarioPage,
    ...seasonalPages,
    ...legalPages,
  ];
}
