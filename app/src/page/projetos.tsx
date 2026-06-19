'use client';

import { useState } from 'react';

const projetos = [
  { titulo: 'Projeto 1', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['React', 'Tailwind'], link: '#', cor: '#F67234' },
  { titulo: 'Projeto 2', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['TypeScript', 'Node.js'], link: '#', cor: '#EE7FC5' },
  { titulo: 'Projeto 3', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Figma', 'UX/UI'], link: '#', cor: '#CC4501' },
  { titulo: 'Projeto 4', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['React Native', 'Expo'], link: '#', cor: '#F67234' },
  { titulo: 'Projeto 5', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Next.js', 'PostgreSQL'], link: '#', cor: '#EE7FC5' },
  { titulo: 'Projeto 6', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Firebase', 'Flutter'], link: '#', cor: '#CC4501' },
  { titulo: 'Projeto 7', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Vue.js', 'GraphQL'], link: '#', cor: '#EE7FC5' },
  { titulo: 'Projeto 8', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Python', 'FastAPI'], link: '#', cor: '#F67234' },
  { titulo: 'Projeto 9', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Design System', 'Storybook'], link: '#', cor: '#CC4501' },
  { titulo: 'Projeto 10', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['AWS', 'Docker'], link: '#', cor: '#F67234' },
  { titulo: 'Projeto 11', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Remix', 'Prisma'], link: '#', cor: '#EE7FC5' },
  { titulo: 'Projeto 12', descricao: 'Descrição breve do projeto e o problema resolvido.', tags: ['Svelte', 'Supabase'], link: '#', cor: '#CC4501' },
];

const POR_PAGINA = 6;
const totalPaginas = Math.ceil(projetos.length / POR_PAGINA);

export default function ProjetosSection() {
  const [pagina, setPagina] = useState(0);

  const anterior = () => setPagina((p) => (p === 0 ? totalPaginas - 1 : p - 1));
  const proximo = () => setPagina((p) => (p === totalPaginas - 1 ? 0 : p + 1));

  const inicio = pagina * POR_PAGINA;
  const paginaAtual = projetos.slice(inicio, inicio + POR_PAGINA);

  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center bg-[#f5f0ec] px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold italic text-[#CC4501] mb-4"
          style={{ fontFamily: 'serif' }}
        >
          Meus Projetos
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#989497] max-w-2xl leading-relaxed mb-12">
          Uma seleção de trabalhos que mostram minha jornada como desenvolvedora.
        </p>

        {/* Carrossel */}
        <div className="w-full flex items-center gap-3 sm:gap-6">
          {/* Botão anterior */}
          <button
            onClick={anterior}
            aria-label="Página anterior"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#EE7FC5] text-[#CC4501] hover:bg-[#EE7FC5] hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-xl"
          >
            ‹
          </button>

          {/* Grade 3x2 */}
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4">
            {paginaAtual.map((projeto, i) => (
              <a
                key={inicio + i}
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden border-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: projeto.cor }}
              >
                {/* Fundo colorido */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold transition-opacity duration-300 group-hover:opacity-0"
                  style={{ backgroundColor: projeto.cor }}
                >
                  {'{ }'}
                </div>

                {/* Overlay com info ao hover */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: projeto.cor }}
                >
                  <h3 className="text-sm sm:text-base font-bold mb-1 text-center leading-tight" style={{ fontFamily: 'serif' }}>
                    {projeto.titulo}
                  </h3>
                  <p className="text-xs text-center leading-snug opacity-90 mb-2 hidden sm:block">
                    {projeto.descricao}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {projeto.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-2 text-xs font-bold underline">Ver projeto →</span>
                </div>

                {/* Título sempre visível na parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-2 py-1 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white text-xs font-semibold text-center truncate">{projeto.titulo}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Botão próximo */}
          <button
            onClick={proximo}
            aria-label="Próxima página"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#F67234] text-[#CC4501] hover:bg-[#F67234] hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-xl"
          >
            ›
          </button>
        </div>

        {/* Dots indicadores */}
        <div className="flex gap-3 mt-8">
          {Array.from({ length: totalPaginas }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i)}
              aria-label={`Ir para página ${i + 1}`}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === pagina ? '#CC4501' : '#C7B3A3',
                transform: i === pagina ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
