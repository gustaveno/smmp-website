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
        source: 'title',
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Renungan', value: 'renungan' },
          { title: 'Doa', value: 'doa' },
          { title: 'Kata Mutiara', value: 'kata-mutiara' },
          { title: 'Berita', value: 'berita' },
          { title: 'Refleksi', value: 'refleksi' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Main article content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
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
}