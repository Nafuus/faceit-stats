'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  // elo progressBar color
  const thresholds = [
    { value: 100, color: 'rgb(254, 31, 0)' }, // 10lvl
    { value: 76.55, color: '#FF6C20' }, // 8,9lvl
    { value: 45.05, color: '#FFCD25' }, // 4,5,6,7 lvl
    { value: 25.05, color: '#47E36E' }, // 2,3lvl
    { value: 0, color: '#C4C4C4' }, // 1lvl
  ]

  let backgroundColor = 'auto'

  for (const { value: threshold, color } of thresholds) {
    if (value >= threshold) {
      backgroundColor = color
      break
    }
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary ProgressPrimitive',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor,
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
