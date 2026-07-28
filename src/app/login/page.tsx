import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AccessForm } from "@/components/access/AccessForm";

/**
 * Porta de acesso às academias por tenant.
 *
 * A rota é `/login` por paridade deliberada com `apps/academy-site`, o site
 * que esta landing substitui: links, favoritos e materiais já apontam para
 * lá, e trocar o caminho quebraria todos eles em silêncio.
 */
export const metadata: Metadata = {
  title: "Acessar sua academia",
  description:
    "Entre na academia da sua organização na exímIA Academy pelo nome da empresa ou pelo endereço direto.",
  // Página utilitária de acesso não é conteúdo de busca.
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper-alt px-6 py-16 text-ink">
      <div className="w-full max-w-md">
        <div className="text-center">
          <Link href="/" className="inline-flex" aria-label="exímIA Academy">
            <Image
              src="/secoes/eximia-horizontal-tinta.svg"
              alt="exímIA Academy"
              width={632}
              height={136}
              unoptimized
              priority
              className="mx-auto h-7 w-auto"
            />
          </Link>

          <p className="mt-10 font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
            Acesso
          </p>
          <h1 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.1] font-bold tracking-[-0.03em]">
            Entre na sua academia
          </h1>
          <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
            Cada organização tem seu próprio ambiente, com dados isolados.
            Encontre o da sua empresa abaixo.
          </p>
        </div>

        <div className="mt-9 rounded-card border border-line bg-paper p-7 md:p-8">
          <AccessForm />
        </div>

        <div className="mt-9 text-center">
          <p className="text-[0.8125rem] text-ink-soft">
            Ainda não tem acesso?
          </p>
          <Link
            href="/#contato"
            className="mt-1.5 inline-block font-sans text-[0.9375rem] font-medium text-brasa-700 underline decoration-brasa-200 underline-offset-4 transition-colors duration-[240ms] hover:decoration-brasa-500"
          >
            Solicitar demonstração
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-mono text-xs font-medium tracking-[0.14em] text-ink-soft uppercase transition-colors duration-[240ms] hover:text-ink"
          >
            ← Voltar para a landing
          </Link>
        </div>
      </div>
    </main>
  );
}
