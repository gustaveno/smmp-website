# Production Architecture - Congregation Website

## Executive Summary

This is a production-grade, multi-language website for faith communities built with modern web technologies. The architecture is designed for:

- **Scalability** - Easy to add features and content
- **Maintainability** - Clear folder structure and code organization
- **User-Friendliness** - Non-technical editors can manage content
- **Performance** - SEO-optimized, fast loading
- **Reliability** - Type-safe, tested patterns

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16 | React framework with server-side rendering |
| **Language** | TypeScript | Type safety and developer experience |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **CMS** | Sanity | Headless content management system |
| **i18n** | next-intl | Multi-language support (3 languages) |
| **UI** | shadcn/ui | Pre-built React components |
| **Icons** | lucide-react | Icon library |
| **Deployment** | Vercel | Optimized hosting for Next.js |

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       User Browser                          │
│  (Desktop, Tablet, Mobile - All supported)                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                      │
│  (Global CDN, Security Headers, ISR Caching)               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Next.js 16 Application Server                  │
│  ┌──────────────┬─────────────┬──────────────┐             │
│  │ Page Routes  │ API Routes  │ Admin (CMS)  │             │
│  │   (SSG/ISR)  │  (Server)   │ (Sanity)     │             │
│  └──────────────┴─────────────┴──────────────┘             │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
    ┌─────────┐  ┌─────────────┐  ┌─────────────┐
    │ Sanity  │  │  Analytics  │  │  External   │
    │  CMS    │  │  (Optional) │  │   APIs      │
    │ (Cloud) │  │             │  │ (Payment,   │
    │         │  │             │  │  Email)     │
    └─────────┘  └─────────────┘  └─────────────┘
```

## File Organization

### Root Level
```
congregation-website/
├── app/                          # Next.js App Router (pages & routes)
├── src/                          # Source code (organized by type)
├── public/                       # Static files (images, fonts, etc.)
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── sanity.config.ts              # Sanity CMS configuration
├── middleware.ts                 # i18n routing middleware
├── package.json                  # Dependencies
└── docs/                         # Documentation
```

### App Directory Structure
```
app/
├── layout.tsx                    # Root layout wrapper
├── [locale]/                     # Locale-based routing
│   ├── layout.tsx               # Locale-specific layout
│   ├── page.tsx                 # Homepage (/)
│   ├── (public)/                # Public routes group
│   │   ├── events/              # Events page
│   │   │   ├── page.tsx        # Events listing
│   │   │   └── [slug]/         # Individual event
│   │   ├── sermons/             # Sermons page
│   │   ├── news/                # News page
│   │   ├── schedule/            # Schedule page
│   │   ├── donate/              # Donation page
│   │   └── contact/             # Contact page
│   └── (admin)/
│       └── admin/               # Sanity Studio admin
│           └── [[...index]]/   # Catch-all for admin routes
├── api/                         # API routes (Node.js functions)
│   ├── donations/               # Donation processing
│   ├── contact/                 # Contact form submission
│   └── revalidate/              # ISR webhook from Sanity
├── error.tsx                    # Error boundary
├── not-found.tsx                # 404 page
└── globals.css                  # Global styles
```

### Src Directory Structure
```
src/
├── components/                  # React components
│   ├── common/                 # Shared components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── Navigation.tsx       # Nav menu
│   │   └── LanguageSwitcher.tsx # Language picker
│   ├── home/                   # Homepage components
│   ├── events/                 # Event-related components
│   ├── sermons/                # Sermon components
│   ├── news/                   # News components
│   ├── forms/                  # Form components
│   └── ui/                     # shadcn/ui customizations
│
├── lib/                        # Utilities & configuration
│   ├── sanity.ts              # Sanity client setup
│   ├── sanity.queries.ts      # GROQ queries
│   ├── i18n.ts                # i18n configuration
│   ├── metadata.ts            # SEO metadata helpers
│   ├── cn.ts                  # Tailwind class utility
│   └── format.ts              # Date/currency formatting
│
├── types/                      # TypeScript types
│   ├── index.ts               # Main type definitions
│   └── sanity.ts              # Sanity document types
│
├── hooks/                      # Custom React hooks
│   ├── useLocale.ts           # Get current language
│   └── useI18n.ts             # Access translations
│
├── sanity/                     # CMS configuration
│   ├── schema/
│   │   ├── index.ts           # Schema exports
│   │   ├── documents/         # Document types
│   │   │   ├── event.ts
│   │   │   ├── sermon.ts
│   │   │   ├── newsArticle.ts
│   │   │   ├── schedule.ts
│   │   │   ├── donation.ts
│   │   │   └── settings.ts
│   │   └── objects/           # Reusable object types
│   │       ├── localizedString.ts
│   │       ├── seoData.ts
│   │       └── person.ts
│   └── config.ts              # Sanity client
│
├── messages/                   # Translations
│   ├── id.json                # Indonesian
│   ├── en.json                # English
│   └── fr.json                # French
│
├── styles/                     # Global styles
│   └── globals.css            # Tailwind & design tokens
│
└── utils/                      # Helper functions
    ├── cache.ts               # Caching logic
    ├── api.ts                 # API helpers
    └── validation.ts          # Form validation
