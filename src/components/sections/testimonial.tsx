import { AnimatedTestimonialsCards } from '../AnimatedTestimonialCards'
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle
} from '@/components/ui/minimal-card'

export function Testimonials() {
  return (
    <div className='mx-auto w-full max-w-4xl'>
      <div className='flex min-h-[600px]  flex-col justify-center space-y-4  rounded-lg p-4'>
        <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'>
          <AnimatedTestimonialsCards />
        </div>
      </div>
    </div>
  )
}
