import { Providers } from "@/components/providers";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  LogoBar,
  ProdutoSection,
  MetodoSection,
  ModulosSection,
  StatsSection,
  TestimonialsSection,
  CtaSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <Providers>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <ProdutoSection />
        <MetodoSection />
        <ModulosSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </Providers>
  );
}
