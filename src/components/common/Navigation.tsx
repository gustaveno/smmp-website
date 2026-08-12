'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useIntl } from 'react-intl'
import { getLocaleFromPathname, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

type NavigationProps = {
  locale?: Locale
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname()
  const intl = useIntl()
  const currentLocale = locale ?? getLocaleFromPathname(pathname)
  const currentPath = pathname?.replace(/^\/([a-z]{2})(?=\/|$)/, '') || '/'
  const [isDewOfLoveOpen, setIsDewOfLoveOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const isActive = (href: string) => currentPath === href || currentPath.startsWith(href + '/')
  const isDewOfLoveActive = dewOfLoveItems.some((item) => isActive(item.href))
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsDewOfLoveOpen(false)
  }

  const linkClass = (href: string) => cn(
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive(href) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent',
  )

  return (
    <>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
        <div
          ref={dewOfLoveRef}
          className="relative"
          onMouseEnter={() => setIsDewOfLoveOpen(true)}
          onMouseLeave={() => setIsDewOfLoveOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsDewOfLoveOpen((prev) => !prev)}
            className={cn(linkClass('/public'), isDewOfLoveActive && 'bg-primary text-primary-foreground')}
            aria-expanded={isDewOfLoveOpen}
            aria-haspopup="true"
          >
            {intl.formatMessage({ id: 'common.navigation.dewOfLove', defaultMessage: 'Dew of Love' })}
          </button>
          {isDewOfLoveOpen && (
            <ul className="absolute left-0 top-full z-50 min-w-40 rounded-md border bg-background py-1 shadow-md">
              {dewOfLoveItems.map((item) => (
                <li key={item.href}>
                  <Link href={`/${currentLocale}${item.href}`} onClick={() => setIsDewOfLoveOpen(false)} className={cn('block', linkClass(item.href))}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {navItems.map((item) => <Link key={item.href} href={`/${currentLocale}${item.href}`} className={linkClass(item.href)}>{item.label}</Link>)}
      </nav>

      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-accent md:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isMobileMenuOpen && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-border bg-background px-4 py-3 shadow-md md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <button type="button" onClick={() => setIsDewOfLoveOpen((prev) => !prev)} className={cn('w-full text-left', linkClass('/public'), isDewOfLoveActive && 'bg-primary text-primary-foreground')} aria-expanded={isDewOfLoveOpen}>
                {intl.formatMessage({ id: 'common.navigation.dewOfLove', defaultMessage: 'Dew of Love' })}
              </button>
              {isDewOfLoveOpen && <div className="flex flex-col gap-1 border-l border-border pl-3">{dewOfLoveItems.map((item) => <Link key={item.href} href={`/${currentLocale}${item.href}`} onClick={closeMobileMenu} className={linkClass(item.href)}>{item.label}</Link>)}</div>}
            </div>
            {navItems.map((item) => <Link key={item.href} href={`/${currentLocale}${item.href}`} onClick={closeMobileMenu} className={linkClass(item.href)}>{item.label}</Link>)}
          </div>
        </nav>
      )}
    </>
  )
}
