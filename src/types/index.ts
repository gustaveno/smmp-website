import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface LocalizedString {
  id?: string
  en?: string
  fr?: string
}

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: SanityImageSource
}

export interface Event {
  _id: string
  title: LocalizedString
  slug: { current: string }
  description: LocalizedString
  date: string
  time?: string
  location: LocalizedString
  featuredImage?: SanityImageSource
  attendeeCount?: number
  content?: string
  seo?: SEOData
}

export interface Sermon {
  _id: string
  title: LocalizedString
  slug: { current: string }
  speaker: string
  date: string
  series?: LocalizedString
  description: LocalizedString
  audioUrl?: string
  videoUrl?: string
  transcript?: string
  featuredImage?: SanityImageSource
  content?: string
  seo?: SEOData
}

export interface NewsArticle {
  _id: string
  title: LocalizedString
  slug: { current: string }
  excerpt: LocalizedString
  body: LocalizedString
  featuredImage?: SanityImageSource
  author?: string
  publishedDate: string
  category?: string
  seo?: SEOData
}

export interface Schedule {
  _id: string
  activity: LocalizedString
  dayOfWeek: string
  time: string
  location?: LocalizedString
  isRecurring: boolean
}

export interface Settings {
  _id: string
  organizationName: LocalizedString
  logo?: SanityImageSource
  contactEmail: string
  phone?: string
  address: LocalizedString
  openingHours?: LocalizedString
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  navigationMenu?: Array<{
    label: LocalizedString
    href: string
  }>
  footerContent?: LocalizedString
}

export interface DonationSettings {
  _id: string
  bankAccountInfo?: string
  paymentMethods: string[]
  suggestedAmounts: number[]
  thankYouMessage: LocalizedString
  privacyPolicy?: string
}
