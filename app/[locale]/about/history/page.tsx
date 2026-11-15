'use client'

import { useRef, useState } from 'react'
import { useIntl } from 'react-intl'

type MediaItem =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; poster: string; alt?: string }

type Milestone = {
  id: string
  year: string | null
  media: readonly MediaItem[]
}

const milestones: readonly Milestone[] = [
  {
    id: 'birth',
    year: '1756',
    media: [
      { type: 'image', src: '/tempat/1756.jpg' },
    ],
  },
  {
    id: 'firstCommunion',
    year: '1765',
    media: [
      { type: 'image', src: '/tempat/1765.jpg' },
    ],
  },
  { id: 'godmother', year: '1767', media: [{ type: 'image', src: '/tempat/1767.jpg' }] },
  {
    id: 'valognesStudy',
    year: '1768–1774',
    media: [
      { type: 'image', src: '/tempat/1773.jpg' },
    ],
  },
  {
    id: 'barfleur',
    year: '1774–1805',
    media: [
      { type: 'image', src: '/tempat/1774.jpg' },
      { type: 'video', src: '/tempat/barfleur.mp4', poster: '/tempat/poster-barfleur.jpg' },
    ],
  },
  { id: 'cherbourg', year: '1805', media: [{ type: 'image', src: '/tempat/1805.jpg' }] },
  { id: 'foundation', year: '1807', media: [{ type: 'image', src: '/tempat/1807.jpg' }] },
  {
    id: 'octeville',
    year: '1811',
    media: [
      { type: 'image', src: '/tempat/1811.jpg' },
      { type: 'video', src: '/video/octeville1.mp4', poster: '/tempat/poster-octeville1.jpg' },
      { type: 'video', src: '/video/octeville2.mp4', poster: '/tempat/poster-octeville2.jpg' },
    ],
  },
  { id: 'tamerville1', year: '1811–1813', media: [{ type: 'image', src: '/tempat/1811-2.jpg' }] },
  { id: 'valognes', year: '1813–1814', media: [{ type: 'image', src: '/tempat/1768.jpg' }] },
  { id: 'hamel', year: '1814–1816', media: [{ type: 'image', src: '/tempat/1814.jpg' }] },
  {
    id: 'tamerville2',
    year: '1816–1832',
    media: [
      { type: 'image', src: '/tempat/1811-3.jpg' },
      { type: 'image', src: '/tempat/1816.jpg' },
    ],
  },
  { id: 'abbaye', year: '1832', media: [{ type: 'image', src: '/tempat/1832.jpg' }] },
  { id: 'death', year: '1846', media: [{ type: 'image', src: '/tempat/1846.jpg' }] },
  { id: 'canonization', year: '1925', media: [{ type: 'image', src: '/tempat/kanon.jpg' }] },
  { id: 'present', year: null, media: [{ type: 'image', src: '/tempat/now.jpg' }] },
]

function MediaTile({
  item,
  zoom = 'group-hover:scale-105',
  compact = false,
}: {
  item: MediaItem
  zoom?: string
  compact?: boolean
}) {
  const intl = useIntl()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  if (item.type === 'image') {
    return (
      <img
        src={item.src}
        alt={item.alt ?? ''}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 ease-out ${zoom}`}
      />
    )
  }

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play().catch(() => setPlaying(false))
  }

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        preload="none"
        playsInline
        controls={playing}
        aria-label={item.alt}
        onEnded={() => setPlaying(false)}
        onPause={() => {
          // Kembali ke tampilan poster jika video dihentikan di awal
          if (videoRef.current && videoRef.current.currentTime === 0) setPlaying(false)
        }}
        className="h-full w-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          // aria-label={intl.formatMessage({
          //   id: 'pages.history.playVideo',
          //   defaultMessage: 'Play video',
          // })}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <span
            className={`flex items-center justify-center rounded-full bg-white/90 pl-0.5 text-black shadow-lg transition-transform hover:scale-110 ${compact ? 'h-8 w-8 text-sm' : 'h-14 w-14 text-xl'
              }`}
          >
            ▶
          </span>
        </button>
      )}
    </div>
  )
}

function MilestoneMedia({ media }: { media: readonly MediaItem[] }) {
  const visible = media.slice(0, 3)
  const extra = media.length - visible.length

  return (
    <div className="group overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl">
      {visible.length === 1 && (
        <div className="h-48 overflow-hidden sm:h-56">
          <MediaTile item={visible[0]} />
        </div>
      )}

      {visible.length === 2 && (
        <div className="grid h-48 grid-cols-2 gap-1.5 sm:h-56">
          {visible.map((item) => (
            <div key={item.src} className="min-h-0 overflow-hidden">
              <MediaTile item={item} compact />
            </div>
          ))}
        </div>
      )}

      {visible.length >= 3 && (
        <div className="grid h-48 grid-cols-[1.6fr_1fr] gap-1.5 sm:h-56">
          <div className="min-h-0 overflow-hidden">
            <MediaTile item={visible[0]} />
          </div>
          <div className="grid min-h-0 grid-rows-2 gap-1.5">
            <div className="min-h-0 overflow-hidden">
              <MediaTile item={visible[1]} zoom="group-hover:scale-[1.03]" compact />
            </div>
            <div className="relative min-h-0 overflow-hidden">
              <MediaTile item={visible[2]} zoom="group-hover:scale-[1.03]" compact />
              {extra > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/55 text-lg font-semibold text-white">
                  +{extra}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.history.title', defaultMessage: 'History' })}
          </h1>
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
        <p className="mt-6 text-lg leading-relaxed text-foreground">
          {intl.formatMessage({ id: 'pages.history.paragraph1' })}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-foreground">
          {intl.formatMessage({ id: 'pages.history.paragraph2' })}
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

                  {/* Archival media */}
                  <div className="ml-14 flex flex-col gap-3 md:ml-0 md:w-1/2 md:px-12">
                    <MilestoneMedia media={m.media} />
                  </div>

                  {/* Milestone text */}
                  <div className="ml-14 flex flex-col justify-center py-5 md:ml-0 md:w-1/2 md:px-12 md:py-8">
                    <span className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {yearLabel}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {intl.formatMessage({ id: `${base}.title` })}
                    </h3>
                    <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {intl.formatMessage({ id: `${base}.description` })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
