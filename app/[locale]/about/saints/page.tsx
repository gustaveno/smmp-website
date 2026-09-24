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

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Teladan Kekudusan dan Pengabdian
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Kongregasi dibangun atas fondasi kasih yang kokoh dan pengabdian tanpa batas. Meneladani jejak langkah dan keteladanan hidup dari para pendiri serta tokoh utama kami—Santa Maria Magdalena Postel, Beata Martha, dan Beata Placida—yang mendedikasikan hidup sepenuhnya bagi sesama dan kemuliaan Tuhan.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <h2 className="border-b border-border pb-3 font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          Santa Maria Magdalena Postel
        </h2>
        <div className="mt-6 grid items-center gap-8 sm:mt-8 md:grid-cols-[170px_1fr_210px] md:gap-10">
          <div className="mx-auto w-40 overflow-hidden rounded-xl shadow-md md:mx-0 md:w-full">
            <img
              src="/smmp.jpg"
              alt="Potret Santa Maria Magdalena Postel"
              className="aspect-[5/7] w-full object-cover object-[50%_10%]"
            />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Pendiri kongregasi yang lahir dengan nama Julie Postel. Di tengah gejolak
            Revolusi Prancis, ia secara rahasia membantu para imam yang dikejar-kejar
            rezim serta mengajar anak-anak miskin. Pada tahun 1807, ia mendirikan
            kongregasi ini dengan fokus utama pada pendidikan anak-anak perempuan dan
            perawatan orang sakit. Ia memimpin komunitas melalui masa-masa sulit
            kemiskinan ekstrem serta berhasil membangun kembali biara kuno
            Saint-Sauveur-le-Vicomte sebagai pusat kongregasi sebelum wafat pada usia
            89 tahun.
          </p>
          <figure className="mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/pohon-chene.jpg"
                alt="Pohon Chêne"
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Pohon Chêne yang kuat
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <h2 className="border-b border-border pb-3 font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          Beata Placida Viel
        </h2>
        <div className="mt-6 grid items-center gap-8 sm:mt-8 md:grid-cols-[170px_1fr_210px] md:gap-10">
          <div className="mx-auto w-40 overflow-hidden rounded-xl shadow-md md:mx-0 md:w-full">
            <img
              src="/placide.jpg"
              alt="Potret Santa Maria Magdalena Postel"
              className="aspect-[5/7] w-full object-cover object-[50%_10%]"
            />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Penerus kepemimpinan kongregasi sebagai Pemimpin Umum kedua setelah wafatnya
            Santa Maria Magdalena Postel. Lahir dengan nama Eulalie Viel, ia merupakan
            keponakan dan murid terdekat sang pendiri. Di bawah kepemimpinannya yang
            tenang dan bijaksana, kongregasi mengalami perkembangan pesat, memperoleh
            pengakuan resmi dari Takhta Suci, serta memperluas karya pelayanan hingga ke
            luar Prancis, khususnya ke Jerman.
          </p>
          <figure className="mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/pohon-tilleul.jpg"
                alt="Pohon Tilleul"
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Pohon Tilleul yang lembut
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <h2 className="border-b border-border pb-3 font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          Beata Martha Le Bouteiller
        </h2>
        <div className="mt-6 grid items-center gap-8 sm:mt-8 md:grid-cols-[170px_1fr_210px] md:gap-10">
          <div className="mx-auto w-40 overflow-hidden rounded-xl shadow-md md:mx-0 md:w-full">
            <img
              src="/marthe.jpg"
              alt="Potret Santa Maria Magdalena Postel"
              className="aspect-[5/7] w-full object-cover object-[50%_10%]"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Seorang biarawati yang menghidupi kekudusan melalui kesederhanaan tugas
            sehari-hari di biara Saint-Sauveur-le-Vicomte. Lahir dengan nama Aimée Le
            Bouteiller, ia menghabiskan hampir seluruh hidup membiaranya dengan bekerja
            keras di dapur, mengurus kebun, dan mengelola binatu biara. Ia dikenal
            karena ketaatan, kerendahan hati, serta ketekunannya dalam doa di tengah
            rutinitas kerja fisik yang berat tanpa pernah mengeluh.
          </p>

          <figure className="mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/pohon-apel.jpg"
                alt="Pohon Apel"
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Pohon Apel yang menghasilkan buah lezat
            </figcaption>
          </figure>
        </div>
      </section>
    </main >
  )
}