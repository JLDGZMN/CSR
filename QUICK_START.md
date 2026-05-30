# 🚀 Quick Start Guide - Voxly Careers Website

## ⚡ 30-Second Setup

1. **Open the website:**
   - Double-click `index.html` in the CSR folder
   - Website opens in your default browser

2. **That's it!** 🎉 The site is ready to use.

---

## 📱 What You Get

✅ Fully responsive call center hiring website  
✅ Mobile-friendly hamburger menu  
✅ Application form with validation  
✅ Smooth navigation and animations  
✅ Professional dark theme (navy + violet + teal)  
✅ No backend needed - works locally  

---

## 🎯 Main Features

### Navigation
- Click any link to smooth scroll to that section
- Active section is highlighted in navigation
- Mobile menu (hamburger icon) on phones/tablets

### Apply Online Form
- Fill in your information
- Upload resume (PDF or Word)
- Form validates all fields automatically
- Success message appears after submission

### Contact
- All company information in Contact section
- Contact form to send a message

---

## 🔧 Customization (Quick Tips)

### Change Colors
1. Open `styles.css`
2. Find `:root` section at the top
3. Change hex codes for colors:
   ```css
   --color-primary: #6b5b95;    /* Change this */
   --color-accent: #00d4ff;     /* Or this */
   ```

### Change Text/Content
1. Open `index.html`
2. Search for the text you want to change
3. Edit directly and save

### Change Company Info
Search and replace:
- `Voxly` → Your company name
- `Pateros City, Philippines` → Your location
- `+63 955 568 6062` → Your phone

---

## 📂 Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Main website structure |
| `styles.css` | All styling and layout |
| `script.js` | JavaScript for interactivity |
| `README.md` | Full documentation |

---

## 🌐 Deploy Online

### Option 1: Netlify (Easiest)
1. Go to netlify.com
2. Drag and drop the CSR folder
3. Done! Your site is online

### Option 2: GitHub Pages
1. Create GitHub account
2. Create repository named `username.github.io`
3. Upload files
4. Site auto-publishes at `username.github.io`

### Option 3: Traditional Hosting
1. Upload files to your web server
2. Make sure `index.html` is in root
3. Visit your domain

---

## 🛠️ Advanced Customization

### Connect to Backend
If you want form data to be saved:

1. Edit `script.js` (line ~130)
2. Modify the `handleFormSubmit` function to send data to your server
3. Example:
```javascript
fetch('https://your-server.com/submit-application', {
    method: 'POST',
    body: formData
})
```

### Change Fonts
Edit `index.html` head section (line ~8-9):
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont1:wght@700&family=YourFont2:wght@400&display=swap">
```

### Add More Sections
Copy any existing section and duplicate it in `index.html`

---

## 🎨 Color Themes Ready to Use

### Current (Violet + Teal)
```css
Primary: #6b5b95
Accent: #00d4ff
Dark: #0f1b3c
```

### Alternative (Orange + Blue)
```css
Primary: #FF6B35
Accent: #004E89
Dark: #1A1A2E
```

### Alternative (Green + Purple)
```css
Primary: #10B981
Accent: #7C3AED
Dark: #0F172A
```

---

## ✅ Testing Checklist

- [ ] Website opens in browser
- [ ] Navigation links scroll smoothly
- [ ] Mobile menu works on phone/tablet
- [ ] Form validates required fields
- [ ] File upload works
- [ ] Colors look good
- [ ] Text is readable
- [ ] No console errors (F12 to check)

---

## 🆘 Need Help?

**Common Issues:**

❌ Website doesn't open
- Try right-click → Open with → Chrome

❌ Styles look broken
- Check `styles.css` is in same folder as `index.html`
- Try Ctrl+Shift+R to hard refresh

❌ Form not working
- Check browser console (F12) for errors
- Make sure JavaScript is enabled

❌ Mobile menu not showing
- The menu appears automatically on small screens
- Resize browser window to test

---

## 📞 Contact Info

**Business:** Voxly Careers  
**Phone:** +63 955 568 6062  
**Location:** Pateros City, Philippines  
**Hours:** Mon - Sat: 8:00am - 5:00pm  

---

## 🎓 That's It!

You're ready to go! The website is production-ready and can be deployed immediately.

**Happy Hiring! 🎉**
