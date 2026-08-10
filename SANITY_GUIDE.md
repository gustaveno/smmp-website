# Sanity CMS Content Editor Guide

A guide for content editors managing the Congregation website through Sanity Studio.

## Accessing Sanity Studio

### Local Development
1. Start dev server: `pnpm dev`
2. Open browser to: `http://localhost:3000/id/admin`
3. Log in with your Sanity account

### Production
- Visit: `https://yoursite.com/[locale]/admin`
- Replace `[locale]` with your preferred language (id, en, or fr)

## Content Types & How to Use

### 1. Events

Create upcoming services and activities.

**Fields:**
- **Title** (Required, Localized) - Event name in multiple languages
- **Slug** (Required) - Auto-generated URL-friendly name
- **Description** (Localized) - Brief summary of the event
- **Date** (Required) - When the event occurs
- **Time** - What time the event starts (e.g., "10:00 AM")
- **Location** (Localized) - Where the event takes place
- **Attendee Count** - Expected number of attendees
- **Featured Image** - Banner image for the event
- **Content** - Detailed event information
- **SEO** - Meta tags for search engines

**How to Create:**
1. Click "Event" in the studio sidebar
2. Click "Create"
3. Fill in all required fields (marked with *)
4. Add translations for title, description, location
5. Click "Publish"

**Tips:**
- Use clear, concise titles
- Include time zone in time field if not obvious
- Add high-quality featured images (1200x630px recommended)
- Fill in SEO fields for better search visibility

---

### 2. Sermons

Share preached messages with audio and video.

**Fields:**
- **Title** (Required, Localized) - Sermon title
- **Slug** (Required) - URL-friendly identifier
- **Speaker** - Name of the person delivering the sermon
- **Date** (Required) - When the sermon was delivered
- **Series** (Localized) - Sermon series or theme (e.g., "Faith in Action")
- **Description** (Localized) - Brief summary
- **Audio URL** - Link to audio file (MP3 or streaming service)
- **Video URL** - Link to video (YouTube, Vimeo, etc.)
- **Transcript** - Full text of the sermon
- **Featured Image** - Cover image
- **Content** - Additional notes or text
- **SEO** - Meta information

**How to Create:**
1. Click "Sermon" in sidebar
2. Click "Create"
3. Fill in title, speaker, and date
4. Paste media URLs (from YouTube, audio hosting, etc.)
5. Add localized content for each language
6. Click "Publish"

**Audio/Video Hosting Options:**
- **Audio**: Soundcloud, Anchor, Podbean, or direct MP3 URL
- **Video**: YouTube, Vimeo, or streaming service
- Ensure media is publicly accessible

**Tips:**
- Use descriptive series names for organization
- Include full sermon transcript if available (helps SEO)
- YouTube embedding is recommended for videos
- Test links before publishing

---

### 3. News Articles

Share community updates and announcements.

**Fields:**
- **Title** (Required, Localized) - Article headline
- **Slug** (Required) - URL identifier
- **Excerpt** (Localized) - Summary for listing pages
- **Body** (Localized) - Full article text
- **Featured Image** - Hero image for the article
- **Author** - Who wrote the article
- **Published Date** (Required) - When to show the article
- **Category** - Type of news (News, Announcement, Blog, Update)
- **SEO** - Meta information

**How to Create:**
1. Click "News Article" in sidebar
2. Click "Create"
3. Enter title and publication date
4. Write content in all languages
5. Select a category
6. Publish

**Categories:**
- **News** - General community news
- **Announcement** - Important announcements
- **Blog** - Longer-form posts
- **Update** - Quick updates or reports

**Tips:**
- Write compelling excerpts that encourage clicks
- Add featured images to make articles visually appealing
- Keep titles under 60 characters for search results
- Use clear, simple language
- Publish in advance if you want scheduled content

---

### 4. Service Schedule

Define your weekly worship and activity schedule.

**Fields:**
- **Activity Name** (Required, Localized) - What is this service? (e.g., "Sunday Worship")
- **Day of Week** (Required) - Which day (Monday-Sunday)
- **Time** (Required) - What time (e.g., "10:00 AM")
- **Location** (Localized) - Optional: specific room or building
- **Is Recurring** - Check if this repeats every week

**How to Create:**
1. Click "Service Schedule" in sidebar
2. Click "Create"
3. Enter activity name in each language
4. Select day of week and time
5. Check "Is Recurring" if it repeats weekly
6. Publish

**Example Schedule:**
- Sunday Worship Service - Sunday - 10:00 AM - Recurring: Yes
- Prayer Meeting - Wednesday - 7:00 PM - Recurring: Yes
- Youth Group - Friday - 6:00 PM - Recurring: Yes
- Bible Study - Tuesday - 6:30 PM - Recurring: Yes

**Tips:**
- Use consistent naming across languages
- Set times in 12-hour format for clarity (10:00 AM, not 10:00)
- Enable recurring for regular services
- Update location if your services move

---

### 5. Donation Settings

Configure how people can donate to your congregation.

**Fields:**
- **Bank Account Info** - Banking details for transfers (private)
- **Payment Methods** - Which methods are available
- **Suggested Donation Amounts** - Quick-select options ($25, $50, $100, etc.)
- **Thank You Message** (Localized) - Message shown after donation
- **Privacy Policy** - Link to your privacy/donation policy

**How to Edit:**
1. Click "Donation Settings" in sidebar
2. The single document shows your current settings
3. Update payment methods available
4. Set suggested amounts
5. Enter thank you message in all languages
6. Publish

