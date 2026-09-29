'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Smartphone, Palette, Lightbulb, Package, ArrowUpRight } from 'lucide-react'
import { personalInfo, stats, aboutText } from '@/data/portfolio'

const passions = [
  { icon: Code2, label: 'Software Development' },
  { icon: Smartphone, label: 'Mobile App Development' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Lightbulb, label: 'Problem Solving' },
  { icon: Package, label: 'Building Digital Products' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="label-tag mb-4 inline-flex">Get to Know Me</span>
            <h2 className="section-title text-[#111111] mt-3">
              About <span className="italic">Me</span>
            </h2>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm py-2 px-4 flex items-center gap-2 hover:no-underline"
          >
            View GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left — Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Big profile card */}
            <div className="card p-8 mb-6">
              <div
                className="w-full h-44 rounded-xl bg-[#111111] flex items-center justify-center mb-6"
              >
                <span className="font-display text-6xl font-bold text-white/90 italic">HS</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111111] mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-[#999999] text-sm mb-4">
                Software Engineering Student • App Developer • UI/UX Enthusiast
              </p>
              <div className="flex items-center gap-2 text-sm text-[#555555]">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                Open to opportunities
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="card p-4 text-center cursor-default"
                >
                  <div className="font-display text-2xl font-bold text-[#111111] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#999999] text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text + Passions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 mb-10">
              {aboutText.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="text-[#555555] leading-relaxed text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Passions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xs font-semibold text-[#999999] tracking-widest uppercase mb-4">
                Passionate About
              </p>
              <div className="flex flex-wrap gap-2.5">
                {passions.map((passion, i) => (
                  <motion.div
                    key={passion.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.65 + i * 0.07, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="skill-tag"
                  >
                    <passion.icon size={13} className="text-[#555555]" />
                    {passion.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quote block */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-10 pl-6 border-l-2 border-[#111111]"
            >
              <p className="font-display italic text-lg text-[#333333]">
                &ldquo;I care just as much about how things look as how they work.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
