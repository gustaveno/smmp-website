# Development Guide

## Project Structure Overview

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── lib/             # Utilities and helpers
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── sanity/          # Sanity CMS configuration
├── messages/        # i18n translation files
└── utils/           # Helper functions
```

## Adding a New Page

### 1. Create Route

Create a new folder in `app/[locale]/[route-name]/`:

```typescript
// app/[locale]/my-page/page.tsx
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type MyPageProps = {
  params: { locale: string }
}

export default function MyPage({ params: { locale } }: MyPageProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('pages.myPage')

  return (
    <div className="container mx-auto px-4 py-12">
      <h1>{t('title')}</h1>
      {/* Your content */}
    </div>
  )
}
```

### 2. Add Translations

Add keys to `src/messages/[locale].json`:

```json
{
  "pages": {
    "myPage": {
      "title": "My Page Title",
      "description": "Page description"
    }
  }
}
```

### 3. Add Navigation Link

Update `src/components/common/Navigation.tsx` to include your new page.

## Adding a New Sanity Document Type

### 1. Create Schema

Create new file in `src/sanity/schema/documents/`:

```typescript
// src/sanity/schema/documents/myDocument.ts
export default {
  name: 'myDocument',
  title: 'My Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule: any) => Rule.required(),
    },
    // Add more fields...
  ],
}
```

### 2. Register Schema

Add to `src/sanity/schema/index.ts`:

```typescript
import myDocument from './documents/myDocument'

export const schemaTypes = [
  // ... existing types
  myDocument,
]
```

### 3. Create Component

```typescript
// src/components/myDocument/MyDocumentCard.tsx
import { MyDocument } from '@/types'
import { urlFor } from '@/lib/sanity'

export function MyDocumentCard({ doc }: { doc: MyDocument }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      {doc.featuredImage && (
        <img
          src={urlFor(doc.featuredImage).url()}
          alt={doc.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold">{doc.title}</h3>
      </div>
    </div>
  )
}
```

### 4. Query Content

```typescript
// In your page.tsx
import { client } from '@/lib/sanity'
import { MY_DOCUMENT_QUERY } from '@/lib/sanity.queries'

const documents = await client.fetch(MY_DOCUMENT_QUERY)
```

## Working with Localized Content

### LocalizedString Fields

All text fields that need translation use `localizedString` type:

```typescript
{
  name: 'title',
  type: 'localizedString',  // This is a custom object type
}
```

In Sanity Studio, you'll see fields for each language (id, en, fr).

### Displaying Localized Content

```typescript
import { useLocale } from '@/hooks/useLocale'

export function MyComponent({ item }: { item: any }) {
  const locale = useLocale()
  
  return <h1>{item.title[locale]}</h1>
}
```

## Styling Guidelines

### Tailwind CSS

Use utility classes for styling:

```typescript
<div className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:bg-accent transition-colors">
  {/* Content */}
</div>
```

### Color System

Use semantic color tokens (defined in `app/globals.css`):

- `bg-background` - Main background
- `text-foreground` - Main text
- `bg-primary` / `text-primary-foreground` - Primary actions
- `bg-muted` / `text-muted-foreground` - Subtle elements
- `border-border` - Borders

### Layout

Prefer flexbox for layouts:

```typescript
// Column layout
<div className="flex flex-col gap-4">

// Row layout
<div className="flex items-center gap-4">

// Grid layout (for complex 2D layouts only)
<div className="grid grid-cols-3 gap-4">
```

## Working with Images

### Image from Sanity

```typescript
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

<Image
  src={urlFor(sanityImage).url()}
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Remote Images

Configure remote patterns in `next.config.mjs` for external image sources.

## Authentication & Admin Routes

Admin pages should be in `app/[locale]/admin/`. The embedded Sanity Studio handles authentication automatically.

To add authentication:

```typescript
// Create middleware or page-level auth check
import { verifyAuth } from '@/lib/auth'

export default async function AdminPage() {
  // Add auth verification if needed
  return <Admin />
}
```

## API Routes

### Create API Endpoint

```typescript
// app/api/donations/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  
  // Process donation
  
  return Response.json({ success: true })
}
```

### Handle Sanity Webhooks

```typescript
// app/api/revalidate/route.ts
import { revalidateTag, updateTag } from 'next/cache'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Revalidate specific content
  revalidateTag('events', 'max')
  
  return Response.json({ revalidated: true })
}
```

## SEO Best Practices

### Dynamic Metadata

```typescript
import { generateMetadata } from '@/lib/metadata'

export async function generateMetadata({ params }): Promise<Metadata> {
  const doc = await client.fetch(QUERY, { slug: params.slug })
  
  return generateMetadata({
    title: doc.seo?.title || doc.title,
    description: doc.seo?.description,
    keywords: doc.seo?.keywords,
  })
}
```

### Structured Data

```typescript
import { generateStructuredData } from '@/lib/metadata'

export default function Page({ event }) {
  const schema = generateStructuredData('Event', {
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: event.location,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Content */}
    </>
  )
}
```

## Testing Locally

### Run Dev Server

```bash
pnpm dev
```

### Type Check

```bash
pnpm type-check
```

### Linting

```bash
pnpm lint
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Debugging

### Enable Debug Logs

```typescript
// Add to .env.local
DEBUG=*
```

### Console Logging

```typescript
console.log('[v0]', 'Debug message:', data)
```

### Check Environment Variables

```bash
# Verify env vars are loaded
node -e "console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)"
```

## Common Tasks

### Update Navigation

Edit `src/components/common/Navigation.tsx`

### Change Site Theme

Update CSS variables in `app/globals.css`

### Add Email Newsletter

Implement in contact form or create new component

### Add Analytics

1. Get tracking ID from Google Analytics
2. Add `NEXT_PUBLIC_GA_ID` to `.env.local`
3. Create analytics component

## Performance Tips

- Use `Image` component for images (auto optimization)
- Implement ISR for content pages
- Use SWR for client-side data fetching
- Lazy load components with `React.lazy`
- Minimize bundle size with code splitting

## Deployment Checklist

- [ ] All env vars set in Vercel
- [ ] Content created in Sanity
- [ ] All pages tested locally
- [ ] SEO metadata added
- [ ] Images optimized
- [ ] Forms tested
- [ ] Mobile responsive
- [ ] Lighthouse score > 90
