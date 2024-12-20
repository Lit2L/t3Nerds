import { BillingForm } from '@/components/billing-form'
import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import { DashboardShell } from '@/components/shell'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { getCurrentUser } from '@/lib/session'
import { stripe } from '@/lib/stripe'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { authOptions } from '@/server/auth'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.'
}

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    )
    // isCanceled = stripePlan.cancel_at_period_end; // TODO: Check if should check status or not
    isCanceled =
      stripePlan.cancel_at_period_end || stripePlan.status == 'canceled'
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Billing'
        text='Manage billing and your subscription plan.'
      />
      <div className='grid gap-8'>
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled
          }}
        />
      </div>
    </DashboardShell>
  )
}
