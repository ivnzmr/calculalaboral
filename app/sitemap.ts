import type { MetadataRoute } from "next";
import { countries, getAllCalculatorPaths } from "@/data/countries";
import { articles } from "@/data/articles";

const BASE_URL = "https://calculalaboral.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage
  const homePage: MetadataRoute.Sitemap[number] = {
    url: BASE_URL,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  };

  // Country hub pages
  const countryPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Individual calculator pages
  const calculatorPages: MetadataRoute.Sitemap = getAllCalculatorPaths().map(
    ({ pais, calculadora }) => ({
      url: `${BASE_URL}/${pais}/${calculadora}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })
  );

  // Blog pages
  const blogIndexPage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const blogArticlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Carta de renuncia pages
  const cartaIndexPage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/carta-de-renuncia`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  };

  const cartaPaisPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/carta-de-renuncia/${countrySlug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Salario mínimo pages
  const salarioMinimoPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}/salario-minimo`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.85,
    })
  );

  // Días festivos pages
  const diasFestivosPages: MetadataRoute.Sitemap = Object.keys(countries).map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}/dias-festivos-2026`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })
  );

  // Comparador finiquito vs despido pages
  const comparadorPages: MetadataRoute.Sitemap = ["mexico", "espana", "argentina", "colombia", "chile"].map(
    (countrySlug) => ({
      url: `${BASE_URL}/${countrySlug}/finiquito-vs-despido`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  );

  // Calculadora freelance
  const freelancePage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/calculadora-freelance`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  };

  // New tools (Category A: calculators, Category B: audiences, Category D: SEO)
  const newToolPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/calculadora-inflacion`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/calculadora-prestamo-nomina`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/calculadora-irpf`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.85 },
    { url: `${BASE_URL}/calculadora-pension`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE_URL}/para-empleadores`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/comparar-ofertas`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/quiz-laboral`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/calculadora-nomada-digital`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/comparar`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const comparacionPages: MetadataRoute.Sitemap = [
    "mexico-vs-espana", "colombia-vs-mexico", "argentina-vs-chile",
    "espana-vs-colombia", "chile-vs-peru", "mexico-vs-colombia",
  ].map((pair) => ({
    url: `${BASE_URL}/comparar/${pair}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/politica-de-privacidad`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/aviso-legal`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/contacto`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
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
    ...legalPages,
  ];
}
