"use client";

import { motion } from "framer-motion";
import {
  Brain, BookOpen, BarChart3, Users, Puzzle, MessageSquare,
  Layers, Zap, Target, ArrowRight, GraduationCap, Building2,
  Factory, Play, CheckCircle2, Shield, Cpu, Globe, Smartphone,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, ease: "easeOut" } as const,
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 },
});

/* ═══════════════════════════════════════════════════════════
   LOGO BAR
   ═══════════════════════════════════════════════════════════ */
export function LogoBar() {
  const logos = [
    { name: "Cory Alimentos", src: "/logos/cory.svg", h: "h-6" },
    { name: "Harven Agribusiness", src: "/logos/harven.png", h: "h-7" },
    { name: "Argos Consultoria", src: "/logos/argos.png", h: "h-6" },
    { name: "eximIA Ventures", src: "/logo-horizontal.svg", h: "h-5" },
  ];

  return (
    <section className="py-12 border-y border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-subtle text-[10px] uppercase tracking-[0.3em] mb-8">
          Empresas que confiam na eximIA Academy
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.name}
              {...stagger(i)}
              src={logo.src}
              alt={logo.name}
              className={`${logo.h} object-contain logo-company`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRODUTO. Features grid
   ═══════════════════════════════════════════════════════════ */
export function ProdutoSection() {
  const features = [
    { icon: Brain, title: "IA que Ensina Perguntando", desc: "Enquanto outros LMS despejam conteúdo, a nossa IA faz perguntas. Cada resposta aprofunda o raciocínio em 7 camadas. até o colaborador pensar por conta própria.", color: "cerrado" },
    { icon: Layers, title: "Trilhas que se Adaptam Sozinhas", desc: "A plataforma detecta o nivel real do aluno e ajusta a dificuldade automaticamente. Ninguem fica para tras, ninguém fica entediado.", color: "varzea" },
    { icon: Cpu, title: "Transforme PDFs em Cursos em Minutos", desc: "Jogue um PDF, manual ou apresentacao. A IA devolve micro-aulas prontas, com perguntas Socráticas e scorecard de qualidade. Sem equipe de design instrucional.", color: "pantanal" },
    { icon: BarChart3, title: "Prove o ROI de Cada Real Investido", desc: "Dashboards por aluno, turma, unidade e competência. Seu diretor financeiro finalmente vai ver o retorno de T&D em numeros concretos.", color: "cerrado" },
    { icon: Shield, title: "Cada Empresa, um Ambiente Blindado", desc: "Arquitetura multi-tenant com isolamento total de dados. Compliance-ready desde o primeiro dia. Seus dados nunca se misturam.", color: "pampa" },
    { icon: Smartphone, title: "Funciona no Chão de Fábrica", desc: "Sessões de 5 minutos via celular. Notificação por WhatsApp. Feito para quem não tem computador na mesa. e não pode parar a operação.", color: "sertao" },
  ];

  return (
    <section id="produto" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">A Plataforma</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
            Tudo que seu LMS prometeu{" "}
            <span className="text-gradient-cerrado">e nunca entregou.</span>
          </h2>
          <p className="text-muted text-lg font-light leading-relaxed">
            Plataformas tradicionais medem conclusão. A eximIA Academy mede compreensão. A diferença? Colaboradores que realmente mudam de comportamento. não apenas assistem vídeos até o final.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              {...stagger(i)}
              className="group relative p-7 rounded-2xl border border-line surface-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Hover glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-${color}/[0.08] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-${color}/10 border border-${color}/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px] group-hover:shadow-${color}/20 transition-all duration-300`}>
                  <Icon className={`w-6 h-6 text-${color}`} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2.5">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MÉTODO SOCRÁTICO
   ═══════════════════════════════════════════════════════════ */
export function MetodoSection() {
  const steps = [
    { num: "01", title: "A IA provoca", desc: "Nada de slides passando na tela. A IA faz a pergunta certa, na hora certa, no nivel certo. O colaborador sente que esta sendo desafiado. porque esta. E assim que aprendizado real comeca.", icon: Brain, color: "cerrado" },
    { num: "02", title: "O colaborador constrói", desc: "Cada resposta é capturada, analisada e usada para calibrar a próxima pergunta. O colaborador não recebe conhecimento. ele monta, peça por peça, com as próprias mãos. E o que se constrói, não se esquece.", icon: MessageSquare, color: "varzea" },
    { num: "03", title: "A competência aparece", desc: "Sem prova surpresa. Sem quiz decoreba. A plataforma já sabe o que o colaborador domina e o que ainda precisa reforçar. em tempo real. Você vê a evolução acontecendo, não apenas o certificado no final.", icon: Zap, color: "cerrado" },
  ];

  return (
    <section id="metodo" className="py-28 lg:py-36 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cerrado/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cerrado/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">O Método Socrático com IA</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
            A IA pergunta.{" "}<span className="text-gradient-cerrado">Seu time pensa de verdade.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.num} {...stagger(i)} className="group relative flex items-start gap-5 md:gap-7 p-7 md:p-9 rounded-2xl surface-card overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                {/* Left accent bar */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-${step.color}/40 group-hover:bg-${step.color} transition-colors duration-300`} />
                {/* Hover glow */}
                <div className={`absolute -top-8 -left-8 w-24 h-24 rounded-full bg-${step.color}/[0.06] blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative pl-3">
                  <div className={`flex items-center justify-center w-13 h-13 rounded-xl shrink-0 bg-${step.color}/10 border border-${step.color}/20 group-hover:scale-110 group-hover:shadow-[0_0_15px] group-hover:shadow-${step.color}/15 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 text-${step.color}`} />
                  </div>
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className={`text-${step.color} text-2xl font-display font-bold opacity-30`}>{step.num}</span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MÓDULOS. 9 modules grid
   ═══════════════════════════════════════════════════════════ */
export function ModulosSection() {
  const módulos = [
    { icon: GraduationCap, name: "Academy", slug: "academy", desc: "Trilhas com IA Socrática e reflexões guiadas", core: true, color: "oklch(0.64 0.17 42)" },
    { icon: BarChart3, name: "Analytics", slug: "analytics", desc: "Dashboards por aluno, turma e unidade", core: true, color: "oklch(0.55 0.15 230)" },
    { icon: Users, name: "Admin", slug: "admin", desc: "Gestão multi-role com RBAC completo", core: true, color: "oklch(0.55 0.14 150)" },
    { icon: BookOpen, name: "Biblioteca", slug: "biblioteca", desc: "Acervo de materiais e referências", color: "oklch(0.65 0.16 30)" },
    { icon: Target, name: "Assessments", slug: "assessments", desc: "Avaliações adaptativas com recovery automático", color: "oklch(0.58 0.22 25)" },
    { icon: MessageSquare, name: "Community", slug: "community", desc: "Fórum, cases reais e aprendizado entre pares", color: "oklch(0.78 0.10 168)" },
    { icon: Puzzle, name: "Course Designer", slug: "course-designer", desc: "De PDF/slides a micro-learning via IA", color: "oklch(0.45 0.12 220)" },
    { icon: Building2, name: "Unidades", slug: "unidades", desc: "Gestão por fábricas, filiais e setores", color: "oklch(0.65 0.19 155)" },
    { icon: Globe, name: "Integrações", slug: "integracoes", desc: "WhatsApp, SSO, webhooks e API aberta", color: "oklch(0.62 0.16 240)" },
  ];

  return (
    <section id="módulos" className="py-28 lg:py-36 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">Arquitetura Modular</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
            Comece com 3 módulos.{" "}<span className="text-gradient-cerrado">Escale para 9.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light">
            Sem pacote inflado que você paga e não usa. Ative o núcleo em dias. Adicione módulos conforme a maturidade da sua universidade corporativa. sem migrar de plataforma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {módulos.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.a
                key={mod.name}
                href={`/módulos/${mod.slug}`}
                {...stagger(i)}
                className="group relative p-6 rounded-2xl border border-line surface-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `${mod.color}15` }} />

                <div className="relative">
                  {mod.core && (
                    <span className="absolute top-0 right-0 text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 rounded font-mono" style={{ color: mod.color, borderColor: `${mod.color}30`, backgroundColor: `${mod.color}10`, border: `1px solid ${mod.color}30` }}>Core</span>
                  )}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: `${mod.color}12`, border: `1px solid ${mod.color}25` }}>
                    <Icon className="w-6 h-6" style={{ color: mod.color }} />
                  </div>
                  <h4 className="font-display text-base font-semibold mb-1.5 group-hover:text-primary transition-colors">{mod.name}</h4>
                  <p className="text-muted text-sm leading-relaxed">{mod.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Saiba mais →
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════ */
export function StatsSection() {
  const stats = [
    { value: "+40", label: "de retenção vs. e-learning passivo", suffix: "%" },
    { value: "5", label: "minutos por sessão. Cabe em qualquer turno", suffix: "min" },
    { value: "7", label: "camadas cognitivas. de fato até aplicação", suffix: "" },
    { value: "9", label: "módulos disponíveis na plataforma", suffix: "" },
  ];

  return (
    <section id="resultados" className="py-20 border-y border-line">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} {...stagger(i)} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary tracking-tight mb-2">
                {stat.value}<span className="text-2xl text-primary/60">{stat.suffix}</span>
              </div>
              <p className="text-muted text-xs leading-snug max-w-[140px] mx-auto">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   DEPOIMENTOS
   ═══════════════════════════════════════════════════════════ */
export function TestimonialsSection() {
  const testimonials = [
    { quote: "O time parou de decorar procedimento e comecou a entender o por que. O metodo Socrático muda o tipo de conversa no chão de fábrica. as perguntas da IA provocam reflexoes que palestras nunca provocaram.", role: "Diretora de Pessoas", company: "Industria Alimenticia. MG", icon: Factory },
    { quote: "Sessões curtas que cabem no intervalo da produção. O pessoal faz pelo celular, sem precisar sair da operação. O engajamento com treinamento mudou completamente desde que trocamos vídeo-aulas longas por reflexões guiadas.", role: "Gestor de T&D", company: "Setor Industrial. SP", icon: Building2 },
    { quote: "Conseguimos subir o primeiro curso rapidamente sem uma equipe de design instrucional dedicada. O Course Designer transformou nosso manual de boas práticas em micro-aulas estruturadas automaticamente.", role: "Head de Educação Corporativa", company: "Consultoria de Gestão", icon: GraduationCap },
  ];

  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary text-[11px] uppercase tracking-[0.25em] font-mono mb-4">Resultados Reais</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Quem parou de treinar{" "}<span className="text-gradient-cerrado">e comecou a desenvolver.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div key={i} {...stagger(i)} className="glass rounded-xl p-6 flex flex-col border border-line">
                <div className="text-primary/20 font-display text-4xl leading-none mb-3">&ldquo;</div>
                <p className="text-body text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-line">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-body">{t.role}</p>
                    <p className="text-[10px] text-subtle">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CTA FINAL
   ═══════════════════════════════════════════════════════════ */
export function CtaSection() {
  return (
    <section id="cta" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.06] blur-[120px] rounded-full" />
      </div>

      <motion.div {...fadeUp} className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6">
          Cada dia sem a plataforma certa e{" "}
          <span className="text-gradient-cerrado">treinamento jogado fora.</span>
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Seus concorrentes já estão usando IA para desenvolver times mais rápido, mais barato e com mais retenção. Agende uma demonstração de 30 minutos e veja o Socrático funcionando ao vivo com o conteúdo da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/contato" className="group flex items-center gap-2.5 bg-primary text-page px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all shadow-[0_0_40px_oklch(0.72_0.18_45_/_0.15)]">
            Solicitar Demonstração
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/contato" className="flex items-center gap-2 border border-neutral-300 text-body px-8 py-4 rounded-full text-base hover:border-primary hover:text-body transition-all">
            Falar com Especialista
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer className="py-8 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src="/logo-horizontal.svg" alt="eximIA" className="h-5 " />
          <span className="text-subtle text-[10px] font-mono uppercase tracking-widest">Academy</span>
        </div>
        <div className="flex items-center gap-6 text-[11px] text-subtle">
          <a href="/privacidade" className="hover:text-muted transition-colors">Privacidade</a>
          <a href="/termos" className="hover:text-muted transition-colors">Termos</a>
          <span>© 2026 eximIA Ventures</span>
        </div>
      </div>
    </footer>
  );
}
