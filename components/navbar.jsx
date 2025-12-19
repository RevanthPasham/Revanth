"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 glass rounded-full px-6 py-3 shadow-2xl">
        {/* Menu Items */}
        <div className="flex items-center gap-1 relative">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                activeSection === item.id ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50 -z-10 animate-pulse-glow" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className="ml-4 pl-4 border-l border-border">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
            Book a Call
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full max-w-md">
        <div className="glass rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
          <span className="text-sm font-semibold gradient-text">Portfolio</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 glass rounded-3xl p-4 shadow-2xl">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-medium shadow-lg">
              Book a Call
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
