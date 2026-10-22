export default function Marquee({ items, alt = false, reverse = false }: { items: string[]; alt?: boolean; reverse?: boolean }) {
  const row = items.map(s => (
    <span className="marquee-item" key={s}>{s}<span className="sep">✦</span></span>
  ))
  return (
    <div className={`marquee${alt ? ' alt' : ''}`} aria-hidden>
      <div className="marquee-track" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {row}{row}
      </div>
    </div>
  )
}
