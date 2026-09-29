'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Send, Mail, CheckCircle, Linkedin, Lock } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission since we have no backend
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding bg-[#111111] border-t border-white/5" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Honest Contact Copy ────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              <span className="text-[0.65rem] font-semibold text-white/50 uppercase tracking-widest">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              Let&apos;s build something <span className="italic text-white/50">real.</span>
            </h2>

            <p className="text-white/60 leading-relaxed text-base mb-10 max-w-md">
              I&apos;m currently a Software Engineering student actively looking for real-world projects, internships, and opportunities to learn and contribute. My inbox is always open.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Mail size={15} />
                </div>
                <span className="text-sm font-medium">{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Github size={15} />
                </div>
                <span className="text-sm font-medium">@{personalInfo.github.split('/').pop()}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Linkedin size={15} />
                </div>
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* ── Right: Transparent Form ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              
              {/* Honest Notice */}
              <div className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5 mb-8">
                <Lock size={14} className="text-white/40 mt-0.5 flex-shrink-0" />
                <p className="text-[0.7rem] text-white/50 leading-relaxed">
                  <strong className="text-white/70 font-semibold">Note:</strong> As this is a static site without a backend, this form is currently a UI demonstration. Please use the direct email link on the left to reach me!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[0.65rem] font-semibold text-white/40 mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors text-sm rounded-none"
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[0.65rem] font-semibold text-white/40 mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors text-sm rounded-none"
                    placeholder="jane@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[0.65rem] font-semibold text-white/40 mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors text-sm resize-none rounded-none"
                    placeholder="Hello! I'd like to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full py-3.5 bg-white text-[#111111] text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-transform disabled:opacity-90 disabled:cursor-not-allowed"
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                >
                  {status === 'idle' && (
                    <>
                      Send Demo Message
                      <Send size={14} className="ml-1 opacity-70" />
                    </>
                  )}
                  {status === 'loading' && (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border-2 border-[#111111] border-r-transparent animate-spin" />
                      Sending...
                    </span>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle size={15} className="text-green-600" />
                      Demo Sent Successfully!
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
