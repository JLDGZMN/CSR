# Voxly Careers - Production-Ready Call Center Website

A modern, responsive call center/BPO hiring website built with semantic HTML, professional CSS, and vanilla JavaScript.

## 🎯 Project Overview

**Website Name:** Voxly Careers  
**Purpose:** Online recruitment platform for call center and BPO positions  
**Location:** Pateros City, Philippines  
**Status:** Production-Ready  

## 📋 Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Modern UI/UX** - Premium color palette (navy, violet, teal)  
✅ **Smooth Navigation** - Active nav states, smooth scrolling, mobile hamburger menu  
✅ **Hero Section** - Eye-catching hero with call-to-action buttons  
✅ **Application Form** - Complete validation and success messaging  
✅ **Multiple Sections** - Home, About, Services, Careers, Apply, Contact  
✅ **Animations** - Subtle, professional scroll animations  
✅ **Accessibility** - Semantic HTML, keyboard navigation, focus states  
✅ **Performance** - Optimized images, efficient CSS, vanilla JavaScript  

## 📁 File Structure

```
CSR/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎨 Color Palette

| Purpose | Color | Hex Code |
|---------|-------|----------|
| Primary (Violet) | Electric Violet | #6b5b95 |
| Accent (Teal) | Cyan/Teal | #00d4ff |
| Dark Background | Deep Navy | #0f1b3c |
| Dark Alt | Navy Alt | #1a2d5a |
| Light Background | Soft White | #f8f9fa |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required
- No build tools needed

### Installation

1. **Clone or download the project**
   ```
   C:\Users\A\Desktop\CSR\
   ```

2. **Open in browser**
   - Double-click `index.html` OR
   - Right-click → Open with → Browser OR
   - Use a local server (recommended for production):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Access the site**
   - Local file: `file:///path/to/CSR/index.html`
   - Server: `http://localhost:8000`

## 📖 Website Sections

### 1. **Hero Section**
- Large eye-catching headline: "WE CONNECT YOU TO MORE OPPORTUNITIES"
- Supporting tagline: "Apply na, Ano tara?"
- Prominent CTA buttons (Apply Online, View Open Roles)
- Professional background gradient

### 2. **Features Strip**
- 4 feature cards showcasing key benefits:
  - 24/7 Customer Support
  - Beginner-Friendly Training
  - Career Growth
  - Secure & Reliable Workplace

### 3. **About Us**
- Company description and mission
- Statistics display (500+ Team Members, 10+ Years, 50+ Clients)
- Responsive grid layout

### 4. **Services**
- 4 service offerings:
  - Inbound Customer Support
  - Technical Support
  - Sales Support
  - Back Office Assistance
- Hover animations and gradient accents

### 5. **Careers**
- 4 open positions with detailed descriptions:
  - Customer Service Representative
  - Technical Support Representative
  - Sales Support Agent
  - Team Leader

### 6. **Apply Online**
- Comprehensive application form with fields:
  - Full Name
  - Email Address
  - Phone Number
  - Desired Position (dropdown)
  - Work Experience Level (dropdown)
  - Resume Upload (with drag-drop support)
  - Message/Additional Information
- Form validation with error messages
- Success message display after submission
- No backend required (frontend-only)

### 7. **Contact**
- Contact information display
- Contact form with validation
- Business hours and location details

## 🔧 Functionality

### Navigation
- **Sticky header** with logo and navigation links
- **Active state** highlighting for current section
- **Mobile hamburger menu** for screens < 768px
- **Smooth scroll** to sections on link click
- **Keyboard support** (Escape closes mobile menu)

### Form Validation
The application form includes robust validation for:
- ✓ Full name (minimum 2 characters)
- ✓ Email format validation
- ✓ Phone number format
- ✓ Required field selection
- ✓ Resume file upload (PDF/DOC/DOCX only)
- ✓ File size limit (5MB max)

### Animations
- Fade-in on scroll
- Slide-up for hero elements
- Scale animations for cards
- Hover effects on interactive elements
- Smooth transitions throughout

## 💻 Responsive Breakpoints

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Desktop | 1200px+ | No mobile menu |
| Tablet | 768px - 1199px | Responsive grid |
| Mobile | < 768px | Hamburger menu, single column |
| Small Mobile | < 480px | Optimized spacing |

## 📝 Content Information

