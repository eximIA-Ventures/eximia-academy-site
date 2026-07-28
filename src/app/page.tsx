import { Chapter02Virada, Chapter03Metodo, Chapter04Metrica, Chapter07Manifesto } from "@/components/chapters";
import { Chapter01, Hero } from "@/components/hero";
import { Chapter05Plataforma } from "@/components/sections/Chapter05Plataforma";
import { Chapter06ParaQuem } from "@/components/sections/Chapter06ParaQuem";
import { Chapter08Oferta } from "@/components/sections/Chapter08Oferta";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { ModosDeInteracao } from "@/components/sections/ModosDeInteracao";
import { Nav } from "@/components/sections/Nav";

/**
 * Costura da raiz (T8, board "Landing Academy v2 · A Virada"). Monta o
 * scrollytelling completo na ordem do arco narrativo (narrative/OUTLINE.md
 * §b): hero + 8 capítulos numerados, a seção de conversa que fecha o funil
 * (`#contato`, destino real de todos os CTAs), sticky Nav e Footer. Cada bloco é
 * importado pelo entry point público de sua zona (hero/, chapters/,
 * sections/); nenhum código das outras frentes é copiado aqui.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-paper text-ink">
        <Hero />
        <Chapter01 />
        <Chapter02Virada />
        <Chapter03Metodo />
        <ModosDeInteracao />
        <Chapter04Metrica />
        <Chapter05Plataforma />
        <Chapter06ParaQuem />
        <Chapter07Manifesto />
        <Chapter08Oferta />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
