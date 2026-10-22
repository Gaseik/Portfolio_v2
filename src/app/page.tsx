'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { STACK } from '@/data/links'

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
      }),
      { threshold: .08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-l, .reveal-s').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <Marquee items={STACK} />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}
