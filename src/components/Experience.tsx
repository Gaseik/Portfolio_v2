'use client'

import { useEffect, useState } from 'react'
import { experience } from '@/data/experience'

const details: Record<string, string[]> = {
  'M10c': [
    'Built responsive web & mobile apps with React, TypeScript, Next.js, React Native for client projects',
    'Implemented E2E testing with Playwright — reduced production bugs and improved release quality',
    'Designed pixel-perfect, accessible UIs from Figma; optimised performance via Server Components & lazy loading',
    'Managed full project lifecycle including API integration and CI/CD pipeline setup',
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
  const [yoe, setYoe] = useState(6)

  useEffect(() => {
    const y = Math.floor((Date.now() - new Date(2019, 6, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    setYoe(y)
  }, [])

  return (
    <section id="experience" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
        <span className="sec-ttl">experience</span>
        <span className="sec-note">{yoe}+ years</span>
      </div>

      <div className="exp-list" style={{ gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
        {experience.map((exp, i) => (
          <ExpItem key={exp.company} exp={exp} items={details[exp.company] ?? []} delay={i % 2 === 1 ? '.08s' : '0s'} />
        ))}
      </div>
    </section>
  )
}

function ExpItem({ exp, items, delay }: { exp: typeof experience[0], items: string[], delay: string }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      className="exp-item reveal"
      style={{ background: hov ? 'var(--bg3)' : 'var(--bg2)', padding: '28px 32px', transition: 'background .3s', transitionDelay: delay }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
        <div>
          <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 2 }}>
            {exp.role}
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.62rem', color: 'var(--accent)' }}>
            <>{exp.company === 'M10c' ? <a href='https://www.m10c.com/' target='_blank' rel='noopener' style={{color:'var(--accent)',textDecoration:'none',borderBottom:'1px solid rgba(0,102,255,.3)',cursor:'none'}}>M10c</a> : exp.company} · {exp.location}</>
          </div>
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.65rem', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>
          {exp.period}
        </div>
      </div>

      <p style={{ fontSize: '.85rem', lineHeight: 1.75, color: 'var(--ink2)' }}
        dangerouslySetInnerHTML={{ __html: exp.note.replace(/(React \+ Hyperledger Fabric|Three\.js \+ TypeScript|Agency environment)/g,
          '<strong style="color:var(--ink);font-weight:600">$1</strong>') }}
      />

      <div className="exp-details">
        <ul>
          {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}
