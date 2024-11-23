import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { CalendarHeart, Pencil } from 'lucide-react'
import Link from 'next/link'
import { GiHighKick, GiPunchingBag } from 'react-icons/gi'

export function AnimatedBookitButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='/pricing'
        className={cn(
          'group flex h-9 w-44 scale-100 items-center rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:h-12 md:w-56'
        )}
      >
        <AnimatedShinyText className='flex items-center justify-center px-3 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <GiPunchingBag className='mr-3 size-4  text-blue-300 transition-transform ease-in-out group-hover:translate-x-2 sm:size-4' />
          <span className='font-heading text-xs md:text-lg'>
            Join the NERDS
          </span>

          <GiHighKick className='ml-4 size-4 scale-x-[-.9] text-yellow-600 transition-transform ease-in-out group-hover:-translate-x-3 sm:size-4' />
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
