/**
 * Tokens visuais da plataforma real (eximia-academy-v2/apps/web/src/styles/theme.css,
 * lido read-only para o tour do produto do capítulo 05). Espaço de cor OKLCh, tema
 * dark (default da plataforma). Aplicados via inline style dentro do corpo dos 4
 * mockups, nunca como classe Tailwind arbitrária, para não depender de build/dev
 * nesta rodada. A moldura do navegador (BrowserFrame) permanece nos tokens da
 * landing (paper/ink/brasa); só o conteúdo dentro da tela usa esta paleta.
 */
export const platform = {
  bgApp: "oklch(0.14 0.005 40)",
  bgSurface: "oklch(0.19 0.005 40)",
  bgCard: "oklch(0.21 0.006 40)",
  bgElevated: "oklch(0.25 0.005 40)",
  bgHover: "oklch(0.28 0.005 40)",

  textPrimary: "oklch(0.95 0 0)",
  textSecondary: "oklch(0.68 0 0)",
  textMuted: "oklch(0.5 0 0)",

  borderSubtle: "oklch(0.28 0.005 40 / 0.55)",
  borderMedium: "oklch(0.35 0.005 40 / 0.6)",

  cerrado400: "oklch(0.75 0.17 46)",
  cerrado500: "oklch(0.72 0.18 45)",
  cerrado600: "oklch(0.64 0.17 42)",
  cerrado700: "oklch(0.55 0.15 40)",
  cerrado800: "oklch(0.44 0.12 38)",
  cerrado600Soft: "oklch(0.64 0.17 42 / 0.15)",
  cerrado600Ring: "oklch(0.64 0.17 42 / 0.22)",
  cerrado600Border: "oklch(0.64 0.17 42 / 0.35)",

  varzea: "oklch(0.78 0.1 168)",
  semanticSuccess: "oklch(0.65 0.19 155)",
  semanticSuccessSoft: "oklch(0.65 0.19 155 / 0.14)",
  semanticWarning: "oklch(0.8 0.15 70)",
  semanticWarningSoft: "oklch(0.8 0.15 70 / 0.16)",

  gradientAI: "linear-gradient(135deg, oklch(0.64 0.17 42), oklch(0.44 0.12 38))",
  gradientBar: "linear-gradient(180deg, oklch(0.72 0.18 45), oklch(0.55 0.15 40))",

  shadowCard: "0 2px 10px oklch(0 0 0 / 0.45)",
  shadowElevated: "0 10px 28px oklch(0 0 0 / 0.5)",
} as const;
