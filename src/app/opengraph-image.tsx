import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { yearsOfExperience } from '@/data/links'
import { companyCount, countryCount, experience } from '@/data/experience'
import { wushi } from '@/data/projects'

export const alt = 'James Cheng — Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
// rebuilt daily so the years count doesn't freeze at the deploy date
export const revalidate = 86400

const GRAD = 'linear-gradient(110deg, #0066ff 0%, #7c3aed 50%, #ec4899 100%)'
const MONO = 'IBM Plex Mono'
const SANS = 'IBM Plex Sans'

export default async function OGImage() {
  const font = (file: string) => readFileSync(join(process.cwd(), 'src/assets/fonts', file))
  const yoe = yearsOfExperience()

  const stats = [
    { n: `${yoe}+`, l: 'years' },
    { n: String(companyCount), l: 'companies' },
    { n: String(countryCount), l: 'countries' },
  ]
  const rows = [
    ['currently', `${experience[0].company} · ${experience[0].location}`],
    ['education', 'MSc CS · QMUL'],
    ['side project', wushi.short],
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', position: 'relative',
          backgroundColor: '#fbfbfa',
          backgroundImage: 'radial-gradient(circle, rgba(10,10,10,.13) 1.3px, transparent 1.8px)',
          backgroundSize: '26px 26px',
          fontFamily: SANS, overflow: 'hidden',
        }}
      >
        {/* soft colour blobs, as in the hero */}
        <div style={{ position: 'absolute', top: -220, left: 260, width: 640, height: 640, borderRadius: 9999, backgroundImage: 'radial-gradient(circle, rgba(0,102,255,.34) 0%, rgba(0,102,255,0) 65%)' }} />
        <div style={{ position: 'absolute', bottom: -260, left: -180, width: 620, height: 620, borderRadius: 9999, backgroundImage: 'radial-gradient(circle, rgba(167,139,250,.38) 0%, rgba(167,139,250,0) 65%)' }} />
        <div style={{ position: 'absolute', top: 120, right: 120, width: 520, height: 520, borderRadius: 9999, backgroundImage: 'radial-gradient(circle, rgba(249,168,212,.4) 0%, rgba(249,168,212,0) 65%)' }} />

        {/* gradient top rule, like the scroll progress bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundImage: GRAD }} />

        <div style={{ display: 'flex', width: '100%', padding: '64px 72px', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* left */}
          <div style={{ display: 'flex', flexDirection: 'column', width: 660 }}>
            <div style={{ display: 'flex', fontFamily: MONO, fontSize: 24, color: '#0a0a0a', marginBottom: 40 }}>
              james<span style={{ color: '#0066ff' }}>.</span>dev
            </div>

            <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start', gap: 12, padding: '8px 18px 8px 14px', borderRadius: 999, border: '1px solid #e3e3e0', backgroundColor: 'rgba(255,255,255,.8)', fontFamily: MONO, fontSize: 17, color: '#4a4a4a', marginBottom: 26 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: '#16a34a' }} />
              Available for opportunities · London, UK
            </div>

            <div style={{ display: 'flex', fontSize: 100, fontWeight: 600, letterSpacing: -4, lineHeight: 1, color: '#0a0a0a' }}>
              James
              <span style={{ marginLeft: 24, paddingRight: 8, backgroundImage: GRAD, backgroundClip: 'text', color: 'transparent', paddingBottom: 12 }}>Cheng</span>
            </div>

            <div style={{ display: 'flex', fontFamily: MONO, fontSize: 26, color: '#4a4a4a', marginTop: 22 }}>
              {'> I build'}<span style={{ color: '#0066ff', marginLeft: 16 }}>React &amp; Next.js apps</span>
              <div style={{ width: 3, height: 30, backgroundColor: '#0066ff', marginLeft: 4 }} />
            </div>

            <div style={{ display: 'flex', fontSize: 24, color: '#4a4a4a', marginTop: 24 }}>
              Frontend Engineer · React · Next.js · TypeScript
            </div>
          </div>

          {/* right: the profile card */}
          <div style={{ display: 'flex', flexDirection: 'column', width: 360, padding: '24px 26px', borderRadius: 24, backgroundColor: 'rgba(255,255,255,.86)', border: '1px solid rgba(0,0,0,.08)', boxShadow: '0 24px 60px -24px rgba(0,30,90,.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <div style={{ width: 13, height: 13, borderRadius: 999, backgroundColor: '#ff5f57' }} />
              <div style={{ width: 13, height: 13, borderRadius: 999, backgroundColor: '#febc2e' }} />
              <div style={{ width: 13, height: 13, borderRadius: 999, backgroundColor: '#28c840' }} />
              <span style={{ marginLeft: 10, fontFamily: MONO, fontSize: 15, color: '#8a8a8a' }}>~/james/profile.ts</span>
            </div>

            <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
              {stats.map(s => (
                <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, padding: '14px 0', borderRadius: 14, backgroundColor: '#f4f4f2' }}>
                  <span style={{ fontFamily: MONO, fontSize: 34, color: '#0a0a0a', lineHeight: 1.1 }}>{s.n}</span>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: '#4a4a4a', letterSpacing: 1.5, textTransform: 'uppercase' }}>{s.l}</span>
                </div>
              ))}
            </div>

            {rows.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', padding: '12px 0', borderTop: '1px dashed #e3e3e0', fontFamily: MONO }}>
                <span style={{ width: 120, fontSize: 13, color: '#8a8a8a', letterSpacing: 1, textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontSize: 17, color: '#0066ff' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: SANS, data: font('IBMPlexSans-SemiBold.woff'), style: 'normal', weight: 600 },
        { name: SANS, data: font('IBMPlexSans-Regular.woff'), style: 'normal', weight: 400 },
        { name: MONO, data: font('IBMPlexMono-Regular.ttf'), style: 'normal', weight: 400 },
      ],
    }
  )
}
