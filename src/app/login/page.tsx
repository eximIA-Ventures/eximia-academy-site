"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Building2, HelpCircle } from "lucide-react";
import Link from "next/link";

const tenants = [
  { slug: "cory", name: "Cory Alimentos", city: "Ribeirão Preto, SP" },
  { slug: "harven", name: "Harven Agribusiness School", city: "Ribeirão Preto, SP" },
  { slug: "argos", name: "Argos Consultoria", city: "Ribeirão Preto, SP" },
];

export default function LoginPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<typeof tenants[0] | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return tenants;
    const q = query.toLowerCase();
    return tenants.filter(t => t.name.toLowerCase().includes(q) || t.slug.includes(q));
  }, [query]);

  const handleGo = () => {
    if (selected) {
      window.location.href = `https://${selected.slug}.eximiaacademy.com.br`;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F7F4EF" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <img src="/logo-horizontal.svg" alt="eximIA" className="h-6 mx-auto mb-6" />
          </Link>
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#1A1714" }}>
            Acesse sua Academy
          </h1>
          <p className="text-sm" style={{ color: "#8A8378" }}>
            Selecione sua organização para acessar a plataforma
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#8A8378" }} />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(null); }}
            placeholder="Digite o nome da sua empresa..."
            autoFocus
            className="w-full pl-12 pr-4 py-4 rounded-2xl border text-base outline-none transition-colors"
            style={{
              background: "white",
              borderColor: selected ? "oklch(0.64 0.17 42)" : "#DDD6CC",
              color: "#1A1714",
            }}
            onFocus={e => e.target.style.borderColor = "oklch(0.64 0.17 42)"}
            onBlur={e => { if (!selected) e.target.style.borderColor = "#DDD6CC"; }}
          />
        </div>

        {/* Tenant list */}
        <div className="rounded-2xl border overflow-hidden mb-4" style={{ background: "white", borderColor: "#DDD6CC" }}>
          {filtered.length > 0 ? (
            filtered.map((tenant) => (
              <button
                key={tenant.slug}
                onClick={() => { setSelected(tenant); setQuery(tenant.name); }}
                className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors border-b last:border-b-0"
                style={{
                  borderColor: "#F2EDE6",
                  background: selected?.slug === tenant.slug ? "oklch(0.64 0.17 42 / 0.06)" : "transparent",
                }}
                onMouseEnter={e => { if (selected?.slug !== tenant.slug) e.currentTarget.style.background = "#F9F6F2"; }}
                onMouseLeave={e => { if (selected?.slug !== tenant.slug) e.currentTarget.style.background = "transparent"; }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: selected?.slug === tenant.slug ? "oklch(0.64 0.17 42)" : "#F2EDE6",
                    color: selected?.slug === tenant.slug ? "white" : "#8A8378",
                  }}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold" style={{ color: "#1A1714" }}>{tenant.name}</p>
                  <p className="text-xs" style={{ color: "#8A8378" }}>{tenant.slug}.eximiaacademy.com.br</p>
                </div>
                {selected?.slug === tenant.slug && (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "oklch(0.64 0.17 42)" }}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                )}
              </button>
            ))
          ) : (
            <div className="px-5 py-8 text-center">
              <HelpCircle className="w-8 h-8 mx-auto mb-3" style={{ color: "#DDD6CC" }} />
              <p className="text-sm" style={{ color: "#8A8378" }}>Nenhuma organização encontrada</p>
              <p className="text-xs mt-1" style={{ color: "#B8B0A5" }}>Verifique o nome ou entre em contato</p>
            </div>
          )}
        </div>

        {/* Go button */}
        <button
          onClick={handleGo}
          disabled={!selected}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-base font-semibold transition-all"
          style={{
            background: selected ? "oklch(0.64 0.17 42)" : "#DDD6CC",
            color: selected ? "white" : "#8A8378",
            cursor: selected ? "pointer" : "not-allowed",
            boxShadow: selected ? "0 4px 20px oklch(0.64 0.17 42 / 0.2)" : "none",
          }}
        >
          Acessar Plataforma
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Help links */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-xs" style={{ color: "#B8B0A5" }}>
            Sua empresa ainda não tem acesso?
          </p>
          <Link
            href="mailto:contato@eximiaventures.com.br?subject=Solicitar acesso eximIA Academy"
            className="inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "oklch(0.64 0.17 42)" }}
          >
            Solicitar demonstração <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Back to site */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-xs underline" style={{ color: "#B8B0A5" }}>
            Voltar ao site institucional
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
