'use client'

import { useIntl } from 'react-intl'
import { Quote } from 'lucide-react';

const practices = [
  {
    title: 'Keterbukaannya',
    description:
      'Terbuka terhadap perubahan jaman, mudah menyesuaikan diri, terbuka terhadap masukan, ide-ide juga kritik yang membangun.',
  },
  {
    title: 'Kesederhanaan',
    description:
      'Apa adanya, tidak menuntut hal-hal yang muluk-muluk, gaya hidup yang sederhana.',
  },
  {
    title: 'Kemiskinannya',
    description:
      'Merasa cukup, tidak serakah, tidak menginginkan barang-barang secara berlebihan.',
  },
  {
    title: 'Kerendahan hatinya ',
    description:
      'Mau terus belajar, menyadari dan menerima keterbatasan dan kelemahan diri sendiri, dapat menghargai kelebihan orang lain dan punya semangat pengampunan.',
  },
];

export default function SpiritualityPage() {
  const intl = useIntl()
  
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/33548412/pexels-photo-33548412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.spirituality.title', defaultMessage: 'Our Spirituality' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.spirituality.description', defaultMessage: 'Learn about our spiritual practices.' })}
          </p>
        </div>
      </section>

      {/* Intro paragraph with drop cap + asymmetrical vertical photo */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
          {/* Text column */}
          <div className="md:col-span-6 md:mt-4">
            <h2 className="font-serif text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              Semangat rohani, Belas Kasih
            </h2>
            <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-foreground">
              Untuk menghayati anugerah panggilan secara mendalam, 
              para religius melandasi hidup mereka dengan spiritualitas belas kasih. 
              Semangat ini diwujudkan dengan mengikuti sedekat mungkin pribadi Yesus Kristus 
              yang miskin dan direndahkan, serta meneladan belas kasih-Nya kepada umat manusia. 
              Wujud nyata dari penghayatan ini tercermin melalui kepedulian, solidaritas, 
              kepekaan terhadap kesulitan sesama yang menderita, dan keramahan yang tulus. 
              Melalui kerendahan hati, mereka terus terpanggil untuk menghidupi 
              keutamaan tersebut dalam pelayanan sehari-hari.
            </p>
          </div>

          {/* Photo column — fills remaining grid, image centered within */}
          <div className="md:col-span-6">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
              <img
                src="https://images.pexels.com/photos/28896465/pexels-photo-28896465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Peaceful chapel interior with beautiful stained glass windows and religious sculpture."
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Bullet points — practices */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Karakter suster Misericordia sejati
          </h2>
          <ul className="mt-10 space-y-8">
            {practices.map((practice) => (
              <li key={practice.title} className="flex items-start gap-5">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">
                    {practice.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {practice.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pull quote — centered reflection */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Quote className="mx-auto h-10 w-10 text-muted-foreground/60" />
        <blockquote className="mt-8">
          <p className="text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            Anda telah menyerahkan diri kepada Allah, korbankanlah seluruhnya. Ia tidak menghendaki sebagian, melainkan seluruh dirimu.
          </p>
        </blockquote>
        <footer className="mt-8 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Santa Maria Magdalena Postel
        </footer>
      </section>
    </main>
  );
}
