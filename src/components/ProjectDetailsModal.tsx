'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Lock, Sparkles, CheckCircle2, Layers } from 'lucide-react'
import TechnologyBadge from './TechnologyBadge'

export interface ProjectModalData {
  id: number
  title: string
  subtitle?: string
  description: string
  features?: string[]
  tech: string[]
  tag?: string
  image?: string
  github: string
  demo?: string
  isPrivate?: boolean
  repoName?: string
  accent?: string
}

interface ProjectDetailsModalProps {
  project: ProjectModalData | null
  onClose: () => void
}

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[998]"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
              className="bg-white dark:bg-[#111115] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.25)] rounded-3xl shadow-xl dark:shadow-[0_24px_80px_rgba(0,0,0,0.9)] w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 hover:border-white backdrop-blur-md flex items-center justify-center text-white transition-all shadow-lg"
                aria-label="Close modal"
              >
                <X size={17} />
              </button>

              {/* Top Project Picture */}
              {project.image && (
                <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-t-3xl bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#111115] via-transparent to-black/40" />
                  
                  {project.tag && (
                    <div className="absolute bottom-4 left-6">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/75 backdrop-blur-md border border-white/20 dark:border-[rgba(196,179,147,0.4)] text-white dark:text-[#eed788] flex items-center gap-1.5 shadow-lg font-mono">
                        <Sparkles size={11} className="text-[#eed788]" />
                        {project.tag}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Content body */}
              <div className="p-6 sm:p-8 pt-5">
                {/* Status & Subtitle */}
                <div className="flex items-center gap-2.5 flex-wrap mb-3 font-mono">
                  {project.subtitle && (
                    <span className="text-xs font-bold uppercase tracking-wider text-[#888888] dark:text-[#eed788]">
                      {project.subtitle}
                    </span>
                  )}
                  {project.isPrivate && (
                    <span className="badge-private">
                      <Lock size={10} /> Private Repository
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] dark:text-white mb-2">
                  {project.title}
                </h2>

                {project.repoName && (
                  <div className="flex items-center gap-2 text-xs text-[#555555] dark:text-[#eed788] mb-5 font-mono">
                    <Github size={13} />
                    <span>{project.repoName}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-[#555555] dark:text-[#a1a1aa] text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#15151a] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.18)]">
                    <h3 className="text-xs font-bold text-[#111111] dark:text-[#eed788] uppercase tracking-wider mb-3 flex items-center gap-2 font-mono">
                      <Layers size={13} className="text-[#111111] dark:text-[#eed788]" />
                      Key Features &amp; Highlights
                    </h3>
                    <ul className="space-y-2.5">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555] dark:text-stone-300">
                          <CheckCircle2 size={15} className="text-[#111111] dark:text-[#eed788] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.tech.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-[#888888] dark:text-stone-400 uppercase tracking-wider mb-3 font-mono">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <TechnologyBadge
                          key={t}
                          name={t}
                          variant={i % 2 === 0 ? 'pink' : 'lavender'}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions Footer */}
                <div className="flex gap-3 flex-wrap pt-4 border-t border-[#e0ddd7] dark:border-white/10">
                  <a
                    id="view-source-code-btn"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                  >
                    <Github size={15} />
                    View Repository
                    <ExternalLink size={12} className="opacity-70" />
                  </a>

                  {project.demo && (
                    <a
                      id="view-project-demo-btn"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                    >
                      <ExternalLink size={15} />
                      Live Demo / Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
