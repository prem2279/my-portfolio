'use client';
import { useState, useEffect } from 'react';
import { projectsData } from "@/src/data/portfolio-data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-16 text-dark tracking-tight">Featured Projects</h2>
        
        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="
                group bg-glass rounded-2xl border border-primary/20 overflow-hidden cursor-pointer 
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary
                flex flex-col h-full
              "
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                    {project.tag}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-3 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-bold text-gray/80 mt-auto pt-4 border-t border-primary/10">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[scaleUp_0.3s_cubic-bezier(0.16,1,0.3,1)]">
            
            {/* Header */}
            <div className="p-8 border-b border-gray/10 flex justify-between items-start bg-gradient-to-r from-white to-primary/5 sticky top-0 z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-dark leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-bold text-gray mt-2">{selectedProject.tech}</p>
              </div>
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-gray/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors shrink-0 ml-4"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>

            {/* Body */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  {selectedProject.challenges && (
                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                      <h4 className="text-sm font-extrabold text-primary-dark uppercase tracking-widest mb-3 flex items-center gap-2">
                        <i className="fas fa-exclamation-circle"></i> Challenge
                      </h4>
                      <p className="text-gray font-medium leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                  )}
                  {selectedProject.impact && (
                    <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10">
                      <h4 className="text-sm font-extrabold text-secondary uppercase tracking-widest mb-3 flex items-center gap-2">
                        <i className="fas fa-chart-line"></i> Impact
                      </h4>
                      <p className="text-dark font-bold leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                    <i className="fas fa-lightbulb text-accent"></i> Solution Architecture
                  </h4>
                  <ul className="space-y-4">
                    {selectedProject.solutions.map((sol, i) => (
                      <li key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray/5 transition-colors">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-gray font-medium leading-relaxed">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* UPDATED Footer with GitHub / Live Links */}
            <div className="p-6 border-t border-gray/10 bg-gray/5 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              
              {/* Left Side: Project Links */}
              <div className="flex gap-4 w-full sm:w-auto">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-5 py-2 border-2 border-dark text-dark rounded-full font-bold text-sm hover:bg-dark hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-github"></i> View Code
                  </a>
                )}
                {selectedProject.live && (
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-5 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>

              {/* Right Side: Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-6 py-2 text-gray font-bold hover:text-dark transition-colors text-sm"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}