```

## Key Architectural Decisions

### 1. Locale-Based Routing (`app/[locale]/`)

**Why**: Multi-language support is built into the URL structure.

- `/id/events` - Indonesian events
- `/en/events` - English events
- `/fr/events` - French events

Users can switch languages and see the same page in another language.

**Middleware**: `middleware.ts` handles redirects (e.g., `/events` → `/id/events`)

### 2. Headless CMS with Sanity

**Why**: Separates content from code.

- Content editors use Sanity Studio (`/admin`)
- Developers modify code separately
- Both can work independently
- Content is platform-agnostic

### 3. Static Generation with ISR

**Why**: Optimal performance and SEO.

- Pages are pre-rendered at build time (SSG)
- Sanity webhooks trigger re-renders when content changes (ISR)
- Users get instant, cached content
- SEO benefits from static HTML

### 4. Component-Based Architecture

**Why**: Reusability and maintainability.

- Components in `/components` organized by feature
- UI components in `/components/ui` (shadcn)
- Common components shared across pages
- Easy to test and modify

### 5. TypeScript Throughout

**Why**: Type safety and better DX.

- All files are `.ts` or `.tsx`
- Sanity types auto-generated from schema
- Catch errors before runtime
- Better IDE autocomplete

## Data Flow

### 1. **Content Creation → Publishing**
```
Editor → Sanity Studio (/admin) → Sanity Database
```

### 2. **Content → Website**
```
Sanity Database 
  → Sanity API (queries)
  → Next.js Server Component
  → Page Rendering (SSG/ISR)
  → Browser (HTML/CSS/JS)
```

### 3. **User Interaction → Update**
```
Editor publishes in Sanity
  → Webhook triggers
  → Next.js ISR revalidation
  → Page re-renders
  → CDN cache clears
  → Browser sees new content
```

## Multi-Language Implementation

### Localized Content

Each document type has `LocalizedString` fields for multi-language content:

```typescript
{
  title: {
    id: "Gereja Kami",
    en: "Our Church",
    fr: "Notre Église"
  }
}
```

### Translation Files

UI strings (menu, buttons, etc.) in `src/messages/`:

```json
// src/messages/en.json
{
  "common": {
    "navigation": {
      "events": "Events"
    }
  }
}
```

### Runtime Selection

```typescript
const locale = useLocale() // 'id', 'en', or 'fr'
const content = doc.title[locale] // "Gereja Kami"
const t = useTranslations() // Access translation keys
```

## Performance Optimization

### 1. **Image Optimization**
- Next.js `Image` component auto-optimizes
- Sanity CDN serves images
- Responsive sizes for all devices

### 2. **Code Splitting**
- Route-based splitting automatic
- Dynamic imports for large components
- Minimal initial bundle

### 3. **Caching Strategy**
```
Browser Cache (300s)
    ↓
CDN Cache (Vercel Edge)
    ↓
Server Cache (ISR)
    ↓
Database Query (Sanity)
```

### 4. **SEO Optimization**
- Dynamic metadata per page
- Open Graph tags for sharing
- JSON-LD structured data
- XML sitemap generation
- robots.txt configuration

## Security Implementation

### 1. **Environment Variables**
- Secrets stored server-side only
- `NEXT_PUBLIC_` prefix for public vars
- `.env.local` not committed to Git

### 2. **Security Headers**
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=63072000
```

### 3. **API Protection**
- Token-based authentication
- CORS configured appropriately
- Input validation on forms
- SQL injection prevention (Sanity handles this)

## Deployment Architecture

### Local Development
```
pnpm dev
  → Next.js dev server (hot reload)
  → Sanity studio accessible
  → Full debugging available
```

### Production (Vercel)
```
Git Push
  → GitHub webhook
  → Vercel build process
  → Next.js build & optimization
  → Deploy to CDN
  → Automatic ISR for dynamic content
```

## Monitoring & Observability

### Build Logs
- Vercel dashboard shows build logs
- Next.js compiler output
- Error tracking

### Runtime Monitoring
- Vercel analytics (optional)
- Google Analytics integration (optional)
- Error boundaries in React

### SEO Monitoring
- Google Search Console
- Bing Webmaster Tools
- Schema markup validation

## Scalability Considerations

### Adding Features
1. Create new schema in Sanity
2. Add new routes in `app/[locale]/`
3. Create components for UI
4. Add queries to fetch data
5. Deploy

### Managing Content Growth
- Sanity handles unlimited content
- ISR ensures fast updates
- CDN caching prevents slowdown
- No database scaling needed

### Team Expansion
- Clear folder structure for onboarding
- TypeScript catches mistakes
- Documentation in `/docs`
- Code patterns consistent and reusable

## Disaster Recovery

### Content Backup
- Sanity cloud handles backups
- Export capability via API
- Data persists independently

### Site Restoration
- Vercel deployment history
- Rollback to previous version instantly
- Git history preserved

### Disaster Recovery Plan
1. **Content Loss** → Restore from Sanity backups
2. **Site Crash** → Rollback to previous deploy
3. **Code Issues** → Fix locally, commit, redeploy
4. **Performance** → Check CDN, ISR, database

## Costs Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | ~$0-50/mo | Depends on usage |
| Sanity | Free-50/mo | Generous free tier |
| Domain | ~$10-15/yr | Domain registrar |
| Total | ~$10-70/mo | Production-grade hosting |

## Success Metrics

- **Performance**: Lighthouse > 90
- **SEO**: Indexed in Google within 48 hours
- **Availability**: 99.9% uptime
- **Load Time**: < 3 seconds on 4G
- **Team Efficiency**: Non-devs manage 100% of content
- **Code Quality**: TypeScript + ESLint 100% passing

## Future Enhancements

- [ ] Payment processing (Stripe integration)
- [ ] Member portal with authentication
- [ ] Prayer request system
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Chat/messaging system
- [ ] Sermon recommendation engine
- [ ] Event registration system
- [ ] Giving analytics dashboard

---

This architecture supports rapid development, easy maintenance, and long-term scalability while remaining simple enough for small teams to manage.
