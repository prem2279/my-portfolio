'use client';
import Reveal from "./Reveal";
import { educationData } from "@/src/data/portfolio-data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {educationData.map((edu, idx) => (
            <Reveal key={idx}>
              <div className="
                bg-glass p-10 rounded-2xl border border-primary/20 h-full
                transition-all duration-300 
                hover:shadow-xl hover:-translate-y-2 hover:border-primary
              ">
                <h3 className="text-2xl font-bold text-dark mb-2">{edu.degree}</h3>
                <div className="text-primary-dark font-bold text-lg mb-4 flex items-center gap-2">
                  <i className="fas fa-university"></i> {edu.school}
                </div>
                <div className="text-gray font-medium leading-relaxed space-y-2 text-base">
                  <div className="text-sm font-bold uppercase tracking-wide text-gray/70 mb-2">{edu.period}</div>
                  {edu.details.map((detail, i) => (
                    <div key={i}>{detail}</div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}