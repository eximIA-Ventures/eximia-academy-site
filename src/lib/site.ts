/**
 * Constantes de site público. Centralizadas aqui porque `metadata`,
 * `sitemap`, `robots`, a imagem OG e a seção de contato precisam da MESMA
 * origem canônica, e divergência entre elas gera canonical errado e card
 * social quebrado.
 *
 * `NEXT_PUBLIC_SITE_URL` deve ser definida no ambiente de deploy assim que
 * houver domínio próprio. Sem ela, cai na URL de preview atual da Vercel,
 * que é provisória por definição.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://app-five-theta-92.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "exímIA Academy";

export const SITE_TAGLINE = "Treinamento termina. Capacidade permanece.";

export const SITE_DESCRIPTION =
  "A exímIA Academy não é um LMS nem uma LXP. É a escola AI First que transforma aprendizagem em capacidade organizacional mensurável, com evidência real de aplicação no trabalho.";

/** Canal direto, sempre válido, independente de qualquer backend de formulário. */
export const CONTACT_EMAIL = "contato@eximiaventures.com.br";
