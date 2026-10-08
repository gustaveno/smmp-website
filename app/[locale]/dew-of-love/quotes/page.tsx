'use client'

import { useCallback, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { CalendarDays, ChevronRight, Quote as QuoteIcon, X } from 'lucide-react'

type SanityEvent = {
  _id: string
  title?: string | Record<string, unknown>
  slug?: { current?: string }
  publishedAt?: string
  excerpt?: string | Record<string, unknown>
  coverImage?: { asset?: { url?: string }; alt?: string }
  content?: Record<string, unknown>
}

// Letakkan di luar komponen
function getQuoteSizeClass(text: string): string {
  const length = text.trim().length;
  if (length <= 200) {
    // Sedang
    return "text-xl sm:text-3xl lg:text-4xl leading-[1.3]";
  }
  if (length <= 320) {
    // Panjang
    return "text-lg sm:text-2xl lg:text-3xl leading-[1.35]";
  }
  // Sangat panjang
  return "text-md sm:text-xl lg:text-2xl leading-[1.45]";
}

const AUTOPLAY_MS = 8000 // samakan dengan durasi `animate-progress-fill` di CSS

const blocksToPlainText = (blocks: any[]): string =>
  blocks
    .filter((b) => b?._type === 'block' && Array.isArray(b.children))
    .map((b) => b.children.map((c: any) => c?.text ?? '').join(''))
    .join(' ')
    .trim()

export default function QuotesPage() {
  const intl = useIntl()
  const localeSegment = intl.locale?.split('-')[0] || 'id'
  const [events, setEvents] = useState<SanityEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showIndex, setShowIndex] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

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
        *[_type == "embunKasih" && contentType == "quotes"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          excerpt,
          content,
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

  const getLocalizedBlocks = (value: unknown): any[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return []
    const localizedValue = value as Record<string, unknown>
    const locale = intl.locale?.split('-')[0] || 'id'
    for (const candidate of [locale, intl.locale, 'id', 'en', 'fr']) {
      const blocks = localizedValue[candidate]
      if (Array.isArray(blocks) && blocks.length > 0) return blocks
    }
    return []
  }

  // Data Sanity -> bentuk quote untuk carousel
  const quotes = events.map((event) => {
    const title = getLocalizedText(event.title, 'Untitled')
    const excerpt = getLocalizedText(event.excerpt)
    const blocks = getLocalizedBlocks(event.content)
    const plainText = blocksToPlainText(blocks)
    return {
      id: event._id,
      image: event.coverImage?.asset?.url,
      theme: title || '',
      text: plainText || excerpt || '',
      author: excerpt ? excerpt : '',
      href: event.slug?.current ? `/${localeSegment}/dew-of-love/quotes/${event.slug.current}` : undefined,
    }
  })

  const total = quotes.length
  const activeQuote = quotes[current] ?? quotes[0]

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    setShowIndex(false)
  }, [])
  const next = useCallback(() => setCurrent((c) => (total ? (c + 1) % total : 0)), [total])
  const prev = useCallback(() => setCurrent((c) => (total ? (c - 1 + total) % total : 0)), [total])

  // Autoplay
  useEffect(() => {
    if (isPaused || showIndex || total < 2) return
    const timer = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [current, isPaused, showIndex, total, next])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'Escape') setShowIndex(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const markLoaded = (id: string) => setLoadedImages((prev) => (prev[id] ? prev : { ...prev, [id]: true }))

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/60 px-4 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mt-8 max-w-3xl">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">{intl.formatMessage({ id: 'pages.quotes.title', defaultMessage: 'Quotes' })}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {intl.formatMessage({ id: 'pages.quotes.description', defaultMessage: 'View the latest quotes' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main section. */}
      {(loading || error || total === 0) && (
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          {loading && <div className="rounded-xl border border-border/70 bg-muted/30 p-12 text-center text-muted-foreground">Loading quotes...</div>}

          {!loading && error && <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">{error}</div>}

          {!loading && !error && total === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-muted/20 p-14 text-center">
              <CalendarDays className="mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
              <p className="text-muted-foreground">{intl.formatMessage({ id: 'pages.quotes.noQuotes', defaultMessage: 'No quotes available' })}</p>
            </div>
          )}
        </section>
      )}

      {!loading && !error && total > 0 && activeQuote && (
        <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
          {/* Background images — crossfade layering */}
          <div className="absolute inset-0 z-0">
            {quotes.map((quote, index) => {
              const visible = index === current && (!quote.image || loadedImages[quote.id])
              return (
                <div
                  key={quote.id}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: visible ? 1 : 0 }}
                >
                  {quote.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={quote.image}
                      alt={quote.theme || quote.author}
                      className="h-full w-full object-cover"
                      onLoad={() => markLoaded(quote.id)}
                      loading={index === current ? 'eager' : 'lazy'}
                    />
                  )}
                  <div className="absolute inset-0 animate-kenburns" style={{ pointerEvents: 'none' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Film grain texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Main quote content */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 pb-28 pt-20 sm:px-12 lg:px-20">
            <div
              key={activeQuote.id}
              className="flex max-h-full w-full max-w-4xl flex-col items-center text-center"
            >
              {activeQuote.theme && (
                <div className="animate-theme-rise mb-6 flex shrink-0 items-center justify-center gap-4">
                  <span className="h-px w-6 bg-white/40" />
                  <span
                    className="font-sans text-[10px] font-light uppercase tracking-[0.4em] text-white/60 sm:text-xs"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {activeQuote.theme}
                  </span>
                  <span className="h-px w-6 bg-white/40" />
                </div>
              )}

              <div className="animate-quote-rise mb-4 flex shrink-0 justify-center">
                <QuoteIcon
                  className="h-10 w-10 fill-white/20 text-white/25 sm:h-12 sm:w-12"
                  strokeWidth={1}
                />
              </div>

              {/* Area teks: bisa scroll sebagai pengaman jika masih terlalu panjang */}
              <div className="min-h-0 w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <blockquote
                  className={`animate-quote-rise text-balance break-words font-serif font-light tracking-tight text-white ${getQuoteSizeClass(activeQuote.text)}`}
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {activeQuote.text}
                </blockquote>
              </div>

              <div className="animate-line-draw mx-auto my-8 h-px w-16 shrink-0 overflow-hidden bg-white/40" />

              <div className="animate-author-rise shrink-0">
                {activeQuote.author && (
                  <p
                    className="font-serif text-lg italic text-white/95 sm:text-xl"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {activeQuote.author}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 z-30 animate-controls-fade">
            {/* Progress segments */}
            <div className="flex gap-1 px-6 pb-4 sm:px-10 lg:px-16">
              {quotes.map((quote, index) => (
                <button
                  key={quote.id}
                  onClick={() => goTo(index)}
                  className="group relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/20 transition-all duration-300 hover:bg-white/30"
                  aria-label={`Go to quote ${index + 1}`}
                >
                  {index === current && !isPaused && (
                    <div className="absolute inset-0 origin-left animate-progress-fill bg-white/80" key={`progress-${current}`} />
                  )}
                  {index === current && isPaused && <div className="absolute inset-0 w-full bg-white/60" />}
                  {index < current && <div className="absolute inset-0 w-full bg-white/40" />}
                </button>
              ))}
            </div>
            {/* Control row */}
            <div
              className="grid grid-cols-3 items-center px-6 pb-6 sm:px-10 lg:px-16"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <div aria-hidden="true" />
              <div className="flex justify-center">
                <button onClick={() => setIsPaused((p) => !p)} className="text-[12px] font-light uppercase tracking-[0.25em] text-white/60 ' +
  'transition-colors duration-300 hover:text-white sm:text-xs sm:tracking-[0.3em]">
                  {isPaused ? 'Play' : 'Pause'}
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowIndex(true)}
                  className="group flex items-center gap-2 text-[12px] font-light uppercase tracking-[0.25em] text-white/60 ' +
  'transition-colors duration-300 hover:text-white sm:text-xs sm:tracking-[0.3em]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors duration-300 group-hover:bg-white/70" />
                  {intl.formatMessage({ id: 'pages.quotes.viewAll', defaultMessage: 'View All' })}
                </button>
              </div>
            </div>
          </div>

          {/* Index / Gallery drawer */}
          {showIndex && (
            <div className="absolute inset-0 z-50">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setShowIndex(false)} />
              <div className="relative mx-auto flex h-full max-w-5xl flex-col px-6 py-8 sm:px-10">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h2 className="font-serif text-2xl font-light text-white sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {intl.formatMessage({ id: 'pages.quotes.collection', defaultMessage: 'The Collection' })}
                    </h2>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-white/40" style={{ fontFamily: 'var(--font-inter)' }}>
                      {total} Quotes · {intl.formatMessage({ id: 'pages.quotes.selectToExplore', defaultMessage: 'Select to explore' })}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowIndex(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Close index"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="quote-scroll flex-1 overflow-y-auto pr-2">
                  <div className="grid gap-3 sm:gap-4">
                    {quotes.map((quote, index) => (
                      <button
                        key={quote.id}
                        onClick={() => goTo(index)}
                        className={`group relative flex items-center gap-4 overflow-hidden rounded-lg border p-4 text-left transition-all duration-300 sm:gap-6 sm:p-5 ${index === current
                          ? 'border-white/30 bg-white/10'
                          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                          }`}
                      >
                        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md bg-white/5 sm:h-20 sm:w-32">
                          {quote.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={quote.image}
                              alt={quote.theme || quote.author}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/30" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: 'var(--font-inter)' }}>
                            {String(index + 1).padStart(2, '0')}
                            {quote.theme ? ` — ${quote.theme}` : ''}
                          </p>
                          <p className="truncate font-serif text-base font-light text-white/90 sm:text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
                            {quote.text}
                          </p>
                          {quote.author && (
                            <p className="mt-1 font-sans text-xs font-light italic text-white/50" style={{ fontFamily: 'var(--font-inter)' }}>
                              {quote.author}
                            </p>
                          )}
                        </div>

                        <ChevronRight className="hidden h-5 w-5 flex-shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/70 sm:block" />

                        {index === current && <div className="absolute left-0 top-0 h-full w-[3px] bg-white/70" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  )
}