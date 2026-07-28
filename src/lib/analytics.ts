/**
 * Camada fina de analytics.
 *
 * O PostHog é carregado por import DINÂMICO, nunca estático. Isso não é
 * preciosismo: com import estático o vendor entra no bundle da landing mesmo
 * quando `NEXT_PUBLIC_POSTHOG_KEY` está ausente, e a página passaria a pagar
 * dezenas de KB por uma medição desligada. Assim, sem chave, o chunk sequer
 * é baixado e `track()` é no-op absoluto.
 */

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";

export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export const analyticsEnabled = POSTHOG_KEY.length > 0;

/** Eventos previstos na landing. Literais para não haver typo silencioso. */
export type LandingEvent =
  | "cta_clicked"
  | "contact_submitted"
  | "contact_failed"
  | "contact_fallback_email"
  | "access_tenant_selected"
  | "access_direct_submitted";

type PostHogClient = typeof import("posthog-js").default;

let clientPromise: Promise<PostHogClient | null> | null = null;

function getClient(): Promise<PostHogClient | null> {
  if (!analyticsEnabled || typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (!clientPromise) {
    clientPromise = import("posthog-js")
      .then(({ default: posthog }) => {
        posthog.init(POSTHOG_KEY, {
          api_host: POSTHOG_HOST,
          capture_pageview: true,
          capture_pageleave: true,
          persistence: "localStorage+cookie",
          autocapture: false,
        });

        return posthog;
      })
      .catch(() => null);
  }

  return clientPromise;
}

/** Boot idempotente. Chamado uma vez pelo componente `Analytics`. */
export function initAnalytics() {
  void getClient();
}

export function track(
  event: LandingEvent,
  properties?: Record<string, string | number | boolean>,
) {
  if (!analyticsEnabled || typeof window === "undefined") {
    return;
  }

  void getClient().then((client) => {
    // Analytics nunca derruba a experiência de quem está lendo a página.
    try {
      client?.capture(event, properties);
    } catch {
      /* silencioso por desenho */
    }
  });
}
