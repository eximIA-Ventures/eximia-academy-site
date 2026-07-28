import Image from "next/image";
import { Reveal } from "@/components/motion";

/**
 * 01 · O PROBLEMA, em base clara (E3, rev.4). Acompanha o hero: o mundo
 * é `paper`. Deliberadamente sem glow/respiração aqui — esse gesto fica
 * reservado como assinatura exclusiva do hero. Copy verbatim:
 * narrative/COPY.md bloco "01 · O PROBLEMA (mundo escuro)" — rótulo do
 * bloco na copy é legado da versão anterior; o texto em si não mudou.
 *
 * T10 (checkpoint Hugo, ajuste A2): a faixa-ember estática
 * (`<ChapterEmberDivider />`) que fechava este capítulo antes do
 * capítulo 02 foi removida — era o resquício da dobradiça
 * escuro→claro do design antigo (hero/cap01 já eram base clara desde a
 * E3/rev.4; a faixa era só um eco decorativo do "mundo escuro" que não
 * existe mais). "Não tem muito sentido", nas palavras do Hugo. O
 * componente `ChapterTransition.tsx` foi apagado (nenhum outro import
 * o referenciava) e o véu `night`→`paper` que suavizava a entrada do
 * capítulo 02 saiu junto (zona do Builder do cap02) — a transição agora
 * é o respiro padrão da casa: o `pb-24 md:pb-32` deste wrapper encontra
 * o `py-24 md:py-32` do capítulo 02 direto, sem faixa entre os dois.
 */
export function Chapter01() {
  return (
    <section
      id="capitulo-01"
      className="relative isolate overflow-hidden bg-paper pt-24 text-ink md:pt-32"
    >
      <div className="mx-auto w-full max-w-content px-6 pb-24 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
                01 · O PROBLEMA
              </p>
            </Reveal>

            <Reveal stagger={1} className="mt-6 max-w-4xl">
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] font-bold tracking-[-0.03em]">
                A pergunta errada: &quot;o aluno concluiu?&quot;
              </h2>
            </Reveal>

            <Reveal stagger={2} className="mt-8 max-w-2xl">
              <p className="text-[1.0625rem] leading-[1.65] text-ink-soft md:text-[1.1875rem]">
                Já fizemos muito treinamento e pouca coisa mudou. Essa é a
                frase mais comum de quem dirige operações. Cursos concluídos
                não movem indicadores. Estratégia não vira execução
                consistente no chão.
              </p>
            </Reveal>
          </div>

          <Reveal stagger={2} className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="flex items-center justify-center overflow-hidden rounded-card border border-line bg-paper-alt p-8 shadow-cta sm:p-10">
              <Image
                src="/hero/cap01-dor-porta.svg"
                alt="Ilustração de uma pessoa empurrando uma porta pesada, simbolizando o esforço de mudar comportamento depois de um treinamento"
                width={600}
                height={600}
                unoptimized
                className="mx-auto w-full max-w-[200px]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-14">
          <Reveal stagger={3}>
            <p className="font-display text-[clamp(3.5rem,10vw,6rem)] leading-none font-bold tracking-[-0.03em] text-brasa-600">
              22%
            </p>
            <p className="mt-4 font-mono text-xs font-medium tracking-[0.14em] text-ink-soft">
              · progresso médio em plataformas tradicionais
            </p>
          </Reveal>

          <Reveal stagger={4}>
            <p className="font-display text-[clamp(3.5rem,10vw,6rem)] leading-none font-bold tracking-[-0.03em] text-brasa-600">
              0%
            </p>
            <p className="mt-4 font-mono text-xs font-medium tracking-[0.14em] text-ink-soft">
              · de conclusão consciente
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
          <Reveal
            stagger={5}
            className="max-w-3xl border-l-2 border-brasa-500/60 pl-6 md:pl-8"
          >
            <p className="font-display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.25] font-semibold tracking-[-0.015em]">
              A pergunta certa: o aluno mudou a forma de pensar, aplicou no
              trabalho e gerou evidência?
            </p>
          </Reveal>

          <Reveal stagger={6}>
            <div className="flex items-center justify-center overflow-hidden rounded-card border border-line bg-paper-alt p-6 shadow-cta sm:p-8">
              <Image
                src="/hero/cap01-conflito-comunicacao.svg"
                alt="Ilustração de duas pessoas em lados opostos de um conflito de comunicação, simbolizando o desalinhamento entre concluir um curso e mudar de fato o comportamento"
                width={1080}
                height={1080}
                unoptimized
                className="mx-auto w-full max-w-[180px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
