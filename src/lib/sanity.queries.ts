export const EVENTS_QUERY = `
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    time,
    location,
    featuredImage,
    seo
  }
`

export const EVENTS_BY_SLUG_QUERY = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    date,
    time,
    location,
    featuredImage,
    attendeeCount,
    content,
    seo
  }
`

export const SERMONS_QUERY = `
  *[_type == "sermon"] | order(date desc) {
    _id,
    title,
    slug,
    speaker,
    date,
    series,
    description,
    audioUrl,
    videoUrl,
    featuredImage,
    seo
  }
`

export const SERMONS_BY_SLUG_QUERY = `
  *[_type == "sermon" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    speaker,
    date,
    series,
    description,
    audioUrl,
    videoUrl,
    transcript,
    featuredImage,
    content,
    seo
  }
`

export const NEWS_QUERY = `
  *[_type == "newsArticle"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    publishedDate,
    category,
    seo
  }
`

export const NEWS_BY_SLUG_QUERY = `
  *[_type == "newsArticle" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    featuredImage,
    author,
    publishedDate,
    category,
    content,
    seo
  }
`

export const SCHEDULE_QUERY = `
  *[_type == "schedule"] {
    _id,
    activity,
    dayOfWeek,
    time,
    location,
    isRecurring
  }
`

export const SETTINGS_QUERY = `
  *[_type == "settings"][0] {
    _id,
    organizationName,
    logo,
    contactEmail,
    phone,
    address,
    openingHours,
    socialLinks,
    navigationMenu,
    footerContent
  }
`

export const DONATION_SETTINGS_QUERY = `
  *[_type == "donationSettings"][0] {
    _id,
    bankAccountInfo,
    paymentMethods,
    suggestedAmounts,
    thankYouMessage,
    privacyPolicy
  }
`
