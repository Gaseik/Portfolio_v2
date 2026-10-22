'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const curRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let mx = -100, my = -100, rx = -100, ry = -100, raf = 0
    const body = document.body

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    // event delegation so dynamically rendered elements also get hover states
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const labelled = el.closest<HTMLElement>('[data-cursor]')
      if (labelled) {
        setLabel(labelled.dataset.cursor ?? '')
        body.classList.add('cl'); body.classList.remove('ch')
        return
      }
      body.classList.remove('cl')
      if (el.closest('a, button, .t-card, .stat, .otag')) body.classList.add('ch')
      else body.classList.remove('ch')
    }
    const onLeave = () => body.classList.remove('ch', 'cl', 'cdown')
    const onDown = () => body.classList.add('cdown')
    const onUp   = () => body.classList.remove('cdown')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)

    const tick = () => {
      if (curRef.current) curRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      rx += (mx - rx) * .16
      ry += (my - ry) * .16
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      onLeave()
    }
  }, [])

  return (
    <>
      <div className="cur" ref={curRef} />
      <div className="cur-r" ref={ringRef}><span>{label}</span></div>
    </>
  )
}
