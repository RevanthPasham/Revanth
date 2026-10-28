"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaGlobe,
  FaNetworkWired,
  FaSearch,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiWebrtc,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFigma,
  SiCanva,
  SiAwslambda,
  SiGithubactions,
  SiDigitalocean,
  SiVercel,
  SiCpanel,
  SiPostman,
  SiLighthouse,
} from "react-icons/si"

const categories = [
  "All",
  "Frontend",
  "Backend & APIs",
  "Database & Cloud",
  "DevOps & Hosting",
  "Tools & Design",
]

const techs = [
  // Frontend
  { name: "HTML", category: "Frontend", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", category: "Frontend", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React.js", category: "Frontend", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-sky-400" /> },

  // Backend & APIs
  { name: "Node.js", category: "Backend & APIs", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", category: "Backend & APIs", icon: <SiExpress className="text-gray-300" /> },
  { name: "REST APIs", category: "Backend & APIs", icon: <FaNetworkWired className="text-emerald-400" /> },
  { name: "JWT Auth", category: "Backend & APIs", icon: <SiJsonwebtokens className="text-purple-400" /> },
  { name: "WebRTC", category: "Backend & APIs", icon: <SiWebrtc className="text-teal-400" /> },

  // Database & Cloud
  { name: "MongoDB", category: "Database & Cloud", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", category: "Database & Cloud", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Amazon RDS", category: "Database & Cloud", icon: <FaAws className="text-amber-500" /> },
  { name: "Redis", category: "Database & Cloud", icon: <SiRedis className="text-red-500" /> },
  { name: "CDN", category: "Database & Cloud", icon: <FaGlobe className="text-indigo-400" /> },

  // DevOps & Hosting
  { name: "AWS Lambda", category: "DevOps & Hosting", icon: <SiAwslambda className="text-amber-500" /> },
  { name: "GitHub Actions CI/CD", category: "DevOps & Hosting", icon: <SiGithubactions className="text-blue-400" /> },
  { name: "DigitalOcean", category: "DevOps & Hosting", icon: <SiDigitalocean className="text-blue-500" /> },
  { name: "Docker", category: "DevOps & Hosting", icon: <FaDocker className="text-sky-400" /> },
  { name: "Vercel", category: "DevOps & Hosting", icon: <SiVercel className="text-white" /> },
  { name: "cPanel / HostGator", category: "DevOps & Hosting", icon: <SiCpanel className="text-orange-500" /> },

  // Tools & Design
  { name: "Figma", category: "Tools & Design", icon: <SiFigma className="text-pink-400" /> },
  { name: "Canva", category: "Tools & Design", icon: <SiCanva className="text-cyan-400" /> },
  { name: "Git", category: "Tools & Design", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", category: "Tools & Design", icon: <FaGithub className="text-white" /> },
  { name: "Postman", category: "Tools & Design", icon: <SiPostman className="text-orange-500" /> },
  { name: "Lighthouse", category: "Tools & Design", icon: <SiLighthouse className="text-amber-400" /> },
  { name: "SEO", category: "Tools & Design", icon: <FaSearch className="text-emerald-400" /> },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.15, 0.45], [0.6, 1])

  const filteredTechs =
    activeCategory === "All"
      ? techs
      : techs.filter((t) => t.category === activeCategory)

  return (
    <section id="skills" className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center text-center">
      {/* GLOW DECORATION */}
      <motion.div style={{ scale }} className="mb-6 pointer-events-none">
        <div className="triangle-glow" />
      </motion.div>

      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3 font-semibold">
        TOOLS &amp; TECHNOLOGIES
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        Skills &amp; <span className="gradient-text">Tech Stack</span>
      </h2>

      <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10">
        Engineered with high-performance frameworks, resilient cloud infrastructure, real-time protocols, and automated CI/CD pipelines.
      </p>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TECH CARDS GRID */}
      <motion.div
        layout
        className="flex flex-wrap justify-center gap-3.5 max-w-5xl"
      >
        <AnimatePresence>
          {filteredTechs.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={tech.name}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full
                         border border-white/10 bg-white/[0.04] backdrop-blur-md
                         hover:border-purple-400/60 hover:bg-white/[0.08] hover:shadow-lg
                         hover:shadow-purple-500/10 transition-all duration-300 cursor-default"
            >
              <span className="text-xl transition-transform duration-300 group-hover:scale-125">
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
