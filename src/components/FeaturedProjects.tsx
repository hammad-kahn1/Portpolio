'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, RefreshCw, AlertCircle, Lock, Sparkles } from 'lucide-react'
import { githubConfig, academyAppProject, GitHubRepo } from '@/data/githubData'
import GitHubProjectCard from './GitHubProjectCard'
import GitHubButton from './GitHubButton'

export default function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchRepos = async () => {
      try {
        const res = await fetch(githubConfig.reposApiUrl, {
          headers: { Accept: 'application/vnd.github.v3+json' },
          signal: controller.signal,
        })
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        const data: GitHubRepo[] = await res.json()
        data.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        setRepos(data)
      } catch (err: unknown) {
        if ((err as Error).name !== 'AbortError') {
          setError('Could not load repositories from the GitHub API.')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
    return () => controller.abort()
  }, [])

  return (
    <section id="featured-projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>

        {/* ── Section Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="label-tag mb-4 inline-flex">
              <Github size={11} className="mr-1 text-amber-500" />
              Live GitHub API
            </span>
            <h2 className="section-title text-stone-900 dark:text-white mt-3">
              Open Source <span className="italic text-gold-gradient">Repositories</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mt-3 max-w-lg text-sm font-light leading-relaxed">
              Real-time synchronization with{' '}
              <a
                href={githubConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 underline underline-offset-4 hover:text-amber-500 transition-colors font-semibold"
              >
                @{githubConfig.username}
              </a>{' '}
              on GitHub.
            </p>
          </div>
          <GitHubButton
            id="explore-github-profile-btn"
            href={githubConfig.profileUrl}
            label="Explore GitHub Profile"
            variant="primary"
          />
        </motion.div>

        {/* ── Academy App — Pinned Featured Card ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <a
            id="academy-app-github-card"
            href={academyAppProject.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="relative rounded-3xl overflow-hidden border border-amber-500/25 bg-white dark:bg-[#090913] shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.7)] group cursor-pointer transition-all duration-300 hover:border-amber-400/50"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600" />

              <div className="p-7 sm:p-9">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                      <span className="label-tag">
                        <Sparkles size={11} className="text-amber-500" />
                        Featured Academic Project
                      </span>
                      <span className="badge-private">
                        <Lock size={9} /> Private Repository
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors duration-200">
                      {academyAppProject.displayName}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-300/80 mb-4 font-mono">
                      <Github size={13} className="text-amber-500" />
                      <span>{githubConfig.username}/{academyAppProject.name}</span>
                    </div>

                    <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                      {academyAppProject.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between gap-4 self-stretch">
                    <span className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-300 group-hover:text-amber-500 font-semibold transition-colors duration-200 whitespace-nowrap">
                      Open on GitHub
                      <ExternalLink size={14} />
                    </span>
                    <div className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-700 dark:text-amber-300 font-medium">
                      Request Access
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        </motion.div>

        {/* ── Public Repos Fetched from GitHub API ────────────── */}
        {loading ? (
          <div className="flex items-center justify-center py-16 gap-3 text-stone-500">
            <RefreshCw size={16} className="animate-spin text-amber-500" />
            <span className="text-sm">Fetching telemetry from GitHub…</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-3 p-5 bg-white dark:bg-white/[0.03] border border-amber-500/20 rounded-2xl text-stone-600 dark:text-stone-400 text-sm">
            <AlertCircle size={16} className="flex-shrink-0 text-amber-500" />
            <span>{error}</span>
          </div>
        ) : repos.length === 0 ? (
          <p className="text-center py-12 text-stone-500 text-sm">
            No public repositories discovered at this time.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((repo, i) => (
              <GitHubProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
