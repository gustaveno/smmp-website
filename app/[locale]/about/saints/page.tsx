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
              "url('/bg-orang-kudus.jpg')",
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
          {intl.formatMessage({ id: 'pages.saints.subtitle', defaultMessage: 'Models of Holiness and Devotion' })}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {intl.formatMessage({ id: 'pages.saints.paragraph', defaultMessage: 'The congregation was built on a foundation of solid love and unlimited dedication. Following in the footsteps and embodying the lifestyle of our founders and key figures—Saint Mary Magdalene Postel, Beata Martha, and Beata Placida—these saints devoted their entire lives to serving others and glorifying God.' })}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <h2 className="border-b border-border pb-3 font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          {intl.formatMessage({ id: 'pages.saints.saint1.name', defaultMessage: 'Saint Mary Magdalene Postel' })}
        </h2>
        <div className="mt-6 grid items-center gap-8 sm:mt-8 md:grid-cols-[170px_1fr_210px] md:gap-10">
          <div className="mx-auto w-40 overflow-hidden rounded-xl shadow-md md:mx-0 md:w-full">
            <img
              src="/santa/smmp.jpg"
              alt="Potret Santa Maria Magdalena Postel"
              className="aspect-[5/7] w-full object-cover object-[50%_10%]"
            />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {intl.formatMessage({ id: 'pages.saints.saint1.description', defaultMessage: 'The founder of the congregation was born Julie Postel. Amid the turmoil of the French Revolution, she secretly helped priests who were being persecuted by the regime and taught poor children. In 1807, she founded this congregation with a primary focus on the education of girls and the care of the sick. She led the community through difficult times of extreme poverty and succeeded in restoring the ancient monastery of Saint-Sauveur-le-Vicomte as the congregation’s headquarters before passing away at the age of 89.' })}
          </p>
          <figure className="mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/santa/pohon-chene.jpg"
                alt="Pohon Chêne"
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {intl.formatMessage({ id: 'pages.saints.saint1.caption', defaultMessage: 'The Sturdy Chêne Tree' })}
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <h2 className="border-b border-border pb-3 font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          {intl.formatMessage({ id: 'pages.saints.saint2.name', defaultMessage: 'Beata Placida Viel' })}
        </h2>
        <div className="mt-6 grid items-center gap-8 sm:mt-8 md:grid-cols-[170px_1fr_210px] md:gap-10">
          <div className="mx-auto w-40 overflow-hidden rounded-xl shadow-md md:mx-0 md:w-full">
            <img
              src="/santa/placide.jpg"
              alt="Potret Santa Maria Magdalena Postel"
              className="aspect-[5/7] w-full object-cover object-[50%_10%]"
            />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {intl.formatMessage({ id: 'pages.saints.saint2.description', defaultMessage: 'She succeeded as the second Superior General of the congregation following the death of Saint Mary Magdalene Postel. Born Eulalie Viel, she was the niece and closest disciple of the founder. Under her calm and wise leadership, the congregation experienced rapid growth, received official recognition from the Holy See, and expanded its ministry beyond France, particularly to Germany.' })}   
          </p>
          <figure className="mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/santa/pohon-tilleul.jpg"
                alt="Pohon Tilleul"
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {intl.formatMessage({ id: 'pages.saints.saint2.caption', defaultMessage: 'The Gentle Tilleul Tree' })}
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <h2 className="border-b border-border pb-3 font-serif text-xl font-bold leading-tight tracking-tight sm:text-2xl">
          {intl.formatMessage({ id: 'pages.saints.saint3.name', defaultMessage: 'Beata Martha Le Bouteiller' })}
        </h2>
        <div className="mt-6 grid items-center gap-8 sm:mt-8 md:grid-cols-[170px_1fr_210px] md:gap-10">
          <div className="mx-auto w-40 overflow-hidden rounded-xl shadow-md md:mx-0 md:w-full">
            <img
              src="/santa/marthe.jpg"
              alt="Potret Santa Maria Magdalena Postel"
              className="aspect-[5/7] w-full object-cover object-[50%_10%]"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {intl.formatMessage({ id: 'pages.saints.saint3.description', defaultMessage: 'A nun who lived out her holiness through the simplicity of her daily tasks at the Saint-Sauveur-le-Vicomte convent. Born Aimée Le Bouteiller, she spent nearly her entire religious life working hard in the kitchen, tending the garden, and managing the convent’s laundry. She was known for her obedience, humility, and perseverance in prayer amid a grueling routine of physical labor, without ever complaining.' })}
          </p>

          <figure className="mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/santa/pohon-apel.jpg"
                alt="Pohon Apel"
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {intl.formatMessage({ id: 'pages.saints.saint3.caption', defaultMessage: 'The Apple Tree that bears delicious fruit' })}
            </figcaption>
          </figure>
        </div>
      </section>
    </main >
  )
}