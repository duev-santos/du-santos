export default function HeroSections() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-[var(--color-inicio)] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        <h1 className="text-2xl sm:text-2xl md:text-7xl font-bold tracking-tight text-[#F67234] leading-[1.1] mb-6">
          Bora tirar esses planos do papel e{' '}
          <span className="italic font-serif font-normal block sm:inline text-[#F289CE]">
            desenvolver juntxs?
          </span>
        </h1>

        {/* Texto de Apoio */}
        <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed mb-12 text-[#989497]">
          Transformo ideias de negócios em produtos digitais, visualmente impecáveis e funcionais. Da interface do usuário à experiência completa, eu construo a solução de ponta a ponta para a sua empresa crescer.
        </p>

        {/* Botões de Ação Responsivos */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            /* REMOVIDO o p-8. Ajustado py e px responsivos, e diminuída a fonte no mobile */
            className="inline-flex justify-center items-center bg-[#EE7FC5] text-[var(--color-inicio)] border-4 border-[#F36535] hover:bg-[#F67234] hover:text-[#1A1A1A] py-3 px-6 md:py-4 md:px-10 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-md group w-full sm:w-auto"
          >
            Bora fechar um projeto!
          </a>

          <a
            href="#servicos"
            /* REMOVIDO o p-8. Ajustado py e px responsivos para casar perfeitamente */
            className="inline-flex justify-center items-center border-4 text-[#F36535] border-[#EE7FC5] hover:border-[#F67234] py-3 px-6 md:py-4 md:px-10 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full sm:w-auto"
          >
            Conhecer meus serviços
          </a>
        </div>

      </div>
    </section>
  );
}
