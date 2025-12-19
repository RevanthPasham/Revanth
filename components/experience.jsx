"use client"

import { useEffect, useState, useRef } from "react"
import { experienceData } from "@/data/experience"

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const contentRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Check if section is in view
      if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Calculate progress through the section
        const progress = (scrollPosition + windowHeight - sectionTop) / (sectionHeight + windowHeight)
        const newIndex = Math.min(Math.floor(progress * experienceData.length), experienceData.length - 1)

        if (newIndex !== activeIndex && newIndex >= 0) {
          setActiveIndex(newIndex)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex])

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Crafting</span> Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My journey through various roles and organizations
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left: Timeline */}
          <div className="md:sticky md:top-32">
            <div className="relative">
              {/* Gradient Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-chart-3 via-primary to-accent" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {experienceData.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center gap-4 w-full text-left group"
                  >
                    {/* Dot */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        activeIndex === index
                          ? "border-primary bg-primary shadow-lg shadow-primary/50 scale-110"
                          : "border-muted bg-background group-hover:border-primary/50 group-hover:scale-105"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          activeIndex === index ? "bg-white animate-pulse" : "bg-muted"
                        }`}
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <p
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {exp.date}
                      </p>
                      <p className="text-xs text-muted-foreground">{exp.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative min-h-[600px]">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (contentRefs.current[index] = el)}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
              >
                <div className="glass rounded-3xl p-8 md:p-10 space-y-6 hover:border-primary/30 transition-colors">
                  {/* Role and Organization */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-semibold text-primary">
                        {exp.organization}
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-secondary/50 border border-primary/10 text-xs text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
