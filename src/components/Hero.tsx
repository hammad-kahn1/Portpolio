'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Hero() {
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 600], [0, 60])
  const opacity = useTransform(scrollY, [0, 350], [1, 0])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f7f6f3]"
    >
      {/* ── Subtle horizontal rules ───────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#111 0px,#111 1px,transparent 1px,transparent 72px)',
        }}
      />

      {/* ── Availability dot — top left ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs font-medium text-[#888888] tracking-wide">
          Open to opportunities
        </span>
      </motion.div>

      {/* ── Social icons — top right ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute top-24 right-6 lg:right-10 z-10 flex gap-2.5"
      >
        {[
          { href: personalInfo.github,   Icon: Github,   label: 'GitHub'   },
          { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            id={`hero-social-${label.toLowerCase()}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full border border-[#e0ddd7] bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#888888] hover:text-[#111111] hover:border-[#aaaaaa] transition-all duration-200"
          >
            <Icon size={15} />
          </a>
        ))}
      </motion.div>

      {/* ── Main content ─────────────────────────── */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="pt-32 pb-20">

            {/* Giant editorial name */}
            <div className="overflow-hidden mb-0">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display font-black leading-[0.82] select-none"
                style={{ fontSize: 'clamp(5rem, 14vw, 13rem)', letterSpacing: '-0.03em' }}
              >
                <span className="block text-[#111111]">HABIBA</span>
                <span className="block text-[#111111]/[0.12]">SHAH</span>
              </motion.h1>
            </div>

            {/* Separator line with metadata */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 my-8 lg:my-10 origin-left"
            >
              <div className="h-px flex-1 bg-[#e0ddd7]" />
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold text-[#bbbbbb] tracking-[0.14em] uppercase whitespace-nowrap flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin size={9} />Peshawar, Pakistan
                </span>
                <span className="text-[#dddddd]">·</span>
                <span>Software Engineering</span>
                <span className="text-[#dddddd]">·</span>
                <span>UET Peshawar</span>
              </div>
              <div className="h-px flex-1 bg-[#e0ddd7]" />
            </motion.div>

            {/* Tagline + CTA row */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">

              {/* Left: tagline + tech pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <p className="text-[#555555] text-base lg:text-lg leading-relaxed max-w-md">
                  {personalInfo.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['Flutter', 'React', 'Next.js', 'TypeScript', 'Python'].map((t) => (
                    <span key={t} className="skill-tag text-xs">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Right: CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-start"
              >
                <motion.button
                  id="hero-view-work-btn"
                  onClick={() => scrollTo('projects')}
                  className="btn-primary group justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View My Work
                  <ArrowDown
                    size={14}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </motion.button>
                <motion.button
                  id="hero-contact-btn"
                  onClick={() => scrollTo('contact')}
                  className="btn-secondary justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll cue ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#cccccc]"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={13} />
        </motion.div>
        <span className="text-[0.6rem] uppercase tracking-[0.2em] font-medium">Scroll</span>
      </motion.div>
    </section>
  )
}
