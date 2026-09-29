'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── Skill data ─────────────────────────────────────────────────
// Honest list — only what is confirmed from GitHub/LinkedIn profile
const skillGroups = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'React Native', 'Android'],
  },
  {
    category: 'Web',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
]

const marqueeItems = skillGroups.flatMap((g) => g.items)

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="bg-white" ref={ref}>

      {/* ── Scrolling marquee banner ───────────────────────── */}
      <div className="overflow-hidden border-y border-[#eeece8] py-3.5 bg-[#fafaf9]">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((skill, i) => (
            <span
              key={i}
              className="text-xs font-semibold text-[#cccccc] tracking-[0.14em] uppercase flex-shrink-0"
            >
              {skill}
              <span className="text-[#e5e5e5] ml-5" aria-hidden>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Section content ────────────────────────────────── */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="label-tag mb-4 inline-flex">Technologies</span>
            <h2 className="section-title text-[#111111] mt-3">
              What I Work <span className="italic">With</span>
            </h2>
            <p className="text-[#999999] mt-4 text-sm leading-relaxed max-w-md">
              A curated set of tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>

          {/* ── Clean category rows — no card grid ─────────── */}
          <div className="divide-y divide-[#f0ede8]">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-6 group"
              >
                {/* Category label */}
                <div className="w-24 flex-shrink-0 pt-0.5">
                  <span className="text-[0.65rem] font-semibold text-[#bbbbbb] uppercase tracking-widest">
                    {group.category}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: i * 0.08 + j * 0.04,
                        type: 'spring',
                        stiffness: 220,
                        damping: 18,
                      }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="skill-tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
