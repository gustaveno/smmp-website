export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'localizedString',
      description: 'Judul utama pada hero',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'localizedString',
      description: 'Sub judul / deskripsi singkat pendukung heading',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Gambar latar belakang hero',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'localizedString',
      description: 'Teks tombol utama (opsional)',
    },
    {
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      description: 'URL atau path tujuan tombol utama, mis. /donasi atau https://...',
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'localizedString',
      description: 'Teks tombol kedua (opsional)',
    },
    {
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      description: 'URL atau path tujuan tombol kedua (opsional)',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'backgroundImage',
    },
    prepare({ heading, media }: { heading?: Record<string, string>; media?: any }) {
      // Sesuaikan key locale ('id', 'en', dst.) dengan struktur localizedString
      // yang sebenarnya kamu pakai jika berbeda.
      const title =
        heading?.id || heading?.en || Object.values(heading || {})[0] || 'Hero'
      return {
        title,
        subtitle: 'Hero Section',
        media,
      }
    },
  },
}