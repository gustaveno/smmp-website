'use client'

import { useIntl } from 'react-intl'

export default function IdentityPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1>{intl.formatMessage({ id: 'pages.identity.title', defaultMessage: 'Vision, Mission, and Motto' })}</h1>
      {/* Your content */}
    </div>
  )
}