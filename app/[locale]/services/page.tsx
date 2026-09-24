'use client'

import {
  HeartPulse,
  GraduationCap,
  Users,
  Church,
} from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: 'Kesehatan',
    tagline: 'MEMULIHKAN RAGA, MERAWAT JIWA',
    description:
      'Merawat orang sakit bukan tugas yang ringan namun panggilan misi di ladang ini membuka jalan menuju rahasia Keagungan Tuhan. Belaskasihan bagi orang sakit adalah wujud nyata merawat Yesus dalam diri orang Samaria yang terluka.',
    image: '/kesehatan.jpg',
    caption: 'Penyembuhan Fisik dan Rohani',
    secondaryImage: '/kesehatan-2.jpg',
    secondaryCaption: 'Sebuah Warisan Kebaikan',
  },
  {
    icon: GraduationCap,
    title: 'Pendidikan',
    tagline: 'MENABUR ILMU, MEMBENTUK MASA DEPAN',
    description:
      'Di tengah-tengah kemajuan pesat akal budi manusia jaman ini, penderitaan siswa yang putus sekolah menjadi kesedihan dunia. Menabur benih harapan demi masa depan generasi muda yang berakar pada kasih Allah.',
    image: '/pendidikan-2.jpg',
    caption: 'Menuntun Generasi Muda',
    secondaryImage: '/pendidikan-1.jpg',
    secondaryCaption: 'Jejak Para Pendidik',
  },
  {
    icon: Users,
    title: 'Sosial',
    tagline: 'MENGULUR KASIH, MERANGKUL SESAMA',
    description:
      'Pancaran hati yang berbelaskasih mampu menembus setiap keterbatasan, kerapuhan dan kelemahan manusiawi kita. Mimpi para yatim piatu menuju kemandirian hidup adalah mimpi terdalam nurani kita.',
    image: '/sosial.jpg',
    caption: 'Merangkul yang Terpinggirkan',
    secondaryImage: '/sosial-2.jpg',
    secondaryCaption: 'Kasih yang Tak Bersyarat',
  },
  {
    icon: Church,
    title: 'Pastoral',
    tagline: 'MEMBINA IMAN, MENUNTUN LANGKAH',
    description:
      'Kerinduan jiwa setiap insan adalah menyejukkan setiap batin yang haus akan kasih Tuhan. Kekurangan dan kelebihan yang kita persembahkan selalu cukup untuk meringankan ketidakbahagiaan sesama.',
    image: '/pastoral-1.jpg',
    caption: 'Mendampingi Umat Beriman',
    secondaryImage: '/pastoral-2.jpg',
    secondaryCaption: 'Berakar dalam Doa',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/29422232/pexels-photo-29422232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Karya Pelayanan
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            “Pergi ke ujung dunia untuk menyelamatkan satu jiwa bagi Kristus”
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-center">
          Melayani dengan Belas Kasih Nyata
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
          Dijiwai oleh semangat untuk mendidik dan meringankan setiap ketidakbahagiaan sesama, para suster St. Maria Magdalena Postel terpanggil untuk menyatakan kemurahan hati, belas kasihan dan kelembutan Allah di tengah-tengah dunia, dengan hadir secara aktif dalam kehidupan manusia dan melibatkan diri melalui aneka ragam tugas pelayanan, guna mewujudkan solidaritas pada sesama yang miskin dalam rupa apapun.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
          Sebagai bentuk nyata keterlibatan para suster meringankan ketidakbahagiaan sesama, mereka ikut aktif dalam kegiatan kerasulan di bidang pendidikan, kesehatan, sosial dan pastoral. Dalam perutusannya, para suster mengambil bagian dalam upaya merawat orang-orang sakit, mengajar siswa di sekolah-sekolah maupun mendukung pendidikan anak-anak yang kesulitan biaya untuk melanjutkan studi, membantu orang-orang miskin, melayani para lanjut usia, mendampingi anak-anak yatim piatu, terlibat aktif dalam berbagai kegiatan pastoral di paroki maupun membimbing sesama yang merindukan kesejukan rohani dan spiritualitas.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
          Melalui berbagai cara para suster memberikan suatu kesaksian hidup menghadirkan dan meluaskan Kerajaan Allah dalam karya-karya kerasulan.
        </p>
      </section>

      {/* Service Sections */}
      <div className="divide-y divide-border/40">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reversed = index % 2 === 1;

          return (
            <section
              key={service.title}
              className="overflow-hidden bg-background"
            >
              <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
                <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Foto utama (tinggi) + badge ikon + keterangan */}
                  <figure className={`flex flex-col ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/5] lg:aspect-auto lg:flex-1">
                      <img
                        src={service.image}
                        alt={service.caption}
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
                      {service.caption}
                    </figcaption>
                  </figure>

                  {/* Teks + foto kedua */}
                  <div className="flex flex-col">
                    <div>
                      <span className="font-serif text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                        {service.tagline}
                      </span>
                      <h3 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                        {service.title}
                      </h3>
                      <p
                        lang="id"
                        className="mt-5 font-serif text-[18px] leading-relaxed text-foreground/80 text-justify hyphens-auto"
                      >
                        {service.description}
                      </p>
                    </div>

                    <figure className="mt-8 lg:mt-auto lg:pt-8">
                      <img
                        src={service.secondaryImage}
                        alt={service.secondaryCaption}
                        className="aspect-[8/5] w-full rounded-2xl object-cover shadow-md"
                      />
                      <figcaption className="mt-3 text-center font-serif text-base text-foreground">
                        {service.secondaryCaption}
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