**Supported Payment Methods:**
- Bank Transfer
- Credit Card
- PayPal
- Cryptocurrency
- Mobile Payment

**Tips:**
- Be transparent about how donations are used
- Include multiple payment options
- Set realistic suggested amounts for your community
- Provide privacy reassurance
- Keep thank you message warm and appreciative

---

### 6. Site Settings

Global configuration for your website (admin team only).

**Fields:**
- **Organization Name** (Localized)
- **Logo** - Your church/organization logo
- **Contact Email** (Required)
- **Phone Number**
- **Address** (Localized)
- **Opening Hours** (Localized)
- **Social Media Links** - Facebook, Twitter, Instagram, etc.
- **Navigation Menu** - Links in the header
- **Footer Content** (Localized)

**How to Edit:**
1. Click "Site Settings" in sidebar
2. Edit information as needed
3. Add/remove social media accounts
4. Update navigation links
5. Publish changes

**Tips:**
- Keep contact information up to date
- Add all social media accounts your community uses
- Update opening hours seasonally
- Include address for location-based searches
- Navigation links should match your main pages

---

## Working with Localized Content

### What is "Localized"?

Some fields appear in multiple languages: Indonesian (id), English (en), and French (fr).

When you see a field marked "Localized," you'll see three text boxes for each language.

**Example:**
```
Title
├─ id: "Kebaktian Minggu"
├─ en: "Sunday Service"
└─ fr: "Service du Dimanche"
```

### How to Fill Localized Fields

1. Fill in the Indonesian field first
2. Tab or click to the English field
3. Translate or enter English version
4. Tab to French field
5. Translate or enter French version

**Important:** All languages should have content when you publish. If you only speak one language:
- Fill your primary language fully
- Use Google Translate for other languages
- Have team members review translations if possible

---

## Media & Images

### Image Requirements

- **Featured Images**: 1200 x 630 pixels (landscape format)
- **File Format**: JPG or PNG
- **File Size**: Under 5MB for best performance
- **Format**: Save as JPG for photos, PNG for graphics

### Uploading Images

1. Click on the image field
2. Click "Upload image"
3. Select file from your computer
4. Add alt text (describes the image)
5. Click "Confirm"

### Image Tips

- Use high-quality, bright images
- Avoid cluttered backgrounds
- Make sure text in images is legible
- Include people and faces when appropriate
- Use consistent style across the site

### External Media (Audio/Video)

For audio and video:
1. Host on YouTube, Soundcloud, Vimeo, etc.
2. Copy the public URL
3. Paste into the Audio URL or Video URL field

Example URLs:
- YouTube: `https://youtu.be/dQw4w9WgXcQ`
- Soundcloud: `https://soundcloud.com/user/track`

---

## SEO Fields

Every content type has SEO fields to help search engines understand your content.

### Fields

- **SEO Title** (60 characters) - What appears in Google search results
- **SEO Description** (160 characters) - The snippet under the title
- **Keywords** - List of words describing your content
- **OG Image** - Image for social sharing

### Example

**Content:** New Easter Service
- **SEO Title**: "Easter Sunday Service 2024 - [Your Church]"
- **SEO Description**: "Join us for a special Easter service with music, message, and celebration"
- **Keywords**: easter, service, worship, church
- **OG Image**: Easter service banner image

### Tips

- Write naturally, not keyword-stuffed
- Use your organization name in the title when possible
- Be descriptive and specific
- Keep titles and descriptions within character limits
- Use commas to separate keywords

---

## Publishing & Scheduling

### Publish Button

After filling in all fields:
1. Click "Publish" button (top right)
2. Content goes live immediately
3. Changes appear on the website within seconds

### Status Indicators

- **Draft** - Not yet published, only visible to editors
- **Published** - Live on the website
- **Unpublished** - Was published, now hidden

### Scheduling

- Set the "Published Date" field to future dates
- Content won't appear until that date
- Useful for planning ahead

---

## Troubleshooting

### "Cannot Publish - Required Field Missing"
- Check all fields marked with * (required)
- Ensure you've filled the field in at least one language
- Look for red error messages

### "Image Won't Upload"
- Check file size (under 5MB)
- Try a different image format (JPG instead of PNG)
- Clear browser cache and try again

### "Changes Not Appearing on Website"
- Wait 10-30 seconds for cache to clear
- Hard refresh browser (Ctrl+Shift+R)
- Check that you clicked "Publish"

### "Content in Wrong Language"
- Verify you're editing the correct language field
- Check browser language isn't auto-translating
- Use a different browser if issues persist

---

## Best Practices

✅ **DO:**
- Fill in all languages, even if using translation tools
- Use clear, descriptive titles
- Add high-quality images to every piece of content
- Include key dates and times clearly
- Publish at least a week in advance for big announcements

❌ **DON'T:**
- Leave content in draft form if you want it visible
- Publish low-quality or unclear images
- Use ALL CAPS for entire titles
- Abbreviate unclear (e.g., "msg" instead of "message")
- Mix languages in a single field

---

## Getting Help

- Hover over any field for helpful hints
- Click "?" icon for more information
- Check documentation: `/docs/SANITY_GUIDE.md`
- Contact your development team for technical issues

---

## Keyboard Shortcuts

- `Ctrl+S` or `Cmd+S` - Save draft
- `Tab` - Move to next field
- `Shift+Tab` - Move to previous field
- `Ctrl+Enter` or `Cmd+Enter` - Publish

---

Thank you for keeping our community connected online!
