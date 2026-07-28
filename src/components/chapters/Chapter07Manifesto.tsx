import Image from "next/image";
import { Breathe, Parallax, Reveal } from "@/components/motion";

/**
 * 07 · O MANIFESTO — mergulho escuro deliberado (OUTLINE.md §b). T8
 * (polimento cinematográfico): a seção entrava em `bg-night` direto após
 * o `paper-alt` do capítulo 06 (corte duro). Adicionado 1 véu estático no
 * topo (gradiente `paper-alt`→`night`) que suaviza só a entrada, mesmo
 * padrão do véu já usado no capítulo 02. A saída para o capítulo 08 é
 * suavizada do lado de lá (mesma convenção: quem recebe a cor clara
 * possui o véu de entrada).
 *
 * T8 também achou que nenhuma seção da página composta declarava
 * `data-nav-surface="dark"` (só "light" existia, em 4 arquivos) — o
 * Nav sticky (`Nav.tsx`) fica claro o tempo todo, mesmo sobre este
 * mergulho escuro de tela cheia. Esta é a ÚNICA seção com `night` de
 * corpo inteiro (o hero e o capítulo 01 só têm bolsos pontuais,
 * deliberadamente sem trocar o Nav, ver docblock do capítulo 01), por
 * isso é a única que ganha o marcador dark.
 */
export function Chapter07Manifesto() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      data-nav-surface="dark"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-night py-24 text-cream md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-paper-alt to-night md:h-32"
      />
      <div className="hero-grid" aria-hidden="true" />

      <Parallax factor={0.04} className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2">
        <Breathe durationSeconds={12} className="hero-glow" />
      </Parallax>

      <div className="mx-auto flex w-full max-w-content flex-col items-center px-6 text-center">
        <Reveal>
          <Image
            src="/capitulos/cap07-tocha-nuvens-caminhada.svg"
            alt="Ilustração de uma pessoa caminhando com uma tocha acesa entre nuvens, simbolizando a jornada de formar gente capaz de executar sem perder humanidade"
            width={1000}
            height={1000}
            unoptimized
            className="mx-auto h-24 w-24 md:h-28 md:w-28"
          />
          <p className="mt-8 font-mono text-xs font-medium tracking-[0.18em] text-brasa-400">
            07 · O MANIFESTO
          </p>
          <h2
            id="manifesto-heading"
            className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.15] font-bold tracking-[-0.03em] text-cream"
          >
            Formar gente capaz de executar sem perder humanidade.
          </h2>
        </Reveal>

        <Reveal stagger={1}>
          <p className="mx-auto mt-12 max-w-4xl font-display text-[clamp(1.75rem,5.4vw,3.75rem)] leading-[1.18] font-medium tracking-[-0.03em] text-cream md:mt-16">
            Aprendizagem verdadeira não termina na conclusão de um módulo.
            Ela se confirma quando uma pessoa muda sua forma de pensar,
            aplica uma capacidade no trabalho, fortalece sua equipe e gera
            valor com responsabilidade.
          </p>
        </Reveal>

        <Reveal stagger={2}>
          <p className="mt-14 font-mono text-[0.6875rem] font-medium tracking-[0.28em] text-mist md:mt-20 md:text-xs">
            ÁGAPE · KÉNOSIS · SERVIÇO · VERDADE · EXCELÊNCIA · EXECUÇÃO ·
            DIGNIDADE · COMUNIDADE
          </p>
        </Reveal>
      </div>
    </section>
  );
}
