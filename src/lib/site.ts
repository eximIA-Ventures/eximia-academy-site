/**
 * Constantes de site público. Centralizadas aqui porque `metadata`,
 * `sitemap`, `robots`, a imagem OG e a seção de contato precisam da MESMA
 * origem canônica, e divergência entre elas gera canonical errado e card
 * social quebrado.
 */

/** Domínio canônico. Usado quando o ambiente não informa nada utilizável. */
const FALLBACK_SITE_URL = "https://eximiaacademy.com.br";

/**
 * Resolve a origem do site tolerando as três formas de "não informado".
 *
 * O caso do meio quebrou uma build de produção e é o motivo desta função
 * existir: `ARG` sem valor no Dockerfile vira `ENV VAR=`, ou seja, uma
 * STRING VAZIA, não `undefined`. Com `??` a vazia passa direto, e o
 * `new URL("")` do `metadataBase` derruba o build inteiro na coleta de
 * página, com um "Invalid URL" que não diz qual variável faltou.
 *
 * Aqui, vazio, só espaços ou valor inválido caem no domínio canônico.
 */
export function resolveSiteUrl(raw: string | undefined): string {
  const candidate = raw?.trim();

  if (!candidate) {
    return FALLBACK_SITE_URL;
  }

  try {
    // Valida de fato, em vez de confiar no formato. Um valor como
    // "eximiaacademy.com.br" (sem protocolo) também quebraria `new URL`.
    new URL(candidate);
  } catch {
    return FALLBACK_SITE_URL;
  }

  return candidate.replace(/\/+$/, "");
}

export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE_NAME = "exímIA Academy";

export const SITE_TAGLINE = "Treinamento termina. Capacidade permanece.";

export const SITE_DESCRIPTION =
  "A exímIA Academy não é um LMS nem uma LXP. É a escola AI First que transforma aprendizagem em capacidade organizacional mensurável, com evidência real de aplicação no trabalho.";

/** Canal direto, sempre válido, independente de qualquer backend de formulário. */
export const CONTACT_EMAIL = "contato@eximiaventures.com.br";
