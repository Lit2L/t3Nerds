import { Benefits } from '@/components/sections/benefits'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import { Training } from '@/components/sections/training'

export default async function IndexPage() {
  const stars = false

  return (
    <div className='min-h-screen '>
      <HeroLanding />
      <Training />
      <Benefits />
      <Schedule />
    </div>
  )
}
