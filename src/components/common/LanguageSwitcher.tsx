'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'

type LanguageSwitcherProps = {
  locale: Locale
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = locale

  const handleLanguageChange = (newLocale: Locale) => {
    const pathWithoutLocale = pathname?.replace(/^\/([a-z]{2})(?=\/|$)/, '') || '/'
    const nextPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`
    router.push(nextPath)
  }

  return (
    <div className="flex shrink-0 items-center gap-0.5 rounded-md border border-border/60 p-0.5">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`rounded px-1.5 py-1 text-xs font-medium transition-colors sm:px-2 sm:text-sm ${
            currentLocale === lang
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-accent'
          }`}
          aria-label={`Switch to ${lang === 'id' ? 'Indonesian' : lang === 'en' ? 'English' : 'French'}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
