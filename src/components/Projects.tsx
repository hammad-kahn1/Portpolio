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
                  {/* ── Image / visual area ─── */}
                  <div
                    className={`relative overflow-hidden ${
                      isAcademy
                        ? 'bg-gradient-to-br from-pink-100 via-white to-violet-100'
                        : 'bg-[#111111]'
                    }`}
                    style={{ height: isLarge ? '260px' : '200px' }}
                  >
                    {/* Grid pattern for non-Academy cards */}
                    {!isAcademy && (
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                          backgroundSize: '40px 40px',
                        }}
                      />
                    )}

                    {/* Academy App — gradient accent line */}
                    {isAcademy && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-violet-400" />
                    )}

                    {/* Center icon / emoji */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl mb-3">
                        {subtitleIcons[project.subtitle] ?? '💻'}
                      </span>
                      <span
                        className={`text-xs font-medium tracking-widest uppercase ${
                          isAcademy ? 'text-[#aaaaaa]' : 'text-white/40'
                        }`}
                      >
                        {project.subtitle}
                      </span>
                      {isAcademy && project.isPrivate && (
                        <span className="mt-2 inline-flex items-center gap-1 text-[0.65rem] text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-2 py-0.5 font-bold uppercase tracking-wide">
                          <Lock size={8} /> Private
                        </span>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Corner number */}
                    <div
                      className={`absolute top-4 left-4 font-display text-4xl font-bold leading-none ${
                        isAcademy ? 'text-pink-200/60' : 'text-white/20'
                      }`}
                    >
                      0{project.id}
                    </div>
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
