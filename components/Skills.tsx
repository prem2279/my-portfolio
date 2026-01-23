import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Integration & Cloud",
    icon: "fab fa-oracle",
    skills: [
      { name: "Oracle Integration Cloud (Gen 3)", primary: true, icon: "fab fa-oracle" },
      { name: "Oracle Fusion ERP", primary: true, icon: "fas fa-building" },
      { name: "REST/SOAP Adapters", primary: false, icon: "fas fa-plug" },
      { name: "Event-Driven Architecture", primary: false, icon: "fas fa-bolt" },
      { name: "FBDI & BIP Reporting", primary: false, icon: "fas fa-file-invoice" },
      { name: "OCI & PaaS", primary: false, icon: "fas fa-cloud" },
      { name: "Scheduled Orchestration", primary: false, icon: "fas fa-clock" },
      { name: "Visual Builder (VBCS)", primary: false, icon: "fas fa-desktop" },
    ]
  },
  {
    title: "Backend Development",
    icon: "fas fa-server",
    skills: [
      { name: "Java Spring Boot", primary: true, icon: "fab fa-java" },
      { name: "Node.js", primary: true, icon: "fab fa-node-js" },
      { name: ".NET (C#)", primary: true, icon: "fab fa-microsoft" },
      { name: "Python", primary: false, icon: "fab fa-python" },
      { name: "RESTful API Design", primary: false, icon: "fas fa-network-wired" },
      { name: "Microservices", primary: false, icon: "fas fa-cubes" },
      { name: "WebSocket (SockJS/STOMP)", primary: false, icon: "fas fa-sync" },
      { name: "XML/JSON Transformation", primary: false, icon: "fas fa-file-code" },
    ]
  },
  {
    title: "Frontend Development",
    icon: "fas fa-code",
    skills: [
      { name: "React.js (18+)", primary: true, icon: "fab fa-react" },
      { name: "Angular", primary: true, icon: "fab fa-angular" },
      { name: "TypeScript", primary: true, icon: "fas fa-code" },
      { name: "JavaScript (ES6+)", primary: false, icon: "fab fa-js" },
      { name: "HTML5 & CSS3", primary: false, icon: "fab fa-html5" },
      { name: "Bootstrap", primary: false, icon: "fab fa-bootstrap" },
      { name: "Redux", primary: false, icon: "fas fa-layer-group" },
      { name: "React Native", primary: false, icon: "fas fa-mobile-alt" },
    ]
  },
  {
    title: "Databases & DevOps",
    icon: "fas fa-database",
    skills: [
      { name: "MongoDB Atlas", primary: false, icon: "fas fa-leaf" },
      { name: "PostgreSQL", primary: false, icon: "fas fa-database" },
      { name: "Oracle Autonomous DB", primary: false, icon: "fab fa-oracle" },
      { name: "MSSQL", primary: false, icon: "fas fa-server" },
      { name: "AWS (EC2, S3)", primary: true, icon: "fab fa-aws" },
      { name: "Docker", primary: true, icon: "fab fa-docker" },
      { name: "Git & SVN", primary: true, icon: "fab fa-git-alt" },
      { name: "CI/CD Pipelines", primary: false, icon: "fas fa-infinity" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <Reveal key={idx}>
              <div className="bg-glass p-10 rounded-2xl border border-primary/20 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-dark">
                  <span className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-lg">
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