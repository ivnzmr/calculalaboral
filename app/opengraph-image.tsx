import { ImageResponse } from "next/og";

export const alt = "CalculaLaboral – Calculadoras Laborales Gratis 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          CalculaLaboral
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#94a3b8",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Calculadoras laborales gratis para 10 países
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          {["México", "Colombia", "España", "Argentina", "Chile", "Perú"].map(
            (country) => (
              <div
                key={country}
                style={{
                  background: "#1e293b",
                  color: "#cbd5e1",
                  fontSize: "18px",
                  padding: "8px 18px",
                  borderRadius: "8px",
                }}
              >
                {country}
              </div>
            )
          )}
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "20px",
            color: "#475569",
          }}
        >
          calculalaboral.net · Gratis · Sin registro
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
