export default {
  name: 'seoData',
  title: 'SEO Data',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'localizedString',
      description: 'Title for search engines (60 chars)',
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'localizedText',
      description: 'Meta description for search engines (160 chars)',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Comma-separated keywords in English for search engines',
      of: [{ type: 'string' }],
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social sharing (1200x630px recommended)',
    },
  ],
}
