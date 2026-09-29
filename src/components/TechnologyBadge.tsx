'use client'

type BadgeVariant = 'pink' | 'lavender' | 'blush' | 'default'

interface TechnologyBadgeProps {
  name: string
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  pink:     'bg-pink-500/10 text-pink-300 border border-pink-500/20 shadow-[0_0_12px_rgba(244,114,182,0.1)]',
  lavender: 'bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.1)]',
  blush:    'bg-rose-500/10 text-rose-300 border border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.1)]',
  default:  'bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20',
}

export default function TechnologyBadge({
  name,
  variant = 'default',
}: TechnologyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-200 hover:scale-105 ${variantStyles[variant]}`}
    >
      {name}
    </span>
  )
}
