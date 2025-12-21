"use client"

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-gray-100 px-4">
      <div className="max-w-6xl mx-auto py-16">

        <p className="text-center text-sm text-gray-400 mb-10">
          Feel free to reach out, I&apos;ll get back to you soon.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= LEFT CARD ================= */}
          <div className="bg-[#111111] rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Let&apos;s Connect
            </h2>

            <p className="text-gray-400 text-sm mb-8">
              Ready to start your project? Reach out through any of these channels.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919692544587"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#151515] hover:bg-[#1f1f1f] transition rounded-xl px-5 py-4 border border-gray-800 mb-10"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                📞
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-xs text-gray-400">+91 9692544587</p>
              </div>
            </a>

            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

            <div className="space-y-4">
              <SocialItem title="Instagram" desc="Follow my journey" />
              <SocialItem title="LinkedIn" desc="Professional network" />
              <SocialItem title="YouTube" desc="Watch my content" />
            </div>
          </div>

          {/* ================= RIGHT FORM (UI ONLY) ================= */}
          <div className="bg-[#111111] rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  disabled
                  className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  disabled
                  className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Email feature coming soon..."
                  disabled
                  className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-500 cursor-not-allowed resize-none"
                />
              </div>

              <button
                type="button"
                disabled
                className="bg-gray-700 text-gray-400 px-8 py-3 rounded-lg cursor-not-allowed"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialItem = ({ title, desc }) => (
  <div className="flex items-center gap-4 bg-[#151515] px-5 py-4 rounded-xl border border-gray-800">
    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
      🔗
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  </div>
)

export default Contact
