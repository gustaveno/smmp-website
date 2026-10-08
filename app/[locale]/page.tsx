'use client'

import { use, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Clock3, CalendarDays } from 'lucide-react'

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
}

// Daftar gambar hero carousel — silakan ganti/tambah path sesuai file lokal Anda di folder /public
const HERO_IMAGES = [
  { src: '/hero1.jpg', alt: 'Congregation worshipping' },
  { src: '/hero2.jpg', alt: 'Community gathering' },
  { src: '/hero3.jpg', alt: 'Sisters in prayer' },
  { src: '/hero4.jpg', alt: 'Sisters international' },
]

const HERO_AUTOPLAY_INTERVAL = 6000 // ms

// Jumlah berita terbaru yang ditampilkan di beranda
const LATEST_NEWS_LIMIT = 3

type SanityNews = {
  _id: string
  title?: string | Record<string, unknown>
  slug?: { current?: string }
  publishedAt?: string
  excerpt?: string | Record<string, unknown>
  coverImage?: { asset?: { url?: string }; alt?: string }
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params)
  const safeLocale = typeof locale === 'string' ? locale : 'id'

  const [heroIndex, setHeroIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setHeroIndex((index + HERO_IMAGES.length) % HERO_IMAGES.length)
  }, [])

  const nextSlide = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setHeroIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
  }, [])

  // Autoplay carousel
  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return
    const timer = setInterval(nextSlide, HERO_AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Latest news (Sanity)
  const [newsItems, setNewsItems] = useState<SanityNews[]>([])
  const [newsLoading, setNewsLoading] = useState(true)
  const [newsError, setNewsError] = useState<string | null>(null)

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

    if (!projectId) {
      setNewsError('Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables.')
      setNewsLoading(false)
      return
    }

    const query = encodeURIComponent(`
        *[_type == "embunKasih" && contentType == "news"] | order(publishedAt desc) [0...${LATEST_NEWS_LIMIT}] {
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
        setNewsItems(data.result || [])
      })
      .catch((err) => setNewsError(err instanceof Error ? err.message : 'Failed to load news'))
      .finally(() => setNewsLoading(false))
  }, [])

  const formatNewsDate = (value?: string) => {
    if (!value) return null
    const parsedDate = new Date(value)
    if (Number.isNaN(parsedDate.getTime())) return value
    try {
      return new Intl.DateTimeFormat(safeLocale, { dateStyle: 'long' }).format(parsedDate)
    } catch {
      return parsedDate.toLocaleDateString()
    }
  }

  const getLocalizedText = (value: unknown, fallback = ''): string => {
    if (typeof value === 'string') return value
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const localizedValue = value as Record<string, unknown>
      const lang = safeLocale.split('-')[0] || 'id'
      for (const candidate of [lang, safeLocale, 'id', 'en', 'fr']) {
        const text = localizedValue[candidate]
        if (typeof text === 'string' && text.trim()) return text
      }
    }
    return fallback
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-3 py-16 sm:px-4 sm:py-20">
        {/* 1. Background Carousel */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === heroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              aria-hidden={index !== heroIndex}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover sm:scale-105 object-[70%_50%]"
              />
            </div>
          ))}

          {/* 2. Refined Gradients (DIUBAH) */}
          {/* Menghapus backdrop-blur dan mengurangi opasitas agar gambar lebih jernih */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Mengurangi intensitas gradient agar tidak menutupi gambar terlalu jauh ke atas */}
          <div className="absolute inset-0 h-full" />

          {/* Glowing aura DIHAPUS agar tidak menutupi bagian tengah gambar background */}

          {/* 1b. Carousel Controls */}
          {HERO_IMAGES.length > 1 && (
            <>
              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="group absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="group absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
                {HERO_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === heroIndex}
                    className={`h-2 rounded-full transition-all duration-300 ${index === heroIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* 3. Main Content Container */}
        {/* Memindahkan konten sedikit lebih ke bawah atau membiarkannya di tengah dengan ukuran teks yang sedikit disesuaikan */}
        <div className="relative z-10 container mx-auto text-center max-w-4xl flex flex-col items-center mt-10 md:mt-18">

          {/* Typography (Ukuran sedikit disesuaikan agar tidak menelan layar) */}
          <h1 className="max-w-full text-[clamp(2.5rem,14vw,6rem)] text-white -mb-2 text-balance leading-[1.1] tracking-tight drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))' }}>
            <span className="inline-block max-w-full animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
              Misericordia
            </span>
          </h1>
          <p className="text-base italic md:text-2xl lg:text-3xl text-white/90 mb-12 text-balance max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 fill-mode-both leading-relaxed drop-shadow-md">
            "Cintailah, cintailah tanpa batas"
          </p>
        </div>

        {/* 4. Modern Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
          <div className="flex flex-col items-center -space-y-2">
            <ChevronDown className="w-6 h-6 text-white/80 animate-bounce" />
            <ChevronDown className="w-6 h-6 -mt-1 text-white/30 animate-bounce [animation-delay:100ms]" />
          </div>
        </div>

        {/* Required custom animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll-down {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}} />
      </section>

      {/* Congregation Overview Section */}
      <section className="bg-background px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            {/* Saint Image */}
            <div className="relative w-full max-w-[420px] mx-auto md:mx-0 md:translate-x-6 rounded-2xl overflow-hidden shadow-xl border border-border aspect-[4/5]">
              <Image
                src="/santa/smmp.jpg"
                alt="Patron Saint of the Congregation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_15%]"
              />
            </div>

            {/* Overview Text */}
            <div className="md:translate-x-[-6px]">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-accent mb-3">
                "Anak-anak cintailah Allah dengan sepenuh hatimu dan tunjukkanlah cintamu itu dalam korban."
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Kongregasi Kami
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                Kongregasi Para Suster Santa Maria Magdalena Postel dikenal juga sebagai Suster Misericordia adalah sebuah kongregasi religius wanita dalam Gereja Katolik Roma yang didirikan oleh Santa Maria Magdalena Postel.
              </p>
              <br />
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                Julie Postel (1756–1846) lahir di Barfleur, Normandia, Prancis. Pada masa Revolusi Prancis yang penuh pergolakan, ia diam-diam membantu para imam yang dikejar-kejar serta mendidik anak-anak miskin. Kongregasinya berdiri pada tahun 1807 di Cherbourg, ia bersama Sr. Jeanne-Catherine Bellot, Sr. Louisa Viel, Sr. Angelique Ledanois mengucapkan kaul religius dan mendirikan kongregasi untuk mendidik kaum muda, menanamkan cinta kepada Tuhan dan cinta terhadap pekerjaan, serta mengorbankan diri guna membantu orang miskin dan meringankan penderitaan sebanyak mungkin orang.
              </p>
              <br />
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                Itulah cita-cita dan tujuan awal Julie Postel membangun sebuah kongregasi religius.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="relative flex items-end justify-center py-20 md:py-24 min-h-[70vh] md:min-h-[85vh] overflow-hidden">
        {/* Background tetap sama */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/kata3.jpg"
            alt="Background landscape"
            fill
            sizes="100vw"
            className="object-cover object-[25%_25%] md:object-[75%_25%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        </div>

        <div className="relative z-10 w-full pr-6 md:pr-12 flex justify-end">
          <figure className="group relative w-full max-w-6xl flex flex-col items-end text-right translate-y-10 md:translate-y-16">
            <blockquote className="relative z-10 flex flex-col items-end">
              <p className="font-serif text-lg md:text-xl lg:text-[26px] text-white leading-relaxed md:leading-snug italic mb-8 md:mb-10 text-balance drop-shadow-xl text-right"
                style={{ filter: 'drop-shadow(0 6px 8px rgb(7, 7, 7))' }}>
                Hidup bagi Allah dan pelayanan bagi sesama khususnya yang menderita
              </p>
              <figcaption className="flex flex-col items-center -mt-6">
                <cite className="not-italic text-sm md:text-sm font-medium tracking-[0.3em] text-gray-300 uppercase drop-shadow-md">
                  - St. Maria Magdalena Postel
                </cite>
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* Article / Featured Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Explore Our Community
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              Discover our community&apos;s spiritual programs and activities, designed to nourish faith and foster connection.
            </p>
          </div>

          {/* Latest News (from Sanity) */}
          {!newsError && (newsLoading || newsItems.length > 0) && (
            <div className="mt-20">
              <div className="mb-10 flex items-end justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                  Berita Terbaru
                </h3>
                <Link
                  href={`/${safeLocale}/public/news`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Lihat Semua
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {newsLoading ? (
                <div className="rounded-xl border border-border/70 bg-muted/30 p-12 text-center text-muted-foreground">
                  Loading news...
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsItems.map((item) => {
                    const title = getLocalizedText(item.title, 'Untitled news')
                    const excerpt = getLocalizedText(item.excerpt)
                    const slugPath = item.slug?.current
                      ? `/${safeLocale}/dew-of-love/news/${item.slug.current}`
                      : undefined

                    const card = (
                      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
                        {item.coverImage?.asset?.url ? (
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={item.coverImage.asset.url}
                              alt={item.coverImage.alt || title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                        ) : (
                          <div className="flex aspect-[4/3] items-center justify-center bg-muted/50 text-primary/60">
                            <CalendarDays className="size-10" aria-hidden="true" />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
                          {item.publishedAt && (
                            <span className="inline-flex items-center gap-2 text-[0.775rem] text-muted-foreground">
                              <Clock3 className="size-4" aria-hidden="true" />
                              {formatNewsDate(item.publishedAt)}
                            </span>
                          )}
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {excerpt}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                            View more
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </article>
                    )

                    return slugPath ? (
                      <Link key={item._id} href={slugPath} className="block">
                        {card}
                      </Link>
                    ) : (
                      <div key={item._id}>{card}</div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground/90 via-accent-foreground/95 to-accent-foreground"></div>
        <div className="relative z-10 container mx-auto max-w-6xl grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Kiri: YouTube embed */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/0jcBr6_hnyc?si=kokGTeP3u1PjUH31"
              title="Video misi kami"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Kanan: teks */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 text-balance">
              Anda ingin bergabung dalam misi kami?
            </h2>
            <p
              className="text-lg text-primary-foreground/90 text-balance drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,1))' }}
            >
              Saya akan pergi ke ujung bumi untuk mencari satu jiwa bagi Yesus Kristus, pun jika pada akhir perjalanan, saya menemukan kemartiran.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}