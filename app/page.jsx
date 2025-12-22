"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/TechStack"
import page from "@/app/about/page"
import Experience from "@/components/experience"
import AboutHome from "@/components/AboutHome"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <AboutHome />
      <Experience />
    </main>
  )
}
