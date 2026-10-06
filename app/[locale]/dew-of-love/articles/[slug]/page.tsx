'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useIntl } from 'react-intl'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { Clock3 } from 'lucide-react'

type SanityArticlesItem = {
  _id: string
  title?: string | Record<string, unknown>
  publishedAt?: string
  coverImage?: { asset?: { url?: string }; alt?: string }
  gallery?: { asset?: { url?: string } }[]
  content?: Record<string, unknown>
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-justify">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 flex gap-3 border-y border-border bg-muted px-5 py-5 text-center font-serif text-lg font-medium leading-snug text-foreground sm:text-xl">
        <span aria-hidden="true" className="select-none text-muted-foreground">
          &gt;
        </span>
        <span className="flex-1">{children}</span>
      </blockquote>
    ),
  },
}

export default function ArticlesDetailPage() {
  const intl = useIntl()
  const params = useParams<{ slug: string | string[] }>()
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug

  const [item, setItem] = useState<SanityArticlesItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }

    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

    if (!projectId) {
      setError('Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables.')
      setLoading(false)
      return
    }

    const query = encodeURIComponent(`
      *[_type == "embunKasih" && contentType == "article" && slug.current == $slug][0] {
        _id,
        title,
        publishedAt,
        coverImage { asset->{ url }, alt },
        gallery[] { asset->{ url } },
        content
      }
    `)
    const slugParam = encodeURIComponent(JSON.stringify(slug))
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}&$slug=${slugParam}`

    fetch(url)
      .then(async (response) => {
        if (!response.ok) throw new Error(`Sanity request failed with status ${response.status}`)
        const data = await response.json()
        setItem(data.result || null)
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load this item'))
      .finally(() => setLoading(false))
  }, [slug])

  const getLocalizedText = (value: unknown, fallback = ''): string => {
    if (typeof value === 'string') return value
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const localizedValue = value as Record<string, unknown>
      const locale = intl.locale?.split('-')[0] || 'id'
      for (const candidate of [locale, intl.locale, 'id', 'en', 'fr']) {
        const text = localizedValue[candidate as string]
        if (typeof text === 'string' && text.trim()) return text
      }
    }
    return fallback
  }

  const getLocalizedBlocks = (value: unknown): any[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return []
    const localizedValue = value as Record<string, unknown>
    const locale = intl.locale?.split('-')[0] || 'id'
    for (const candidate of [locale, intl.locale, 'id', 'en', 'fr']) {
      const blocks = localizedValue[candidate as string]
      if (Array.isArray(blocks) && blocks.length > 0) return blocks
    }
    return []
  }

  const formatDate = (value?: string) => {
    if (!value) return null
    const parsedDate = new Date(value)
    if (Number.isNaN(parsedDate.getTime())) return value
    return intl.formatDate(parsedDate, { dateStyle: 'long' })
  }

  const title = item ? getLocalizedText(item.title, 'Untitled') : ''
  const blocks = item ? getLocalizedBlocks(item.content) : []

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-4xl px-4 py-12 md:py-20">
        {loading && (
          <div className="rounded-xl border border-border/70 bg-muted/30 p-12 text-center text-muted-foreground">
            Loading...
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">
            {error}
          </div>
        )}

        {!loading && !error && !item && (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-14 text-center text-muted-foreground">
            This article could not be found.
          </div>
        )}

        {!loading && !error && item && (
          <>
            <header className="text-center">
              <h1 className="text-balance font-serif text-3xl font-normal uppercase leading-tight tracking-wide text-foreground sm:text-4xl md:text-5xl">
                {title}
              </h1>

              {item.publishedAt && (
                <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                  <Clock3 className="size-4" aria-hidden="true" />
                  {formatDate(item.publishedAt)}
                </p>
              )}
            </header>

            {/* Featured image + caption di tengah */}
            {item.coverImage?.asset?.url && (
              <figure className="mx-auto mt-8 max-w-2xl">
                <div className="overflow-hidden rounded-sm border border-border bg-muted p-2">
                  <img
                    src={item.coverImage.asset.url}
                    alt={item.coverImage.alt || title}
                    className="w-full object-cover"
                  />
                </div>
                {item.coverImage.alt && (
                  <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                    {item.coverImage.alt}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Isi artikel: kolom sempit, paragraf pertama pakai drop cap, kutipan sebagai pull quote */}
            <div
              className="mx-auto mt-10 max-w-2xl space-y-5 font-serif text-base leading-8 text-foreground
                [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-3
                [&>p:first-child]:first-letter:text-7xl [&>p:first-child]:first-letter:font-semibold
                [&>p:first-child]:first-letter:leading-[0.85]"
            >
              {blocks.length > 0 ? (
                <PortableText value={blocks} components={portableTextComponents} />
              ) : (
                <p className="text-muted-foreground">No content available for this language yet.</p>
              )}
            </div>

            {item.gallery && item.gallery.length > 0 && (
              <section className="mx-auto mt-14 max-w-2xl">
                <h2 className="mb-4 text-center text-lg font-semibold text-foreground">
                  <span aria-hidden="true">-- </span>
                  Gallery
                  <span aria-hidden="true"> --</span>
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {item.gallery.map(
                    (image, index) =>
                      image.asset?.url && (
                        <img
                          key={index}
                          src={image.asset.url}
                          alt=""
                          className="aspect-[4/3] w-full rounded-sm border border-border object-cover"
                        />
                      )
                  )}
                </div>
              </section>
            )}
          </>
        )}
      </article>
    </main>
  )
}