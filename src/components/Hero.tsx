'use client'

import { useEffect, useState } from 'react'
import DotField from './DotField'
import { useCountUp, useMagnetic, useTilt, useYoe, prefersReducedMotion } from '@/lib/hooks'
import { EMAIL, GITHUB, LINKEDIN } from '@/data/links'
import { companyCount, countryCount } from '@/data/experience'
import { wushi } from '@/data/projects'

const ROLES = ['React & Next.js apps', 'iOS & Android apps', '3D / AR experiences', 'AI-automated dev workflows', 'pixel-perfect UIs']

const DATA_ROWS = [
  { key: 'currently',    val: 'M10c · London',      cls: 'accent', href: 'https://www.m10c.com/' },
  { key: 'education',    val: 'MSc CS · QMUL',      cls: 'accent', href: 'https://www.qmul.ac.uk/' },
  { key: 'side project', val: `${wushi.title} ↗`,  cls: 'green',  href: wushi.url },
  { key: 'available',    val: 'immediately',        cls: 'green' },
]

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (prefersReducedMotion()) return
    let i = 0, len = words[0].length, deleting = true, timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const word = words[i]
      len += deleting ? -1 : 1
      setText(word.slice(0, len))
      let delay = deleting ? 35 : 70
      if (!deleting && len === word.length) { deleting = true; delay = 1800 }
      else if (deleting && len === 0) { deleting = false; i = (i + 1) % words.length; delay = 300 }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 2600)
    return () => clearTimeout(timer)
  }, [words])
  return text
}

function SplitWord({ word, offset, grad }: { word: string; offset: number; grad?: boolean }) {
  return (
    <span className={`word${grad ? ' grad' : ''}`}>
      {word.split('').map((c, i) => (
        <span key={i} className="ch" style={{ animationDelay: `${.15 + (offset + i) * .045}s` }}>{c}</span>
      ))}
    </span>
  )
}

function Stat({ n, suffix, label, start }: { n: number; suffix: string; label: string; start: boolean }) {
  const v = useCountUp(n, start)
  return (
    <div className="stat">
      <b>{v}{suffix}</b>
      <small>{label}</small>
    </div>
  )
}

export default function Hero() {
  const yoe = useYoe()
  const role = useTypewriter(ROLES)
  const [ready, setReady] = useState(false)
  const cardRef = useTilt<HTMLDivElement>(8)
  const emailRef = useMagnetic<HTMLAnchorElement>(.35)
  const ghRef = useMagnetic<HTMLAnchorElement>(.35)
  const liRef = useMagnetic<HTMLAnchorElement>(.35)

  useEffect(() => { const t = setTimeout(() => setReady(true), 700); return () => clearTimeout(t) }, [])

  return (
    <section className="hero">
      <DotField />
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />

      <div className="hero-left">
        <div className="status-pill">
          <span className="status-dot" />
          Available for opportunities · London, UK
        </div>

        <div className="hello">Hi there <span className="hand">👋</span> I&apos;m</div>

        <h1 className="hero-name" aria-label="James Cheng">
          <SplitWord word="James" offset={0} />
          <SplitWord word="Cheng" offset={5} grad />
        </h1>

        <p className="sr-only">I build {ROLES.join(', ')}.</p>
        <div className="typer" aria-hidden>
          {'> '}I build <span className="t">{role}</span><span className="caret" />
        </div>

        <p className="hero-lede">
          Frontend Engineer with <strong>{yoe}+ years</strong> shipping web &amp; mobile products — from{' '}
          <span className="hl"><strong>AR experiences</strong></span> (Three.js) to{' '}
          <span className="hl v"><strong>iOS &amp; Android</strong></span> (React Native) to{' '}
          <span className="hl p"><strong>AI SaaS</strong></span>.
          I automate dev workflows with AI agents, and a psychology background helps me bridge design and engineering.
          Currently at <a href="https://www.m10c.com/" target="_blank" rel="noopener" className="inline-link">M10c</a>, London.
        </p>

        <div className="hero-ctas">
          <a ref={emailRef} href={`mailto:${EMAIL}`} className="btn p">✉ Email Me</a>
          <a ref={ghRef} href={GITHUB} target="_blank" rel="noopener" className="btn">GitHub <span className="arr">↗</span></a>
          <a ref={liRef} href={LINKEDIN} target="_blank" rel="noopener" className="btn">LinkedIn <span className="arr">↗</span></a>
        </div>
      </div>

      <div className="hero-right">
        <div className="info-card" ref={cardRef}>
          <div className="info-head"><i /><i /><i /><span>~/james/profile.ts</span></div>

          <div className="stat-row">
            <Stat n={yoe} suffix="+" label="years" start={ready} />
            <Stat n={companyCount} suffix="" label="companies" start={ready} />
            <Stat n={countryCount} suffix="" label="countries" start={ready} />
          </div>

          {DATA_ROWS.map(({ key, val, cls, href }) => (
            <div className="dt-row" key={key}>
              <span className="dt-key">{key}</span>
              {href
                ? <a href={href} target="_blank" rel="noopener" className={`dt-val ${cls}`}>{val}</a>
                : <span className={`dt-val ${cls}`}>{val}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint"><span className="mouse" />scroll</div>
    </section>
  )
}
