'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { navLinks, personalInfo } from '@/data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
      >
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-500 pointer-events-auto ${
            scrolled
              ? 'py-2.5 px-5 bg-white/90 dark:bg-[#111115]/85 backdrop-blur-2xl border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.2)] shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.7)]'
              : 'py-3 px-6 bg-white/70 dark:bg-[#111115]/60 backdrop-blur-xl border border-[#e0ddd7]/70 dark:border-white/10 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 group text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-full bg-[#111111] dark:bg-[#eed788] flex items-center justify-center shadow-sm">
                <span className="font-display font-black text-xs text-white dark:text-[#0b0b0d]">H</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-[#111111] dark:text-white">
                {personalInfo.name.split(' ')[0]}
                <span className="text-[#888888] dark:text-[#eed788] font-light text-sm ml-0.5">.dev</span>
              </span>
            </motion.button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] p-1 rounded-full border border-[#e0ddd7] dark:border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-[#111111] dark:text-[#eed788] font-semibold'
                        : 'text-[#555555] dark:text-zinc-400 hover:text-[#111111] dark:hover:text-zinc-200'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 rounded-full bg-white dark:bg-[rgba(196,179,147,0.12)] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.3)] shadow-sm dark:shadow-[0_0_15px_rgba(238,215,136,0.15)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                )
              })}
            </div>

            {/* Theme Toggle + CTA + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Light/Dark Mode Switcher */}
              <ThemeToggle />

              <motion.button
                onClick={() => scrollTo('#contact')}
                className="hidden sm:inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#111111] text-white dark:bg-[#eed788] dark:text-[#0b0b0d] text-xs font-semibold shadow-sm hover:bg-[#333333] dark:hover:bg-[#fdf0aa] transition-all group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Let&apos;s Talk</span>
                <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={13} className="text-current" />
                </span>
              </motion.button>

              {/* Mobile menu toggle */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-full border border-stone-300 dark:border-white/10 bg-white dark:bg-white/5 text-stone-700 dark:text-zinc-300 hover:text-stone-900 dark:hover:text-white"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[74px] left-4 right-4 z-40 bg-white/95 dark:bg-[#0a0a14]/95 backdrop-blur-2xl rounded-3xl p-5 border border-stone-200 dark:border-white/12 shadow-2xl dark:shadow-[0_16px_50px_rgba(0,0,0,0.85)] max-w-lg mx-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-stone-950 dark:text-white bg-amber-50 dark:bg-white/10 border border-amber-200 dark:border-white/15'
                      : 'text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-3 border-t border-stone-200 dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-primary flex-1 justify-center py-3 text-sm font-semibold"
                >
                  <Sparkles size={14} className="text-amber-500" />
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
