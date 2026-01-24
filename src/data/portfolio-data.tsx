import React from "react";

export const profileEncryptedPath = "/assets/profile.txt";
export const resumeEncryptedPath = "/assets/resume.txt";

export const aboutData = {
  title: "About Me",
  bio: [
    {
      title: "3+ Years of Enterprise Development",
      description: "I build scalable web applications and cloud integrations that solve real business problems. My work bridges frontend UI, backend APIs, and Oracle Integration Cloud to deliver end-to-end solutions."
    },
    {
      title: "Oracle Integration Cloud Expertise",
      description: "Deep experience with OIC Gen 3 for Oracle Fusion ERP: scheduled orchestrations, event-driven flows, FBDI imports, BIP reporting, fault handling, and SaaS connectivity."
    },
    {
      title: "Full Stack Engineering",
      description: (
        <>
          Production-ready applications using React, Angular, Spring Boot, .NET, and Node.js. My work has <strong className="text-primary">reduced manual operations by 70%</strong> and <strong className="text-primary">improved performance by 40%</strong>.
        </>
      )
    }
  ],
  stats: [
    { num: '3+', label: 'Years Experience' },
    { num: '20+', label: 'Technologies' },
    { num: '3', label: 'Certifications' }
  ]
};

export const experienceData = [
  {
    role: "IT Services, Student Assistant",
    company: "University at Albany",
    period: "August 2024 - May 2025",
    achievements: [
      <>Built full-stack ticket automation app (React + Java), <strong className="text-accent">reducing manual IT tasks by 30% weekly</strong></>,
      <>Designed REST APIs linking responsive UI to backend, <strong className="text-accent">improving data retrieval by 25%</strong></>,
      <>Integrated MongoDB Atlas with Node.js to manage <strong className="text-accent">50,000+ ticket records</strong> with high consistency</>,
      <>Automated email workflows via Node.js, <strong className="text-accent">saving 10+ hours/week</strong> for the IT team</>,
      <>Deployed 3+ AWS EC2 project instances in lab environment</>
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Homexchange Pvt Ltd",
    period: "August 2021 - July 2023",
    achievements: [
      <>Developed .NET REST APIs integrating lead platforms, <strong className="text-accent">reducing data retrieval time by 40%</strong></>,
      <>Integrated Meta WhatsApp + Facebook Graph APIs with CRM, <strong className="text-accent">automating 70% of communications</strong></>,
      <>Built Angular UIs increasing <strong className="text-accent">user engagement by 25%</strong> and feature adoption by 18%</>,
      <>Optimized SQL procedures (MSSQL/PostgreSQL), <strong className="text-accent">improving query performance by 35%</strong></>,
      <>Deployed CRM apps to AWS S3; provided Tier-2/3 support maintaining <strong className="text-accent">95% SLA compliance</strong></>
    ]
  }
];

export const certificationsData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Application Integration Professional",
    desc: "Expert in OIC Gen 3 integrations, REST/SOAP adapters, scheduled orchestrations, fault handling, and enterprise SaaS connectivity.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DB6F13B2FE4C7C2550BE1B8D5C6CD1E4CF24C271E4A8227E6AB84D9DF8B1F052"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Developer Professional",
    desc: "Proficient in cloud-native app development on OCI using SDKs, CLI, IAM policies, Oracle Functions, and containerized deployments.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F9F7952AE9050FA4B8E2481EC86EDF9C7215B355C8B62DAA43C8D233C94825FF"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    desc: "Solid foundation in AI/ML: supervised/unsupervised learning, deep learning (CNNs, RNNs), generative AI, and Oracle Cloud AI services.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B2343F9660E2C9B02B90D5DCB4E1200EBFDBE7BA40BC0773DBD405BBCD5B1EC7"
  }
];

export const educationData = [
  {
    degree: "Master's in Computer Science",
    school: "University at Albany, SUNY",
    period: "August 2023 - May 2025",
    details: [
      "Concentrations: Software Development & Theoretical Computer Science",
      "Relevant Coursework: Software Engineering, Cloud Computing, Algorithms & Data Structures"
    ]
  },
  {
    degree: "Bachelor's in ECE",
    school: "NIT Bhopal, India",
    period: "August 2018 - May 2022",
    details: [
      "Electronics and Communication Engineering"
    ]
  }
];

