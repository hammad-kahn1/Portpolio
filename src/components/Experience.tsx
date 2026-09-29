'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Smartphone, Palette, Rocket, Award, Sparkles } from 'lucide-react'
import { timeline } from '@/data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Smartphone,
  Palette,
  Rocket,
  Award,
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label-tag mb-4 inline-flex">
            <Sparkles size={11} className="text-amber-500 dark:text-amber-400" />
            Milestones & Trajectory
          </span>
          <h2 className="section-title text-stone-900 dark:text-white mt-3">
            Academic &amp; <span className="italic text-gold-gradient">Professional Journey</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mt-3 max-w-lg text-sm font-light leading-relaxed">
            Key academic milestones, international certification, and ongoing engineering initiatives.
          </p>
        </motion.div>

        {/* Timeline Spine */}
        <div className="relative">
          {/* Vertical glowing line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
            className="absolute left-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-amber-400 via-yellow-500 to-transparent"
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon] || GraduationCap

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
                  className="relative flex items-start gap-6 pl-4"
                >
                  {/* Glowing icon node */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-12 h-12 rounded-2xl bg-white dark:bg-[#090913] border border-amber-500/25 dark:border-amber-500/30 flex items-center justify-center shadow-sm dark:shadow-[0_0_20px_rgba(245,158,11,0.25)] text-amber-600 dark:text-amber-400"
                    >
                      <Icon size={18} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="card flex-1 p-6 sm:p-7"
                  >
                    {/* Period badge */}
                    <span className="label-tag mb-3 inline-flex text-xs">
                      {item.period}
                    </span>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-white mb-1">
                      {item.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-amber-700 dark:text-amber-300 font-semibold mb-3">
                      {item.org}
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
