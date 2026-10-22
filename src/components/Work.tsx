'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { osho, projects } from '@/data/projects'

type Item = {
  name: string
  cat: string
  impact: string
  tags: string[]
  image?: string
  href?: string
  hrefLabel?: string
}

const ITEMS: Item[] = [
  {
    name: osho.title,
    cat: 'AI product · Solo · 2024–Present',
    impact: osho.description,
    tags: osho.tags,
    href: '#osho',
    hrefLabel: 'Read the case',
  },
  ...projects.map(p => ({
    name: p.name,
    cat: p.cat,
    impact: p.impact,
    tags: p.tags,
    image: p.image,
    href: p.url,
    hrefLabel: p.urlLabel,
  })),
]

export default function Work() {
  const [active, setActive] = useState(0)
  const [swap, setSwap] = useState(false)
  const shown = useRef(0)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  // the name crossing the middle of the viewport is the current one
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx))
      }),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    itemRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // facts fade out, change, fade back in
  const [facts, setFacts] = useState(0)
  useEffect(() => {
    if (active === shown.current) return
    setSwap(true)
    const t = setTimeout(() => { shown.current = active; setFacts(active); setSwap(false) }, 160)
    return () => clearTimeout(t)
  }, [active])

  const f = ITEMS[facts]

  return (
    <section id="work" className="work" aria-labelledby="work-h">
      <div className="work-grid">
        <ol className="work-list">
          <li className="work-item" data-reveal>
            <h2 id="work-h" className="work-name work-head">Selected work</h2>
          </li>
          {ITEMS.map((it, i) => (
            <li
              key={it.name}
              data-idx={i}
              ref={el => { itemRefs.current[i] = el }}
              className={`work-item${active === i ? ' on' : ''}`}
            >
              {it.href
                ? <a className="work-name" href={it.href} {...(it.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{it.name}</a>
                : <span className="work-name">{it.name}</span>}
              <div className="work-pic" aria-hidden="true">
                {it.image
                  ? <Image src={it.image} alt="" fill sizes="92vw" />
                  : <OshoSpread on />}
              </div>
              <p className="work-kind"><b>{it.cat}.</b> {it.impact}</p>
            </li>
          ))}
        </ol>

        <div className="work-stage">
          <div className="work-held">
            <div className="work-frame">
              <OshoSpread on={active === 0} />
              {ITEMS.map((it, i) => it.image && (
                <Image
                  key={it.image}
                  src={it.image} alt={`${it.name} — interface`}
                  fill sizes="(max-width: 720px) 64vw, 40vw"
                  className={active === i ? 'on' : ''}
                />
              ))}
            </div>
            <div className={`work-facts${swap ? ' swap' : ''}`} aria-live="polite">
              <p className="kind">{f.cat}</p>
              <p className="impact">{f.impact}</p>
              <p className="stack">{f.tags.join(' · ')}</p>
              {f.href && f.hrefLabel && (
                <p>
                  <a className="link" href={f.href} {...(f.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
                    {f.hrefLabel} {f.href.startsWith('http') ? '↗' : '↓'}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Osho has no screenshot here; its frame shows the product's own three-card spread.
function OshoSpread({ on }: { on: boolean }) {
  return (
    <svg
      viewBox="0 0 400 300" role="img" aria-label="Osho Zen Insight — three-card spread"
      className={on ? 'on' : ''}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#05070a', opacity: on ? 1 : 0, transition: 'opacity 200ms ease' }}
    >
      {[-1, 0, 1].map(k => (
        <g key={k} transform={`translate(${200 + k * 82} ${k === 0 ? 140 : 156}) rotate(${k * 6})`}>
          <rect x="-34" y="-55" width="68" height="110" fill={k === 0 ? '#e3e1dc' : '#1f2b4d'} />
          <rect x="-29" y="-50" width="58" height="100" fill="none" stroke={k === 0 ? '#1f2b4d' : '#3a4870'} strokeWidth="1" />
          {k === 0
            ? <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2b4d" fontFamily="inherit">Existence</text>
            : <circle r="11" fill="none" stroke="#6b7ba8" strokeWidth="1.5" />}
        </g>
      ))}
      <rect x="110" y="236" width="180" height="4" fill="#2a3040" />
      <rect x="110" y="236" width="112" height="4" fill="#f7941d" />
    </svg>
  )
}
