import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
};

/**
 * Casca compartilhada das páginas legais. Mantém a tipografia e os tokens da
 * landing (paper/ink/brasa/line) para que Privacidade e Termos não pareçam
 * um anexo de outro site, que é o destino comum desse tipo de página.
 */
export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 md:py-28">
        <Link
          href="/"
          className="font-mono text-xs font-medium tracking-[0.14em] text-ink-soft uppercase transition-colors duration-[240ms] hover:text-ink"
        >
          ← Voltar para a landing
        </Link>

        <p className="mt-12 font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em]">
          {title}
        </h1>
        <p className="mt-4 font-mono text-xs tracking-[0.08em] text-ink-soft">
          Última atualização: {updatedAt}
        </p>

        <div className="mt-12 flex flex-col gap-9">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-[1.0625rem] leading-[1.7] text-ink-soft">
        {children}
      </div>
    </section>
  );
}
