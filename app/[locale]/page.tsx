'use client'

import { use, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

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
                src="/smmp.jpg"
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
                Kongregasi Suster Maria Magdalena Postel dikenal juga sebagai Suster Misericordia (Sisters of Mercy) adalah sebuah kongregasi religius wanita dalam Gereja Katolik Roma yang didirikan oleh Santa Maria Magdalena Postel.
              </p>
              <br />
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                Maria Magdalena Postel (1756–1846) lahir di Barfleur, Normandia, Prancis. Pada masa Revolusi Prancis yang penuh pergolakan, ia diam-diam membantu para imam yang dikejar-kejar serta mendidik anak-anak miskin. Kongregasinya berdiri pada tahun 1807 di Cherbourg, ia bersama rekan-rekannya mengucapkan kaul religius dan mendirikan tarekat untuk mendidik kaum muda yang terlantar dan merawat orang sakit.
              </p>
              <br />
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                Kongregasi ini menghayati semangat belas kasih Allah melalui berbagai karya kerasulan nyata di bidang pendidikan, kesehatan, dan sosial & pastoral.
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
            src="/kata2.jpg"
            alt="Background landscape"
            fill
            sizes="100vw"
            className="object-cover object-[75%_25%] md:object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
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
      <section className="py-4 px-4 bg-background">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Events Card */}
            <Link
              href={`/${safeLocale}/public/events`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/kartu1.jpg"
                  alt="Events & Services"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Kegiatan & Pelayanan</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Pekerjaan apapun yang Anda terima, bersikaplah bagaikan tanah liat dalam tangan pembuat perisik...
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  View Events
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Sermons Card */}
            <Link
              href={`/${safeLocale}/public/sermons`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/kartu2.jpg"
                  alt="Sermons & Teaching"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Pendidikan & Pendampingan</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Jangan hanya ikut-ikutan. Lakukanlah semua itu dengan kesadaran dan persiapan.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Listen Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* News Card */}
            <Link
              href={`/${safeLocale}/public/news`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/kartu3.jpg"
                  alt="News & Updates"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Peristiwa & Berita</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Saya ingin pergi ke ujung-ujung bumi untuk memenangkan satu jiwa bagi Yesus Kristus.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Read News
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Schedule Card */}
            <Link
              href={`/${safeLocale}/schedule`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/kartu4.jpg"
                  alt="Service Schedule"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Refleksi & Doa</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Silahkan Tuhan, silahkan. Biarlah salib datang akan kami peluk.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  View Schedule
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Donate Card */}
            <Link
              href={`/${safeLocale}/donate`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/kartu5.jpg"
                  alt="Give & Support"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Karya Belas Kasih</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Para orang miskin dan sakit adalah sahabat saya, sebab mereka menyertai Penyelamat kita dalam perjalananNya di bumi ini.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Donate Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Contact Card */}
            <Link
              href={`/${safeLocale}/contact`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/kartu6.jpg"
                  alt="Contact Us"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Hidup Bersama</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Putri-putriku yang terkasih, marilah kita saling mengasihi di dalam Allah dan bagi Allah.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Contact
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image
          src="/bg.jpg"
          alt="Join our community"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-accent/20"></div>

        <div className="relative z-10 container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance">
            Anda ingin bergabung dalam misi kami?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-9 max-w-xl mx-auto text-balance drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,1))' }}>
            Saya akan pergi ke ujung bumi untuk mencari satu jiwa bagi Yesus Kristus, pun jika pada akhir perjalanan, saya menemukan kemartiran.
          </p>
          <Link
            href={`/${safeLocale}/contact`}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-primary font-bold rounded-full hover:bg-muted transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
