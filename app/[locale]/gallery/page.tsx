'use client'

import { useIntl } from 'react-intl'

export default function GalleryPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1>{intl.formatMessage({ id: 'pages.gallery.title', defaultMessage: 'A collection of moments' })}</h1>
      {/* Your content */}
    </div>
  )
}