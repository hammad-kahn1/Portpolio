'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'
import { skills } from '@/data/portfolio'

const marqueeItems = [
  'Flutter & Dart',
  'Cross-Platform Mobile',
  'React.js',
  'Next.js 15',
  'TypeScript',
  'Node.js & Express',
  'Python & Machine Learning',
  'Firebase & Cloud Functions',
  'Tailwind CSS',
  'Figma UI/UX',
  'REST & GraphQL',
  'Git & CI/CD',
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative overflow-hidden" ref={ref}>

      {/* ── Marquee Banner ───────────────────────── */}
      <div className="overflow-hidden border-y border-[#e0ddd7] dark:border-[rgba(196,179,147,0.2)] py-3.5 bg-black/[0.02] dark:bg-[rgba(196,179,147,0.03)] backdrop-blur-sm">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((skill, i) => (
            <span
              key={i}
              className="text-[0.72rem] font-semibold text-[#888888] dark:text-[#c4b393]/80 tracking-[0.16em] uppercase flex-shrink-0 flex items-center gap-4 hover:text-[#111111] dark:hover:text-[#eed788] transition-colors font-mono"
            >
              <span>{skill}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#eed788] opacity-70" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      {/* ── Section Content ────────────────────────────────── */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="label-tag mb-4 inline-flex">
              <Sparkles size={11} className="text-[#111111] dark:text-[#eed788]" />
              Stack &amp; Capabilities
            </span>
            <h2 className="section-title text-[#111111] dark:text-white mt-3 font-display">
              Technologies &amp; <span className="italic dark:text-[#c4b393]">Tools</span>
            </h2>
            <p className="text-[#555555] dark:text-[#a1a1aa] mt-3 text-sm leading-relaxed max-w-lg font-light">
              Disciplined engineering stack spanning mobile application development, full-stack web platforms, and machine intelligence.
            </p>
          </motion.div>

          {/* ── Category Rows ─────────── */}
          <div className="divide-y divide-[#e0ddd7] dark:divide-white/[0.08]">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-14 py-7 group hover:bg-black/[0.015] dark:hover:bg-[rgba(196,179,147,0.02)] px-4 rounded-2xl transition-colors"
              >
                {/* Category label */}
                <div className="w-36 flex-shrink-0">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#eed788] shadow-sm" />
                    <span className="text-xs font-bold text-[#111111] dark:text-stone-300 uppercase tracking-widest font-mono">
                      {group.category}
                    </span>
                  </div>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {group.items.map((skill, j) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: i * 0.08 + j * 0.03,
                        type: 'spring',
                        stiffness: 240,
                        damping: 18,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#555555] dark:text-stone-300 bg-white dark:bg-white/[0.04] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.25)] hover:border-[#111111] dark:hover:border-[#eed788] hover:text-[#111111] dark:hover:text-[#eed788] hover:bg-[#eeece8] dark:hover:bg-[rgba(196,179,147,0.1)] transition-all cursor-default font-mono"
                    >
                      {skill.name}
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
