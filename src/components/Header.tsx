'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 56,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'border-color .3s',
    }}>
      <Link href="/" style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '.75rem', fontWeight: 500,
        letterSpacing: '-.01em',
        color: 'var(--ink)', textDecoration: 'none', cursor: 'none',
      }}>
        james<span style={{ color: 'var(--accent)' }}>.</span>dev
      </Link>

      <nav style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {[
          ['#experience', 'Experience'],
          ['#education',  'Education'],
          ['#projects',   'Work'],
        ].map(([href, label]) => (
          <a key={href} href={href} style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '.7rem', letterSpacing: '.01em',
            color: 'var(--dim)', textDecoration: 'none',
            padding: '6px 12px', cursor: 'none',
            transition: 'color .2s, background .2s',
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.color = 'var(--ink)'
            ;(e.target as HTMLElement).style.background = 'var(--bg2)'
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.color = 'var(--dim)'
            ;(e.target as HTMLElement).style.background = 'transparent'
          }}>
            {label}
          </a>
        ))}
        <a href="#contact" style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '.7rem', letterSpacing: '.01em',
          color: 'var(--bg)', textDecoration: 'none',
          padding: '6px 12px', cursor: 'none',
          background: 'var(--ink)', marginLeft: 8,
          transition: 'background .2s',
        }}
        onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--accent)' }}
        onMouseLeave={e => { (e.target as HTMLElement).style.background = 'var(--ink)' }}>
          Hire Me
        </a>
      </nav>
    </header>
  )
}
