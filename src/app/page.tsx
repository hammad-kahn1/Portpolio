'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import AppShowcase from '@/components/AppShowcase'
import UIUX from '@/components/UIUX'
import Experience from '@/components/Experience'
import GitHubSection from '@/components/GitHubSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Dynamically import cursor to avoid SSR issues
const CursorGlow = dynamic(() => import('@/components/CursorGlow'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AppShowcase />
      <UIUX />
      <GitHubSection />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
