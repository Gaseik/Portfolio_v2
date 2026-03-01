export default function Footer() {
  return (
    <footer style={{
      padding: '20px 48px',
      borderTop: '1px solid var(--line)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
    }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.62rem', color: 'var(--faint)' }}>
        © 2026 Wei Chieh Cheng (程韋傑) · London, UK
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.65rem', color: 'var(--dim)', fontWeight: 500 }}>
        james.dev
      </div>
    </footer>
  )
}
