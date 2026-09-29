'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { Github, ExternalLink, ArrowUpRight, Lock, Eye } from 'lucide-react'
import { projects } from '@/data/portfolio'
import ProjectDetailsModal, { ProjectModalData } from './ProjectDetailsModal'

const subtitleIcons: Record<string, string> = {
  'Mobile Application':    '📱',
  'Web Application':       '🌐',
  'UI/UX Design':          '🎨',
  'Software Engineering':  '💻',
  'GitHub Project':        '🐙',
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [modalProject, setModalProject] = useState<ProjectModalData | null>(null)

  const openModal = useCallback((project: typeof projects[0]) => {
    setModalProject({
      title:        project.title,
      subtitle:     project.subtitle,
      description:  project.description,
      tech:         project.tech,
      github:       project.github,
      demo:         project.demo,
      repoName:     project.repoName || undefined,
      isPrivate:    project.isPrivate,
    })
  }, [])

  const closeModal = useCallback(() => setModalProject(null), [])

  return (
    <>
      <section id="projects" className="section-padding bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

          {/* ── Header ─────────────────────────────────────────── */}
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
              id="view-all-github-btn"
              href="https://github.com/habibashah0789-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
            >
              <Github size={14} />
              View GitHub Repository
            </a>
          </motion.div>

          {/* ── Projects Grid ────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => {
              const isHovered = hoveredId === project.id
              const isLarge   = project.size === 'large'
              const isAcademy = project.id === 1 // Academy App (private)

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
                  {/* ── Image / visual area (Phone Mockup) ─── */}
                  <div
                    className={`relative overflow-hidden flex items-end justify-center pt-8 px-8 ${
                      isAcademy
                        ? 'bg-gradient-to-br from-pink-50 via-[#fcfcfc] to-violet-50 border-b border-pink-100/50'
                        : 'bg-[#f0ede8] border-b border-[#e0ddd7]'
                    }`}
                    style={{ height: isLarge ? '320px' : '280px' }}
                  >
                    {/* Academy App — gradient accent line at top */}
                    {isAcademy && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-violet-400" />
                    )}

                    {/* Private badge in corner */}
                    {isAcademy && project.isPrivate && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-flex items-center gap-1 text-[0.65rem] text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-2 py-0.5 font-bold uppercase tracking-wide shadow-sm">
                          <Lock size={8} /> Private
                        </span>
                      </div>
                    )}

                    {/* 📱 The Phone Mockup */}
                    <motion.div
                      initial={{ y: 20 }}
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="relative rounded-[32px] overflow-hidden flex-shrink-0 z-10"
                      style={{
                        width: '160px',
                        height: '300px', // slightly taller so bottom cuts off at card edge
                        background: '#111111',
                        border: '1.5px solid rgba(0,0,0,0.12)',
                        boxShadow: '0 -10px 40px rgba(0,0,0,0.1)',
                        marginBottom: '-20px', // Push bottom edge down to clip
                      }}
                    >
                      {/* Notch */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full z-10 bg-[#222222]" />

                      {/* Screen grid pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />

                      {/* Content inside phone screen */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 px-5">
                        {/* Huge project number */}
                        <div className="font-display text-white/[0.15] text-6xl font-bold leading-none mb-6">
                          {`0${project.id}`}
                        </div>
                        
                        {/* Title inside phone */}
                        <div className="text-white/80 text-[11px] font-semibold text-center mb-3 truncate w-full">
                          {project.title}
                        </div>

                        {/* Abstract text lines */}
                        <div className="space-y-2.5 w-full flex flex-col items-center">
                          <div className="rounded-full h-1 bg-white/20 w-[85%]" />
                          <div className="rounded-full h-1 bg-white/20 w-[65%]" />
                          <div className="rounded-full h-1 bg-white/20 w-[75%]" />
                        </div>
                      </div>

                      {/* Status bar */}
                      <div className="absolute top-3 left-4 right-4 flex justify-between items-center z-20">
                        <span className="text-white/40 text-[8px] font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 rounded-sm bg-white/20" />
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-white/20" />
                    </motion.div>
                  </div>

                  {/* ── Card content ─── */}
                  <div className="p-6">
                    <span className="label-tag mb-4 inline-flex">{project.subtitle}</span>

                    <h3
                      className={`font-display text-xl font-bold mb-2 transition-colors duration-200 ${
                        isHovered
                          ? isAcademy ? 'text-pink-600' : 'text-[#111111]'
                          : 'text-[#222222]'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-[#777777] text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t) => (
                          <span key={t} className="skill-tag text-xs">{t}</span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 flex-wrap">
                      {/* View Project → opens modal */}
                      <motion.button
                        id={`view-project-${project.id}-btn`}
                        onClick={() => openModal(project)}
                        className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Eye size={13} />
                        View Project
                      </motion.button>

                      {/* View Source Code → direct GitHub link */}
                      <a
                        id={`view-source-${project.id}-btn`}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                      >
                        <Github size={13} />
                        View Source Code
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={() => openModal(project)}
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

      {/* ── Project Details Modal ───────────────────────────── */}
      <ProjectDetailsModal project={modalProject} onClose={closeModal} />
    </>
  )
}
