'use client'

import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, Calendar, Lock } from 'lucide-react'
import { GitHubRepo, languageColors } from '@/data/githubData'
import TechnologyBadge from './TechnologyBadge'

interface GitHubProjectCardProps {
  repo: GitHubRepo
  index?: number
}

export default function GitHubProjectCard({
  repo,
  index = 0,
}: GitHubProjectCardProps) {
  const langColor = repo.language ? (languageColors[repo.language] ?? '#f59e0b') : null

  const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      id={`github-repo-card-${repo.name}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -5 }}
      className="card p-6 block group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Github size={16} className="text-amber-500 flex-shrink-0" />
          <span className="text-sm font-semibold text-stone-900 dark:text-white font-display group-hover:text-amber-500 transition-colors duration-200">
            {repo.name}
          </span>
          {repo.private && (
            <span className="badge-private">
              <Lock size={8} /> Private
            </span>
          )}
        </div>
        <ExternalLink
          size={14}
          className="text-stone-400 dark:text-zinc-500 group-hover:text-amber-500 transition-colors flex-shrink-0"
        />
      </div>

      {/* Description */}
      <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed mb-4 min-h-[2.5rem] font-light">
        {repo.description ?? 'No description available for this repository.'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 4).map((topic, i) => (
            <TechnologyBadge
              key={topic}
              name={topic}
              variant={i % 2 === 0 ? 'pink' : 'lavender'}
            />
          ))}
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-zinc-500 flex-wrap pt-3 border-t border-amber-500/10 dark:border-white/5">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-stone-700 dark:text-zinc-300">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
              style={{ background: langColor ?? '#f59e0b', boxShadow: `0 0 8px ${langColor ?? '#f59e0b'}80` }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={11} className="text-amber-500" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={11} />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Calendar size={11} />
          {updatedDate}
        </span>
      </div>
    </motion.a>
  )
}
