'use client'

import { BookOpen, Clock3, Feather, Heart, Leaf, Sparkles } from 'lucide-react'
import { useIntl } from 'react-intl'

const devotions = [
  {
    title: 'The Quiet Place',
    excerpt: 'Make room for stillness, and discover how gently grace has been waiting for you.',
    scripture: '“Be still, and know that I am God.”',
    reference: 'Psalm 46:10',
    duration: '5 min read',
    icon: Leaf,
  },
  {
    title: 'Held in Mercy',
    excerpt: 'A reflection on the love that meets us honestly, carries our burdens, and calls us home.',
    scripture: '“His mercies never come to an end.”',
    reference: 'Lamentations 3:22',
    duration: '7 min read',
    icon: Heart,
  },
  {
    title: 'A Light for Today',
    excerpt: 'When the way ahead feels uncertain, take the next faithful step in the light you have.',
    scripture: '“Your word is a lamp to my feet.”',
    reference: 'Psalm 119:105',
    duration: '6 min read',
    icon: Sparkles,
  },
  {
    title: 'The Gift of Enough',
    excerpt: 'Let gratitude soften the edges of the ordinary and reveal the abundance already present.',
    scripture: '“My grace is sufficient for you.”',
    reference: '2 Corinthians 12:9',
    duration: '4 min read',
    icon: Feather,
  },
  {
    title: 'Come and Rest',
    excerpt: 'A gentle invitation to release striving and receive the peace that cannot be earned.',
    scripture: '“Come to me, all who are weary.”',
    reference: 'Matthew 11:28',
    duration: '8 min read',
    icon: BookOpen,
  },
  {
    title: 'Rooted in Love',
    excerpt: 'Consider what it means to grow slowly, faithfully, and with your whole life turned toward love.',
    scripture: '“Rooted and grounded in love.”',
    reference: 'Ephesians 3:17',
    duration: '5 min read',
    icon: Leaf,
  },
]

export default function DevotionalPage() {
  const intl = useIntl()
  const title = intl.formatMessage({ id: 'pages.devotional.title', defaultMessage: 'Devotional' })

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/60 px-4 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            <span>Dew of Love</span>
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">A daily pause</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              Gentle reflections for the spaces between one moment and the next. Come as you are, and stay awhile.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Reflections for the journey</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Take a moment to listen</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground sm:block">Read slowly. Return often.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {devotions.map(({ title, excerpt, scripture, reference, duration, icon: Icon }, index) => (
              <article key={title} className="group flex min-h-72 flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{excerpt}</p>
                </div>
                <div className="mt-auto border-t border-border/60 pt-6">
                  <p className="font-serif text-lg italic leading-7 text-foreground">{scripture}</p>
                  <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>{reference}</span>
                    <span className="flex items-center gap-1.5"><Clock3 aria-hidden="true" />{duration}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:pb-28">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center sm:px-12 sm:py-14">
            <p className="font-serif text-2xl italic leading-relaxed text-foreground sm:text-3xl">“Let the morning bring me word of your unfailing love.”</p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">Psalm 143:8</p>
          </div>
        </div>
      </section>
    </main>
  )
}
