import Image from "next/image";
import { Breathe, Parallax, Reveal } from "@/components/motion";

/**
 * Hero em base clara (E3, rev.4 — ordem direta do Hugo: "o hero escuro
 * imersivo não convenceu"). O mundo é `paper`. Glow único solto direto
 * sobre `paper`, atrás do headline, mantém a atmosfera Brasa (DIRECTION.md
 * §5) sem depender de nenhum painel escuro.
 *
 * T10 (checkpoint Hugo, ajuste A1): o painel escuro em `bg-night` que
 * emoldurava a ilustração da escada foi retirado — "cartão escuro de
 * personagem morto". O card agora é `paper-alt` com borda `line` e
 * sombra quente (`shadow-cta`), casando com o resto dos cards claros da
 * casa; a ilustração foi retintada de `cream` para `ink` (ela era
 * desenhada para ler sobre escuro, ficava invisível sobre claro sem
 * recolor). Grid/glow que existiam dentro desse painel saíram junto —
 * eram parte do bolso de atmosfera escuro que não existe mais aqui.
 * Copy verbatim: narrative/COPY.md bloco "HERO · Abertura (mundo
 * escuro)" — o rótulo do bloco na copy é legado da versão anterior; o
 * texto em si não mudou.
 *
 * T10 rodada 2 (checkpoint Hugo, regra A4 — imagem nunca solta num card
 * próprio sem texto, bússola cap02): o card `paper-alt` acima ainda era
 * "personagem sozinho num painel enorme, sem função" — mesmo sem o
 * fundo escuro, seguia isolado abaixo de toda a pilha de texto do hero,
 * sem nenhuma legenda atrelada. A grid text|imagem do cap02 (bússola)
 * não coube aqui com elegância: o `h1` roda em `clamp(3rem,9vw,7rem)`
 * com `max-w-5xl`, maior que qualquer headline de capítulo, e não cabe
 * numa coluna de 1.15fr dentro de `max-w-content` (70rem) sem quebrar a
 * escala protagonista já aprovada. Caminho 2 do Hugo aplicado: a escada
 * foi movida para ancorar a própria faixa de prova (linha mono "43
 * alunos..."), lado a lado, sem card, sem borda — a ilustração ganha
 * função (prova social ilustrada) em vez de flutuar sozinha.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper py-28 text-ink md:py-36">
      <Parallax
        factor={0.04}
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 hidden -translate-x-1/2 sm:block"
      >
        <Breathe durationSeconds={12} className="hero-glow opacity-25" />
      </Parallax>

      <div className="mx-auto w-full max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
            ESCOLA AI FIRST DE CAPACIDADES HUMANAS
          </p>
        </Reveal>

        <Reveal stagger={1} className="mt-7 w-full min-w-0 max-w-5xl">
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[1.0] font-bold tracking-[-0.035em]">
            Treinamento termina.
            <br />
            <span className="text-brasa-600">Capacidade</span> fica.
          </h1>
        </Reveal>

        <Reveal stagger={2} className="mt-8 w-full min-w-0 max-w-2xl">
          <p className="text-[1.1875rem] leading-[1.55] text-ink-soft">
            A exímIA Academy não é um LMS nem uma LXP. É uma plataforma AI
            First que transforma aprendizagem em capacidade organizacional
            mensurável, com evidência real de aplicação no trabalho.
          </p>
        </Reveal>

        <Reveal stagger={3} className="mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href="#contato"
            data-cta="hero_agendar"
            className="rounded-button bg-brasa-500 px-7 py-3.5 text-[0.9375rem] font-semibold text-ink shadow-cta transition-[transform,background-color,box-shadow] duration-[240ms] ease-out-soft hover:-translate-y-0.5 hover:bg-brasa-400"
          >
            Agendar conversa
          </a>
          <a
            href="#metodo"
            data-cta="hero_como_funciona"
            className="rounded-button border border-line px-7 py-3.5 text-[0.9375rem] font-semibold text-ink transition-[transform,border-color] duration-[240ms] ease-out-soft hover:-translate-y-0.5 hover:border-ink/30"
          >
            Ver como funciona ↓
          </a>
        </Reveal>

        <Reveal
          stagger={4}
          className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <Image
            src="/hero/hero-conquista-escada.svg"
            alt="Ilustração de uma pessoa subindo uma escada rumo a um troféu no alto, simbolizando a capacidade que permanece depois que o treinamento termina"
            width={1000}
            height={1000}
            unoptimized
            className="h-20 w-20 shrink-0 sm:h-24 sm:w-24"
          />
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
            43 alunos reais · profundidade reflexiva 4,6/7 · métrica-mãe HCI
          </p>
        </Reveal>
      </div>
    </section>
  );
}
