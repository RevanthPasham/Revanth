"use client"

import { Trophy, Medal, Award, Sparkles, CheckCircle2 } from "lucide-react"
import { achievementsData } from "@/data/about"

const getIcon = (id) => {
  switch (id) {
    case 1:
      return <Trophy className="w-8 h-8 text-yellow-400" />
    case 2:
      return <Medal className="w-8 h-8 text-purple-400" />
    case 3:
      return <Award className="w-8 h-8 text-cyan-400" />
    default:
      return <Sparkles className="w-8 h-8 text-primary" />
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> Recognitions &amp; Milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Honors &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Proven problem-solving skills, hackathon placements, and continuous technical growth.
          </p>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`relative group rounded-3xl p-8 bg-gradient-to-b ${item.color} 
                          border ${item.borderColor} backdrop-blur-xl 
                          hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300
                          flex flex-col justify-between overflow-hidden shadow-xl`}
            >
              {/* CORNER GLOW */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />

              <div>
                {/* ICON & BADGE */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.id)}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/10 ${item.textColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* TITLE & EVENT */}
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className={`text-sm font-medium ${item.textColor} mb-1`}>
                  {item.event}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {item.organization} • {item.year}
                </p>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* FOOTER VERIFIED BADGE */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 size={14} className={item.textColor} />
                <span>Verified accomplishment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
