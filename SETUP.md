# Setup Guide - Congregation Website

## Prerequisites

- Node.js 18+ and pnpm
- Sanity account and project
- Vercel account (for deployment)
- GitHub account (for version control)

## 1. Initial Setup

### Clone and Install

```bash
git clone <your-repo>
cd congregation-website
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Usually `production`
- `NEXT_PUBLIC_SANITY_API_VERSION` - Set to `2024-01-01`
- `SANITY_API_TOKEN` - Your Sanity API token for mutations

Get these from:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create or select your project
3. Find Project ID in settings
4. Generate API token in API tokens section

## 2. Sanity Setup

### Create Sanity Project

1. Visit [sanity.io/create](https://sanity.io/create)
2. Create a new project
3. Choose "Clean project" template
4. Save your Project ID

### Initialize Sanity in Your Project

The Sanity configuration is already set up in `sanity.config.ts`. 

### Deploy Sanity Schema

The schema is already defined in `src/sanity/schema/`. The schemas will be deployed automatically when you run the dev server or build.

## 3. Development

### Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

### Access Sanity Studio

- Navigate to `http://localhost:3000/id/admin`
- Sanity Studio is embedded in the Next.js app
- Create your first content here

### Testing Content

1. Go to `/id/admin` (or any locale like `/en/admin`)
2. Create an Event, Sermon, News Article
3. View the content on the public pages

## 4. Deployment to Vercel

### Connect GitHub Repository

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository

### Set Environment Variables in Vercel

In your Vercel project settings:

1. Go to Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_API_TOKEN`

### Deploy

- Push to main branch → Automatic deployment
- Vercel will build and deploy your site

## 5. Configure ISR (Incremental Static Regeneration)

### Setup Sanity Webhook

1. In Sanity dashboard, go to API → Webhooks
2. Create new webhook:
   - URL: `https://yourdomain.com/api/revalidate`
   - Include events: Publish, Unpublish
3. Set API token with "Editor" or "Viewer" role

When content is published in Sanity, it automatically revalidates the cached pages.

## 6. Troubleshooting

### "Project ID not found"
- Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Sanity project must exist in your account

### "Cannot connect to Sanity"
- Verify `SANITY_API_TOKEN` is valid
- Token must have appropriate permissions
- Check dataset name matches

### Admin page not loading
- Ensure you're accessing `/[locale]/admin` (e.g., `/id/admin`)
- Environment variables must be set
- Hard refresh the page (Ctrl+Shift+R)

### Build errors with Sanity
- Clear `.next` directory: `rm -rf .next`
- Reinstall packages: `pnpm install`
- Rebuild: `pnpm build`

## 7. Next Steps

1. **Customize Styling**: Update `src/styles/globals.css` and Tailwind config
2. **Add More Content Types**: Create schemas in `src/sanity/schema/documents/`
3. **Build Components**: Create React components in `src/components/`
4. **Add Features**: Implement donation processing, newsletters, etc.
5. **Test SEO**: Use Google Search Console to verify indexing
6. **Analytics**: Add Google Analytics or similar

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app)
- [Tailwind CSS](https://tailwindcss.com/docs)
