'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left — Branding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="font-display font-bold text-xl text-white mb-1">
              {personalInfo.name.split(' ')[0]}
              <span className="text-white/40 font-light">.portfolio</span>
            </div>
            <p className="text-white/35 text-sm">
              Software Engineering Student · App Developer
            </p>
          </motion.div>

          {/* Center — Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-white/25 text-sm italic">
              Designed &amp; built with curiosity and code.
            </p>
          </motion.div>

          {/* Right — Social icons */}
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
                className="p-2.5 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all duration-250"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
