/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { withContentlayer } from 'next-contentlayer'

// await import('./src/process.env.js')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'assets.aceternity.com',
      'images.unsplash.com',
      'www.yelp.com',
      's3-media0.fl.yelpcdn.com'
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

export default withContentlayer(config)
