"use client";

import { Brain, BarChart3, Users, BookOpen, Target, MessageSquare, Puzzle, Building2, Globe, Play, CheckCircle2, ArrowRight, Search, Settings, ChevronRight, Star, Clock, TrendingUp, FileText, Mic, Video, GraduationCap, Zap, Shield } from "lucide-react";

function BrowserFrame({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-primary/[0.05] blur-[40px]" />
      <div className="relative rounded-2xl overflow-hidden border border-line shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-card/80">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-subtle text-[10px] font-mono px-3 py-0.5 bg-page/50 rounded">{url || "academy.eximiaventures.com.br"}</span>
          </div>
        </div>
        <div className="bg-page p-5 md:p-6">{children}</div>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active }: { icon: React.ElementType; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${active ? "bg-primary-subtle text-primary" : "text-muted"}`}>
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-3 rounded-lg surface-card text-center">
      <p className="text-lg font-display font-bold text-body">{value}</p>
      <p className="text-[9px] text-muted">{label}</p>
    </div>
  );
}

// ════════════════════════════════════════════
// MOCKUPS POR MÓDULO
// ════════════════════════════════════════════

function AcademyMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/courses/lideranca">
      <div className="flex gap-5">
        <div className="hidden md:flex flex-col w-44 shrink-0 gap-1">
          <SidebarItem icon={GraduationCap} label="Trilhas" active />
          <SidebarItem icon={BarChart3} label="Analytics" />
          <SidebarItem icon={BookOpen} label="Biblioteca" />
          <SidebarItem icon={MessageSquare} label="Reflexoes IA" />
          <SidebarItem icon={Play} label="Lives" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-primary font-mono uppercase tracking-widest mb-0.5">Modulo 3 · Aula 7</p>
              <h3 className="font-display text-base font-semibold">Lideranca Adaptativa em Tempos de IA</h3>
            </div>
            <span className="text-[9px] text-varzea font-mono bg-varzea/10 px-2 py-0.5 rounded">72% concluido</span>
          </div>
          <div className="bg-card rounded-xl p-8 border border-line flex items-center justify-center min-h-[120px]">
            <div className="text-center">
              <Play className="w-8 h-8 text-primary/30 mx-auto mb-2" />
              <p className="text-muted text-[10px]">Conteudo interativo da aula</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-primary/20 bg-primary-subtle">
            <Brain className="w-4 h-4 text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-medium">Aprofundar com IA</p>
              <p className="text-[9px] text-muted">Sessao Socratica. 7 camadas de profundidade</p>
            </div>
            <ArrowRight className="w-3 h-3 text-primary" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <StatCard value="24" label="Reflexoes" />
            <StatCard value="5d" label="Streak" />
            <StatCard value="87%" label="Score" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function AnalyticsMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/analytics">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-semibold">Dashboard de Aprendizagem</h3>
          <span className="text-[9px] text-muted font-mono bg-card px-2 py-0.5 rounded">Ultimos 30 dias</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <StatCard value="156" label="Sessoes" />
          <StatCard value="4.2" label="Prof. Media" />
          <StatCard value="2.8" label="Breakthroughs" />
          <StatCard value="12%" label="Deteccao IA" />
        </div>
        <div className="bg-card rounded-xl p-4 border border-line">
          <p className="text-[10px] text-muted mb-3 font-mono uppercase tracking-wider">Distribuicao de Profundidade</p>
          <div className="flex items-end gap-1.5 h-20">
            {[15, 28, 35, 52, 68, 45, 22].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t bg-primary/60 transition-all" style={{ height: `${h}%` }} />
                <span className="text-[7px] text-muted">N{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-xl p-3 border border-line">
          <div className="flex items-center justify-between text-[10px] text-muted mb-2 px-1">
            <span>Aluno</span><span>Profundidade</span><span>Status</span>
          </div>
          {["Maria S.", "João P.", "Ana L."].map((name, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 px-1 text-[10px] border-t border-line">
              <span>{name}</span>
              <span className="text-primary font-mono">{[5.2, 4.8, 3.1][i]}</span>
              <span className={`px-1.5 py-0.5 rounded text-[8px] ${i < 2 ? "bg-varzea/10 text-varzea" : "bg-sertao/10 text-sertao"}`}>
                {i < 2 ? "No ritmo" : "Atencao"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function AdminMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/admin/settings">
      <div className="space-y-4">
        <h3 className="font-display text-base font-semibold">Configuracoes do Tenant</h3>
        <div className="flex gap-2 text-[10px] border-b border-line pb-2">
          {["Marca", "IA", "Funcionalidades", "SSO"].map((tab, i) => (
            <span key={tab} className={`px-3 py-1.5 rounded-lg ${i === 1 ? "bg-primary-subtle text-primary" : "text-muted"}`}>{tab}</span>
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg surface-card">
            <div>
              <p className="text-xs font-medium">Modelo de IA</p>
              <p className="text-[9px] text-muted">Motor das sessoes Socraticas</p>
            </div>
            <span className="text-[9px] font-mono bg-primary-subtle text-primary px-2 py-0.5 rounded">Claude Sonnet 4.5</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg surface-card">
            <div>
              <p className="text-xs font-medium">Max interacoes por sessao</p>
              <p className="text-[9px] text-muted">Limite de perguntas da IA</p>
            </div>
            <span className="text-[9px] font-mono bg-card text-body px-2 py-0.5 rounded border border-line">15</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg surface-card">
            <div>
              <p className="text-xs font-medium">Deteccao de IA</p>
              <p className="text-[9px] text-muted">Identificar respostas geradas por IA</p>
            </div>
            <div className="w-8 h-4 rounded-full bg-primary relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-page" /></div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg surface-card">
            <div>
              <p className="text-xs font-medium">Certificados</p>
              <p className="text-[9px] text-muted">Emitir certificados automaticamente</p>
            </div>
            <div className="w-8 h-4 rounded-full bg-primary relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-page" /></div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function BibliotecaMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/biblioteca">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-semibold">Biblioteca</h3>
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg surface-card text-[10px] text-muted"><Search className="w-3 h-3" /> Buscar...</div>
        </div>
        <div className="flex gap-2 text-[9px]">
          {["Todos", "Gestao", "Lideranca", "IA", "Processos"].map((cat, i) => (
            <span key={cat} className={`px-2 py-1 rounded ${i === 0 ? "bg-primary-subtle text-primary" : "text-muted"}`}>{cat}</span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { title: "O Gestor Eficaz", author: "Peter Drucker" },
            { title: "Comece pelo Porque", author: "Simon Sinek" },
            { title: "A Quinta Disciplina", author: "Peter Senge" },
          ].map((book) => (
            <div key={book.title} className="p-3 rounded-xl surface-card">
              <div className="w-full h-16 rounded-lg bg-primary/5 border border-line mb-2 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary/30" />
              </div>
              <p className="text-[10px] font-medium leading-tight">{book.title}</p>
              <p className="text-[8px] text-muted">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function AssessmentsMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/assessments">
      <div className="space-y-4">
        <h3 className="font-display text-base font-semibold">Avaliacoes Comportamentais</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Big Five", status: "Concluido", color: "varzea" },
            { name: "DISC", status: "Disponivel", color: "primary" },
            { name: "Enneagram", status: "Disponivel", color: "primary" },
            { name: "Kolb", status: "Cooldown 18d", color: "muted" },
          ].map((a) => (
            <div key={a.name} className="p-3 rounded-xl surface-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium">{a.name}</p>
                <span className={`text-[8px] px-1.5 py-0.5 rounded bg-${a.color}/10 text-${a.color}`}>{a.status}</span>
              </div>
              <div className="h-1 bg-card rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${a.status === "Concluido" ? "w-full bg-varzea" : "w-0"}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl surface-card">
          <p className="text-[10px] text-muted mb-2 font-mono uppercase tracking-wider">Seu Perfil Big Five</p>
          <div className="space-y-1.5">
            {[
              { trait: "Abertura", val: 82 },
              { trait: "Conscienciosidade", val: 71 },
              { trait: "Extroversao", val: 45 },
              { trait: "Amabilidade", val: 68 },
              { trait: "Neuroticismo", val: 33 },
            ].map((t) => (
              <div key={t.trait} className="flex items-center gap-2">
                <span className="text-[9px] text-muted w-24 shrink-0">{t.trait}</span>
                <div className="flex-1 h-1.5 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${t.val}%` }} />
                </div>
                <span className="text-[9px] text-primary font-mono w-6 text-right">{t.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function CommunityMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/comunidade">
      <div className="space-y-4">
        <h3 className="font-display text-base font-semibold">Comunidade</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Forum de Discussao", icon: MessageSquare, desc: "Debates por trilha", badge: "Em breve" },
            { name: "Grupos de Estudo", icon: Users, desc: "Aprendizado colaborativo", badge: "Em breve" },
            { name: "Eventos", icon: Play, desc: "Workshops e webinars", badge: "Em breve" },
            { name: "Mentoria", icon: Star, desc: "Matching com mentores", badge: "Em breve" },
          ].map((f) => (
            <div key={f.name} className="p-3 rounded-xl surface-card opacity-70">
              <div className="flex items-center justify-between mb-2">
                <f.icon className="w-4 h-4 text-primary/50" />
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-muted/10 text-muted uppercase tracking-wider">{f.badge}</span>
              </div>
              <p className="text-[10px] font-medium">{f.name}</p>
              <p className="text-[8px] text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function CourseDesignerMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/courses/new/design">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Puzzle className="w-4 h-4 text-primary" />
          <h3 className="font-display text-base font-semibold">Course Designer com IA</h3>
        </div>
        <div className="flex gap-2 text-[9px]">
          {["Proposito", "Publico", "Escopo", "Framework", "Gerar"].map((s, i) => (
            <div key={s} className="flex items-center gap-1">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${i < 3 ? "bg-primary text-page" : "bg-card text-muted border border-line"}`}>{i + 1}</div>
              <span className={i < 3 ? "text-body" : "text-muted"}>{s}</span>
              {i < 4 && <ChevronRight className="w-3 h-3 text-muted/30" />}
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl surface-card space-y-3">
          <p className="text-[10px] font-mono text-primary uppercase tracking-wider">Etapa 3: Escopo</p>
          <div className="space-y-2">
            <div className="p-2 rounded-lg bg-card border border-line">
              <p className="text-[9px] text-muted mb-1">Duração estimada</p>
              <p className="text-xs">8 horas (16 micro-aulas de ~30min)</p>
            </div>
            <div className="p-2 rounded-lg bg-card border border-line">
              <p className="text-[9px] text-muted mb-1">Topicos principais</p>
              <div className="flex flex-wrap gap-1">
                {["Fundamentos IA", "Prompt Engineering", "Automação", "Ética"].map((t) => (
                  <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-primary-subtle text-primary">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-varzea/5 border border-varzea/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-varzea" />
            <p className="text-[9px] text-varzea">Score do brief: 87/100. Pronto para gerar</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function UnidadesMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/admin/areas">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-semibold">Unidades Organizacionais</h3>
          <span className="text-[9px] bg-primary text-page px-2 py-1 rounded">+ Nova Unidade</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "Fabrica Ribeirao Preto", users: 245, courses: 12, completion: 78 },
            { name: "Fabrica Minas Gerais", users: 189, courses: 12, completion: 65 },
            { name: "Escritorio SP", users: 45, courses: 8, completion: 91 },
          ].map((u) => (
            <div key={u.name} className="flex items-center gap-3 p-3 rounded-xl surface-card">
              <Building2 className="w-4 h-4 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">{u.name}</p>
                <p className="text-[9px] text-muted">{u.users} usuarios · {u.courses} cursos</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-display font-bold text-primary">{u.completion}%</p>
                <p className="text-[8px] text-muted">conclusao</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function IntegracoesMockup() {
  return (
    <BrowserFrame url="academy.eximiaventures.com.br/admin/integrations">
      <div className="space-y-4">
        <h3 className="font-display text-base font-semibold">Hub de Integracoes</h3>
        <div className="grid grid-cols-3 gap-2">
          <StatCard value="3" label="API Keys" />
          <StatCard value="5" label="Webhooks" />
          <StatCard value="2" label="Conexoes" />
        </div>
        <div className="space-y-2">
          {[
            { name: "WhatsApp Business", status: "Ativo", method: "Webhook" },
            { name: "SAP SuccessFactors", status: "Ativo", method: "API" },
            { name: "Google Workspace SSO", status: "Configurando", method: "OAuth" },
          ].map((int) => (
            <div key={int.name} className="flex items-center gap-3 p-3 rounded-xl surface-card">
              <Globe className="w-4 h-4 text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-medium">{int.name}</p>
                <p className="text-[9px] text-muted">{int.method}</p>
              </div>
              <span className={`text-[8px] px-1.5 py-0.5 rounded ${int.status === "Ativo" ? "bg-varzea/10 text-varzea" : "bg-caatinga/10 text-caatinga"}`}>{int.status}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

// ════════════════════════════════════════════
// EXPORT MAP
// ════════════════════════════════════════════

const mockupMap: Record<string, React.FC> = {
  academy: AcademyMockup,
  analytics: AnalyticsMockup,
  admin: AdminMockup,
  biblioteca: BibliotecaMockup,
  assessments: AssessmentsMockup,
  community: CommunityMockup,
  "course-designer": CourseDesignerMockup,
  unidades: UnidadesMockup,
  integracoes: IntegracoesMockup,
};

export function ModuleMockup({ slug }: { slug: string }) {
  const Mockup = mockupMap[slug];
  if (!Mockup) return null;
  return <Mockup />;
}
