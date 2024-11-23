import { FloatingDockDemo } from '@/components/FloatingDockDemo'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className='relative mx-auto flex min-h-screen w-full max-w-full flex-col'>
      <header className=' z-40 bg-background bg-gradient-to-bl from-emerald-500/90 via-emerald-400/70 to-emerald-600/95'>
        <div className='container flex h-20 items-center justify-between py-6'>
          <MainNav items={marketingConfig.mainNav} />
          <nav className='flex items-center gap-3'>
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
      <main className='mx-auto w-full flex-1 items-center justify-center bg-[radial-gradient(circle_500px_at_50%_480px,#181818,transparent)] md:bg-[radial-gradient(circle_600px_at_50%_550px,#181818,transparent)]'>
        {children}
      </main>
      <div className='fixed bottom-0 left-0 right-1/2  translate-x-1/2'>
        <FloatingDockDemo />
      </div>
      <SiteFooter />
    </div>
  )
}
