import assert from "node:assert/strict";
import test from "node:test";
import {
  ACADEMY_DOMAIN,
  TENANTS,
  normalizeSlug,
  searchTenants,
  tenantUrl,
} from "../src/lib/tenants";

test("normaliza acento, espaço e caractere inválido em slug de host", () => {
  assert.equal(normalizeSlug("Argos Consultoria"), "argos-consultoria");
  assert.equal(normalizeSlug("Análise & Gestão"), "analise-gestao");
  assert.equal(normalizeSlug("  ARGOS  "), "argos");
});

test("slug nunca sai com hífen sobrando nas pontas nem duplicado", () => {
  assert.equal(normalizeSlug("--argos--"), "argos");
  assert.equal(normalizeSlug("a  b"), "a-b");
  assert.equal(normalizeSlug("!!!"), "");
});

test("busca vazia não sugere tenant algum", () => {
  assert.deepEqual(searchTenants(""), []);
  assert.deepEqual(searchTenants("   "), []);
  assert.deepEqual(searchTenants("!!!"), []);
});

test("busca encontra o tenant por nome, por slug e ignorando acento", () => {
  assert.equal(searchTenants("argos").length, 1);
  assert.equal(searchTenants("Argos Consultoria").length, 1);
  assert.equal(searchTenants("consultoria").length, 1);
  assert.equal(searchTenants("ARGOS").length, 1);
});

test("busca sem correspondência devolve lista vazia, não o catálogo inteiro", () => {
  assert.deepEqual(searchTenants("empresa-inexistente"), []);
});

test("endereço do tenant aponta para o subdomínio da academia", () => {
  assert.equal(tenantUrl("argos"), `https://argos.${ACADEMY_DOMAIN}`);
});

test("todo tenant do catálogo tem slug já normalizado", () => {
  for (const tenant of TENANTS) {
    assert.equal(
      tenant.slug,
      normalizeSlug(tenant.slug),
      `slug inválido no catálogo: ${tenant.slug}`,
    );
  }
});
