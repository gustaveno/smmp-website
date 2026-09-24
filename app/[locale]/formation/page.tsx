'use client'

import { useIntl } from 'react-intl'

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stages = [
  {
    step: '01',
    title: 'Aspirant',
    duration: 'Initial discernment',
    description:
      'A first period of exploration where a young woman feels drawn to religious life. She lives at home while meeting regularly with a vocation director, praying, and gradually discovering whether this path is truly hers.',
  },
  {
    step: '02',
    title: 'Postulant',
    duration: 'Several months',
    description:  
      'The postulant enters the community and begins to share its daily rhythm of prayer, work, and fellowship. This shorter stage is a gentle transition — learning the habits of religious life while continuing to discern her call.',
  },
  {
    step: '03',
    title: 'Novitiate',
    duration: '1–2 years',
    description:
      'A profound time of formation set apart for prayer, study of the rule and constitutions, and deepening relationship with Christ. The novice receives the religious habit and is introduced to the spirituality and mission of the congregation.',
  },
  {
    step: '04',
    title: 'Temporary Vows',
    duration: '3–6 years',
    description:
      'Having made first profession, the sister lives the vows of poverty, chastity, and obedience in an active community setting. She studies, serves in ministry, and matures in her commitment while the community accompanies her.',
  },
  {
    step: '05',
    title: 'Perpetual Vows',
    duration: 'Lifelong commitment',
    description:
      'In a solemn celebration, the sister professes her vows for life. This definitive yes consecrates her fully to God and to the mission of the congregation, marking the beginning of a permanent, joyful self-gift.',
  },
  {
    step: '06',
    title: 'Ongoing Formation',
    duration: 'Always and everywhere',
    description:
      'Formation never truly ends. Throughout her life, the sister continues to grow in faith, knowledge, and pastoral skill — through retreats, study, spiritual direction, and the daily school of community life.',
  },
];

export default function FormatioPage() {
  const intl = useIntl()
  
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/15875184/pexels-photo-15875184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {intl.formatMessage({ id: 'pages.formation.title', defaultMessage: 'Formation' })}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intl.formatMessage({ id: 'pages.formation.description', defaultMessage: 'Formed in Faith, Rooted in Prayer, and Sent to Serve' })}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          A Journey of the Heart
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Formation is the gradual process by which a woman is prepared for
          consecrated life. It unfolds in stages — each one a deepening of
          prayer, self-knowledge, and commitment. From the first steps of
          discernment to the lifelong embrace of the vows, every stage is
          guided by the community and sustained by grace.
        </p>
      </section>

      {/* Timeline */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-foreground/25 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {stages.map((stage, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={stage.step}
                    className={`relative flex flex-col md:flex-row ${
                      isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot on the timeline */}
                    <div className="absolute left-4 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background text-xs font-bold text-foreground md:left-1/2">
                      {stage.step}
                    </div>

                    {/* Horizontal connector (mobile) */}
                    <div className="absolute left-4 top-11 h-px w-8 bg-foreground/25 md:hidden" />

                    {/* Content card */}
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-12">
                      <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          {stage.duration}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                          {stage.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for the other half on desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Feeling Called?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            If you sense a stirring toward religious life, you don&rsquo;t have
            to walk it alone. Reach out to learn more about discernment and the
            first steps of formation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}