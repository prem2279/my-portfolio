'use client';
import Reveal from "./Reveal";
import { experienceData } from "@/assets/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-16 text-dark tracking-tight">Work Experience</h2>
        
        <div className="border-l-[3px] border-primary/20 ml-3 md:ml-8 space-y-12 relative">
          
          {experienceData.map((job, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-0 w-[19px] h-[19px] rounded-full bg-primary border-[4px] border-white shadow-sm" />
              
              <Reveal>
                <div className="
                  bg-glass p-8 md:p-10 rounded-2xl border border-primary/20 
                  transition-all duration-300 
                  hover:shadow-xl hover:-translate-y-2 hover:border-primary
                ">
                  <h3 className="text-2xl font-bold text-dark mb-1">{job.role}</h3>
                  <div className="text-primary-dark font-bold text-lg">{job.company}</div>
                  <div className="text-sm font-semibold text-gray/80 mb-6 mt-1">{job.period}</div>
                  
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray font-medium leading-relaxed items-start">
                        <span className="text-primary font-black mt-1 shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}