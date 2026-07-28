import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso desta página institucional da exímIA Academy e natureza das informações aqui apresentadas.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <LegalPage
      eyebrow="Condições"
      title="Termos de Uso"
      updatedAt="28 de julho de 2026"
    >
      <LegalSection title="1. Objeto">
        <p>
          Estes termos regem o uso desta página institucional da exímIA
          Academy, mantida pela exímIA Ventures. O acesso à página implica
          concordância com as condições descritas aqui.
        </p>
      </LegalSection>

      <LegalSection title="2. Natureza das informações">
        <p>
          O conteúdo desta página tem caráter informativo e comercial. As telas
          de produto apresentadas são reconstruções fiéis da interface da
          plataforma com dados fictícios, identificadas como tal, e servem para
          ilustrar o funcionamento do método, não para representar resultados
          de qualquer cliente específico.
        </p>
        <p>
          Indicadores citados, incluindo os relativos ao Human Capability
          Index, referem-se a medições internas da própria exímIA e não
          constituem promessa de resultado. O desempenho de um programa depende
          do contexto, da adesão e da operação de cada organização.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso permitido">
        <p>
          Você pode navegar, ler e compartilhar links desta página livremente.
          É vedado reproduzir, copiar ou reutilizar textos, marcas,
          identidade visual, ilustrações e demais materiais para fins
          comerciais sem autorização escrita prévia.
        </p>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Todos os elementos desta página, incluindo marca, método, nomenclatura
          do Human Capability Index, textos e material visual, são de
          titularidade da exímIA Ventures ou de seus licenciadores.
        </p>
      </LegalSection>

      <LegalSection title="5. Contato e formulário">
        <p>
          Ao enviar uma mensagem pelo formulário, você declara que as
          informações são verdadeiras e que possui autoridade para representar
          a organização informada. O tratamento dos dados segue a{" "}
          <a
            href="/privacidade"
            className="text-brasa-700 underline decoration-brasa-200 underline-offset-4"
          >
            Política de Privacidade
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Disponibilidade">
        <p>
          A página pode passar por manutenção, atualização ou indisponibilidade
          temporária. Não há garantia de funcionamento ininterrupto.
        </p>
      </LegalSection>

      <LegalSection title="7. Foro e contato">
        <p>
          Estes termos são regidos pela legislação brasileira. Dúvidas podem
          ser encaminhadas para{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brasa-700 underline decoration-brasa-200 underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
