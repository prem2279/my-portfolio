'use client';
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Bio Text */}
          <div className="space-y-8 text-lg font-medium text-gray leading-relaxed">
            <Reveal>
              <div>
                <h4 className="text-xl font-bold text-dark mb-3">3+ Years of Enterprise Development</h4>
                <p>
                  I build scalable web applications and cloud integrations that solve real business problems. My work bridges frontend UI, backend APIs, and Oracle Integration Cloud to deliver end-to-end solutions.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h4 className="text-xl font-bold text-dark mb-3">Oracle Integration Cloud Expertise</h4>
                <p>
                  Deep experience with OIC Gen 3 for Oracle Fusion ERP: scheduled orchestrations, event-driven flows, FBDI imports, BIP reporting, fault handling, and SaaS connectivity. I architect integrations that ensure seamless data movement across enterprise systems.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h4 className="text-xl font-bold text-dark mb-3">Full Stack Engineering</h4>
                <p>
                  Production-ready applications using React, Angular, Spring Boot, .NET, and Node.js. My work has <strong>reduced manual operations by 70%</strong>, <strong>improved performance by 40%</strong>, and automated critical workflows for IT systems, CRMs, and real-time chat platforms.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5">
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '20+', label: 'Technologies' },
              { num: '3', label: 'Certifications' }
            ].map((stat, idx) => (
              <Reveal key={idx}>
                <div className="bg-glass p-8 rounded-2xl border border-primary/20 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary">
                  <div className="font-serif text-5xl font-black text-primary mb-2">{stat.num}</div>
                  <div className="text-gray font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}