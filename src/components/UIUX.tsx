'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const uiComponents = [
  {
    name: 'Button System',
    type: 'Component',
    preview: (
      <div className="flex flex-col gap-2 p-4">
        <button className="text-xs font-semibold px-4 py-2 rounded-full bg-[#111111] text-white">
          Primary Button
        </button>
        <button className="text-xs font-semibold px-4 py-2 rounded-full text-[#111111] border border-[#111111]">
          Outline Button
        </button>
        <button className="text-xs text-[#777777] font-medium px-4 py-2">
          Ghost Button
        </button>
      </div>
    ),
  },
  {
    name: 'Color Palette',
    type: 'Design Tokens',
    preview: (
      <div className="p-4">
        <div className="grid grid-cols-5 gap-1 mb-2">
          {['#f7f6f3', '#e0ddd7', '#cccccc', '#999999', '#555555'].map((c) => (
            <div key={c} className="h-6 rounded-md border border-[#e0ddd7]" style={{ background: c }} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1">
          {['#444444', '#333333', '#222222', '#111111', '#000000'].map((c) => (
            <div key={c} className="h-6 rounded-md" style={{ background: c }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    name: 'Input Fields',
    type: 'Component',
    preview: (
      <div className="p-4 space-y-2">
        <div className="rounded-xl px-3 py-2 text-xs text-[#999999] bg-[#f7f6f3] border border-[#e0ddd7]">
          Search anything...
        </div>
        <div className="rounded-xl px-3 py-2 text-xs text-[#111111] border border-[#111111] bg-white">
          Focused input ✓
        </div>
      </div>
    ),
  },
  {
    name: 'Card Design',
    type: 'Layout',
    preview: (
      <div className="p-3">
        <div className="rounded-2xl p-3 bg-white border border-[#e0ddd7] shadow-sm">
          <div className="h-12 rounded-xl mb-2 bg-[#f7f6f3]" />
          <div className="h-2 w-3/4 rounded bg-[#e0ddd7] mb-1" />
          <div className="h-1.5 w-1/2 rounded bg-[#eeece8]" />
        </div>
      </div>
    ),
  },
  {
    name: 'Typography',
    type: 'Design System',
    preview: (
      <div className="p-4 space-y-1">
        <div className="text-sm font-display font-bold text-[#111111]">Heading XL</div>
        <div className="text-xs font-semibold text-[#333333]">Heading MD</div>
        <div className="text-[10px] text-[#777777]">Body text — comfortable and legible</div>
        <div className="text-[9px] text-[#aaaaaa] font-medium tracking-widest uppercase">Label text</div>
      </div>
    ),
  },
  {
    name: 'Editorial Grid',
    type: 'Visual Style',
    preview: (
      <div className="p-4 relative h-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #111 0, #111 1px, transparent 1px, transparent 28px)`,
          }}
        />
        <div className="absolute inset-4 rounded-2xl flex items-center justify-center text-xs font-medium text-[#555555] bg-white border border-[#e0ddd7]">
          Layout System ✦
        </div>
      </div>
    ),
  },
]

export default function UIUX() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="label-tag mb-4 inline-flex">Design Craft</span>
          <h2 className="section-title text-[#111111] mt-3 mb-4">
            I don&apos;t just make it work —{' '}
            <span className="italic">I make it feel good to use.</span>
          </h2>
          <p className="text-[#999999] max-w-xl text-sm leading-relaxed">
            Design and engineering go hand in hand. Here&apos;s a glimpse into my design thinking.
          </p>
        </motion.div>

        {/* UI components grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {uiComponents.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="card overflow-hidden cursor-default group"
            >
              {/* Preview area */}
              <div className="border-b border-[#e0ddd7] bg-[#fafaf9]" style={{ minHeight: '110px' }}>
                {comp.preview}
              </div>

              {/* Label */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#111111]">{comp.name}</div>
                    <div className="text-xs mt-0.5 font-medium text-[#999999]">{comp.type}</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-[10px]">✦</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design tools badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[#e0ddd7] bg-white">
            <span className="text-xl">🎨</span>
            <span className="text-sm text-[#777777]">Design tools:</span>
            {['Figma', 'Adobe XD', 'Canva'].map((t) => (
              <span key={t} className="skill-tag text-xs">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
