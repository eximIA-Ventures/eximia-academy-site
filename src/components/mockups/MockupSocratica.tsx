import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PlatformAvatar } from "@/components/mockups/PlatformAvatar";
import { platform } from "@/components/mockups/platform-tokens";

const MESSAGES = [
  {
    role: "assistant" as const,
    text: "Antes de eu te dar uma resposta, me conta: o que exatamente aconteceu no gemba quando a meta não foi cumprida?",
  },
  {
    role: "user" as const,
    text: "A linha 2 parou 12 minutos porque faltou peça no ponto de reabastecimento.",
  },
  {
    role: "assistant" as const,
    text: "E qual foi a causa raiz que você observou, não a que te contaram?",
  },
  {
    role: "user" as const,
    text: "O ponto de reabastecimento não tem gatilho visual. O time só percebe a falta quando a linha já parou.",
  },
  {
    role: "assistant" as const,
    text: "Se você fosse implementar um gatilho visual amanhã, qual seria a primeira ação, e quem precisa concordar com ela antes?",
  },
];

const INTERACTIONS_USED = 5;
const INTERACTIONS_TOTAL = 6;

/** Tela 1 · Sessão socrática. Recriação fiel à sessão real (socratic-chat.tsx), dados 100% fictícios. */
export function MockupSocratica() {
  const pct = Math.round((INTERACTIONS_USED / INTERACTIONS_TOTAL) * 100);

  return (
    <div
      role="img"
      aria-label="Mockup de tela: sessão de diálogo socrático da IA com o aprendiz Rafael Nascimento sobre uma parada de linha no gemba, cinco trocas de mensagem até a pergunta 5 de 6, dados fictícios."
    >
      <div aria-hidden="true">
        <BrowserFrame address="academy.eximia.app/courses/lideranca-gemba/session">
          <div style={{ backgroundColor: platform.bgApp }}>
            <div
              className="flex items-center justify-between gap-3 px-5 py-3"
              style={{ borderBottom: `1px solid ${platform.borderSubtle}` }}
            >
              <span
                className="flex shrink-0 items-center gap-1.5 text-xs"
                style={{ color: platform.textMuted }}
              >
                <span aria-hidden="true">←</span>
                <span className="hidden sm:inline">Voltar</span>
              </span>
              <span
                className="min-w-0 flex-1 truncate text-center text-xs"
                style={{ color: platform.textSecondary }}
              >
                Liderança de Execução no Gemba
              </span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span
                  className="relative flex h-6 w-6 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(${platform.cerrado600} ${pct}%, ${platform.bgElevated} 0)`,
                  }}
                >
                  <span
                    className="h-[18px] w-[18px] rounded-full"
                    style={{ backgroundColor: platform.bgApp }}
                  />
                </span>
                <span
                  className="font-mono text-[0.625rem] tabular-nums"
                  style={{ color: platform.textMuted }}
                >
                  {INTERACTIONS_USED}/{INTERACTIONS_TOTAL}
                </span>
              </span>
            </div>

            <div className="flex flex-col gap-4 px-5 py-6">
              {MESSAGES.map((message, index) => {
                const isAssistant = message.role === "assistant";
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${isAssistant ? "" : "flex-row-reverse"}`}
                  >
                    <PlatformAvatar
                      initials={isAssistant ? "IA" : "RN"}
                      tone={isAssistant ? "ai" : "user"}
                    />
                    <div
                      className="max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
                      style={
                        isAssistant
                          ? {
                              borderTopLeftRadius: "0.25rem",
                              backgroundColor: platform.bgCard,
                              color: platform.textPrimary,
                              boxShadow: platform.shadowCard,
                            }
                          : {
                              borderTopRightRadius: "0.25rem",
                              backgroundColor: platform.cerrado600Soft,
                              color: platform.textPrimary,
                              boxShadow: `inset 0 0 0 1px ${platform.cerrado600Ring}`,
                            }
                      }
                    >
                      {message.text}
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="px-5 py-4"
              style={{ borderTop: `1px solid ${platform.borderSubtle}` }}
            >
              <div
                className="flex items-end gap-2 rounded-2xl p-2"
                style={{ backgroundColor: platform.bgCard, boxShadow: platform.shadowCard }}
              >
                <p
                  className="min-w-0 flex-1 truncate px-3 py-2 text-sm"
                  style={{ color: platform.textSecondary }}
                >
                  Vou propor um cartão kanban no ponto de reposição e...
                </p>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold"
                  style={{ backgroundColor: platform.cerrado600, color: "#fff" }}
                  aria-hidden="true"
                >
                  ↑
                </span>
              </div>
              <p
                className="mt-1.5 text-center text-[10px]"
                style={{ color: platform.textMuted }}
              >
                Enter para enviar · Shift+Enter para nova linha
              </p>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}
