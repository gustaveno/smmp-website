'use client'

import { useIntl } from 'react-intl'

export default function ContactPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: 'pages.contact.title', defaultMessage: 'Contact Us' })}</h1>
      <p className="text-lg text-muted-foreground mb-8">{intl.formatMessage({ id: 'pages.contact.description', defaultMessage: 'We would love to hear from you' })}</p>
    </div>
  )
}
