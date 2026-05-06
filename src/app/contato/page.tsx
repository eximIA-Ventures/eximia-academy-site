"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageSquare, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

const FORM_ID = "56afd9df-3c0a-4b70-9b86-f4cf71b095dd";
const API_URL = "https://forms.eximiaventures.com.br/api/v1/forms";

export default function ContatoPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", interest: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const canSend = form.name && form.email && form.company && form.interest;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/${FORM_ID}/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#F7F4EF" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "oklch(0.62 0.18 148 / 0.1)" }}>
            <CheckCircle2 className="w-8 h-8" style={{ color: "oklch(0.62 0.18 148)" }} />
          </div>
          <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "#1A1714" }}>Mensagem enviada</h1>
          <p className="text-sm mb-8" style={{ color: "#8A8378" }}>Nossa equipe vai entrar em contato em até 24 horas úteis.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: "oklch(0.64 0.17 42)" }}>
            Voltar ao site <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6" style={{ background: "#F7F4EF", color: "#1A1714" }}>
      <div className="max-w-5xl mx-auto pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm mb-10 transition-colors" style={{ color: "#8A8378" }}>
          <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao site
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "oklch(0.64 0.17 42 / 0.1)" }}>
              <MessageSquare className="w-6 h-6" style={{ color: "oklch(0.64 0.17 42)" }} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Vamos conversar sobre educação corporativa
            </h1>
            <p className="text-base mb-8" style={{ color: "#44403A" }}>
              Preencha o formulário e nossa equipe entra em contato em até 24 horas úteis.
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
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs" style={{ color: "#8A8378" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 rounded-xl" style={{ background: "#F2EDE6" }}>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#8A8378" }}>Proteção de dados</p>
              <p className="text-xs" style={{ color: "#8A8378" }}>Seus dados são protegidos pela LGPD. Utilizamos apenas para responder sua solicitação.</p>
            </div>
          </motion.div>

          {/* Right: native form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="rounded-2xl border p-8" style={{ borderColor: "#DDD6CC", background: "white" }}>
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#44403A" }}>Seu nome <span style={{ color: "oklch(0.64 0.17 42)" }}>*</span></label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nome completo" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[oklch(0.64_0.17_42)]" style={{ borderColor: "#DDD6CC", color: "#1A1714" }} />
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#44403A" }}>Email corporativo <span style={{ color: "oklch(0.64 0.17 42)" }}>*</span></label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="nome@empresa.com.br" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[oklch(0.64_0.17_42)]" style={{ borderColor: "#DDD6CC", color: "#1A1714" }} />
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#44403A" }}>Empresa <span style={{ color: "oklch(0.64 0.17 42)" }}>*</span></label>
                  <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Nome da sua empresa" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[oklch(0.64_0.17_42)]" style={{ borderColor: "#DDD6CC", color: "#1A1714" }} />
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#44403A" }}>Cargo</label>
                  <input type="text" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="Ex: Diretor de RH" className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[oklch(0.64_0.17_42)]" style={{ borderColor: "#DDD6CC", color: "#1A1714" }} />
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#44403A" }}>Interesse <span style={{ color: "oklch(0.64 0.17 42)" }}>*</span></label>
                  <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} required className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[oklch(0.64_0.17_42)] appearance-none" style={{ borderColor: "#DDD6CC", color: form.interest ? "#1A1714" : "#8A8378" }}>
                    <option value="">Selecione</option>
                    <option value="demo">Demonstração da plataforma</option>
                    <option value="pricing">Informações de preço</option>
                    <option value="uc">Projeto de Universidade Corporativa</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "#44403A" }}>Mensagem</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Conte sobre seu desafio de T&D..." rows={4} className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[oklch(0.64_0.17_42)] resize-none" style={{ borderColor: "#DDD6CC", color: "#1A1714" }} />
                </div>

                {error && <p className="text-xs text-red-500">{error}</p>}

                <button
                  type="submit"
                  disabled={!canSend || loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all disabled:opacity-40"
                  style={{ background: "oklch(0.64 0.17 42)", color: "white" }}
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  {loading ? "Enviando..." : "Enviar mensagem"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
