'use client';
import Reveal from "./Reveal";
import { skillsData } from "@/assets/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {skillsData.map((cat, idx) => (
            <Reveal key={idx}>
              <div className="
                bg-glass p-10 rounded-2xl border border-primary/20 shadow-sm h-full flex flex-col
                transition-all duration-300 
                hover:shadow-xl hover:-translate-y-2 hover:border-primary
              ">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-dark">
                  <span className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-lg shrink-0">
                    <i className={cat.icon}></i>
                  </span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className={`px-4 py-2 rounded-full border text-sm font-semibold flex items-center gap-2 transition-all duration-300
                      ${skill.primary 
                        ? 'bg-primary text-white border-primary-dark' 
                        : 'bg-primary/5 text-gray border-primary/20 hover:bg-primary hover:text-white'}`}
                    >
                      <i className={skill.icon}></i> {skill.name}
                    </span>
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