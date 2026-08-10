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
  
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages(locale)

  return (
    <IntlProvider locale={localeCodeMap[locale as any]} messages={messages}>
      <Header locale={locale as Locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={locale as Locale} />
    </IntlProvider>
  )
}
