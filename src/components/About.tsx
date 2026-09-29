'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Zap, Github, Linkedin, Award } from 'lucide-react'
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
    sub: '2nd Semester · 2026',
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
    <section id="about" className="section-padding bg-[#f7f6f3]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Pull quote — the visual anchor ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-start gap-4 lg:gap-6">
            <span
              className="font-display leading-none text-[#e0ddd7] select-none flex-shrink-0 translate-y-[-0.1em]"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
              aria-hidden
            >
              "
            </span>
            <div>
              <blockquote className="font-display italic leading-tight text-[#222222]"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}
              >
                I care just as much about how things look as how they work.
              </blockquote>
              <p className="mt-4 text-sm text-[#aaaaaa] font-medium not-italic">
                — Habiba Shah, Software Engineering Student
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Main grid ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Left: Real bio text + social links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2"
          >
            {/* Name/title marker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-px h-12 bg-[#e0ddd7]" />
              <div>
                <p className="text-[0.65rem] font-semibold text-[#bbbbbb] uppercase tracking-widest">
                  About
                </p>
                <p className="font-display text-xl font-bold text-[#111111] mt-0.5">
                  {personalInfo.name}
                </p>
              </div>
            </div>

            {/* Real LinkedIn bio */}
            <div className="space-y-4 mb-8">
              {aboutText.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="text-[#555555] leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Social CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                id="about-github-btn"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                id="about-linkedin-btn"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm py-2 px-4 flex items-center gap-2 border border-[#e0ddd7] rounded-full"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Bento info tiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 content-start"
          >
            {bentoItems.map((item, i) => {
              const { Icon } = item
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, type: 'spring', stiffness: 180 }}
                  className={`card p-4 ${item.span}`}
                >
                  <Icon size={12} className="text-[#cccccc] mb-2" />
                  <p className="text-[0.62rem] font-semibold text-[#cccccc] uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[#111111] leading-snug mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-xs text-[#aaaaaa] leading-snug">{item.sub}</p>
                </motion.div>
              )
            })}

            {/* Live availability pulse */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, type: 'spring', stiffness: 180 }}
              className="col-span-2 card p-4 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#111111] leading-none mb-0.5">
                  Available for opportunities
                </p>
                <p className="text-xs text-[#aaaaaa]">Internships · Freelance · Collaboration</p>
              </div>
              <Zap size={13} className="text-[#dddddd] ml-auto flex-shrink-0" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
