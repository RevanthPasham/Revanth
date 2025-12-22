"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { experienceData } from "@/data/experience"

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

/* 🔹 ICON MAP */
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

export default function ExperiencePage() {
  const cardsRef = useRef([])
  const [visible, setVisible] = useState([])
  const [activeSlide, setActiveSlide] = useState(0)


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
              ${visible.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
              }`}
          >
            <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">

              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full p-2"
                      sizes="(max-width: 768px) 56px, 64px"
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
              <div className="flex flex-wrap gap-4 mb-10">
                {exp.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full
                               border border-border bg-background/50 backdrop-blur
                               hover:border-primary transition"
                  >
                    <span className="text-lg">{techIcons[tech]}</span>
                    <span className="text-sm">{tech}</span>
                  </div>
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
                        className="relative h-[180px] lg:h-[200px] rounded-xl overflow-hidden border border-border bg-black/20"
                      >
                        <Image
                          src={img}
                          alt={`Preview ${i + 1}`}
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 1024px) 33vw, 300px"
                        />
                      </div>
                    ))}
                  </div>

                  {/* MOBILE SLIDER */}
                 {/* MOBILE SLIDER */}
<div className="md:hidden mt-6">
  <div
    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
    onScroll={(e) => {
      const scrollLeft = e.target.scrollLeft
      const width = e.target.firstChild?.clientWidth || 1
      setActiveSlide(Math.round(scrollLeft / width))
    }}
  >
    {exp.images.map((img, i) => (
      <div
        key={i}
        className="relative min-w-[80%] h-[260px] rounded-xl
                   overflow-hidden border border-border
                   bg-black/20 snap-center"
      >
        <Image
          src={img}
          alt={`Preview ${i + 1}`}
          fill
          className="object-contain p-4"
          sizes="80vw"
        />
      </div>
    ))}
  </div>

  {/* DOT INDICATORS */}
  <div className="flex justify-center gap-2 mt-4">
    {exp.images.map((_, i) => (
      <span
        key={i}
        className={`h-2 w-2 rounded-full transition-all ${
          activeSlide === i
            ? "bg-primary scale-110"
            : "bg-muted"
        }`}
      />
    ))}
  </div>
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
