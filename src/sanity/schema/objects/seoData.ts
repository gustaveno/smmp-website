export default {
  name: 'seoData',
  title: 'SEO Data',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for search engines (60 chars)',
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description for search engines (160 chars)',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
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
