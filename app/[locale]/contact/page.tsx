'use client'

import { useIntl } from 'react-intl'

export default function ContactPage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: 'pages.contact.title', defaultMessage: 'Contact Us' })}</h1>
      <p className="text-lg text-muted-foreground mb-8">{intl.formatMessage({ id: 'pages.contact.description', defaultMessage: 'We would love to hear from you' })}</p>
      
      <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">{intl.formatMessage({ id: 'pages.contact.name', defaultMessage: 'Name' })}</label>
            <input
              type="text"
              placeholder={intl.formatMessage({ id: 'name', defaultMessage: 'Name' })}
              className="w-full px-3 py-2 border border-border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{intl.formatMessage({ id: 'pages.contact.email', defaultMessage: 'Email' })}</label>
            <input
              type="email"
              placeholder={intl.formatMessage({ id: 'email', defaultMessage: 'Email' })}
              className="w-full px-3 py-2 border border-border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{intl.formatMessage({ id: 'pages.contact.message', defaultMessage: 'Message' })}</label>
            <textarea
              placeholder={intl.formatMessage({ id: 'message', defaultMessage: 'Message' })}
              rows={5}
              className="w-full px-3 py-2 border border-border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {intl.formatMessage({ id: 'pages.contact.send', defaultMessage: 'Send' })}
          </button>
        </form>
      </div>
    </div>
  )
}
