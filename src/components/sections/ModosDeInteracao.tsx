import { Reveal } from "@/components/motion";

/**
 * O motor de aprendizagem: os quatro modos de interação entre a IA e o
 * aprendiz.
 *
 * Existe porque o capítulo 03 afirma "a única plataforma onde a IA faz as
 * perguntas" sem nunca mostrar COMO ela pergunta. Esta seção é a prova
 * concreta dessa afirmação, e cobre a faixa inteira da Taxonomia de Bloom,
 * de Lembrar a Criar, não só o degrau socrático.
 *
 * A copy dos quatro modos e as faixas de Bloom são reusadas VERBATIM do
 * produto (`apps/eximia-academy`, seção "Como funciona, 4 modos"), para que a
 * página de venda e a plataforma digam exatamente a mesma coisa. O que muda
 * aqui é só o tratamento visual, trazido para os tokens da landing.
 *
 * Tratamento tipográfico de propósito, sem ícone: não existe ilustração
 * dedicada a estes quatro modos no pacote de assets, e reaproveitar um SVG de
 * outro capítulo criaria associação semântica falsa (uma ilustração de
 * segurança rotulando "Quiz Adaptativo" é pior que ilustração nenhuma).
 */

const MODOS = [
  {
    indice: "01",
    titulo: "Diálogo Socrático",
    corpo:
      "A IA conduz o raciocínio por meio de perguntas progressivas. O aluno descobre a resposta, nunca recebe pronta.",
    bloom: "Analisar · Avaliar",
  },
  {
    indice: "02",
    titulo: "Cenários Práticos",
    corpo:
      "Simulações de problemas reais da empresa, gerados por IA sob demanda. O aluno decide, a IA avalia.",
    bloom: "Avaliar · Criar",
  },
  {
    indice: "03",
    titulo: "Quiz Adaptativo",
    corpo:
      "Múltipla escolha, verdadeiro ou falso e questões abertas. A dificuldade se calibra automaticamente conforme o desempenho.",
    bloom: "Lembrar · Compreender",
  },
  {
    indice: "04",
    titulo: "Atividades",
    corpo:
      "Entregas práticas avaliadas por rubrica estruturada. Feedback qualitativo gerado pela IA.",
    bloom: "Aplicar · Criar",
  },
] as const;

export function ModosDeInteracao() {
  return (
    <section
      id="modos"
      aria-labelledby="modos-heading"
      data-nav-surface="light"
      className="bg-paper py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
              O motor de aprendizagem
            </p>
          </Reveal>
          <Reveal stagger={1}>
            <h2
              id="modos-heading"
              className="mt-4 font-display text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink"
            >
              Quatro modos. Um sistema inteligente.
            </h2>
          </Reveal>
          <Reveal stagger={2}>
            <p className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-soft md:text-[1.1875rem]">
              A IA analisa o conteúdo de cada capítulo e escolhe
              automaticamente o modo de interação mais eficaz, com base na
              Taxonomia de Bloom e no currículo espiral. O aprendiz não
              escolhe o formato, o formato é escolhido pelo que aquele
              conteúdo exige dele.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 md:mt-16">
          {MODOS.map((modo, index) => (
            <Reveal
              key={modo.indice}
              stagger={index + 1}
              className="h-full"
            >
              <li className="flex h-full flex-col rounded-card border border-line bg-paper-alt p-6 transition-[transform,box-shadow] duration-[240ms] ease-out-soft hover:-translate-y-1 hover:shadow-cta md:p-7">
                <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
                  {modo.indice}
                </p>
                <h3 className="mt-3 font-display text-xl leading-[1.15] font-bold tracking-[-0.02em] text-ink">
                  {modo.titulo}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.6] text-ink-soft">
                  {modo.corpo}
                </p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase">
                  {modo.bloom}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal stagger={MODOS.length + 1}>
          <p className="mt-10 max-w-2xl border-t border-line pt-7 text-[0.9375rem] leading-[1.65] text-ink-soft">
            Os quatro modos cobrem a faixa inteira da Taxonomia de Bloom, de
            Lembrar a Criar. Uma plataforma que só faz quiz mede memória. Uma
            que só conversa não verifica base. O sistema alterna porque
            capacidade exige as duas coisas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
