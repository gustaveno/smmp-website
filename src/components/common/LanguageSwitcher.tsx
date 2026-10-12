'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

type LanguageSwitcherProps = {
  locale: Locale
}

const languageNames: Record<string, string> = {
  id: 'Indonesian',
  en: 'English',
  fr: 'French',
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === locale) return
    const pathWithoutLocale = pathname?.replace(/^\/([a-z]{2})(?=\/|$)/, '') || '/'
    const nextPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`
    router.push(nextPath)
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex shrink-0 items-center gap-1 rounded-lg border border-border/70 p-1"
    >
      {locales.map((lang) => {
        const isCurrent = locale === lang

        return (
          <button
            key={lang}
            type="button"
            onClick={() => handleLanguageChange(lang)}
            aria-pressed={isCurrent}
            aria-label={`Switch to ${languageNames[lang] ?? lang.toUpperCase()}`}
            lang={lang}
            className={cn(
              'inline-flex h-8 min-w-9 items-center justify-center rounded-md px-2.5 text-sm font-medium transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
              isCurrent
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-accent',
            )}
          >
            {lang.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}