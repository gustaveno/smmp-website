'use client'

import { useIntl } from 'react-intl'

export default function PrayersPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: 'pages.prayers.title', defaultMessage: 'Prayers' })}</h1>
    </div>
  )
}
