'use client'

import { useIntl } from 'react-intl'

export default function CharismaPage() {
  const intl = useIntl()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13755423/pexels-photo-13755423.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(28_45%_18%/0.94)] via-[hsl(24_40%_22%/0.88)] to-[hsl(20_35%_30%/0.78)]" />
        </div>

        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl items-end px-6 py-16 sm:min-h-[64vh] sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-amber-200/80">
              <span className="h-px w-12 bg-current" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em]">Spiritual Gift</p>
            </div>
            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-amber-50 sm:text-7xl lg:text-8xl">
              Charisma
            </h1>
            <p className="mt-7 max-w-xl border-l border-amber-200/50 pl-5 text-base leading-relaxed text-amber-100/90 sm:text-lg">
              Discover, nurture, and share the gifts the Spirit has placed within you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">The gift</p>
          <div>
            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A charism is a gift given for the good of all
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Every baptized person receives spiritual gifts — charisms — not for private benefit, but to build up the community and serve the world. When each member discerns and exercises their gifts, the whole body grows in love and mission.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:items-center lg:gap-20 lg:px-10">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/954198/pexels-photo-954198.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="An open book in soft natural light"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Discernment</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Gifts meant to be discerned, not chosen
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              A charism is recognized through prayer, reflection, and the confirmation of others. It is not a talent we pick up at will, but a grace that surfaces as we serve — often surprising us with where God has already been at work through our hands.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="order-2 max-w-xl md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Offering</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              From gift to mission
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              When charisms are named and offered, they become mission. The one who encourages founds a welcoming circle; the one who prays anchors the community; the one who serves becomes the hands of compassion. No gift is too small to matter.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-xl shadow-xl md:order-2">
            <img
              src="https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Volunteers working together to support the community"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-3xl border-y border-border/70 py-12 text-center sm:py-16">
          <span className="font-serif text-4xl text-muted-foreground/60">“</span>
          <p className="mt-2 font-serif text-2xl leading-relaxed sm:text-3xl">
            No gift is too small to matter when it is offered in love.
          </p>
        </div>
      </section>
    </main>
  )
}
