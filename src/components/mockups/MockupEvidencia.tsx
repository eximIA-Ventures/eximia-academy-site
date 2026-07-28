import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PlatformAvatar } from "@/components/mockups/PlatformAvatar";
import { platform } from "@/components/mockups/platform-tokens";

const FIVE_W_ONE_H = [
  { label: "O quê", value: "Parada não planejada de 12 minutos na linha 2" },
  { label: "Quando", value: "Início do turno da manhã, 06h42" },
  { label: "Onde", value: "Ponto de reabastecimento da linha 2" },
  { label: "Quem", value: "Time de operações, turno A" },
  { label: "Por quê", value: "Ausência de gatilho visual de reposição" },
  { label: "Como", value: "Cartão kanban implementado no ponto de reabastecimento" },
];

/** Tela 3 · Registro de evidência. Recriação fiel ao artefato 5W1H e ao fluxo de validação do gestor, dados 100% fictícios. */
export function MockupEvidencia() {
  return (
    <div
      role="img"
      aria-label="Mockup de tela: registro de evidência com artefato 5W1H da parada da linha 2, validado pela gestora Camila Duarte, com incentivo enviado, dados fictícios."
    >
      <div aria-hidden="true">
        <BrowserFrame address="academy.eximia.app/evidence/parada-linha-2">
          <div style={{ backgroundColor: platform.bgApp }}>
            <div
              className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              style={{ borderBottom: `1px solid ${platform.borderSubtle}` }}
            >
              <p className="text-xs" style={{ color: platform.textMuted }}>
                Registro de evidência
              </p>
              <span
                className="rounded-lg px-2.5 py-1 text-[0.625rem] font-medium ring-1"
                style={{
                  backgroundColor: platform.semanticSuccessSoft,
                  color: platform.semanticSuccess,
                  boxShadow: `inset 0 0 0 1px ${platform.semanticSuccess}`,
                }}
              >
                Validado pelo gestor
              </span>
            </div>

            <div className="flex flex-col gap-4 px-5 py-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: platform.textMuted }}>
                  Capacidade aplicada
                </p>
                <p className="mt-1 text-sm font-medium" style={{ color: platform.textPrimary }}>
                  Liderança de Execução no Gemba
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: platform.textMuted }}>
                  Situação real de trabalho
                </p>
                <p className="mt-1 text-sm" style={{ color: platform.textSecondary }}>
                  Parada não planejada da linha 2 por falta de reabastecimento no início do turno.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Relato", "Dado operacional"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg px-3 py-1 text-xs"
                    style={{ backgroundColor: platform.bgSurface, color: platform.textSecondary }}
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className="rounded-lg px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: platform.cerrado600, color: "#fff" }}
                >
                  Artefato · 5W1H
                </span>
              </div>

              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: platform.bgCard, boxShadow: platform.shadowCard }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: platform.cerrado400 }}
                >
                  Artefato 5W1H
                </p>
                <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {FIVE_W_ONE_H.map((row) => (
                    <div key={row.label}>
                      <dt
                        className="text-[10px] font-semibold uppercase tracking-[0.1em]"
                        style={{ color: platform.textMuted }}
                      >
                        {row.label}
                      </dt>
                      <dd className="mt-0.5 text-xs leading-relaxed" style={{ color: platform.textSecondary }}>
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ backgroundColor: platform.bgSurface }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-[0.625rem]"
                  style={{ backgroundColor: platform.bgElevated, color: platform.textMuted }}
                >
                  PDF
                </span>
                <p className="min-w-0 flex-1 truncate text-sm" style={{ color: platform.textSecondary }}>
                  5w1h-parada-linha-2.pdf
                </p>
              </div>

              <div
                className="flex flex-col gap-2 pt-2"
                style={{ borderTop: `1px solid ${platform.borderSubtle}` }}
              >
                <div className="flex items-center gap-3 pt-3">
                  <PlatformAvatar initials="CD" tone="neutral" />
                  <p className="text-xs" style={{ color: platform.textMuted }}>
                    Validado por{" "}
                    <span className="font-medium" style={{ color: platform.textPrimary }}>
                      Camila Duarte
                    </span>
                    , Gerente de Operações ·{" "}
                    <span className="font-mono">17 jul</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 pl-12 text-xs" style={{ color: platform.semanticSuccess }}>
                  <span aria-hidden="true">♥</span>
                  <span>Incentivo enviado: &quot;Ótima causa raiz, time engajado.&quot;</span>
                </div>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}
