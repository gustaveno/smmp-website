'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useIntl } from 'react-intl'
import { getLocaleFromPathname, type Locale } from '@/lib/i18n'

type NavigationProps = {
  locale?: Locale
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname()
  const intl = useIntl()
  const currentLocale = locale ?? getLocaleFromPathname(pathname)
  const currentPath = pathname?.replace(/^\/([a-z]{2})(?=\/|$)/, '') || '/'
  const [isDewOfLoveOpen, setIsDewOfLoveOpen] = useState(false)
  const dewOfLoveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isDewOfLoveOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (dewOfLoveRef.current && !dewOfLoveRef.current.contains(event.target as Node)) {
        setIsDewOfLoveOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDewOfLoveOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isDewOfLoveOpen])

  const dewOfLoveItems = [
    { label: intl.formatMessage({ id: 'common.navigation.events', defaultMessage: 'Events' }), href: '/public/events' },
    { label: intl.formatMessage({ id: 'common.navigation.sermons', defaultMessage: 'Sermons' }), href: '/public/sermons' },
    { label: intl.formatMessage({ id: 'common.navigation.news', defaultMessage: 'News' }), href: '/public/news' },
  ]

  const navItems = [
    { label: intl.formatMessage({ id: 'common.navigation.schedule', defaultMessage: 'Schedule' }), href: '/schedule' },
    { label: intl.formatMessage({ id: 'common.navigation.donate', defaultMessage: 'Donate' }), href: '/donate' },
    { label: intl.formatMessage({ id: 'common.navigation.contact', defaultMessage: 'Contact' }), href: '/contact' },
  ]

  const isActive = (href: string) => {
    return currentPath === href || currentPath.startsWith(href + '/')
  }

  const isDewOfLoveActive = dewOfLoveItems.some((item) => isActive(item.href))

  return (
    <nav className="hidden md:flex items-center space-x-1">
      <div
        ref={dewOfLoveRef}
        className="relative"
        onMouseEnter={() => setIsDewOfLoveOpen(true)}
        onMouseLeave={() => setIsDewOfLoveOpen(false)}
      >
        <button
          type="button"
          onClick={() => setIsDewOfLoveOpen((prev) => !prev)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isDewOfLoveActive
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-accent'
          }`}
          aria-expanded={isDewOfLoveOpen}
          aria-haspopup="true"
        >
          {intl.formatMessage({ id: 'common.navigation.dewOfLove', defaultMessage: 'Dew of Love' })}
        </button>
        {isDewOfLoveOpen && (
          <ul className="absolute left-0 top-full min-w-[10rem] rounded-md border bg-background shadow-md py-1 z-50">
            {dewOfLoveItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${currentLocale}${item.href}`}
                  onClick={() => setIsDewOfLoveOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={`/${currentLocale}${item.href}`}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive(item.href)
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-accent'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}