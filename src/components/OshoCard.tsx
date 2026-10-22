'use client'

import { useState } from 'react'
import { osho } from '@/data/projects'

const CARDS = [
  { back: '☽', front: '☯', name: 'Clarity' },
  { back: '✦', front: '❀', name: 'Creativity' },
  { back: '☀', front: '✧', name: 'Courage' },
]

// fixed positions so server and client render the same markup
const STARS = Array.from({ length: 36 }, (_, i) => ({
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 61.3) % 100}%`,
  delay: `${(i * .37) % 3}s`,
}))

export default function OshoCard() {
  const [flipped, setFlipped] = useState<number | null>(null)

  const desc = osho.description
    .replace('entirely solo', '<strong>entirely solo</strong>')
    .replace('streaming AI interpretations', '<strong>streaming AI interpretations</strong>')

  return (
    <div className="osho">
      <div className="osho-body">
        <div className="file-tab">
          <span className="dot" />
          osho-zen-insight<span className="live"> · live</span>
        </div>

        <h3 className="osho-title">{osho.title}</h3>
        <div className="osho-sub">{osho.subtitle} · {osho.meta}</div>
        <p className="osho-desc" dangerouslySetInnerHTML={{ __html: desc }} />

        <div className="mini-lbl">architectural decisions</div>
        <div className="decisions">
          {osho.decisions.map(({ key, value }) => (
            <div className="dec" key={key}>
              <div className="dec-k">{key}</div>
              <div className="dec-v">{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {osho.tags.map(t => (
              <span key={t} className={`otag${osho.highlightTags.includes(t) ? ' hi' : ''}`}>{t}</span>
            ))}
          </div>
          <a href={osho.url} target="_blank" rel="noopener" className="btn p">View Live <span className="arr">↗</span></a>
        </div>
      </div>

      <div className="osho-vis">
        {STARS.map((s, i) => (
          <span key={i} className="star" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
        ))}
        <div className="orbit" />
        <div className="orbit o2" />
        <div className="t-spread">
          {CARDS.map((c, i) => (
            <button
              key={c.name}
              className={`t-card${flipped === i ? ' flip' : ''}`}
              onClick={() => setFlipped(f => (f === i ? null : i))}
              aria-label={`Draw card: ${c.name}`}
            >
              <span className="t-inner">
                <span className="t-face t-back"><span>{c.back}</span></span>
                <span className="t-face t-front"><span>{c.front}</span><small>{c.name}</small></span>
              </span>
            </button>
          ))}
        </div>
        <div className="t-hint">hover or tap to draw a card</div>
      </div>

      <div className="osho-metrics">
        {osho.metrics.map(({ n, l }) => (
          <div key={l} className="metric">
            <b>{n}</b>
            <small>{l}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
