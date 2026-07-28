import Image from "next/image";
import Link from "next/link";

/** Footer minimal — logo, assinatura, links legais reais, ano dinâmico. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-nav-surface="light"
      className="border-t border-line bg-paper-alt py-12"
    >
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-6 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-brasa-500"
            />
            <Image
              src="/secoes/eximia-horizontal-tinta.svg"
              alt="exímIA Academy"
              width={632}
              height={136}
              unoptimized
              loading="lazy"
              className="h-6 w-auto"
            />
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            exímIA Academy · Escola AI First de Capacidades Humanas para
            Execução
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex gap-5 text-sm text-ink-soft">
            <Link
              href="/privacidade"
              className="transition-colors duration-[240ms] hover:text-ink"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="transition-colors duration-[240ms] hover:text-ink"
            >
              Termos
            </Link>
          </div>
          <p className="font-mono text-xs tracking-[0.08em] text-ink-soft">
            © {year} exímIA Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
