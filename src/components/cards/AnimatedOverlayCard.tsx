'use client'

import { cn } from '@/lib/utils'

export function AnimatedOverlayCard() {
  return (
    <div className='w-full max-w-xs'>
      <div
        className={cn(
          'card group relative mx-auto flex max-h-[30rem] min-h-96 w-full cursor-pointer flex-col justify-end rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800',
          'bg-[url(/learnUppercut.png)] bg-cover bg-bottom',
          // Preload hover image by setting it in a pseudo-element
          // 'before:fixed before:inset-0 before:z-[-1] before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:opacity-0',
          // 'hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]',
          "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
          'transition-all duration-500'
        )}
      >
        <video
          className='absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='/learnUppercut.mp4' type='video/mp4' />
        </video>
        <div className='text relative z-50'>
          <h1 className='relative text-lg font-bold text-gray-50 md:text-xl'>
            Uppercut Practice
          </h1>
          {/* <p className='relative my-4 text-base font-normal text-gray-50'>
            This card is for some special elements, like displaying background
            gifs on hover only.
          </p> */}
        </div>
      </div>
    </div>
  )
}
