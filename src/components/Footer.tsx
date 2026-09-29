'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#e0ddd7] dark:border-[rgba(196,179,147,0.2)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left — Branding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="font-display font-bold text-xl text-stone-900 dark:text-white mb-1">
              {personalInfo.name.split(' ')[0]}
              <span className="text-amber-600 dark:text-amber-400 font-light text-sm ml-1">.portfolio</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm font-light">
              Software Engineering Student · Cross-Platform App Developer
            </p>
          </motion.div>

          {/* Center — Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm italic font-light">
              Designed &amp; engineered with mathematical precision &amp; golden craft.
            </p>
          </motion.div>

          {/* Right — Social links + Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-full border border-amber-500/25 bg-white dark:bg-white/[0.03] text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/50 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <link.icon size={15} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full border border-amber-500/25 bg-white dark:bg-white/[0.03] text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all ml-2 shadow-sm"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              <ArrowUp size={15} />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-amber-500/10 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js 15, TailwindCSS &amp; Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
