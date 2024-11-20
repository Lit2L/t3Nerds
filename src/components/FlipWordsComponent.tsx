import { FlipWords } from '@/components/ui/flip-words'
import React from 'react'

export function FlipWordsComponent() {
  const words = [
    'No-Meatheads',
    'No-Egos',
    'Technique',
    'Strength',
    'Conditioning',
    'Defensive Skills',
    'Fight-IQ',
    'Confidence'
  ]

  return (
    <div className='flex w-full justify-center'>
      <p className='text-md text-center font-genos font-semibold text-emerald-600 dark:text-emerald-400'>
        +++
      </p>
      <FlipWords words={words} />
    </div>
  )
}
