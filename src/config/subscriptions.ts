import { type SubscriptionPlan } from '@/types'

//import { env } from '@/process.env.js'

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description:
    'Free member with one free class and drop ins available for purchase.',
  stripePriceId: ''
}

export const proPlan: SubscriptionPlan = {
  name: 'PRO',
  description: 'The PRO plan has unlimited Muay Thai classes.',
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID!
}
