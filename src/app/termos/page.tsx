import type { Metadata } from "next";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermosPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6" style={{ background: "#F7F4EF", color: "#1A1714" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>Termos de Uso</h1>
        <div className="prose prose-lg" style={{ color: "#44403A" }}>
          <p className="text-sm mb-4"><strong>Última atualização:</strong> Maio de 2026</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>1. Sobre este site</h2>
          <p>Este é o site institucional da eximIA Academy, produto da eximIA Ventures. O conteúdo aqui apresentado tem caráter informativo sobre a plataforma e seus módulos.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>2. Propriedade intelectual</h2>
          <p>Todo o conteúdo deste site, incluindo textos, imagens, logos e design, é propriedade da eximIA Ventures. É vedada a reprodução sem autorização prévia.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>3. Uso da plataforma</h2>
          <p>O acesso à plataforma eximIA Academy (ambiente logado) está sujeito a termos específicos firmados entre a eximIA Ventures e a organização contratante.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>4. Limitação de responsabilidade</h2>
          <p>As informações neste site são apresentadas sem garantia de completude. Números e funcionalidades podem variar conforme o plano contratado.</p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>5. Contato</h2>
          <p>Dúvidas: <a href="mailto:contato@eximiaventures.com.br" className="underline">contato@eximiaventures.com.br</a></p>
        </div>
        <a href="/" className="inline-block mt-12 text-sm underline" style={{ color: "#8A8378" }}>Voltar ao início</a>
      </div>
    </div>
  );
}
