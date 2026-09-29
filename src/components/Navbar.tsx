'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '@/data/portfolio'

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
          if (rect.top <= 120) {
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'py-3 bg-[#f7f6f3]/95 backdrop-blur-md border-b border-[#e0ddd7] shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="font-display font-bold text-xl tracking-tight text-[#111111]"
              >
                {personalInfo.name.split(' ')[0]}
                <span className="text-[#999999] font-light">.portfolio</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#111111]'
                      : 'text-[#999999] hover:text-[#555555]'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-full bg-white border border-[#e0ddd7]"
                      style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => scrollTo('#contact')}
                className="hidden md:flex btn-primary text-sm py-2 px-5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Hire Me
              </motion.button>

              {/* Mobile menu toggle */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl border border-[#e0ddd7] bg-white text-[#555555] hover:text-[#111111]"
                whileTap={{ scale: 0.9 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[70px] left-4 right-4 z-40 bg-white/98 backdrop-blur-sm rounded-2xl p-4 border border-[#e0ddd7] shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#111111] bg-[#f7f6f3]'
                      : 'text-[#777777] hover:text-[#111111] hover:bg-[#f7f6f3]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-2 border-t border-[#e0ddd7]">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-primary w-full justify-center py-2.5"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
