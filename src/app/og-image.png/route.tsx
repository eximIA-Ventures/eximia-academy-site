import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#F7F4EF",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{ width: "48px", height: "48px", background: "oklch(0.64 0.17 42)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>
            eA
          </div>
          <span style={{ fontSize: "24px", color: "#8A8378", letterSpacing: "0.1em" }}>EXIMIA ACADEMY</span>
        </div>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "#1A1714", lineHeight: 1.1, marginBottom: "24px" }}>
          Educação Corporativa
          <br />
          <span style={{ color: "oklch(0.64 0.17 42)", fontStyle: "italic" }}>com IA Socrática.</span>
        </div>
        <div style={{ fontSize: "24px", color: "#8A8378", maxWidth: "600px" }}>
          A única plataforma onde a IA faz as perguntas e o colaborador constrói o conhecimento.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
