import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { IntlProvider } from 'react-intl'
import { locales, getMessages, localeCodeMap, type Locale } from '@/lib/i18n'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

type LayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: 'id' }, { locale: 'en' }, { locale: 'fr' }]
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params
  const resolvedLocale = locale as Locale

  if (!locales.includes(resolvedLocale)) {
    notFound()
  }

  const messages = await getMessages(resolvedLocale)

  return (
    <IntlProvider locale={localeCodeMap[resolvedLocale]} messages={messages}>
      <Header locale={resolvedLocale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={resolvedLocale} />
    </IntlProvider>
  )
}
