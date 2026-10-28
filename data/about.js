import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa"

import {
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiWebrtc,
  SiDigitalocean,
  SiExpress,
  SiJsonwebtokens,
  SiRazorpay,
  SiPostman,
  SiAwslambda,
  SiGithubactions,
  SiCpanel,
  SiLighthouse,
} from "react-icons/si"

export const experienceData = [
  {
    date: "Jan 2026 — Present",
    role: "Full Stack Developer Intern",
    organization: "Saketh AI Automation",
    location: "Remote",
    description:
      "Architecting a multi-role job platform and AI-driven mock interview system, managing staging/production releases on DigitalOcean with Redis caching and WebRTC real-time pipelines.",
    achievements: [
      "Built a multi-role job portal (Admin, Recruiter, Candidate) using React (TypeScript) on the frontend and Node.js (TypeScript) on the backend, with PostgreSQL hosted on Amazon RDS.",
      "Deployed and managed staging/production environments on DigitalOcean; played a key role in Git branching strategy, handling staging-to-production merges and production backend releases.",
      "Improved platform performance and reliability with a CDN for static assets, Redis for caching/session management, and API-level rate limiting.",
      "Built an automated resume generation feature and an AI-powered mock interview system using WebRTC for real-time video/audio sessions with AI-driven feedback.",
    ],
    techStack: [
      { icon: FaReact, name: "React (TypeScript)", color: "text-cyan-400" },
      { icon: FaNodeJs, name: "Node.js (TypeScript)", color: "text-green-500" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
      { icon: FaAws, name: "Amazon RDS", color: "text-amber-500" },
      { icon: SiRedis, name: "Redis", color: "text-red-500" },
      { icon: SiWebrtc, name: "WebRTC", color: "text-emerald-400" },
      { icon: SiDigitalocean, name: "DigitalOcean", color: "text-blue-500" },
      { icon: FaDocker, name: "Docker", color: "text-sky-400" },
    ],
  },

  {
    date: "Aug 2025 — Present",
    role: "MERN Stack Developer",
    organization: "Heven",
    location: "Remote (Part-time)",
    description:
      "Developing and scaling full-stack e-commerce and web platforms using the MERN stack, implementing Google OAuth 2.0 & JWT auth workflows and secure Razorpay payment integrations.",
    achievements: [
      "Developed and maintained a MERN stack web application using React, Node.js, Express, and MongoDB.",
      "Engineered secure authentication using Google OAuth 2.0 and JWT-based authorization.",
      "Integrated Razorpay payment gateway to enable secure and reliable online transactions.",
      "Designed, developed, and tested RESTful APIs for user authentication and payment workflows using Postman.",
    ],
    techStack: [
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
      { icon: SiMongodb, name: "MongoDB", color: "text-emerald-500" },
      { icon: SiJsonwebtokens, name: "JWT Auth", color: "text-purple-400" },
      { icon: SiRazorpay, name: "Razorpay", color: "text-sky-400" },
      { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    ],
  },

  {
    date: "Jun 2025 — Present",
    role: "Web Developer Intern",
    organization: "Soaron",
    location: "Internship",
    description:
      "End-to-end development and hosting of company web platform on cPanel/HostGator, serverless backend functions on AWS Lambda, SEO optimization, and GitHub Actions CI/CD pipelines.",
    achievements: [
      "Developed and deployed a company frontend website, hosted on cPanel (HostGator), handling end-to-end setup from build to live deployment.",
      "Implemented on-page SEO (meta tags, headings, alt text, sitemap) and built backlinks to improve search visibility and domain authority.",
      "Deployed serverless backend functions on AWS Lambda to reduce infrastructure overhead and improve scalability.",
      "Configured CI/CD pipelines using GitHub Actions to automate build, test, and deploy workflows on every push.",
    ],
    techStack: [
      { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
      { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-500" },
      { icon: SiAwslambda, name: "AWS Lambda", color: "text-amber-500" },
      { icon: SiGithubactions, name: "GitHub Actions CI/CD", color: "text-blue-400" },
      { icon: SiCpanel, name: "cPanel / HostGator", color: "text-orange-500" },
      { icon: SiLighthouse, name: "SEO & Lighthouse", color: "text-yellow-400" },
    ],
  },
]

export const achievementsData = [
  {
    id: 1,
    title: "Top 5 Among 100+ Teams",
    event: "Coding Squad Competition",
    organization: "NILR Institute of Technology",
    year: "2025",
    badge: "Top 5 Finalist",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    description:
      "Secured a Top 5 placement among 100+ competing engineering teams in an intense competitive programming and algorithm hackathon.",
  },
  {
    id: 2,
    title: "Runner-Up Innovation Award",
    event: "Micro Project Competition (CIE)",
    organization: "Centre for Innovation & Entrepreneurship",
    year: "2025",
    badge: "Runner-Up",
    color: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    description:
      "Awarded Runner-up in the prestigious Micro Project Competition for ideating, designing, and building innovative technical solutions.",
  },
  {
    id: 3,
    title: "Multiple Coding Certifications",
    event: "Problem Solving & Development",
    organization: "HackerRank & Global Platforms",
    year: "2024 — 2025",
    badge: "Certified",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
    description:
      "Earned verified certifications across HackerRank and premier coding platforms demonstrating high proficiency in core algorithms, data structures, and web technologies.",
  },
]
