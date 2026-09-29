'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Send, Mail, CheckCircle2, Linkedin, Sparkles, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.1) 0%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left Column: Contact Narrative ────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="label-tag mb-4 inline-flex">
              <Sparkles size={11} className="text-amber-500 dark:text-amber-400" />
              Direct Communication
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white leading-[1.1] mb-6">
              Let&apos;s build something{' '}
              <span className="italic text-gold-gradient">
                remarkable.
              </span>
            </h2>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm sm:text-base mb-10 max-w-md font-light">
              I am open to software engineering internships, academic research partnerships, and freelance mobile application projects.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-amber-500/25 flex items-center justify-center text-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all shadow-sm">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider block">Email Address</span>
                  <span className="text-sm font-semibold text-stone-900 dark:text-white">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-amber-500/25 flex items-center justify-center text-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all shadow-sm">
                  <Github size={16} />
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider block">GitHub Repository</span>
                  <span className="text-sm font-semibold text-stone-900 dark:text-white font-mono">@{personalInfo.github.split('/').pop()}</span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-amber-500/25 flex items-center justify-center text-amber-500 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all shadow-sm">
                  <Linkedin size={16} />
                </div>
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider block">Professional Network</span>
                  <span className="text-sm font-semibold text-stone-900 dark:text-white">LinkedIn Profile</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: Interactive Gold Form ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-white dark:bg-[#090913] border border-amber-500/20 rounded-3xl p-7 sm:p-9 relative shadow-sm dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[0.68rem] font-bold text-stone-700 dark:text-stone-400 mb-2 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[0.68rem] font-bold text-stone-700 dark:text-stone-400 mb-2 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[0.68rem] font-bold text-stone-700 dark:text-stone-400 mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="btn-primary w-full py-3.5 justify-center shadow-lg disabled:opacity-80"
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                >
                  {status === 'idle' && (
                    <>
                      <span>Transmit Message</span>
                      <Send size={14} className="ml-1" />
                    </>
                  )}
                  {status === 'loading' && (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-r-transparent animate-spin" />
                      Encrypting & Transmitting...
                    </span>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle2 size={16} />
                      Transmission Received!
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
