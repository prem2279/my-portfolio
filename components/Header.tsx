'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-glass backdrop-blur-md shadow-sm z-50 border-b border-primary/10">
      <nav className="flex justify-center items-center py-4 px-8 relative">
        <a href="#" className="absolute left-8 flex items-center gap-2 group decoration-0">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-[10px] flex items-center justify-center text-white font-logo font-bold text-2xl shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <span className="z-10">P</span>
            <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </div>
          <span className="font-logo font-bold text-xl text-dark">KG</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-gray font-semibold hover:text-primary transition-colors relative group">
                {item}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden absolute right-8 flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className="w-6 h-0.5 bg-dark rounded-full" />
          <span className="w-6 h-0.5 bg-dark rounded-full" />
          <span className="w-6 h-0.5 bg-dark rounded-full" />
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-glass flex flex-col p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-semibold py-4 border-b border-gray/10 hover:text-primary">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}