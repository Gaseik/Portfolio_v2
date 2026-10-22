'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () => new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/London',
    }).format(new Date())
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="ftr">
      <div>© 2026 Wei Chieh Cheng (程韋傑) · London, UK</div>
      <div className="clock"><i />London {time || '--:--:--'}</div>
      <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>back to top ↑</a>
    </footer>
  )
}
