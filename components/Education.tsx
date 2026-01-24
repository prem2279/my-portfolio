'use client';
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-16 text-dark tracking-tight">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Reveal>
            {/* UPDATED with Elevation */}
            <div className="
              bg-glass p-10 rounded-2xl border border-primary/20 h-full
              transition-all duration-300 
              hover:shadow-xl hover:-translate-y-2 hover:border-primary
            ">
              <h3 className="text-2xl font-bold text-dark mb-2">Master's in Computer Science</h3>
              <div className="text-primary-dark font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-university"></i> University at Albany, SUNY
              </div>
              <div className="text-gray font-medium leading-relaxed space-y-2 text-base">
                <div className="text-sm font-bold uppercase tracking-wide text-gray/70 mb-2">August 2023 - May 2025</div>
                <div><strong>Concentrations:</strong> Software Development & Theoretical Computer Science</div>
                <div><strong>Relevant Coursework:</strong> Software Engineering, Cloud Computing, Algorithms & Data Structures</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            {/* UPDATED with Elevation */}
            <div className="
              bg-glass p-10 rounded-2xl border border-primary/20 h-full
              transition-all duration-300 
              hover:shadow-xl hover:-translate-y-2 hover:border-primary
            ">
              <h3 className="text-2xl font-bold text-dark mb-2">Bachelor's in Electronics</h3>
              <div className="text-primary-dark font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-university"></i> NIT Bhopal, India
              </div>
              <div className="text-gray font-medium leading-relaxed text-base">
                <div className="text-sm font-bold uppercase tracking-wide text-gray/70 mb-2">August 2018 - May 2022</div>
                <p>Electronics and Communication Engineering</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}