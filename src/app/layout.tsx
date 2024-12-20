import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import { genosFont, logoFont } from '@/assets'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/config/site'
import { absoluteUrl, cn } from '@/lib/utils'
import { TRPCReactProvider } from '@/trpc/react'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nerdsfighting.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI'
  ],
  authors: [
    {
      name: 'larry||_',
      url: 'https://nerdsfighting.com'
    }
  ],
  creator: 'shadcn',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@larry||_'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body
        className={cn(
          'min-h-screen w-full max-w-full bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
          logoFont.variable,
          genosFont.variable
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {children}
            <Analytics />
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
