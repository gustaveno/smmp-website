'use client'

import { useIntl } from 'react-intl'

const milestones = [
  {
    year: '1756',
    title: 'Kelahiran Julie Postel',
    description:
      'Lahir pada 28 November di Barfleur, Perancis Utara, dengan nama Julie Fransisca Catharina Postel sebagai anak sulung dari keluarga Jean Postel le Vallois. Cita-citanya sejak kecil adalah membaktikan diri kepada Tuhan untuk melayani orang miskin.',
    image:
      '/tempat/1756.jpg',
  },
  {
    year: '1765',
    title: 'Penerimaan Komuni Pertama',
    description:
      'Menerima komuni pada usia 9 tahun berkat teladan dan sifat-sifatnya yang menonjol saat bersekolah di asrama Suster Benediktin di Valognes.',
    image:
      '/tempat/1765.jpg',
  },
  {
    year: '1767',
    title: 'Menjadi Ibu Baptis',
    description:
      'Diminta menjadi ibu baptis untuk pembaptisan beberapa bayi pada 11 Juli saat berusia 12 tahun.',
    image:
      '/tempat/1767.jpg',
  },
  {
    year: '1768–1774',
    title: 'Pendidikan di Valognes',
    description:
      'Belajar sebagai guru selama 6 tahun di sekolah para suster Benedictines di Valognes, memperoleh pembentukan manusiawi dan religius yang sangat kuat.',
    image:
      '/tempat/1768.jpg',
  },
  {
    year: '1774–1805',
    title: 'Pelayanan Pendidikan di Barfleur',
    description:
      'Membuka sekolah dan asrama untuk anak-anak miskin. Pada zaman Revolusi Prancis, ia membantu imam pergi ke Inggris untuk menyelamatkan imamatnya serta menyimpan Sakramen Mahakudus di rumahnya di bawah sebuah tangga.',
    image:
      '/tempat/1774.jpg',
  },
  {
    year: '1805',
    title: 'Pindah ke Cherbourg',
    description:
      'Pada 12 Mei 1805, ia meninggalkan Barfleur menuju Cherbourg. Di sana ia membuka sekolah dan dalam waktu tidak lama 3 pemudi menggabungkan diri.',
    image:
      '/tempat/1805.jpg',
  },
  {
    year: '1807',
    title: 'Pengikraran Kaul dan Pendirian Kongregasi',
    description:
      'Berkat ketekunannya, Gereja akhirnya merestui cita-citanya. Pada 8 September 1807, ia mengikrarkan kaul bersama tiga rekannya, menandai berdirinya Kongregasi secara resmi.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1811',
    title: 'Berpindah ke Octeville L’avenel',
    description:
      'Cherbourg ditinggalkan karena para suster Penyelenggaraan Ilahi kembali ke tempat itu. Ia lalu mencari tempat baru di Octeville L’avenel, tinggal di dalam sebuah kandang.',
    image:
      '/tempat/1811.jpg',
  },
  {
    year: '1811–1813',
    title: 'Periode Tamerville',
    description:
      'Karena Octeville L’avenel tak memadai lagi, rombongan pindah ke Tamerville. Di sini para suster menerima 12 anak yatim piatu, namun juga mulai dirasakan ada iri hati akan kehadiran mereka.',
    image:
      '/tempat/1811-2.jpg',
  },
  {
    year: '1813–1814',
    title: 'Periode Valognes ("Rumah Sakrat Maut")',
    description:
      'Menetap di Valognes yang dapat disamakan dengan rumah sakrat maut. Namun ia tetap gigih untuk meneruskan perjuangan, sekalipun didinasehati untuk membubarkan kongregasinya.',
    image:
      '/tempat/1767.jpg',
  },
  {
    year: '1814–1816',
    title: 'Pindah ke Hamel au Bon',
    description:
      'Dari Valognes ia pindah ke Hamel au Bon, sebuah pondok beratap jerami. Di sinilah ia menyusun Konstitusi yang pertama di tengah perjuangan yang tak kunjung padam.',
    image:
      '/tempat/1814.jpg',
  },
  {
    year: '1816–1832',
    title: 'Kembali ke Tamerville',
    description:
      'Para suster dipanggil kembali ke Tamerville. Agar dapat diakui oleh pemerintah Kerajaan, kongregasi harus mencari Induk, dan Rm. Lerenard mencarikan sebuah rumah.',
    image:
      'https://images.pexels.com/photos/37274789/pexels-photo-37274789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    year: '1832–1846',
    title: 'Menetap di Saint-Sauveur-le-Vicomte (L’Abbaye)',
    description:
      'Pada 7 Juni 1832 jual beli tanah selesai (L’Abbaye), menggenapi ramalan Marie Rose Dadure bahwa seorang imam akan mengantarnya ke L’Abbaye. Pada 15 Oktober, bersama 14 suster, ia pindah ke tempat ini hingga wafatnya.',
    image:
      '/tempat/1832.jpg',
  },
  {
    year: '1846',
    title: 'Wafatnya Pendiri Kongregasi',
    description:
      'Meninggal dunia pada 16 Juli pada usia 90 tahun, tepat pada Hari Raya Santa Maria dari Gunung Karmel, setelah berhasil mempertahankan kongregasi dan menetap di Saint-Sauveur-le-Vicomte.',
    image:
      '/tempat/1846.jpg',
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
              "url('/bg-sejarah.jpg')",
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
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Benih{' '}
          <span className="italic text-amber-700 bg-amber-100/70 box-decoration-clone px-1.5 py-0.5 rounded">
            Belas Kasih
          </span>
          {' '}yang Tumbuh
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Perjalanan bermula dari semangat pengabdian Julie Postel dan berkembang, melalui berbagai musim penuh tantangan dan pengharapan, menjadi kongregasi yang kita kenal hari ini. Telusuri bersama kami momen-momen yang membentuk siapa diri kami.
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
