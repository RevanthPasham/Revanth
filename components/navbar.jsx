"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [active, setActive] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)

  const navRef = useRef(null)
  const indicatorRef = useRef(null)
  const itemRefs = useRef({})

  const menuItems = [
    { id: "home", label: "Home", type: "page", route: "/" },
    { id: "projects", label: "Projects", type: "section", target: "projects" },
    { id: "about", label: "About", type: "page", route: "/about" },
    { id: "experience", label: "Experience", type: "page", route: "/experience" },
    { id: "contact", label: "Contact", type: "page", route: "/contact" },
  ]

  /* ================= ROUTE → ACTIVE ================= */
  useEffect(() => {
    if (pathname === "/") setActive("home")
    else if (pathname === "/about") setActive("about")
    else if (pathname === "/experience") setActive("experience")
    else if (pathname === "/contact") setActive("contact")
  }, [pathname])

  /* ================= PROJECTS SECTION DETECT ================= */
  useEffect(() => {
    if (pathname !== "/") return

    const onScroll = () => {
      const el = document.getElementById("projects")
      if (!el) return

      const rect = el.getBoundingClientRect()
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActive("projects")
      } else {
        setActive("home")
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  /* ================= NAVIGATE ================= */
  const navigate = (item) => {
    setMobileOpen(false) // ✅ ALWAYS CLOSE MENU

    if (item.type === "page") {
      router.push(item.route)
      return
    }

    // section (projects)
    if (pathname !== "/") {
      router.push("/")
      setTimeout(() => {
        document
          .getElementById(item.target)
          ?.scrollIntoView({ behavior: "smooth" })
      }, 200)
    } else {
      document
        .getElementById(item.target)
        ?.scrollIntoView({ behavior: "smooth" })
    }
  }

  /* ================= SLIDER ================= */
  useEffect(() => {
    const activeEl = itemRefs.current[active]
    const navEl = navRef.current
    const indicator = indicatorRef.current

    if (!activeEl || !navEl || !indicator) return

    const elRect = activeEl.getBoundingClientRect()
    const navRect = navEl.getBoundingClientRect()

    indicator.style.left =
      `${elRect.left - navRect.left + elRect.width / 2 - 12}px`
  }, [active])

  return (
    <nav className="fixed top-10 left-0 right-0 z-50">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* LOGO */}
        <button
          onClick={() => {
            setMobileOpen(false)
            router.push("/")
          }}
          className="text-white font-semibold text-lg"
        >
          TR
        </button>

        {/* ================= DESKTOP ================= */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <div
            ref={navRef}
            className="relative flex items-center gap-8 px-10 py-3
            rounded-full bg-white/5 backdrop-blur-xl
            border border-white/10 shadow-xl"
          >
            <span
              ref={indicatorRef}
              className="absolute -top-1 w-6 h-[3px]
              rounded-full bg-white
              transition-all duration-300"
            />

            {menuItems.map((item) => (
              <button
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                onClick={() => navigate(item)}
                className={`text-sm font-medium transition
                  ${
                    active === item.id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>

          {mobileOpen && (
            <div className="absolute right-4 mt-4 w-64 rounded-2xl
              bg-black/90 backdrop-blur-xl border border-white/10
              shadow-2xl overflow-hidden">

              <div className="flex flex-col py-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item)}
                    className={`px-6 py-3 text-left text-sm transition
                      ${
                        active === item.id
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* OPTIONAL BUTTON */}
              <div className="p-4">
                <button className="w-full rounded-full bg-white/10 text-white py-2 text-sm">
                  Book a Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
