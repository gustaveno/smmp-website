'use client'

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
              "url('https://images.pexels.com/photos/33548412/pexels-photo-33548412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.charisma.title', defaultMessage: 'Charisma' })}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Panggilan untuk mencintai, memuliakan, dan menghidupi kasih Kristus.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Kharisma adalah<br />
          <span className="italic text-amber-700 bg-amber-100/70 box-decoration-clone px-1.5 py-0.5 rounded">
            Hidup bagi Allah
          </span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Hidup bagi Allah dan pelayanan bagi sesama khususnya yang menderita. Itulah kharisma atau anugrah yang dimiliki Kongregasi. Panggilan untuk mencintai, memuliakan, dan menghidupi kasih Kristus.
        </p>
      </section>

      <section className="border-y border-border/70 bg-muted/30 px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Hidup bagi Allah?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Maksudnya, para suster mendapat panggilan untuk.
          </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {/* Kolom 1 */}
            <div>
              <h3 className="font-semibold tracking-tight">Mengasihi Allah</h3>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Mengasihi Allah"
                  className="aspect-square h-35 w-25 shrink-0 rounded-md object-cover"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Mencintai Allah tanpa batas dan berusaha sekuat tenaga agar Ia dicintai.
                </p>
              </div>
            </div>

            {/* Kolom 2 */}
            <div>
              <h3 className="font-semibold tracking-tight">Memuliakan Allah</h3>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Memuliakan Allah"
                  className="aspect-square h-35 w-25 shrink-0 rounded-md object-cover"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Hidup untuk lebih memuliakan Allah.
                </p>
              </div>
            </div>

            {/* Kolom 3 */}
            <div>
              <h3 className="font-semibold tracking-tight">Hidup dalam Kristus</h3>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hidup dalam Kristus"
                  className="aspect-square h-35 w-25 shrink-0 rounded-md object-cover"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Usaha terus menerus membuat hidup kami dihidupi oleh Yesus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-center lg:gap-12">
          {/* Kolom 1: Judul */}
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Menjadi pelayan mereka yang menderita
            </h2>
          </div>

          {/* Kolom 2: Gambar */}
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Para suster melayani orang sakit dan menderita"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Kolom 3: Deskripsi + Link */}
          <div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para suster Misericordia itu adalah sahabat-sahabat jiwa orang-orang yang sakit, 
              miskin dan tak berdaya. Kehadiran mereka membawa penghiburan serta harapan nyata 
              bagi mereka yang tersisih di tengah masyarakat. Melalui ketulusan hati dalam 
              melayani, mereka membuktikan 
              bahwa belas kasih dapat menjadi tumpuan bagi siapa saja yang sedang berjuang 
              melawan kesulitan hidup.
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/quote-charisma.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl items-center px-6 py-12 sm:min-h-[58vh] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-serif text-4xl text-background/60">“</span>
            <p className="mt-2 font-serif text-background leading-relaxed text-2xl sm:text-3xl">
              Hidup bagi Allah dan pelayanan bagi sesama khususnya yang menderita.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
