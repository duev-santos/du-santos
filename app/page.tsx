import HeroSections from "./src/components/hero-sections";
import HomePage from "./src/page/home";
import PageSection from "./src/page/servicos";
import SobreSection from "./src/page/sobre_mim";
import ContatoSection from "./src/page/contato";
import ProjetosSection from "./src/page/projetos";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-hero-background)]">
      <HeroSections />
      <HomePage/>
      <PageSection />
      <ProjetosSection />
      <SobreSection />
      <ContatoSection />
    </main>
  );
}

