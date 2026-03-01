'use client'

import { useState } from 'react'
import { education } from '@/data/experience'

export default function Education() {
  return (
    <section id="education" style={{ padding: '72px 48px', background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>
      <div className="reveal" style={{ marginBottom: 40 }}>
        <span className="sec-ttl">education</span>
      </div>

      <div className="edu-strip" style={{ gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
        {education.map((edu, i) => (
          <EduItem key={edu.school} edu={edu} delay={i === 1 ? '.08s' : '0s'} />
        ))}
      </div>
    </section>
  )
}

function EduItem({ edu, delay }: { edu: typeof education[0], delay: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div className="reveal"
      style={{
        background: hov ? 'var(--bg3)' : 'var(--bg2)',
        padding: '28px 32px',
        display: 'grid', gridTemplateColumns: '1fr 100px',
        alignItems: 'center', gap: 16,
        transition: 'background .2s', transitionDelay: delay,
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>
          {edu.degree}
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.68rem', color: 'var(--ink2)' }}>
          {edu.school}
        </div>
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.65rem', color: 'var(--faint)', textAlign: 'right', whiteSpace: 'nowrap' }}>
        {edu.year}
      </div>
    </div>
  )
}
