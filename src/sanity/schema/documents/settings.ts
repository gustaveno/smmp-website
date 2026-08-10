export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'Umum' },
    { name: 'contact', title: 'Kontak & Lokasi' },
    { name: 'social', title: 'Media Sosial' },
    { name: 'donation', title: 'Donasi' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    // ==== GENERAL ====
    {
      name: 'siteName',
      title: 'Nama Website',
      type: 'string',
      description: 'Nama website',
      group: 'general',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo kongregasi',
      group: 'general',
      options: { hotspot: true },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Favicon',
      group: 'general',
    },

    // ==== CONTACT & LOCATION ====
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email',
      group: 'contact',
      validation: (Rule: any) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).error('Please enter a valid email'),
    },
    {
      name: 'phone',
      title: 'Nomor Telepon',
      type: 'string',
      description: 'Nomor telepon',
      group: 'contact',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'WhatsApp',
      group: 'contact',
    },
    {
      name: 'address',
      title: 'Alamat',
      type: 'text',
      description: 'Alamat',
      group: 'contact',
    },
    {
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed',
      type: 'text',
      description: 'iframe/maps URL',
      group: 'contact',
    },

    // ==== SOCIAL ====
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Instagram utama',
      group: 'social',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Opsional',
      group: 'social',
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
      description: 'Opsional',
      group: 'social',
    },

    // ==== DONATION ====
    {
      name: 'donationText',
      title: 'Informasi Donasi',
      type: 'array',
      description: 'Informasi donasi',
      group: 'donation',
      of: [{ type: 'block' }],
    },
    {
      name: 'bankName',
      title: 'Nama Bank',
      type: 'string',
      description: 'Nama bank',
      group: 'donation',
    },
    {
      name: 'accountNumber',
      title: 'Nomor Rekening',
      type: 'string',
      description: 'Nomor rekening',
      group: 'donation',
    },
    {
      name: 'accountName',
      title: 'Nama Pemilik Rekening',
      type: 'string',
      description: 'Nama pemilik rekening',
      group: 'donation',
    },

    // ==== FOOTER ====
    {
      name: 'footerText',
      title: 'Footer',
      type: 'array',
      description: 'Footer',
      group: 'footer',
      of: [{ type: 'block' }],
    },
  ],
}