import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, Clock3, MapPin, ArrowLeft } from 'lucide-react'

type EventDetail = {
  _id: string
  title: string
  slug: { current: string }
  description: string
  date: string
  time: string
  location: string
  featuredImage: { asset: { url: string } }
  content: string[]
}

// Temporary Sanity-shaped data. Replace with EVENTS_BY_SLUG_QUERY when content is connected.
const events: EventDetail[] = [
  {
    _id: 'event-1',
    title: 'A Quiet Morning Together',
    slug: { current: 'a-quiet-morning-together' },
    description: 'A gentle gathering for prayer, reflection, and shared fellowship.',
    date: '2026-09-12',
    time: '08:00 – 11:00',
    location: 'Main Chapel',
    featuredImage: { asset: { url: '/kartu1.jpg' } },
    content: [
      'Come as you are for a morning shaped by stillness and attentive presence. We will begin with a short prayer, followed by time for personal reflection and conversation.',
      'This gathering is open to everyone. You are welcome to bring a journal, a Bible, or simply yourself.',
    ],
  },
  {
    _id: 'event-2',
    title: 'An Evening of Gratitude',
    slug: { current: 'an-evening-of-gratitude' },
    description: 'An evening to remember the gifts of God’s faithfulness in our lives.',
    date: '2026-09-26',
    time: '18:30 – 20:00',
    location: 'Community Hall',
    featuredImage: { asset: { url: '/kartu4.jpg' } },
    content: [
      'Join our congregation for an unhurried evening of songs, stories, and thanksgiving. Together we will make space to notice grace in both the ordinary and extraordinary.',
      'After the service, refreshments will be shared in the community hall.',
    ],
  },
]

function getEvent(slug: string) {
  return events.find((event) => event.slug.current === slug)
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const event = getEvent(slug)

  if (!event) notFound()

  const formattedDate = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
  }).format(new Date(`${event.date}T12:00:00`))

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
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">{event.title}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{event.description}</p>
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
          <img src={event.featuredImage.asset.url} alt={event.title} className="aspect-[4/3] h-full w-full object-cover" />
        </div>
        <article className="flex flex-col justify-center gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">About this gathering</p>
          {event.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-foreground/80">{paragraph}</p>
          ))}
        </article>
      </section>
    </main>
  )
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug.current }))
}
