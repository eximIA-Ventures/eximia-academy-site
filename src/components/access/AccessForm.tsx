"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import {
  ACADEMY_DOMAIN,
  normalizeSlug,
  searchTenants,
  tenantUrl,
  type Tenant,
} from "@/lib/tenants";

/**
 * Porta de entrada das academias por tenant. Mantém o comportamento já
 * validado em `apps/academy-site/src/app/login`: buscar a empresa pelo nome
 * ou digitar o endereço direto, e em ambos os casos seguir para
 * `{slug}.eximiaacademy.com.br`.
 *
 * O que muda aqui é a qualidade da interação, não a regra: o campo de busca
 * é um combobox de verdade (setas, Enter, Escape, `aria-activedescendant`),
 * porque um input com uma `div` flutuante ao lado é invisível para quem
 * navega por teclado ou leitor de tela.
 */

const FIELD_CLASS =
  "w-full rounded-button border border-line bg-paper px-4 py-3.5 font-sans text-[0.9375rem] text-ink outline-none transition-colors duration-[240ms] placeholder:text-mist focus:border-brasa-500";

export function AccessForm() {
  const listId = useId();
  const optionId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [directSlug, setDirectSlug] = useState("");
  const [directError, setDirectError] = useState("");

  const matches = useMemo(() => searchTenants(query), [query]);
  const hasQuery = query.trim().length > 0;
  const showList = open && hasQuery;

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", onDocumentClick);

    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  const goToTenant = (tenant: Tenant, origin: string) => {
    track("access_tenant_selected", { tenant: tenant.slug, origin });
    window.location.href = tenantUrl(tenant.slug);
  };

  const onSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (!showList || matches.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % matches.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + matches.length) % matches.length);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const tenant = matches[activeIndex];

      if (tenant) {
        goToTenant(tenant, "busca");
      }
    }
  };

  const submitDirect = (event: React.FormEvent) => {
    event.preventDefault();

    const slug = normalizeSlug(directSlug);

    if (slug.length === 0) {
      setDirectError("Digite o endereço da sua empresa.");
      return;
    }

    setDirectError("");
    track("access_direct_submitted", { tenant: slug });
    window.location.href = tenantUrl(slug);
  };

  return (
    <div className="w-full">
      {/* Busca por nome */}
      <div ref={containerRef} className="relative">
        <label
          className="mb-1.5 block font-sans text-[0.8125rem] font-medium text-ink-soft"
          htmlFor="acesso-busca"
        >
          Nome da sua empresa
        </label>
        <input
          id="acesso-busca"
          type="text"
          role="combobox"
          autoComplete="off"
          autoFocus
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            showList && matches.length > 0
              ? `${optionId}-${activeIndex}`
              : undefined
          }
          placeholder="Ex.: Argos Consultoria"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (hasQuery) {
              setOpen(true);
            }
          }}
          onKeyDown={onSearchKeyDown}
          className={FIELD_CLASS}
        />

        {showList ? (
          <div
            id={listId}
            role="listbox"
            aria-label="Academias encontradas"
            className="absolute top-full right-0 left-0 z-20 mt-2 overflow-hidden rounded-card border border-line bg-paper shadow-[0_24px_50px_-24px_rgba(28,25,23,0.35)]"
          >
            {matches.length > 0 ? (
              matches.map((tenant, index) => (
                <button
                  key={tenant.slug}
                  id={`${optionId}-${index}`}
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => goToTenant(tenant, "busca")}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors duration-[240ms] ${
                    index === activeIndex ? "bg-paper-alt" : "bg-paper"
                  }`}
                >
                  <span>
                    <span className="block font-sans text-[0.9375rem] font-medium text-ink">
                      {tenant.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[0.6875rem] tracking-[0.06em] text-ink-soft">
                      {tenant.slug}.{ACADEMY_DOMAIN}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-brasa-700">
                    →
                  </span>
                </button>
              ))
            ) : (
              <p className="px-4 py-4 text-center text-[0.8125rem] text-ink-soft">
                Nenhuma academia encontrada para “{query.trim()}”. Use o
                endereço direto abaixo.
              </p>
            )}
          </div>
        ) : null}
      </div>

      {/* Separador */}
      <div className="my-7 flex items-center gap-3">
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-mist uppercase">
          ou
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      {/* Endereço direto */}
      <form onSubmit={submitDirect} noValidate>
        <label
          className="mb-1.5 block font-sans text-[0.8125rem] font-medium text-ink-soft"
          htmlFor="acesso-direto"
        >
          Endereço direto da sua academia
        </label>
        <div className="flex items-stretch overflow-hidden rounded-button border border-line bg-paper transition-colors duration-[240ms] focus-within:border-brasa-500">
          <input
            id="acesso-direto"
            type="text"
            autoComplete="off"
            inputMode="url"
            placeholder="suaempresa"
            value={directSlug}
            onChange={(event) => {
              setDirectSlug(event.target.value);
              setDirectError("");
            }}
            aria-describedby="acesso-direto-sufixo"
            className="min-w-0 flex-1 bg-transparent px-4 py-3.5 font-sans text-[0.9375rem] text-ink outline-none placeholder:text-mist"
          />
          <span
            id="acesso-direto-sufixo"
            className="flex shrink-0 items-center border-l border-line bg-paper-alt px-3.5 font-mono text-[0.6875rem] text-ink-soft"
          >
            .{ACADEMY_DOMAIN}
          </span>
        </div>

        {directError ? (
          <p role="alert" className="mt-2 text-[0.8125rem] text-brasa-700">
            {directError}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-5 inline-flex w-full justify-center rounded-button bg-brasa-500 px-7 py-3.5 font-sans text-base font-semibold text-ink shadow-cta transition-transform duration-[240ms] hover:-translate-y-0.5"
        >
          Entrar na academia
        </button>
      </form>
    </div>
  );
}
