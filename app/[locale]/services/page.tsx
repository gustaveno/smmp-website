'use client'

import { useIntl } from 'react-intl'

import {
  HeartPulse,
  GraduationCap,
  Users,
  Church,
} from 'lucide-react';

const services = [
  {
    id: 'healthcare',
    icon: HeartPulse,
    image: '/kesehatan.jpg',
    secondaryImage: '/kesehatan-2.jpg',
  },
  {
    id: 'educational',
    icon: GraduationCap,
    image: '/pendidikan-2.jpg',
    secondaryImage: '/pendidikan-1.jpg',
  },
  {
    id: 'social',
    icon: Users,
    image: '/sosial.jpg',
    secondaryImage: '/sosial-2.jpg',
  },
  {
    id: 'pastoral',
    icon: Church,
    image: '/pastoral-1.jpg',
    secondaryImage: '/pastoral-2.jpg',
  },
];

export default function ServicesPage() {
  const intl = useIntl();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-pelayanan.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.services.title' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.services.description' })}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-center">
          {intl.formatMessage({ id: 'pages.services.subtitle' },
            {
              highlight: (chunks) => (
                <span className="italic text-amber-700 px-1.5 py-0.5 rounded">
                  {chunks}
                </span>
              ),
            })}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
          {intl.formatMessage({ id: 'pages.services.paragraph1' })}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
          {intl.formatMessage({ id: 'pages.services.paragraph2' })}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
          {intl.formatMessage({ id: 'pages.services.paragraph3' })}
        </p>
      </section>

      {/* Service Sections */}
      <div className="divide-y divide-border/40">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reversed = index % 2 === 1;
          const base = `pages.services.services.${service.id}`

          return (
            <section
              key={service.id}
              className="overflow-hidden bg-background"
            >
              <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
                <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Foto utama (tinggi) + badge ikon + keterangan */}
                  <figure className={`flex flex-col ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/5] lg:aspect-auto lg:flex-1">
                      <img
                        src={service.image}
                        alt={intl.formatMessage({ id: `${base}.caption` })}
                        className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-lg"
                      />
                      <div
                        className={`absolute -top-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-background shadow-lg ring-1 ring-border/60 ${reversed ? '-right-3' : '-left-3'
                          }`}
                      >
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                    <figcaption className="mt-3 text-center font-serif text-base text-foreground">
                      {intl.formatMessage({ id: `${base}.caption` })}
                    </figcaption>
                  </figure>

                  {/* Teks + foto kedua */}
                  <div className="flex flex-col">
                    <div>
                      <span className="font-serif text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                        {intl.formatMessage({ id: `${base}.tagline` })}
                      </span>
                      <h3 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                        {intl.formatMessage({ id: `${base}.title` })}
                      </h3>
                      <p
                        lang="id"
                        className="mt-5 font-serif text-[18px] leading-relaxed text-foreground/80 text-justify hyphens-auto"
                      >
                        {intl.formatMessage({ id: `${base}.description` })}
                      </p>
                    </div>

                    <figure className="mt-8 lg:mt-auto lg:pt-8">
                      <img
                        src={service.secondaryImage}
                        alt={intl.formatMessage({ id: `${base}.secondaryCaption` })}
                        className="aspect-[8/5] w-full rounded-2xl object-cover shadow-md"
                      />
                      <figcaption className="mt-3 text-center font-serif text-base text-foreground">
                        {intl.formatMessage({ id: `${base}.secondaryCaption` })}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}