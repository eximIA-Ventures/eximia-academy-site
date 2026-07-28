import Image from "next/image";
import { Reveal } from "@/components/motion";

type Persona = {
  role: string;
  dor: string;
  resposta: string;
  icon: string;
  iconAlt: string;
};

const PERSONAS: Persona[] = [
  {
    role: "Diretor de Operações",
    dor: "Estratégia não vira execução consistente no chão.",
    resposta:
      "Aqui o treinamento só conclui quando há evidência de aplicação no trabalho.",
    icon: "/secoes/cap06-persona-diretor-operacoes.svg",
    iconAlt:
      "Ilustração de uma pessoa em ambiente de trabalho e conquista profissional, simbolizando o Diretor de Operações",
  },
  {
    role: "CHRO / Head de Educação",
    dor: "Treinamento que não vira transformação nem valor de negócio.",
    resposta:
      "Medimos competência, aplicação, evidência e conexão com indicadores de execução.",
    icon: "/secoes/cap06-persona-chro-formacao.svg",
    iconAlt:
      "Ilustração de aquisição de conhecimento e formação, simbolizando o CHRO / Head de Educação",
  },
  {
    role: "Líder de equipe",
    dor: "Preciso que o time aplique, não só assista curso.",
    resposta:
      "A plataforma mostra a próxima melhor intervenção pelo comportamento real.",
    icon: "/secoes/cap06-persona-lider-apresentacao.svg",
    iconAlt:
      "Ilustração de uma pessoa ensinando e apresentando, simbolizando o Líder de equipe",
  },
  {
    role: "Aprendiz",
    dor: "Aprendo mas não transfiro para o trabalho real.",
    resposta:
      "Você trabalha um problema real e desenvolve uma capacidade útil para a sua rotina.",
    icon: "/secoes/cap06-persona-aprendiz-leitura.svg",
    iconAlt:
      "Ilustração de uma pessoa lendo e estudando, simbolizando o Aprendiz",
  },
];

/** Capítulo 06 · PARA QUEM — 4 personas dor/resposta + prova social (Argos, Harven). */
export function Chapter06ParaQuem() {
  return (
    <section
      id="para-quem"
      data-nav-surface="light"
      className="border-t border-line bg-paper-alt py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-800 uppercase">
                06 · PARA QUEM
              </p>
            </Reveal>

            <Reveal stagger={1}>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink">
                Cada papel encontra a sua dor aqui. E a resposta.
              </h2>
            </Reveal>
          </div>

          <Reveal stagger={2} className="hidden md:block">
            <Image
              src="/secoes/cap06-abertura-diversidade-profissional.svg"
              alt=""
              aria-hidden="true"
              width={480}
              height={480}
              unoptimized
              loading="lazy"
              className="h-60 w-60 shrink-0"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PERSONAS.map((persona, index) => (
            <Reveal key={persona.role} stagger={index + 3}>
              <div className="h-full rounded-card border border-line bg-paper p-7 transition-transform duration-[240ms] hover:-translate-y-1 hover:shadow-[0_20px_44px_-24px_rgba(28,25,23,0.28)] md:p-8">
                <Image
                  src={persona.icon}
                  alt={persona.iconAlt}
                  width={1080}
                  height={1080}
                  unoptimized
                  loading="lazy"
                  className="h-36 w-36 shrink-0"
                />
                <p className="mt-5 font-mono text-xs font-medium tracking-[0.14em] text-ink-soft uppercase">
                  {persona.role}
                </p>

                <p className="mt-5 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-ink-soft uppercase">
                  Dor
                </p>
                <p className="mt-1.5 text-[1.0625rem] leading-[1.55] text-ink-soft">
                  {persona.dor}
                </p>

                <p className="mt-5 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-brasa-700 uppercase">
                  Resposta
                </p>
                <p className="mt-1.5 text-[1.0625rem] leading-[1.55] font-medium text-ink">
                  {persona.resposta}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal stagger={7} className="mt-16">
          <div className="rounded-card bg-night px-7 py-10 text-center md:px-12 md:py-12">
            <p className="mx-auto max-w-2xl font-display text-[clamp(1.375rem,3vw,2rem)] leading-[1.3] font-medium tracking-[-0.02em] text-cream">
              Plataformas tradicionais medem conclusão. A exímIA Academy mede
              compreensão.
            </p>

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-display text-2xl font-bold text-brasa-300">
                  +40%
                </p>
                <p className="mt-1 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-mist uppercase">
                  Retenção vs. e-learning passivo
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-brasa-300">
                  5 min
                </p>
                <p className="mt-1 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-mist uppercase">
                  Sessões de reflexão socrática
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-brasa-300">
                  7
                </p>
                <p className="mt-1 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-mist uppercase">
                  Camadas cognitivas mapeadas
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-line pt-12">
          <Reveal>
            <p className="text-center font-mono text-xs font-medium tracking-[0.18em] text-ink-soft md:text-left">
              CONFIAM NA EXÍMIA
            </p>
          </Reveal>
          <Reveal stagger={1}>
            <p className="mt-3 text-center text-[1.0625rem] text-ink-soft md:text-left">
              Organizações que já operam com a exímIA.
            </p>
          </Reveal>

          <Reveal stagger={2}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 md:justify-start">
              <Image
                src="/secoes/argos-logotipo-P.png"
                alt="Argos Consultoria"
                width={1194}
                height={294}
                unoptimized
                loading="lazy"
                className="h-8 w-auto md:h-9"
              />
              <Image
                src="/secoes/harven-horizontal-preta-sem-fundo.png"
                alt="Harven Agribusiness School"
                width={840}
                height={297}
                unoptimized
                loading="lazy"
                className="h-8 w-auto md:h-9"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
