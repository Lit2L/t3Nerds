import Logo from '@/components/Logo'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/user-auth-form'
import { cn } from '@/lib/utils'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

export default function LoginPage() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className='mr-2 size-4' />
          Back
        </>
      </Link>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col items-center justify-center space-y-2 text-center'>
          <Logo />
          <h1 className='text-center text-2xl font-semibold tracking-tight'>
            Welcome Back!
          </h1>
        </div>
        <UserAuthForm />
        <p className='px-8 text-center text-sm text-muted-foreground'>
          <Link
            href='/register'
            className='hover:text-brand underline underline-offset-4'
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
