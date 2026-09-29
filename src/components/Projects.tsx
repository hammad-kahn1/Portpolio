'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolio'

const subtitleIcons: Record<string, string> = {
  'Mobile Application': '📱',
  'Web Application': '🌐',
  'UI/UX Design': '🎨',
  'Software Engineering': '💻',
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="section-padding bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="label-tag mb-4 inline-flex">What I&apos;ve Built</span>
            <h2 className="section-title text-[#111111] mt-3">
              Featured <span className="italic">Projects</span>
            </h2>
          </div>
          <a
            href={projects[0]?.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
          >
            <Github size={14} />
            View All on GitHub
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const isHovered = hoveredId === project.id
            const isLarge = project.size === 'large'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -6 }}
                className={`card overflow-hidden cursor-default group ${
                  isLarge ? 'md:col-span-2' : ''
                }`}
              >
                {/* Image area */}
                <div
                  className="relative overflow-hidden bg-[#111111]"
                  style={{ height: isLarge ? '260px' : '200px' }}
                >
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl mb-3">
                      {subtitleIcons[project.subtitle] || '💻'}
                    </span>
                    <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
                      {project.subtitle}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Corner number */}
                  <div className="absolute top-4 left-4 font-display text-white/20 text-4xl font-bold leading-none">
                    0{project.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Subtitle tag */}
                  <span className="label-tag mb-4 inline-flex">{project.subtitle}</span>

                  <h3
                    className={`font-display text-xl font-bold mb-2 transition-colors duration-200 ${
                      isHovered ? 'text-[#111111]' : 'text-[#222222]'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#777777] text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="ml-auto p-2 rounded-full border border-[#e0ddd7] bg-[#f7f6f3] flex items-center justify-center cursor-pointer hover:bg-[#111111] hover:border-[#111111] hover:text-white transition-all duration-200 text-[#999999]"
                    >
                      <ArrowUpRight size={15} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
