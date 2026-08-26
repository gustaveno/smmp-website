'use client'

import { useIntl } from 'react-intl'

export default function SpiritualityPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1>{intl.formatMessage({ id: 'pages.spirituality.title', defaultMessage: 'Our Spirituality' })}</h1>
      {/* Your content */}
    </div>
  )
}