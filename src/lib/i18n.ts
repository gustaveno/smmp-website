export const locales = ['id', 'en', 'fr'] as const
export const defaultLocale = 'id' as const

export type Locale = (typeof locales)[number]

// Language codes for react-intl
export const localeCodeMap: Record<Locale, string> = {
  id: 'id-ID',
  en: 'en-US',
  fr: 'fr-FR',
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) {
    return defaultLocale
  }

  const match = pathname.match(/^\/([a-z]{2})(?:\/|$)/)
  if (match) {
    const candidate = match[1] as Locale
    return locales.includes(candidate) ? candidate : defaultLocale
  }

  return defaultLocale
}

export function flattenMessages(messages: Record<string, any>, prefix = ''): Record<string, string> {
  return Object.entries(messages).reduce<Record<string, string>>((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(acc, flattenMessages(value as Record<string, any>, fullKey))
    } else {
      acc[fullKey] = String(value)
    }

    return acc
  }, {})
}

// Load messages for a specific locale
export async function getMessages(locale: string): Promise<Record<string, string>> {
  if (!locales.includes(locale as Locale)) {
    return getMessages(defaultLocale)
  }

  try {
    const module = await import(`../messages/${locale}.json`)
    return flattenMessages(module.default)
  } catch {
    const module = await import(`../messages/${defaultLocale}.json`)
    return flattenMessages(module.default)
  }
}
