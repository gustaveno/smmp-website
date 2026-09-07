'use client'

import {
  HeartPulse,
  GraduationCap,
  Users,
  Church,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

const services = [
  {
    icon: HeartPulse,
    title: 'Health',
    tagline: 'Healing body, mind, and spirit',
    description:
      'We believe that wholeness encompasses physical, mental, and spiritual well-being. Our health initiatives bring medical care, wellness education, and compassionate support to those who need it most — because every person deserves to live with dignity and vitality.',
    image:
      'https://images.pexels.com/photos/3873168/pexels-photo-3873168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Free medical outreach clinics',
      'Mental health counseling',
      'Wellness and nutrition workshops',
      'Home visits for the elderly',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    tagline: 'Empowering minds, shaping futures',
    description:
      'Knowledge is the foundation of opportunity. Through scholarships, literacy programs, and mentorship, we open doors for learners of all ages — equipping them with the tools to grow, lead, and give back to their communities.',
    image:
      'https://images.pexels.com/photos/18506736/pexels-photo-18506736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Scholarship and tuition aid',
      'Adult literacy programs',
      'After-school tutoring',
      'Leadership mentorship',
    ],
  },
  {
    icon: Users,
    title: 'Social',
    tagline: 'Building stronger communities together',
    description:
      'No one should face hardship alone. Our social outreach addresses immediate needs — food, shelter, companionship — while fostering long-term community bonds that create lasting change and a culture of mutual care.',
    image:
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Community food drives',
      'Clothing and supply distributions',
      'Volunteer service corps',
      'Family support programs',
    ],
  },
  {
    icon: Church,
    title: 'Pastoral',
    tagline: 'Nurturing faith and spiritual growth',
    description:
      'At the heart of our mission is the care of souls. Through worship, prayer, and pastoral guidance, we walk alongside each person on their spiritual journey — offering comfort in sorrow, hope in struggle, and community in faith.',
    image:
      'https://images.pexels.com/photos/8718464/pexels-photo-8718464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Weekly worship services',
      'Prayer and intercessory ministry',
      'One-on-one spiritual direction',
      'Grief and crisis support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/29422232/pexels-photo-29422232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Bidang Pelayanan
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            “Pergi Ke ujung dunia untuk menyelamatkan satu jiwa bagi Kristus”
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          What We Do
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Serving with Purpose
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Our congregation is organized around four essential areas of service.
          Each field represents a commitment to meeting both the practical and
          spiritual needs of our community, guided by faith and driven by love.
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
              <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                <div
                  className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                    reversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105"
                        style={{
                          backgroundImage: `url('${service.image}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    {/* Floating icon badge */}
                    <div
                      className={`absolute top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background shadow-xl ring-1 ring-border/60 ${
                        reversed ? 'right-6 lg:-right-4' : 'left-6 lg:-left-4'
                      }`}
                    >
                      <Icon className="h-7 w-7 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {service.tagline}
                    </span>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-foreground"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                            <Check className="h-3.5 w-3.5 text-muted-foreground" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-8 gap-2">
                      Learn more about {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Join Us in Service
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Whether you seek support or wish to lend a hand, there is a place
            for you in our community. Reach out and become part of the mission.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}