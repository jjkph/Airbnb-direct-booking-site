# Quick Update Guide - Hollywood Sunset on the Water

## 🎯 Your Airbnb Property
**URL:** https://www.airbnb.com/h/hollywoodsunsetonthewater

## ⚡ Essential Updates (Do These First!)

### 1. Get Your Airbnb Property Photos
1. Go to your Airbnb listing
2. Right-click on each photo > "Copy Image Address"
3. Save these URLs in a text file

### 2. Get Your Airbnb Property Description
Copy the full description from your Airbnb listing to use in the website

### 3. Get Your Reviews
Copy 5-10 of your best Airbnb reviews (guest name, date, rating, review text)

## 📝 Files to Edit (In Order)

### Step 1: Hero Section
**File:** `src/components/HeroSection.js`
- **Line 45:** Replace hero image URL with your best property photo
- **Line 57:** Update headline if desired (currently: "Your Private Waterfront Retreat")
- **Line 60-64:** Update description with your property's unique selling points

### Step 2: Property Overview
**File:** `src/components/PropertyOverview.js`
- **Line 16-29:** Replace with your Airbnb description
- **Line 51:** Add number of bedrooms
- **Line 51:** Add number of bathrooms  
- **Line 51:** Add guest capacity
- Update all property highlight descriptions

### Step 3: Photo Gallery
**File:** `src/components/PhotoGallery.js`
- **Lines 6-39:** Replace all 8 image URLs with your property photos
- Update titles and categories for each image
- You can add more images by copying the object structure

Categories available: 'Exterior', 'Interior', 'Amenities', 'Views'

### Step 4: Amenities
**File:** `src/components/Amenities.js`
- **Lines 5-42:** Update all amenity items to match what your property offers
- Match your Airbnb amenities list
- Keep categories or create your own

### Step 5: Reviews
**File:** `src/components/Reviews.js`
- **Lines 5-54:** Replace with real reviews from your Airbnb
- Keep the 5-star format or update ratings as needed
- Use guest first names and last initial for privacy

### Step 6: Contact Information
**Files:** `src/components/ContactSection.js` AND `src/components/Footer.js`

Update in BOTH files:
- Your actual email address (replace `your-email@example.com`)
- Your actual phone number (replace `+1 (123) 456-7890`)
- Your complete property address
- Your ZIP code

### Step 7: Page Title
**File:** `public/index.html`
- **Line 12:** Update page title
- **Line 9:** Update meta description

### Step 8: Navigation & Footer
**File:** `src/components/Navigation.js`
- **Line 23:** Update brand name if different

**File:** `src/components/Footer.js`
- **Line 20:** Update brand name if different
- **Line 20-24:** Update footer description

## 🔧 After Making Changes

```bash
# In terminal, run:
cd /app/frontend
yarn build

# The updated site will be in the /build folder
# Upload this folder to your hosting service
```

## 📋 Content Checklist

Use your Airbnb listing to fill in:

- [ ] 8+ High-quality photos (exterior, interior, amenities, views)
- [ ] Property name/title
- [ ] Full property description (2-3 paragraphs)
- [ ] Number of bedrooms: ____
- [ ] Number of bathrooms: ____
- [ ] Guest capacity: ____
- [ ] Complete amenities list
- [ ] 5-10 Best guest reviews
- [ ] Contact email: ____
- [ ] Contact phone: ____
- [ ] Full property address: ____
- [ ] ZIP code: ____

## 🎨 Optional Customization

### Change the Property Name Throughout
Search and replace "Hollywood Sunset on the Water" with your property name in all files.

### Adjust Colors
**File:** `src/App.css`
- Line 10-13: Background colors
- Line 16-19: Text colors
- Line 22-25: Interactive element colors

Keep the warm, luxury aesthetic for best results.

## 💡 Pro Tips

1. **Image Quality:** Use high-resolution photos (at least 1200px wide)
2. **Descriptions:** Be descriptive and highlight unique features
3. **Reviews:** Choose reviews that mention specific amenities or experiences
4. **Contact Form:** Test that the mailto links work after updating email
5. **Mobile Testing:** Check how your photos look on mobile devices

## 🚨 Common Mistakes to Avoid

- ❌ Don't forget to update contact info in BOTH ContactSection.js and Footer.js
- ❌ Don't use very large image files (compress them first)
- ❌ Don't forget to rebuild (`yarn build`) after making changes
- ❌ Don't change the iGMS widget listing ID unless you need to
- ❌ Don't modify the CSS unless you understand the design system

## 🎉 You're Ready!

Once you've updated all these files with your actual property information:

1. Run `yarn build`
2. Upload the `/build` folder to your hosting
3. Test everything works
4. Share your direct booking website!

---

**Need help?** Refer to the README_DEPLOYMENT.md file for detailed instructions.