**Business Details:**
- **Location:** Pateros City, Philippines
- **Phone:** +63 955 568 6062
- **Email:** careers@voxly.ph
- **Hours:** Mon - Sat: 8:00am - 5:00pm

**Hero Subtext:**
"Start your career in a supportive call center environment with training, growth opportunities, and a team that helps you succeed."

## ⚙️ Technical Details

### HTML
- Semantic HTML5 elements
- Accessible form labels
- Proper meta tags
- Font preload optimization

### CSS
- CSS Grid and Flexbox layouts
- CSS Variables for easy customization
- Media queries for responsiveness
- Gradient backgrounds
- Smooth transitions and animations
- Accessibility-focused (focus states, reduced motion support)

### JavaScript
- Vanilla JavaScript (no dependencies)
- Form validation logic
- Mobile menu toggle
- Smooth scroll behavior
- Intersection Observer for animations
- File upload handling with drag-drop
- Error and success messaging

## 🎯 Key Features to Customize

### Colors
Edit CSS variables in `styles.css` (lines 7-18):
```css
:root {
    --color-primary: #6b5b95;    /* Change primary color */
    --color-accent: #00d4ff;     /* Change accent color */
    --color-dark: #0f1b3c;       /* Change dark background */
    /* ... more colors ... */
}
```

### Content
All content is in `index.html`. Simply edit:
- Navigation links (header section)
- Hero headline and tagline
- Section content
- Form labels and options
- Contact information

### Fonts
Fonts are imported from Google Fonts. To change:
- Primary display: `Poppins` (currently sans-serif)
- Body text: `Inter` (currently sans-serif)

Edit the `<link>` tags in `index.html` head section.

## 🔒 Security Notes

**Client-Side Only:**
- Form submission is handled entirely on the frontend
- No backend required for basic functionality
- For production use, implement backend validation and secure submission

**Form Data Handling:**
- Current implementation shows success message but doesn't send data anywhere
- To integrate with backend: Modify the `handleFormSubmit()` function in `script.js` to send data to your server

## 📱 Browser Support

✅ Chrome/Chromium (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  

## 🚀 Deployment

### Deploy to GitHub Pages
```bash
# Push to gh-pages branch
git subtree push --prefix CSR origin gh-pages
```

### Deploy to Netlify
1. Drag and drop the `CSR` folder to Netlify
2. Site goes live instantly

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in root directory
3. No special server configuration needed

## 📊 Performance

- **Fully responsive** - Works on all screen sizes
- **Fast loading** - No external dependencies except fonts
- **Optimized animations** - Uses CSS transforms for performance
- **Accessible** - WCAG 2.1 compliant where applicable
- **SEO-friendly** - Semantic HTML, proper heading hierarchy

## 🎓 Learning Resources

This project demonstrates:
- Modern HTML5 semantic structure
- Professional CSS3 with Grid & Flexbox
- Vanilla JavaScript best practices
- Form validation patterns
- Responsive design principles
- Accessibility best practices
- Animation techniques

## 📞 Contact & Support

For inquiries or modifications:
- **Phone:** +63 955 568 6062
- **Email:** careers@voxly.ph
- **Location:** Pateros City, Philippines

## 📄 License

This website template is provided as-is for use by Voxly Careers. All rights reserved.

## ✨ Credits

**Design & Development:** Professional Web Development  
**Framework:** Vanilla HTML/CSS/JavaScript  
**Fonts:** Google Fonts (Poppins, Inter)  
**Icons:** Unicode Emoji  

---

## 🛠️ Troubleshooting

### Form not submitting?
- Check browser console for errors (F12)
- Ensure all required fields are filled
- Check file upload size (max 5MB)

### Styles not loading?
- Verify `styles.css` is in the same directory as `index.html`
- Check browser cache (Ctrl+Shift+Delete)
- Try hard refresh (Ctrl+Shift+R)

### Mobile menu not working?
- Check that `script.js` is loaded
- Verify browser supports ES6+ JavaScript
- Check for JavaScript errors in console

### Animations not smooth?
- On older devices, animations may not be perfectly smooth
- Toggle "Reduce motion" in accessibility settings to test
- Ensure hardware acceleration is enabled in browser

---

**Version:** 1.0  
**Last Updated:** May 2024  
**Status:** Production Ready ✅
