import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { platform } from "@/components/mockups/platform-tokens";

const STEPS = [
  { label: "Diagnóstico da capacidade atual", done: true },
  { label: "Plano individual definido", done: true },
  { label: "Contrato de transferência assinado", done: true },
  { label: "Evidência mínima combinada", done: false },
];

const DELIVERABLES = [
  {
    title: "Plano individual",
    body: "Capacidade escolhida: Liderança de Execução no Gemba. Foco: reuniões de início de turno.",
  },
  {
    title: "Contrato de transferência",
    body: "Situação real: parada de linha por falta de reabastecimento. Primeira ação: reunião de 5 minutos no início do turno.",
  },
  {
    title: "Evidência mínima definida",
    body: "Artefato 5W1H da causa raiz, validado pelo gestor em até 7 dias.",
  },
];

/** Tela 2 · Jornada 0 na prática. Recriação fiel ao ritual de entrada real, dados 100% fictícios. */
export function MockupJornada0() {
  const progressPct = 72;

  return (
    <div
      role="img"
      aria-label="Mockup de tela: ritual de entrada Jornada 0 do aprendiz Rafael Nascimento, três etapas concluídas e a evidência mínima ainda pendente, com os três entregáveis (plano individual, contrato de transferência, evidência mínima) visíveis, dados fictícios."
    >
      <div aria-hidden="true">
        <BrowserFrame address="academy.eximia.app/onboarding/ritual-de-entrada">
          <div style={{ backgroundColor: platform.bgApp }}>
            <div className="px-5 py-4" style={{ borderBottom: `1px solid ${platform.borderSubtle}` }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs" style={{ color: platform.textMuted }}>
                    Jornada 0 · Ritual de entrada
                  </p>
                  <p className="mt-1 text-sm font-medium" style={{ color: platform.textPrimary }}>
                    Rafael Nascimento · Time Operações
                  </p>
                </div>
                <span
                  className="rounded-full px-2.5 py-1 font-mono text-[0.625rem]"
                  style={{ backgroundColor: platform.bgElevated, color: platform.textMuted }}
                >
                  18 de 25 min
                </span>
              </div>
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full"
                style={{ backgroundColor: platform.bgSurface }}
                role="progressbar"
                aria-valuenow={progressPct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progresso da Jornada 0"
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${progressPct}%`, backgroundColor: platform.cerrado600 }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 px-5 py-5">
              <ul className="flex flex-col gap-2">
                {STEPS.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5"
                    style={{
                      backgroundColor: step.done ? platform.bgSurface : platform.cerrado600Soft,
                      boxShadow: step.done ? undefined : `inset 0 0 0 1px ${platform.cerrado600Border}`,
                    }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-bold"
                      style={
                        step.done
                          ? { backgroundColor: platform.cerrado600, color: "#fff" }
                          : { boxShadow: `inset 0 0 0 1px ${platform.cerrado500}`, color: platform.cerrado400 }
                      }
                    >
                      {step.done ? "✓" : ""}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: step.done ? platform.textMuted : platform.textPrimary,
                        textDecoration: step.done ? "line-through" : "none",
                        fontWeight: step.done ? 400 : 500,
                      }}
                    >
                      {step.label}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: platform.textMuted }}
              >
                Os três entregáveis da Jornada 0
              </p>

              <div className="flex flex-col gap-2.5">
                {DELIVERABLES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: platform.bgCard, boxShadow: platform.shadowCard }}
                  >
                    <p className="text-sm font-medium" style={{ color: platform.cerrado400 }}>
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: platform.textSecondary }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}
