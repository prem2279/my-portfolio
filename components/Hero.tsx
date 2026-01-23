import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-8 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-xs font-bold mb-6 shadow-md">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Available for Opportunities
          </div>

          <h1 className="text-xl font-bold text-gray mb-2">Hi,</h1>
          <h2 className="font-serif text-5xl lg:text-6xl font-black text-dark mb-4 leading-tight">
            I am <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Prem Kumar Gundu</span>
          </h2>
          <h3 className="text-2xl font-semibold text-gray mb-6">
            Full Stack Developer & Oracle Integration Cloud Professional
          </h3>
          <p className="text-lg text-gray font-medium leading-relaxed mb-8 max-w-xl">
            Delivering high-impact enterprise integrations and modern web applications that automate workflows, reduce manual effort, and scale efficiently.
          </p>

          <div className="mb-10">
            <div className="text-xs font-bold text-dark uppercase tracking-widest mb-3">Core Technologies</div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'fa-oracle', name: 'Oracle Integration' },
                { icon: 'fa-react', name: 'React.js' },
                { icon: 'fa-java', name: 'Spring Boot' },
                { icon: 'fa-node-js', name: 'Node.js' },
                { icon: 'fa-aws', name: 'AWS' },
                { icon: 'fa-docker', name: 'Docker' },
                { icon: 'fa-microsoft', name: '.NET' },
                { icon: 'fa-git-alt', name: 'Git' },
              ].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/60 border border-primary/20 rounded-full text-dark font-semibold text-xs hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                  <i className={`fab ${skill.icon} mr-2`}></i>{skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-bold text-sm shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <i className="fas fa-code"></i> View Projects
            </a>
            <a href="/assets/resume.pdf" download className="px-8 py-3 bg-transparent border-2 border-primary text-dark rounded-full font-bold text-sm hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <div className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-secondary to-primary p-1 shadow-2xl animate-[floatProfile_6s_ease-in-out_infinite] relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative bg-white">
                {/* Ensure you have a profile.jpg in /public/assets/ */}
               <Image 
                 src="/assets/profile.jpg" 
                 alt="Prem Kumar Gundu" 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>
            {/* Spinning Dashed Border */}
            <div className="absolute inset-[-20px] border-2 border-dashed border-primary rounded-full animate-[spin_30s_linear_infinite] opacity-50 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}