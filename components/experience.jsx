"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { experienceData } from "@/data/experience"

export default function ExperiencePage() {
  const cardsRef = useRef([])
  const [visible, setVisible] = useState([])

  /* SCROLL REVEAL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          if (entry.isIntersecting) {
            setVisible((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            )
          }
        })
      },
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background pt-44 px-4">

      {/* PAGE HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <span className="inline-block px-6 py-2 rounded-full bg-secondary/40 text-sm mb-6">
          Professional Experience
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Work Experience
        </h1>

        <p className="text-muted-foreground text-lg">
          Building impactful solutions that transform industries
        </p>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="max-w-6xl mx-auto space-y-24">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                visible.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
          >
            <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">

              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{exp.company}</h2>
                    <p className="text-primary">{exp.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} /> {exp.location}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground text-lg leading-7 mb-8 max-w-4xl">
                {exp.description}
              </p>

              {/* HIGHLIGHTS */}
              <ul className="space-y-3 mb-10">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-3 mb-10">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-border text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* PLATFORM PREVIEW */}
              {exp.images?.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">
                    🌐 Platform Preview
                  </h3>

                  {/* DESKTOP GRID */}
                  <div className="hidden md:grid grid-cols-3 gap-6">
                    {exp.images.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden border border-border"
                      >
                        <Image
                          src={img}
                          alt={`Preview ${i + 1}`}
                          width={800}
                          height={500}
                          className="object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* MOBILE SLIDER */}
                  <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {exp.images.map((img, i) => (
                      <div
                        key={i}
                        className="min-w-[85%] snap-center rounded-xl overflow-hidden border border-border"
                      >
                        <Image
                          src={img}
                          alt={`Preview ${i + 1}`}
                          width={800}
                          height={500}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VISIT BUTTON */}
              {exp.website && (
                <div className="mt-10 flex justify-end">
                  <a
                    href={exp.website}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:scale-105 transition"
                  >
                    Visit {exp.company}
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
