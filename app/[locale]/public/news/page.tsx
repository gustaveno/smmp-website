'use client'

import { useIntl } from 'react-intl'

export default function NewsPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: 'pages.news.title', defaultMessage: 'News' })}</h1>
      <p className="text-lg text-muted-foreground mb-8">{intl.formatMessage({ id: 'pages.news.description', defaultMessage: 'Latest updates from our community' })}</p>
      
      <div className="bg-muted rounded-lg p-8 text-center">
        <p className="text-muted-foreground">{intl.formatMessage({ id: 'pages.news.noNews', defaultMessage: 'No news available' })}</p>
      </div>
    </div>
  )
}
