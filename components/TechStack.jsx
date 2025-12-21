"use client"

import { motion, useScroll, useTransform } from "framer-motion"

const techs = [
  "HTML","CSS","JavaScript","TypeScript","ReactJS","NextJS",
  "Tailwind CSS","Framer Motion","Shadcn","NodeJS","ExpressJS",
  "MongoDB","SQL","GitHub","Vercel","Postman","Java","npm",
  "Figma","Firebase","REST API","Python"
]

export default function TechStack() {
  const { scrollYProgress } = useScroll()

  // Triangle grows as you scroll
  const scale = useTransform(scrollYProgress, [0.15, 0.45], [0.5, 1])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">

      {/* TRIANGLE */}
      <motion.div
        style={{ scale }}
        className="relative mb-10"
      >
        <div className="triangle-glow" />
      </motion.div>

      {/* TEXT */}
      <p className="text-sm tracking-widest text-muted-foreground mb-2">
        BETTER THAN YESTERDAY.
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-14">
        My Tech Stack
      </h2>

      {/* TECH STACK */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full border border-white/10 bg-white/5
                       backdrop-blur text-sm hover:border-yellow-400
                       transition"
          >
            {tech}
          </span>
        ))}
      </div>

    </section>
  )
}
