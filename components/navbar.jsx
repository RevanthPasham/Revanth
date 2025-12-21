"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [active, setActive] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)
  const manualNav = useRef(false) // 🔑 IMPORTANT

  const navRef = useRef(null)
  const indicatorRef = useRef(null)
  const itemRefs = useRef({})

  const menuItems = [
    { id: "home", label: "Home", route: "/" },
    { id: "projects", label: "Projects", route: "/#projects" },
    { id: "about", label: "About", route: "/about" },
    { id: "experience", label: "Experience", route: "/experience" },
    { id: "contact", label: "Contact", route: "/contact" },
  ]

  /* ================= NAVIGATION ================= */
  const navigate = (item) => {
    manualNav.current = true       // 🔒 lock slider
    setActive(item.id)
    setMobileOpen(false)

    if (item.route.startsWith("/#")) {
      if (pathname !== "/") {
        router.push(item.route)
      } else {
        setTimeout(() => {
          document
            .getElementById(item.route.replace("/#", ""))
            ?.scrollIntoView({ behavior: "smooth" })

          // 🔓 unlock after scroll settles
          setTimeout(() => {
            manualNav.current = false
          }, 400)
        }, 50)
      }
    } else {
      router.push(item.route)
      setTimeout(() => {
        manualNav.current = false
      }, 200)
    }
  }

  /* ================= ACTIVE FROM ROUTE ================= */
  useEffect(() => {
    if (manualNav.current) return

    if (pathname === "/") setActive("home")
    if (pathname === "/about") setActive("about")
    if (pathname === "/experience") setActive("experience")
    if (pathname === "/contact") setActive("contact")
  }, [pathname])

  /* ================= SLIDER POSITION ================= */
  useEffect(() => {
    const activeEl = itemRefs.current[active]
    const navEl = navRef.current
    const indicator = indicatorRef.current

    if (!activeEl || !navEl || !indicator) return

    const itemRect = activeEl.getBoundingClientRect()
    const navRect = navEl.getBoundingClientRect()

    const left =
      itemRect.left - navRect.left + itemRect.width / 2 - 12

    indicator.style.left = `${left}px`
  }, [active])

  return (
    <nav className="fixed top-10 left-0 right-0 z-50">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-10">

        {/* LOGO */}
        <button
          onClick={() => {
            manualNav.current = true
            setActive("home")
            router.push("/")
            setTimeout(() => (manualNav.current = false), 200)
          }}
          className="ml-4 text-white text-lg font-semibold
          focus:outline-none focus-visible:outline-none"
        >
          TR
        </button>

        {/* ================= DESKTOP ================= */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <div
            ref={navRef}
            className="relative flex items-center gap-8
            px-10 py-3 rounded-full
            bg-white/5 backdrop-blur-xl
            border border-white/10 shadow-xl"
          >
            {/* SINGLE SLIDER */}
            <span
              ref={indicatorRef}
              className="absolute -top-1
              w-6 h-[3px] rounded-full bg-white
              shadow-[0_0_10px_rgba(255,255,255,0.9)]
              transition-all duration-500 ease-out"
            />

            {menuItems.map((item) => (
              <button
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                onClick={() => navigate(item)}
                className={`text-sm font-medium transition-colors duration-300
                  focus:outline-none focus:ring-0
                  focus-visible:outline-none focus-visible:ring-0
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
        <div className="md:hidden mr-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-xl
            focus:outline-none focus-visible:outline-none"
          >
            ☰
          </button>

          {mobileOpen && (
            <div className="absolute right-4 mt-4 w-56
              rounded-2xl bg-white/5 backdrop-blur-xl
              border border-white/10 shadow-2xl overflow-hidden">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item)}
                  className={`w-full text-left px-5 py-3 text-sm transition
                    ${
                      active === item.id
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}
