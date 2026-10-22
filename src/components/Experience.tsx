'use client'

import { useState } from 'react'
import { education, experience } from '@/data/experience'
import Years from './Years'

export default function Experience() {
  const [open, setOpen] = useState<string | null>(experience[0].company)

  return (
    <section id="experience" className="lineup" aria-labelledby="exp-h">
      <h2 id="exp-h" className="sec-head" data-reveal><span><Years />+ years, four teams</span></h2>

      <h3 className="lineup-part">Experience</h3>
      <div data-reveal>
        {experience.map(exp => {
          const isOpen = open === exp.company
          const id = `exp-${exp.company.replace(/\W+/g, '').toLowerCase()}`
          return (
            <div key={exp.company}>
              <button
                type="button" className="row"
                aria-expanded={isOpen} aria-controls={id}
                onClick={() => setOpen(isOpen ? null : exp.company)}
              >
                <span className="what"><span className="tog" aria-hidden="true">+</span>{exp.role}</span>
                <span className="where">{exp.company}</span>
                <span className="city">{exp.location}</span>
                <span className="when num">{exp.period}</span>
              </button>
              <div id={id} className={`row-more${isOpen ? ' open' : ''}`} role="region" aria-label={`${exp.company} details`}>
                <div>
                  <ul>
                    <li className="row-note">
                      {exp.note}
                      {exp.url && <> <a className="link" href={exp.url} target="_blank" rel="noopener" tabIndex={isOpen ? 0 : -1}>{exp.url.replace(/https?:\/\/(www\.)?|\/$/g, '')} ↗</a></>}
                    </li>
                    {exp.details.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <h3 className="lineup-part">Education</h3>
      <div data-reveal>
        {education.map(edu => (
          <div key={edu.school} className="row">
            <span className="what"><span className="tog" aria-hidden="true" /> {edu.degree}</span>
            <span className="where">{edu.school.split(' · ')[0]}</span>
            <span className="city">{edu.school.includes('Taiwan') ? 'Taichung' : 'London'}</span>
            <span className="when num">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
