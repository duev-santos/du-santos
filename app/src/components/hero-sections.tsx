'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/app/styles/logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--color-hero-background)] shadow-md w-full sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">

          {/* 1. LINKS DA ESQUERDA (Ocultos no Mobile) */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end pr-12">
            <Link href="#inicio" className="text-[var(--color-text)] hover:text-[var(--color-link-hover)] transition font-medium">
              Início
            </Link>
            <Link href="#servicos" className="text-[var(--color-text)] hover:text-[var(--color-link-hover)] transition font-medium">
              Serviços
            </Link>
          </div>

          {/* 2. LOGO CENTRAL (Sempre no centro absoluto, independente do tamanho da tela)
          <div className="flex-1 md:flex-none text-center font-bold text-2xl tracking-wide text-[var(--color-link)] z-10">
            Du Santos
          </div> */}
          <div className="flex-1 md:flex-none flex justify-center items-center text-[var(--color-text)] z-10">
            <Logo /> {/* Ou <img src="/logo.svg" alt="Du Santos" className="h-10 w-auto" /> */}
          </div>

          {/* 3. LINKS DA DIREITA (Ocultos no Mobile) */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-start pl-12">
            <Link href="#sobre" className="text-[var(--color-text)] hover:text-[var(--color-link-hover)] transition font-medium">
              Sobre mim
            </Link>
            <Link href="#projetos" className="text-[var(--color-text)] hover:text-[var(--color-link-hover)] transition font-medium">
              Projetos
            </Link>
            <Link href="#contato" className="text-[var(--color-text)] hover:text-[var(--color-link-hover)] transition font-medium">
              Contato
            </Link>
          </div>

          {/* 4. BOTAO HAMBÚRGUER (Posicionado de forma absoluta no mobile para não empurrar o logo) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-y-0 md:hidden flex items-center z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[var(--color-text)] hover:text-[var(--color-link-hover)] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  // Ícone de X quando o menu está aberto
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Ícone de Hambúrguer quando o menu está fechado
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* MENU MOBILE EXPANSÍVEL */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[var(--color-hero-background)] border-t border-black/10`}>
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
          <Link
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="block text-[var(--color-text)] hover:text-[var(--color-link-hover)] py-2 text-base font-medium w-full text-center"
          >
            Início
          </Link>
          <Link
            href="#servicos"
            onClick={() => setIsOpen(false)}
            className="block text-[var(--color-text)] hover:text-[var(--color-link-hover)] py-2 text-base font-medium w-full text-center"
          >
            Serviços
          </Link>
          <Link
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="block text-[var(--color-link)] hover:text-[var(--color-link-hover)] py-2 text-base font-medium w-full text-center"
          >
            Sobre mim
          </Link>
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="block text-[var(--color-link)] hover:text-[var(--color-link-hover)] py-2 text-base font-medium w-full text-center"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
