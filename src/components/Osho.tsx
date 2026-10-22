'use client'

import { useEffect, useRef, useState } from 'react'
import { osho } from '@/data/projects'

type Reading = typeof osho.readings[number]

function pick(n: number) {
  const pool = [...osho.readings]
  const out: Reading[] = []
  while (out.length < n) out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0])
  return out
}

export default function Osho() {
  const [spread, setSpread] = useState<Reading[]>(() => osho.readings.slice(0, 3))
  const [flipped, setFlipped] = useState<number | null>(null)
  const [typed, setTyped] = useState('')
  const timer = useRef<ReturnType<typeof setInterval>>(undefined)

  useEffect(() => () => clearInterval(timer.current), [])

  // streams the sample reading word by word, the way the app streams from Groq
  const draw = (i: number) => {
    if (flipped !== null) return
    setFlipped(i)
    const words = spread[i].text.split(' ')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTyped(spread[i].text); return }
    let n = 0
    setTyped('')
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      n++
      setTyped(words.slice(0, n).join(' '))
      if (n >= words.length) clearInterval(timer.current)
    }, 55)
  }

  const reset = () => {
    clearInterval(timer.current)
    setFlipped(null)
    setTyped('')
    setTimeout(() => setSpread(pick(3)), 360)
  }

  const current = flipped !== null ? spread[flipped] : null
  const streaming = current && typed.length < current.text.length

  return (
    <section id="osho" className="osho" aria-labelledby="osho-h">
      <div className="osho-grid">
        <div data-reveal>
          <h2 id="osho-h" className="sec-head">{osho.title}</h2>
          <p className="osho-lead">{osho.lead}</p>
          <p className="osho-body">{osho.description}</p>

          <dl className="osho-dec">
            {osho.decisions.map(({ key, value }) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="osho-facts">
            {osho.metrics.map(({ n, l }) => (
              <div key={l}><b className="num">{n}</b>{l}</div>
            ))}
          </div>

          <p className="osho-stack">{osho.tags.join(' · ')}</p>
          <a href={osho.url} target="_blank" rel="noopener" className="btn">
            Open the live app <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="draw" data-ui data-reveal>
          <div className="draw-spread">
            {spread.map((r, i) => (
              <button
                key={r.card + i}
                type="button"
                className={`card${flipped === i ? ' flipped' : ''}`}
                onClick={() => draw(i)}
                aria-label={flipped === i ? `${r.card}, card ${r.n}` : `Draw card ${i + 1}`}
                disabled={flipped !== null && flipped !== i}
                style={{ opacity: flipped !== null && flipped !== i ? .35 : 1, transition: 'transform 700ms var(--ease-expo), opacity 300ms ease' }}
              >
                <span className="card-face card-back" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></svg>
                </span>
                <span className="card-face card-front" aria-hidden="true">
                  <small>{r.n}</small>{r.card}
                </span>
              </button>
            ))}
          </div>

          <div className="draw-reading" aria-live="polite">
            {current ? (
              <>
                <p className="title">{current.card}</p>
                <p>{typed}{streaming && <span className="caret" aria-hidden="true" />}</p>
              </>
            ) : (
              <p className="draw-hint">Pick a card. The reading streams in the way it does in the app.</p>
            )}
          </div>

          <div className="draw-foot">
            <span>Sample readings. The live app writes a new one with Llama 3.3 70B.</span>
            {flipped !== null && !streaming && (
              <button type="button" className="draw-again" onClick={reset}>Shuffle</button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
