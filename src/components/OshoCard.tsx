'use client'

import { useState } from 'react'
import { osho } from '@/data/projects'
import FeatureCard from './FeatureCard'

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

function TarotSpread() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <>
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
    </>
  )
}

export default function OshoCard() {
  return (
    <FeatureCard
      project={osho}
      slug="osho-zen-insight"
      emphasis={['entirely solo', 'streaming AI interpretations']}
      visual={<TarotSpread />}
      visualClass="osho-vis"
    />
  )
}
