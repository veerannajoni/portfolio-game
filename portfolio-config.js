/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║       Veeranna Joni — PORTFOLIO CONFIG FILE              ║
 * ║  Edit ONLY this file to update your portfolio details.   ║
 * ║  All changes here automatically reflect in the website.  ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const PORTFOLIO_CONFIG = {
  // ──────────────────────────────────────────
  // 👤 BASIC PROFILE
  // ──────────────────────────────────────────
  profile: {
    name: "Veeranna Joni",
    title: "Software Developer",
    company: "IBM",
    tagline: "Python ⚡ SQL Server ⚡ React ⚡ webMethods ⚡ Agentic AI",
    level: "Mid-Level",
    location: "Bangalore, India 🇮🇳",
    status: "Open to Opportunities",
    avatar: "🧑‍💻",
    bio: "Software Developer with 3+ years of experience building enterprise applications using Python, SQL Server, React, and webMethods Integration Server. Proven track record in designing scalable integration and automation solutions. Currently expanding into Agentic AI and intelligent automation systems.",
    creed:
      "Driven by curiosity and continuous learning — passionate about integration, automation, and the next generation of AI-powered software systems.",
    yearsExp: "3+",
    projectsShipped: "5+",
    techStackSize: "20+ Tools",
    mediumFollowers: "-",
  },

  // ──────────────────────────────────────────
  // 📡 CONTACT & SOCIAL LINKS
  // ──────────────────────────────────────────
  contact: {
    linkedin: "https://www.linkedin.com/in/veeranna-joni-a6a89b20b/",
    github: "https://github.com/veerannajoni",
    twitter: "",
    medium: "",
    buymeacoffee: "",
    kofi: "",
    twitch: "",
    website: "",
    formspreeUrl: "",
  },

  // ──────────────────────────────────────────
  // ⚡ SKILLS (name + proficiency 0–100)
  // ──────────────────────────────────────────
  skills: [
    { name: "Python", pct: 90 },
    { name: "SQL Server", pct: 90 },
    { name: "Agentic AI", pct: 75 },
    { name: "React", pct: 85 },
    { name: "Webmethods Integration Server", pct: 80 },
    { name: "Automation", pct: 80 },
    { name: "CI/CD", pct: 75 },
    { name: "JavaScript", pct: 70 },
    { name: "Docker", pct: 70 },
    { name: "Linux", pct: 65 },
  ],

  techTags: [
    "Python",
    "SQL Server",
    "React",
    "Webmethods",
    "Automation",
    "CI/CD",
    "Docker",
    "Linux",
    "JavaScript",
    "Integration",
    "Microservices",
    "REST",
    "Git",
    "Jenkins",
    "Design Patterns",
    "Agile",
  ],

  // ──────────────────────────────────────────
  // 💼 WORK EXPERIENCE
  // ──────────────────────────────────────────
  experience: [
    {
      icon: "⚔️",
      title: "Software Developer",
      company: "IBM, Bengaluru",
      date: "Jul 2024 – Present",
      desc: "Leading the development of a Release Management System using React.js and SQL Server. Building backend integration logic using webMethods Integration Server (flow services, adapters) for seamless enterprise data exchange. Integrating REST APIs to enhance system functionality, reliability, and automation.",
    },
    {
      icon: "🛡️",
      title: "Software Engineer 1",
      company: "Software AG, Bengaluru",
      date: "Jul 2022 – Jun 2024",
      desc: "Developed and maintained backend services using Python Flask for internal engineering tools. Integrated Flask APIs with React front-end applications and SQL Server database. Automated testing and deployment pipelines using Jenkins and Docker, reducing manual effort and downtime.",
    },
    {
      icon: "🧪",
      title: "Intern",
      company: "Software AG, Bengaluru",
      date: "Feb 2022 – Jun 2022",
      desc: "Worked on knowledge graph creation, semantic search, and document similarity models using Python and machine learning. Implemented entity-relation extraction and semantic embedding techniques for intelligent document processing.",
    },
  ],

  // ──────────────────────────────────────────
  // 🏗 PROJECTS
  // ──────────────────────────────────────────
  projects: [
    {
      name: "📊 Internal Process Visibility Tool",
      desc: "Built an enterprise tool to streamline release and process visibility using webMethods Integration Server, React.js, and SQL Server. Improved tracking of internal workflows through integrated backend services and interactive data visualization dashboards.",
      tags: [
        "webMethods",
        "React",
        "SQL Server",
        "Integration",
        "Enterprise Tool",
      ],
      link: "",
    },
    {
      name: "🤖 Natural Language to SQL Agent",
      desc: "Built an AI-driven system using IBM LLMs to convert natural language queries into SQL, execute them on enterprise databases, and transform results back into human-readable responses. Enabled conversational data access and intelligent querying without manual SQL writing.",
      tags: ["LLM", "Agentic AI", "NL2SQL", "Python", "SQL Server", "AI"],
      link: "",
    },

    {
      name: "🧠 Enterprise Knowledge Graph",
      desc: "Designed a semantic search framework converting unstructured text into vector representations to enable intelligent document similarity and contextual search. Improved accuracy of enterprise knowledge retrieval and relationship discovery.",
      tags: [
        "Python",
        "Machine Learning",
        "Semantic Search",
        "NLP",
        "Knowledge Graph",
      ],
      link: "",
    },
  ],

  // ──────────────────────────────────────────
  // 🎓 EDUCATION
  // ──────────────────────────────────────────
  education: [
    {
      icon: "🎓",
      degree: "Bachelor of Engineering (Electronics and Communication)",
      school: "Bangalore Institute of Technology",
      year: "2018 – 2022",
      desc: "Graduated with CGPA 8.4 / 10. Built strong foundations in electronics, communication systems, and software engineering with focus on programming, data structures, and system design.",
    },
  ],

  specializations: [
    {
      icon: "🔗",
      name: "INTEGRATION ENGINEER",
      desc: "webMethods & Enterprise APIs",
    },
    { icon: "⚛️", name: "REACT DEVELOPER", desc: "Enterprise UI & Dashboards" },
    {
      icon: "🐍",
      name: "PYTHON ENGINEER",
      desc: "Automation & Backend Services",
    },
    { icon: "⚙️", name: "DEVOPS AUTOMATOR", desc: "CI/CD, Jenkins & Docker" },
  ],

  // ──────────────────────────────────────────
  // 📝 BLOG POSTS (optional — used when Medium URL is empty or RSS fails)
  // Format: { title: "...", desc: "...", date: "...", link: "..." }
  // ──────────────────────────────────────────
  blogPosts: [],

  // ──────────────────────────────────────────
  // 🏆 ACHIEVEMENTS
  // ──────────────────────────────────────────
  achievements: [
    {
      icon: "🚀",
      name: "RELEASE PLATFORM",
      desc: "Built enterprise release management system",
    },
    {
      icon: "🔗",
      name: "INTEGRATION ENGINEER",
      desc: "webMethods & REST enterprise integrations",
    },
    {
      icon: "⚙️",
      name: "CI/CD AUTOMATION",
      desc: "Jenkins & Docker deployment pipelines",
    },
    {
      icon: "🤖",
      name: "AI DATA AGENT",
      desc: "Natural language to SQL system",
    },
  ],
};
