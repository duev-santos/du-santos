export default function Tecnologias() {
  const tecnologias = [
    { nome: "HTML"},
    { nome: "CSS"},
    { nome: "JavaScript"},
    { nome: "React"},
    { nome: "Next.js"},
    { nome: "Tailwind"},
    { nome: "Node.js"},
    { nome: "TypeScript"},
    { nome: "Golang"},
    { nome: "Python"},
    { nome: "Figma"},
    { nome: "Git"},
  ];

  return (
    <section id="tecnologias" className="bg-[#ed6c2b] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl mb-8 text-[var(--color-text)] font-bold italic text-center" style={{ fontFamily: 'serif' }}>Tecnologias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tecnologias.map((tech) => (
            <div
              key={tech.nome}
              className="flex flex-col items-center justify-center relative w-32 h-32 transition-all duration-300 hover:brightness-150 hover:saturate-150 cursor-pointer"
              style={{
                backgroundImage: "url(/tech.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* <img src={tech.src} alt={tech.nome} className="w-12 h-12 mb-2 relative z-10" /> */}
              <p className="text-[var(--color-text)] text-sm font-semibold text-center relative z-10">
                {tech.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
