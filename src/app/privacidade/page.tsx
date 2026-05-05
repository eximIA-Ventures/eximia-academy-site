import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6" style={{ background: "#F7F4EF", color: "#1A1714" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>Política de Privacidade</h1>
        <div className="prose prose-lg" style={{ color: "#44403A" }}>
          <p className="text-sm mb-4"><strong>Última atualização:</strong> Maio de 2026</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>1. Dados que coletamos</h2>
          <p>Coletamos apenas os dados fornecidos voluntariamente por você ao entrar em contato conosco: nome, email corporativo e mensagem. Não utilizamos cookies de rastreamento de terceiros neste site institucional.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>2. Como usamos seus dados</h2>
          <p>Seus dados são utilizados exclusivamente para responder à sua solicitação de contato ou demonstração. Não vendemos, compartilhamos ou transferimos seus dados para terceiros.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>3. Proteção de dados</h2>
          <p>Seus dados são protegidos conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018). Você pode solicitar a exclusão dos seus dados a qualquer momento.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>4. Contato</h2>
          <p>Para dúvidas sobre privacidade: <a href="mailto:contato@eximiaventures.com.br" className="underline">contato@eximiaventures.com.br</a></p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>5. Plataforma Academy</h2>
          <p>A plataforma eximIA Academy (ambiente logado) possui política de privacidade própria, disponível dentro do ambiente autenticado, com detalhes sobre dados de aprendizagem, reflexões e analytics.</p>
        </div>
        <a href="/" className="inline-block mt-12 text-sm underline" style={{ color: "#8A8378" }}>Voltar ao início</a>
      </div>
    </div>
  );
}
