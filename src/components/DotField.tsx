'use client'

import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/lib/hooks'

const GAP = 26
const RADIUS = 140

/** Interactive dot grid: dots bulge away from and light up near the pointer. */
export default function DotField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = prefersReducedMotion()
    let w = 0, h = 0, raf = 0, t = 0, visible = true
    let mx = -9999, my = -9999, tx = -9999, ty = -9999

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reduce) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      mx += (tx - mx) * .12
      my += (ty - my) * .12
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          const dx = x - mx, dy = y - my
          const d = Math.hypot(dx, dy)
          const f = Math.max(0, 1 - d / RADIUS)
          const wave = reduce ? 0 : Math.sin(x * .02 + y * .015 + t) * .5 + .5
          const push = f * f * 18
          const px = x + (d ? (dx / d) * push : 0)
          const py = y + (d ? (dy / d) * push : 0)
          const size = .9 + wave * .5 + f * 2.2
          ctx.fillStyle = f > 0
            ? `rgba(${Math.round(124 * (1 - f))}, ${Math.round(58 + 44 * f)}, ${Math.round(237 + 18 * f)}, ${.18 + f * .7})`
            : `rgba(10,10,10,${.07 + wave * .07})`
          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const loop = () => {
      t += .012
      if (visible) draw()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      tx = e.clientX - r.left; ty = e.clientY - r.top
      if (mx < -999) { mx = tx; my = ty }
    }
    const onLeave = () => { mx = my = tx = ty = -9999 }

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)

    resize()
    window.addEventListener('resize', resize)
    if (!reduce) {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('mouseleave', onLeave)
      loop()
    }

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hero-canvas" aria-hidden />
}
