import { FlipWords } from '@/components/ui/flip-words'
import React from 'react'

export function FlipWordsComponent() {
  const words = [
    'Safe and Fun Workouts',
    'No-Egos',
    'Learn Technique',
    'Learn Defensive Skills',
    'Get Stronger',
    'Get Faster',
    'Learn Strategy and Fight Tactics',
    'No-Meatheads',
    'Improve Fight-IQ',
    'Raise your Confidence'
  ]

  return (
    <div className='flex w-full items-center justify-center'>
      <p className='text-md text-center font-genos font-semibold text-emerald-600 dark:text-emerald-400'>
        +++
      </p>
      <FlipWords words={words} />
    </div>
  )
}
