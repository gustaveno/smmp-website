'use client'

import { useIntl } from 'react-intl'

export default function SpiritualityPage() {
  const intl = useIntl()

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero — compact */}
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
              Charisma
            </h1>
            <p className="mt-4 text-base leading-relaxed text-amber-100/90 sm:text-lg">
              Discover, nurture, and share the gifts the Spirit has placed within you.
            </p>
          </div>
        </div>
      </section>

      {/* Block 1 — image left, text right */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div>
          <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            A charism is a gift given for the good of all
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every baptized person receives spiritual gifts — charisms — not for private benefit, but to build up the community and serve the world. When each member discerns and exercises their gifts, the whole body grows in love and mission
          </p>
        </div>
      </section>

      {/* Block 2 — text left, image right */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Gifts meant to be discerned, not chosen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A charism is recognized through prayer, reflection, and the confirmation of others. It is not a talent we pick up at will, but a grace that surfaces as we serve — often surprising us with where God has already been at work through our hands.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl shadow-lg md:order-2">
            <img
              src='https://images.pexels.com/photos/954198/pexels-photo-954198.jpeg?auto=compress&cs=tinysrgb&w=1200'
              alt="An open book in soft natural light"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Block 3 — image left, text right */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src='https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200'
              alt="Volunteers working together to support the community"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              From gift to mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              When charisms are named and offered, they become mission. The one who encourages founds a welcoming circle; the one who prays anchors the community; the one who serves becomes the hands of compassion. No gift is too small to matter.
            </p>
          </div>
        </div>
      </section>
    </main >
  )
}