'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Star, Github } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 350], [1, 0])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f7f6f3]"
    >
      {/* Subtle texture lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              #111 0px,
              #111 1px,
              transparent 1px,
              transparent 80px
            )`,
          }}
        />
      </div>

      {/* Floating decorative circle — top right */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute top-16 right-12 w-52 h-52 rounded-full border border-[#e0ddd7] pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-16 w-40 h-40 rounded-full border border-[#e0ddd7]/60 pointer-events-none hidden lg:block"
      />

      {/* Floating small dots */}
      {[
        { x: '12%', y: '25%', delay: 0 },
        { x: '88%', y: '40%', delay: 0.6 },
        { x: '75%', y: '75%', delay: 1 },
        { x: '20%', y: '78%', delay: 0.4 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#cccccc] pointer-events-none"
          style={{ left: dot.x, top: dot.y }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i, delay: dot.delay, repeat: Infinity }}
        />
      ))}

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="pt-28 pb-16">

            {/* Top label row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex items-center justify-between mb-6 flex-wrap gap-4"
            >
              <div className="label-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Available for opportunities
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1 text-[#999999] text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#111111" className="text-[#111111]" />
                  ))}
                  <span className="ml-2 font-medium text-[#555555]">Passionate Developer</span>
                </div>
                {/* GitHub profile badge */}
                <a
                  id="hero-github-badge"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#555555] bg-[#eeece8] border border-[#e0ddd7] px-3 py-1.5 rounded-full hover:bg-[#e0ddd7] hover:text-[#111111] transition-all duration-200"
                >
                  <Github size={12} />
                  Building with code on GitHub
                </a>
              </div>
            </motion.div>

            {/* Large editorial heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-0"
            >
              <h1 className="display-heading leading-[0.88]">
                <span className="block">Port</span>
                <span className="block italic text-[#555555]">folio</span>
              </h1>
            </motion.div>

            {/* Horizontal rule with label */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4 my-8 origin-left"
            >
              <div className="h-px flex-1 bg-[#e0ddd7]" />
              <span className="text-xs font-semibold text-[#999999] tracking-widest uppercase whitespace-nowrap">
                {personalInfo.location} · 2025
              </span>
              <div className="h-px flex-1 bg-[#e0ddd7]" />
            </motion.div>

            {/* Content row: name + description + CTA */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-end">
              {/* Left: Name & title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-xs font-semibold tracking-widest text-[#999999] uppercase mb-2">My name is</div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
                  {personalInfo.name}
                </h2>
                <p className="text-[#999999] text-sm mt-2 font-medium">
                  Software Engineering Student & App Developer
                </p>

                {/* Profile avatar circle */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="mt-6 w-20 h-20 rounded-full bg-[#111111] flex items-center justify-center text-white text-2xl font-display font-bold border-2 border-[#e0ddd7]"
                >
                  HS
                </motion.div>
              </motion.div>

              {/* Center: Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-1"
              >
                <p className="text-[#555555] text-base leading-relaxed">
                  {personalInfo.tagline}
                </p>

                {/* Tech pill row */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {['Flutter', 'React', 'Next.js', 'TypeScript', 'Python'].map((t) => (
                    <span key={t} className="skill-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub CTA */}
                <motion.a
                  id="hero-explore-github-btn"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-xs font-semibold text-[#555555] hover:text-[#111111] transition-colors duration-200 group/gh"
                  whileHover={{ x: 3 }}
                >
                  <Github size={14} />
                  Explore My GitHub
                  <ArrowUpRight size={12} className="transition-transform group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5" />
                </motion.a>
              </motion.div>

              {/* Right: CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-3"
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="btn-primary group w-full justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View My Projects
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.button>
                <motion.button
                  onClick={scrollToContact}
                  className="btn-secondary w-full justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let&apos;s Connect
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#bbbbbb]"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
