'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { Github, ExternalLink, ArrowUpRight, Lock, Eye, Sparkles } from 'lucide-react'
import { projects } from '@/data/portfolio'
import ProjectDetailsModal, { ProjectModalData } from './ProjectDetailsModal'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [modalProject, setModalProject] = useState<ProjectModalData | null>(null)

  const openModal = useCallback((project: typeof projects[0]) => {
    setModalProject({
      id: project.id,
      title: project.title,
      subtitle: project.subtitle,
      description: project.description,
      features: (project as any).features,
      tech: project.tech,
      github: project.github,
      demo: project.demo,
      image: project.image,
      accent: (project as any).accent,
      tag: (project as any).tag,
      repoName: project.repoName || undefined,
      isPrivate: project.isPrivate,
    })
  }, [])

  const closeModal = useCallback(() => setModalProject(null), [])

  return (
    <>
      <section id="projects" className="section-padding relative overflow-hidden">
        {/* Background glow orbs */}
        <div
          aria-hidden
          className="absolute top-1/3 left-0 w-[550px] h-[550px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>

          {/* ── Section Header ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-16 flex-wrap gap-6"
          >
            <div>
              <span className="label-tag mb-4 inline-flex">
                <Sparkles size={11} className="text-amber-500 dark:text-amber-400" />
                Featured Engineering Works
              </span>
              <h2 className="section-title text-stone-900 dark:text-white mt-3">
                Selected <span className="italic text-gold-gradient">Projects</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-400 mt-3 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                A selection of mobile applications, intelligent platforms, and interactive interfaces with production-grade code.
              </p>
            </div>

            <motion.a
              id="view-all-github-btn"
              href="https://github.com/habibashah0789-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={15} />
              <span>Browse All GitHub Repos</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* ── Sticky Stacking Cards Container ──────────────────── */}
          <div className="relative pb-16 flex flex-col gap-10">
            {projects.map((project, index) => {
              const tagLabel = (project as any).tag || project.subtitle

              return (
                <div
                  key={project.id}
                  className="sticky transition-all duration-300"
                  style={{
                    top: `calc(90px + ${index * 16}px)`,
                    zIndex: index + 10,
                  }}
                >
                  {/* Hardware Double-Bezel Card */}
                  <div className="double-bezel-outer p-2 sm:p-2.5 rounded-[2rem] transition-all duration-500">
                    <div className="double-bezel-inner rounded-[calc(2rem-0.5rem)] overflow-hidden grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 relative">

                      {/* Ambient card background glow */}
                      <div
                        aria-hidden
                        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-20 dark:opacity-30"
                        style={{
                          background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
                          filter: 'blur(50px)',
                        }}
                      />

                      {/* ── Left / Visual Mockup Area ─── */}
                      <div className="lg:col-span-7 relative">
                        <div
                          className="project-image-wrapper relative rounded-2xl overflow-hidden border border-amber-500/25 group bg-stone-900 shadow-[0_12px_36px_rgba(0,0,0,0.4)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
                          style={{ aspectRatio: '16 / 9' }}
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} Preview Screenshot`}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                          {/* Top Badges */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/75 backdrop-blur-md border border-amber-400/30 text-amber-200 flex items-center gap-1.5 shadow-lg">
                              <Sparkles size={11} className="text-amber-400" />
                              {tagLabel}
                            </span>

                            {project.isPrivate && (
                              <span className="badge-private shadow-lg">
                                <Lock size={9} /> Private Repo
                              </span>
                            )}
                          </div>

                          {/* Center Quick View Overlay Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px]">
                            <motion.button
                              onClick={() => openModal(project)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_24px_rgba(245,158,11,0.5)]"
                            >
                              <Eye size={14} />
                              Inspect Project & Visuals
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* ── Right / Description & Metadata ─── */}
                      <div className="lg:col-span-5 flex flex-col justify-between h-full">
                        <div>
                          {/* Index number & subtitle */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                              {project.subtitle}
                            </span>
                            <span className="font-display text-3xl font-black text-amber-500/20 dark:text-amber-400/20 select-none">
                              0{project.id}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white mb-3 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6 font-light">
                            {project.description}
                          </p>

                          {/* Tech stack pills */}
                          {project.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-3 py-1 rounded-full text-xs font-medium text-stone-700 dark:text-stone-300 bg-amber-500/[0.06] dark:bg-white/[0.04] border border-amber-500/20"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Interactive CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-amber-500/15 dark:border-white/10">
                          {/* Inspect Modal Button */}
                          <motion.button
                            id={`view-project-${project.id}-btn`}
                            onClick={() => openModal(project)}
                            className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Eye size={14} />
                            <span>Details</span>
                            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </motion.button>

                          {/* GitHub Source Code */}
                          <a
                            id={`view-source-${project.id}-btn`}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-2 group"
                          >
                            <Github size={14} />
                            <span>Repository</span>
                            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>

                          {/* Live Demo Link */}
                          {project.demo && (
                            <a
                              id={`view-demo-${project.id}-btn`}
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-full border border-amber-500/30 hover:border-amber-500 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-300 text-xs flex items-center gap-1.5 transition-all"
                            >
                              <ExternalLink size={13} />
                              <span>Live Preview</span>
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
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
