export interface Module {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  core: boolean;
  features: string[];
  useCases: string[];
}

export const modules: Module[] = [
  {
    slug: "academy",
    name: "Academy",
    tagline: "Trilhas, cursos, sessões Socráticas e player de conteúdo",
    description: "O coração da plataforma. Cursos com 3 modos de criação (manual, importação com IA, Course Designer), player multi-formato (texto, video, audio, slides), sessões Socráticas com IA, quizzes adaptativos, cenários, trilhas de aprendizagem, eventos ao vivo e painel do instrutor.",
    iconName: "GraduationCap", color: "oklch(0.64 0.17 42)",
    core: true,
    features: [
      "3 modos de criação de cursos: manual, importação com IA (PDF/DOCX/audio) e Course Designer com blueprint pedagógico",
      "Player de capítulos multi-formato: texto, video, audio, slides com thumbnails e barra de audio por slide",
      "Sessoes Socráticas com IA: dialogo guiado por 7 camadas de profundidade cognitiva, com contador de interações e detecção de breakthroughs",
      "Quizzes com timer, embaralhamento, tentativas máximas, nota mínima e capítulos de remediação automática",
      "Trilhas de aprendizagem: agrupe cursos em sequencias com carga horaria estimada e badges de obrigatoriedade",
      "Eventos ao vivo (Lives): agendamento, inscrição, URL de reunião, gravação e limite de participantes",
      "Dashboard por papel: aluno (progresso, streak, continuação), gestor (ritmo do plano de ensino, detecção IA), instrutor (alunos, reflexões, taxas)",
      "Reflexoes inline nos slides com resposta da IA e persistencia completa",
      "Cenarios (case-based learning) e assignments (atividades com entregaveis) integrados aos capítulos",
      "Modo instrutor com estatisticas de cursos, alunos e reflexões recentes",
    ],
    useCases: [
      "Universidade corporativa com conteúdo proprietario e trilhas estruturadas",
      "Onboarding de novos colaboradores com reflexao guiada por IA",
      "Desenvolvimento de lideranca com sessões Socráticas de profundidade",
      "Treinamentos de chao de fabrica com sessões curtas e notificações",
    ],
  },
  {
    slug: "analytics",
    name: "Analytics",
    tagline: "Dashboards de sessões, profundidade cognitiva e detecção IA",
    description: "Painel analítico completo para gestores, admins e instrutores. Métricas de sessões Socráticas, distribuição de profundidade por 7 níveis (de repetição superficial a insight original), taxa de detecção de IA, filtros por curso e área organizacional.",
    iconName: "BarChart3", color: "oklch(0.55 0.15 230)",
    core: true,
    features: [
      "Dashboard com metricas agregadas: total de sessões, profundidade media, breakthroughs por sessao, taxa de detecção IA",
      "Gráfico de distribuição de profundidade em 7 níveis. de repetição superficial a insight original",
      "Filtros por curso e área organizacional com periodo padrao de 30 dias",
      "Drilldown por aluno: perfil, histórico de sessões (ultimas 50), dados de learner profile",
      "Drilldown por sessao individual: profundidade atingida, momentos de breakthrough, interações",
      "Visao do gestor com ritmo do plano de ensino: alunos adiantados, no ritmo e atrasados",
    ],
    useCases: [
      "Gestores de T&D demonstrando ROI de treinamentos para a diretoria",
      "RH identificando gaps de competencia por área e cargo",
      "Instrutores acompanhando reflexões e profundidade de cada aluno",
    ],
  },
  {
    slug: "admin",
    name: "Admin",
    tagline: "Usuarios, branding, configurações e controle total da plataforma",
    description: "Painel administrativo completo com gestão de usuários (RBAC de 4 níveis), configuração de marca (logo, cores), seleção de modelo de IA, toggles de funcionalidades, SSO, job roles com vinculação a trilhas, planos com feature matrix e perfis comportamentais da equipe.",
    iconName: "Users", color: "oklch(0.55 0.14 150)",
    core: true,
    features: [
      "Gestão de usuários com busca, filtro por papel e área, paginação e ações de enrollment",
      "Configuração de marca: logo, cores primaria/secundaria, whitelabel completo",
      "Selecao de modelo de IA (padrao: Claude Sonnet 4.5), max interações por sessao, timeout",
      "Toggles de funcionalidades: detecção IA, diario de aprendizagem, certificados, dashboard analytics",
      "Job roles com CRUD, stats por cargo, vinculação a areas e trilhas de aprendizagem",
      "Plano de features com matrix de funcionalidades e analytics de uso por tenant",
      "Perfis comportamentais da equipe: distribuição DISC, medias Big Five, filtro por área e cargo",
      "Configuração de SSO (SAML/OAuth) e timeout de sessao",
    ],
    useCases: [
      "Administradores configurando marca e funcionalidades por cliente",
      "RH vinculando cargos a trilhas de desenvolvimento obrigatorias",
      "Gestores visualizando perfil comportamental da equipe por unidade",
    ],
  },
  {
    slug: "biblioteca",
    name: "Biblioteca",
    tagline: "Catalogo de livros com leitura integrada e resumos com IA",
    description: "Acervo digital com catalogo por categorias, pagina de detalhe com livros relacionados, visualizador de leitura integrado e resumos gerados por IA ou curados manualmente. Gestão administrativa com CRUD completo.",
    iconName: "BookOpen", color: "oklch(0.65 0.16 30)",
    core: false,
    features: [
      "Catalogo de livros com filtragem por categoria",
      "Pagina de detalhe com informações do livro e sugestoes de leituras relacionadas",
      "Visualizador de leitura integrado na plataforma",
      "Resumos de livros. gerados por IA ou curados manualmente",
      "Painel administrativo com CRUD de livros, busca e editor de conteúdo",
      "Controle de acesso por papel e tenant",
    ],
    useCases: [
      "Disponibilizar materiais complementares vinculados as trilhas",
      "Criar um repositorio de conhecimento institucional com resumos executivos",
      "Oferecer leitura guiada de normas, manuais e procedimentos",
    ],
  },
  {
    slug: "assessments",
    name: "Assessments",
    tagline: "6 avaliações comportamentais: Big Five, DISC, Enneagram, Kolb e mais",
    description: "Suite completa de avaliações comportamentais e cognitivas. 6 instrumentos implementados com wizards dedicados, cooldown de 30 dias, histórico de resultados e integração com o perfil do aluno e analytics da equipe.",
    iconName: "Target", color: "oklch(0.58 0.22 25)",
    core: false,
    features: [
      "Big Five: avaliação de personalidade em 5 dimensoes com wizard completo e cooldown de 30 dias",
      "DISC: perfil comportamental com ações e wizard dedicado",
      "Enneagram: tipologia de personalidade com wizard interativo",
      "Kolb: estilo de aprendizagem (Experiência Concreta, Observação Reflexiva, Conceituação Abstrata, Experimentação Ativa)",
      "Âncoras de Carreira: avaliação de motivação profissional",
      "Inteligencias Multiplas: avaliação baseada em Gardner",
      "Histórico de resultados em assessment_history com evolução ao longo do tempo",
      "Integração com perfil comportamental da equipe no painel do gestor",
    ],
    useCases: [
      "Autoconhecimento do colaborador para desenvolvimento pessoal",
      "Gestores entendendo o perfil comportamental da equipe por area",
      "RH usando dados de assessments para decisões de alocação e desenvolvimento",
    ],
  },
  {
    slug: "community",
    name: "Community",
    tagline: "Forum, grupos de estudo, eventos e mentoria (em desenvolvimento)",
    description: "Módulo de aprendizagem social e colaborativa. Atualmente em fase de desenvolvimento com 4 funcionalidades planejadas: fórum de discussão, grupos de estudo, eventos e workshops, e mentoria. Newsletter ativa para comunicação.",
    iconName: "MessageSquare", color: "oklch(0.78 0.10 168)",
    core: false,
    features: [
      "Forum de discussão por trilha e turma (em desenvolvimento)",
      "Grupos de estudo com dinamicas colaborativas (em desenvolvimento)",
      "Eventos e workshops com inscrição e calendario (em desenvolvimento)",
      "Programa de mentoria com matching (em desenvolvimento)",
      "Newsletter com captura de email para comunicação com alunos",
    ],
    useCases: [
      "Troca de experiencias entre colaboradores de diferentes unidades",
      "Gestores promovendo aprendizagem entre pares",
      "Comunidades de pratica por área de conhecimento",
    ],
  },
  {
    slug: "course-designer",
    name: "Course Designer",
    tagline: "Wizard de blueprint pedagógico com IA e frameworks de aprendizagem",
    description: "Criação assistida por IA de blueprints pedagógicos completos. Wizard multi-etapas cobrindo propósito, público, escopo, restrições, seleção de framework pedagógico e preferências. Gera blueprint com progressão de Bloom, avaliação Kirkpatrick, scorecard de qualidade e estrutura modular.",
    iconName: "Puzzle", color: "oklch(0.45 0.12 220)",
    core: false,
    features: [
      "Wizard multi-etapas: propósito, público-alvo, escopo, restrições, framework, preferências e pré-validação",
      "Selecao de framework pedagógico (ex: Bloom, Kirkpatrick, ADDIE, ELC+)",
      "Indicador de score do brief antes da geração",
      "Blueprint com visualização de progressão de Bloom, barras de framework, resumo Kirkpatrick",
      "Scorecard de qualidade automático com nota de 0-100",
      "Estrutura modular gerada com cards de modulos e sequenciamento",
      "Acompanhamento de progresso da geração em tempo real",
    ],
    useCases: [
      "Criar cursos estruturados a partir do zero com fundamentação pedagogica",
      "Validar a qualidade de um curso antes de produzir o conteúdo",
      "Designers instrucionais acelerando a fase de planejamento com IA",
    ],
  },
  {
    slug: "unidades",
    name: "Unidades",
    tagline: "Areas organizacionais com filtragem de dados por unidade",
    description: "Gestão de areas organizacionais (fábricas, filiais, departamentos) com CRUD completo. Permite filtrar dashboards, analytics, cursos e usuários por unidade. Cada gestor visualiza apenas sua area.",
    iconName: "Building2", color: "oklch(0.65 0.19 155)",
    core: false,
    features: [
      "CRUD de areas organizacionais com hierarquia",
      "Contagem de usuários e cursos por area",
      "Filtro de área no dashboard do gestor. dados escopados por unidade",
      "Switcher de área para gestores com multiplas unidades",
      "Vinculação de usuários a areas específicas na importação",
      "Escopo de tenant aplicado automáticamente em todas as queries",
    ],
    useCases: [
      "Industrias com multiplas fábricas que precisam de dados segmentados",
      "Redes de filiais com gestão descentralizada de treinamentos",
      "Departamentos com trilhas e metas de conclusao diferentes",
    ],
  },
  {
    slug: "integrações",
    name: "Integrações",
    tagline: "API keys, webhooks, conexões externas e logs de integração",
    description: "Hub de integrações com gestão completa de API keys (rate limiting, CORS, scopes, expiração), webhooks com subscrição por evento e tracking de falhas, conexões outbound com status de sincronização, e logs detalhados de todas as requisições.",
    iconName: "Globe", color: "oklch(0.62 0.16 240)",
    core: false,
    features: [
      "API keys com CRUD, rate limiting (RPM/RPD), origens CORS, scopes e expiração",
      "Estatisticas de API keys: total, ativas, usadas recentemente",
      "Webhooks com CRUD, subscrição por tipo de evento, contagem de falhas e toggle ativo/inativo",
      "Conexões outbound: app remoto, URL, status, entidades sincronizadas, status de sincronização",
      "Logs de integração: direção (in/out), método HTTP, endpoint, status codes, duração",
      "Painel administrativo centralizado para todas as integrações",
    ],
    useCases: [
      "Integrar com sistema de RH para importação automática de colaboradores",
      "Configurar webhooks para emitir certificados automáticamente",
      "Conectar com BI externo via API para consolidar dados de T&D",
    ],
  },
];

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
