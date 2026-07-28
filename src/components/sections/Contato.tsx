"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion";
import { track } from "@/lib/analytics";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Capítulo 09 · A CONVERSA — o destino real de `#contato`.
 *
 * Antes deste bloco, os cinco CTAs da página apontavam para `#contato`, que
 * era o `id` da própria seção da oferta: âncora auto-referente, clique sem
 * efeito, narrativa inteira terminando em parede. Esta seção passa a ser o
 * dono do `id` e fecha o funil.
 *
 * Resiliência deliberada: se a rota `/api/contato` não tiver destino
 * configurado (ou o destino cair), o formulário NÃO finge sucesso. Ele
 * assume o canal direto por email com todos os campos já compostos no
 * corpo da mensagem, a um clique. O lead nunca se perde em silêncio.
 */

const INTERESTS = [
  { value: "sprint", label: "Sprint de Capacidade Aplicada, 30 dias" },
  { value: "demo", label: "Demonstração da plataforma" },
  { value: "diagnostico", label: "Diagnóstico de capacidade e HCI" },
  { value: "outro", label: "Outro assunto" },
] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  interest: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "fallback";

const FIELD_CLASS =
  "w-full rounded-button border border-line bg-paper px-4 py-3 font-sans text-[0.9375rem] text-ink outline-none transition-colors duration-[240ms] placeholder:text-mist focus:border-brasa-500";

const LABEL_CLASS =
  "mb-1.5 block font-sans text-[0.8125rem] font-medium text-ink-soft";

export function Contato() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const canSend =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.company.trim() !== "" &&
    form.interest !== "";

  const interestLabel =
    INTERESTS.find((item) => item.value === form.interest)?.label ?? "";

  /** Mesmo conteúdo do formulário, pronto para o canal direto por email. */
  const mailtoHref = useMemo(() => {
    const subject = `Conversa sobre capacidade aplicada · ${
      form.company || "exímIA Academy"
    }`;

    const body = [
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      `Empresa: ${form.company}`,
      `Cargo: ${form.role || "não informado"}`,
      `Interesse: ${interestLabel || "não informado"}`,
      "",
      form.message || "(sem mensagem adicional)",
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [form, interestLabel]);

  const update = (field: keyof FormState) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!canSend || status === "sending") {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        track("contact_submitted", { interest: form.interest });
        return;
      }

      setStatus("fallback");
      track("contact_failed", { status: response.status });
    } catch {
      setStatus("fallback");
      track("contact_failed", { status: 0 });
    }
  };

  return (
    <section
      id="contato"
      data-nav-surface="light"
      className="border-t border-line bg-paper-alt py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brasa-700 uppercase">
                09 · A CONVERSA
              </p>
            </Reveal>
            <Reveal stagger={1}>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.03em] text-ink">
                O primeiro passo é uma conversa, não um contrato.
              </h2>
            </Reveal>
            <Reveal stagger={2}>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-[1.65] text-ink-soft">
                Conte o problema de capacidade que está em jogo na sua
                operação. Respondemos em até um dia útil com um caminho
                concreto, não com um orçamento genérico.
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <div className="mt-9 border-t border-line pt-7">
                <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase">
                  Ou fale direto
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => track("cta_clicked", { cta: "email_direto" })}
                  className="mt-2 inline-block font-sans text-[1.0625rem] font-medium text-brasa-700 underline decoration-brasa-200 underline-offset-4 transition-colors duration-[240ms] hover:decoration-brasa-500"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal stagger={2}>
            <div className="rounded-card border border-line bg-paper p-7 md:p-9">
              {status === "sent" ? (
                <div className="py-8 text-center">
                  <p className="font-display text-2xl font-bold text-ink">
                    Mensagem recebida.
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    Respondemos em até um dia útil no email {form.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className={LABEL_CLASS} htmlFor="contato-nome">
                        Nome <span className="text-brasa-700">*</span>
                      </label>
                      <input
                        id="contato-nome"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Nome completo"
                        value={form.name}
                        onChange={(event) => update("name")(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className={LABEL_CLASS} htmlFor="contato-email">
                        Email corporativo{" "}
                        <span className="text-brasa-700">*</span>
                      </label>
                      <input
                        id="contato-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="nome@empresa.com.br"
                        value={form.email}
                        onChange={(event) => update("email")(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className={LABEL_CLASS} htmlFor="contato-empresa">
                        Empresa <span className="text-brasa-700">*</span>
                      </label>
                      <input
                        id="contato-empresa"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder="Nome da organização"
                        value={form.company}
                        onChange={(event) =>
                          update("company")(event.target.value)
                        }
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className={LABEL_CLASS} htmlFor="contato-cargo">
                        Cargo
                      </label>
                      <input
                        id="contato-cargo"
                        type="text"
                        autoComplete="organization-title"
                        placeholder="Ex.: Diretor de Operações"
                        value={form.role}
                        onChange={(event) => update("role")(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        className={LABEL_CLASS}
                        htmlFor="contato-interesse"
                      >
                        Interesse <span className="text-brasa-700">*</span>
                      </label>
                      <select
                        id="contato-interesse"
                        required
                        value={form.interest}
                        onChange={(event) =>
                          update("interest")(event.target.value)
                        }
                        className={`${FIELD_CLASS} appearance-none`}
                      >
                        <option value="">Selecione</option>
                        {INTERESTS.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={LABEL_CLASS} htmlFor="contato-mensagem">
                        Qual capacidade precisa existir na sua operação?
                      </label>
                      <textarea
                        id="contato-mensagem"
                        rows={4}
                        placeholder="Descreva o problema real, não o curso desejado."
                        value={form.message}
                        onChange={(event) =>
                          update("message")(event.target.value)
                        }
                        className={`${FIELD_CLASS} resize-none`}
                      />
                    </div>
                  </div>

                  {status === "fallback" ? (
                    <div
                      role="status"
                      className="mt-6 rounded-button border border-brasa-200 bg-brasa-50 p-4"
                    >
                      <p className="text-[0.875rem] leading-[1.55] text-ink">
                        O envio automático falhou. Sua mensagem não se perdeu:
                        o botão abaixo abre o email já preenchido com tudo o
                        que você escreveu.
                      </p>
                      <a
                        href={mailtoHref}
                        onClick={() => track("contact_fallback_email")}
                        className="mt-3 inline-flex rounded-button bg-brasa-500 px-5 py-2.5 font-sans text-sm font-semibold text-ink shadow-cta transition-transform duration-[240ms] hover:-translate-y-0.5"
                      >
                        Enviar por email
                      </a>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={!canSend || status === "sending"}
                    className="mt-7 inline-flex w-full justify-center rounded-button bg-brasa-500 px-7 py-3.5 font-sans text-base font-semibold text-ink shadow-cta transition-[transform,opacity] duration-[240ms] hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40"
                  >
                    {status === "sending" ? "Enviando..." : "Agendar conversa"}
                  </button>

                  <p className="mt-4 text-center text-[0.8125rem] leading-[1.5] text-ink-soft">
                    Seus dados são tratados conforme a LGPD e usados apenas
                    para responder a esta solicitação.{" "}
                    <a
                      href="/privacidade"
                      className="underline decoration-line underline-offset-2 transition-colors duration-[240ms] hover:text-ink"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
