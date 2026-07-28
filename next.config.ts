import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,

  /**
   * `standalone` é requisito do pipeline Docker que publica o site hoje
   * (`eximIA-Ventures/eximia-academy-site`): o runner copia
   * `.next/standalone` e sobe com `node server.js`. Sem isto, a imagem
   * builda e não serve.
   */
  output: "standalone",

  async redirects() {
    return [
      /**
       * Redirect herdado do site que esta landing substitui. Sem esta regra,
       * quem chega pelo domínio `.com` passa a ver a landing fora do domínio
       * canônico, o que fragmenta SEO e contradiz o canonical do metadata.
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: "eximiaacademy.com" }],
        destination: "https://eximiaacademy.com.br/:path*",
        permanent: true,
      },

      /**
       * Preservação das URLs do site anterior. Em produção hoje existem, e
       * estão no sitemap, `/contato` e nove páginas `/modulos/{slug}`
       * (academy, analytics, admin, biblioteca, assessments, community,
       * course-designer, unidades, integracoes). Publicar esta landing por
       * cima sem estas regras transformaria todas em 404 de uma vez, com
       * perda de indexação e de qualquer link já distribuído.
       *
       * O conteúdo equivalente na narrativa nova é o capítulo da plataforma;
       * o contato virou seção da própria página.
       */
      {
        source: "/contato",
        destination: "/#contato",
        permanent: true,
      },
      {
        source: "/modulos",
        destination: "/#plataforma",
        permanent: true,
      },
      {
        source: "/modulos/:slug",
        destination: "/#plataforma",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
