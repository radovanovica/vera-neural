import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VERA — 24/7 Nervous System Support',
  description:
    'VERA is an AI that reads your nervous system state in real time, senses where it\'s heading, and meets you before it overwhelms you.',
  metadataBase: new URL('https://veraneural.com'),
  openGraph: {
    title: 'VERA — 24/7 Nervous System Support',
    description:
      'Support that reads what your nervous system is doing and meets you before it overwhelms you.',
    url: 'https://veraneural.com',
    siteName: 'VERA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERA — 24/7 Nervous System Support',
    description:
      'Support that reads what your nervous system is doing and meets you before it overwhelms you.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
