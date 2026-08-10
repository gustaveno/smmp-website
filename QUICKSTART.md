# Quick Start Guide

Get the Congregation website up and running in 10 minutes!

## 1. Prerequisites (2 min)

Before you start, make sure you have:
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- pnpm installed (`npm install -g pnpm`)
- Sanity account ([sanity.io](https://www.sanity.io))
- GitHub account (for deployment)

## 2. Clone & Install (2 min)

```bash
# Clone the repository
git clone <your-repo-url>
cd congregation-website

# Install dependencies
pnpm install
```

If you see warnings about peer dependencies, you can ignore them.

## 3. Setup Sanity (2 min)

### Get Your Sanity Credentials

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project or select existing one
3. Copy your **Project ID** (looks like "abc123xyz")
4. Go to API Tokens section and create/copy a token

### Create Environment File

```bash
# Create .env.local file
cp .env.example .env.local
```

### Fill in Environment Variables

Edit `.env.local` and add your Sanity details:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token_here
```

**Don't have a project yet?**
1. Visit [sanity.io/create](https://sanity.io/create)
2. Create "Clean project"
3. Save the Project ID

## 4. Start Development (1 min)

```bash
pnpm dev
```

This starts your local development server.

## 5. Open in Browser (1 min)

- **Website**: http://localhost:3000
- **Admin/CMS**: http://localhost:3000/id/admin
- **English Version**: http://localhost:3000/en
- **French Version**: http://localhost:3000/fr

You should now see the website loading!

## 6. Create Your First Content (2 min)

1. Go to http://localhost:3000/id/admin
2. Click **"Create"** → **"Event"**
3. Fill in:
   - **Title**: "Welcome Service" (English)
   - **Date**: Pick a date
   - **Time**: "10:00 AM"
4. Click **"Publish"**
5. Go to http://localhost:3000/id/events
6. Your event should appear!

## Common Tasks

### Add Content in Multiple Languages

When you see a field with 3 boxes (id, en, fr):
- Box 1 (id) = Indonesian
- Box 2 (en) = English
- Box 3 (fr) = French

Fill all three and your content appears in each language.

### Switch Languages on Website

Top right of the website, click **ID**, **EN**, or **FR** to switch.

### Update Website Styles

Edit `app/globals.css` to change colors and fonts.

### Add New Page

1. Create folder in `app/[locale]/new-page/`
2. Create `page.tsx` file
3. Add translations to `src/messages/[locale].json`
4. Update navigation in `src/components/common/Navigation.tsx`

## Deploy to Production

When you're ready to go live:

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial setup"
   git push
   ```

2. Go to [vercel.com/new](https://vercel.com/new)

3. Import your GitHub repository

4. Add environment variables (same as `.env.local`)

5. Click "Deploy"

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Troubleshooting

### "Cannot find SANITY_PROJECT_ID"
- Check `.env.local` exists
- Verify you filled in all variables
- Restart dev server: `pnpm dev`

### Admin page won't load
- Make sure you go to `/id/admin` (not just `/admin`)
- Check .env.local has your Sanity credentials
- Hard refresh browser (Ctrl+Shift+R)

### Images not showing
- Ensure image files are under 5MB
- Try JPG instead of PNG
- Check internet connection

### Content not appearing on site
- Click "Publish" in Sanity (don't just "Save")
- Wait 10 seconds for cache
- Hard refresh browser

## Next Steps

- **Edit Content**: Go to `/id/admin` and start creating!
- **Customize Design**: Edit colors in `app/globals.css`
- **Add Pages**: Create new route folders
- **Learn More**: Read [DEVELOPMENT.md](./DEVELOPMENT.md)
- **Deploy**: Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

## File Structure Overview

```
congregation-website/
├── app/                    # Website pages & routes
├── src/
│   ├── components/         # React components
│   ├── sanity/             # Content types & schema
│   └── messages/           # Translations
├── .env.local              # Your credentials (DO NOT commit)
├── .env.example            # Template (commit this)
├── README.md               # Project overview
├── SETUP.md                # Full setup guide
├── DEVELOPMENT.md          # Development guide
└── DEPLOYMENT.md           # Deploy to production
```

## Need Help?

1. Check [README.md](./README.md) for project overview
2. See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed guides
3. Read [SANITY_GUIDE.md](./SANITY_GUIDE.md) for content editing
4. Check error messages in browser console (F12)

## Key Keyboard Shortcuts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `Ctrl+Shift+R` - Hard refresh browser
- `F12` - Open browser developer tools
- `Ctrl+S` - Save in Sanity editor

---

**You're all set!** Start creating content and building your congregation's web presence. 🎉