export const projectsData = [
  {
    tag: 'Oracle Cloud',
    title: 'Oracle Fusion Cloud Financial Integrations',
    tech: 'OIC Gen 3 • ERP Cloud Adapter • FBDI • BIP',
    challenges: 'Manual financial data entry into Oracle ERP caused delays and errors.',
    solutions: [
      'Designed scheduled integrations automating journal/invoice imports via FBDI',
      'Configured ERP Cloud Adapter for callback handling and automated error notifications',
      'Built complex BIP reports for downstream financial reconciliation',
      'Implemented fault handling framework enabling business exception reprocessing'
    ],
    impact: 'End-to-end automation of financial data flows.',
    // You can leave these empty or undefined if not applicable
    github: null,
    live: null
  },
  {
    tag: 'Integration',
    title: 'OCI & Fusion Integration Platform',
    tech: 'OIC • Fusion ERP • Shopify • Pub/Sub',
    challenges: 'Real-time product catalog sync between Fusion ERP and Shopify.',
    solutions: [
      'Built event-driven integration responding to Fusion "Item Creation" events',
      'Implemented Pub/Sub pattern for asynchronous event processing',
      'Designed scheduled integrations with Connectivity Agent and FTP polling',
      'Integrated OCI Log Analytics for real-time monitoring'
    ],
    impact: 'Seamless product catalog synchronization across systems.',
    github: null,
    live: null
  },
  {
    tag: 'Full Stack',
    title: 'Real-time Chat Application with AI',
    tech: 'React.js • Spring Boot • Llama 3 • WebSockets',
    challenges: 'Need for modern messaging platform with AI automation.',
    solutions: [
      'Developed full-stack chat with public/private messaging and presence indicators',
      'Integrated Llama 3 AI assistant for context-aware responses',
      'Implemented Spring Security + PostgreSQL',
      'Engineered WebSocket messaging achieving <200ms latency'
    ],
    impact: 'Production-ready chat platform with intelligent automation.',
    // --- UPDATED HERE ---
    github: "https://github.com/prem2279/Real-Time-Chat-Application", 
    live: "http://ec2-18-216-235-121.us-east-2.compute.amazonaws.com/"             
  },
  {
    tag: 'Machine Learning',
    title: 'Image Segmentation with ML',
    tech: 'Python • TensorFlow • U-Net',
    solutions: [
      'Developed software to detect and segment humans in images',
      'Optimized model training to reduce loss by 20%',
      'Implemented data augmentation techniques to enhance model generalization'
    ],
    github: null,
    live: null
  }
];
export const skillsData = [
  {
    title: "Oracle EcoSystem",
    icon: "fas fa-cloud",
    skills: [
      { name: "Oracle Integration Cloud (Gen 3)", primary: true, icon: "fas fa-cloud" },
      { name: "Oracle Fusion ERP", primary: false, icon: "fas fa-building" },
      { name: "REST/SOAP Adapters", primary: true, icon: "fas fa-plug" },
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
      { name: "Oracle Autonomous DB", primary: false, icon: "fab fa-database" },
      { name: "MSSQL", primary: false, icon: "fas fa-server" },
      { name: "AWS (EC2, S3)", primary: true, icon: "fab fa-aws" },
      { name: "Docker", primary: true, icon: "fab fa-docker" },
      { name: "Git & SVN", primary: true, icon: "fab fa-git-alt" },
      { name: "CI/CD Pipelines", primary: false, icon: "fas fa-infinity" },
    ]
  }
];

export const contactData = [
  { 
    icon: "fas fa-envelope", 
    label: "Email", 
    value: "premgundu2279@gmail.com", 
    link: "mailto:premgundu2279@gmail.com" 
  },
  { 
    icon: "fab fa-linkedin", 
    label: "LinkedIn", 
    value: "Prem Kumar Gundu", 
    link: "https://linkedin.com"
  },
  { 
    icon: "fab fa-github", 
    label: "GitHub", 
    value: "prem2279", 
    link: "https://github.com/prem2279" 
  },
  { 
    icon: "fas fa-file-pdf", 
    label: "Resume", 
    value: "Download PDF", 
    link: "#",
    isResume: true 
  }
];


export const heroData = {
  status: "Available for Opportunities",
  greeting: "Hi,",
  intro: "I am",
  name: "Prem Kumar Gundu",
  title: "Full Stack Developer & Oracle Integration Cloud Professional",
  description: "Delivering high-impact enterprise integrations and modern web applications that automate workflows, reduce manual effort, and scale efficiently.",
  profileImage: null,
  skills: [
    { icon: 'fa-cloud', name: 'Oracle Integration Cloud' },
    { icon: "fa-plug", name: "REST/SOAP Adapters" },
    { icon: 'fa-react', name: 'React.js' },
    { icon: 'fa-microsoft', name: '.NET' },
    { icon: 'fa-java', name: 'Spring Boot' },
    { icon: 'fa-node-js', name: 'Node.js' },
    { icon: 'fa-aws', name: 'AWS' },
    { icon: 'fa-docker', name: 'Docker' },
    { icon: 'fa-git-alt', name: 'Git & SVN ' },
  ],
  actions: [
    { 
      label: "View Projects", 
      href: "#projects", 
      icon: "fas fa-code", 
      primary: true 
    },
    { 
      label: "Download Resume", 
      href: "#", 
      icon: "fas fa-download", 
      primary: false, 
      isResume: true 
    }
  ]
};