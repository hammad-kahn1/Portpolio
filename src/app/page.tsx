'use client'

import CursorGlow from '@/components/CursorGlow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import AppShowcase from '@/components/AppShowcase'
import UIUX from '@/components/UIUX'
import Experience from '@/components/Experience'
import GitHubSection from '@/components/GitHubSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AppShowcase />
      <UIUX />
      <GitHubSection />
      <FeaturedProjects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
