import HeroSections from "./src/components/hero-sections";
import HomePage from "./src/page/home";
// Quando criar as outras seções em componentes, você importará assim:
import PageSection from "./src/page/servicos";
// import SobreSection from "./src/components/sobre-section";
// import ContatoSection from "./src/components/contato-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-hero-background)]">
      {/* O conteúdo do início (Hero) que te mandei deve morar dentro deste componente */}
      <HeroSections />
      <HomePage/>
      {/* As próximas seções do seu portfólio entrarão aqui sequencialmente */}
      <PageSection />
      {/* <SobreSection /> */}
      {/* <ContatoSection /> */}
    </main>
  );
}

