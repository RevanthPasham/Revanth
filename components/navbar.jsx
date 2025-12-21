"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  /* PAGE + SCROLL HANDLING */
  const navigate = (id) => {
    setIsMenuOpen(false)

    if (id === "about") {
      router.push("/about")
      setActiveSection("about")
      return
    }

    // Navigate to home first if not already there
    if (pathname !== "/") {
      router.push(`/#${id}`)
      return
    }

    // Smooth scroll on home page
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  /* ACTIVE SECTION ON SCROLL (HOME PAGE ONLY) */
  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120

      for (const item of menuItems) {
        const el = document.getElementById(item.id)
        if (!el) continue

        const top = el.offsetTop
        const height = el.offsetHeight

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(item.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  /* SET ACTIVE PAGE */
  useEffect(() => {
    if (pathname === "/about") {
      setActiveSection("about")
    }
  }, [pathname])

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-2 glass rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-1 relative">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-500
                ${activeSection === item.id
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50 -z-10 animate-pulse-glow" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="ml-4 pl-4 border-l border-border">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium shadow-lg shadow-primary/30 hover:scale-105 transition">
            Book a Call
          </button>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-md">
        <div className="glass rounded-full px-6 py-3 shadow-2xl flex justify-between items-center">
          <span className="gradient-text font-semibold">Portfolio</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 glass rounded-3xl p-4 shadow-2xl">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full text-left px-5 py-3 rounded-xl transition
                  ${activeSection === item.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                    : "text-muted-foreground hover:bg-secondary/50"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

    </nav>
  )
}
