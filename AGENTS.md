# Regras deste repositório

Este site roda em **Next.js 15.5 (App Router) com Tailwind CSS 4 e pnpm**.
A nota anterior deste arquivo alertava sobre uma versão diferente do Next e
deixou de valer com a troca do conteúdo do site; foi substituída para não
induzir a erro quem chegar depois.

## Antes de mexer

- Rode os portões antes de abrir PR: `pnpm typecheck`, `pnpm lint`,
  `pnpm test` e `pnpm build`. Os quatro devem passar.
- A página é um scrollytelling de capítulo único em `src/app/page.tsx`.
  Cada capítulo é um componente próprio em `src/components/`.
- Motion é centralizado em `src/components/motion/` e respeita
  `prefers-reduced-motion`. Não introduza animação fora desses utilitários.

## Invariantes que não devem ser quebradas

- **Nenhum CTA pode apontar para uma âncora inexistente.** Todos os CTAs vão
  para `#contato`, que é a seção `src/components/sections/Contato.tsx`.
- **O formulário nunca finge sucesso.** Sem `CONTACT_ENDPOINT` configurada, a
  rota `/api/contato` responde 503 explícito e a interface cai no canal
  direto por email, com os campos preenchidos. Não troque isso por uma tela
  de "enviado" otimista.
- **Variável de runtime é lida dentro do handler**, nunca no escopo do
  módulo. `process.env` no topo do arquivo é congelado no build e a variável
  do ambiente de deploy passa a ser ignorada em silêncio.
- **A lista de tenants em `src/lib/tenants.ts` é curada à mão.** Não a
  alimente pelo banco: isso exporia a carteira de clientes na página pública.
- Redirects de preservação em `next.config.ts` (`/contato`, `/modulos/*`)
  existem porque essas URLs foram indexadas pelo site anterior. Remover é
  gerar 404 em conteúdo já distribuído.

## Deploy

Imagem Docker com `output: "standalone"`. Variáveis em `.env.example`.
As `NEXT_PUBLIC_*` precisam existir no momento do **build** (há `ARG` no
Dockerfile para elas); `CONTACT_ENDPOINT` basta no runtime do serviço.
