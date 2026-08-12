import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Lora } from 'next/font/google'

const lora = Lora({})

export const metadata: Metadata = {
  title: {
    template: '%s | Congregation',
    default: 'Congregation Website',
  },
  description: 'Welcome to our faith community',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Congregation',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className="scroll-smooth">
      <body suppressHydrationWarning className={`antialiased bg-background text-foreground ${lora.className}`}>
        {children}
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  )
}
