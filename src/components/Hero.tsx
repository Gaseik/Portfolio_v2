import Image from 'next/image'
import Years from './Years'

export default function Hero() {
  return (
    <section className="hero">
      <nav className="nav" aria-label="Primary">
        <a href="/" className="nav-mark">JC</a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li className="hide-sm"><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-mid">
      <h1 className="hero-name">
        <span className="hero-word"><span>James</span></span>
        <span className="hero-photo" aria-hidden="true">
          <Image src="/img/Spe3dMockup.png" alt="" width={792} height={588} priority sizes="(max-width: 720px) 92vw, 280px" />
        </span>
        <span className="hero-word"><span>Cheng</span></span>
        <span className="sr-only">, frontend engineer in London</span>
      </h1>
      <div className="hero-photo-sm">
        <Image src="/img/Spe3dMockup.png" alt="Spe3d AR app running on two phones" width={792} height={588} sizes="92vw" />
      </div>
      </div>

      <div className="hero-foot">
        <p className="hero-now" style={{ '--i': 2 } as React.CSSProperties}>
          Currently at <a className="link" href="https://www.m10c.com/" target="_blank" rel="noopener">M10c</a>, London.
          Available for new roles.
        </p>
        <p className="hero-lead" style={{ '--i': 0 } as React.CSSProperties}>
          Frontend engineer with <Years />+ years of React, Next.js and React Native —
          from AR in Three.js to an AI product I built alone.
        </p>
        <div className="hero-cta" style={{ '--i': 1 } as React.CSSProperties}>
          <a href="mailto:james800822@hotmail.com" className="btn">
            Email me <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
