"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle2, GraduationCap, BarChart3,
  Users, BookOpen, Target, MessageSquare, Puzzle, Building2, Globe,
  Sparkles, Zap, Shield, ChevronRight, Lightbulb, TrendingUp,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { ModuleMockup } from "@/components/module-mockups";
import { Providers } from "@/components/providers";
import { modules } from "@/lib/modules";
import type { Module } from "@/lib/modules";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, BarChart3, Users, BookOpen, Target, MessageSquare, Puzzle, Building2, Globe,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, ease: "easeOut" } as const,
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.07 },
});

export function ModulePage({ module: mod }: { module: Module }) {
  const Icon = iconMap[mod.iconName] || GraduationCap;
  const currentIndex = modules.findIndex((m) => m.slug === mod.slug);
  const prevMod = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextMod = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;
  const relatedModules = modules.filter((m) => m.slug !== mod.slug).slice(0, 3);

  return (
    <Providers>
      <Nav />
      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-primary/[0.06] blur-[100px]" />
            <div className="absolute bottom-[-15%] left-[-5%] w-[35%] h-[35%] rounded-full bg-varzea/[0.04] blur-[80px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <motion.a
              href="/#modulos"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 text-muted text-sm hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Todos os modulos
            </motion.a>

            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              {/* Left: Icon + Text */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-16 h-16 rounded-2xl bg-primary-subtle border border-primary/15 flex items-center justify-center mb-6 shadow-[0_0_30px] shadow-primary/10"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <div className="flex items-center gap-3 mb-3">
                    {mod.core && (
                      <span className="text-[9px] uppercase tracking-[0.2em] text-primary border border-primary/20 bg-primary-subtle px-2 py-0.5 rounded font-mono">
                        Modulo Core
                      </span>
                    )}
                    {!mod.core && (
                      <span className="text-[9px] uppercase tracking-[0.2em] text-muted border border-line px-2 py-0.5 rounded font-mono">
                        Add-on
                      </span>
                    )}
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-4">{mod.name}</h1>
                  <p className="text-lg text-muted font-light leading-relaxed max-w-2xl">{mod.tagline}</p>
                </motion.div>
              </div>

              {/* Right: Quick stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-row md:flex-col gap-4 md:gap-3 md:min-w-[180px]"
              >
                <div className="flex-1 p-4 rounded-xl surface-card text-center md:text-left">
                  <p className="text-2xl font-display font-bold text-primary">{mod.features.length}</p>
                  <p className="text-[11px] text-muted">funcionalidades</p>
                </div>
                <div className="flex-1 p-4 rounded-xl surface-card text-center md:text-left">
                  <p className="text-2xl font-display font-bold text-primary">{mod.useCases.length}</p>
                  <p className="text-[11px] text-muted">casos de uso</p>
                </div>
                <div className="flex-1 p-4 rounded-xl surface-card text-center md:text-left">
                  <p className="text-2xl font-display font-bold text-primary">{mod.core ? "Incluso" : "Add-on"}</p>
                  <p className="text-[11px] text-muted">{mod.core ? "no plano base" : "sob demanda"}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ MOCKUP DA INTERFACE ═══════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ModuleMockup slug={mod.slug} />
            </motion.div>
          </div>
        </section>

        {/* ═══════════ DESCRICAO DETALHADA ═══════════ */}
        <section className="py-20 border-y border-line">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono">Visao Geral</p>
              </div>
              <p className="text-lg leading-relaxed text-body/80">{mod.description}</p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FUNCIONALIDADES ═══════════ */}
        <section className="py-24 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">Funcionalidades</p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                O que o {mod.name} <span className="text-gradient-cerrado">faz por voce</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {mod.features.map((feature, i) => (
                <motion.div
                  key={i}
                  {...stagger(i)}
                  className="group relative flex items-start gap-4 p-6 rounded-2xl surface-card overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Left accent */}
                  <div className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-primary/20 group-hover:bg-primary/60 transition-colors duration-300" />
                  {/* Hover glow */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-primary/[0.04] blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative pl-2 flex items-center justify-center w-8 h-8 rounded-lg bg-primary-subtle shrink-0 mt-0.5">
                    <span className="text-xs font-display font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="relative text-sm leading-relaxed flex-1">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CASOS DE USO ═══════════ */}
        <section className="py-24 lg:py-28 bg-card/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">Na Pratica</p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Quem usa e <span className="text-gradient-cerrado">como usa</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {mod.useCases.map((uc, i) => {
                const ucIcons = [Lightbulb, TrendingUp, Shield];
                const UcIcon = ucIcons[i % ucIcons.length];
                return (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="group p-7 rounded-2xl surface-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <UcIcon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed">{uc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ COMO FUNCIONA (mini steps) ═══════════ */}
        <section className="py-24 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">Jornada</p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Do setup ao <span className="text-gradient-cerrado">resultado</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Ative o modulo", desc: `Habilite o ${mod.name} nas configuracoes do tenant em poucos cliques.` },
                { step: "02", title: "Configure", desc: "Ajuste parametros, permissoes e preferencias conforme a necessidade da sua organizacao." },
                { step: "03", title: "Opere", desc: "Gestores e alunos comecam a usar imediatamente com onboarding guiado." },
                { step: "04", title: "Mensure", desc: "Acompanhe resultados no Analytics e demonstre o impacto para a diretoria." },
              ].map((item, i) => (
                <motion.div key={i} {...stagger(i)} className="relative p-5 rounded-xl surface-card text-center">
                  {i < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-primary/30" />
                    </div>
                  )}
                  <span className="text-2xl font-display font-bold text-primary/20 block mb-2">{item.step}</span>
                  <h4 className="font-display text-sm font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ OUTROS MÓDULOS ═══════════ */}
        <section className="py-20 border-t border-line">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="mb-10">
              <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">Explore Tambem</p>
              <h3 className="font-display text-2xl tracking-tight">Outros modulos da plataforma</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedModules.map((rel, i) => {
                const RelIcon = iconMap[rel.iconName] || GraduationCap;
                return (
                  <motion.a
                    key={rel.slug}
                    href={`/modulos/${rel.slug}`}
                    {...stagger(i)}
                    className="group flex items-start gap-4 p-5 rounded-xl surface-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <RelIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display text-sm font-semibold group-hover:text-primary transition-colors">{rel.name}</h4>
                        {rel.core && <span className="text-[7px] uppercase tracking-wider text-primary/70 border border-primary/20 px-1 py-px rounded font-mono">Core</span>}
                      </div>
                      <p className="text-muted text-xs mt-1 line-clamp-2">{rel.tagline}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] blur-[100px] rounded-full" />
          </div>

          <motion.div {...fadeUp} className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
              Quer ver o {mod.name} <span className="text-gradient-cerrado">em acao?</span>
            </h2>
            <p className="text-muted text-lg mb-8 font-light">
              Agende uma demonstracao de 30 minutos. Trazemos exemplos reais do {mod.name} aplicado a universidades corporativas como a sua.
            </p>
            <a
              href={`mailto:contato@eximiaventures.com.br?subject=Demo eximIA Academy - ${mod.name}`}
              className="group inline-flex items-center gap-2.5 bg-primary text-page px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all shadow-primary"
            >
              Solicitar Demonstracao
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* ═══════════ NAV PREV/NEXT ═══════════ */}
        <section className="py-8 border-t border-line">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between">
            {prevMod ? (
              <a href={`/modulos/${prevMod.slug}`} className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevMod.name}</span>
              </a>
            ) : <div />}
            <a href="/#modulos" className="text-xs text-muted hover:text-primary transition-colors">
              Todos os modulos
            </a>
            {nextMod ? (
              <a href={`/modulos/${nextMod.slug}`} className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors">
                <span className="hidden sm:inline">{nextMod.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : <div />}
          </div>
        </section>
      </main>
      <Footer />
    </Providers>
  );
}
