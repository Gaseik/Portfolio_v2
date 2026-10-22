import OshoCard from './OshoCard'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="sec" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>
      <div className="sec-head">
        <div className="reveal">
          <span className="sec-idx">03 / projects</span>
          <h2 className="sec-big">Selected<br /><em>work.</em></h2>
        </div>
        <p className="sec-note reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          A solo AI side project, plus products shipped with teams — most recent first.
        </p>
      </div>

      <div className="reveal-s"><OshoCard /></div>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={`${(i % 2) * 0.1}s`} />
        ))}
      </div>
    </section>
  )
}
