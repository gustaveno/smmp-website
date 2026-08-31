'use client'

import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

type SanityEvent = {
  _id: string
  title?: string | Record<string, unknown>
  slug?: {
    current?: string
  }
  date?: string
  description?: string | Record<string, unknown>
  location?: string | Record<string, unknown>
  image?: {
    asset?: {
      url?: string
    }
  }
}

export default function EventsPage() {
  const intl = useIntl()
  const [events, setEvents] = useState<SanityEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

    if (!projectId) {
      setError('Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables.')
      setLoading(false)
      return
    }

    const query = encodeURIComponent(`
      *[_type == "embunKasih"] | order(date desc) {
        _id,
        title,
        slug,
        date,
        description,
        location,
        image {
          asset->{
            url
          }
        }
      }
    `)

    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`

    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Sanity request failed with status ${response.status}`)
        }

        const data = await response.json()
        setEvents(data.result || [])
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to load events')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const formatDate = (value?: string) => {
    if (!value) return null

    const parsedDate = new Date(value)
    if (Number.isNaN(parsedDate.getTime())) {
      return value
    }

    return intl.formatDate(parsedDate, { dateStyle: 'long' })
  }

  const getLocalizedText = (value: unknown, fallback = ''): string => {
    if (typeof value === 'string') {
      return value
    }

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const localizedValue = value as Record<string, unknown>
      const locale = intl.locale?.split('-')[0] || 'id'
      const candidates = [locale, intl.locale, 'id', 'en', 'fr']

      for (const candidate of candidates) {
        const text = localizedValue[candidate]
        if (typeof text === 'string' && text.trim()) {
          return text
        }
      }
    }

    return fallback
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">
        {intl.formatMessage({ id: 'pages.events.title', defaultMessage: 'Events' })}
      </h1>

      <p className="mb-8 text-lg text-muted-foreground">
        {intl.formatMessage({ id: 'pages.events.description', defaultMessage: 'View upcoming events' })}
      </p>

      {loading && (
        <div className="rounded-lg bg-muted p-8 text-center text-muted-foreground">
          Loading events...
        </div>
      )}

      {!loading && error && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-8 text-center text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && events.length === 0 && (
        <div className="rounded-lg bg-muted p-8 text-center">
          <p className="text-muted-foreground">
            {intl.formatMessage({ id: 'pages.events.noEvents', defaultMessage: 'No events scheduled' })}
          </p>
        </div>
      )}

      {!loading && !error && events.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => {
            const title = getLocalizedText(event.title, 'Untitled event')
            const description = getLocalizedText(event.description)
            const location = getLocalizedText(event.location)

            return (
              <article key={event._id} className="overflow-hidden rounded-lg border bg-background shadow-sm">
                {event.image?.asset?.url && (
                  <img
                    src={event.image.asset.url}
                    alt={title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold">{title}</h2>

                  {event.date && (
                    <p className="mb-2 text-sm text-muted-foreground">
                      {formatDate(event.date)}
                    </p>
                  )}

                  {location && (
                    <p className="mb-3 text-sm text-muted-foreground">{location}</p>
                  )}

                  {description && (
                    <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
