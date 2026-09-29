'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, RefreshCw, AlertCircle, Lock } from 'lucide-react'
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
        // Sort by most recently updated
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
    <section id="featured-projects" className="section-padding bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

        {/* ── Section header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <span className="label-tag mb-4 inline-flex">
              <Github size={11} className="mr-1" />
              Open Source
            </span>
            <h2 className="section-title text-[#111111] mt-3">
              GitHub <span className="italic">Projects</span>
            </h2>
            <p className="text-[#999999] mt-3 max-w-lg text-sm leading-relaxed">
              Repositories from{' '}
              <a
                href={githubConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#111111] transition-colors"
              >
                @{githubConfig.username}
              </a>{' '}
              — built with curiosity and code.
            </p>
          </div>
          <GitHubButton
            id="explore-github-profile-btn"
            href={githubConfig.profileUrl}
            label="Explore My GitHub"
            variant="primary"
          />
        </motion.div>

        {/* ── Academy App — pinned featured card ─────────────── */}
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
              className="relative rounded-2xl overflow-hidden border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-violet-50 shadow-sm group cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Gradient top stripe */}
              <div className="h-1 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-violet-400" />

              <div className="p-7">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="flex-1 min-w-0">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="label-tag">Featured Project</span>
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                        <Lock size={10} />
                        Private Repository
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-[#111111] mb-1.5 group-hover:text-pink-600 transition-colors duration-200">
                      {academyAppProject.displayName}
                    </h3>

                    {/* Repo slug */}
                    <div className="flex items-center gap-1.5 text-xs text-[#aaaaaa] mb-3 font-mono">
                      <Github size={11} />
                      {githubConfig.username}/{academyAppProject.name}
                    </div>

                    {/* Description */}
                    <p className="text-[#666666] text-sm leading-relaxed max-w-lg">
                      {academyAppProject.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-end justify-between gap-3 self-stretch">
                    <span className="inline-flex items-center gap-2 text-sm text-[#888888] group-hover:text-pink-600 font-medium transition-colors duration-200 whitespace-nowrap">
                      View Repository
                      <ExternalLink size={14} />
                    </span>
                    <div className="px-3 py-1.5 rounded-xl bg-white/60 border border-pink-100 text-xs text-[#aaaaaa]">
                      Click to open on GitHub
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        </motion.div>

        {/* ── Public repos fetched from GitHub API ────────────── */}
        {loading ? (
          <div className="flex items-center justify-center py-14 gap-3 text-[#bbbbbb]">
            <RefreshCw size={15} className="animate-spin" />
            <span className="text-sm">Loading repositories…</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-3 p-4 bg-[#eeece8] rounded-xl text-[#888888] text-sm">
            <AlertCircle size={15} className="flex-shrink-0 text-amber-500" />
            <span>{error}</span>
          </div>
        ) : repos.length === 0 ? (
          <p className="text-center py-10 text-[#bbbbbb] text-sm">
            No public repositories found.
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
