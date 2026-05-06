"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";

const tenants = [
  { slug: "cory", name: "Cory Alimentos" },
  { slug: "argos", name: "Argos Consultoria" },
];

export default function LoginPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return tenants.filter(t => t.name.toLowerCase().includes(q) || t.slug.includes(q));
  }, [query]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleSelect = (tenant: typeof tenants[0]) => {
    window.location.href = `https://${tenant.slug}.eximiaacademy.com.br`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F7F4EF" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <img src="/logo-horizontal.svg" alt="eximIA" className="h-6 mx-auto mb-8" />
          </Link>
          <div className="w-12 h-12 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: "oklch(0.64 0.17 42 / 0.1)" }}>
            <LogIn className="w-6 h-6" style={{ color: "oklch(0.64 0.17 42)" }} />
          </div>
          <h1 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "#1A1714" }}>
            Acessar plataforma
          </h1>
          <p className="text-sm" style={{ color: "#8A8378" }}>
            Digite o nome da sua empresa
          </p>
        </div>

        {/* Search input with dropdown */}
        <div ref={ref} className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5" style={{ color: "#B8B0A5" }} />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => { if (query.trim()) setOpen(true); }}
            placeholder="Nome da sua empresa"
            autoFocus
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm outline-none transition-all"
            style={{ background: "white", borderColor: open && filtered.length > 0 ? "oklch(0.64 0.17 42)" : "#DDD6CC", color: "#1A1714" }}
          />

          {/* Dropdown */}
          {open && query.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border overflow-hidden shadow-lg z-10" style={{ background: "white", borderColor: "#EDE8E0" }}>
              {filtered.length > 0 ? (
                filtered.map((tenant) => (
                  <button
                    key={tenant.slug}
                    onClick={() => handleSelect(tenant)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                    onMouseEnter={e => e.currentTarget.style.background = "#F9F6F2"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <p className="text-sm font-medium" style={{ color: "#1A1714" }}>{tenant.name}</p>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" style={{ color: "#B8B0A5" }} />
                  </button>
                ))
              ) : (
                <div className="px-4 py-4 text-center">
                  <p className="text-xs" style={{ color: "#8A8378" }}>Nenhum resultado para "{query}"</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ background: "#EDE8E0" }} />
          <span className="text-[10px] uppercase tracking-widest" style={{ color: "#B8B0A5" }}>ou</span>
          <div className="flex-1 h-px" style={{ background: "#EDE8E0" }} />
        </div>

        {/* Direct access */}
        <div className="text-center space-y-4">
          <p className="text-xs" style={{ color: "#8A8378" }}>
            Acesse diretamente pelo endereço da sua empresa
          </p>
          <div className="flex items-center rounded-xl border overflow-hidden transition-all focus-within:border-[oklch(0.64_0.17_42)] focus-within:shadow-[0_0_0_3px_oklch(0.64_0.17_42_/_0.08)]" style={{ borderColor: "#DDD6CC", background: "white" }}>
            <input
              type="text"
              placeholder="nomedasuaempresa"
              className="flex-1 px-4 py-3.5 text-sm outline-none text-left font-medium"
              style={{ color: "#1A1714", background: "transparent" }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  const val = (e.target as HTMLInputElement).value.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
                  if (val) window.location.href = `https://${val}.eximiaacademy.com.br`;
                }
              }}
            />
            <span className="text-[11px] font-mono px-4 py-3.5 shrink-0" style={{ color: "#8A8378", background: "#F2EDE6" }}>
              .eximiaacademy.com.br
            </span>
          </div>
        </div>

        {/* Help */}
        <div className="mt-10 text-center">
          <p className="text-[11px] mb-2" style={{ color: "#B8B0A5" }}>Ainda não tem acesso?</p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-1 text-xs font-medium"
            style={{ color: "oklch(0.64 0.17 42)" }}
          >
            Solicitar demonstração <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[11px]" style={{ color: "#B8B0A5" }}>
            ← Voltar ao site
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
