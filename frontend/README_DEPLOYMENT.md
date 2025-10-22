# Hollywood Sunset on the Water - Direct Booking Website

## 📋 Overview

This is a luxury, self-hostable static website for your Airbnb property with integrated iGMS booking functionality. The website features:

- ✨ Luxury hotel-inspired design with warm neutral color palette
- 🏠 Split-layout hero section with property showcase and iGMS booking widget
- 📸 Interactive photo gallery with category filtering
- 🌟 Amenities showcase and guest reviews
- 📧 Contact form with mailto functionality
- 📱 Fully responsive (mobile, tablet, desktop)

## 🚀 Quick Start - Self Hosting

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload the contents of the `/build` folder
3. Go to Settings > Pages > Deploy from branch (main)
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop the `/build` folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free)
1. Sign up at vercel.com
2. Import from GitHub or upload the `/build` folder
3. Deploy with one click

### Option 4: Your Own Server
Upload the `/build` folder contents to your web server's public directory (e.g., `public_html`, `www`)

## 📝 Customization Guide

### 1. Update Property Information

**Location:** `/src/components/PropertyOverview.js`

Replace the placeholder text with your actual property details:
- Property description
- Number of bedrooms/bathrooms
- Guest capacity
- Location details

Example:
```javascript
<p className="body-small" style={{ marginLeft: '52px' }}>
  4 bedrooms, 3 bathrooms • Sleeps 10 guests comfortably
</p>
```

### 2. Replace Property Images

**Location:** `/src/components/PhotoGallery.js` and `/src/components/HeroSection.js`

Current images are high-quality placeholders. Replace them with your actual property photos:

```javascript
const images = [
  {
    url: 'YOUR_IMAGE_URL_HERE',
    title: 'Your Photo Title',
    category: 'Exterior' // or 'Interior', 'Amenities', 'Views'
  },
  // Add more images...
];
```

**Hero Image:** In `/src/components/HeroSection.js`, replace:
```javascript
<img src="YOUR_MAIN_HERO_IMAGE_URL" alt="Hollywood Sunset on the Water" />
```

### 3. Update Amenities

**Location:** `/src/components/Amenities.js`

Customize the amenities list to match your property:

```javascript
const amenitiesList = [
  {
    category: 'Comfort & Relaxation',
    items: [
      'Your amenity 1',
      'Your amenity 2',
      // Add your amenities...
    ]
  },
  // Add more categories...
];
```

### 4. Add Real Reviews (Optional)

**Location:** `/src/components/Reviews.js`

Replace placeholder reviews with actual Airbnb guest reviews:

```javascript
const reviews = [
  {
    name: 'Guest Name',
    date: 'Month Year',
    rating: 5,
    comment: 'Actual review text from your Airbnb listing',
    avatar: 'GN' // Guest initials
  },
  // Add more reviews...
];
```

### 5. Update Contact Information

**Location:** `/src/components/ContactSection.js` and `/src/components/Footer.js`

Replace placeholder contact details:
```javascript
href="mailto:your-actual-email@example.com"
href="tel:+1YOURNUMBER"
```

Update the address in both files:
```javascript
<p>
  Your Actual Address<br />
  Hollywood, FL [Your ZIP]
</p>
```

### 6. Property Title & Meta Information

**Location:** `/public/index.html`

Update the page title and meta description:
```html
<title>Your Property Name | Luxury Waterfront Retreat</title>
<meta name="description" content="Your custom description here" />
```

### 7. iGMS Widget Configuration

**Location:** `/src/components/HeroSection.js`

Your iGMS widget is already configured with:
```javascript
data-listing-id="d9dc4160-f346-4f50-92d1-e3583fbe19fa"
data-widget-color="#333333"
```

If you need to change the widget settings:
- Login to your iGMS dashboard
- Get your widget code
- Replace the `data-listing-id` with your property ID

### 8. Custom Branding

**Logo/Brand Name:** Update in `/src/components/Navigation.js` and `/src/components/Footer.js`:
```javascript
<a href="#home" className="navigation-logo">
  Your Property Name
</a>
```

## 🎨 Design System

The website uses a luxury minimalist design system with:

### Colors
- Background: Warm white (#fffef2)
- Text: Rich dark (#333333)
- Accents: Minimal black borders
- No bright colors - maintains sophistication

### Typography
- Clean, modern sans-serif fonts
- Generous spacing and readable sizes
- Elegant hierarchy

### Buttons
- Sharp rectangular design (0px border radius)
- Transparent with black borders
- Hover effect: filled black background

## 🔧 Development Commands

If you need to make changes and rebuild:

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# The production files will be in the /build folder
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (375px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1400px and up)

## 🔐 Important Notes

1. **Email Configuration:** The contact form uses `mailto:` links. Update the email address to receive inquiries.

2. **Image Optimization:** For best performance, use:
   - WebP or JPEG format
   - Compressed images (use tools like TinyPNG)
   - Recommended sizes: 1200px width for gallery images

3. **iGMS Widget:** The widget automatically handles:
   - Availability checking
   - Booking requests
   - Payment processing through your Stripe account

4. **SEO:** After deployment:
   - Submit your sitemap to Google Search Console
   - Add Google Analytics (optional)
   - Verify all meta tags are updated

## 📞 Support & Questions

For technical questions about:
- **iGMS Integration:** Contact iGMS support at support@igms.com
- **Website Customization:** Refer to React documentation at reactjs.org
- **Hosting Issues:** Contact your hosting provider's support

## 📂 File Structure

```
/build (production files - deploy this folder)
  /static
    /css - Compiled styles
    /js - Compiled JavaScript
  index.html - Main HTML file

/src (source files - edit these to customize)
  /components
    Navigation.js
    HeroSection.js
    PropertyOverview.js
    PhotoGallery.js
    Amenities.js
    Reviews.js
    ContactSection.js
    Footer.js
  App.js - Main application file
  App.css - Global styles
  index.css - Root styles
```

## ✅ Pre-Deployment Checklist

Before deploying, make sure you've updated:

- [ ] Property description and details
- [ ] All placeholder images with your actual photos
- [ ] Amenities list
- [ ] Contact email and phone number
- [ ] Property address
- [ ] Guest reviews (or remove placeholder reviews)
- [ ] Page title and meta description
- [ ] iGMS widget listing ID (if different)
- [ ] Navigation brand name

## 🎉 Launch Your Site

Once you've customized everything:

1. Run `yarn build` to create production files
2. Upload the `/build` folder to your chosen hosting platform
3. Test all functionality (navigation, forms, booking widget)
4. Share your direct booking website with guests!

---

**Built with React, designed for luxury, optimized for conversions.**

For video background implementation or advanced features in the future, the codebase is structured to easily accommodate enhancements.
