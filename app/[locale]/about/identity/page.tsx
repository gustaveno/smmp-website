'use client'

import { useIntl } from 'react-intl'

import { Eye, Target, Sparkles } from 'lucide-react';

export default function IdentityPage() {
  const intl = useIntl()

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero — kept compact */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src='https://images.pexels.com/photos/13755423/pexels-photo-13755423.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(28_45%_18%/0.92)] via-[hsl(24_40%_22%/0.86)] to-[hsl(20_35%_30%/0.78)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              Spiritual Gifts
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-amber-50 sm:text-5xl lg:text-6xl">
              Vission and Mission
            </h1>
            <p className="mt-4 text-base leading-relaxed text-amber-100/90 sm:text-lg">
              Discover, nurture, and share the gifts the Spirit has placed within you.
            </p>
          </div>
        </div>
      </section>

      {/* Vision + Mission — two clean cards */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/5 text-amber-700">
              <Eye className="h-6 w-6" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
              Vision
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight tracking-tight">
              Where we are going
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A community where every member recognizes their God-given gifts, exercises them with joy, and together we become a living sign of God\'s love for the world.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/5 text-emerald-700">
              <Target className="h-6 w-6" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
              Mission
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight tracking-tight">
              What we are called to do
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To accompany each person in discerning their charisms, to form them in prayer and service, and to send them forth as missionary disciples who build up the Church and serve the least among us.
            </p>
          </div>
        </div>
      </section>

      {/* Motto — special warm background */}
      <section className="relative overflow-hidden">
        {/* Layered warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(28_55%_30%)] via-[hsl(24_60%_38%)] to-[hsl(20_50%_44%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
        {/* Soft glow accents */}
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-orange-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/30 bg-white/10 text-amber-100 backdrop-blur-sm">
            <Sparkles className="h-6 w-6" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/90">
            Our Motto
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-2xl font-medium italic leading-relaxed text-amber-50 sm:text-3xl sm:leading-relaxed">
            Gifts received, gifts offered, for the life of the world.
          </p>
        </div>
      </section>
    </main>
  )
}