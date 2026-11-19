/**
 * PORTFOLIO CONFIGURATION
 * 
 * Edit this file to customize your portfolio content!
 * Changes made here will automatically reflect across your portfolio site.
 */

const PORTFOLIO_CONFIG = {
  // Personal Info
  personal: {
    name: "Avi Barik",
    role: "Full Stack Developer & Software Engineer",
    titles: [
      "Full Stack Developer",
      "Software Engineer",
      "Open Source Contributor",
      "Web Architect"
    ],
    bio: "Passionate software engineer building modern, responsive web applications and scalable digital solutions. Committed to clean code, performance, and great user experiences.",
    avatar: "assets/images/avatar-placeholder.svg",
    location: "Remote / Open to Relocation",
    statusBadge: "Available for new opportunities",
    resumeUrl: "#", // Link to your resume PDF or Google Drive
  },

  // Social Links
  socials: {
    github: "https://github.com/avibarik",
    linkedin: "https://linkedin.com/in/avibarik",
    twitter: "https://twitter.com/avibarik",
    email: "mailto:contact@avibarik.github.io",
    blog: "https://avibarik.github.io"
  },

  // Key Highlight Stats
  stats: [
    { label: "Years of Experience", value: "3+" },
    { label: "Completed Projects", value: "25+" },
    { label: "GitHub Contributions", value: "850+" },
    { label: "Coffee Cups", value: "1,200+" }
  ],

  // Skills organized by category
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript / TypeScript", level: "Advanced" },
        { name: "React / Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Redux / Zustand", level: "Intermediate" }
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "Python / FastAPI", level: "Intermediate" },
        { name: "RESTful & GraphQL APIs", level: "Advanced" },
        { name: "PostgreSQL & Prisma", level: "Advanced" },
        { name: "MongoDB & Redis", level: "Intermediate" }
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Git & GitHub Actions", level: "Advanced" },
        { name: "Docker & Containers", level: "Intermediate" },
        { name: "AWS / Vercel / Netlify", level: "Advanced" },
        { name: "Linux & Bash", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & Methodologies",
      items: [
        { name: "Agile / Scrum", level: "Experienced" },
        { name: "Jest / Vitest / Playwright", level: "Intermediate" },
        { name: "Figma UI/UX Design", level: "Intermediate" },
        { name: "VS Code & Postman", level: "Expert" }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "project-1",
      title: "DevPulse - Developer Analytics Dashboard",
      category: "Full Stack",
      description: "A centralized real-time telemetry dashboard for software engineering teams tracking PR velocity, sprint metrics, and deployment health.",
      tags: ["TypeScript", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com/avibarik/devpulse",
      featured: true
    },
    {
      id: "project-2",
      title: "CloudVault - End-to-End Encrypted File Storage",
      category: "Cloud / DevOps",
      description: "Zero-knowledge encrypted cloud storage application featuring client-side cryptographic hashing, granular file sharing, and auto-sync.",
      tags: ["Python", "FastAPI", "React", "AWS S3", "Docker"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com/avibarik/cloudvault",
      featured: true
    },
    {
      id: "project-3",
      title: "TaskFlow - Collaborative KanBan Workspace",
      category: "Frontend",
      description: "Fast, keyboard-first task management application with drag-and-drop boards, live multi-user collaboration, and markdown preview.",
      tags: ["Next.js", "Tailwind CSS", "Zustand", "WebSockets"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com/avibarik/taskflow",
      featured: true
    },
    {
      id: "project-4",
      title: "CodeSnippet AI - Contextual Code Assistant CLI",
      category: "AI / Tooling",
      description: "Command line developer utility that generates boilerplate, explains complex regex patterns, and writes automated unit tests.",
      tags: ["Go", "OpenAI API", "CLI", "Shell"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com/avibarik/codesnippet-ai",
      featured: false
    }
  ],

  // Work & Education Experience Timeline
  experiences: [
    {
      period: "2023 - Present",
      role: "Full Stack Software Engineer",
      company: "TechNova Solutions",
      description: "Spearheaded the redesign of enterprise client portal improving loading speeds by 40%. Implemented secure microservices and automated CI/CD deployment pipelines."
    },
    {
      period: "2021 - 2023",
      role: "Frontend Developer",
      company: "Creative Labs Interactive",
      description: "Built responsive, accessible web interfaces for clients ranging from startups to Fortune 500 companies using modern component libraries."
    },
    {
      period: "2017 - 2021",
      role: "B.S. in Computer Science",
      company: "State University",
      description: "Focused on Software Engineering, Data Structures, Algorithms, and Distributed Systems. Dean's Honor List."
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
