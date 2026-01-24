'use client';
import Reveal from "./Reveal";
import { aboutData } from "@/assets/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-16 text-dark tracking-tight">{aboutData.title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Bio Text */}
          <div className="space-y-8 text-lg font-medium text-gray leading-relaxed">
            {aboutData.bio.map((item, idx) => (
              <Reveal key={idx}>
                <div>
                  <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5">
            {aboutData.stats.map((stat, idx) => (
              <Reveal key={idx}>
                <div className="
                  bg-glass p-8 rounded-2xl border border-primary/20 text-center 
                  transition-all duration-300 
                  hover:shadow-xl hover:-translate-y-2 hover:border-primary
                ">
                  <div className="font-serif text-5xl font-black text-primary mb-2">{stat.num}</div>
                  <div className="text-gray font-bold text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}