import Stripe from 'stripe'

//import { env } from '@/process.env.js'

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2022-11-15',
  typescript: true
})
