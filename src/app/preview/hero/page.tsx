import type { Viewport } from "next";
import { Chapter01, Hero } from "@/components/hero";

/**
 * PENDÊNCIA registrada no reporte: `src/app/layout.tsx` (arquivo compartilhado,
 * fora do escopo desta frente) não declara `viewport`, então nenhuma rota do
 * app ganha a meta tag de viewport responsivo. Sem ela, telas reais (não
 * headless com --window-size fixo) renderizam num layout viewport largo
 * (~980px) e todo o conteúdo desta página vaza horizontalmente. Escopando
 * o fix aqui, só nesta rota, até o dono do layout compartilhado aplicar o
 * mesmo export lá.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Prova viva da Frente 1 (Hero Redesign, E3/rev.4 — base clara). Renderiza
 * Hero + capítulo 01 (zona deste Builder) mais um bloco claro dummy
 * simulando o capítulo 02 real (outro Builder), só para provar a costura
 * visual entre o fim do cap01 e o corpo claro seguinte.
 *
 * T10 (ajuste A2): a faixa-ember que fechava o cap01 (`ChapterEmberDivider`)
 * foi removida — hero e cap01 já eram base clara, a faixa era um resquício
 * decorativo do design escuro antigo. A costura agora é direta, claro→claro,
 * pelo respiro padrão de espaçamento da casa.
 */
export default function HeroPreviewPage() {
  return (
    <main>
      <Hero />
      <Chapter01 />

      <section
        id="prova-transicao"
        className="bg-paper px-6 py-24 text-ink md:py-32"
      >
        <div className="mx-auto w-full max-w-content">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-ink-soft">
            BLOCO CLARO DUMMY · FORA DE ESCOPO DESTA FRENTE
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em]">
            O capítulo 02 (A Virada) é construído por outro Builder. Este
            bloco só prova a costura direta entre o fim do capítulo 01 e
            o corpo claro seguinte.
          </h2>
        </div>
      </section>
    </main>
  );
}
