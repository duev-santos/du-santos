export default function HeroSections() {
  return (
    <section
      id="servicos"
      className="min-h-screen flex items-center justify-center bg-[#ed6c2b] px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden"
    >
      {/* Imagem de fundo com opacidade 12% */}
      {/* <img
        src="/1.svg"
        alt="Fundo decorativo"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none select-none z-0"
      /> */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center justify-center relative z-10 w-full h-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold italic text-right leading-tight text-[#fff1e7] leading-[1.1] mb-4 mt-8" style={{ fontFamily: "serif" }}>
          Meus Serviços
        </h2>
        {/* Texto de Apoio */}
        <p className="text-base sm:text-lg md:text-xl max-w-6xl leading-normal mb-2 text-[#fff1e7]">
          Ofereço uma gama completa de serviços para transformar suas ideias em realidade digital.
        </p>
         <p className="text-base sm:text-lg md:text-xl max-w-6xl leading-normal mb-8 text-[#fff1e7]">
          Desde o design de interfaces intuitivas até o desenvolvimento de soluções robustas, estou aqui para ajudar sua empresa a crescer e se destacar no mercado.
        </p>
        {/* Retângulo SVG personalizado envolvendo toda a grid */}
        <div className="w-full flex justify-center">
          <div className="bg-[#fff1e7] rounded-2xl p-4 sm:p-8 w-full max-w-5xl">
            <div className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {/* Card 1 */}
              <div className="relative flex flex-col items-center justify-center overflow-visible">
                <img src="/servicos.png" alt="Fundo decorativo do serviço" className="w-full h-auto min-w-[260px] max-w-[340px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] pointer-events-none select-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8">
                  <h3 className="text-3xl font-semibold mb-4 text-[#cc4502] text-center" style={{ fontFamily: "serif" }}>Design de Interface</h3>
                  <p className="text-[#fff1e7] text-center">Criação de interfaces visuais atraentes e intuitivas para garantir a melhor experiência do usuário.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative flex flex-col items-center justify-center overflow-visible">
                <img src="/servicos.png" alt="Fundo decorativo do serviço" className="w-full h-auto min-w-[260px] max-w-[340px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] pointer-events-none select-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8">
                  <h3 className="text-3xl font-semibold mb-4 text-[#cc4502] text-center" style={{ fontFamily: "serif" }}>Desenvolvimento <br/>Front-end</h3>
                  <p className="text-[#fff1e7] text-center">Construção de interfaces responsivas e funcionais usando as tecnologias mais recentes.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative flex flex-col items-center justify-center overflow-visible">
                <img src="/servicos.png" alt="Fundo decorativo do serviço" className="w-full h-auto min-w-[260px] max-w-[340px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] pointer-events-none select-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8">
                  <h3 className="text-3xl font-semibold mb-4 text-[#cc4502] text-center" style={{ fontFamily: "serif" }}>Desenvolvimento <br/>Back-end</h3>
                  <p className="text-[#fff1e7] text-center">Implementação de soluções robustas e escaláveis para garantir o desempenho e a segurança do seu produto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay opcional para contraste */}
      {/* <div className="absolute inset-0 bg-white/60 z-0" /> */}
    </section>
  );
}
