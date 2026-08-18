'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Calendar, BookOpen, Megaphone, Clock, Mail, ArrowRight, Quote } from 'lucide-react'

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
        <Image
          src="https://images.pexels.com/photos/34504326/pexels-photo-34504326.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Congregation in worship"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20"></div>

        <div className="relative z-10 container mx-auto text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground backdrop-blur-sm mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Heart className="w-4 h-4 text-accent" />
            Welcome to our faith community
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-700">
            Where Hearts Gather,
            <span className="block bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
              Faith Flourishes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            Join us in worship, fellowship, and spiritual growth — a community bound by love, hope, and shared purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Link
              href={`/${safeLocale}/public/events`}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Explore Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${safeLocale}/contact`}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-background/80 backdrop-blur-sm border border-border text-foreground font-semibold rounded-full hover:bg-background hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 text-accent" />
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-foreground/30 p-1.5">
            <div className="h-2 w-1 rounded-full bg-foreground/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}></div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Words of Inspiration
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Light for the Journey
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "For where two or three gather in my name, there am I with them.",
                reference: "Matthew 18:20",
                theme: "from-primary/5 to-primary/10",
              },
              {
                quote: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
                reference: "1 Corinthians 13:4",
                theme: "from-accent/5 to-accent/10",
              },
              {
                quote: "Trust in the Lord with all your heart and lean not on your own understanding.",
                reference: "Proverbs 3:5",
                theme: "from-primary/5 to-accent/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl border border-border bg-gradient-to-br ${item.theme} p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30`}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20 group-hover:text-accent/40 transition-colors" />
                <p className="relative text-lg leading-relaxed text-foreground/90 font-medium italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-accent">— {item.reference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article / Featured Services Section */}
      <section className="py-24 px-4 bg-background">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
