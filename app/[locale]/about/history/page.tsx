'use client'

import { useIntl } from 'react-intl'

const milestones = [
  {
    year: '1756',
    title: 'Kelahiran Julie Postel',
    description:
      'Lahir pada 28 November di Barfleur, Perancis Utara, dengan nama Julie Fransisca Catharina Postel sebagai anak sulung dari keluarga Jean Postel le Vallois.',
    image:
      'https://images.pexels.com/photos/33519084/pexels-photo-33519084.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1765',
    title: 'Penerimaan Komuni Pertama',
    description:
      'Menerima komuni pada usia 9 tahun berkat teladan dan sifat-sifatnya yang menonjol saat bersekolah di asrama Suster Benediktin di Valognes.',
    image:
      'https://images.pexels.com/photos/6070122/pexels-photo-6070122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1767',
    title: 'Menjadi Ibu Baptis',
    description:
      'Diminta menjadi ibu baptis untuk pembaptisan beberapa bayi pada 11 Juli saat berusia 12 tahun.',
    image:
      'https://images.pexels.com/photos/2031763/pexels-photo-2031763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1774',
    title: 'Menyelesaikan Pendidikan',
    description:
      'Menyelesaikan sekolah di asrama Suster Benediktin pada usia 18 tahun dengan hasil memuaskan, lalu kembali ke Barfleur.',
    image:
      'https://images.pexels.com/photos/29082719/pexels-photo-29082719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1774–1789',
    title: 'Pelayanan Pendidikan di Barfleur',
    description:
      'Menekuni karya sebagai guru selama 15 tahun di sekolah dan asrama yang ia bangun, mengajar remaja putri tanpa membedakan status sosial.',
    image:
      'https://images.pexels.com/photos/8734709/pexels-photo-8734709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1789',
    title: 'Masa Revolusi Prancis',
    description:
      'Berperan aktif menyelamatkan para imam yang diburu, mengamankan aset gereja, mengantar komuni untuk orang sakit, dan mengatur misa secara rahasia.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1805',
    title: 'Gagasan Pendirian Kongregasi',
    description:
      'Pindah ke Cherbourg dan mulai merancang pembentukan kongregasi suster untuk membaktikan hidup seutuhnya kepada Allah.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1807',
    title: 'Pengikraran Kaul dan Pendirian Kongregasi',
    description:
      'Mengikrarkan kaul bersama tiga rekannya pada 8 September, menandai berdirinya Kongregasi Suster Misericordia secara resmi dengan mengambil nama biara Maria Magdalena.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1846',
    title: 'Wafatnya Pendiri Kongregasi',
    description:
      'Meninggal dunia pada 16 Juli tepat pada Hari Raya Santa Maria dari Gunung Karmel, setelah berhasil mempertahankan kongregasi dan menetap di Saint-Sauveur-le-Vicomte.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1925',
    title: 'Kanonisasi Menjadi Santa',
    description:
      'Dinyatakan kudus secara resmi oleh Paus Pius XI pada 24 Mei.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: 'Sekarang',
    title: 'Penyebaran Misi Internasional',
    description:
      'Semangat belas kasih kongregasi meluas ke berbagai belahan dunia, melayani dan berkarya di Italia, Belanda, Inggris, Irlandia, Kongo, India, serta Indonesia.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function HistoryPage() {
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
            {intl.formatMessage({ id: 'pages.history.title', defaultMessage: 'History' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.history.description', defaultMessage: 'Our History' })}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Established 1912
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Roots That Run Deep
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Every community has a story. Ours began over a hundred years ago with
          a simple act of gathering \u2014 and grew, through seasons of hardship
          and hope, into the congregation we know today. Walk with us through the
          moments that shaped who we are.
        </p>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-foreground/25 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-4 top-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background md:left-1/2" />

                  {/* Horizontal connector line (desktop) */}
                  <div
                    className={`absolute top-10 hidden h-px w-10 bg-foreground/25 md:block ${isLeft
                      ? 'left-1/2'
                      : 'right-1/2 translate-x-1/2'
                      }`}
                  />

                  {/* Horizontal connector line (mobile) */}
                  <div className="absolute left-4 top-10 h-px w-8 bg-foreground/25 md:hidden" />

                  {/* Content side */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-12">
                    <div className="group overflow-hidden rounded-2xl border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                      <div className="relative h-44 w-full overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{
                            backgroundImage: `url('${milestone.image}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                          {milestone.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other half on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
