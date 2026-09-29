'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Github, Star, GitFork, ExternalLink, Code2, Linkedin, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { githubConfig } from '@/data/githubData'

const profileRepo = {
  name: 'habiba-portfolio',
  description: 'Personal software portfolio built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.',
  language: 'TypeScript',
  stars: 1,
  forks: 0,
  href: githubConfig.profileUrl,
}

// Luminous Amber Gold Contribution Heatmap
function ContributionGraph() {
  const weeks = 22
  const days = 7
  const [cells, setCells] = useState<{ intensity: number }[]>([])

  useEffect(() => {
    setCells(
      Array.from({ length: weeks * days }, () => ({
        intensity: Math.random(),
      }))
    )
  }, [])

  if (cells.length === 0) {
    return (
      <div className="overflow-x-auto py-2">
        <div className="inline-flex gap-1.5" style={{ minWidth: `${weeks * 16}px` }}>
          {Array.from({ length: weeks }).map((_, week) => (
            <div key={week} className="flex flex-col gap-1.5">
              {Array.from({ length: days }).map((_, day) => (
                <div key={day} className="w-3.5 h-3.5 rounded-[4px] bg-amber-500/10" />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto py-2">
      <div className="inline-flex gap-1.5" style={{ minWidth: `${weeks * 16}px` }}>
        {Array.from({ length: weeks }).map((_, week) => (
          <div key={week} className="flex flex-col gap-1.5">
            {Array.from({ length: days }).map((_, day) => {
              const cell = cells[week * days + day]
              const bg =
                cell.intensity < 0.35
                  ? 'bg-amber-950/15 dark:bg-white/[0.05]'
                  : cell.intensity < 0.6
                  ? 'bg-amber-700/40 dark:bg-amber-900/50 border border-amber-500/20'
                  : cell.intensity < 0.8
                  ? 'bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                  : 'bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-[0_0_12px_rgba(245,158,11,0.6)]'

              return (
                <motion.div
                  key={day}
                  className={`w-3.5 h-3.5 rounded-[4px] transition-all cursor-pointer ${bg}`}
                  whileHover={{ scale: 1.4, zIndex: 10 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (week * days + day) * 0.003 }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GitHubSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="label-tag mb-4 inline-flex">
              <Sparkles size={11} className="text-amber-500 dark:text-amber-400" />
              Open Source Cadence
            </span>
            <h2 className="section-title text-stone-900 dark:text-white mt-3">
              Code & <span className="italic text-gold-gradient">Telemetry</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mt-3 max-w-lg text-sm font-light leading-relaxed">
              Active engineering commits, continuous integration workflows, and experimental open-source prototypes.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              id="github-follow-btn"
              href={githubConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-xs sm:text-sm py-2.5 px-5"
            >
              <Github size={15} />
              Follow on GitHub
            </a>
            <a
              id="linkedin-connect-btn"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-xs sm:text-sm py-2.5 px-5"
            >
              <Linkedin size={15} />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        {/* Contribution Graph Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Code2 size={16} />
              </div>
              <div>
                <span className="text-sm font-semibold text-stone-900 dark:text-white">Continuous Development Activity</span>
                <span className="text-xs text-stone-500 block">Rolling 22-week git commit frequency</span>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:underline transition-colors font-medium"
            >
              <span>Explore Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <ContributionGraph />

          <div className="flex items-center gap-2 mt-5 text-xs text-stone-500 font-medium">
            <span>Fewer commits</span>
            <div className="w-3 h-3 rounded-sm bg-amber-500/15" />
            <div className="w-3 h-3 rounded-sm bg-amber-600/50" />
            <div className="w-3 h-3 rounded-sm bg-amber-500/80" />
            <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-amber-400 to-yellow-300" />
            <span>High velocity</span>
          </div>
        </motion.div>

        {/* Single real profile repo card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.a
            key={profileRepo.name}
            href={profileRepo.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="card p-6 block group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Github size={16} className="text-amber-500" />
                <span className="text-sm font-semibold text-stone-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {profileRepo.name}
                </span>
              </div>
              <ExternalLink size={14} className="text-stone-400 dark:text-zinc-500 group-hover:text-amber-500 transition-colors" />
            </div>
            <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed mb-5 font-light">{profileRepo.description}</p>
            <div className="flex items-center gap-4 text-xs text-stone-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 text-stone-800 dark:text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] inline-block" />
                {profileRepo.language}
              </span>
              <span className="flex items-center gap-1"><Star size={12} className="text-amber-500" /> {profileRepo.stars}</span>
              <span className="flex items-center gap-1"><GitFork size={12} /> {profileRepo.forks}</span>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card p-6 flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <Github size={20} />
            </div>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 max-w-sm leading-relaxed font-light">
              Explore dynamic live repositories fetched from the GitHub API in the open source registry below.
            </p>
            <a
              href={githubConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-600 dark:text-amber-400 hover:underline transition-colors font-semibold"
            >
              View GitHub Profile →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
