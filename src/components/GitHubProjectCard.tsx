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
  const langColor = repo.language ? (languageColors[repo.language] ?? '#888888') : null

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
      className="card p-5 block group cursor-pointer"
    >
      {/* Top accent bar (pink-to-lavender) */}
      <div className="w-full h-0.5 bg-gradient-to-r from-pink-300 to-violet-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 mb-4 rounded-full" />

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Github size={15} className="text-[#666666] flex-shrink-0" />
          <span className="text-sm font-semibold text-[#111111] font-display group-hover:text-pink-600 transition-colors duration-200">
            {repo.name}
          </span>
          {repo.private && (
            <span className="inline-flex items-center gap-0.5 text-[0.6rem] text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-1.5 py-0.5 font-bold uppercase tracking-wide">
              <Lock size={8} /> Private
            </span>
          )}
        </div>
        <ExternalLink
          size={14}
          className="text-[#cccccc] group-hover:text-[#555555] transition-colors flex-shrink-0"
        />
      </div>

      {/* Description */}
      <p className="text-xs text-[#777777] leading-relaxed mb-4 min-h-[2.5rem]">
        {repo.description ?? 'No description available.'}
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
      <div className="flex items-center gap-4 text-xs text-[#aaaaaa] flex-wrap">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
              style={{ background: langColor ?? '#888' }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={11} />
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
