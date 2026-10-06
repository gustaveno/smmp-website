'use client'

import { useIntl } from 'react-intl'

import {
  MapPin,
  Mail,
  Phone,
  Heart,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WorldMap } from '@/components/common/WorldMap';

const monasteries = [
  {
    name: 'Congrégation des Sœurs de Sainte Marie-Madeleine POSTEL',
    address: 'L’Abbaye, BP 300, 50390 Saint-Sauveur-le-Vicomte',
    location: 'St Sauveur le Vicomte, France',
    region: 'Europe',
    lon: -1.45,
    lat: 49.42,
  },
  {
    name: 'Congregatie van de Zusters van Julie Postel',
    address: 'Veerstraat 49, 5831 JM Boxmeer',
    location: 'Boxmeer, Netherlands',
    region: 'Europe',
    lon: 5.94,
    lat: 51.65,
  },
  {
    name: 'Para Suster Santa Maria Magdalena POSTEL',
    address: 'Jl. Jayagiri 20',
    location: 'Malang, Indonesia',
    region: 'Asia',
    lon: 112.63,
    lat: -7.98,
  },
  {
    name: 'Our Lady of Mercy Convent',
    address: 'Kuttikkatukara P.O., Ernakulam - 683 504',
    location: 'Kerala, India',
    region: 'Asia',
    lon: 76.27,
    lat: 10.16,
  },
  {
    name: 'Convento de San Antonio',
    address: '2, Via di Porta Pertusa (Angolo via Aurelia)',
    location: 'Rome, Italy',
    region: 'Europe',
    lon: 12.5,
    lat: 41.9,
  },
  {
    name: 'Congrégation des Sœurs de Sainte Marie Madeleine Postel',
    address: 'B.P. 14383',
    location: 'Brazzaville, République du Congo',
    region: 'Africa',
    lon: 15.28,
    lat: -4.26,
  },
  {
    name: 'Communauté de Sœurs de Sainte Marie Madeleine Postel',
    address: '28 BP 786',
    location: 'Abidjan, Cote d’Ivoire',
    region: 'Africa',
    lon: -4.01,
    lat: 5.36,
  },
];

export default function ContactPage() {
  const intl = useIntl()
  
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage:
              "url('/bg-kontak.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.contact.title', defaultMessage: 'Contact Us' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.contact.description', defaultMessage: 'Reach out, visit our headquarters, or learn about our monasteries around the world.' })}
          </p>
        </div>
      </section>

      {/* Headquarters address + map */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Our Headquarters
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Visit Us in Person
          </h2>
        </div>

        <div className="lg:mx-12 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Address card */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  11 route de l'Abbaye, BP 300
                  <br />
                  50390 St Sauveur le Vicomte
                  <br />
                  France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  +33 233216320
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  congregation.mmpostel@wanadoo.fr
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
            <iframe
              title="Headquarters location map"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=L'Abbaye, BP 300, 50390 Saint-Sauveur-le-Vicomte&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Donation information */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
              <Heart className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Support Our Mission
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Your generosity sustains our community, preserves our historic
              sanctuary, and extends our outreach to those in need. Every
              gift, large or small, makes a meaningful difference.
            </p>

            <Button size="lg" className="mt-8 gap-2">
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-background p-5">
              <h3 className="font-medium">Give Online</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Make a secure one-time or recurring donation through our
                online portal.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background p-5">
              <h3 className="font-medium">Give by Mail</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Send checks payable to our congregation at the headquarters
                address above.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background p-5">
              <h3 className="font-medium">Planned Giving</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Include our congregation in your estate plans and create a
                lasting legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive world map */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Interactive Map
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Monasteries Worldwide
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Hover over a marker to discover each monastery’s location. On
            mobile, tap a marker to reveal the details.
          </p>
        </div>

        <div className="mt-12">
          <WorldMap locations={monasteries} />
        </div>
      </section>
    </main>
  );
}