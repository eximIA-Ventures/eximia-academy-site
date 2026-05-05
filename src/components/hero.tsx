"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[55%] h-[55%] rounded-full bg-primary/[0.07] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[45%] h-[50%] rounded-full bg-pantanal/[0.05] blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[25%] h-[25%] rounded-full bg-varzea/[0.03] blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(var(--fg) / 0.1) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--fg) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cerrado/20 bg-primary/[0.08] text-primary text-xs font-mono tracking-wide mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Educação Corporativa com IA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
            >
              Treinamento que
              <br />
              seu time realmente{" "}
              <span className="text-gradient-cerrado">
                absorve, aplica
                <br />
                e não esquece.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-muted text-lg max-w-lg leading-relaxed mb-10"
            >
              A única plataforma onde a IA faz as perguntas e o colaborador
              constrói o conhecimento. Sem vídeo-aulas ignoradas. Sem
              treinamentos que ninguém lembra. Retenção real, mensurável,
              no ritmo do chão de fábrica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#cta"
                className="group flex items-center justify-center gap-2.5 bg-primary text-page px-7 py-3.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow-[0_0_30px_oklch(0.72_0.18_45_/_0.15)]"
              >
                Solicitar Demonstração
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produto"
                className="flex items-center justify-center gap-2 border border-neutral-300 text-body px-7 py-3.5 rounded-full text-sm font-medium hover:border-primary hover:text-body transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5" />
                Ver Plataforma
              </a>
            </motion.div>
          </div>

          {/* Right: Mini App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-primary/[0.06] blur-[50px]" />
            <div className="relative glass rounded-2xl overflow-hidden border border-line shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-subtle text-[10px] font-mono px-3 py-0.5 surface-card/50 rounded">
                    academy.eximiaventures.com.br
                  </span>
                </div>
              </div>

              {/* App mockup */}
              <div className="bg-page p-5 space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-[8px] font-bold">E</span>
                    </div>
                    <span className="text-muted text-xs">Universidade Corporativa</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded surface-card" />
                    <div className="w-6 h-6 rounded surface-card" />
                  </div>
                </div>

                {/* Course card */}
                <div className="rounded-xl bg-card border border-line p-4 space-y-3">
                  <div className="flex items-center gap-2 text-primary text-[10px] font-mono tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    MÓDULO 3 · AULA 7
                  </div>
                  <p className="text-body text-sm font-display font-semibold">
                    Liderança Adaptativa em Tempos de IA
                  </p>
                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-muted">Progresso</span>
                      <span className="text-varzea">72%</span>
                    </div>
                    <div className="h-1.5 surface-card rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-gradient-to-r from-cerrado to-varzea rounded-full" />
                    </div>
                  </div>
                </div>

                {/* AI CTA */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/[0.08] border border-cerrado/20">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Brain className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body text-xs font-medium">Aprofundar com IA</p>
                    <p className="text-muted text-[10px]">Sessão Socrática disponível</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Reflexões", value: "24" },
                    { label: "Streak", value: "5d" },
                    { label: "Score", value: "87%" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-2 rounded-lg bg-card border border-line">
                      <p className="text-body text-sm font-semibold font-display">{s.value}</p>
                      <p className="text-subtle text-[9px]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
