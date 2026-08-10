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
    <div className="flex items-center space-x-1">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
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
