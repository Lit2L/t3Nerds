'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { type MainNavItem } from '@/types'

import { cn } from '@/lib/utils'

import Logo from './Logo'
import { ModeToggle } from './ui/mode-toggle'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()

  return (
    <div className='flex flex-1 justify-between gap-6 md:gap-10 md:px-12'>
      <Link href='/' className='h-20 w-28 items-center md:flex md:flex-col'>
        <Logo />
      </Link>
      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center font-genos text-lg font-bold transition-colors hover:text-white/50 sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      ) : null}
    </div>
  )
}
