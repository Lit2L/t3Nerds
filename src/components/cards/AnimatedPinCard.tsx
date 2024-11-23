'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function AnimatedPinCard() {
  return (
    <div className='flex h-[50rem] w-full items-center justify-center'>
      <Link
        title='8780 Warner Ave, Suite 7 Fountain Valley, CA 92708'
        href='https://maps.app.goo.gl/zvZ1hC5it3SM1qad7'
        className='rounded-lg border bg-black p-3'
      >
        <div className='flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2'>
          <p className='!m-0 max-w-xs !pb-2 font-heading text-base font-bold text-slate-100'>
            Nerds Fighting
          </p>
          <span className=''>Location: Williams Academy of MMA</span>
          <div className='!m-0 !p-0 text-base font-normal'>
            <span className='text-slate-500'>
              Address: 8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
            </span>
          </div>
          <div className='flex w-full rounded-lg p-3'>
            <Image
              src='/location.png'
              alt='location'
              width={420}
              height={420}
              className='rounded-md border'
            />
          </div>
        </div>
        <Card className='my-6 py-6'>
          <CardContent className='p-3'>
            <p className='text-center font-heading text-2xl'>
              Location: Williams Academy of MMA
            </p>
            <Separator className='my-1' />
            8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
