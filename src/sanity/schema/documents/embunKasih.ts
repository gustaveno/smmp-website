// Reads the English value from a localizedString (title.en)
export const getEnglishTitle = (title: any): string =>
  typeof title?.en === 'string' ? title.en : ''

// Custom slugify: turns the English title into a URL-friendly slug
export const slugify = (input: string): string =>
  (input || '')
    .toLowerCase()
    .normalize('NFD') // split accents from letters
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '') // drop special characters
    .trim()
    .replace(/[\s_-]+/g, '-') // spaces/underscores -> single hyphen
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
    .slice(0, 96)

export default {
  name: 'embunKasih',
  title: 'Embun Kasih',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => getEnglishTitle(doc?.title),
        slugify,
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localizedString',
      description: 'Brief summary for listing pages',
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Article', value: 'article' },
          { title: 'Reflection', value: 'reflection' },
          { title: 'Prayer', value: 'prayer' },
          { title: 'Quotes', value: 'quotes' }
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for screen readers and SEO',
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      hidden: ({ document }: any) => document?.contentType !== 'news',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localizedBlockContent',
      description: 'Main article content',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Tampilkan sebagai artikel unggulan',
      initialValue: false,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoData',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      date: 'publishedAt',
      category: 'contentType',
    },
    prepare({ title, date, category }: any) {
      return {
        title: title || 'Untitled',
        subtitle: [
          category,
          date ? new Date(date).toLocaleDateString('en-EN', { year: 'numeric', month: 'short', day: 'numeric' }) : null,
        ].filter(Boolean).join(' • '),
      }
    },
  },
}