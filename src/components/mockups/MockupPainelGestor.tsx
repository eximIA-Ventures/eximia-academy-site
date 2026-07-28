import { PlatformAvatar } from "@/components/mockups/PlatformAvatar";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { platform } from "@/components/mockups/platform-tokens";

// Estrutura fiel a apps/(platform)/layout.tsx:214-245 (shell flex h-screen com
// Sidebar + Header/main) e apps/(platform)/leader/page.tsx:142-165
// (PageHeader "Líder Educador" · "Minha Equipe") + leader-dashboard-client.tsx
// (Summary Cards + tabela "Progresso da Equipe"), lidos read-only.

const NAV = [
  { label: "Dashboard", active: false },
  { label: "Minha Equipe", active: true },
  { label: "Cursos", active: false },
  { label: "Analytics", active: false },
  { label: "Configurações", active: false },
];

const SUMMARY = [
  { label: "Membros da equipe", value: "4" },
  { label: "Aprendizes ativos", value: "3", subtitle: "75% da equipe" },
  { label: "Taxa de conclusão", value: "68%" },
  { label: "Sessões por membro", value: "5" },
];

type TeamStatus = "active" | "inactive" | "never";

const STATUS_LABEL: Record<TeamStatus, { text: string; className: string }> = {
  active: { text: "Ativo", className: "bg-emerald-500/15 text-emerald-400" },
  inactive: { text: "Inativo (7+ dias)", className: "bg-amber-500/15 text-amber-400" },
  never: { text: "Nunca acessou", className: "bg-red-500/15 text-red-400" },
};

