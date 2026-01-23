'use client';
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Work Experience</h2>
        
        {/* Timeline Container */}
        <div className="border-l-[3px] border-primary/20 ml-4 md:ml-8 space-y-12 relative">
          
          {/* Job 1 */}
          <div className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-0 w-[19px] h-[19px] rounded-full bg-primary border-[4px] border-white shadow-sm" />
            
            <Reveal>
              <div className="bg-glass p-8 md:p-10 rounded-2xl border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-dark mb-1">IT Services, Student Assistant</h3>
                <div className="text-primary-dark font-bold text-lg">University at Albany</div>
                <div className="text-sm font-semibold text-gray/80 mb-6 mt-1">August 2024 - May 2025</div>
                
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Built full-stack ticket automation app (React + Java), <strong className="text-accent">reducing manual IT tasks by 30% weekly</strong></span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Designed REST APIs linking responsive UI to backend, <strong className="text-accent">improving data retrieval by 25%</strong></span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Integrated MongoDB Atlas with Node.js to manage <strong className="text-accent">50,000+ ticket records</strong> with high consistency</span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Automated email workflows via Node.js, <strong className="text-accent">saving 10+ hours/week</strong> for the IT team</span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Deployed 3+ AWS EC2 project instances in lab environment</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Job 2 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-0 w-[19px] h-[19px] rounded-full bg-primary border-[4px] border-white shadow-sm" />
            
            <Reveal>
              <div className="bg-glass p-8 md:p-10 rounded-2xl border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-dark mb-1">Full Stack Developer</h3>
                <div className="text-primary-dark font-bold text-lg">Homexchange Pvt Ltd</div>
                <div className="text-sm font-semibold text-gray/80 mb-6 mt-1">August 2021 - July 2023</div>
                
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Developed .NET REST APIs integrating lead platforms, <strong className="text-accent">reducing data retrieval time by 40%</strong></span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Integrated Meta WhatsApp + Facebook Graph APIs with CRM, <strong className="text-accent">automating 70% of communications</strong></span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Built Angular UIs increasing <strong className="text-accent">user engagement by 25%</strong> and feature adoption by 18%</span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Optimized SQL procedures (MSSQL/PostgreSQL), <strong className="text-accent">improving query performance by 35%</strong></span>
                  </li>
                  <li className="flex gap-3 text-gray font-medium leading-relaxed">
                    <span className="text-primary font-black mt-1">▸</span>
                    <span>Deployed CRM apps to AWS S3; provided Tier-2/3 support maintaining <strong className="text-accent">95% SLA compliance</strong></span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}