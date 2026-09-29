'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={dotRef}
      className="cursor-dot hidden lg:block"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
