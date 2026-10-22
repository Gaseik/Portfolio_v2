'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const NAV = [
  { id: 'experience', label: 'Experience', cls: 'nav-exp' },
  { id: 'projects',   label: 'Projects',   cls: '' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 })
  const progressRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`

      let current = ''
      for (const { id } of NAV) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * .4) current = id
      }
      const contact = document.getElementById('contact')
      if (contact && contact.getBoundingClientRect().top < window.innerHeight * .4) current = ''
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null
      if (el && el.offsetWidth) setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 })
      else setPill(p => ({ ...p, opacity: 0 }))
    }
    measure()
    document.fonts?.ready.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <>
      <div className="progress" ref={progressRef} />
      <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="logo">
          james<span className="dot">.</span>dev
        </Link>

        <nav className="nav">
          <span className="nav-pill" style={pill} />
          {NAV.map(({ id, label, cls }) => (
            <a
              key={id} href={`#${id}`}
              ref={el => { linkRefs.current[id] = el }}
              className={`nav-a ${cls}${active === id ? ' on' : ''}`}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            <span className="wave">👋</span> Hire Me
          </a>
        </nav>
      </header>
    </>
  )
}
