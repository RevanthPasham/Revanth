"use client"

import { useEffect, useRef, useState } from "react"
import { experienceData } from "@/data/about"

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState([])
  const itemRefs = useRef([])

  /* ---------------- INTERSECTION OBSERVER ---------------- */
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
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-32">
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Experience
            </h2>
            <p className="text-muted-foreground">
              A timeline of my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-20">

            {/* ================= DESKTOP TIMELINE ================= */}
            <div className="hidden md:block sticky top-0 h-screen">
              <div className="relative h-full flex">
                <div className="relative w-12 flex justify-center">
                  <div className="w-[2px] h-screen bg-purple-500/40" />
                </div>

                <div className="space-y-10 ml-6 pt-32">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                        ${
                          activeIndex === index
                            ? "bg-purple-500 border-purple-500"
                            : "border-muted"
                        }`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">{exp.date}</p>
                        <p className="text-xs text-muted-foreground">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="space-y-28">

              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`transition-all duration-700
                  ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-12"
                  }`}
                >

                  {/* ================= MOBILE : ONLY VERTICAL LINE ================= */}
                {/* ================= MOBILE ================= */}
<div className="md:hidden grid grid-cols-[16px_1fr] gap-4">

  {/* LEFT: DOT + LINE */}
  <div className="flex flex-col items-center">
    <span className="w-3 h-3 rounded-full bg-purple-500 mb-2" />
    <span className="w-[2px] h-16 bg-purple-500/70" />
  </div>

  {/* RIGHT CONTENT */}
  <div className="space-y-1">
    {exp.date && (
      <p className="text-sm text-purple-400 font-semibold">
        {exp.date}
      </p>
    )}

    {exp.role && (
      <h3 className="text-2xl font-bold">
        {exp.role}
      </h3>
    )}

    {(exp.organization || exp.location) && (
      <p className="text-sm text-muted-foreground">
        {exp.organization}
        {exp.organization && exp.location && " • "}
        {exp.location}
      </p>
    )}
  </div>
</div>


                  {/* ================= DESCRIPTION (NO LINE) ================= */}
                  <div className="md:pl-0 pl-6 mt-4 space-y-4 border-b border-muted/20 pb-12 max-w-[640px]">

                    {exp.description && (
                      <p className="text-muted-foreground leading-7">
                        {exp.description}
                      </p>
                    )}

                    {exp.achievements?.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.achievements.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {exp.techStack?.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-2">
                        {exp.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-1 text-xs rounded-full border border-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
