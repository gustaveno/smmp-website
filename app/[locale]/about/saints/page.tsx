'use client'

import { useIntl } from 'react-intl'

export default function SaintsPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1>{intl.formatMessage({ id: 'pages.saints.title', defaultMessage: 'Three Saints of Congregation' })}</h1>
      {/* Your content */}
    </div>
  )
}