export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      description: 'Konten yang ditampilkan pada bagian hero di paling atas homepage',
    },
    {
      name: 'aboutPreview',
      title: 'About Preview',
      type: 'object',
      description: 'Cuplikan singkat tentang organisasi/kongregasi, ditampilkan di homepage',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'localizedString',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'localizedString',
          description: 'Deskripsi singkat',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'localizedString',
          description: 'Teks tombol/link, mis. "Selengkapnya"',
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'Path atau URL tujuan, mis. /tentang-kami',
        },
      ],
    },
    {
      name: 'embunKasihSection',
      title: 'Embun Kasih Section',
      type: 'object',
      description: 'Pengaturan tampilan artikel Embun Kasih di homepage',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'localizedString',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'localizedString',
        },
        {
          name: 'displayMode',
          title: 'Display Mode',
          type: 'string',
          description: 'Tampilkan artikel terbaru secara otomatis, atau pilih manual',
          options: {
            list: [
              { title: 'Artikel Terbaru (Otomatis)', value: 'latest' },
              { title: 'Pilih Manual', value: 'manual' },
            ],
            layout: 'radio',
          },
          initialValue: 'latest',
        },
        {
          name: 'itemsToShow',
          title: 'Jumlah Artikel Ditampilkan',
          type: 'number',
          description: 'Digunakan jika Display Mode = Artikel Terbaru (Otomatis)',
          initialValue: 3,
          hidden: ({ parent }: { parent?: { displayMode?: string } }) =>
            parent?.displayMode !== 'latest',
        },
        {
          name: 'selectedItems',
          title: 'Artikel Terpilih',
          type: 'array',
          description: 'Digunakan jika Display Mode = Pilih Manual',
          of: [{ type: 'reference', to: [{ type: 'embunKasih' }] }],
          hidden: ({ parent }: { parent?: { displayMode?: string } }) =>
            parent?.displayMode !== 'manual',
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'localizedString',
          description: 'Teks tombol/link, mis. "Lihat Semua"',
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'Path atau URL tujuan, mis. /embun-kasih',
        },
      ],
    },
    {
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      description: 'Pengaturan tampilan galeri foto di homepage',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'localizedString',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'localizedString',
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'localizedString',
          description: 'Teks tombol/link, mis. "Lihat Galeri"',
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'Path atau URL tujuan, mis. /galeri',
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoData',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
}