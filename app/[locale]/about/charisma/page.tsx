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
            {intl.formatMessage({ id: 'pages.charisma.description', defaultMessage: 'The charisma of our community' })}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Karisma adalah rahmat penyelenggaraan Ilahi
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
            Karisma Kongregasi Suster Santa Maria Magdalena Postel berakar pada teladan hidup pendirinya, Santa Maria Magdalena Postel, yang mendedikasikan seluruh hidupnya untuk melayani Kristus melalui kaum miskin, tertindas, dan terlantar di tengah masa sulit pasca-Revolusi Prancis.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:items-center lg:gap-20 lg:px-10">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/954198/pexels-photo-954198.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="An open book in soft natural light"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Discernment</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Cinta Kasih Berbela Rasa kepada Kaum Miskin
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              Karisma dasar kongregasi adalah menghadirkan kasih Allah yang berbelas kasih kepada mereka yang paling membutuhkan. Pelayanan ini ditujukan langsung kepada kelompok yang tersisih, baik secara ekonomi, sosial, maupun pendidikan, dengan melihat wajah Kristus pada diri orang-orang kecil.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="order-2 max-w-xl md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Offering</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Semangat Penyerahan Diri dan Ketaatan pada Kehendak Allah
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              Spiritualitas Santa Maria Magdalena Postel ditandai dengan kepasrahan total pada penyelenggaraan Ilahi. Para suster menghidupi semangat ketabahan, kesetiaan, dan ketekunan iman dalam menghadapi berbagai rintangan karya maupun keterbatasan sarana.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-xl shadow-xl md:order-2">
            <img
              src="https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Volunteers working together to support the community"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:items-center lg:gap-20 lg:px-10">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/954198/pexels-photo-954198.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="An open book in soft natural light"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Discernment</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Kesederhanaan dan Kerendahan Hati
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              Gaya hidup para suster mengedepankan kesederhanaan Injili, kebersahajaan dalam komunitas, serta semangat persaudaraan yang hangat tanpa mencari kehormatan duniawi.
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
