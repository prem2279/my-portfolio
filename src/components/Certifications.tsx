'use client';
import Reveal from "./Reveal";
import { certificationsData } from "@/src/data/portfolio-data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Professional Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <Reveal key={idx}>
              <a href={cert.link} target="_blank" className="block h-full group">
                <div className="bg-glass p-8 rounded-2xl border border-primary/20 border-t-[6px] border-t-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-dark border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-wider">
                      <i className="fas fa-certificate mr-1"></i> Verified
                    </span>
                    <i className="fas fa-external-link-alt text-primary-dark group-hover:scale-110 transition-transform"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray font-medium leading-relaxed text-sm">
                    {cert.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}