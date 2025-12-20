"use client"

import { useEffect, useRef, useState } from "react"
import { experienceData } from "@/data/experience"

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef([])

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index))
          }
        })
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.1,
      }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToItem = (index) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-20">
          {/* LEFT TIMELINE */}
          <div className="relative">
            {/* FULL SCREEN LINE */}
            <div className="sticky top-0 h-screen flex justify-center">
              <div className="relative w-[2px] bg-muted/30 rounded-full overflow-hidden">
                {/* ACTIVE LINE */}
                <div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 transition-all duration-500"
                  style={{
                    height: `${((activeIndex + 1) / experienceData.length) * 100}%`,
                  }}
                />
              </div>

              {/* DOTS */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
                <div className="space-y-12 pt-24">
                  {experienceData.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToItem(index)}
                      className="flex items-center gap-6 text-left group w-full"
                    >
                      {/* DOT (PERFECTLY CENTERED) */}
                      <div
                        className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          activeIndex === index
                            ? "border-purple-400 bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.9)] scale-110"
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
                      <div className="pl-2">
                        <p
                          className={`text-sm font-semibold transition-all duration-500 ${
                            activeIndex === index
                              ? "text-white drop-shadow-[0_0_14px_rgba(168,85,247,0.9)]"
                              : "text-muted-foreground"
                          }`}
                        >
                          {exp.date}
                        </p>
                        <p
                          className={`text-xs transition-all duration-500 ${
                            activeIndex === index
                              ? "text-purple-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                              : "text-muted-foreground"
                          }`}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-32">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="scroll-mt-40"
              >
                <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
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
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
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
