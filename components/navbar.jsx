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
    { id: "home", label: "Home", route: "/" },
    { id: "projects", label: "Projects", route: "/#projects" },
    { id: "about", label: "About", route: "/about" },
    { id: "experience", label: "Experience", route: "/experience" },
    { id: "contact", label: "Contact", route: "/contact" },
  ]

  /* ================= NAVIGATION ================= */
  const navigate = (item) => {
    setActive(item.id)
    setMobileOpen(false)

    if (item.route.startsWith("/#")) {
      router.push("/")
      setTimeout(() => {
        document
          .getElementById(item.route.replace("/#", ""))
          ?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      router.push(item.route)
    }
  }

  /* ================= ACTIVE FROM ROUTE ================= */
  useEffect(() => {
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

    indicator.style.left = `${itemRect.left - navRect.left + itemRect.width / 2 - 12}px`
  }, [active])

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="fixed top-10 left-0 right-0 z-40 hidden md:block">
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-10">

          {/* LOGO */}
          <button
            onClick={() => {
              setActive("home")
              router.push("/")
            }}
            className="text-white text-lg font-semibold"
          >
            PR
          </button>

          {/* CENTER NAV */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div
              ref={navRef}
              className="relative flex items-center gap-8 px-10 py-3 rounded-full
              bg-white/5 backdrop-blur-xl border border-white/10"
            >
              {/* SLIDER */}
              <span
                ref={indicatorRef}
                className="absolute -top-1 w-6 h-[3px] bg-white rounded-full
                transition-all duration-500"
              />

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  onClick={() => navigate(item)}
                  className={`text-sm ${
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
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden px-4 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold">TR</span>
          <button onClick={() => setMobileOpen(true)} className="text-white text-xl">
            ☰
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center p-4">
          <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#2a0f4d] to-[#120018] p-5">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-semibold">PR</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* MENU CARD */}
            <div className="bg-black/80 rounded-xl p-5 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item)}
                  className={`block w-full text-left text-sm ${
                    active === item.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* BOOK A CALL */}
              {/* <button className="w-full mt-4 bg-white/20 text-white py-2 rounded-full text-sm">
                Book a Call
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
