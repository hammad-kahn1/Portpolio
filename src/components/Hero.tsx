'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[var(--bg)] transition-colors duration-500"
    >
      {/* ── Ambient Champagne Glow (Dark Mode only) ── */}
      <div
        aria-hidden
        className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(196, 179, 147, 0.12) 0%, rgba(238, 215, 136, 0.03) 45%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Availability dot — top left ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-28 sm:top-24 left-6 lg:left-12 z-20 flex items-center gap-2"
      >
        {/* Light mode: Initial green dot | Dark mode: Glowing champagne dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-[#eed788] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-[#eed788] dark:shadow-[0_0_8px_#eed788]" />
        </span>
        <span className="text-xs font-medium text-[#888888] dark:text-[#eed788] font-mono tracking-wide">
          Open to opportunities
        </span>
      </motion.div>

      {/* ── Social icons — top right ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="absolute top-28 sm:top-24 right-6 lg:right-12 z-20 flex gap-2.5"
      >
        {[
          { href: personalInfo.github, Icon: Github, label: 'GitHub' },
          { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            id={`hero-social-${label.toLowerCase()}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.25)] bg-white/80 dark:bg-[#111115]/80 backdrop-blur-md flex items-center justify-center text-[#888888] dark:text-[#eed788] hover:text-[#111111] dark:hover:text-white hover:border-[#111111] dark:hover:border-[#eed788] transition-all duration-300 shadow-sm"
          >
            <Icon size={15} />
          </a>
        ))}
      </motion.div>

      {/* ── Main Hero Content ─────────────────────────── */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <span className="label-tag">
              <Sparkles size={11} className="text-[#111111] dark:text-[#eed788]" />
              Software Engineering Student &amp; App Developer
            </span>
          </motion.div>

          {/* Giant editorial name — Playfair Display with initial font styling */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display font-black leading-[0.82] select-none"
              style={{ fontSize: 'clamp(4.8rem, 13.5vw, 12.5rem)', letterSpacing: '-0.03em' }}
            >
              <span className="block text-[#111111] dark:text-[#c4b393] transition-colors duration-400">
                HABIBA
              </span>
              <span
                className="block text-[#111111]/[0.12] dark:text-[#c4b393]/[0.2] transition-colors duration-400"
                style={{
                  WebkitTextStroke: '1px currentColor',
                }}
              >
                SHAH
              </span>
            </motion.h1>
          </div>

          {/* Prompt line in dark mode (matched to reference photo > React.js) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hidden dark:flex items-center gap-2 font-mono text-sm sm:text-base text-[#eed788] mb-4 font-medium"
          >
            <span>&gt;</span>
            <span>Flutter, React &amp; Intelligent Systems</span>
          </motion.div>

          {/* Metadata Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 my-8 lg:my-10 origin-left"
          >
            <div className="h-px flex-1 bg-[#e0ddd7] dark:bg-[rgba(196,179,147,0.2)]" />
            <div className="flex items-center gap-3 text-[0.65rem] font-semibold text-[#888888] dark:text-[#c4b393]/80 tracking-[0.14em] uppercase whitespace-nowrap flex-wrap font-mono">
              <span className="flex items-center gap-1.5 text-[#555555] dark:text-[#f5f5f7]">
                <MapPin size={11} className="text-[#111111] dark:text-[#eed788]" />
                Peshawar, Pakistan
              </span>
              <span className="text-[#cccccc] dark:text-[#71717a]">·</span>
              <span className="text-[#555555] dark:text-[#f5f5f7]">BS Software Engineering</span>
              <span className="text-[#cccccc] dark:text-[#71717a]">·</span>
              <span className="text-[#111111] dark:text-[#eed788] font-bold">UET Peshawar</span>
            </div>
            <div className="h-px flex-1 bg-[#e0ddd7] dark:bg-[rgba(196,179,147,0.2)]" />
          </motion.div>

          {/* Tagline + Interactive CTA Row */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-2">
            
            {/* Left: Tagline & tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="lg:col-span-7"
            >
              <p className="text-[#555555] dark:text-[#a1a1aa] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                I craft{' '}
                <strong className="font-semibold text-[#111111] dark:text-white">
                  scalable, modern applications
                </strong>{' '}
                — blending pixel-perfect UIs with robust backend architectures and machine learning systems. Every project is built to perform and scale.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {['Flutter', 'Dart', 'React', 'Next.js 15', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Figma'].map((t) => (
                  <span
                    key={t}
                    className="skill-tag text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row gap-4 lg:justify-end"
            >
              <motion.button
                id="hero-view-work-btn"
                onClick={() => scrollTo('projects')}
                className="btn-primary group pl-5 pr-2 py-2 flex items-center justify-between gap-3 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-sm">Explore Featured Work</span>
                <span className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/25 flex items-center justify-center group-hover:translate-y-0.5 transition-transform duration-300">
                  <ArrowDown size={14} className="text-current" />
                </span>
              </motion.button>

              <motion.button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="btn-secondary group pl-5 pr-2 py-2 flex items-center justify-between gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-sm">Get in Touch</span>
                <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-[#c4b393]/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={14} className="text-current" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll Cue Indicator ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888888] dark:text-[#a1a1aa] pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#111111]/30 dark:border-[#c4b393]/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-[#111111] dark:bg-[#eed788]" />
        </motion.div>
        <span className="text-[0.62rem] uppercase tracking-[0.22em] font-mono text-[#888888] dark:text-[#c4b393]/80">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
