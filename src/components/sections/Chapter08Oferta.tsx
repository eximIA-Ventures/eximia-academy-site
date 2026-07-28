import Image from "next/image";
import { Reveal } from "@/components/motion";

const STEPS = [
  {
    name: "Diagnóstico",
    description: "Autoavaliação da capacidade atual e mapa inicial do aprendiz.",
  },
  {
    name: "Microtrilha",
    description: "Conteúdo enxuto, focado na capacidade escolhida.",
  },
  {
    name: "Reflexão socrática",
    description:
      "A IA provoca especificidade e método, não entrega resposta pronta.",
  },
  {
    name: "Prática real",
    description: "Aplicação no trabalho, no gemba, na situação concreta.",
  },
  {
    name: "Evidência",
    description:
      "Registro que prova a capacidade aplicada: relato, dado ou artefato.",
  },
  {
    name: "Líder",
    description: "O gestor entra como mentor de transferência, valida e apoia.",
  },
  {
    name: "Fechamento",
    description: "Conclusão consciente, só com evidência mínima presente.",
  },
];

/**
 * Capítulo 08 · A OFERTA — Sprint de Capacidade Aplicada + CTA final. Sem
 * pricing. T8 (polimento cinematográfico): a seção recebe o véu de saída
 * do mergulho escuro do capítulo 07 (gradiente `night`→`paper` no topo,
 * mesma convenção do capítulo 02 e do capítulo 07). A borda superior que
 * existia antes virava uma linha clara indevida sobre o próprio véu
 * escuro, por isso foi removida aqui — o gradiente já faz a separação.
 */
export function Chapter08Oferta() {
  return (
    <section
      id="oferta"
      data-nav-surface="light"
      className="relative isolate overflow-hidden bg-paper py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-14 bg-gradient-to-b from-night to-paper md:h-20"
      />
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
                08 · A OFERTA
              </p>
            </Reveal>
            <Reveal stagger={1}>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink">
                Comece pequeno. Prove com evidência. Em 30 dias.
              </h2>
            </Reveal>
          </div>

          <Reveal stagger={2} className="flex justify-center md:block">
            <Image
              src="/secoes/cap08-conquista-premiacao.svg"
              alt=""
              aria-hidden="true"
              width={1080}
              height={1080}
              unoptimized
              loading="lazy"
              className="h-36 w-36 shrink-0 md:h-48 md:w-48"
            />
          </Reveal>
        </div>

        <Reveal stagger={3}>
          <div className="mt-12 rounded-card border-2 border-brasa-700 bg-paper p-8 shadow-[0_30px_70px_-26px_rgba(255,107,44,0.45)] md:p-12">
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-brasa-700 uppercase">
              Sprint de Capacidade Aplicada
            </p>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
              21 a 30 dias. Um tema real, como Liderança de Execução no Gemba
              ou Análise de Problemas com Evidência Real. A métrica de sucesso
              é evidência aplicada, não conclusão. A prova pequena antes da
              transformação grande.
            </p>

            <div className="mt-10 border-t border-line pt-8">
              <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase">
                As 7 etapas do Sprint
              </p>

              <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">
                {STEPS.map((step, index) => (
                  <li key={step.name} className="flex flex-col gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brasa-50 font-mono text-xs font-semibold text-brasa-700">
                      {index + 1}
                    </span>
                    <p className="font-sans text-sm font-semibold text-ink">
                      {step.name}
                    </p>
                    <p className="text-sm leading-[1.5] text-ink-soft">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal stagger={4}>
          <div className="mt-16 flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contato"
                data-cta="oferta_agendar"
                className="inline-flex rounded-button bg-brasa-500 px-8 py-4 font-sans text-base font-semibold text-ink shadow-cta transition-transform duration-[240ms] hover:-translate-y-1"
              >
                Agendar conversa
              </a>
              <a
                href="#contato"
                data-cta="oferta_demonstracao"
                className="inline-flex rounded-button border border-line px-8 py-4 font-sans text-base font-semibold text-ink transition-colors duration-[240ms] hover:border-brasa-500 hover:text-brasa-700"
              >
                Solicitar demonstração
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              O primeiro passo é uma conversa, não um contrato.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
