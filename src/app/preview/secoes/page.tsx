import { Chapter05Plataforma } from "@/components/sections/Chapter05Plataforma";
import { Chapter06ParaQuem } from "@/components/sections/Chapter06ParaQuem";
import { Chapter08Oferta } from "@/components/sections/Chapter08Oferta";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";

/**
 * Prova viva da T7: Nav + capítulos 05/06/08 + Footer, isolados desta zona.
 * A montagem final na página raiz é tarefa do T8.
 */
export default function PreviewSecoesPage() {
  return (
    <main id="top" className="bg-paper text-ink">
      <Nav />
      <Chapter05Plataforma />
      <Chapter06ParaQuem />
      <Chapter08Oferta />
      <Footer />
    </main>
  );
}
