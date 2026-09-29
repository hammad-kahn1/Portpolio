'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Mail, Linkedin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Header + social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase mb-6 text-white/40 border border-white/10 rounded-full px-4 py-1.5"
            >
              Let&apos;s Talk
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Have an idea?
              <br />
              <span className="italic text-white/60">Let&apos;s build it.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 text-base">
              I&apos;m always interested in learning, collaborating, and creating something
              meaningful. Whether it&apos;s a project, opportunity, or just a hello — my inbox is open.
            </p>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/12 text-white/50 hover:text-white hover:border-white/25 text-sm font-medium transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Direct email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <p className="text-white/35 text-sm">
                Or email directly at{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white/70 hover:text-white transition-colors font-medium underline underline-offset-2"
                >
                  {personalInfo.email}
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-widest uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      className="form-input"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-widest uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 mb-2 tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-input resize-none"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center py-3.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={sent}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
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
