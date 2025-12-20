"use client"

import { useEffect, useRef, useState } from "react"
import { experienceData } from "@/data/experience"

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState([])
  const itemRefs = useRef([])

  // LEFT TIMELINE ACTIVE DOT (UNCHANGED LOGIC)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          if (entry.isIntersecting) {
            setActiveIndex(index)
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            )
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-16 items-start">

          {/* LEFT TIMELINE */}
          <div className="hidden md:block sticky top-0 h-screen">
            <div className="relative h-full flex">

              {/* CENTERED LINE (FULL SCREEN HEIGHT) */}
              <div className="relative w-12 flex justify-center">
                <div className="w-[2px] h-screen bg-gradient-to-b from-primary via-accent to-primary/30" />
              </div>

              {/* DOTS + TEXT */}
              <div className="space-y-10 ml-6 pt-32">
                {experienceData.map((exp, index) => (
                  <div key={index} className="flex items-center gap-4">

                    {/* DOT */}
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-primary border-primary scale-110 shadow-lg shadow-primary/40"
                          : "border-muted bg-background"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          activeIndex === index ? "bg-white" : "bg-muted"
                        }`}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          activeIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {exp.date}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.role}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (ANIMATED FROM RIGHT) */}
          <div className="space-y-32">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`scroll-mt-40 transition-all duration-700 ease-out
                  ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16"
                  }`}
              >
                <div className="space-y-6 pb-20 border-b border-muted/20">

                  <h3 className="text-3xl md:text-4xl font-bold">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm">
                      {exp.organization}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-secondary/50 border border-primary/20 text-xs"
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
