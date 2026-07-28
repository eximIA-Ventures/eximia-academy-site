import Image from "next/image";
import type { ComponentType } from "react";
import { Parallax, Reveal } from "@/components/motion";
import { MockupEvidencia } from "@/components/mockups/MockupEvidencia";
import { MockupJornada0 } from "@/components/mockups/MockupJornada0";
import { MockupPainelGestor } from "@/components/mockups/MockupPainelGestor";
import { MockupSocratica } from "@/components/mockups/MockupSocratica";

type TourItem = {
  id: string;
  name: string;
  title: string;
  legend: string;
  Mockup: ComponentType;
};

const TOUR: TourItem[] = [
  {
    id: "socratica",
    name: "Sessão socrática",
    title: "A IA que pergunta antes de responder",
    legend:
      "A IA não entrega resposta pronta. Provoca especificidade e método, pergunta a pergunta, até o raciocínio ficar de pé.",
    Mockup: MockupSocratica,
  },
  {
    id: "jornada0-pratica",
    name: "Jornada 0 na prática",
    title: "O ritual de entrada",
    legend:
      "Em 15 a 25 minutos, o aprendiz sai com plano individual, contrato de transferência e evidência mínima definida. Antes de qualquer trilha.",
    Mockup: MockupJornada0,
  },
  {
    id: "evidencia",
    name: "Registro de evidência",
    title: "Onde a conclusão consciente acontece",
    legend:
      "Relato estruturado, dado operacional ou artefato do trabalho real, validado pelo gestor. Sem evidência, não há conclusão.",
    Mockup: MockupEvidencia,
  },
  {
    id: "painel-gestor",
    name: "Painel do gestor mentor",
    title: "O gestor como mentor, não como fiscal",
    legend:
      "O painel mostra cadência e adesão da jornada, nunca vigilância da pessoa. O dado aponta onde apoiar e remover barreiras.",
    Mockup: MockupPainelGestor,
  },
];

/** Capítulo 05 · A PLATAFORMA — tour do produto em 4 mockups fiéis, dados fictícios. */
export function Chapter05Plataforma() {
  return (
    <section id="plataforma" data-nav-surface="light" className="bg-paper">
      <div className="mx-auto w-full max-w-content px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
                05 · A PLATAFORMA
              </p>
            </Reveal>

            <Reveal stagger={1}>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink">
                Isso não é slide. É a plataforma operando.
              </h2>
            </Reveal>

            <Reveal stagger={2}>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
                Quatro telas mostram o método em funcionamento, da primeira
                pergunta da IA ao painel do gestor.
              </p>
            </Reveal>

            <Reveal stagger={3}>
              <p className="mt-5 font-mono text-xs font-medium tracking-[0.14em] text-ink-soft">
                INTERFACES DA PLATAFORMA · DADOS FICTÍCIOS
              </p>
            </Reveal>
          </div>

          <Reveal
            stagger={1}
            className="mx-auto w-full max-w-sm lg:max-w-none"
          >
            <Image
              src="/secoes/cap05-laptop-produtivo.svg"
              alt="Ilustração de uma pessoa trabalhando com produtividade em um laptop, simbolizando a plataforma exímIA Academy em operação real"
              width={600}
              height={600}
              unoptimized
              loading="lazy"
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </div>

      {TOUR.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.id}
            className={
              isEven
                ? "border-t border-line bg-paper py-16 md:py-20"
                : "border-t border-line bg-paper-alt py-16 md:py-20"
            }
          >
            <div className="mx-auto w-full max-w-content px-6">
              <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
                <Reveal className={!isEven ? "md:order-2" : undefined}>
                  <div>
                    <p className="font-mono text-xs font-medium tracking-[0.14em] text-brasa-800 uppercase">
                      Tela {index + 1} · {item.name}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-[1.15] font-bold tracking-[-0.025em] text-ink md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.65] text-ink-soft">
                      {item.legend}
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  stagger={1}
                  className={!isEven ? "md:order-1" : undefined}
                >
                  <div className="relative">
                    <Parallax
                      factor={0.05}
                      className="absolute -inset-8 -z-10 hidden md:block"
                    >
                      <div className="h-full w-full rounded-card bg-brasa-100/50 blur-2xl" />
                    </Parallax>
                    <item.Mockup />
                  </div>
                </Reveal>
              </article>
            </div>
          </div>
        );
      })}
    </section>
  );
}
