import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function ProgressDemo({ currentElo }) {
  const [progress, setProgress] = useState(currentElo)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [currentElo])

  return <Progress value={currentElo} className="w-[100%]" />
}
