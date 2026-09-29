'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-amber-500/20 bg-amber-500/5 opacity-50" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
        isDark
          ? 'bg-[#111115] border-[rgba(196,179,147,0.3)] text-[#eed788] shadow-[0_0_18px_rgba(238,215,136,0.18)] hover:border-[#eed788]'
          : 'bg-white border-[#e0ddd7] text-[#111111] shadow-sm hover:bg-[#eeece8]'
      }`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  )
}
