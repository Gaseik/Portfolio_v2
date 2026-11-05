'use client'

import { useState } from 'react'

// Fictional clinic and people. The layout and palette follow a real clinic site built on wushi.
const t = {
  brand: 'Dawn',
  nav: ['About', 'Team', 'Services'],
  book: 'Book online',
  h1a: 'At the first light of day,',
  h1b: 'let the mind breathe again',
  who: 'Dawn Clinic · walking the journey with you',
  team: 'Our team',
  services: 'Services',
  step: ['Choose a service', 'Choose a therapist', 'Confirm'],
  next: 'Next',
  back: 'Back',
  done: 'Request sent',
  doneSub: 'We will email you within one working day to confirm a slot.',
  again: 'Back to home',
  pick: 'Pick one',
  role: ['Clinical psychologist', 'Counselling psychologist', 'Clinical psychologist'],
  svc: [
    ['Child & teen therapy', 'Early support, emotion regulation, school refusal'],
    ['Adult individual therapy', 'Anxiety, low mood, relationships'],
    ['Couples & family therapy', 'Communication and parenting'],
  ],
}

const PEOPLE = [
  { name: 'Lin Yi-chun', hue: '#e08a62' },
  { name: 'Chen Po-yu', hue: '#d9736b' },
  { name: 'Su Wen-hsuan', hue: '#e9ac6b' },
]

/** A small, playable stand-in for a clinic's public site. It reflows with the panel width, like the real one does on a phone. */
export default function ClinicPreview() {
  const [step, setStep] = useState(0) // 0 = home, 1..3 = booking steps, 4 = done
  const [svc, setSvc] = useState<number | null>(null)
  const [who, setWho] = useState<number | null>(null)

  const reset = () => { setStep(0); setSvc(null); setWho(null) }
  const canNext = step === 1 ? svc !== null : step === 2 ? who !== null : true

  return (
    <div className="cs-wrap">
      <div className="cs-browser">
        <div className="cs-bar"><i /><i /><i /><span>{step === 0 ? 'your-clinic.com' : 'your-clinic.com/booking'}</span></div>

        <div className="cs-page">
          <nav className="cs-nav">
            <b><span className="cs-sun" />{t.brand}</b>
            <div className="cs-links">{t.nav.map(n => <span key={n}>{n}</span>)}</div>
            <button className="cs-bookbtn" onClick={() => setStep(1)}>{t.book}</button>
          </nav>

          {step === 0 && (
            <>
              <header className="cs-hero">
                <h4>{t.h1a}<br /><em>{t.h1b}</em></h4>
                <p>{t.who}</p>
              </header>
              <section className="cs-sec">
                <h5>{t.team}</h5>
                <div className="cs-team">
                  {PEOPLE.map((p, i) => (
                    <div key={p.name} className="cs-person">
                      <span className="cs-av" style={{ background: p.hue }}>{p.name[0]}</span>
                      <b>{p.name}</b><small>{t.role[i]}</small>
                    </div>
                  ))}
                </div>
              </section>
              <section className="cs-sec">
                <h5>{t.services}</h5>
                <ul className="cs-svc">
                  {t.svc.map(([n, d]) => <li key={n}><b>{n}</b><small>{d}</small></li>)}
                </ul>
              </section>
            </>
          )}

          {step >= 1 && step <= 3 && (
            <section className="cs-sec cs-flow">
              <ol className="cs-steps" aria-label="Progress">
                {t.step.map((s, i) => <li key={s} className={i + 1 === step ? 'on' : i + 1 < step ? 'past' : ''}>{s}</li>)}
              </ol>

              {step === 1 && t.svc.map(([n, d], i) => (
                <button key={n} className={`cs-opt${svc === i ? ' on' : ''}`} aria-pressed={svc === i} onClick={() => setSvc(i)}>
                  <b>{n}</b><small>{d}</small>
                </button>
              ))}
              {step === 2 && PEOPLE.map((p, i) => (
                <button key={p.name} className={`cs-opt${who === i ? ' on' : ''}`} aria-pressed={who === i} onClick={() => setWho(i)}>
                  <b>{p.name}</b><small>{t.role[i]}</small>
                </button>
              ))}
              {step === 3 && svc !== null && who !== null && (
                <div className="cs-sum">
                  <b>{t.svc[svc][0]}</b>
                  <small>{PEOPLE[who].name} · {t.role[who]}</small>
                </div>
              )}

              <div className="cs-actions">
                <button className="cs-ghost" onClick={() => (step === 1 ? reset() : setStep(step - 1))}>{t.back}</button>
                <button className="cs-primary" disabled={!canNext} title={canNext ? undefined : t.pick} onClick={() => setStep(step + 1)}>
                  {step === 3 ? t.book : t.next}
                </button>
              </div>
            </section>
          )}

          {step === 4 && (
            <section className="cs-sec cs-done" role="status">
              <span className="cs-tick">✓</span>
              <b>{t.done}</b>
              <small>{t.doneSub}</small>
              <button className="cs-ghost" onClick={reset}>{t.again}</button>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
