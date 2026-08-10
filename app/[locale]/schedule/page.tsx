'use client'

import { useIntl } from 'react-intl'

export default function SchedulePage() {
  const intl = useIntl()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">
        {intl.formatMessage({ id: 'pages.schedule.title', defaultMessage: 'Service Schedule' })}
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        {intl.formatMessage({ id: 'pages.schedule.description', defaultMessage: 'Check our weekly service times' })}
      </p>

      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Sunday Worship</h2>
            <p className="text-muted-foreground">10:00 AM</p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Bible Study</h2>
            <p className="text-muted-foreground">Wednesday, 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
