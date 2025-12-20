// Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Top nav spacer / heading message */}
        <p className="text-center text-sm text-gray-400 mb-10">
          Feel free to reach out, I'll get back to you soon.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left card */}
          <div className="bg-[#111111] rounded-2xl p-8 shadow-xl border border-gray-800">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Ready to start your project? Reach out through any of these channels.
            </p>

            {/* WhatsApp */}
            <div className="space-y-4 mb-10">
              <a
                href="https://wa.me/9692544587" // change number here
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-[#151515] hover:bg-[#1f1f1f] transition-colors rounded-xl px-5 py-4 border border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                    {/* WhatsApp icon (you can swap with react-icons) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.62-.92-2.219-.242-.58-.487-.502-.672-.512l-.573-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M20.52 3.48C18.24 1.2 15.24 0 12 0 5.373 0 0 5.373 0 12c0 2.12.553 4.19 1.6 6.02L0 24l6.12-1.6A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.24-1.2-6.24-3.48-8.52zM12 22.05c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-3.63.95.97-3.54-.25-.37A9.96 9.96 0 0 1 2 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.51-4.49 10.05-10 10.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-100">
                      WhatsApp
                    </p>
                    <p className="text-xs text-gray-400">+91 9692544587</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Follow Me
              </h3>
              <div className="space-y-4">
                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-[#151515] hover:bg-[#1f1f1f] transition-colors rounded-xl px-5 py-4 border border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                      {/* IG icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm9.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-100">
                        Instagram
                      </p>
                      <p className="text-xs text-gray-400">
                        Follow my journey
                      </p>
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-[#151515] hover:bg-[#1f1f1f] transition-colors rounded-xl px-5 py-4 border border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
                      {/* LinkedIn icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5H12.7v2.11h.06c.61-1.16 2.1-2.39 4.33-2.39 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-7.63c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24H8.34V8.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-100">
                        LinkedIn
                      </p>
                      <p className="text-xs text-gray-400">
                        Professional network
                      </p>
                    </div>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-[#151515] hover:bg-[#1f1f1f] transition-colors rounded-xl px-5 py-4 border border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white">
                      {/* YouTube icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.8-.9-1.6-.9-2-1C17.3 2.4 12 2.4 12 2.4h0s-5.3 0-8.6.3c-.4.1-1.2.1-2 1C.7 4.5.5 6.2.5 6.2S.3 8.2.3 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.9 2.5c.8.9 1.9.9 2.4 1 1.8.2 7.2.3 8.2.3 0 0 5.3 0 8.6-.3.4-.1 1.2-.1 2-1 .7-.8.9-2.5.9-2.5s.2-2 .2-4v-1.6c0-2-.2-4-.2-4zM9.8 14.6V7.8l6 3.4-6 3.4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-100">
                        YouTube
                      </p>
                      <p className="text-xs text-gray-400">
                        Watch my content
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="bg-[#111111] rounded-2xl p-8 shadow-xl border border-gray-800">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#050505] border border-gray-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-500 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#050505] border border-gray-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-500 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#050505] border border-gray-800 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-500 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
