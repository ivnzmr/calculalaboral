import { ImageResponse } from "next/og";
import { countries } from "@/data/countries";

export const alt = "CalculaLaboral – Calculadoras Laborales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ pais: string }> };

export default async function Image({ params }: Props) {
  const { pais } = await params;
  const country = countries[pais];
  const countryName = country?.name ?? pais;
  const calcCount = country?.calculators?.length ?? 0;

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
            textTransform: "uppercase",
          }}
        >
          CalculaLaboral
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#94a3b8",
            marginBottom: "12px",
          }}
        >
          Calculadoras Laborales
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: "1",
            marginBottom: "32px",
          }}
        >
          {countryName} 2026
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              background: "#1e3a5f",
              color: "#93c5fd",
              fontSize: "20px",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            {calcCount} calculadoras
          </div>
          <div
            style={{
              background: "#1e3a5f",
              color: "#93c5fd",
              fontSize: "20px",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            Gratis
          </div>
          <div
            style={{
              background: "#1e3a5f",
              color: "#93c5fd",
              fontSize: "20px",
              padding: "10px 22px",
              borderRadius: "8px",
            }}
          >
            Sin registro
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
