import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, Clock3, MapPin, ArrowLeft } from 'lucide-react'
import { client, urlFor } from '@/lib/sanity'
import { EVENTS_BY_SLUG_QUERY, EVENTS_QUERY } from '@/lib/sanity.queries'

type EventDetail = {
  _id: string
  title?: string
  slug?: { current?: string }
  description?: string
  date?: string
  time?: string
  location?: string
  featuredImage?: any
  content?: string[]
}

function getLocalizedText(value: unknown, locale: string, fallback = ''): string {
  if (typeof value === 'string') return value
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const obj = value as Record<string, any>
    // prefer exact locale (e.g. "en-US"), then language ("en"), then fallbacks
    const lang = locale?.split('-')[0]
    for (const key of [locale, lang, 'id', 'en', 'fr']) {
      const v = obj[key]
      if (typeof v === 'string' && v.trim()) return v
    }
    // If structure is {_type, en, fr, id} sometimes the localized strings are under keys directly
    for (const k of Object.keys(obj)) {
      const v = obj[k]
      if (typeof v === 'string' && v.trim()) return v
    }
  }
  return fallback
}

export default async function EventDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params

  const slugParam = Array.isArray(slug) ? slug.join('/') : slug ?? ''
  if (!slugParam) notFound()

  const event = (await client.fetch(EVENTS_BY_SLUG_QUERY, { slug: slugParam })) as EventDetail | null

  if (!event) notFound()

  const formattedDate = event.date
    ? new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(`${event.date}T12:00:00`))
    : ''

  return (
    <main className="min-h-screen">
      <section className="border-b border-border/60 bg-muted/30 px-4 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/${locale}/dew-of-love/events`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" />
            Back to events
          </Link>
          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end md:gap-16">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-primary">Dew of Love</p>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">{getLocalizedText(event.title, locale)}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{getLocalizedText(event.description, locale)}</p>
            </div>
            <div className="flex flex-col gap-4 border-l border-border/70 pl-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-3"><CalendarDays aria-hidden="true" />{formattedDate}</span>
              <span className="inline-flex items-center gap-3"><Clock3 aria-hidden="true" />{event.time}</span>
              <span className="inline-flex items-center gap-3"><MapPin aria-hidden="true" />{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-20">
        <div className="overflow-hidden rounded-xl bg-muted">
          {event.featuredImage ? (
            // Use Sanity image builder when available
            // urlFor may return a builder object; call .url() to get the image URL
            // Fallback to direct asset URL when structure differs
            <img
              src={typeof urlFor === 'function' && event.featuredImage ? urlFor(event.featuredImage).url() : event.featuredImage?.asset?.url}
              alt={getLocalizedText(event.title, locale)}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          ) : null}
        </div>
        <article className="flex flex-col justify-center gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">About this gathering</p>
          {event.content?.map((paragraph, i) => (
            <p key={i} className="text-lg leading-8 text-foreground/80">{typeof paragraph === 'string' ? paragraph : JSON.stringify(paragraph)}</p>
          ))}
        </article>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  const locales = ['id', 'en', 'fr']

  const allEvents = (await client.fetch(EVENTS_QUERY)) as Array<{ slug?: { current?: string } }>

  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of locales) {
    for (const ev of allEvents) {
      const s = ev.slug?.current
      if (s) params.push({ locale, slug: s })
    }
  }

  return params
}
