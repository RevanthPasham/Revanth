"use client"

import { useState } from "react"

export default function Hero() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.25_0.08_285)] via-[oklch(0.18_0.06_270)] to-background -z-10" />

      {/* Stars Background */}
      <div className="stars -z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted-foreground animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            New • Project Launched →
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight text-balance animate-slide-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
            onAnimationEnd={(e) => (e.target.style.opacity = "1")}
          >
            Turning thoughts into <span className="gradient-text italic font-light">beautiful web stories</span>
          </h1>

          {/* Subtitle with Profile Image Interaction */}
          <div
            className="flex flex-col items-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
            onAnimationEnd={(e) => (e.target.style.opacity = "1")}
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Hello, I'm{" "}
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-foreground font-semibold cursor-pointer hover:scale-105 transition-transform">
                Alex Morgan
              </span>{" "}
              — A Full Stack Developer
            </p>

            {/* Profile Image */}
            <div
              className={`transition-all duration-700 ${showProfile ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              <img
                src="/professional-developer-portrait.png"
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/30"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
            onAnimationEnd={(e) => (e.target.style.opacity = "1")}
          >
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Let's Connect
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              alex@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
