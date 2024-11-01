import Image from 'next/image'

import { Ripple } from '@/components/ui/ripple'

export function RippleDemo() {
  return (
    <div className='absolute -z-10 flex h-[350px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-full md:h-[500px] md:w-[500px]  '>
      <Image
        src='/mtfight.jpeg'
        alt='Martial Arts Training'
        fill
        objectPosition='center'
        className='rounded-full opacity-20'
      />
      <Ripple />
    </div>
  )
}
