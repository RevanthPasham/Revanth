"use client"

import { useEffect, useRef, useState } from "react"
import { experienceData } from "@/data/about"
import { FaGithub, FaLinkedin } from "react-icons/fa"


export default function page() {
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
    <main className="pt-30">

      {/* ================= ABOUT HERO ================= */}
     <section className="relative pt-4 pb-24 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2
                  gap-8 md:gap-14 lg:gap-50 items-center">

    {/* IMAGE */}
    <div className="flex justify-center md:justify-end pr-0 lg:pr-4">
      <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-purple-500 to-pink-500">
        <img
          src="http://media.gettyimages.com/id/1027987804/vector/error-message.jpg?s=612x612&w=0&k=20&c=Fz3AdQ8XmvUd3WvxwTDy78UgBY488cQ7PtZSiW-E5l4="
          alt="Revanth Pasham"
          className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded-2xl"
        />
      </div>
    </div>


    {/* CONTENT */}
    <div className="space-y-5 text-center md:text-left">

      <p className="text-xs tracking-widest text-muted-foreground">
        MORE ABOUT ME
      </p>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Hi there! I&apos;m{" "}
        <span className="text-purple-500">Revanth</span>
      </h1>

      <p className="text-muted-foreground leading-7 max-w-xl">
        I&apos;m a passionate web developer focused on building modern,
        user-friendly web experiences. I specialize in React, Next.js,
        and MERN stack applications, while exploring AI agents and automation.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center md:justify-start gap-6 pt-3">
        <a
          href="https://www.linkedin.com/in/revanth-pasham-5587052b6"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground text-2xl hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/revanthpasham"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground text-2xl hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
        <span className="px-6 py-2 rounded-full border border-purple-500 text-purple-400">
          I Lift
        </span>
        <span className="px-6 py-2 rounded-full border border-purple-500 bg-purple-500/10 text-purple-400">
          I Code
        </span>
        <span className="px-6 py-2 rounded-full border border-purple-500 text-purple-400">
          I Vibin&apos;
        </span>
      </div>

    </div>
  </div>
</section>

{/* ================= EXPERIENCE ================= */}
<section className="relative py-12 px-4">
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

          {/* 🔧 FIXED ALIGNMENT HERE */}
          <div className="ml-6 pt-32">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="flex gap-4 mb-28 last:mb-0"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
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
            className={`transition-all duration-700 ${
              visibleItems.includes(index)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >

            {/* ================= MOBILE HEADER (UNCHANGED) ================= */}
            <div className="md:hidden grid grid-cols-[16px_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-purple-500 mb-2" />
                <span className="w-[2px] h-16 bg-purple-500/70" />
              </div>

              <div className="space-y-1">
                <p className="text-sm text-purple-400 font-semibold">
                  {exp.date}
                </p>
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.organization}
                  {exp.organization && exp.location && " • "}
                  {exp.location}
                </p>
              </div>
            </div>

            {/* ================= DESCRIPTION ================= */}
            <div className="md:pl-0 pl-6 mt-4 space-y-4 border-b border-muted/20 pb-12 max-w-[640px]">
              <p className="text-muted-foreground leading-7">
                {exp.description}
              </p>

              {exp.achievements?.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
         
       {exp.techStack?.length > 0 && (
  <div className="flex flex-wrap gap-4 pt-3">
    {exp.techStack.map((tech, i) => {
      const Icon = tech.icon
      return (
        <div
          key={i}
          title={tech.name}
          className="flex items-center gap-2 px-4 py-1.5
                     rounded-full border border-white/10
                     bg-white/5 backdrop-blur
                     hover:bg-white/10 transition"
        >
          <Icon className={`text-lg ${tech.color}`} />
          <span className="text-xs text-gray-300">
            {tech.name}
          </span>
        </div>
      )
    })}
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
