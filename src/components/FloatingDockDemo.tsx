import React from 'react'
import Image from 'next/image'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2
} from '@tabler/icons-react'
import { BsCalendar2Plus } from 'react-icons/bs'
import { GiStrong } from 'react-icons/gi'
import { HiOutlineWallet } from 'react-icons/hi2'
import { RiCalendarScheduleLine } from 'react-icons/ri'

import { FloatingDock } from '@/components/ui/floating-dock'

import { ModeToggle } from './ui/mode-toggle'

export function FloatingDockDemo() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '/#'
    },

    {
      title: 'Training',
      icon: (
        <GiStrong className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '/#training'
    },
    {
      title: 'Members',
      icon: (
        <HiOutlineWallet className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '/pricing'
    },
    {
      title: 'Schedule',
      icon: (
        <RiCalendarScheduleLine className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '/#schedule'
    },
    {
      title: 'Bookings',
      icon: (
        <BsCalendar2Plus className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: 'https://calendly.com/spiderbear714/private-with-coach-larry'
    },
    {
      title: 'Dark Mode',
      icon: <ModeToggle />,
      href: '#'
    }
  ]
  return (
    <div className='flex h-[5rem] w-full items-center justify-center '>
      <FloatingDock items={links} />
    </div>
  )
}
