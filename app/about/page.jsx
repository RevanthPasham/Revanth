"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { experienceData } from "@/data/about"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function AboutPage() {
  /* ---------------- STATE ---------------- */
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState([])
  const [aboutVisible, setAboutVisible] = useState(false)

  const aboutRef = useRef(null)
  const itemRefs = useRef([])

  /* ---------------- ABOUT ANIMATION ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAboutVisible(true),
      { threshold: 0.3 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    return () => observer.disconnect()
  }, [])

  /* ---------------- EXPERIENCE SCROLL SYNC ---------------- */
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
    <main className="pt-32">

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        ref={aboutRef}
        className="py-32 px-4 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-[420px_1fr] gap-20 items-center">

          {/* IMAGE */}
          <div
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
          >
            <p className="text-sm tracking-widest text-muted-foreground mb-4">
              MORE ABOUT ME
            </p>

            <div className="rounded-2xl overflow-hidden border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.35)]">
              <Image
                src="/me.jpg"
                alt="Rajesh"
                width={420}
                height={520}
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className={`transition-all duration-[1200ms] delay-150 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi there! I&apos;m{" "}
              <span className="text-purple-500">Rajesh</span>
            </h1>

            <div className="space-y-5 text-muted-foreground text-lg leading-7 max-w-[640px]">
              <p>
                I&apos;m Talagana Rajesh, a passionate web developer focused on
                building responsive, accessible, and performance-driven websites
                using React and Next.js.
              </p>
              <p>
                I love exploring new technologies, especially AI & ML, and
                integrating them into meaningful real-world applications.
              </p>
              <p>
                Every day I work toward becoming a better developer and building
                things that truly matter.
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-6 text-xl text-muted-foreground">
              <FaLinkedin className="hover:text-purple-500 transition" />
              <FaGithub className="hover:text-purple-500 transition" />
              <FaTwitter className="hover:text-purple-500 transition" />
              <FaEnvelope className="hover:text-purple-500 transition" />
            </div>

            {/* TAG BUTTONS */}
            <div className="flex gap-4 mt-10">
              <span className="px-6 py-2 rounded-full border border-muted hover:border-purple-500 transition">
                I Lift
              </span>
              <span className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                I Code
              </span>
              <span className="px-6 py-2 rounded-full border border-muted hover:border-purple-500 transition">
                I Vibin&apos;
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section
        id="experience"
        className="relative py-32 px-4 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A timeline of my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-20 items-start">

            {/* LEFT TIMELINE */}
            <div className="hidden md:block sticky top-0 h-screen">
              <div className="relative h-full flex">
                <div className="relative w-12 flex justify-center">
                  <div className="w-[2px] h-screen bg-gradient-to-b from-primary via-accent to-primary/30" />
                </div>

                <div className="space-y-10 ml-6 pt-32">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="flex items-center gap-4">
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

                      <div>
                        <p className={`text-sm font-semibold ${
                          activeIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}>
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

            {/* RIGHT CONTENT */}
            <div className="space-y-32 pt-32">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`scroll-mt-40 transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16"
                  }`}
                >
                  <div className="space-y-6 pb-20 border-b border-muted/20 max-w-[640px]">
                    <h3 className="text-3xl md:text-4xl font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-7">
                      {exp.description}
                    </p>
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
