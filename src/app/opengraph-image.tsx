import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const alt = 'James Cheng — Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const ibmPlexMonoBold = readFileSync(
    join(process.cwd(), 'src/assets/fonts/IBMPlexMono-Bold.ttf')
  )
  const ibmPlexMonoRegular = readFileSync(
    join(process.cwd(), 'src/assets/fonts/IBMPlexMono-Regular.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0a0a0a',
          fontFamily: 'IBM Plex Mono',
        }}
      >
        {/* Top & Middle */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 20,
              color: '#0066ff',
              marginBottom: 32,
              letterSpacing: -0.5,
            }}
          >
            james.dev
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: -2,
              lineHeight: 1.1,
            }}
          >
            James Cheng
          </span>
          <span
            style={{
              fontSize: 24,
              color: '#888888',
              marginTop: 20,
              letterSpacing: -0.5,
            }}
          >
            Frontend Engineer · React / Next.js / TypeScript
          </span>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span style={{ fontSize: 18, color: '#888888' }}>London, UK</span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 16,
              color: '#888888',
              border: '1px solid #333333',
              borderRadius: 999,
              padding: '8px 20px',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#16a34a',
              }}
            />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'IBM Plex Mono',
          data: ibmPlexMonoBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'IBM Plex Mono',
          data: ibmPlexMonoRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
