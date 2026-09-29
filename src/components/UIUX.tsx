'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Palette, Layers, Box, Cpu } from 'lucide-react'

const uiComponents = [
  {
    name: 'Gold Island Button',
    type: 'Interactive Component',
    preview: (
      <div className="flex flex-col gap-2.5 p-4 justify-center h-full">
        <div className="inline-flex items-center justify-between pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 font-bold text-xs shadow-md">
          <span>Primary Luxury Action</span>
          <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center text-[10px]">↗</span>
        </div>
        <div className="inline-flex items-center justify-between px-4 py-2 rounded-full border border-amber-500/40 text-amber-700 dark:text-amber-300 font-semibold text-xs bg-amber-500/10">
          <span>Secondary Glow</span>
          <span className="text-[10px]">✦</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Champagne & Gold Tokens',
    type: 'Design Tokens',
    preview: (
      <div className="p-4 flex flex-col justify-center h-full gap-2">
        <div className="grid grid-cols-4 gap-2">
          {['#fef08a', '#f59e0b', '#d97706', '#78350f'].map((c) => (
            <div
              key={c}
              className="h-8 rounded-lg border border-amber-500/20 flex items-center justify-center"
              style={{ background: c, boxShadow: `0 0 16px ${c}40` }}
            >
              <span className="w-2 h-2 rounded-full bg-white/70" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2 text-[9px] text-stone-600 dark:text-stone-400 font-mono text-center">
          <span>Light Gold</span>
          <span>Amber Gold</span>
          <span>Bronze Gold</span>
          <span>Deep Cognac</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Hardware Double-Bezel',
    type: 'Nested Architecture',
    preview: (
      <div className="p-3.5 flex items-center justify-center h-full">
        <div className="w-full p-1.5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/25">
          <div className="p-3 rounded-xl bg-white dark:bg-[#07070f] border border-amber-500/15 flex items-center justify-between shadow-sm">
            <span className="text-xs text-stone-900 dark:text-white font-medium">Doppelrand Core</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold">Active</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Form Architecture',
    type: 'Input Fields',
    preview: (
      <div className="p-4 space-y-2 flex flex-col justify-center h-full">
        <div className="rounded-xl px-3.5 py-2 text-xs text-stone-400 bg-stone-100 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10">
          Search telemetry...
        </div>
        <div className="rounded-xl px-3.5 py-2 text-xs text-stone-900 dark:text-white border border-amber-500 bg-amber-500/[0.08] shadow-[0_0_12px_rgba(245,158,11,0.25)] flex items-center justify-between">
          <span>Focused state</span>
          <span className="text-amber-500 text-[10px]">✓</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Fluid Typography Scale',
    type: 'Design System',
    preview: (
      <div className="p-4 space-y-1.5 flex flex-col justify-center h-full">
        <div className="text-base font-display font-bold text-stone-900 dark:text-white leading-none">Editorial 48px</div>
        <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">Display Semibold 24px</div>
        <div className="text-[11px] text-stone-600 dark:text-stone-400">Micro text — 12px / 1.5 lineHeight</div>
        <div className="text-[9px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-widest">Metadata Pill</div>
      </div>
    ),
  },
  {
    name: 'Kinetic Specular Glass',
    type: 'Surface Physics',
    preview: (
      <div className="p-4 relative h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-yellow-500/15" />
        <div className="relative px-4 py-2 rounded-2xl bg-white/70 dark:bg-white/[0.06] border border-amber-500/30 backdrop-blur-md text-xs font-semibold text-stone-900 dark:text-white shadow-sm flex items-center gap-2">
          <Sparkles size={13} className="text-amber-500 animate-spin-slow" />
          <span>Surface Specular</span>
        </div>
      </div>
    ),
  },
]

export default function UIUX() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="label-tag mb-4 inline-flex">
            <Palette size={11} className="text-amber-500 dark:text-amber-400" />
            Design Craft & Systems
          </span>
          <h2 className="section-title text-stone-900 dark:text-white mt-3 mb-4">
            Engineered with spatial rhythm and{' '}
            <span className="italic text-gold-gradient">
              tactile precision.
            </span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl text-sm sm:text-base font-light leading-relaxed">
            Software should not merely function — it should delight through thoughtful haptics, seamless kinetic motion, and balanced visual hierarchy.
          </p>
        </motion.div>

        {/* UI Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uiComponents.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="card overflow-hidden group"
            >
              {/* Preview Area */}
              <div className="border-b border-amber-500/15 dark:border-white/10 bg-amber-50/30 dark:bg-white/[0.015] h-[120px]">
                {comp.preview}
              </div>

              {/* Label */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {comp.name}
                    </h4>
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      {comp.type}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-amber-500">
                    <Sparkles size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Tools Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-amber-500/20 bg-white dark:bg-white/[0.03] backdrop-blur-xl shadow-sm">
            <Palette size={16} className="text-amber-500" />
            <span className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-medium">Design & Prototyping:</span>
            {['Figma', 'Prototyping', 'Design Tokens', 'User Research'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium text-stone-700 dark:text-stone-300 bg-amber-500/10 border border-amber-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
