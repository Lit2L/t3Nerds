import { TrainingCards } from '@/components/sections/TrainingCards'
import { Benefits } from '@/components/sections/benefits'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'

export default async function IndexPage() {
  const stars = false

  return (
    <div className='mx-auto min-h-screen w-full'>
      <HeroLanding />
      <TrainingCards />
      <Benefits />
      <Schedule />
    </div>
  )
}
