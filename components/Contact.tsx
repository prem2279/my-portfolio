'use client';
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Let's Connect</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: "fas fa-envelope", 
              label: "Email", 
              value: "prem@example.com", 
              link: "mailto:prem@example.com" 
            },
            { 
              icon: "fab fa-linkedin", 
              label: "LinkedIn", 
              value: "Prem Kumar Gundu", 
              link: "https://linkedin.com" // Update with real link
            },
            { 
              icon: "fab fa-github", 
              label: "GitHub", 
              value: "prem2279", 
              link: "https://github.com/prem2279" 
            },
            { 
              icon: "fas fa-file-pdf", 
              label: "Resume", 
              value: "Download PDF", 
              link: "/assets/resume.pdf",
              download: true
            }
          ].map((item, idx) => (
            <Reveal key={idx}>
              <a 
                href={item.link} 
                target={item.link.startsWith('http') ? "_blank" : undefined}
                rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                download={item.download}
                className="group block"
              >
                <div className="bg-glass p-8 rounded-2xl border border-primary/20 text-center hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <i className={item.icon}></i>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray mb-2">{item.label}</div>
                  <div className="text-primary-dark font-bold font-serif text-lg group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}