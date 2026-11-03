'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useIntl } from 'react-intl'

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stages = [
  {
    id: '01',
    image: '/formatio/1.jpg',
  },
  {
    id: '02',
    image: '/formatio/2.jpg',
  },
  {
    id: '03',
    image: '/formatio/3.jpg',
  },
  {
    id: '04',
    image: '/formatio/4.jpg',
  },
  {
    id: '05',
    image: '/formatio/5.jpg',
  },
];

export default function FormatioPage() {
  const intl = useIntl()
  const params = useParams<{ locale?: string }>()
  const locale = params.locale ?? 'en'

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-formatio.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.formation.title', defaultMessage: 'Formation' })}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-18 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {intl.formatMessage({ id: 'pages.formation.subtitle' })}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground">
          {intl.formatMessage({ id: 'pages.formation.paragraph1' })}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="group/list flex flex-col gap-4 sm:gap-5">
          {stages.map((stage) => {
            const base = `pages.formation.stages.${stage.id}`
            return (
              <article key={stage.id} className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-border/60 bg-background px-6 py-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl sm:gap-6 sm:px-7 sm:py-6">
                <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background font-serif text-lg font-medium tracking-tight text-foreground transition-all duration-500 ease-out group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:h-14 sm:w-14 sm:text-xl">
                  {stage.id}
                </span>
                <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
                  {intl.formatMessage({ id: `${base}.title` })}
                </h3>

              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground">
            {intl.formatMessage({ id: 'pages.formation.paragraph2' })}
          </p>
        </div>

        <div className="group/list flex flex-col gap-3 sm:gap-4">

          {/* 01 */}
          <article className="flex items-center gap-5 rounded-2xl border border-border/60 bg-background px-6 py-5 shadow-sm sm:gap-6 sm:px-7 sm:py-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground sm:h-14 sm:w-14">
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </span>

            <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
              {intl.formatMessage({ id: 'pages.formation.point1' })}
            </h3>
          </article>

          {/* 02 */}
          <article className="flex items-center gap-5 rounded-2xl border border-border/60 bg-background px-6 py-5 shadow-sm sm:gap-6 sm:px-7 sm:py-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground sm:h-14 sm:w-14">
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </span>

            <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
              {intl.formatMessage({ id: 'pages.formation.point2' })}
            </h3>
          </article>

          {/* 03 */}
          <article className="flex items-center gap-5 rounded-2xl border border-border/60 bg-background px-6 py-5 shadow-sm sm:gap-6 sm:px-7 sm:py-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground sm:h-14 sm:w-14">
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </span>

            <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
              {intl.formatMessage({ id: 'pages.formation.point3' })}
            </h3>
          </article>
        </div>
      </section>

      {/* Timeline — stacked cards */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-4 top-2 h-full w-0.5 bg-foreground/20 sm:left-6" />

            <div className="space-y-8">
              {stages.map((stage) => {
                const base = `pages.formation.stages.${stage.id}`
                return (
                  <div key={stage.id} className="relative pl-14 sm:pl-20">
                    {/* Dot on the spine */}
                    <div className="absolute left-4 top-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background text-xs font-bold text-foreground sm:left-6 sm:h-11 sm:w-11 sm:text-sm">
                      {stage.id}
                    </div>

                    {/* Stacked card */}
                    <article className="group rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl sm:p-8">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {intl.formatMessage({ id: `${base}.duration` })}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                        {intl.formatMessage({ id: `${base}.title` })}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
                        {intl.formatMessage({ id: `${base}.description` })}
                      </p>
                    </article>
                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-primary/10">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {intl.formatMessage({ id: 'pages.formation.called' })}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            {intl.formatMessage({ id: 'pages.formation.paragraph3' })}
          </p>
          {/* Embedded video */}
          <div className="mt-6 w-full max-w-xl overflow-hidden rounded-2xl border border-border/60 bg-background p-2 shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/0jcBr6_hnyc?si=kokGTeP3u1PjUH31"
                title="A Glimpse of Religious Life"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group h-12 w-full gap-3 px-8 text-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              >
                {intl.formatMessage({ id: 'pages.formation.contactUs' })}
                <ArrowRight className="h-6 w-6 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}