'use client'

import { useEffect, useState } from 'react'

const START = new Date(2019, 6, 1).getTime()

export default function Years() {
  const [yoe, setYoe] = useState(6)

  useEffect(() => {
    setYoe(Math.floor((Date.now() - START) / (1000 * 60 * 60 * 24 * 365.25)))
  }, [])

  return <>{yoe}</>
}
