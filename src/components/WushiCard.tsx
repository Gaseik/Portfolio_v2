'use client'

import { useRef, useState } from 'react'
import { wushi } from '@/data/projects'
import FeatureCard from './FeatureCard'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const TIMES = ['14:00', '15:00', '19:00']
const ROOMS = ['301', '302', '303', 'Remote'] as const
type Room = typeof ROOMS[number]

interface Session { id: number; day: number; time: number; room: Room; who: string; mine?: boolean }

// sample sessions, the same fictional people as on the wushi landing page
const SEED: Session[] = [
  { id: 1, day: 0, time: 0, room: '301', who: 'Lin Yi-chun' },
  { id: 2, day: 2, time: 0, room: '302', who: 'Chen Po-yu' },
  { id: 3, day: 4, time: 0, room: '301', who: 'Lin Yi-chun' },
  { id: 4, day: 1, time: 1, room: '303', who: 'Wang Szu-han' },
  { id: 5, day: 2, time: 1, room: '301', who: 'Su Wen-hsuan' },
  { id: 6, day: 3, time: 1, room: 'Remote', who: 'Su Wen-hsuan' },
  { id: 7, day: 1, time: 2, room: '302', who: 'Lin Yi-chun' },
  { id: 8, day: 3, time: 2, room: '301', who: 'Chen Po-yu' },
  { id: 9, day: 4, time: 2, room: '303', who: 'Wang Szu-han' },
]

const MAX_PER_CELL = 2

type Status = { kind: 'idle' | 'ok' | 'clash' | 'removed'; text: string }
const IDLE: Status = { kind: 'idle', text: 'Pick a room, then tap any cell to book it.' }

/** A small, playable version of wushi's scheduling board: book rooms and watch clashes get blocked. */
function ScheduleBoard() {
  const [room, setRoom] = useState<Room>('303')
  const [sessions, setSessions] = useState(SEED)
  const [status, setStatus] = useState<Status>(IDLE)
  const [shake, setShake] = useState<string | null>(null)
  const nextId = useRef(100)

  const slot = (day: number, time: number) => `${DAYS[day]} ${TIMES[time]}`
  const roomName = (r: Room) => (r === 'Remote' ? 'Remote' : `Room ${r}`)

  const book = (day: number, time: number) => {
    const here = sessions.filter(s => s.day === day && s.time === time)
    // remote sessions take no room, so they never clash
    const clash = room !== 'Remote' && here.find(s => s.room === room)
    if (clash || here.length >= MAX_PER_CELL) {
      setShake(`${day}-${time}`)
      setTimeout(() => setShake(null), 450)
      setStatus({
        kind: 'clash',
        text: clash
          ? `Blocked: ${roomName(room)} is already booked for ${clash.who} on ${slot(day, time)}.`
          : `Blocked: ${slot(day, time)} is fully booked.`,
      })
      return
    }
    setSessions(list => [...list, { id: nextId.current++, day, time, room, who: 'New client', mine: true }])
    setStatus({ kind: 'ok', text: `Booked ${roomName(room)} for ${slot(day, time)}.` })
  }

  const remove = (s: Session) => {
    setSessions(list => list.filter(x => x.id !== s.id))
    setStatus({ kind: 'removed', text: `Cancelled the ${slot(s.day, s.time)} booking.` })
  }

  return (
    <div className="wu-board">
      <div className="wu-head">
        <b>Scheduling</b><span>Zhongshan · 3–7 Nov</span>
      </div>

      <div className="wu-rooms" role="radiogroup" aria-label="Room">
        {ROOMS.map(r => (
          <button key={r} role="radio" aria-checked={room === r} className={`wu-room${room === r ? ' on' : ''}`} onClick={() => setRoom(r)}>
            {r}
          </button>
        ))}
        <button className="wu-reset" onClick={() => { setSessions(SEED); setStatus(IDLE) }}>Reset</button>
      </div>

      <div className="wu-grid">
        <span />
        {DAYS.map(d => <span key={d} className="wu-day">{d}</span>)}
        {TIMES.map((t, ti) => (
          <div key={t} className="wu-row">
            <span className="wu-time">{t}</span>
            {DAYS.map((d, di) => {
              const here = sessions.filter(s => s.day === di && s.time === ti)
              return (
                <div key={d} className={`wu-cell${shake === `${di}-${ti}` ? ' shake' : ''}`}>
                  {here.map(s => (
                    s.mine
                      ? <button key={s.id} className="wu-s mine" onClick={() => remove(s)} aria-label={`Cancel booking ${slot(di, ti)}`}>
                          <b>{s.room}</b><small>new · tap to undo</small>
                        </button>
                      : <span key={s.id} className={`wu-s${s.room === room ? ' hl' : ''}`}>
                          <b>{s.room}</b><small>{s.who.split(' ')[0]}</small>
                        </span>
                  ))}
                  <button className="wu-add" onClick={() => book(di, ti)} aria-label={`Book ${roomName(room)} on ${slot(di, ti)}`}>+</button>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div className={`wu-status ${status.kind}`} role="status">{status.text}</div>
    </div>
  )
}

export default function WushiCard() {
  return (
    <FeatureCard
      project={wushi}
      slug="wushi"
      emphasis={['replacing a Google Form feeding a spreadsheet', 'clash-free room scheduling']}
      visual={<ScheduleBoard />}
      visualClass="osho-vis wu-vis"
    />
  )
}
