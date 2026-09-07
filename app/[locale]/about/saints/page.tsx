'use client'

import { useIntl } from 'react-intl'

export default function SaintsPage() {
  const intl = useIntl()

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero — compact */}
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
            {intl.formatMessage({ id: 'pages.saints.title', defaultMessage: 'Three Saints of Congregation' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.saints.description', defaultMessage: 'Learn about our blessed saints' })}
          </p>
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
              Santa Maria Magdalena Postel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pendiri kongregasi yang lahir dengan nama Julie Postel. Di tengah gejolak Revolusi Prancis, ia secara rahasia membantu para imam yang dikejar-kejar rezim serta mengajar anak-anak miskin. Pada tahun 1807, ia mendirikan kongregasi ini dengan fokus utama pada pendidikan anak-anak perempuan dan perawatan orang sakit. Ia memimpin komunitas melalui masa-masa sulit kemiskinan ekstrem serta berhasil membangun kembali biara kuno Saint-Sauveur-le-Vicomte sebagai pusat kongregasi sebelum wafat pada usia 89 tahun.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl shadow-lg md:order-2">
            <img
              src='/smmp.jpg'
              alt="An open book in soft natural light"
              className="aspect-[3/4] w-full object-cover object-[50%_10%]"
            />
          </div>
        </div>
      </section>

      {/* Block 3 — image left, text right */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src='/placide.jpg'
              alt="Volunteers working together to support the community"
              className="aspect-[3/4] w-full object-cover object-[50%_10%]"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Beata Placida Viel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Penerus kepemimpinan kongregasi sebagai Pemimpin Umum kedua setelah wafatnya Santa Maria Magdalena Postel. Lahir dengan nama Eulalie Viel, ia merupakan keponakan dan murid terdekat sang pendiri. Di bawah kepemimpinannya yang tenang dan bijaksana, kongregasi mengalami perkembangan pesat, memperoleh pengakuan resmi dari Takhta Suci, serta memperluas karya pelayanan hingga ke luar Prancis, khususnya ke Jerman.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src='/marthe.jpg'
              alt="Volunteers working together to support the community"
              className="aspect-[3/4] w-full object-cover object-[50%_10%]"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Beata Martha Le Bouteiller
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Seorang biarawati yang menghidupi kekudusan melalui kesederhanaan tugas sehari-hari di biara Saint-Sauveur-le-Vicomte. Lahir dengan nama Aimée Le Bouteiller, ia menghabiskan hampir seluruh hidup membiaranya dengan bekerja keras di dapur, mengurus kebun, dan mengelola binatu biara. Ia dikenal karena ketaatan, kerendahan hati, serta ketekunannya dalam doa di tengah rutinitas kerja fisik yang berat tanpa pernah mengeluh.
            </p>
          </div>
        </div>
      </section>
    </main >
  )
}