'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      if (curRef.current) {
        curRef.current.style.left = mx + 'px'
        curRef.current.style.top  = my + 'px'
      }
      rx += (mx - rx) * .11
      ry += (my - ry) * .11
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      requestAnimationFrame(tick)
    }
    tick()

    const addHover = () => document.body.classList.add('ch')
    const rmHover  = () => document.body.classList.remove('ch')
    const targets  = () => document.querySelectorAll('a, button, .t-card')

    const attachHover = () => {
      targets().forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', rmHover)
      })
    }
    attachHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets().forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', rmHover)
      })
    }
  }, [])

  return (
    <>
      <div className="cur"  ref={curRef}  />
      <div className="cur-r" ref={ringRef} />
    </>
  )
}
