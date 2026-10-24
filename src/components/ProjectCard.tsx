'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTilt } from '@/lib/hooks'

interface Props {
  num: string
  cat: string
  title: string
  impact: string
  tags: string[]
  image: string
  tint?: string
  delay?: string
  url?: string
  urlLabel?: string
  wide?: boolean
}

export default function ProjectCard({ num, cat, title, impact, tags, image, tint, delay = '0s', url, urlLabel, wide }: Props) {
  const [imgError, setImgError] = useState(false)
  const ref = useTilt<HTMLElement>(5)

  // bold the numbers in impact
  const boldImpact = impact.replace(/(\+[\d]+%|−[\d]+%|UMC|13\+)/g, '<strong>$1</strong>')

  return (
    <div className={`reveal${wide ? ' proj-wide' : ''}`} style={{ '--d': delay } as React.CSSProperties}>
      <article className="proj-card" ref={ref} data-cursor={url ? 'visit ↗' : undefined}>
        <div className="proj-shot" style={tint ? { '--tint': tint } as React.CSSProperties : undefined}>
          <span className="proj-num">{num}</span>
          {!imgError && (
            <Image
              src={image}
              alt={title}
              fill
              sizes={wide ? "(max-width: 1080px) 100vw, 60vw" : "(max-width: 640px) 100vw, 50vw"}
              style={{ objectFit: 'contain' }}
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="proj-body">
          <div className="proj-cat">{cat}</div>
          <h3 className="proj-title">{title}{url && <span className="arr">↗</span>}</h3>
          <p className="proj-impact" dangerouslySetInnerHTML={{ __html: boldImpact }} />
          <div className="proj-foot">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {tags.map(t => <span className="cc" key={t}>{t}</span>)}
            </div>
            {url
              ? <a href={url} target="_blank" rel="noopener" className="proj-link stretched">{urlLabel ?? url}</a>
              : <div className="offline">Company project · offline</div>}
          </div>
        </div>
      </article>
    </div>
  )
}
