# Quick Reference Guide

A one-page guide to the most common tasks and commands.

## Quick Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run linter

# Sanity CMS (if running separately)
pnpm sanity start     # Start Sanity CLI

# Cleanup
rm -rf .next          # Clear build cache
pnpm install          # Reinstall dependencies
```

## Key URLs

### Local Development
| Page | URL |
|------|-----|
| Homepage | http://localhost:3000 |
| Events (ID) | http://localhost:3000/id/events |
| Events (EN) | http://localhost:3000/en/events |
| Admin (ID) | http://localhost:3000/id/admin |
| Admin (EN) | http://localhost:3000/en/admin |

### Production (After Deploying)
| Page | URL |
|------|-----|
| Homepage | https://yourdomain.com |
| Events | https://yourdomain.com/id/events |
| Admin | https://yourdomain.com/id/admin |

## File Locations

| What | Where |
|------|-------|
| Page Routes | `app/[locale]/*/page.tsx` |
| Components | `src/components/` |
| Styles | `app/globals.css` |
| Translations | `src/messages/[locale].json` |
| Sanity Schemas | `src/sanity/schema/` |
| Types | `src/types/` |
| Utilities | `src/lib/` |
| Config | `next.config.mjs`, `sanity.config.ts` |

## Content Types in Sanity

| Type | Purpose | URL |
|------|---------|-----|
| Event | Upcoming services/activities | `/events` |
| Sermon | Preached messages | `/sermons` |
| News Article | Community updates | `/news` |
| Service Schedule | Weekly times | `/schedule` |
| Donation Settings | Payment methods | `/donate` |
| Site Settings | Global config | Admin only |

## Environment Variables

Required variables in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
```

## Common Code Patterns

### Get Current Language
```typescript
import { useLocale } from '@/hooks/useLocale'

export default function MyComponent() {
  const locale = useLocale() // 'id', 'en', or 'fr'
  return <div>{locale}</div>
}
```

### Use Translation Keys
```typescript
import { useTranslations } from 'next-intl'

export default function MyComponent() {
  const t = useTranslations('pages.home')
  return <h1>{t('title')}</h1>
}
```

### Fetch from Sanity
```typescript
import { client } from '@/lib/sanity'
import { EVENTS_QUERY } from '@/lib/sanity.queries'

const events = await client.fetch(EVENTS_QUERY)
```

### Display Image from Sanity
```typescript
import { urlFor } from '@/lib/sanity'

<img
  src={urlFor(event.featuredImage).url()}
  alt={event.title}
/>
```

### Create Metadata
```typescript
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'My Page',
  description: 'Page description'
})
```

## Tailwind CSS Classes

### Common Utilities
```typescript
// Layout
flex items-center justify-between
grid grid-cols-3 gap-4
container mx-auto px-4

// Colors
bg-background text-foreground
bg-primary text-primary-foreground
bg-muted text-muted-foreground

// Spacing
p-4 m-2 gap-4
py-8 px-4

// Responsive
md:grid-cols-2 lg:text-xl
hidden md:flex

// Hover/States
hover:bg-accent transition-colors
focus:outline-none focus:ring-2
```

## Folder Structure Quick Ref

```
✅ Add new page
  → Create folder in app/[locale]/
  → Add page.tsx

✅ Add new component
  → Create file in src/components/
  → Export as default

✅ Add new content type
  → Create schema in src/sanity/schema/documents/
  → Add to schema/index.ts
  → Create GROQ query

✅ Add translations
  → Edit src/messages/[locale].json
  → Use useTranslations() to access

✅ Add styling
  → Use Tailwind classes in components
  → Or add to app/globals.css for global styles
```

## Debugging Tips

### Check Environment Variables
```bash
# Verify env vars are loaded
node -e "console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)"
```

### View Sanity Queries
```bash
# Check GROQ syntax
# Go to Sanity Vision at http://localhost:3000/id/admin
# Click "Vision" tab to test queries
```

### Check TypeScript Errors
```bash
# Look for red squiggles in editor
# Or run: npm run type-check
```

### Debug in Browser
```bash
# Press F12 to open DevTools
# Console tab shows errors
# Network tab shows failed requests
# Elements tab shows DOM structure
```

## Deployment Checklist

- [ ] `.env.local` filled with Sanity credentials
- [ ] `pnpm build` runs without errors
- [ ] Tested locally with `pnpm dev`
- [ ] Code pushed to GitHub
- [ ] Created Sanity test content
- [ ] Vercel project connected
- [ ] Environment variables set in Vercel
- [ ] Site builds and deploys on Vercel
- [ ] Custom domain configured (optional)
- [ ] ISR webhook setup (optional)

## Getting Help

### Documentation Files
1. **QUICKSTART.md** - Get started fast
2. **SETUP.md** - Installation details
3. **DEVELOPMENT.md** - How to build features
4. **DEPLOYMENT.md** - Production deployment
5. **SANITY_GUIDE.md** - Content editing
6. **docs/ARCHITECTURE.md** - Technical deep dive
7. **README.md** - Project overview

### Error Messages
| Error | Solution |
|-------|----------|
| "Cannot find SANITY_PROJECT_ID" | Check `.env.local` file exists and has correct variables |
| "Admin page not loading" | Use `/id/admin` not `/admin`. Check Sanity credentials |
| "Build fails with TypeScript error" | Run `pnpm install` then `pnpm build` |
| "Images not showing" | Verify Sanity image URLs are public |
| "Content not appearing" | Click "Publish" in Sanity (not just "Save") |

## Architecture Diagram

```
User Browser
    ↓
Vercel Edge (CDN)
    ↓
Next.js Server
    ↓
┌─────────────────────┐
│  Sanity CMS         │
│  ┌───────────────┐  │
│  │ Content Data  │  │
│  │ (Events, etc) │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │ Media/Images  │  │
│  │ (CDN)         │  │
│  └───────────────┘  │
└─────────────────────┘
```

## Color System

```
Light Mode
├─ Background (white)
├─ Foreground (dark)
├─ Primary (brand color)
├─ Muted (light gray)
└─ Border (light border)

Dark Mode
├─ Background (dark)
├─ Foreground (white)
├─ Primary (bright brand color)
├─ Muted (darker gray)
└─ Border (dark border)
```

## TypeScript Types Overview

```typescript
// Main content types
LocalizedString  // Multi-language text
Event           // Service/activity
Sermon          // Message with audio/video
NewsArticle     // Community news
Schedule        // Weekly times
Settings        // Site configuration

// Helper types
SEOData         // Meta information
Person          // Author/speaker info
```

## Important Configuration Files

| File | Purpose | Edit if... |
|------|---------|-----------|
| `next.config.mjs` | Next.js settings | Need to change build behavior |
| `tsconfig.json` | TypeScript config | Need new import paths |
| `tailwind.config.ts` | Tailwind CSS | Want to customize theme colors |
| `sanity.config.ts` | Sanity setup | Need to modify studio |
| `middleware.ts` | i18n routing | Need to change locale handling |
| `.env.example` | Env template | Adding new variables |

## Key Concepts

### Locale
The current language selected. Always part of the URL:
- `/id/events` → Locale is `id`
- `/en/news` → Locale is `en`

### LocalizedString
Fields that support multiple languages. You fill in each language separately in Sanity Studio.

### ISR (Incremental Static Regeneration)
Pages are pre-rendered for speed, then re-rendered when content changes. Sanity webhook triggers this.

### Middleware
Code that runs before requests. `middleware.ts` handles redirecting `/events` to `/id/events`.

### Schema
Definition of content types in Sanity. Tells Sanity what fields exist and their types.

## Performance Targets

- Page load: < 3 seconds
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90

## SEO Best Practices

✅ Do:
- Fill in SEO fields (title, description, keywords)
- Use descriptive page titles
- Add featured images
- Write clear, natural content
- Use header hierarchy (H1, H2, H3)

❌ Don't:
- Use ALL CAPS titles
- Leave fields blank
- Duplicate content across pages
- Use invisible/white text
- Keyword stuff

---

**Last Updated**: July 31, 2026
**Version**: 1.0
**For help**, see QUICKSTART.md or DEVELOPMENT.md
