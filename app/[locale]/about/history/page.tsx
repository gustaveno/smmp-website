'use client'

import { useIntl } from 'react-intl'

const milestones = [
  { id: 'birth', year: '1756', image: '/tempat/1756.jpg' },
  { id: 'firstCommunion', year: '1765', image: '/tempat/1765.jpg' },
  { id: 'godmother', year: '1767', image: '/tempat/1767.jpg' },
  { id: 'valognesStudy', year: '1768–1774', image: '/tempat/1773.jpg' },
  { id: 'barfleur', year: '1774–1805', image: '/tempat/1774.jpg' },
  { id: 'cherbourg', year: '1805', image: '/tempat/1805.jpg' },
  { id: 'foundation', year: '1807', image: '/tempat/1807.jpg' },
  { id: 'octeville', year: '1811', image: '/tempat/1811.jpg' },
  { id: 'tamerville1', year: '1811–1813', image: '/tempat/1811-2.jpg' },
  { id: 'valognes', year: '1813–1814', image: '/tempat/1768.jpg' },
  { id: 'hamel', year: '1814–1816', image: '/tempat/1814.jpg' },
  { id: 'tamerville2', year: '1816–1832', image: '/tempat/1816.jpg' },
  { id: 'abbaye', year: '1832', image: '/tempat/1832.jpg' },
  { id: 'death', year: '1846', image: '/tempat/1846.jpg' },
  { id: 'canonization', year: '1925', image: '/tempat/kanon.jpg' },
  { id: 'present', year: null, image: '/tempat/now.jpg' },
] as const

export default function HistoryPage() {
  const intl = useIntl()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-sejarah.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.history.title', defaultMessage: 'History' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.history.description', defaultMessage: 'Our History' })}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {intl.formatMessage({ id: 'pages.history.subtitle' },
            {
              highlight: (chunks) => (
                <span className="italic text-amber-700 px-1.5 py-0.5 rounded">
                  {chunks}
                </span>
              ),
            })}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {intl.formatMessage({ id: 'pages.history.paragraph' })}
        </p>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-foreground/25 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, index) => {
              const isLeft = index % 2 === 0
              const base = `pages.history.milestones.${m.id}`
              const yearLabel = m.year ?? intl.formatMessage({ id: `${base}.year` })

              return (
                <div
                  key={m.id}
                  className={`relative flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-4 top-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background md:left-1/2" />

                  {/* Horizontal connector line (desktop) */}
                  <div
                    className={`absolute top-10 hidden h-px w-10 bg-foreground/25 md:block ${isLeft
                      ? 'left-1/2'
                      : 'right-1/2 translate-x-1/2'
                      }`}
                  />

                  {/* Horizontal connector line (mobile) */}
                  <div className="absolute left-4 top-10 h-px w-8 bg-foreground/25 md:hidden" />

                  {/* Content side */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-12">
                    <div className="group overflow-hidden rounded-2xl border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                      <div className="relative h-44 w-full overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{
                            backgroundImage: `url('${m.image}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                          {yearLabel}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                          {intl.formatMessage({ id: `${base}.title` })}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {intl.formatMessage({ id: `${base}.description` })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other half on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
