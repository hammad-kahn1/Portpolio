'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Wifi, Shield, Database, Layout, CheckCircle2 } from 'lucide-react'
import { appFeatures } from '@/data/portfolio'

const featureIcons: Record<string, React.ElementType> = {
  'Mobile UI & Animations': Layout,
  'Application Logic': CheckCircle2,
  'API Integration': Wifi,
  'Authentication': Shield,
  'Database Integration': Database,
  'Responsive Layouts': Smartphone,
}

function PhoneMockup({ index, isInView }: { index: number; isInView: boolean }) {
  const colors = ['#111111', '#222222', '#333333', '#444444']
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.88 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.14, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="flex-shrink-0"
    >
      {/* Phone frame */}
      <div
        className="relative rounded-[32px] overflow-hidden"
        style={{
          width: '148px',
          height: '280px',
          background: colors[index] || '#111111',
          border: '1.5px solid rgba(0,0,0,0.12)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.10)',
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full z-10 bg-[#f7f6f3]"
        />

        {/* Screen grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: '24px' }}>
          <div className="font-display text-white/20 text-5xl font-bold leading-none">
            {`0${index + 1}`}
          </div>
          <div className="mt-3 space-y-2 w-full px-4">
            {[1, 2, 3].map(j => (
              <div
                key={j}
                className="rounded-lg h-2 bg-white/15"
                style={{ width: `${60 + j * 10}%` }}
              />
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="absolute top-3 left-4 right-4 flex justify-between items-center z-20">
          <span className="text-white/40 text-[8px] font-medium">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 rounded-sm bg-white/30" />
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-white/20" />
      </div>
      <p className="text-center text-[#999999] text-xs mt-3">Screen 0{index + 1}</p>
    </motion.div>
  )
}

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-[#f7f6f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="label-tag mb-4 inline-flex">App Development</span>
            <h2 className="section-title text-[#111111] mt-3 mb-6">
              From idea to{' '}
              <span className="italic">interface.</span>
            </h2>
            <p className="text-[#777777] leading-relaxed mb-8 text-sm">
              I specialize in building beautiful, functional mobile applications. From the first
              wireframe to the final polished product — I handle every layer of the app.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {appFeatures.map((feature, i) => {
                const Icon = featureIcons[feature] || CheckCircle2
                return (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#111111] flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-sm text-[#555555] font-medium">{feature}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'React Native', 'Dart', 'Firebase'].map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — Phone mockups */}
          <div className="relative">
            <div className="flex items-end gap-4 justify-center overflow-x-auto pb-4">
              {[0, 1, 2, 3].map((i) => (
                <PhoneMockup key={i} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
