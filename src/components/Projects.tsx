import OshoCard from './OshoCard'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="reveal" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 40,
      }}>
        <span className="sec-ttl">projects</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.62rem', color: 'var(--faint)' }}>
          most recent first
        </span>
      </div>

      <div className="reveal"><OshoCard /></div>

      <div className="proj-grid" style={{
        gap: 1, background: 'var(--line)',
        border: '1px solid var(--line)', marginTop: 1,
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={`${i * 0.08}s`} />
        ))}
      </div>
    </section>
  )
}
