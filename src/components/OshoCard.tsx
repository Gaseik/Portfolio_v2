import { osho } from '@/data/projects'

export default function OshoCard() {
  return (
    <>
      <div className="proj-osho-wrap proj-osho-grid" style={{
        border: '1px solid var(--line)', marginBottom: 1,
        overflow: 'hidden', position: 'relative',
      }}
      >
        <style>{`
          .proj-osho-wrap::before {
            content: ''; position: absolute;
            top: 0; left: 0; right: 0; height: 2px;
            background: var(--accent);
            transform: scaleX(0); transform-origin: left;
            transition: transform .25s;
          }
          .proj-osho-wrap:hover::before { transform: scaleX(1); }
        `}</style>

        {/* body */}
        <div style={{ padding: '40px 44px' }}>
          <div className="file-tab">
            <div className="dot" />
            osho-zen-insight<span className="live"> · live</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 6, paddingTop: 16 }}>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-.02em', color: 'var(--ink)' }}>
              {osho.title}
            </div>
            <a href={osho.url} target="_blank" rel="noopener" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.65rem', color: 'var(--accent)', textDecoration: 'none', cursor: 'none' }}>
              {osho.url.replace('https://', '')} ↗
            </a>
          </div>

          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.65rem', color: 'var(--dim)', marginBottom: 20 }}>
            {osho.subtitle} · {osho.meta}
          </div>

          <p style={{ fontSize: '.92rem', lineHeight: 1.8, color: 'var(--ink2)', maxWidth: 560, marginBottom: 28, borderLeft: '2px solid var(--line)', paddingLeft: 16 }}
            dangerouslySetInnerHTML={{ __html: osho.description
              .replace('entirely solo', '<strong style="color:var(--ink);font-weight:600">entirely solo</strong>')
              .replace('streaming AI interpretations', '<strong style="color:var(--ink);font-weight:600">streaming AI interpretations</strong>') }}
          />

          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.62rem', color: 'var(--faint)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 8 }}>
            architectural decisions
          </div>

          <div className="decisions">
            {osho.decisions.map(({ key, value }) => (
              <div className="dec" key={key}>
                <div className="dec-k">{key}</div>
                <div className="dec-v">{value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {osho.tags.map(t => (
                <span key={t} className={`otag${osho.highlightTags.includes(t) ? ' hi' : ''}`}>{t}</span>
              ))}
            </div>
            <a href={osho.url} target="_blank" rel="noopener" className="btn p">View Live ↗</a>
          </div>
        </div>

        {/* visual */}
        <div style={{ background: 'var(--ink2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', minHeight: 380 }} className="scanline">
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
              <div className="t-card sm"><div className="t-glyph">☽</div></div>
              <div className="t-card sm"><div className="t-glyph">✦</div></div>
              <div className="t-card sm"><div className="t-glyph">☀</div></div>
            </div>
            <div className="t-card lg"><div className="t-glyph">⊕</div></div>
          </div>
        </div>
      </div>

      {/* metrics */}
      <div className="osho-metrics" style={{ gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderTop: 'none', marginBottom: 1 }}>
        {osho.metrics.map(({ n, l }) => (
          <div key={l} style={{ background: 'var(--bg2)', padding: '16px 20px', textAlign: 'center' }} className="metric">
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.2rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1, marginBottom: 4 }}>{n}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.58rem', letterSpacing: '.06em', color: 'var(--dim)', textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>
    </>
  )
}
