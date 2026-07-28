import {
  Chapter02Virada,
  Chapter03Metodo,
  Chapter04Metrica,
  Chapter07Manifesto,
} from "@/components/chapters";

/**
 * Prova viva da T6 (Lead Eixo, board "Landing Academy v2 · A Virada").
 * Renderiza só os 4 capítulos narrativos desta zona (02, 03, 04, 07).
 * A faixa entre 04 e 07 é um respiro dummy simulando os capítulos
 * 05 (A Plataforma) e 06 (Para quem), que pertencem a outro Builder.
 */
export default function PreviewCapitulosPage() {
  return (
    <main className="bg-paper text-ink">
      <Chapter02Virada />
      <Chapter03Metodo />
      <Chapter04Metrica />

      <section
        aria-hidden="true"
        className="border-y border-dashed border-line bg-paper-alt py-16 text-center md:py-20"
      >
        <div className="mx-auto w-full max-w-content px-6">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">
            Respiro dummy · simula 05 · A Plataforma e 06 · Para quem
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            Zona de outro Builder. Não faz parte da entrega desta tarefa.
          </p>
        </div>
      </section>

      <Chapter07Manifesto />
    </main>
  );
}
