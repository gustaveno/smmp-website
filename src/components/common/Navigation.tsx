'use client'

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

  const navItems = [
    { label: intl.formatMessage({ id: 'common.navigation.events', defaultMessage: 'Events' }), href: '/public/events' },
    { label: intl.formatMessage({ id: 'common.navigation.sermons', defaultMessage: 'Sermons' }), href: '/public/sermons' },
    { label: intl.formatMessage({ id: 'common.navigation.news', defaultMessage: 'News' }), href: '/public/news' },
    { label: intl.formatMessage({ id: 'common.navigation.schedule', defaultMessage: 'Schedule' }), href: '/schedule' },
    { label: intl.formatMessage({ id: 'common.navigation.donate', defaultMessage: 'Donate' }), href: '/donate' },
    { label: intl.formatMessage({ id: 'common.navigation.contact', defaultMessage: 'Contact' }), href: '/contact' },
  ]

  const isActive = (href: string) => {
    return currentPath === href || currentPath.startsWith(href + '/')
  }

  return (
    <nav className="hidden md:flex items-center space-x-1">
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
