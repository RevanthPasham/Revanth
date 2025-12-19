"use client"

import { useEffect, useRef, useState } from "react"
import { projectsData } from "@/data/projects"

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <a
      ref={cardRef}
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-24 transition-smooth ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden rounded-3xl transition-smooth ${
          isVisible ? "translate-y-0" : "translate-y-12"
        }`}
        style={{
          transitionDelay: `${index * 0.1}s`,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
        }}
      >
        <div className="aspect-[4/3] relative group-hover:scale-105 group-hover:-translate-y-2 transition-smooth">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-primary/20 group-hover:shadow-primary/40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl flex items-end justify-start p-8">
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium">View Project</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div
        className={`space-y-6 transition-smooth ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 0.1 + 0.2}s`,
        }}
      >
        <div>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-3">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-1 text-xl">+</span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 text-sm text-foreground hover:bg-primary/20 hover:border-primary/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of my recent work, showcasing innovative solutions and creative implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
