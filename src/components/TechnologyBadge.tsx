'use client'

type BadgeVariant = 'pink' | 'lavender' | 'blush' | 'default'

interface TechnologyBadgeProps {
  name: string
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  pink:     'bg-pink-50 text-pink-700 border border-pink-200',
  lavender: 'bg-violet-50 text-violet-700 border border-violet-200',
  blush:    'bg-rose-50 text-rose-700 border border-rose-200',
  default:  'bg-[#eeece8] text-[#555555] border border-[#e0ddd7]',
}

export default function TechnologyBadge({
  name,
  variant = 'default',
}: TechnologyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity hover:opacity-80 ${variantStyles[variant]}`}
    >
      {name}
    </span>
  )
}
