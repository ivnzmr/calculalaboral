import { ImageResponse } from "next/og";
import { countries } from "@/data/countries";

export const alt = "CalculaLaboral – Calculadora";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ pais: string; calculadora: string }> };

export default async function Image({ params }: Props) {
  const { pais, calculadora } = await params;
  const country = countries[pais];
  const calc = country?.calculators.find((c) => c.slug === calculadora);

  const calcName = calc?.name ?? calculadora.replace(/-/g, " ");
  const countryName = country?.name ?? pais;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#64748b",
            fontSize: "22px",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          CalculaLaboral · {countryName}
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: "1.1",
            marginBottom: "16px",
            maxWidth: "900px",
          }}
        >
          {calcName}
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginBottom: "36px",
          }}
        >
          Actualizado 2026 · Resultado inmediato
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              background: "#14532d",
              color: "#86efac",
              fontSize: "20px",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            Gratis
          </div>
          <div
            style={{
              background: "#1e293b",
              color: "#cbd5e1",
              fontSize: "20px",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            Sin registro
          </div>
          <div
            style={{
              background: "#1e293b",
              color: "#cbd5e1",
              fontSize: "20px",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            calculalaboral.net
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
