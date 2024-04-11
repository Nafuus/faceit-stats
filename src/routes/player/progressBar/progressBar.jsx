'use client'

import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function ProgressBar({ player, faceitStats }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const normalizedValue = (player?.current_elo / 2000) * 100
    const timer = setTimeout(
      () => setProgress(normalizedValue > 100 ? 100 : normalizedValue),
      500,
    )
    return () => clearTimeout(timer)
  }, [player])

  return (
    <div className="player_wrapper">
      <div>
        <div>faceit lvl: {faceitStats?.games.cs2.skill_level}</div>
        <div>elo: {player?.current_elo}</div>
        <Progress value={progress} className="w-[auto]" />
      </div>
    </div>
  )
}
