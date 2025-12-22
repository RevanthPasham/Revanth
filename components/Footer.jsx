import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 px-6 pt-16">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

        {/* ================= LEFT ================= */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Revanth
          </h3>

          <p className="text-sm leading-relaxed">
            Building web solutions where clean design and powerful
            functionality work in harmony.
          </p>

          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com/RevanthPasham"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>

            <a
              href="www.linkedin.com/in/revanth-pasham-5587052b6"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* ================= WEBSITE ================= */}
        <div>
          <h4 className="text-white font-medium mb-4">
            The Website
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* ================= PROJECTS ================= */}
        {/* <div>
          <h4 className="text-white font-medium mb-4">
            Projects
          </h4>

          <ul className="space-y-2 text-sm">
            <li>GetMaterial</li>
            <li>OpenRoom</li>
            <li>AgroVision</li>
            <li>Lemon Studio</li>
          </ul>
        </div> */}

        {/* ================= CONTACT ================= */}
        <div>
          <p className="text-sm leading-relaxed mb-4">
            I'm open to freelance projects, full-time roles,
            or collaborative ideas. Let’s build something meaningful.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href="mailto:talaganarajesh@gmail.com"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <Mail size={16} />
              pashamrevanth541@gmail.com
            </a>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm">
        © {year} Revanth. All rights reserved.
      </div>
    </footer>
  )
}
