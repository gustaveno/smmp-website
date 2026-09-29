const blockContent = {
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export default {
  name: 'localizedBlockContent',
  title: 'Localized Block Content',
  type: 'object',
  fields: [
    {
      name: 'id',
      title: 'Indonesian',
      ...blockContent,
    },
    {
      name: 'en',
      title: 'English',
      ...blockContent,
    },
    {
      name: 'fr',
      title: 'French',
      ...blockContent,
    },
  ],
}