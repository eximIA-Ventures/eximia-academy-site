"use client";

import { useEffect } from "react";
import { analyticsEnabled, initAnalytics, track } from "@/lib/analytics";

/**
 * Boot da medição, montado uma única vez no layout. Sem
 * `NEXT_PUBLIC_POSTHOG_KEY` no ambiente, nada é inicializado, nenhum chunk
 * de vendor é baixado e nenhuma requisição sai da página.
 */
export function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled) {
      return;
    }

    initAnalytics();

    /**
     * Rastreio de CTA por delegação: um único listener no documento lê o
     * atributo `data-cta` do elemento clicado. As seções que contêm os CTAs
     * (Hero, Nav, Oferta) permanecem componentes de servidor, sem `onClick`
     * e sem entrar no bundle do cliente só para emitir um evento.
     */
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-cta]");

      if (!trigger) {
        return;
      }

      track("cta_clicked", { cta: trigger.dataset.cta ?? "desconhecido" });
    };

    document.addEventListener("click", onClick, { capture: true });

    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
