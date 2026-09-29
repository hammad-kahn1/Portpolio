'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Smartphone, Palette, Rocket } from 'lucide-react'
import { timeline } from '@/data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Smartphone,
  Palette,
  Rocket,
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="label-tag mb-4 inline-flex">My Journey</span>
          <h2 className="section-title text-[#111111] mt-3">
            Experience &amp; <span className="italic">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
            className="absolute left-6 top-0 bottom-0 w-px origin-top bg-[#e0ddd7]"
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon] || GraduationCap

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.14 }}
                  className="relative flex items-start gap-6 pl-4"
                >
                  {/* Icon dot */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-[#111111] flex items-center justify-center shadow-md"
                    >
                      <Icon size={18} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="card flex-1 p-6"
                  >
                    {/* Period badge */}
                    <span className="label-tag mb-3 inline-flex">
                      {item.period}
                    </span>

                    <h3 className="font-display text-lg font-bold text-[#111111] mb-1">
                      {item.role}
                    </h3>
                    <div className="text-sm text-[#777777] font-medium mb-3">
                      {item.org}
                    </div>
                    <p className="text-[#888888] text-sm leading-relaxed">
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
