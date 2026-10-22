'use client'

import { useEffect } from 'react'

// Adds `.in` to every [data-reveal] block once it enters the viewport.
// Children stagger through their --i index; without script nothing is hidden.
export default function Reveal() {
  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>('[data-reveal]')
    blocks.forEach(b => Array.from(b.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i))))

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
      }),
      { rootMargin: '0px 0px -12% 0px' }
    )
    blocks.forEach(b => obs.observe(b))
    return () => obs.disconnect()
  }, [])

  return null
}
