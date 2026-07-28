import Image from "next/image";
import { Reveal } from "@/components/motion";

const ROWS = [
  {
    antes: "Métrica é conclusão de curso",
    depois: "Métrica-mãe HCI, Human Capability Index",
  },
  {
    antes: "Aluno como objeto da aprendizagem",
    depois: "Aprendiz como sujeito ativo da própria formação",
  },
  {
    antes: "Gestor como fiscal de curso",
    depois: "Gestor como mentor de transferência",
  },
  {
    antes: "Reflexão desconectada da prática",
    depois: "Conclusão só ocorre com evidência de aplicação",
  },
  {
    antes: "Dado usado para controle",
    depois: "Dado serve primeiro ao desenvolvimento da pessoa",
  },
] as const;

export function Chapter02Virada() {
  return (
    <section
      id="virada"
      aria-labelledby="virada-heading"
      className="relative isolate overflow-hidden bg-paper py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700">
              02 · A VIRADA
            </p>
            <h2
              id="virada-heading"
              className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink"
            >
              De conclusão de curso para capacidade aplicada.
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft md:text-[1.1875rem]">
              Quando a pergunta central muda, todo o sistema muda com ela.
            </p>
          </Reveal>

          <Reveal
            stagger={1}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <Image
              src="/capitulos/noodle-virada-foguete.svg"
              alt="Ilustração de um foguete em decolagem, simbolizando a virada de mundo mental da conclusão de curso para a capacidade aplicada"
              width={1000}
              height={1000}
              unoptimized
              className="w-full"
            />
            <Image
              src="/capitulos/cap02-conquista-celebracao.svg"
              alt="Ilustração de uma pessoa comemorando uma conquista, reforçando o momento de virada de mundo mental"
              width={1000}
              height={1000}
              unoptimized
              className="absolute -bottom-6 -right-4 h-24 w-24 rounded-chip border border-line bg-paper p-2 shadow-cta md:h-28 md:w-28"
            />
          </Reveal>
        </div>

        <Reveal stagger={2} className="relative mt-14 md:mt-20">
          <Image
            src="/capitulos/cap02-conquista-formacao-extra.svg"
            alt="Ilustração de uma pessoa formada com diploma e conquista, simbolizando a capacidade aplicada da coluna Depois"
            width={1000}
            height={1000}
            unoptimized
            className="absolute -top-8 right-4 hidden h-16 w-16 md:block"
          />
          <table className="w-full table-fixed overflow-hidden rounded-card border border-line">
            <caption className="sr-only">
              Comparação entre o modelo LMS/LXP tradicional e a Escola AI First
              exímIA Academy
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-paper-alt p-4 text-left font-mono text-xs font-medium tracking-[0.18em] text-ink-soft md:p-5"
                >
                  ANTES · LMS/LXP
                </th>
                <th
                  scope="col"
                  className="bg-gradient-to-b from-brasa-50 to-paper p-4 text-left font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 md:p-5"
                >
                  DEPOIS · Escola AI First
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.antes} className="border-t border-line">
                  <td className="p-4 align-top text-[0.9375rem] leading-[1.55] text-ink-soft md:p-5 md:text-base">
                    {row.antes}
                  </td>
                  <td className="bg-gradient-to-b from-brasa-50 to-paper p-4 align-top text-[0.9375rem] leading-[1.55] font-medium text-ink md:p-5 md:text-base">
                    {row.depois}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal stagger={3} className="mt-12 md:mt-16">
          <div className="grid gap-8 rounded-card border border-line bg-paper-alt p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="mt-2 h-3 w-3 shrink-0 rounded-chip bg-brasa-500 shadow-cta"
              />
              <p className="max-w-2xl font-display text-[clamp(1.375rem,3vw,2rem)] leading-[1.25] font-bold tracking-[-0.02em] text-ink">
                Não entregamos conteúdo. Entregamos capacidade aplicada.
              </p>
            </div>
            <Image
              src="/capitulos/cap02-empoderamento-perseveranca.svg"
              alt="Ilustração de uma pessoa em pose de empoderamento e perseverança, simbolizando a capacidade aplicada entregue pela exímIA Academy"
              width={1000}
              height={1000}
              unoptimized
              className="mx-auto h-28 w-28 shrink-0 md:h-32 md:w-32"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
