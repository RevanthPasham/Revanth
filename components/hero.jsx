"use client"

import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[55vh] md:min-h-screen flex justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.25_0.08_285)] via-[oklch(0.18_0.06_270)] to-background -z-10" />
      <div className="stars -z-10" />

      {/* CONTENT */}
      <div className="container mx-auto px-4 pt-24 pb-0 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-5">

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Turning thoughts into{" "}
            <span className="gradient-text italic font-light">
              beautiful web stories
            </span>
          </h1>

          {/* NAME */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Hello, I&apos;m{" "}
            <span className="inline-flex items-center px-3 py-1 rounded-full
              bg-gradient-to-r from-primary/20 to-accent/20
              border border-primary/30 font-semibold">
              Revanth Pasham
            </span>
          </p>

          {/* TYPEWRITER */}
          <div className="flex justify-center">
            <div className="font-mono font-semibold text-sky-400
              text-base sm:text-lg md:text-2xl lg:text-3xl
              min-h-[3em] max-w-[90%]">
              <Typewriter
                words={["MERN Stack Developer", "AI Agents Builder"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1500}
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="pt-3">
            <Link href="/contact">
              <button className="px-7 py-3 rounded-full
                bg-gradient-to-r from-primary to-accent
                text-white font-semibold hover:scale-105 transition">
                Let&apos;s Connect
              </button>
            </Link>
          </div>

          {/* SCROLL MOUSE (MOBILE ONLY, SAFE POSITION) */}
          <div className="pt-4 flex justify-center md:hidden">
            <div className="w-6 h-10 rounded-full border-2 border-primary/60 flex justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
