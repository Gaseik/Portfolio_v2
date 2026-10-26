import type { ReactNode } from 'react'

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

/** The large two-column project card: write-up on the left, an interactive `visual` on the right. */
export default function FeatureCard({ project, slug, emphasis, visual, visualClass }: {
  project: Feature
  slug: string
  /** phrases in the description to set in bold */
  emphasis: string[]
  visual: ReactNode
  visualClass: string
}) {
  const desc = emphasis.reduce((d, phrase) => d.replace(phrase, `<strong>${phrase}</strong>`), project.description)

  return (
    <div className="osho">
      <div className="osho-body">
        <div className="file-tab">
          <span className="dot" />
          {slug}<span className="live"> · live</span>
        </div>

        <h3 className="osho-title">{project.title}</h3>
        <div className="osho-sub">{project.subtitle} · {project.meta}</div>
        <p className="osho-desc" dangerouslySetInnerHTML={{ __html: desc }} />

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

      <div className={visualClass}>{visual}</div>

      <div className="osho-metrics">
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
