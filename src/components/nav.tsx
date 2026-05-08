"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Menu, X, ChevronDown, GraduationCap, BarChart3, Users, BookOpen, Target, MessageSquare, Puzzle, Building2, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
// Theme toggle removed — light mode only
import { modules } from "@/lib/modules";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, BarChart3, Users, BookOpen, Target, MessageSquare, Puzzle, Building2, Globe,
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-line py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo-horizontal.svg" alt="eximIA" className="h-6" />
          <span className="text-[20px] font-bold leading-none mb-[1px]" style={{ fontFamily: "var(--font-caveat), cursive", color: "oklch(0.64 0.17 42)" }}>Academy</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="/#produto" className="hover:text-body transition-colors duration-200">Produto</a>
          <a href="/#metodo" className="hover:text-body transition-colors duration-200">Metodo</a>

          {/* Modules dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-1 hover:text-body transition-colors duration-200"
            >
              Modulos
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
            </button>

            {dropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-page rounded-2xl border border-line p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-subtle mb-3 px-1">Modulos da plataforma</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {modules.map((mod) => {
                    const Icon = iconMap[mod.iconName] || GraduationCap;
                    return (
                      <a
                        key={mod.slug}
                        href={`/modulos/${mod.slug}`}
                        onClick={() => setDropdown(false)}
                        className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-primary-subtle/50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform" style={{ backgroundColor: `color-mix(in srgb, ${mod.color} 12%, transparent)` }}>
                          <Icon className="w-4 h-4" style={{ color: mod.color }} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-medium text-body transition-colors" style={{ color: undefined }} onMouseEnter={e => (e.target as HTMLElement).style.color = mod.color} onMouseLeave={e => (e.target as HTMLElement).style.color = ""}>{mod.name}</span>
                            {mod.core && (
                              <span className="text-[7px] uppercase tracking-wider px-1 py-px rounded font-mono" style={{ color: mod.color, borderColor: `color-mix(in srgb, ${mod.color} 30%, transparent)`, border: `1px solid color-mix(in srgb, ${mod.color} 30%, transparent)` }}>Core</span>
                            )}
                          </div>
                          <p className="text-[11px] text-muted leading-snug mt-0.5">{mod.tagline}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <div className="border-t border-line mt-3 pt-3 px-1">
                  <a href="/#modulos" onClick={() => setDropdown(false)} className="text-[11px] text-muted hover:text-primary transition-colors">
                    Ver todos os modulos →
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/#resultados" className="hover:text-body transition-colors duration-200">Resultados</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden sm:flex items-center gap-1.5 border border-line text-body px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200"
          >
            Acessar
          </a>
          <a
            href="#cta"
            className="group hidden sm:flex items-center gap-2 bg-primary text-page px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-200"
          >
            Solicitar Demo
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted hover:text-body">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-line mt-3 px-6 py-4 space-y-3">
          <a href="/#produto" onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-body py-1.5">Produto</a>
          <a href="/#metodo" onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-body py-1.5">Metodo</a>
          <p className="text-[10px] uppercase tracking-widest text-subtle pt-2">Modulos</p>
          {modules.map((mod) => (
            <a key={mod.slug} href={`/modulos/${mod.slug}`} onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-body py-1 pl-3">
              {mod.name}
            </a>
          ))}
          <a href="/#resultados" onClick={() => setOpen(false)} className="block text-sm text-muted hover:text-body py-1.5">Resultados</a>
          <a href="#cta" className="block bg-primary text-page px-4 py-2.5 rounded-full text-sm font-semibold text-center mt-2">
            Solicitar Demo
          </a>
        </div>
      )}
    </nav>
  );
}
