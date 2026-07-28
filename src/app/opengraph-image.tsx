import { ImageResponse } from "next/og";

/**
 * Card social gerado na build. Sem ele, todo link compartilhado da landing
 * em LinkedIn ou WhatsApp aparecia como retângulo cinza sem identidade, o
 * que custa clique justamente no canal em que uma página B2B circula.
 *
 * Sem dependência de fonte externa de propósito: `ImageResponse` cai na
 * fonte embutida do runtime, o que torna a geração determinística e imune a
 * falha de rede no momento da build.
 */
export const alt =
  "exímIA Academy · Treinamento termina. Capacidade fica. Escola AI First de capacidades humanas.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#140d07",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "rgba(255, 107, 44, 0.22)",
            filter: "blur(90px)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#ff6b2c",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#b8afa6",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            exímIA Academy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#f5ede6",
              fontSize: 82,
              lineHeight: 1.05,
              letterSpacing: -2,
              fontWeight: 700,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Treinamento termina.</span>
            <span style={{ color: "#ff8a50" }}>Capacidade fica.</span>
          </div>
          <div
            style={{
              color: "#b8afa6",
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: 900,
              display: "flex",
            }}
          >
            A escola AI First de capacidades humanas. Aprendizagem que vira
            evidência aplicada no trabalho, medida pelo HCI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(245, 237, 230, 0.14)",
            paddingTop: 28,
            color: "#b8afa6",
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>
            Human Capability Index · métrica-mãe
          </div>
          <div style={{ display: "flex", color: "#ff8a50" }}>
            Não é LMS. Não é LXP.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