const TEAM: Array<{
  name: string;
  course: string;
  pct: number;
  sessions: number;
  lastActive: string;
  status: TeamStatus;
}> = [
  {
    name: "Rafael Nascimento",
    course: "Liderança de Execução no Gemba",
    pct: 82,
    sessions: 6,
    lastActive: "Hoje",
    status: "active",
  },
  {
    name: "Marina Alves",
    course: "Análise de Problemas com Evidência Real",
    pct: 34,
    sessions: 2,
    lastActive: "9 dias atrás",
    status: "inactive",
  },
  {
    name: "Diego Ferreira",
    course: "Liderança de Execução no Gemba",
    pct: 91,
    sessions: 7,
    lastActive: "Ontem",
    status: "active",
  },
  {
    name: "Juliana Prado",
    course: "Nenhum curso",
    pct: 0,
    sessions: 0,
    lastActive: "Nunca",
    status: "never",
  },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

const A11Y_LABEL =
  "Mockup de tela: painel Minha Equipe do líder educador Camila Duarte, com sidebar e cabeçalho da plataforma. " +
  "Resumo: 4 membros na equipe, 3 aprendizes ativos (75% da equipe), taxa de conclusão de 68%, 5 sessões por membro. " +
  "Progresso da equipe: Rafael Nascimento, 82% de conclusão, 6 sessões, ativo hoje. " +
  "Marina Alves, 34% de conclusão, 2 sessões, inativa há 9 dias. " +
  "Diego Ferreira, 91% de conclusão, 7 sessões, ativo ontem. " +
  "Juliana Prado, 0% de conclusão, 0 sessões, nunca acessou. " +
  "Dados fictícios.";

/**
 * Tela 4 · Painel do gestor mentor. Recriação fiel ao shell real (sidebar +
 * header, layout.tsx) e à rota /leader (PageHeader "Minha Equipe" +
 * leader-dashboard-client.tsx: Summary Cards + tabela Progresso da Equipe),
 * dados 100% fictícios. Todos os valores numéricos vêm expostos no aria-label
 * do elemento acessível (este wrapper), já que o corpo pixel-perfect abaixo é
 * aria-hidden por design (mesmo padrão das outras 3 telas do tour).
 */
export function MockupPainelGestor() {
  return (
    <div role="img" aria-label={A11Y_LABEL}>
      <div aria-hidden="true">
        <BrowserFrame address="academy.eximia.app/leader">
          <div className="flex" style={{ backgroundColor: platform.bgApp }}>
            {/* Sidebar (layout.tsx:215, Sidebar bg-bg-sidebar) */}
            <div
              className="hidden w-[132px] shrink-0 flex-col gap-1 px-2 py-3 sm:flex"
              style={{ backgroundColor: platform.bgSurface, borderRight: `1px solid ${platform.borderSubtle}` }}
            >
              <p className="px-2 pb-3 text-[11px] font-bold" style={{ color: platform.textPrimary }}>
                exímIA{" "}
                <span style={{ color: platform.cerrado400 }}>Academy</span>
              </p>
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative rounded-lg px-2.5 py-1.5 text-[11px]"
                  style={
                    item.active
                      ? {
                          backgroundColor: platform.cerrado600Soft,
                          color: platform.textPrimary,
                          boxShadow: `inset 0 0 0 1px ${platform.cerrado600Ring}`,
                        }
                      : { color: platform.textMuted }
                  }
                >
                  {item.active && (
                    <span
                      className="absolute left-0 top-1/2 h-3 w-[2px] -translate-y-1/2 rounded-r-full"
                      style={{ backgroundColor: platform.cerrado500 }}
                    />
                  )}
                  {item.label}
                </div>
              ))}
            </div>

            {/* Header + main (layout.tsx:216-245) */}
            <div className="flex min-w-0 flex-1 flex-col">
              <div
                className="flex items-center justify-between gap-2 px-4 py-2.5"
                style={{ borderBottom: `1px solid ${platform.borderSubtle}` }}
              >
                <span
                  className="rounded-lg px-2.5 py-1 text-[10px]"
                  style={{ backgroundColor: platform.bgElevated, color: platform.textMuted }}
                >
                  Plataforma de Aprendizagem
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-lg px-2.5 py-1 text-[10px]"
                    style={{ backgroundColor: platform.bgElevated, color: platform.textSecondary }}
                  >
                    Meu Time
                  </span>
                  <PlatformAvatar initials="CD" tone="neutral" />
                </div>
              </div>

              <div className="flex flex-col gap-4 px-4 py-4">
                {/* PageHeader variant="hero" backgroundImage (page.tsx:144-150) */}
                <div
                  className="relative overflow-hidden rounded-2xl px-5 py-4"
                  style={{ background: `linear-gradient(120deg, ${platform.bgSurface}, ${platform.bgApp})` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 15% 30%, ${platform.cerrado600Soft}, transparent 60%)`,
                    }}
                  />
                  <div className="relative">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: platform.cerrado400 }}
                    >
                      Líder Educador
                    </p>
                    <p className="mt-1.5 text-xl font-bold" style={{ color: platform.textPrimary }}>
                      Minha Equipe
                    </p>
                    <p
                      className="mt-1 max-w-sm text-xs leading-relaxed"
                      style={{ color: platform.textSecondary }}
                    >
                      Acompanhe a jornada de aprendizado da sua equipe. Celebre progressos, inspire
                      pelo exemplo.
                    </p>
                  </div>
                </div>

                {/* Summary Cards (leader-dashboard-client.tsx:148-174) */}
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {SUMMARY.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-xl p-3"
                      style={{ backgroundColor: platform.bgCard, boxShadow: platform.shadowCard }}
                    >
                      <p className="text-lg font-bold" style={{ color: platform.textPrimary }}>
                        {card.value}
                      </p>
                      <p
                        className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.1em]"
                        style={{ color: platform.textMuted }}
                      >
                        {card.label}
                      </p>
                      {card.subtitle && (
                        <p className="text-[9.5px]" style={{ color: platform.textMuted }}>
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progresso da Equipe (leader-dashboard-client.tsx:181-285) */}
                <div
                  className="rounded-xl p-4"
                  style={{ backgroundColor: platform.bgCard, boxShadow: platform.shadowCard }}
                >
                  <p className="text-xs font-semibold" style={{ color: platform.textPrimary }}>
                    Progresso da Equipe
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    {TEAM.map((member) => {
                      const status = STATUS_LABEL[member.status];
                      return (
                        <div
                          key={member.name}
                          className="flex items-center gap-3 rounded-lg px-3 py-2"
                          style={{ backgroundColor: platform.bgSurface }}
                        >
                          <PlatformAvatar initials={initialsOf(member.name)} tone="neutral" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-medium" style={{ color: platform.textPrimary }}>
                              {member.name}
                            </p>
                            <p className="truncate text-[10px]" style={{ color: platform.textMuted }}>
                              {member.course} · {member.sessions} sessões · {member.lastActive}
                            </p>
                          </div>
                          <div className="hidden w-16 shrink-0 items-center gap-1.5 sm:flex">
                            <div
                              className="h-1.5 flex-1 overflow-hidden rounded-full"
                              style={{ backgroundColor: platform.bgHover }}
                            >
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${member.pct}%`, backgroundColor: platform.cerrado500 }}
                              />
                            </div>
                            <span className="text-[10px]" style={{ color: platform.textMuted }}>
                              {member.pct}%
                            </span>
                          </div>
                          <span
                            className={`shrink-0 rounded-md px-2 py-0.5 text-[9.5px] font-semibold ${status.className}`}
                          >
                            {status.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}
