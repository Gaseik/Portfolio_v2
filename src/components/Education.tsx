import { education } from '@/data/experience'

const EMOJI = ['🎓', '🧠']
const BIG = ['MSc', 'BSc']

export default function Education() {
  return (
    <section id="education" className="sec" style={{ paddingTop: 0 }}>
      <div className="sec-head">
        <div className="reveal">
          <span className="sec-idx">02 / education</span>
          <h2 className="sec-big">Mind &amp; <em>machine.</em></h2>
        </div>
        <p className="sec-note reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
          Psychology taught me how people think. Computer science taught me how to build for them.
        </p>
      </div>

      <div className="edu-grid">
        {education.map((edu, i) => (
          <div key={edu.school} className="reveal-s" style={{ '--d': `${i * .1}s` } as React.CSSProperties}>
            <div className="edu-card">
              <span className="edu-emoji" aria-hidden>{EMOJI[i]}</span>
              <span className="edu-year">{edu.year}</span>
              <div className="edu-deg">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <span className="edu-big" aria-hidden>{BIG[i]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
