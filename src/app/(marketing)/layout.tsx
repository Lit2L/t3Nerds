import Link from 'next/link'

import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { FloatingDockDemo } from '@/components/FloatingDockDemo'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className='relative mx-auto flex min-h-screen w-full flex-col'>
      <header className='container z-40 bg-background bg-gradient-to-bl from-emerald-500/90 via-emerald-400/70 to-emerald-600/95'>
        <div className='flex h-20 items-center justify-between py-6'>
          <MainNav items={marketingConfig.mainNav} />
          <nav className='flex items-center gap-3'>
            <ModeToggle />
            <Link
              href='/login'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className='mx-auto w-full flex-1 bg-[radial-gradient(circle_300px_at_50%_300px,#181818,transparent)] md:bg-[radial-gradient(circle_500px_at_50%_500px,#181818,transparent)]'>
        {children}
      </main>
      <div className='fixed bottom-0 left-0 right-1/2  translate-x-1/2'>
        <FloatingDockDemo />
      </div>
      <SiteFooter />
    </div>
  )
}
