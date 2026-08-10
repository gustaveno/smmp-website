import { Metadata } from 'next'

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'article' | 'website' | 'product'
}

export function generateMetadata(
  seo: SEOData,
  locale: string,
  baseUrl: string = 'https://congregation.org'
): Metadata {
  const url = `${baseUrl}/${locale}`

  return {
    title: seo.title || 'Congregation',
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: (seo.ogType as any) || 'website',
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: seo.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
      },
    },
  }
}

export function generateStructuredData(
  type: 'Organization' | 'Article' | 'Event',
  data: Record<string, any>
) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
}
