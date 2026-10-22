'use client'

import { useState } from 'react'
import { useInView, useMagnetic } from '@/lib/hooks'

const EMAIL = 'james800822@hotmail.com'

export default function Contact() {
  const [bigRef, inView] = useInView<HTMLHeadingElement>(.3)
  const [toast, setToast] = useState(false)
  const emailRef = useMagnetic<HTMLButtonElement>(.15)
  const ghRef = useMagnetic<HTMLAnchorElement>(.3)
  const liRef = useMagnetic<HTMLAnchorElement>(.3)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setToast(true)
      setTimeout(() => setToast(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="sec contact">
      <div className="blob b1" style={{ top: 'auto', bottom: -200, left: '40%' }} />
      <div className="blob b2" style={{ bottom: 'auto', top: -120, left: -100 }} />

      <div className="contact-inner">
        <div className="contact-kicker reveal">
          <span className="status-dot" /> open to work · 04 / contact
        </div>

        <h2 ref={bigRef} className={`contact-big${inView ? ' in' : ''}`}>
          <span className="row"><span>Let&apos;s build</span></span>
          <span className="row"><span><em>something great.</em></span></span>
        </h2>

        <p className="reveal" style={{ '--d': '.2s' } as React.CSSProperties}>
          Open to full-time roles and freelance projects — and always happy to talk if you have an interesting idea to build together.
        </p>

        <div className="contact-meta reveal" style={{ '--d': '.25s' } as React.CSSProperties}>
          London · Remote · Relocation considered
        </div>

        <div className="reveal" style={{ '--d': '.3s' } as React.CSSProperties}>
          <button ref={emailRef} className="email-big" onClick={copy} data-cursor="copy">
            {EMAIL}<span className="copy">copy</span>
          </button>
        </div>

        <div className="reveal" style={{ '--d': '.35s', display: 'flex', gap: 10, flexWrap: 'wrap' } as React.CSSProperties}>
          <a href={`mailto:${EMAIL}`} className="btn">Send email <span className="arr">↗</span></a>
          <a ref={ghRef} href="https://github.com/Gaseik" target="_blank" rel="noopener" className="btn">GitHub <span className="arr">↗</span></a>
          <a ref={liRef} href="https://www.linkedin.com/in/weichieh-cheng-fe" target="_blank" rel="noopener" className="btn">LinkedIn <span className="arr">↗</span></a>
        </div>
      </div>

      <div className={`toast${toast ? ' show' : ''}`} role="status">✓ Email copied to clipboard</div>
    </section>
  )
}
