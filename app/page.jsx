"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/TechStack"
 
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
    </main>
  )
}
