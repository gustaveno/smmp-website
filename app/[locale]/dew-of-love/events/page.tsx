'use client'

import { useEffect, useState } from 'react'
import { CalendarDays, Clock3, MapPin, Sparkles } from 'lucide-react'
import { useIntl } from 'react-intl'

type SanityEvent = {
  _id: string
  title?: string | Record<string, unknown>
  slug?: { current?: string }
  date?: string
  description?: string | Record<string, unknown>
  location?: string | Record<string, unknown>
  image?: { asset?: { url?: string } }
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
        image { asset->{ url } }
      }
    `)
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`

    fetch(url)
      .then(async (response) => {
        if (!response.ok) throw new Error(`Sanity request failed with status ${response.status}`)
        const data = await response.json()
        setEvents(data.result || [])
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load events'))
      .finally(() => setLoading(false))
  }, [])

  const formatDate = (value?: string) => {
    if (!value) return null
    const parsedDate = new Date(value)
    if (Number.isNaN(parsedDate.getTime())) return value
    return intl.formatDate(parsedDate, { dateStyle: 'long' })
  }

  const getLocalizedText = (value: unknown, fallback = ''): string => {
    if (typeof value === 'string') return value
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const localizedValue = value as Record<string, unknown>
      const locale = intl.locale?.split('-')[0] || 'id'
      for (const candidate of [locale, intl.locale, 'id', 'en', 'fr']) {
        const text = localizedValue[candidate]
        if (typeof text === 'string' && text.trim()) return text
      }
    }
    return fallback
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <section className="border-b border-border/60 bg-muted/30 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            <Sparkles aria-hidden="true" />
            <span>Dew of Love</span>
          </div>
          <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            {intl.formatMessage({ id: 'pages.events.title', defaultMessage: 'Events' })}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
            {intl.formatMessage({ id: 'pages.events.description', defaultMessage: 'View upcoming events' })}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {loading && <div className="rounded-xl border border-border/70 bg-muted/30 p-12 text-center text-muted-foreground">Loading events...</div>}

        {!loading && error && <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">{error}</div>}

        {!loading && !error && events.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-14 text-center">
            <CalendarDays className="mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-muted-foreground">{intl.formatMessage({ id: 'pages.events.noEvents', defaultMessage: 'No events scheduled' })}</p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => {
              const title = getLocalizedText(event.title, 'Untitled event')
              const description = getLocalizedText(event.description)
              const location = getLocalizedText(event.location)
              return (
                <article key={event._id} className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  {event.image?.asset?.url ? (
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img src={event.image.asset.url} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-muted/50 text-primary/60"><CalendarDays className="size-10" aria-hidden="true" /></div>
                  )}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      {event.date && <span className="inline-flex items-center gap-2"><Clock3 className="size-4" aria-hidden="true" />{formatDate(event.date)}</span>}
                      {location && <span className="inline-flex items-center gap-2"><MapPin className="size-4" aria-hidden="true" />{location}</span>}
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">{title}</h2>
                    {description && <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted-foreground">{description}</p>}
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}
