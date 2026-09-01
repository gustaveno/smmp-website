'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, HeartPulse, GraduationCap, HandHeart, UsersRound } from 'lucide-react'
import { useIntl } from 'react-intl'

const serviceFields = [
  {
    number: '01',
    title: 'Health',
    description: 'Serving with compassion through care that protects dignity, restores strength, and makes room for healing.',
    image: '/kartu1.jpg',
    icon: HeartPulse,
  },
  {
    number: '02',
    title: 'Education',
    description: 'Creating spaces where knowledge, character, and a hope-filled future can take root and grow.',
    image: '/kartu2.jpg',
    icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Social',
    description: 'Walking alongside our neighbours and responding to the needs of each person with practical love.',
    image: '/kartu3.jpg',
    icon: UsersRound,
  },
  {
    number: '04',
    title: 'Pastoral',
    description: 'Accompanying people through prayer, presence, and a listening heart in every season of life.',
    image: '/kartu4.jpg',
    icon: HandHeart,
  },
]

export default function ServicesPage() {
  const intl = useIntl()
  const title = intl.formatMessage({ id: 'pages.services.title', defaultMessage: 'Congressional Service Fields' })
  const description = intl.formatMessage({ id: 'pages.services.description', defaultMessage: 'Our service activities' })

  return (
    <main className="overflow-hidden bg-background">
      <section className="border-b border-border/60 px-4 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              <span className="h-px w-10 bg-accent" />
              {description}
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-foreground sm:text-7xl">
              {title}
            </h1>
          </div>
          <div className="max-w-md border-l border-border/70 pl-6 lg:mb-2">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              We believe service begins with attention: seeing what is needed, staying close, and offering what we can with a generous heart.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-6 sm:mb-16">
            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">Where we are called</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Four ways to serve</h2>
            </div>
            <HandHeart className="hidden size-10 text-accent sm:block" strokeWidth={1.25} aria-hidden="true" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceFields.map(({ number, title: fieldTitle, description: fieldDescription, image, icon: Icon }) => (
              <article key={fieldTitle} className="group overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={image} alt={`${fieldTitle} service`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-foreground/10" />
                  <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">{number}</span>
                </div>
                <div className="flex flex-col gap-6 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Icon className="mb-5 size-7 text-accent" strokeWidth={1.4} aria-hidden="true" />
                      <h3 className="text-2xl font-semibold tracking-tight">{fieldTitle}</h3>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <p className="max-w-md leading-relaxed text-muted-foreground">{fieldDescription}</p>
                  <Link href="#contact" className="w-fit text-sm font-semibold text-foreground underline decoration-border underline-offset-8 transition-colors hover:text-accent hover:decoration-accent">
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 bg-muted px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">A shared vocation</p>
          <blockquote className="text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            “Love becomes visible when we choose to be present.”
          </blockquote>
          <p className="mx-auto mt-8 max-w-lg leading-relaxed text-muted-foreground">
            Every contribution matters. Together, small gestures become a lasting presence in the lives of others.
          </p>
        </div>
      </section>
    </main>
  )
}
