'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  num: string
  cat: string
  title: string
  impact: string
  tags: string[]
  image: string
  delay?: string
  url?: string
  urlLabel?: string
}

export default function ProjectCard({ num, cat, title, impact, tags, image, delay = '0s', url, urlLabel }: Props) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  // bold the numbers in impact
  const boldImpact = impact.replace(/(\+[\d]+%|−[\d]+%|UMC)/g, '<strong style="color:var(--ink2);font-weight:500">$1</strong>')

  return (
    <div
      className="proj-card reveal"
      style={{
        background: hovered ? 'var(--bg2)' : 'var(--bg)',
        padding: '28px',
        position: 'relative', overflow: 'hidden',
        transition: 'background .2s',
        transitionDelay: delay,
        cursor: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'var(--accent)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform .25s',
      }} />

      {/* mockup */}
      <div style={{
        width: '100%', aspectRatio: '16/9',
        background: 'var(--bg3)',
        marginBottom: 18,
        border: `1px solid ${hovered ? 'var(--faint)' : 'var(--line)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', transition: 'border-color .2s',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '1.4rem', color: 'var(--faint)',
        position: 'relative',
      }}>
        {!imgError ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: 'contain',
              filter: hovered ? 'saturate(.9)' : 'saturate(.6)',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'filter .3s, transform .4s',
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          num
        )}
      </div>

      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.6rem', color: 'var(--accent)', marginBottom: 6 }}>
        {cat}
      </div>
      <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
        {title}
      </div>
      <p
        style={{ fontSize: '.82rem', lineHeight: 1.7, color: 'var(--dim)', marginBottom: 12 }}
        dangerouslySetInnerHTML={{ __html: boldImpact }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
        {tags.map(t => <span className="cc" key={t}>{t}</span>)}
      </div>
      {url
        ? <a href={url} target="_blank" rel="noopener" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.62rem', color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid rgba(0,102,255,.3)', cursor: 'none' }}>{urlLabel ?? url}</a>
        : <div className="offline">Company project · offline</div>
      }
    </div>
  )
}
