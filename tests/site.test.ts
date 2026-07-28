import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl } from "../src/lib/site";

const CANONICO = "https://eximiaacademy.com.br";

/**
 * O caso que derrubou uma build de produção: `ARG` sem valor no Dockerfile
 * vira `ENV VAR=`, uma string vazia. Com `??`, ela passava direto e o
 * `new URL("")` do `metadataBase` quebrava a coleta de página.
 */
test("string vazia cai no domínio canônico, não quebra", () => {
  assert.equal(resolveSiteUrl(""), CANONICO);
  assert.equal(resolveSiteUrl("   "), CANONICO);
});

test("variável ausente cai no domínio canônico", () => {
  assert.equal(resolveSiteUrl(undefined), CANONICO);
});

test("valor sem protocolo é inválido para new URL e cai no canônico", () => {
  assert.equal(resolveSiteUrl("eximiaacademy.com.br"), CANONICO);
});

test("valor válido é respeitado e perde a barra final", () => {
  assert.equal(
    resolveSiteUrl("https://academy.exemplo.com.br/"),
    "https://academy.exemplo.com.br",
  );
  assert.equal(
    resolveSiteUrl("  https://academy.exemplo.com.br///  "),
    "https://academy.exemplo.com.br",
  );
});

test("o valor resolvido sempre constrói uma URL sem lançar", () => {
  for (const entrada of ["", "   ", undefined, "nao-e-url", CANONICO]) {
    assert.doesNotThrow(() => new URL(resolveSiteUrl(entrada)));
  }
});
