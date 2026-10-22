import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const alt = 'James Cheng, frontend engineer in London'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const bold = readFileSync(join(process.cwd(), 'src/assets/fonts/BricolageGrotesque-800.ttf'))
  const regular = readFileSync(join(process.cwd(), 'src/assets/fonts/BricolageGrotesque-400.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: '#ffffff',
          color: '#1f2b4d',
          fontFamily: 'Bricolage Grotesque',
        }}
      >
        <span style={{ fontSize: 26 }}>Frontend engineer · React, Next.js, React Native</span>

        <span style={{ fontSize: 196, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9 }}>
          James Cheng
        </span>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 26, color: '#5f6780' }}>London, UK</span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 800,
              backgroundColor: '#f7941d',
              borderRadius: 999,
              padding: '14px 28px',
            }}
          >
            Available for new roles
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Bricolage Grotesque', data: bold, style: 'normal', weight: 800 },
        { name: 'Bricolage Grotesque', data: regular, style: 'normal', weight: 400 },
      ],
    }
  )
}
