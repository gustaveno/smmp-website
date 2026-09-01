'use client'

import { useIntl } from 'react-intl'
import { ImageCard } from '../../../../component/ui/card'

const prayers = [
  { image: '/kartu1.jpg', imageAlt: 'Quiet church interior', title: 'Morning Prayer', caption: 'Begin the day in stillness, gratitude, and trust.' },
  { image: '/kartu2.jpg', imageAlt: 'Light resting across a room', title: 'Prayer for Peace', caption: 'A gentle prayer for peace within and peace among us.' },
  { image: '/kartu3.jpg', imageAlt: 'Hands gathered in prayer', title: 'Prayer of Surrender', caption: 'Release what you carry and make room for grace.' },
  { image: '/kartu4.jpg', imageAlt: 'Candlelight in a sacred space', title: 'Evening Prayer', caption: 'Close the day with reflection, mercy, and quiet hope.' },
  { image: '/kartu5.jpg', imageAlt: 'A path through soft morning light', title: 'Prayer for Guidance', caption: 'Ask for wisdom to recognize the next faithful step.' },
  { image: '/kartu6.jpg', imageAlt: 'A peaceful landscape', title: 'Prayer of Thanksgiving', caption: 'Notice the gifts that surround you and give thanks...' },
]

export default function PrayersPage() {
  const intl = useIntl()
  const title = intl.formatMessage({ id: 'pages.prayers.title', defaultMessage: 'Prayers' })

  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Dew of Love</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground md:text-lg">
          A collection of quiet words for the moments when the heart turns toward God.
        </p>
      </header>

      <section aria-label="Prayer collection" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prayers.map((prayer) => (
          <ImageCard key={prayer.title} {...prayer} />
        ))}
      </section>
    </main>
  )
}
