import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function AnimatedJoinButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/spiderbear714/free-trial-class'
        className={cn(
          'group flex h-9 w-44 scale-100 items-center rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:h-12 md:w-56'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-3 scale-75 scale-x-[-.7] transition-transform ease-in-out group-hover:translate-x-3 sm:scale-x-[-1]'>
            🥊
          </span>
          <span className='font-heading text-sm capitalize md:text-lg'>
            Start Training
          </span>

          <span className='ml-3 scale-75 transition-transform ease-in-out group-hover:-translate-x-3'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
