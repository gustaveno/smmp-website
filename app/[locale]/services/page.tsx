'use client'

import { useIntl } from 'react-intl'

export default function ServicesPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1>{intl.formatMessage({ id: 'pages.services.title', defaultMessage: 'Congressional Service Fields' })}</h1>
      {/* Your content */}
    </div>
  )
}