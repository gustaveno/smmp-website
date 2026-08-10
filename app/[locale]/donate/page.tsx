'use client'

import { useIntl } from 'react-intl'

export default function DonatePage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: 'pages.donate.title', defaultMessage: 'Donate' })}</h1>
      <p className="text-lg text-muted-foreground mb-8">{intl.formatMessage({ id: 'pages.donate.description', defaultMessage: 'Support our mission' })}</p>
      
      <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">{intl.formatMessage({ id: 'pages.donate.amount', defaultMessage: 'Amount' })}</label>
            <input
              type="number"
              placeholder={intl.formatMessage({ id: 'pages.donate.amount', defaultMessage: 'Amount' })}
              className="w-full px-3 py-2 border border-border rounded-md"
            />
          </div>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            {intl.formatMessage({ id: 'pages.donate.continue', defaultMessage: 'Continue' })}
          </button>
        </div>
      </div>
    </div>
  )
}
