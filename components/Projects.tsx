'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const projects = [
  {
    tag: 'Oracle Cloud',
    title: 'Oracle Fusion Cloud Financial Integrations',
    tech: 'OIC Gen 3 • ERP Cloud Adapter • FBDI • BIP',
    challenges: 'Manual financial data entry into Oracle ERP caused delays and errors',
    solutions: [
      'Designed scheduled integrations automating journal/invoice imports via FBDI',
      'Configured ERP Cloud Adapter for callback handling and automated error notifications',
      'Built complex BIP reports for downstream financial reconciliation',
      'Implemented fault handling framework enabling business exception reprocessing'
    ],
    impact: 'End-to-end automation of financial data flows'
  },
  // ... Add your other projects here using the same structure
  {
    tag: 'Full Stack',
    title: 'Real-time Chat Application with AI',
    tech: 'React.js • Spring Boot • Llama 3 • WebSockets • AWS',
    challenges: 'Need for modern messaging platform with AI automation',
    solutions: [
      'Developed full-stack chat with public/private messaging and presence indicators',
      'Integrated Llama 3 AI assistant for context-aware automated responses',
      'Implemented Spring Security + PostgreSQL for secure, scalable data persistence',
      'Engineered WebSocket messaging achieving <200ms latency'
    ],
    impact: 'Production-ready chat platform with intelligent automation'
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      setTimeout(() => {
        const el = document.getElementById(`project-${index}`);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              id={`project-${idx}`}
              className={`
                bg-glass rounded-2xl border border-primary/20 overflow-hidden cursor-pointer transition-all duration-300 text-left relative
                hover:border-primary hover:shadow-xl hover:-translate-y-1
                ${expandedIndex === idx ? 'col-span-1 md:col-span-2 lg:col-span-3 ring-2 ring-primary shadow-2xl z-10' : ''}
              `}
              onClick={() => toggleProject(idx)}
            >
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-sm font-semibold text-gray mb-0">{project.tech}</p>
              </div>

              {/* Expandable Details */}
              <div 
                className={`transition-all duration-500 ease-in-out bg-primary/5
                  ${expandedIndex === idx ? 'max-h-[1000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 border-t border-primary/10 pt-6">
                  {project.challenges && (
                    <div>
                      <h4 className="text-sm font-bold text-primary-dark uppercase tracking-widest mb-2">Challenge</h4>
                      <p className="text-gray leading-relaxed">{project.challenges}</p>
                    </div>
                  )}
                  {project.impact && (
                    <div>
                      <h4 className="text-sm font-bold text-primary-dark uppercase tracking-widest mb-2">Impact</h4>
                      <p className="text-dark font-medium leading-relaxed">{project.impact}</p>
                    </div>
                  )}
                  <div className="col-span-1 md:col-span-2">
                    <h4 className="text-sm font-bold text-primary-dark uppercase tracking-widest mb-3">Solution</h4>
                    <ul className="space-y-2">
                      {project.solutions?.map((sol, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray">
                          <i className="fas fa-check text-accent mt-1"></i>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}