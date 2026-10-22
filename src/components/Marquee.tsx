export default function Marquee({ items, alt = false, reverse = false }: { items: string[]; alt?: boolean; reverse?: boolean }) {
  const row = items.map(s => (
    <span className="marquee-item" key={s}>{s}<span className="sep">✦</span></span>
  ))
  return (
    <div className={`marquee${alt ? ' alt' : ''}`}>
      <ul className="sr-only" aria-label="Tech stack">
        {items.map(s => <li key={s}>{s}</li>)}
      </ul>
      <div className="marquee-track" aria-hidden style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {row}{row}
      </div>
    </div>
  )
}
