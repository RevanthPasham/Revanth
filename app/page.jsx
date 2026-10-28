"use client"

import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/TechStack"
import AboutHome from "@/components/AboutHome"
import Experience from "@/components/experience"
import Achievements from "@/components/Achievements"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <TechStack />
      <AboutHome />
      <Experience />
      <Achievements />
    </div>
  )
}
