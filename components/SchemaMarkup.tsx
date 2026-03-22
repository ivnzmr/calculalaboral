// FILE: components/SchemaMarkup.tsx

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CalculaLaboral",
    url: "https://calculalaboral.net",
    description:
      "Calculadoras laborales gratuitas para 10 países hispanohablantes. Más de 90 herramientas para calcular finiquito, liquidación, aguinaldo, vacaciones y más.",
    logo: "https://calculalaboral.net/logo.png",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CalculatorSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "CalculaLaboral",
      url: "https://calculalaboral.net",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  publishDate,
  countryName,
}: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  countryName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishDate,
    about: countryName,
    publisher: {
      "@type": "Organization",
      name: "CalculaLaboral",
      url: "https://calculalaboral.net",
      logo: {
        "@type": "ImageObject",
        url: "https://calculalaboral.net/logo.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "CalculaLaboral",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ q: string; a: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
