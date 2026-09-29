'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Zap, Github, Linkedin, Award, ArrowUpRight } from 'lucide-react'
import { personalInfo, aboutText } from '@/data/portfolio'

const bentoItems = [
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Peshawar, Pakistan',
    sub: 'Khyber Pakhtunkhwa · UTC+5',
    span: '',
  },
  {
    Icon: GraduationCap,
    label: 'Degree',
    value: 'BS Software Engineering',
    sub: '2nd Semester · Active',
    span: '',
  },
  {
    Icon: GraduationCap,
    label: 'University',
    value: 'UET Peshawar',
    sub: 'University of Engineering & Technology',
    span: 'col-span-2',
  },
  {
    Icon: Award,
    label: 'Certificate',
    value: 'Basic Computer Literacy',
    sub: 'KOICA & UNWOMEN · D4WEE · 2026',
    span: 'col-span-2',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Pull Quote Banner ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20 p-8 sm:p-10 rounded-[2rem] bg-white dark:bg-[#111115] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.2)] shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-start gap-4 lg:gap-8 relative z-10">
            <span
              className="font-display leading-none text-[#111111]/15 dark:text-[#eed788]/25 select-none flex-shrink-0 -translate-y-4"
              style={{ fontSize: 'clamp(4rem, 8vw, 7.5rem)' }}
              aria-hidden
            >
              &ldquo;
            </span>
            <div>
              <blockquote
                className="font-display italic leading-tight text-[#111111] dark:text-[#f5f5f7]"
                style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)' }}
              >
                I care just as much about how things look and feel as how they perform under the hood.
              </blockquote>
              <p className="mt-4 text-xs sm:text-sm text-[#555555] dark:text-[#eed788] font-semibold tracking-wide not-italic uppercase font-mono">
                — Habiba Shah · Software Engineering Student &amp; App Developer
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Main 2-Column Content ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: Bio narrative + Social buttons */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-[#111111] dark:bg-[#eed788]" />
              <div>
                <p className="text-[0.65rem] font-semibold text-[#888888] dark:text-[#eed788] uppercase tracking-widest font-mono">
                  Engineering Philosophy
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#f5f5f7] mt-0.5">
                  About <span className="italic dark:text-[#c4b393]">Me</span>
                </h2>
              </div>
            </div>

            {/* Real LinkedIn & Academic Bio */}
            <div className="space-y-4 text-[#555555] dark:text-[#a1a1aa] text-sm sm:text-base leading-relaxed mb-8 font-light">
              {aboutText.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Social CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3.5"
            >
              <a
                id="about-github-btn"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2 px-5 flex items-center gap-2 group"
              >
                <Github size={15} />
                GitHub Profile
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                id="about-linkedin-btn"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm py-2 px-5 flex items-center gap-2 group"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Double-Bezel Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3.5 content-start"
          >
            {bentoItems.map((item, i) => {
              const { Icon } = item
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 180 }}
                  whileHover={{ y: -4 }}
                  className={`p-1.5 rounded-2xl bg-white dark:bg-[#111115] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.2)] hover:border-[#111111] dark:hover:border-[#eed788] transition-all duration-300 shadow-sm ${item.span}`}
                >
                  <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#15151a] h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-7 h-7 rounded-lg bg-black/5 dark:bg-[rgba(196,179,147,0.12)] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.2)] flex items-center justify-center text-[#111111] dark:text-[#eed788]">
                        <Icon size={14} />
                      </div>
                      <span className="text-[0.62rem] font-bold text-[#888888] dark:text-[#c4b393] uppercase tracking-widest font-mono">
                        {item.label}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111111] dark:text-[#f5f5f7] leading-snug mb-1">
                        {item.value}
                      </p>
                      <p className="text-xs text-[#555555] dark:text-[#a1a1aa] leading-snug">{item.sub}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Live availability pulse card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, type: 'spring', stiffness: 180 }}
              className="col-span-2 p-1.5 rounded-2xl bg-white dark:bg-[#111115] border border-[#e0ddd7] dark:border-[rgba(196,179,147,0.3)] shadow-sm"
            >
              <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#15151a] flex items-center gap-3.5">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-[#eed788] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-[#eed788] dark:shadow-[0_0_10px_#eed788]" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#111111] dark:text-[#f5f5f7] leading-none mb-1">
                    Open for Engineering Opportunities
                  </p>
                  <p className="text-xs text-[#555555] dark:text-[#a1a1aa]">
                    Internships · Academic Collaborations · Mobile Dev
                  </p>
                </div>
                <Zap size={15} className="text-[#111111] dark:text-[#eed788] ml-auto flex-shrink-0" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
