"use client"

import { useEffect, useRef, useState } from "react"
import { projectsData } from "@/data/projects"

/* 🔹 TECH ICONS */
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPython,
  SiPostman,
} from "react-icons/si"

/* 🔹 ICON MAP (keys must match project.techStack) */
const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Python: <SiPython className="text-blue-400" />,
  Java: <FaJava className="text-red-500" />,
  GitHub: <FaGithub />,
  Postman: <SiPostman className="text-orange-500" />,
}

const projectColors = [
  "bg-orange-600",
  "bg-green-700",
  "bg-sky-700",
  "bg-purple-700",
  "bg-emerald-700",
]

function ProjectCard({ project, index, activeIndex, setActiveIndex }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const bgColor = projectColors[index % projectColors.length]
  const isActive = isVisible || activeIndex === index

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.35 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mb-32">
      {/* ================= DESKTOP ================= */}
      <div
        onClick={() => setActiveIndex(index)}
        className="hidden md:grid md:grid-cols-2 gap-16 items-center cursor-pointer"
      >
        {/* LEFT COLORED BOX */}
        <div className={`relative rounded-[2.5rem] p-10 ${bgColor}`}>
          <p
            className={`text-white text-2xl font-semibold max-w-[85%] mb-8 transition-all duration-700
              ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {project.description}
          </p>

          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-200
              ${isActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"}
            `}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`space-y-6 transition-all duration-700 delay-300
            ${isActive
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"}
          `}
        >
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <h3 className="text-4xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground text-lg">
            {project.description}
          </p>

          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-primary">+</span>
                {f}
              </li>
            ))}
          </ul>

          {/* ✅ TECH STACK WITH ICONS (DESKTOP) */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-secondary/60 border border-primary/20 text-sm"
              >
                <span className="text-lg">
                  {techIcons[tech]}
                </span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className={`md:hidden rounded-3xl p-5 ${bgColor}`}>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl mb-4"
        />

        <h3 className="text-xl font-bold text-white mb-1">
          {project.title}
        </h3>

        <p className="text-sm text-white/90 mb-3">
          {project.description}
        </p>

        {/* ✅ TECH STACK WITH ICONS (MOBILE) */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1 rounded-full
                         bg-black/20 text-xs text-white"
            >
              <span className="text-base">
                {techIcons[tech]}
              </span>
              <span>{tech}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm text-white underline mb-3"
        >
          {showMore ? "Show less ↑" : "Show more ↓"}
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out
            ${showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <h4 className="text-sm font-semibold text-white mb-2">
            Key Features:
          </h4>

          <ul className="space-y-2 text-sm text-white/90">
            {project.features.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        </div>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl
                     bg-black/20 text-white py-3 font-medium"
        >
          View Project →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore selected work
          </p>
        </div>

        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  )
}
