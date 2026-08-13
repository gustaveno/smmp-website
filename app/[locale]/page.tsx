'use client'

import { use } from 'react'
import Link from 'next/link'
import { Heart, Calendar, BookOpen, Megaphone, Clock, Mail } from 'lucide-react'

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params)
  const safeLocale = typeof locale === 'string' ? locale : 'id'

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 px-4 py-20">
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Welcome to Our Faith Community
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-8 text-balance">
            Join us in worship, fellowship, and spiritual growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${safeLocale}/public/events`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Explore Events
            </Link>
            <Link
              href={`/${safeLocale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Community Members</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-700 font-medium">Events Per Year</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-pink-600 mb-2">20+</div>
              <p className="text-gray-700 font-medium">Active Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            What We Offer
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Discover our community&apos;s spiritual programs and activities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Events Card */}
            <Link
              href={`/${safeLocale}/public/events`}
              className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-8px] cursor-pointer border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Calendar className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Events & Services</h3>
              <p className="text-gray-600 mb-4">
                Join us for regular services and special community events throughout the year.
              </p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                View Events →
              </span>
            </Link>

            {/* Sermons Card */}
            <Link
              href={`/${safeLocale}/public/sermons`}
              className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-8px] cursor-pointer border border-gray-100"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <BookOpen className="w-7 h-7 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sermons & Teaching</h3>
              <p className="text-gray-600 mb-4">
                Listen to inspiring sermons and biblical teachings from our community leaders.
              </p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                Listen Now →
              </span>
            </Link>

            {/* News Card */}
            <Link
              href={`/${safeLocale}/public/news`}
              className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-8px] cursor-pointer border border-gray-100"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600 transition-colors">
                <Megaphone className="w-7 h-7 text-pink-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">News & Updates</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest announcements and community news.
              </p>
              <span className="text-pink-600 font-semibold group-hover:text-pink-700">
                Read News →
              </span>
            </Link>

            {/* Schedule Card */}
            <Link
              href={`/${safeLocale}/schedule`}
              className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-8px] cursor-pointer border border-gray-100"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Clock className="w-7 h-7 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Schedule</h3>
              <p className="text-gray-600 mb-4">
                Check our weekly service times and special program schedules.
              </p>
              <span className="text-green-600 font-semibold group-hover:text-green-700">
                View Schedule →
              </span>
            </Link>

            {/* Donate Card */}
            <Link
              href={`/${safeLocale}/donate`}
              className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-8px] cursor-pointer border border-gray-100"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <Heart className="w-7 h-7 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Give & Support</h3>
              <p className="text-gray-600 mb-4">
                Support our mission through tithes, donations, and financial contributions.
              </p>
              <span className="text-red-600 font-semibold group-hover:text-red-700">
                Donate Now →
              </span>
            </Link>

            {/* Contact Card */}
            <Link
              href={`/${safeLocale}/contact`}
              className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-8px] cursor-pointer border border-gray-100"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <Mail className="w-7 h-7 text-indigo-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Have questions? Get in touch with our community leadership team.
              </p>
              <span className="text-indigo-600 font-semibold group-hover:text-indigo-700">
                Contact →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re new to our faith or looking to deepen your spiritual journey, we&apos;d love to welcome you.
          </p>
          <Link
            href={`/${safeLocale}/contact`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
