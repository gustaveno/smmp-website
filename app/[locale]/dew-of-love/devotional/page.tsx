'use client'

import { useIntl } from 'react-intl'

export default function DevotionalPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: 'pages.devotional.title', defaultMessage: 'Devotional' })}</h1>
    </div>
  )
}
