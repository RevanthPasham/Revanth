"use client"

import { useState } from "react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section className="min-h-screen bg-black text-gray-100 px-4">
      <div className="max-w-6xl mx-auto py-20">

        <p className="text-center text-sm text-gray-400 mb-12">
          Feel free to reach out — I&apos;ll get back to you soon.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Let&apos;s Connect
            </h2>

            <p className="text-sm text-gray-400 mb-8">
              Reach me through social platforms or send a direct message.
            </p>

            <div className="space-y-4">
              <SocialItem
                icon={<FaInstagram />}
                title="Instagram"
                desc="Follow my journey"
                link="https://www.instagram.com/____r_e_v_a_n_t_h_____?igsh=b3lpN2U2eG5qNnh0&utm_source=qr"
              />

              <SocialItem
                icon={<FaLinkedin />}
                title="LinkedIn"
                desc="Professional profile"
                link="https://www.linkedin.com/in/revanth-pasham-5587052b6"
              />

              <SocialItem
                icon={<FaGithub />}
                title="GitHub"
                desc="View my projects"
                link="https://github.com/RevanthPasham"
              />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  ❌ Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

/* SOCIAL ITEM COMPONENT */
const SocialItem = ({ icon, title, desc, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4 bg-[#151515] px-5 py-4 rounded-xl border border-gray-800 hover:border-yellow-400 transition"
  >
    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-lg">
      {icon}
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  </a>
)
