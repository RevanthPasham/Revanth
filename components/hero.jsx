"use client"


import { Typewriter } from "react-simple-typewriter"

import { useState, useEffect, useRef } from "react"

export default function Hero() {
  const [showProfile, setShowProfile] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    // Run only on mobile
    if (window.innerWidth >= 768) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProfile(true)
        }
      },
      { threshold: 0.4 }
    )

    if (heroRef.current) observer.observe(heroRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.25_0.08_285)] via-[oklch(0.18_0.06_270)] to-background -z-10" />

      {/* Stars */}
      <div className="stars -z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted-foreground animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            New • Project Launched →
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turning thoughts into{" "}
            <span className="gradient-text italic font-light">
              beautiful web stories
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className="flex flex-col items-center gap-4"
            onMouseEnter={() => window.innerWidth >= 768 && setShowProfile(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setShowProfile(false)}
          >

               <div className="mt-6 space-y-3">

      {/* NAME LINE */}
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
        Hello, I'm{" "}
        <span
          className="inline-flex items-center px-3 sm:px-4 py-1
                     rounded-full bg-gradient-to-r from-primary/20 to-accent/20
                     border border-primary/30 font-semibold
                     text-sm sm:text-base md:text-lg"
        >
          Revanth Pasham
        </span>
      </p>

      {/* TYPING ROLE */}
      <p
        className="
          min-h-[1.6em]
          font-mono font-semibold text-sky-400
          text-lg sm:text-xl md:text-2xl lg:text-3xl
        "
      >
        <Typewriter
          words={["MERN Stack Developer", "AI Agents Builder"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={45}
          delaySpeed={1500}
        />
      </p>

    </div>
   
           
            {/* Profile Image
            <div
              className={`transition-all duration-700 ${
                showProfile
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <img
                src="/professional-developer-portrait.png"
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/30"
              />
            </div> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition">
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
