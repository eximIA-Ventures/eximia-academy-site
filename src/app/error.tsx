"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F7F4EF", color: "#1A1714" }}>
      <div className="text-center max-w-md">
        <p className="text-6xl mb-4">Ops</p>
        <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Algo deu errado</h1>
        <p className="text-sm mb-8" style={{ color: "#8A8378" }}>Não conseguimos carregar esta página. Tente novamente.</p>
        <button onClick={reset} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: "oklch(0.64 0.17 42)" }}>
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
