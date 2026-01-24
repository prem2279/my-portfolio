'use client';
import { useState } from 'react';

const projects = [
  {
    tag: 'Oracle Cloud',
    title: 'Oracle Fusion Cloud Financial Integrations',
    tech: 'OIC Gen 3 • ERP Cloud Adapter • FBDI • BIP',
    challenges: 'Manual financial data entry into Oracle ERP caused delays and errors.',
    solutions: [
      'Designed scheduled integrations automating journal/invoice imports via FBDI',
      'Configured ERP Cloud Adapter for callback handling',
      'Built complex BIP reports for downstream financial reconciliation',
      'Implemented fault handling framework enabling business exception reprocessing'
    ],
    impact: 'End-to-end automation of financial data flows.'
  },
  {
    tag: 'Integration',
    title: 'OCI & Fusion Integration Platform',
    tech: 'OIC • Fusion ERP • Shopify • Pub/Sub',
    challenges: 'Real-time product catalog sync between Fusion ERP and Shopify.',
    solutions: [
      'Built event-driven integration responding to Fusion "Item Creation" events',
      'Implemented Pub/Sub pattern for asynchronous event processing',
      'Designed scheduled integrations with Connectivity Agent',
      'Integrated OCI Log Analytics for real-time monitoring'
    ],
    impact: 'Seamless product catalog synchronization across systems.'
  },
  {
    tag: 'Full Stack',
    title: 'Real-time Chat Application with AI',
    tech: 'React.js • Spring Boot • Llama 3 • WebSockets',
    challenges: 'Need for modern messaging platform with AI automation.',
    solutions: [
      'Developed full-stack chat with public/private messaging and presence indicators',
      'Integrated Llama 3 AI assistant for context-aware responses',
      'Implemented Spring Security + PostgreSQL',
      'Engineered WebSocket messaging achieving <200ms latency'
    ],
    impact: 'Production-ready chat platform with intelligent automation.'
  },
  {
    tag: 'Machine Learning',
    title: 'Image Segmentation with ML',
    tech: 'Python • TensorFlow • U-Net',
    solutions: [
      'Developed software to detect and segment humans in images',
      'Optimized model training to reduce loss by 20%',
      'Implemented data augmentation techniques to enhance model generalization'
    ]
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
          const offset = 120; // Adjusted for taller header
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-16 text-dark tracking-tight">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;
            
            return (
              <div 
                key={idx}
                id={`project-${idx}`}
                onClick={() => toggleProject(idx)}
                className={`
                  bg-glass rounded-2xl border border-primary/20 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out text-left
                  hover:border-primary hover:shadow-xl
                  ${isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3 ring-2 ring-primary shadow-2xl z-10 scale-[1.01]' : 'hover:-translate-y-2'}
                `}
              >
                {/* Header Preview */}
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-dark mb-2 leading-tight">{project.title}</h3>
                  <p className="text-sm font-bold text-gray/80">{project.tech}</p>
                </div>

                {/* Expandable Content */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 border-t border-primary/10 bg-primary/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      
                      <div className="space-y-6">
                        {project.challenges && (
                          <div>
                            <h4 className="text-sm font-extrabold text-primary-dark uppercase tracking-widest mb-2">Challenge</h4>
                            <p className="text-gray font-medium leading-relaxed">{project.challenges}</p>
                          </div>
                        )}
                        {project.impact && (
                          <div>
                            <h4 className="text-sm font-extrabold text-primary-dark uppercase tracking-widest mb-2">Impact</h4>
                            <p className="text-dark font-semibold leading-relaxed">{project.impact}</p>
                          </div>
                        )}
                      </div>

                      <div className={project.challenges ? "" : "col-span-1 md:col-span-2"}>
                        <h4 className="text-sm font-extrabold text-primary-dark uppercase tracking-widest mb-3">Solution</h4>
                        <ul className="space-y-2">
                          {project.solutions?.map((sol, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray font-medium">
                              <i className="fas fa-check text-accent mt-1.5 text-xs"></i>
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}