'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'
import { type Locale } from '@/lib/i18n'
import Image from 'next/image'

type HeaderProps = {
  locale: Locale
}

export default function Header({ locale }: HeaderProps) {

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-0.5">
          <div className="flex items-center justify-end">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 sm:py-1">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 font-bold text-lg transition-colors hover:text-primary"
          >
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline">Kongregasi Suster Maria Magdalena Postel</span>
          </Link>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Navigation */}
            <Navigation locale={locale} />

          </div>
        </div>
      </div>
    </header>
  )
}
