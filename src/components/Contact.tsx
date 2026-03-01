export default function Contact() {
  const links = [
    { label: 'james800822@hotmail.com', href: 'mailto:james800822@hotmail.com', primary: true },
    { label: 'GitHub ↗',    href: 'https://github.com/james-cheng', primary: false },
    { label: 'LinkedIn ↗',  href: 'https://linkedin.com',            primary: false },
    { label: 'Resume PDF ↗', href: '/resume.pdf',                    primary: false },
  ]

  return (
    <section id="contact" style={{ padding: '96px 48px', borderTop: '1px solid var(--line)' }}>
      <div className="reveal">
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.62rem', color: 'var(--accent)', letterSpacing: '.04em', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{'// '}</span>open to work
        </div>

        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1.1, marginBottom: 12 }}>
          Let&apos;s work<br />together.
        </div>

        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.68rem', color: 'var(--dim)', marginBottom: 20, letterSpacing: '.02em' }}>
          London · Remote · Relocation considered
        </div>

        <p style={{ fontSize: '.88rem', lineHeight: 1.8, color: 'var(--ink2)', maxWidth: 480, marginBottom: 36 }}>
          Open to full-time roles and freelance projects — and always happy to talk if you have an interesting idea to build together.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {links.map(({ label, href, primary }) => (
            <a
              key={label} href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener"
              className={`btn${primary ? ' p' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
