'use client'

import { useEffect, useState } from 'react'

const STACK = ['React', 'Next.js', 'TypeScript', 'React Native', 'iOS / Android', 'Node.js', 'Three.js', 'Tailwind', 'AWS', 'Docker', 'Figma']

const DATA_ROWS = [
  { key: 'currently',    val: 'M10c · London',       cls: 'accent' },
  { key: 'companies',    val: '5',                    cls: '' },
  { key: 'education',    val: 'MSc CS · QMUL',        cls: '' },
  { key: 'side project', val: 'Osho Zen Insight ↗',   cls: 'green' },
  { key: 'available',    val: 'immediately',           cls: 'green' },
]

export default function Hero() {
  const [yoe, setYoe] = useState(6)

  useEffect(() => {
    const y = Math.floor((Date.now() - new Date(2019, 6, 1).getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    setYoe(y)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 400px',
      borderBottom: '1px solid var(--line)',
      paddingTop: 56,
    }}>
      {/* LEFT */}
      <div style={{
        padding: '72px 64px 72px 48px',
        borderRight: '1px solid var(--line)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div className="status-bar">
          <div className="status-dot" />
          Available for opportunities · London, UK
        </div>

        <div style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: 'clamp(40px, 5.5vw, 72px)',
          fontWeight: 600, lineHeight: 1.05,
          letterSpacing: '-.03em', color: 'var(--ink)',
          marginBottom: 8,
          animation: 'fu .5s .1s both',
        }}>
          James Cheng
        </div>

        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '.85rem', color: 'var(--accent)',
          letterSpacing: '.02em', marginBottom: 32,
          animation: 'fu .5s .2s both',
        }}>
          Frontend Engineer · {yoe}+ years · React / Next.js / TypeScript
        </div>

        <p style={{
          fontSize: '.95rem', lineHeight: 1.75,
          color: 'var(--dim)', maxWidth: 420, marginBottom: 40,
          animation: 'fu .5s .3s both',
        }}>
          Building production-grade web and mobile products — from{' '}
          <strong style={{ color: 'var(--ink2)', fontWeight: 600 }}>AR experiences</strong>{' '}
          (Three.js) to{' '}
          <strong style={{ color: 'var(--ink2)', fontWeight: 600 }}>iOS &amp; Android</strong>{' '}
          (React Native) to{' '}
          <strong style={{ color: 'var(--ink2)', fontWeight: 600 }}>AI SaaS</strong>.
          Currently at M10c, London.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', animation: 'fu .5s .4s both' }}>
          <a href="mailto:james800822@hotmail.com" className="btn p">Email Me</a>
          <a href="https://github.com/james-cheng" target="_blank" rel="noopener" className="btn">GitHub ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" className="btn">LinkedIn ↗</a>
          <a href="/resume.pdf" target="_blank" className="btn">Resume ↗</a>
        </div>
      </div>

      {/* RIGHT */}
      <div style={{
        padding: '72px 48px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: 'var(--bg2)',
        animation: 'fi .6s .25s both',
      }}>
        <div>
          <div className="dt-row">
            <span className="dt-key">experience</span>
            <span className="dt-val">{yoe}+ years</span>
          </div>
          {DATA_ROWS.map(({ key, val, cls }) => (
            <div className="dt-row" key={key}>
              <span className="dt-key">{key}</span>
              <span className={`dt-val ${cls}`}>{val}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '.65rem', color: 'var(--dim)',
            letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 10,
          }}>stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {STACK.map(s => <span className="stag" key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
