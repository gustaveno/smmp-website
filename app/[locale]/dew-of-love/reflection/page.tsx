'use client'

import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Clock3, CalendarDays } from 'lucide-react'
import Link from 'next/link'

type SanityEvent = {
  _id: string
  title?: string | Record<string, unknown>
  slug?: { current?: string }
  publishedAt?: string
  excerpt?: string | Record<string, unknown>
  coverImage?: { asset?: { url?: string }; alt?: string }
}

export default function ReflectionPage() {
  const intl = useIntl()
  const localeSegment = intl.locale?.split('-')[0] || 'id'
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
        *[_type == "embunKasih" && contentType == "reflection"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          excerpt,
          coverImage { asset->{ url }, alt }
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
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/60 px-4 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mt-8 max-w-3xl">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">{intl.formatMessage({ id: 'pages.reflection.title', defaultMessage: 'Reflections' })}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {intl.formatMessage({ id: 'pages.reflection.description', defaultMessage: 'View the latest reflections' })}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {loading && <div className="rounded-xl border border-border/70 bg-muted/30 p-12 text-center text-muted-foreground">Loading events...</div>}

        {!loading && error && <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">{error}</div>}

        {!loading && !error && events.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-14 text-center">
            <CalendarDays className="mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-muted-foreground">{intl.formatMessage({ id: 'pages.reflection.noReflections', defaultMessage: 'No reflections available' })}</p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => {
              const title = getLocalizedText(event.title, 'Untitled event')
              const excerpt = getLocalizedText(event.excerpt)
              const slugPath = event.slug?.current ? `/${localeSegment}/dew-of-love/reflection/${event.slug.current}` : undefined

              const card = (
                <article className="group flex flex-col overflow-hidden rounded-sm border border-border/70 bg-card shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  {event.coverImage?.asset?.url ? (
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img src={event.coverImage.asset.url} alt={event.coverImage.alt || title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-muted/50 text-primary/60"><CalendarDays className="size-10" aria-hidden="true" /></div>
                  )}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      {event.publishedAt && <span className="inline-flex items-center gap-2"><Clock3 className="size-4" aria-hidden="true" />{formatDate(event.publishedAt)}</span>}
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">{title}</h2>
                    {excerpt && <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted-foreground">{excerpt}</p>}
                  </div>
                </article>
              )

              return slugPath ? (
                <Link key={event._id} href={slugPath} className="block">
                  {card}
                </Link>
              ) : (
                <div key={event._id}>{card}</div>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}