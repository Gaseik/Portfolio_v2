'use client'

import { useEffect, useRef, useState } from 'react'
import { experience } from '@/data/experience'
import { useYoe } from '@/lib/hooks'

const details: Record<string, string[]> = {
  'M10c': [
    'Developed and maintained web applications and cross-platform mobile apps using React, Next.js, and React Native',
    'Worked across multiple client projects simultaneously, adapting quickly to different technical requirements and codebases',
    'Implemented E2E testing workflows using Maestro, improving test coverage across mobile app flows',
    'Collaborated closely with designers and backend developers to deliver end-to-end product features across web and mobile platforms',
  ],
  'Mulder Tech': [
    'Built medical device traceability platform using React and Hyperledger Fabric blockchain',
    'Implemented features for tracking usage, inventory, and disposal of medical supplies',
    'Managed AWS deployment and CI/CD pipelines for reliable full-stack delivery',
    'Collaborated with backend developers to design and integrate RESTful APIs',
  ],
  'Spe3d Co.': [
    "Led frontend for Taiwan's leading AR startup — integrated 3D/AR experiences using Three.js & TypeScript",
    'Boosted user interaction by 20% through optimised 3D rendering and interaction design',
    'Overhauled build workflow — cut load times by 30% and improved scalability in Agile environment',
    'Collaborated cross-functionally with design and product teams on feature delivery',
  ],
  'Hannlync Co.': [
    'Implemented mobile-first responsive designs with UX/UI team — improved engagement by 15%',
    'Led development of personnel tracking app for UMC during COVID with real-time data processing',
    'Built live-streaming platform for corporate shareholder meetings using multi-national servers',
    'Developed 4 B2B product pages across NaaS / MaaS / SaaS / RaaS service lines',
  ],
}

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
            items={details[exp.company] ?? []}
            index={i}
            open={open === exp.company}
            onToggle={() => setOpen(o => (o === exp.company ? null : exp.company))}
          />
        ))}
      </div>
    </section>
  )
}

function ExpItem({ exp, items, index, open, onToggle }: {
  exp: typeof experience[0]; items: string[]; index: number; open: boolean; onToggle: () => void
}) {
  const id = `exp-${index}`
  const note = exp.note.replace(
    /(React \+ Hyperledger Fabric|Three\.js \+ TypeScript|Agency environment|\+20% interaction|−30% load time)/g,
    '<strong>$1</strong>',
  )

  return (
    <div className="reveal-l" style={{ '--d': `${index * .08}s` } as React.CSSProperties}>
      <div className={`exp-item${open ? ' open' : ''}${index === 0 ? ' now' : ''}`}>
        <span className="exp-node" />
        <button className="exp-btn" onClick={onToggle} aria-expanded={open} aria-controls={id}>
          <div>
            <div className="exp-role">{exp.role}</div>
            <div className="exp-meta">{exp.company} · {exp.location}</div>
          </div>
          <div className="exp-side">
            <span className="exp-period">{exp.period}</span>
            <span className="exp-plus" aria-hidden />
          </div>
        </button>

        <p className="exp-note" dangerouslySetInnerHTML={{ __html: note }} />

        <div className="exp-details" id={id}>
          <div>
            <ul>
              {items.map((item, idx) => (
                <li key={idx} style={{ '--i': idx } as React.CSSProperties}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
