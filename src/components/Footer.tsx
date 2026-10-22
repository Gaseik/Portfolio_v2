export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top" data-reveal>
        <div className="foot-invite">
          <h2>Let&apos;s build something.</h2>
          <p className="foot-sub">Open to full-time roles and freelance work.</p>
          <a href="mailto:james800822@hotmail.com" className="btn">
            Start a conversation <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <ul className="foot-links">
          <li><a className="link" href="mailto:james800822@hotmail.com">Email</a></li>
          <li><a className="link" href="https://github.com/Gaseik" target="_blank" rel="noopener">GitHub ↗</a></li>
          <li><a className="link" href="https://www.linkedin.com/in/weichieh-cheng-fe" target="_blank" rel="noopener">LinkedIn ↗</a></li>
          <li><a className="link" href="https://osho-tarot.vercel.app" target="_blank" rel="noopener">Osho Zen Insight ↗</a></li>
        </ul>
      </div>
      <div />
      <div className="foot-legal">
        <span>© 2026 Wei Chieh Cheng (程韋傑) · London, UK</span>
        <span>Set in Bricolage Grotesque</span>
      </div>
      <div className="foot-name" aria-hidden="true">James Cheng</div>
    </footer>
  )
}
