'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'
import { type Locale } from '@/lib/i18n'

type HeaderProps = {
  locale: Locale
}

export default function Header({ locale }: HeaderProps) {

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-end">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 font-bold text-lg transition-colors hover:text-primary"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              C
            </div>
            <span className="hidden sm:inline">Congregation</span>
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
