'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Calendar, BookOpen, Megaphone, Clock, Mail, ArrowRight, Quote, ChevronDown} from 'lucide-react'

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params)
  const safeLocale = typeof locale === 'string' ? locale : 'id'

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* 1. Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero1.jpg"
            alt="Congregation worshipping together"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />

          {/* 2. Refined Gradients (DIUBAH) */}
          {/* Menghapus backdrop-blur dan mengurangi opasitas agar gambar lebih jernih */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Mengurangi intensitas gradient agar tidak menutupi gambar terlalu jauh ke atas */}
          <div className="absolute inset-0 h-full" />

          {/* Glowing aura DIHAPUS agar tidak menutupi bagian tengah gambar background */}
        </div>

        {/* 3. Main Content Container */}
        {/* Memindahkan konten sedikit lebih ke bawah atau membiarkannya di tengah dengan ukuran teks yang sedikit disesuaikan */}
        <div className="relative z-10 container mx-auto text-center max-w-4xl flex flex-col items-center mt-10 md:mt-18">

          {/* Typography (Ukuran sedikit disesuaikan agar tidak menelan layar) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-2 text-balance leading-[1.1] tracking-tight drop-shadow-lg">
            <span className="inline-block animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
              Misericordia
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-12 text-balance max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 fill-mode-both leading-relaxed drop-shadow-md">
            Ketaatan sampai mati.
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
      <section className="py-20 px-4 bg-background">
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
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Our Congregation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="relative flex items-center justify-center py-12 md:py-20 overflow-hidden">
        {/* Background with a slightly darker gradient to ensure text readability */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/13755423/pexels-photo-13755423.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Background landscape"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex justify-center">
          {/* Figure now acts purely as a layout container without background colors */}
          <figure className="group relative w-full max-w-4xl flex flex-col items-center text-center">

            {/* Decorative oversized quotation mark placed centrally behind the text */}
            <span
              aria-hidden="true"
              className="text-8xl md:text-9xl text-white/10 font-serif leading-none select-none mb-[-40px] md:mb-[-60px] transition-transform duration-700 group-hover:-translate-y-2"
            >
              &ldquo;
            </span>

            <blockquote className="relative z-10 flex flex-col items-center">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-relaxed md:leading-snug italic mb-8 md:mb-10 text-balance drop-shadow-lg">
                Love your neighbor as yourself.
              </p>

              <figcaption className="flex flex-col items-center gap-4 mt-2">
                <span className="h-[2px] w-16 bg-amber-500 rounded-full" />
                <cite className="not-italic text-sm md:text-base font-medium tracking-[0.3em] text-gray-300 uppercase drop-shadow-md">
                  Mark 12:31
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/29422232/pexels-photo-29422232.jpeg?auto=compress&cs=tinysrgb&w=800&h=520&fit=crop"
                  alt="Events & Services"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Events & Services</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Join us for regular services and special community events throughout the year.
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/10438600/pexels-photo-10438600.jpeg?auto=compress&cs=tinysrgb&w=800&h=520&fit=crop"
                  alt="Sermons & Teaching"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Sermons & Teaching</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Listen to inspiring sermons and biblical teachings from our community leaders.
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/16102711/pexels-photo-16102711.jpeg?auto=compress&cs=tinysrgb&w=800&h=520&fit=crop"
                  alt="News & Updates"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Megaphone className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">News & Updates</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Stay updated with the latest announcements and community news.
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/7219090/pexels-photo-7219090.jpeg?auto=compress&cs=tinysrgb&w=800&h=520&fit=crop"
                  alt="Service Schedule"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Service Schedule</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Check our weekly service times and special program schedules.
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6860385/pexels-photo-6860385.jpeg?auto=compress&cs=tinysrgb&w=800&h=520&fit=crop"
                  alt="Give & Support"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Give & Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Support our mission through tithes, donations, and financial contributions.
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/15021636/pexels-photo-15021636.jpeg?auto=compress&cs=tinysrgb&w=800&h=520&fit=crop"
                  alt="Contact Us"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Contact Us</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Have questions? Get in touch with our community leadership team.
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
          src="https://images.pexels.com/photos/34328510/pexels-photo-34328510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt="Join our community"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>

        <div className="relative z-10 container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-9 max-w-xl mx-auto text-balance">
            Whether you&apos;re new to our faith or looking to deepen your spiritual journey, we&apos;d love to welcome you.
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
