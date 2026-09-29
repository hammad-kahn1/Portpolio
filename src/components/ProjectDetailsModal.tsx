'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Lock, Calendar, Code2 } from 'lucide-react'
import { useEffect } from 'react'
import TechnologyBadge from './TechnologyBadge'

export interface ProjectModalData {
  title: string
  subtitle?: string
  description: string
  features?: string[]
  tech: string[]
  github: string
  demo?: string
  repoName?: string
  isPrivate?: boolean
  status?: string
  updatedAt?: string
  language?: string | null
}

interface ProjectDetailsModalProps {
  project: ProjectModalData | null
  onClose: () => void
}

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [project])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 32 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient accent */}
              <div className="h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-violet-400" />

              {/* Close */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="p-7 pt-6">
                {/* Header badges */}
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {project.subtitle && (
                    <span className="label-tag">{project.subtitle}</span>
                  )}
                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      <Lock size={10} />
                      Private Repository
                    </span>
                  )}
                  {project.status && (
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl font-bold text-[#111111] mb-1">
                  {project.title}
                </h2>
                {project.repoName && (
                  <div className="flex items-center gap-1.5 text-sm text-[#999999] mb-5">
                    <Github size={13} />
                    <span className="font-mono text-xs">{project.repoName}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-[#555555] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Private repo notice */}
                {project.isPrivate && (
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
                    <div className="flex items-start gap-3">
                      <Lock size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">
                          Private Repository
                        </p>
                        <p className="text-xs text-amber-700 leading-relaxed">
                          This repository is private on GitHub. Visit the link below to request access or check for updates.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-semibold text-[#333333] uppercase tracking-widest mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-[#555555]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 mt-1.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.tech.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-xs font-semibold text-[#333333] uppercase tracking-widest mb-3">
                      Technologies
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

                {/* Meta info */}
                {(project.language || project.updatedAt) && (
                  <div className="flex items-center gap-4 mb-5 text-xs text-[#aaaaaa]">
                    {project.language && (
                      <span className="flex items-center gap-1.5">
                        <Code2 size={12} />
                        {project.language}
                      </span>
                    )}
                    {project.updatedAt && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        Updated{' '}
                        {new Date(project.updatedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 flex-wrap pt-2 border-t border-[#f0ede8]">
                  <a
                    id="view-source-code-btn"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm py-2.5 px-5"
                  >
                    <Github size={15} />
                    View Source Code
                    <ExternalLink size={11} className="opacity-70" />
                  </a>
                  {project.demo && (
                    <a
                      id="view-project-demo-btn"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 text-sm py-2.5 px-5"
                    >
                      <ExternalLink size={15} />
                      View Project
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
