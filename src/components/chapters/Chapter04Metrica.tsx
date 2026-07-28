import Image from "next/image";
import { Reveal } from "@/components/motion";

type PipelineNode = {
  label: string;
  pergunta: string;
  destaque?: boolean;
};

const PIPELINE: PipelineNode[] = [
  { label: "Aprendizagem", pergunta: "O aluno compreendeu?" },
  { label: "Profundidade", pergunta: "Ele refletiu com qualidade?" },
  { label: "Competência", pergunta: "Ele demonstrou habilidade crítica?" },
  { label: "Aplicação", pergunta: "Ele aplicou em caso real?" },
  { label: "Evidência", pergunta: "Trouxe prova do trabalho?", destaque: true },
  { label: "Comportamento", pergunta: "Mudou a forma de agir?" },
  { label: "Liderança", pergunta: "O líder reforçou o novo padrão?" },
  { label: "Cultura", pergunta: "O padrão começou a circular?" },
  { label: "Resultado", pergunta: "Algum indicador foi impactado?" },
];

export function Chapter04Metrica() {
  return (
    <section
      id="hci"
      aria-labelledby="hci-heading"
      className="relative overflow-hidden bg-paper py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
              04 · A MÉTRICA
            </p>
            <h2
              id="hci-heading"
              className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink"
            >
              HCI: a métrica que liga aprendizagem a resultado.
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft md:text-[1.1875rem]">
              O Human Capability Index sobe um andar em relação a qualquer
              métrica de curso: conecta estratégia, capacidade,
              comportamento, evidência e resultado de negócio.
            </p>
          </Reveal>

          <Reveal stagger={1} className="mx-auto w-full max-w-sm lg:max-w-none">
            <Image
              src="/capitulos/cap04-analise-dados-visualizacao.svg"
              alt="Ilustração de uma pessoa analisando gráficos e painéis de dados, simbolizando o Human Capability Index"
              width={1000}
              height={1000}
              unoptimized
              className="w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Image
            src="/capitulos/cap04-produtividade-workflow.svg"
            alt="Ilustração de um fluxo de produtividade e etapas conectadas, simbolizando o pipeline dos 9 componentes do HCI"
            width={1000}
            height={1000}
            unoptimized
            className="mb-6 h-32 w-32"
          />
          <p className="mb-4 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-ink-soft uppercase">
            Arraste para ver as 9 etapas
          </p>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-7 h-px bg-line"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-paper to-transparent md:w-14"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-paper to-transparent md:w-14"
            />
            <div className="scrollbar-none flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PIPELINE.map((node, index) => (
                <Reveal
                  key={node.label}
                  stagger={index + 2}
                  className="flex w-[136px] shrink-0 flex-col items-center text-center"
                >
                  <span
                    className={
                      node.destaque
                        ? "relative z-10 flex h-14 w-14 items-center justify-center rounded-chip border border-brasa-700 bg-brasa-800 font-mono text-xs font-semibold text-cream shadow-cta"
                        : "relative z-10 flex h-14 w-14 items-center justify-center rounded-chip border border-line bg-paper font-mono text-xs font-semibold text-ink-soft"
                    }
                  >
                    {index + 1}
                  </span>
                  <p
                    className={
                      node.destaque
                        ? "mt-4 text-sm font-semibold text-brasa-700"
                        : "mt-4 text-sm font-semibold text-ink"
                    }
                  >
                    {node.label}
                  </p>
                  <p className="mt-1 text-xs leading-[1.5] text-ink-soft">
                    {node.pergunta}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10">
          <Reveal stagger={11}>
            <blockquote className="border-l-2 border-brasa-500 pl-6 md:pl-8">
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-[1.25] font-medium tracking-[-0.02em] text-ink">
                &quot;A IA não deve tornar o RH mais rápido. Deve tornar a
                organização mais capaz.&quot;
              </p>
              <footer className="mt-4 font-mono text-xs font-medium tracking-[0.18em] text-ink-soft">
                Dave Ulrich, fundação conceitual da métrica
              </footer>
              <Image
                src="/capitulos/cap04-relatorio-dados-tecnologia.svg"
                alt="Ilustração de uma pessoa lendo um relatório de dados em uma tela, simbolizando a leitura da métrica pela liderança"
                width={1000}
                height={1000}
                unoptimized
                className="mt-6 h-40 w-40"
              />
            </blockquote>
          </Reveal>

          <Reveal stagger={12}>
            <div className="flex gap-4 rounded-card border border-brasa-200 bg-gradient-to-b from-brasa-50 to-paper p-7 md:p-8">
              <Image
                src="/capitulos/cap04-seguranca-privacidade-extra.svg"
                alt="Ilustração de segurança e privacidade de dados, simbolizando o compromisso ético da Lei 1 da exímIA Academy"
                width={1000}
                height={1000}
                unoptimized
                className="hidden h-32 w-32 shrink-0 sm:block"
              />
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
                  LEI 1 DA EXÍMIA ACADEMY
                </p>
                <p className="mt-3 font-display text-lg leading-[1.35] font-bold tracking-[-0.02em] text-ink">
                  Monitoramento existe para desenvolver consciência, não para
                  aumentar controle.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                  Todo dado de aprendizagem serve primeiro ao desenvolvimento
                  da pessoa, depois à gestão organizacional.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
