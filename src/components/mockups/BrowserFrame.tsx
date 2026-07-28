import type { ReactNode } from "react";

type BrowserFrameProps = {
  address: string;
  children: ReactNode;
  className?: string;
};

/** Moldura de navegador para os 4 mockups do tour do produto (05 · A PLATAFORMA). */
export function BrowserFrame({ address, children, className }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-card border border-line bg-paper shadow-[0_24px_60px_-28px_rgba(28,25,23,0.35)] ${className ?? ""}`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-line bg-paper-alt px-4 py-3">
        <span className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="order-3 min-w-0 flex-1 truncate rounded-chip border border-line bg-paper px-3 py-1 font-mono text-[0.6875rem] text-ink-soft sm:order-none">
          {address}
        </span>
        <span className="shrink-0 rounded-chip border border-brasa-200 bg-brasa-50 px-2.5 py-1 font-mono text-[0.625rem] font-medium tracking-[0.1em] text-brasa-700 uppercase">
          Dados fictícios
        </span>
      </div>
      <div className="bg-paper">{children}</div>
    </div>
  );
}
