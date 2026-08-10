# Congregation Website

A production-ready, multi-language website built for faith communities using Next.js 16, TypeScript, Tailwind CSS, Sanity CMS, and next-intl.

## Features

- **Multi-Language Support** - Indonesian, English, and French with URL-based routing
- **Headless CMS** - Sanity CMS for content management with embedded studio at `/admin`
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Dynamic metadata, XML sitemap, structured data
- **Performance** - Incremental Static Regeneration (ISR), image optimization
- **Type Safe** - Full TypeScript support for better developer experience
- **Content Types** - Events, Sermons, News, Schedule, Donations
- **Easy Maintenance** - Designed for non-technical content editors and developers

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **CMS**: Sanity (headless CMS)
- **i18n**: next-intl (for multi-language support)
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: lucide-react
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm
- Sanity account
- Vercel account (optional, for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd congregation-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Sanity project credentials

4. Start development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

6. Access Sanity Studio at [http://localhost:3000/id/admin](http://localhost:3000/id/admin)

## Directory Structure

```
├── app/                          # Next.js App Router
│   ├── [locale]/                # Locale-specific routes
│   │   ├── layout.tsx           # Locale layout wrapper
│   │   ├── page.tsx             # Homepage
│   │   ├── (public)/            # Public routes group
│   │   │   ├── events/
│   │   │   ├── sermons/
│   │   │   ├── news/
│   │   │   └── ...
│   │   └── admin/               # Sanity Studio
│   └── api/                      # API routes
├── src/
│   ├── components/              # React components
│   │   ├── common/              # Shared components
│   │   ├── home/                # Homepage components
│   │   ├── events/              # Event components
│   │   └── ...
│   ├── lib/                      # Utilities & helpers
│   │   ├── sanity.ts           # Sanity client
│   │   ├── i18n.ts             # i18n configuration
│   │   └── ...
│   ├── types/                    # TypeScript types
│   ├── hooks/                    # Custom hooks
│   ├── sanity/                   # Sanity CMS configuration
│   │   └── schema/              # Document & object types
│   └── messages/                 # Translation files
├── public/                       # Static assets
├── docs/                         # Documentation
└── sanity.config.ts             # Sanity configuration
```

## Content Management

### Creating Content

1. Go to `/id/admin` (or your preferred language admin path)
2. Click on a content type (Events, Sermons, News, etc.)
3. Create new document
4. Fill in fields in your language
5. Click Publish

### Supported Content Types

- **Events**: Upcoming services and activities
- **Sermons**: Audio/video messages with transcripts
- **News Articles**: Community updates and announcements
- **Schedule**: Weekly service times
- **Donation Settings**: Payment methods and thank you messages

## Multi-Language Support

The site supports three languages:
- **Indonesian** (id) - Default
- **English** (en)
- **French** (fr)

All localized content uses the `localizedString` type in Sanity. Users can switch languages using the language selector in the header, and URL updates accordingly (e.g., `/id/events` → `/en/events`).

## SEO & Performance

- Automatic sitemap generation
- Dynamic Open Graph tags for social sharing
- Structured data (JSON-LD) for search engines
- Image optimization with Next.js Image component
- Incremental Static Regeneration for fast updates
- Security headers (CSP, X-Frame-Options, etc.)

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repo to Vercel at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_API_TOKEN`
4. Deploy!

Automatic deployments trigger on push to main branch.

## Documentation

- **[SETUP.md](./SETUP.md)** - Initial setup and configuration
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide and best practices
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment instructions
- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Detailed architecture overview

## Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm dev:sanity      # Run Sanity dev server (if separate)

# Building
pnpm build           # Build for production
pnpm start           # Start production server

# Quality
pnpm lint            # Run ESLint
pnpm type-check      # TypeScript type checking
pnpm format          # Format code with Prettier
```

## Environment Variables

See `.env.example` for all required and optional variables:

```env
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token

# Optional
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The site follows WCAG 2.1 Level AA guidelines:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Performance

Lighthouse scores target:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

## Security

- Security headers configured (CSP, X-Frame-Options, etc.)
- API token stored server-side only
- Input validation on forms
- CORS configured appropriately

## Team Roles

### Content Editors
- Access Sanity Studio at `/admin`
- Create and publish content
- No coding knowledge required
- Manage translations

### Developers
- Modify components and pages
- Update schemas in `src/sanity/schema/`
- Deploy to production
- Monitor performance

## Troubleshooting

### Page not loading
- Check `.env.local` has correct variables
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)

### Sanity connection error
- Verify `SANITY_API_TOKEN` is valid
- Check project ID matches
- Ensure dataset exists

### Build failures
- Clear `.next` directory: `rm -rf .next`
- Reinstall packages: `pnpm install`
- Check for TypeScript errors: `pnpm type-check`

## Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Make changes
3. Test locally: `pnpm dev`
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open Pull Request

## License

This project is proprietary and confidential.

## Support

For issues and questions:
- Check documentation in `/docs`
- Review DEVELOPMENT.md for common tasks
- Contact the development team

## Roadmap

- [ ] Payment integration (Stripe)
- [ ] Member portal
- [ ] Prayer request system
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Chat/messaging system

---

Built with ❤️ for faith communities
