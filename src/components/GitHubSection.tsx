'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const placeholderRepos = [
  {
    name: 'project-alpha',
    description: 'A mobile application built with Flutter featuring beautiful UI and real-time features.',
    language: 'Dart',
    stars: 12,
    forks: 3,
    href: personalInfo.github,
  },
  {
    name: 'web-portfolio',
    description: 'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    language: 'TypeScript',
    stars: 8,
    forks: 2,
    href: personalInfo.github,
  },
  {
    name: 'flutter-ui-kit',
    description: 'A collection of beautiful Flutter UI components and screens.',
    language: 'Dart',
    stars: 24,
    forks: 7,
    href: personalInfo.github,
  },
  {
    name: 'react-components',
    description: 'Reusable React components with TypeScript and modern design patterns.',
    language: 'TypeScript',
    stars: 15,
    forks: 4,
    href: personalInfo.github,
  },
]

// Contribution heatmap
function ContributionGraph() {
  const weeks = 20
  const days = 7
  const cells = Array.from({ length: weeks * days }, () => ({
    intensity: Math.random(),
  }))

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-1" style={{ minWidth: `${weeks * 14}px` }}>
        {Array.from({ length: weeks }).map((_, week) => (
          <div key={week} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, day) => {
              const cell = cells[week * days + day]
              const opacity =
                cell.intensity < 0.3 ? 0.06
                : cell.intensity < 0.5 ? 0.2
                : cell.intensity < 0.7 ? 0.4
                : cell.intensity < 0.9 ? 0.65
                : 1

              return (
                <motion.div
                  key={day}
                  className="w-3 h-3 rounded-sm"
                  style={{ background: `rgba(17, 17, 17, ${opacity})` }}
                  whileHover={{ scale: 1.5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (week * days + day) * 0.004 }}
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
    <section className="section-padding bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="label-tag mb-4 inline-flex">Open Source</span>
            <h2 className="section-title text-[#111111] mt-3">
              GitHub <span className="italic">Activity</span>
            </h2>
            <p className="text-[#999999] mt-3 max-w-lg text-sm leading-relaxed">
              Constantly building, exploring, and committing. Here&apos;s a peek at my coding activity.
            </p>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
          >
            <Github size={15} />
            Follow on GitHub
          </a>
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card p-6 mb-8 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-[#555555]" />
              <span className="text-sm font-semibold text-[#333333]">Contribution Activity</span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-[#999999] hover:text-[#111111] transition-colors"
            >
              View on GitHub
              <ExternalLink size={11} />
            </a>
          </div>
          <ContributionGraph />
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-[#bbbbbb]">Less</span>
            {[0.06, 0.2, 0.4, 0.65, 1].map((o) => (
              <div
                key={o}
                className="w-3 h-3 rounded-sm"
                style={{ background: `rgba(17, 17, 17, ${o})` }}
              />
            ))}
            <span className="text-xs text-[#bbbbbb]">More</span>
          </div>
        </motion.div>

        {/* Repo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {placeholderRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-5 block group"
            >
              {/* Top bar on hover */}
              <div className="w-full h-0.5 bg-[#111111] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 mb-4 rounded-full" />

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github size={15} className="text-[#555555]" />
                  <span className="text-sm font-semibold text-[#111111]">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={13} className="text-[#cccccc] group-hover:text-[#555555] transition-colors" />
              </div>

              <p className="text-xs text-[#777777] leading-relaxed mb-4">{repo.description}</p>

              <div className="flex items-center gap-4 text-xs text-[#999999]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#111111] inline-block" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={11} />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={11} />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
