/**
 * Diretório de acesso às academias por tenant.
 *
 * A lista é CURADA à mão, não derivada do banco, de propósito: é a mesma
 * decisão já tomada em `apps/academy-site` (o commit que removeu a Cory do
 * seletor foi manual). Nem todo tenant existente deve aparecer numa vitrine
 * pública, e um seletor alimentado por banco expõe a carteira de clientes
 * inteira para qualquer visitante. Quem entra por convite usa o campo de
 * endereço direto, que aceita qualquer slug sem precisar estar listado.
 */

export const ACADEMY_DOMAIN = "eximiaacademy.com.br";

export type Tenant = {
  slug: string;
  name: string;
  /** Linha curta de contexto, exibida na sugestão. */
  hint: string;
};

export const TENANTS: readonly Tenant[] = [
  {
    slug: "argos",
    name: "Argos Consultoria",
    hint: "Academy corporativa",
  },
];

/** Endereço público da academia de um tenant. */
export function tenantUrl(slug: string): string {
  return `https://${slug}.${ACADEMY_DOMAIN}`;
}

/**
 * Normaliza o que a pessoa digitou para um slug de subdomínio válido.
 * Remove acentos (o visitante digita "Análise", o subdomínio é "analise"),
 * troca espaços por hífen e descarta o que não for permitido em host.
 */
export function normalizeSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Busca acento-insensível por nome ou slug. Consulta vazia não sugere nada. */
export function searchTenants(query: string): Tenant[] {
  const normalized = normalizeSlug(query);

  if (normalized.length === 0) {
    return [];
  }

  return TENANTS.filter(
    (tenant) =>
      normalizeSlug(tenant.name).includes(normalized) ||
      tenant.slug.includes(normalized),
  );
}
