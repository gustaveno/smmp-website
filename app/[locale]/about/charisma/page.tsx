'use client'

import { Quote } from 'lucide-react'
import { useIntl } from 'react-intl'

export default function CharismaPage() {
  const intl = useIntl()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-kharisma.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.charisma.title', defaultMessage: 'Charisma' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.charisma.description', defaultMessage: 'A calling to love, to glorify, and to embody the love of Christ.' })}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {intl.formatMessage({ id: 'pages.charisma.subtitle1' },
            {
              br: () => <br />,
              highlight: (chunks) => (
                <span className="italic text-amber-700 px-1.5 py-0.5 rounded">
                  {chunks}
                </span>
              ),
            })}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {intl.formatMessage({ id: 'pages.charisma.paragraph1' })}
        </p>
      </section>

      <section className="border-y border-border/70 bg-muted/30 px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {intl.formatMessage({ id: 'pages.charisma.subtitle2' })}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {intl.formatMessage({ id: 'pages.charisma.paragraph2' })}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {/* Kolom 1 */}
            <div>
              <h3 className="font-semibold tracking-tight">{intl.formatMessage({ id: 'pages.charisma.point1Title' })}</h3>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="/kharisma/1.jpg"
                  alt={intl.formatMessage({ id: 'pages.charisma.point1Title' })}
                  className="aspect-square h-35 w-25 shrink-0 rounded-md object-cover"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {intl.formatMessage({ id: 'pages.charisma.point1Desc' })}
                </p>
              </div>
            </div>

            {/* Kolom 2 */}
            <div>
              <h3 className="font-semibold tracking-tight">{intl.formatMessage({ id: 'pages.charisma.point2Title' })}</h3>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="/kharisma/2.jpg"
                  alt={intl.formatMessage({ id: 'pages.charisma.point2Title' })}
                  className="aspect-square h-35 w-25 shrink-0 rounded-md object-cover"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {intl.formatMessage({ id: 'pages.charisma.point2Desc' })}
                </p>
              </div>
            </div>

            {/* Kolom 3 */}
            <div>
              <h3 className="font-semibold tracking-tight">{intl.formatMessage({ id: 'pages.charisma.point3Title' })}</h3>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="/kharisma/3.jpg"
                  alt={intl.formatMessage({ id: 'pages.charisma.point3Title' })}
                  className="aspect-square h-35 w-25 shrink-0 rounded-md object-cover"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {intl.formatMessage({ id: 'pages.charisma.point3Desc' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-center lg:gap-12">
          {/* Kolom 1: Judul */}
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {intl.formatMessage({ id: 'pages.charisma.subtitle3' })}
            </h2>
          </div>

          {/* Kolom 2: Gambar */}
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="/kharisma/4.jpg"
              alt="Para suster melayani orang sakit dan menderita"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Kolom 3: Deskripsi + Link */}
          <div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {intl.formatMessage({ id: 'pages.charisma.paragraph3' })}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-y border-border/70 px-6 py-18 text-center">
        <Quote className="mx-auto h-10 w-10 text-muted-foreground/60" />
        <blockquote className="mt-8">
          <p className="text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            {intl.formatMessage({ id: 'pages.charisma.quote' })}
          </p>
        </blockquote>
        <footer className="mt-8 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          {intl.formatMessage({ id: 'pages.charisma.cite' })}
        </footer>
      </section>
    </main>
  )
}
