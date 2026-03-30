import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import withPWAInit from "@ducanh2912/next-pwa";

// Bundle analyzer for performance optimization
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// PWA wrapper (@ducanh2912/next-pwa ESM)
const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: false,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https?:.*\.(js|css)$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-resources',
          networkTimeoutSeconds: 3,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60,
          },
        },
      },
      {
        urlPattern: /^https?:.*$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'others',
          networkTimeoutSeconds: 3,
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 30 * 60,
          },
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_HUME_API_KEY: process.env.NEXT_PUBLIC_HUME_API_KEY || process.env.HUME_API_KEY || '',
    NEXT_PUBLIC_HUME_CONFIG_ID: process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '',
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'veraneural.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://vercel.live https://*.clerk.accounts.dev https://clerk.accounts.dev https://clerk.veraneural.ai https://*.clerk.com https://challenges.cloudflare.com https://*.hcaptcha.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://analytics.tiktok.com https://connect.facebook.net https://*.sentry.io https://storage.googleapis.com blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https: https://clerk.veraneural.ai https://*.clerk.accounts.dev https://*.clerk.com; connect-src 'self' https://*.supabase.co https://api.stripe.com https://api.anthropic.com https://api.openai.com https://veraneural.com https://*.elevenlabs.io https://*.hume.ai wss://*.hume.ai wss://*.supabase.co https://*.clerk.accounts.dev https://clerk.veraneural.ai https://*.clerk.com https://challenges.cloudflare.com https://*.hcaptcha.com https://www.google-analytics.com https://analytics.google.com https://*.google.com https://*.doubleclick.net https://analytics.tiktok.com https://*.tiktokw.us https://www.facebook.com https://graph.facebook.com https://*.sentry.io https://*.ingest.sentry.io https://www.googleadservices.com https://googleads.g.doubleclick.net https://storage.googleapis.com https://fonts.googleapis.com https://fonts.gstatic.com; frame-src https://js.stripe.com https://hooks.stripe.com https://*.clerk.accounts.dev https://clerk.veraneural.ai https://*.clerk.com https://challenges.cloudflare.com https://*.hcaptcha.com https://www.googletagmanager.com https://td.doubleclick.net; media-src 'self' blob: https://*.wordpress.com https://videos.files.wordpress.com; worker-src 'self' blob:;",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/chat',
        destination: '/chat-exact',
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'vision-design-studio.com' }],
        destination: '/vds-home',
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'www.vision-design-studio.com' }],
        destination: '/vds-home',
      },
    ];
  },

  webpack: (config) => {
    return config;
  },

  turbopack: {},
};

export default withSentryConfig(withBundleAnalyzer(withPWA(nextConfig)), {
  // Sentry build options
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Upload source maps for better stack traces
  silent: !process.env.CI,
  widenClientFileUpload: true,

  // Auto-instrument server functions
  webpack: {
    automaticVercelMonitors: true,
  },
});