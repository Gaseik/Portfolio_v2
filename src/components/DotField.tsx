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
    let w = 0, h = 0, raf = 0, t = 0, visible = false
    let mx = -9999, my = -9999, tx = -9999, ty = -9999

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reduce) draw()
    }

    const BUCKETS = 4
    const buckets: Path2D[] = []

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      mx += (tx - mx) * .12
      my += (ty - my) * .12
      // idle dots are batched into a few paths by brightness; only dots near the pointer are drawn individually
      for (let i = 0; i < BUCKETS; i++) buckets[i] = new Path2D()
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          const wave = reduce ? 0 : Math.sin(x * .02 + y * .015 + t) * .5 + .5
          const dx = x - mx, dy = y - my
          const d = Math.hypot(dx, dy)
          if (d >= RADIUS) {
            const path = buckets[Math.min(BUCKETS - 1, Math.floor(wave * BUCKETS))]
            const size = .9 + wave * .5
            path.moveTo(x + size, y)
            path.arc(x, y, size, 0, Math.PI * 2)
            continue
          }
          const f = 1 - d / RADIUS
          const push = f * f * 18
          const px = x + (d ? (dx / d) * push : 0)
          const py = y + (d ? (dy / d) * push : 0)
          ctx.fillStyle = `rgba(${Math.round(124 * (1 - f))}, ${Math.round(58 + 44 * f)}, ${Math.round(237 + 18 * f)}, ${.18 + f * .7})`
          ctx.beginPath()
          ctx.arc(px, py, .9 + wave * .5 + f * 2.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      for (let i = 0; i < BUCKETS; i++) {
        ctx.fillStyle = `rgba(10,10,10,${.07 + ((i + .5) / BUCKETS) * .07})`
        ctx.fill(buckets[i])
      }
    }

    const loop = () => {
      t += .012
      draw()
      raf = visible ? requestAnimationFrame(loop) : 0
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      tx = e.clientX - r.left; ty = e.clientY - r.top
      if (mx < -999) { mx = tx; my = ty }
    }
    const onLeave = () => { mx = my = tx = ty = -9999 }

    // the loop only runs while the hero is on screen
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf && !reduce) raf = requestAnimationFrame(loop)
    })
    io.observe(canvas)

    resize()
    window.addEventListener('resize', resize)
    if (!reduce) {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('mouseleave', onLeave)
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
