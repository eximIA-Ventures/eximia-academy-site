# Imagem de produção da landing exímIA Academy v2.
# Mesma forma do Dockerfile já em uso em `eximIA-Ventures/eximia-academy-site`,
# para que a troca do conteúdo do repositório não exija tocar no serviço.
FROM node:22-alpine AS base

RUN corepack enable && corepack prepare pnpm@latest --activate

# Dependências
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc ./
RUN pnpm install --frozen-lockfile --ignore-scripts || pnpm install --ignore-scripts

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variáveis públicas são embutidas no bundle no momento do build, então
# precisam existir AQUI, não só no runtime do contêiner.
#
# `ARG` sem default vira ENV com STRING VAZIA quando o build arg não é
# passado, não `undefined`. Isso já derrubou um build: a origem vazia
# chegava ao `metadataBase` e o `new URL("")` quebrava a coleta de página.
# Por isso o default do domínio canônico fica aqui também, além da guarda
# em `src/lib/site.ts`. Duas travas, porque a falha é silenciosa até estourar.
ARG NEXT_PUBLIC_SITE_URL=https://eximiaacademy.com.br
ARG NEXT_PUBLIC_POSTHOG_KEY=
ARG NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY
ENV NEXT_PUBLIC_POSTHOG_HOST=$NEXT_PUBLIC_POSTHOG_HOST

RUN pnpm build

# Produção
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# `CONTACT_ENDPOINT` é lido em tempo de requisição (ver src/app/api/contato),
# então basta defini-la no serviço, sem rebuild.
CMD ["node", "server.js"]
