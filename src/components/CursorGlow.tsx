'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const trail = trailRef.current
    if (!dot || !trail) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let trailX = mouseX
    let trailY = mouseY
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12
      trailY += (mouseY - trailY) * 0.12
      trail.style.left = `${trailX}px`
      trail.style.top = `${trailY}px`
      animationFrameId = requestAnimationFrame(animateTrail)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animationFrameId = requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div ref={trailRef} className="cursor-trail hidden lg:block" />
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
    </>
  )
}
