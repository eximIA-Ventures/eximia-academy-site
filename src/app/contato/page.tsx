"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="min-h-screen px-6" style={{ background: "#F7F4EF", color: "#1A1714" }}>
      <div className="max-w-5xl mx-auto pt-28 pb-20">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm mb-10 transition-colors" style={{ color: "#8A8378" }}>
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "oklch(0.64 0.17 42 / 0.1)" }}>
              <MessageSquare className="w-6 h-6" style={{ color: "oklch(0.64 0.17 42)" }} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Vamos conversar sobre educação corporativa
            </h1>
            <p className="text-base mb-8" style={{ color: "#44403A" }}>
              Preencha o formulário e nossa equipe entra em contato em até 24 horas úteis. Sem compromisso, sem pitch deck.
            </p>

            <div className="space-y-4">
              {[
                { title: "Demonstração personalizada", desc: "Mostramos a plataforma com exemplos do seu setor" },
                { title: "Diagnóstico de T&D", desc: "Avaliação gratuita da maturidade da sua educação corporativa" },
                { title: "Projeto de UC", desc: "Desenho completo da sua universidade corporativa com IA" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.64 0.17 42)" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1A1714" }}>{item.title}</p>
                    <p className="text-xs" style={{ color: "#8A8378" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 rounded-xl" style={{ background: "#F2EDE6" }}>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#8A8378" }}>Proteção de dados</p>
              <p className="text-xs" style={{ color: "#8A8378" }}>
                Seus dados são protegidos pela LGPD. Utilizamos apenas para responder sua solicitação.
              </p>
            </div>
          </motion.div>

          {/* Right: embedded form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#DDD6CC", background: "white" }}>
              <iframe
                src="https://forms.eximiaventures.com.br/embed/contato-academy"
                width="100%"
                height="680"
                frameBorder="0"
                style={{ border: "none", background: "white" }}
                title="Formulário de contato"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
