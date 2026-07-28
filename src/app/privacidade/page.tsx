import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a exímIA Academy trata os dados pessoais coletados nesta página, conforme a Lei Geral de Proteção de Dados.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      eyebrow="LGPD"
      title="Política de Privacidade"
      updatedAt="28 de julho de 2026"
    >
      <LegalSection title="1. Quem trata seus dados">
        <p>
          O controlador dos dados pessoais coletados nesta página é a exímIA
          Ventures, responsável pela exímIA Academy. O contato do encarregado
          de proteção de dados é{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brasa-700 underline decoration-brasa-200 underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Quais dados coletamos">
        <p>
          Coletamos apenas o que você informa voluntariamente no formulário de
          contato: nome, email corporativo, empresa, cargo, tipo de interesse e
          a mensagem que você escrever. Não solicitamos dados sensíveis nem
          dados de menores de idade.
        </p>
        <p>
          Se a medição de audiência estiver ativa nesta página, também
          registramos dados técnicos e de navegação em forma agregada, como
          páginas visitadas, origem do acesso e tipo de dispositivo. Esses
          dados não são usados para identificar você individualmente.
        </p>
      </LegalSection>

      <LegalSection title="3. Para que usamos">
        <p>
          Os dados do formulário são usados exclusivamente para responder à sua
          solicitação e conduzir a conversa comercial que você iniciou. A base
          legal é o legítimo interesse em atender a um contato ativo e, quando
          aplicável, os procedimentos preliminares de um contrato, nos termos
          do artigo 7º da Lei nº 13.709/2018.
        </p>
        <p>
          Não vendemos, alugamos nem compartilhamos seus dados com terceiros
          para fins de marketing. Você não é inscrito automaticamente em
          nenhuma lista de disparo por preencher este formulário.
        </p>
      </LegalSection>

      <LegalSection title="4. Com quem compartilhamos">
        <p>
          Apenas com operadores necessários para o funcionamento do serviço,
          como provedores de hospedagem, envio de email e medição de audiência,
          sempre limitados à finalidade descrita acima e sujeitos a obrigações
          de confidencialidade.
        </p>
      </LegalSection>

      <LegalSection title="5. Por quanto tempo guardamos">
        <p>
          Mantemos os dados do contato pelo tempo necessário ao atendimento e
          pelo período em que a relação comercial permanecer ativa. Encerrada a
          finalidade, os dados são eliminados ou anonimizados, salvo obrigação
          legal de guarda.
        </p>
      </LegalSection>

      <LegalSection title="6. Seus direitos">
        <p>
          A qualquer momento você pode solicitar confirmação de tratamento,
          acesso, correção, anonimização, portabilidade, eliminação dos dados e
          revogação do consentimento. Basta escrever para{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brasa-700 underline decoration-brasa-200 underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          . Respondemos em até 15 dias.
        </p>
      </LegalSection>

      <LegalSection title="7. Segurança">
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados
          contra acessos não autorizados e situações de destruição, perda ou
          alteração. Nenhum sistema é infalível, e por isso mantemos o
          princípio de coletar o mínimo necessário.
        </p>
      </LegalSection>

      <LegalSection title="8. Mudanças nesta política">
        <p>
          Alterações relevantes serão publicadas nesta mesma página, com a data
          de atualização revista no topo.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
