import Image from "next/image";
import { Reveal } from "@/components/motion";

const CARDS = [
  {
    numero: "01",
    titulo: "Jornada 0",
    corpo:
      "O ritual de entrada. 15 a 25 minutos que transformam o colaborador em sujeito ativo: plano individual, contrato de transferência e evidência mínima definida, antes de qualquer trilha.",
    noodle: "/capitulos/cap03-jornada-planejamento-extra.svg",
    alt: "Ilustração de uma pessoa organizando peças de planejamento e resolução de problemas, simbolizando o ritual de entrada da Jornada 0",
  },
  {
    numero: "02",
    titulo: "IA socrática",
    corpo:
      "A IA não dá resposta pronta. Provoca reflexão, desenvolve julgamento e personaliza a jornada de cada aprendiz.",
    noodle: "/capitulos/cap03-conversa-chatbot.svg",
    alt: "Ilustração de uma pessoa conversando com um chatbot, simbolizando o diálogo socrático entre a IA e o aprendiz",
  },
  {
    numero: "03",
    titulo: "Contrato de Transferência",
    corpo:
      "O coração do método: capacidade a aplicar, situação real de trabalho, primeira ação prática e como registrar. Sem ele, vira curso.",
    noodle: "/capitulos/cap03-geracao-ideias-pensamento-estrategico.svg",
    alt: "Ilustração de uma pessoa em pensamento estratégico gerando ideias, simbolizando a construção do Contrato de Transferência",
  },
  {
    numero: "04",
    titulo: "Evidência validada",
    corpo:
      "Relato estruturado, dado operacional ou artefato (A3, 5W1H) validado pelo gestor. Conclusão consciente só existe com evidência.",
    noodle: "/capitulos/cap03-tecnologia-conectividade.svg",
    alt: "Ilustração de tecnologia e conectividade de dados, simbolizando o registro tecnológico da evidência validada",
  },
] as const;

export function Chapter03Metodo() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-heading"
      className="relative bg-paper-alt py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-800">
              03 · O MÉTODO
            </p>
            <h2
              id="metodo-heading"
              className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] font-bold tracking-[-0.035em] text-ink"
            >
              Um método com contrato, não uma trilha com play.
            </h2>
            <p className="mt-4 max-w-2xl font-display text-[clamp(1.125rem,2.4vw,1.5rem)] leading-[1.3] font-medium tracking-[-0.02em] text-ink">
              A única plataforma onde a <span className="text-brasa-700">IA faz as perguntas</span>.
            </p>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-soft md:text-[1.1875rem]">
              Quatro mecanismos sustentam a promessa. Nenhum deles é opcional.
            </p>
          </Reveal>

          <Reveal stagger={1} className="mx-auto w-full max-w-sm lg:max-w-none">
            <Image
              src="/capitulos/cap03-robo-humano-colaboracao.svg"
              alt="Ilustração de uma pessoa e um robô colaborando lado a lado, simbolizando a parceria entre o aprendiz e a IA socrática"
              width={1000}
              height={1000}
              unoptimized
              className="w-full"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6 md:mt-20">
          {CARDS.map((card, index) => (
            <Reveal
              key={card.numero}
              stagger={index + 1}
              className="group flex flex-col rounded-card border border-line bg-paper p-6 transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-cta md:p-7"
            >
              <Image
                src={card.noodle}
                alt={card.alt}
                width={1000}
                height={1000}
                unoptimized
                className="h-52 w-52 shrink-0"
              />
              <p className="mt-6 font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
                {card.numero}
              </p>
              <h3 className="mt-2 font-display text-xl leading-[1.15] font-bold tracking-[-0.02em] text-ink">
                {card.titulo}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                {card.corpo}
              </p>
            </Reveal>
          ))}

          <Reveal
            stagger={CARDS.length + 1}
            className="group rounded-card border border-line bg-gradient-to-b from-brasa-50 to-paper p-7 transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-cta sm:col-span-2 md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <Image
                src="/capitulos/noodle-personas-time.svg"
                alt="Ilustração de um time de pessoas reunidas, simbolizando o Triângulo de forças entre aprendiz autônomo, IA socrática e gestor mentor"
                width={1000}
                height={1000}
                unoptimized
                className="h-40 w-40 shrink-0"
              />
              <div>
                <h3 className="font-display text-2xl leading-[1.15] font-bold tracking-[-0.02em] text-ink md:text-[1.75rem]">
                  Triângulo de forças
                </h3>
                <p className="mt-4 max-w-3xl text-[1.0625rem] leading-[1.65] font-medium text-ink">
                  Aprendiz autônomo · IA socrática · Gestor mentor. Cada um no
                  papel certo.
                </p>
                <p className="mt-5 max-w-3xl border-t border-line pt-5 text-[0.9375rem] leading-[1.65] text-ink-soft">
                  Se qualquer vértice domina sozinho, o sistema adoece.
                  Aprendiz sozinho vira solidão. IA sozinha vira automação.
                  Gestor sozinho vira controle.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
