# exímIA Academy · site institucional

Landing "A Virada": scrollytelling de capítulo único que apresenta a exímIA
Academy como escola AI First de capacidades humanas, mais a porta de acesso
às academias por tenant.

## Stack

Next.js 15.5 (App Router), Tailwind CSS 4, TypeScript, pnpm. Animação com
`motion`, encapsulada em `src/components/motion/` e sensível a
`prefers-reduced-motion`.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

## Portões

Os quatro devem passar antes de qualquer PR:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

## Rotas

| Rota | O que é |
|:---|:---|
| `/` | Landing completa, capítulos 01 a 08 mais a seção de contato (`#contato`) |
| `/login` | Acesso às academias por tenant, redireciona para `{slug}.eximiaacademy.com.br` |
| `/privacidade`, `/termos` | Páginas legais |
| `/api/contato` | Recebe o lead e encaminha ao destino configurado |
| `/opengraph-image` | Card social gerado na build |
| `/robots.txt`, `/sitemap.xml` | Descoberta |

Redirects de preservação do site anterior: `/contato` e `/modulos/*` apontam
para as seções equivalentes da landing. Estão em `next.config.ts` e não devem
ser removidos sem antes verificar indexação, porque essas URLs foram
publicadas e indexadas.

## Variáveis de ambiente

Ver `.env.example`. Nenhuma é obrigatória para o site subir, e cada ausência
degrada de forma explícita, nunca em falso sucesso.

| Variável | Efeito se ausente |
|:---|:---|
| `NEXT_PUBLIC_SITE_URL` | Metadata, canonical e sitemap caem na URL de preview |
| `CONTACT_ENDPOINT` | Formulário assume o canal direto por email, sem fingir envio |
| `NEXT_PUBLIC_POSTHOG_KEY` | Medição desligada, sem baixar o vendor |

As `NEXT_PUBLIC_*` são embutidas no bundle **no momento do build** e existem
como `ARG` no Dockerfile. `CONTACT_ENDPOINT` é lida por requisição, então muda
no serviço sem rebuild.

## Deploy

Imagem Docker multi-stage com `output: "standalone"`, servindo em `:3000` via
`node server.js`.

```bash
docker build -t eximia-academy-site .
docker run -p 3000:3000 -e CONTACT_ENDPOINT=... eximia-academy-site
```
