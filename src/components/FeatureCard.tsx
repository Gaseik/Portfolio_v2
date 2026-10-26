import { Fragment, type ReactNode } from 'react'

interface Feature {
  title: string
  url: string
  subtitle: string
  meta: string
  description: string
  decisions: { key: string; value: string }[]
  tags: string[]
  highlightTags: string[]
  metrics: { n: string; l: string }[]
}

/** Splits `text` around each phrase so the phrases can be set in bold without raw HTML. */
function emphasise(text: string, phrases: string[]): ReactNode[] {
  if (process.env.NODE_ENV !== 'production') {
    for (const p of phrases) if (!text.includes(p)) console.warn(`FeatureCard: emphasis phrase not found: "${p}"`)
  }
  const found = phrases.filter(p => text.includes(p))
  if (!found.length) return [text]
  const re = new RegExp(`(${found.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`)
  return text.split(re).map((part, i) => (found.includes(part) ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))
}

/** The large two-column project card: write-up on the left, an interactive `visual` on the right. */
export default function FeatureCard({ project, slug, emphasis, visual, visualClass }: {
  project: Feature
  slug: string
  /** phrases in the description to set in bold */
  emphasis: string[]
  visual: ReactNode
  /** extra class for the visual panel, for its background */
  visualClass: string
}) {
  return (
    <div className="feature">
      <div className="feature-body">
        <div className="file-tab">
          <span className="dot" />
          {slug}<span className="live"> · live</span>
        </div>

        <h3 className="feature-title">{project.title}</h3>
        <div className="feature-sub">{project.subtitle} · {project.meta}</div>
        <p className="feature-desc">{emphasise(project.description, emphasis)}</p>

        <div className="mini-lbl">architectural decisions</div>
        <div className="decisions">
          {project.decisions.map(({ key, value }) => (
            <div className="dec" key={key}>
              <div className="dec-k">{key}</div>
              <div className="dec-v">{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.tags.map(t => (
              <span key={t} className={`otag${project.highlightTags.includes(t) ? ' hi' : ''}`}>{t}</span>
            ))}
          </div>
          <a href={project.url} target="_blank" rel="noopener" className="btn p">View Live <span className="arr">↗</span></a>
        </div>
      </div>

      <div className={`feature-vis ${visualClass}`}>{visual}</div>

      <div className="feature-metrics">
        {project.metrics.map(({ n, l }) => (
          <div key={l} className="metric">
            <b>{n}</b>
            <small>{l}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
