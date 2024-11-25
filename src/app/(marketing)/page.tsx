import { FeaturesSectionDemo } from '@/components/BentoGrid'
import { AnimatedPinCard } from '@/components/cards/AnimatedPinCard'
import { AnimatedTestimonialsCards } from '@/components/cards/AnimatedTestimonialCards'
import { TrainingCards } from '@/components/sections/TrainingCards'
import { Benefits } from '@/components/sections/benefits'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'

export default async function IndexPage() {
  return (
    <div className='mx-auto min-h-screen w-full'>
      <HeroLanding />
      <TrainingCards />
      <AnimatedTestimonialsCards />
      <FeaturesSectionDemo />
      <Benefits />
      <Schedule />
      <AnimatedPinCard />
    </div>
  )
}
