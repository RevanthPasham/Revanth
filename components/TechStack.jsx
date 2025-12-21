"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaNpm,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiPython,
  SiVercel,
  SiFigma,
} from "react-icons/si"

const techs = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "npm", icon: <FaNpm className="text-red-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
]

export default function TechStack() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.15, 0.45], [0.5, 1])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      
      {/* TRIANGLE */}
      <motion.div style={{ scale }} className="mb-8">
        <div className="triangle-glow" />
      </motion.div>

      <p className="text-sm tracking-widest text-muted-foreground mb-2">
        BETTER THAN YESTERDAY.
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-14">
        My Tech Stack
      </h2>

      {/* TECH CARDS */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-2 rounded-full
                       border border-white/10 bg-white/5 backdrop-blur
                       hover:border-yellow-400 transition"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
