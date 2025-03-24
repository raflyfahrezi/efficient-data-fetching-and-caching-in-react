import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/use-effect',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
