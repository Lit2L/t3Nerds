import Link from 'next/link'

import { env } from '@/env.js'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Benefits } from '@/components/sections/benefits'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'

export default async function IndexPage() {
  const stars = false

  return (
    <>
      <HeroLanding />

      <Benefits />
      <Schedule />
    </>
  )
}
