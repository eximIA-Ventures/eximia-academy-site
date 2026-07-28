import { NextResponse } from "next/server";

/**
 * Recebe o lead da seção `#contato` e o encaminha ao destino configurado.
 *
 * Desenho deliberado: o destino é injetado por ambiente (`CONTACT_ENDPOINT`),
 * NÃO hardcoded. O motivo é concreto: o endpoint anterior da casa
 * (`forms.eximiaventures.com.br/api/v1/forms/{id}/submissions`) está fora do
 * ar e o form id usado por `apps/academy-site` não existe mais, o que fez
 * aquele formulário perder leads em silêncio. Aqui, se não houver destino
 * configurado ou se ele falhar, a rota devolve `delivered: false` de forma
 * EXPLÍCITA e o cliente cai no canal direto por email, com todos os campos
 * já preenchidos. Nenhum lead é engolido calado.
 */

/**
 * Lido DENTRO do handler, de propósito. Referência a `process.env` no escopo
 * do módulo é avaliada no build e congela o valor daquele instante, o que faz
 * a variável definida só no ambiente de deploy ser ignorada em silêncio
 * (verificado em execução). Aqui a leitura é por requisição, então trocar o
 * destino no painel da Vercel passa a valer sem rebuild.
 */
function getContactEndpoint(): string {
  return process.env.CONTACT_ENDPOINT ?? "";
}

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
};

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
  "name",
  "email",
  "company",
  "interest",
];

const MAX_FIELD_LENGTH = 2000;

function sanitize(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, delivered: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  const payload: ContactPayload = {
    name: sanitize(raw.name),
    email: sanitize(raw.email),
    company: sanitize(raw.company),
    role: sanitize(raw.role),
    interest: sanitize(raw.interest),
    message: sanitize(raw.message),
  };

  const missing = REQUIRED_FIELDS.filter((field) => payload[field].length === 0);

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, delivered: false, error: "missing_fields", missing },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
    return NextResponse.json(
      { ok: false, delivered: false, error: "invalid_email" },
      { status: 422 },
    );
  }

  const record = {
    ...payload,
    source: "landing-academy-v2",
    submittedAt: new Date().toISOString(),
  };

  const endpoint = getContactEndpoint();

  if (!endpoint) {
    // Sem destino configurado o lead NÃO é dado como enviado. O cliente
    // assume o canal direto por email em vez de exibir um falso sucesso.
    console.warn("[contato] CONTACT_ENDPOINT ausente, lead não encaminhado", {
      company: record.company,
      interest: record.interest,
    });

    return NextResponse.json(
      { ok: false, delivered: false, error: "endpoint_not_configured" },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: record }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("[contato] destino respondeu erro", response.status);

      return NextResponse.json(
        { ok: false, delivered: false, error: "upstream_error" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contato] falha ao encaminhar lead", error);

    return NextResponse.json(
      { ok: false, delivered: false, error: "upstream_unreachable" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
