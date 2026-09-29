'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Code2, Smartphone, Globe, Wrench,
  Braces, FileCode, Terminal, Coffee, Cpu,
  Layers, RefreshCw, Zap, Code, Palette,
  GitBranch, Github, Figma,
} from 'lucide-react'
import { skills } from '@/data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  Code2, Smartphone, Globe, Wrench, Braces, FileCode, Terminal,
  Coffee, Cpu, Layers, RefreshCw, Zap, Code, Palette, GitBranch,
  Github, Figma,
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="label-tag mb-4 inline-flex">What I Work With</span>
          <h2 className="section-title text-[#111111] mt-3">
            Skills &amp; <span className="italic">Technologies</span>
          </h2>
          <p className="text-[#999999] mt-4 max-w-xl text-sm leading-relaxed">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid by category */}
        <div className="space-y-12">
          {skills.map((category, catIdx) => {
            const CatIcon = iconMap[category.icon] || Code2
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#111111] flex items-center justify-center flex-shrink-0">
                    <CatIcon size={15} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#555555] tracking-widest uppercase">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-[#e0ddd7]" />
                </div>

                {/* Skill cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.items.map((skill, skillIdx) => {
                    const SkillIcon = iconMap[skill.icon] || Code2
                    const isHovered = hoveredSkill === `${catIdx}-${skillIdx}`
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.35,
                          delay: catIdx * 0.1 + skillIdx * 0.05,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        onMouseEnter={() => setHoveredSkill(`${catIdx}-${skillIdx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className={`card p-4 cursor-default transition-all duration-250 ${
                          isHovered ? 'border-[#111111]' : ''
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200 ${
                            isHovered ? 'bg-[#111111]' : 'bg-[#f7f6f3]'
                          }`}
                        >
                          <SkillIcon
                            size={16}
                            className={`transition-colors duration-200 ${
                              isHovered ? 'text-white' : 'text-[#555555]'
                            }`}
                          />
                        </div>
                        <div className="text-sm font-semibold text-[#111111] mb-0.5">{skill.name}</div>
                        <div className="text-xs text-[#999999] leading-snug">{skill.desc}</div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
