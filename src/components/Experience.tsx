'use client'

import { useEffect, useRef, useState } from 'react'
import { experience } from '@/data/experience'
import { useYoe } from '@/lib/hooks'

export default function Experience() {
  const yoe = useYoe()
  const [open, setOpen] = useState<string | null>(experience[0].company)
  const listRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  // timeline rail fills as you scroll through the section
  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current
      if (!el || !fillRef.current) return
      const r = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * .6 - r.top) / r.height))
      fillRef.current.style.transform = `scaleY(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience" className="sec">
      <div className="sec-head">
        <div className="reveal">
          <span className="sec-idx">01 / experience</span>
          <h2 className="sec-big">Where I&apos;ve<br /><em>built things.</em></h2>
        </div>
        <p className="sec-note reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          {yoe}+ years across London &amp; Taipei — agencies, startups and enterprise. Tap a role to expand.
        </p>
      </div>

      <div className="timeline" ref={listRef}>
        <div className="tl-rail"><div className="tl-fill" ref={fillRef} /></div>
        {experience.map((exp, i) => (
          <ExpItem
            key={exp.company}
            exp={exp}
            index={i}
            open={open === exp.company}
            onToggle={() => setOpen(o => (o === exp.company ? null : exp.company))}
          />
        ))}
      </div>
    </section>
  )
}

function ExpItem({ exp, index, open, onToggle }: {
  exp: typeof experience[0]; index: number; open: boolean; onToggle: () => void
}) {
  const id = `exp-${index}`
  const note = exp.note.replace(
    /(React \+ Hyperledger Fabric|Three\.js \+ TypeScript|AI agents|4 client projects|\+20% interaction|−30% load time)/g,
    '<strong>$1</strong>',
  )

  return (
    <div className="reveal-l" style={{ '--d': `${index * .08}s` } as React.CSSProperties}>
      <div className={`exp-item${open ? ' open' : ''}${index === 0 ? ' now' : ''}`}>
        <span className="exp-node" />
        <button className="exp-btn" onClick={onToggle} aria-expanded={open} aria-controls={id}>
          <span>
            <span className="exp-role">{exp.role}</span>
            <span className="exp-meta">{exp.company} · {exp.location}</span>
          </span>
          <span className="exp-side">
            <span className="exp-period">{exp.period}</span>
            <span className="exp-plus" aria-hidden />
          </span>
        </button>

        <p className="exp-note">
          <span dangerouslySetInnerHTML={{ __html: note }} />
          {exp.url && <> <a className="inline-link" href={exp.url} target="_blank" rel="noopener">{exp.url.replace(/^https:\/\/(www\.)?|\/$/g, '')} ↗</a></>}
        </p>

        <div className="exp-details" id={id}>
          <div>
            <ul>
              {exp.details.map((item, idx) => (
                <li key={idx} style={{ '--i': idx } as React.CSSProperties}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
