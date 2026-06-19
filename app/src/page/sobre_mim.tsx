export default function SobreMim() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center bg-[var(--color-sobre)] px-6 sm:px-10 lg:px-20 py-16 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Coluna esquerda — texto */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-[#F67234] leading-tight"
          >
            sobre<br />mim...
          </h2>

          <p className="text-sm sm:text-base text-[#989497] leading-relaxed max-w-xs">
            Sou dev e designer apaixonada por criar experiências digitais que combinam beleza e funcionalidade. Adoro transformar ideias em produtos que fazem sentido para as pessoas.
          </p>

          <p className="text-sm sm:text-base text-[#989497] leading-relaxed max-w-xs">
            Quando não estou codando, estou explorando novas referências visuais e pensando em como a tecnologia pode ser mais humana e acessível.
          </p>

          <a
            href="https://wa.me/5511981911971"
            className="self-start mt-2 inline-flex items-center px-6 py-2.5 rounded-full border-[3px] border-[#F36535] bg-[#EE7FC5] text-[var(--color-sobre)] font-bold text-sm hover:bg-[#F67234] transition-all duration-300 shadow-sm"
          >
            me conheça!
          </a>
        </div>

        {/* Coluna central — foto com blob */}
        <div className="flex items-center justify-center">
          <div
            className="blob-photo relative w-[260px] h-[320px] sm:w-[368px] sm:h-[442px] bg-[#F289CE] overflow-hidden flex items-center justify-center"
          >
            {/* Substitua o src pela sua foto */}
            <img
              src="/sobre_mim.jpeg"
              alt="Foto de Duanny Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Coluna direita — texto decorativo */}
        <div className="flex flex-col items-start md:items-end justify-center gap-2">
          <p
            className="text-4xl sm:text-5xl font-bold text-right leading-tight text-[#F67234]"
            style={{ fontFamily: "serif" }}
          >
            encontre
          </p>
          <p
            className="text-5xl sm:text-6xl font-bold italic text-right leading-tight text-[#F289CE]"
            style={{ fontFamily: "serif" }}
          >
            o seu
          </p>
          <p
            className="text-4xl sm:text-5xl font-extrabold text-right leading-tight text-[#F67234]"
          >
            brilho✦
          </p>
        </div>

      </div>

      {/* Estilo do blob shape */}
      <style>{`
        @keyframes blobPulse {
          0%, 100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 55%; }
          50%       { border-radius: 45% 55% 40% 60% / 60% 40% 55% 45%; }
        }
        .blob-photo {
          animation: blobPulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
