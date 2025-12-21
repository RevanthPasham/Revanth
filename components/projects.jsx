"use client"

import { useEffect, useRef, useState } from "react"
import { projectsData } from "@/data/projects"

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
          
          {/* TEXT (APPEARS FIRST) */}
          <p
            className={`text-white text-2xl font-semibold max-w-[85%] mb-8 transition-all duration-700
              ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {project.description}
          </p>

          {/* IMAGE (APPEARS SECOND) */}
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

        {/* RIGHT CONTENT (APPEARS LAST FROM RIGHT) */}
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

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-secondary/60 border border-primary/20 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className={`md:hidden rounded-3xl p-5 ${bgColor}`}
        onClick={() => setActiveIndex(index)}
      >
        <p
          className={`text-white text-lg font-semibold mb-4 transition-all duration-700
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        >
          {project.description}
        </p>

        <img
          src={project.image}
          alt={project.title}
          className={`rounded-2xl transition-all duration-700
            ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        />
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
