'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      
      // 1. Detect if user has scrolled to the bottom of the page
      // If (Viewport Height + Scrolled Amount) >= Total Page Height (minus small buffer)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // 2. Standard Logic for other sections
      // Calculate current scroll position + offset for header height (approx 150px)
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Stop checking once found
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-glass backdrop-blur-md shadow-sm z-50 border-b border-primary/10 transition-all duration-300">
      <nav className="flex justify-between items-center py-3 px-8  mx-auto">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group decoration-0">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-[12px] flex items-center justify-center text-white font-logo font-bold text-2xl shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <span className="z-10">PK</span>
            <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </div>
          
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <li key={item}>
                <a 
                  href={`#${sectionId}`} 
                  className={`
                    text-lg font-bold transition-colors relative group
                    ${isActive ? 'text-primary' : 'text-gray hover:text-primary'}
                  `}
                >
                  {item}
                  {/* Underline: W-full if active, otherwise W-0 expanding on hover */}
                  <span className={`
                    absolute bottom-[-5px] left-0 h-[3px] bg-primary rounded-full transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-8 h-1 bg-dark rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`w-8 h-1 bg-dark rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-8 h-1 bg-dark rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-[96px] left-0 w-full h-[calc(100vh-96px)] bg-glass flex flex-col p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => {
             const sectionId = item.toLowerCase();
             const isActive = activeSection === sectionId;
             
             return (
              <a 
                key={item} 
                href={`#${sectionId}`} 
                onClick={() => setIsOpen(false)} 
                className={`
                  text-2xl font-bold py-6 border-b border-gray/10 
                  ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}
                `}
              >
                {item}
              </a>
             );
          })}
        </div>
      </nav>
    </header>
  );
}