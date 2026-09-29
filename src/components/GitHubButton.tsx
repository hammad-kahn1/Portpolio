'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

interface GitHubButtonProps {
  href: string
  label?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  showExternalIcon?: boolean
  className?: string
  id?: string
}

export default function GitHubButton({
  href,
  label = 'View on GitHub',
  variant = 'secondary',
  showExternalIcon = true,
  className = '',
  id,
}: GitHubButtonProps) {
  const baseClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
      ? 'btn-secondary'
      : 'btn-ghost'

  return (
    <motion.a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} text-sm py-2 px-4 flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Github size={15} />
      {label}
      {showExternalIcon && <ExternalLink size={11} className="opacity-60" />}
    </motion.a>
  )
}
