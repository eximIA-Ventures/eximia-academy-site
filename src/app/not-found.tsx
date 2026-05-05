import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F7F4EF", color: "#1A1714" }}>
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "oklch(0.64 0.17 42)" }}>404</p>
        <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Página não encontrada</h1>
        <p className="text-sm mb-8" style={{ color: "#8A8378" }}>A página que você procura não existe ou foi movida.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: "oklch(0.64 0.17 42)" }}>
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
