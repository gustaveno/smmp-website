'use client'

import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
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

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {loading && <div className="rounded-xl border border-border/70 bg-muted/30 p-12 text-center text-muted-foreground">Loading events...</div>}

        {!loading && error && <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">{error}</div>}

        {!loading && !error && events.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-14 text-center">
            <CalendarDays className="mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-muted-foreground">{intl.formatMessage({ id: 'pages.reflection.noReflections', defaultMessage: 'No reflections available' })}</p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <ol className="border-t-2 border-foreground">
            {events.map((event, index) => {
              const title = getLocalizedText(event.title, 'Untitled event')
              const excerpt = getLocalizedText(event.excerpt)
              const slugPath = event.slug?.current
                ? `/${localeSegment}/dew-of-love/reflection/${event.slug.current}`
                : undefined

              const row = (
                <article className="group grid gap-x-8 gap-y-2 py-6 transition-colors duration-300 hover:bg-muted/40 md:grid-cols-[9rem_1fr_1.5rem] md:items-baseline md:px-3">
                  {/* Tanggal */}
                  {event.publishedAt ? (
                    <time
                      dateTime={event.publishedAt}
                      className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
                    >
                      {formatDate(event.publishedAt)}
                    </time>
                  ) : (
                    <span aria-hidden="true" />
                  )}

                  {/* Judul & kutipan singkat */}
                  <div>
                    <h2 className="font-serif text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                      {title}
                    </h2>
                    {excerpt && (
                      <p className="mt-2 line-clamp-2 font-serif text-[0.95rem] leading-7 text-muted-foreground">
                        {excerpt}
                      </p>
                    )}
                  </div>

                  {/* Penanda panah: hanya muncul jika item bisa diklik */}
                  {slugPath ? (
                    <ArrowUpRight
                      className="hidden size-5 self-center text-muted-foreground transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary md:block"
                      aria-hidden="true"
                    />
                  ) : (
                    <span aria-hidden="true" className="hidden md:block" />
                  )}
                </article>
              )

              return (
                <li key={event._id} className="border-b border-border/70">
                  {slugPath ? (
                    <Link href={slugPath} className="block">
                      {row}
                    </Link>
                  ) : (
                    row
                  )}
                </li>
              )
            })}
          </ol>
        )}
      </section>
    </main>
  )
}