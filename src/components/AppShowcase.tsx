'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Wifi, Shield, Database, Layout, CheckCircle2, Sparkles } from 'lucide-react'
import { appFeatures } from '@/data/portfolio'

const featureIcons: Record<string, React.ElementType> = {
  'Mobile UI & Animations': Layout,
  'Application Logic': CheckCircle2,
  'API Integration': Wifi,
  'Authentication': Shield,
  'Database Integration': Database,
  'Responsive Layouts': Smartphone,
}

const previewScreens = [
  {
    title: 'Course Studio',
    subtitle: 'Academy App',
    image: '/projects/academy-app.jpg',
  },
  {
    title: 'Habit Telemetry',
    subtitle: 'Aura Wellness',
    image: '/projects/aura-wellness.jpg',
  },
  {
    title: 'Neural Dashboard',
    subtitle: 'PulseVision AI',
    image: '/projects/pulsevision-ai.jpg',
  },
]

function PhoneMockup({ screen, index, isInView }: { screen: typeof previewScreens[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 120 }}
      whileHover={{ y: -12, scale: 1.04 }}
      className="flex-shrink-0 cursor-pointer"
    >
      {/* Phone frame */}
      <div
        className="relative rounded-[36px] overflow-hidden border border-amber-500/30 dark:border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-black"
        style={{
          width: '165px',
          height: '320px',
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full z-30 bg-black border border-white/20 flex items-center justify-end px-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>

        {/* Screen Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={screen.image}
            alt={screen.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
        </div>

        {/* Screen Label info at bottom */}
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <p className="text-[0.62rem] text-amber-300 font-semibold uppercase tracking-wider">
            {screen.subtitle}
          </p>
          <p className="text-xs font-bold text-white truncate">
            {screen.title}
          </p>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/40 z-30" />
      </div>
    </motion.div>
  )
}

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="label-tag mb-4 inline-flex">
              <Sparkles size={11} className="text-amber-500 dark:text-amber-400" />
              Mobile App Engineering
            </span>
            <h2 className="section-title text-stone-900 dark:text-white mt-3 mb-6">
              From architectural blueprint to{' '}
              <span className="italic text-gold-gradient">
                tactile interface.
              </span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 text-sm sm:text-base font-light">
              Specialized in Flutter cross-platform architecture and React Native development. Engineering fluid 60fps animations, reactive local state, and offline persistence.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {appFeatures.map((feature, i) => {
                const Icon = featureIcons[feature] || CheckCircle2
                return (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/[0.025] border border-amber-500/15 dark:border-white/5 hover:border-amber-400/40 transition-all shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">{feature}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Dart', 'Riverpod', 'React Native', 'Firebase', 'SQLite'].map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-white/[0.04] border border-amber-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Phone Mockups showing real project screens */}
          <div className="lg:col-span-6 relative">
            <div className="flex items-center gap-5 justify-center overflow-x-auto pb-4 pt-2">
              {previewScreens.map((screen, i) => (
                <PhoneMockup key={screen.title} screen={screen} index={i} isInView={isInView} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
