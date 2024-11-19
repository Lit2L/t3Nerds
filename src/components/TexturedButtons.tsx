'use client'

import { ChevronLeft, Trash, X } from 'lucide-react'

import { TexturedButton } from '@/components/ui/textured-button'

export function TexturedButtons() {
  return (
    <div className='flex  justify-center rounded-md px-4 py-6 dark:bg-stone-950 md:px-0'>
      <div>
        <div className='mt-4 flex max-w-lg flex-col gap-3'>
          <div className='flex gap-3'>
            <div>
              <TexturedButton size='sm'>Primary</TexturedButton>
            </div>
            <div className=''>
              <TexturedButton>Primary</TexturedButton>
            </div>
            <div className='hidden md:w-36'>
              <TexturedButton size='lg'>Primary</TexturedButton>
            </div>
          </div>
        </div>
        <div className='mt-4 flex max-w-lg flex-col gap-3'>
          <div className='flex gap-3'>
            <div>
              <TexturedButton variant='accent' size='sm'>
                Accent
              </TexturedButton>
            </div>
            <div className=''>
              <TexturedButton variant='accent'>Accent</TexturedButton>
            </div>
            <div className='hidden md:w-36'>
              <TexturedButton variant='accent' size='lg'>
                Accent
              </TexturedButton>
            </div>
          </div>
        </div>
        <div className='mt-4 flex max-w-lg flex-col gap-3'>
          <div className='flex w-full gap-3'>
            <div className=''>
              <TexturedButton variant='secondary' size='sm'>
                Secondary
              </TexturedButton>
            </div>
            <div className=''>
              <TexturedButton variant='secondary'>Secondary</TexturedButton>
            </div>
            <div className='hidden md:w-48'>
              <TexturedButton variant='secondary' size='lg'>
                Secondary
              </TexturedButton>
            </div>
          </div>
        </div>
        <div className='mt-4 flex max-w-lg flex-col gap-3'>
          <div className='flex w-full gap-3'>
            <div className=''>
              <TexturedButton variant='destructive' size='sm'>
                Destructive
              </TexturedButton>
            </div>
            <div className=''>
              <TexturedButton variant='destructive'>Destructive</TexturedButton>
            </div>
            <div className='hidden md:w-48'>
              <TexturedButton variant='destructive' size='lg'>
                Destructive
              </TexturedButton>
            </div>
          </div>
        </div>
        <div className='mt-4 flex max-w-lg flex-col gap-3'>
          <div className='flex w-full gap-3'>
            <div className=''>
              <TexturedButton variant='minimal' size='sm'>
                Minimal
              </TexturedButton>
            </div>
            <div className=''>
              <TexturedButton variant='minimal'>Minimal</TexturedButton>
            </div>
            <div className='hidden md:w-48'>
              <TexturedButton variant='minimal' size='lg'>
                Minimal
              </TexturedButton>
            </div>
          </div>
        </div>
        <div className='mt-4 flex max-w-xs flex-col gap-3'>
          <div className='flex gap-3'>
            <TexturedButton variant='icon' size='icon'>
              <ChevronLeft className='h-6 w-6 p-1' />
            </TexturedButton>

            <TexturedButton variant='icon' size='icon'>
              <Trash className='h-5 w-6 p-1' />
            </TexturedButton>

            <TexturedButton variant='icon' size='icon'>
              <X className='h-6 w-6 p-1' />
            </TexturedButton>
          </div>
        </div>
      </div>
    </div>
  )
}
