'use client'

import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import Logo from '../Logo'
import { RippleDemo } from '../Ripples'
import { AnimatedBookitButton } from '../animated-bookit-button'
import { Badge } from '../ui/badge'
import GradualSpacing from '../ui/gradual-spacing'

export default function HeroLanding() {
  return (
    <section
      id='hero'
      className='container relative mx-auto flex min-h-screen w-full flex-col items-center justify-evenly pb-36 text-center sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl'
    >
      <Badge className='md:text-md -translate-y-3 rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 text-center font-genos text-xs  font-bold uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:text-sm sm:tracking-wide lg:text-lg'>
        Fight Training & Martial Arts Club
      </Badge>
      <GradualSpacing
        className='text-center font-logo font-bold -tracking-widest text-black dark:text-white md:leading-[5rem]'
        text='Nerds Fighting'
      />
      <RippleDemo />
      <div className='h-32 w-48 sm:h-60 sm:w-72'>
        <Logo />

        <div className='text-md mx-auto w-full text-center font-genos font-bold tracking-widest text-white'>
          TRAINING{' '}
          <span className='text-md font-bold tracking-widest text-red-500'>
            {' '}
            CLUB
          </span>
        </div>
      </div>

      <FlipWordsComponent />

      <div
        className='flex translate-y-6 justify-center space-x-3 md:translate-y-3 md:space-x-4 lg:translate-y-0'
        style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
      >
        <AnimatedJoinButton />
        <AnimatedBookitButton />
      </div>
    </section>
  )
}
