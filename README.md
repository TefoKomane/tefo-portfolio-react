# Tefo Karabo Komane - Portfolio (Bootstrap Edition)

## 📋 Project Overview

This is a professional portfolio website built with **Bootstrap 5** and semantic HTML, showcasing skills, projects, and contact information. This project meets all requirements of the "Clone Your Future" Bootstrap Portfolio assignment.

**Live Demo:** [Deploy to Netlify or GitHub Pages]

## 🎯 Assignment Requirements Met

### 1. **Hero Section** ✅ (20 marks)
- ✅ Full-width background image with dark overlay
- ✅ Centered headline: "I am Tefo Karabo Komane"
- ✅ Sub-headline: "Full Stack Software Developer"
- ✅ Sticky navbar with active link underlines
- ✅ Responsive design (360px → 4K)
- ✅ Skip-to-content link for accessibility

### 2. **About Me Card** ✅ (20 marks)
- ✅ Two-column layout with white card and subtle shadow
- ✅ Left column: Profile image, contact details (Name, Location, Email, LinkedIn)
- ✅ Skills badges using Bootstrap badges
- ✅ Right column: "About Me" heading with highlight label
- ✅ Concise paragraph (≤ 160 words)

### 3. **Projects Grid** ✅ (30 marks)
- ✅ Responsive grid: 3 columns (lg), 2 columns (md), 1 column (sm)
- ✅ 6 featured projects: Tesla Clone, Netflix Clone, YouTube Clone, Movie Mood, Google Keep Clone, Personal Portfolio
- ✅ Card design with banner image, title, tech stack subtitle
- ✅ Two buttons: "View Website" (primary) and "Code" (outline icon button)
- ✅ Proper image handling with alt text
- ✅ Consistent card heights

### 4. **Contact Section** ✅ (20 marks)
- ✅ Centered heading: "Let's Connect" with highlight label
- ✅ Row of social icons (Instagram, GitHub, LinkedIn) using Bootstrap Icons
- ✅ Contact form with fields: Name, Email Address, Subject, Message
- ✅ HTML validation (required, type="email")
- ✅ Submit button with hover effects
- ✅ Form accessibility with proper labels and focus states

### 5. **Footer** ✅ (10 marks)
- ✅ Dark footer bar with centered text
- ✅ Developer name and Bootstrap credit
- ✅ Proper contrast and padding
- ✅ Consistent styling

### 6. **Bonus Features** ✅ (+10 marks)
- ✅ **Dark Mode Support** using `prefers-color-scheme` CSS media query
- ✅ **Print-Ready Résumé** using `@media print` styles

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with proper landmarks
- **CSS3** - Custom styles with CSS variables and media queries
- **Bootstrap 5** - CDN-based responsive framework
- **Bootstrap Icons** - SVG icon library
- **No JavaScript** - Pure HTML/CSS functionality (navbar toggle uses Bootstrap JS from CDN)

## 📁 Project Structure

```
tefo-portfolio/
├── index-bootstrap.html    # Main portfolio page (Bootstrap version)
├── styles.css              # Custom CSS styles
├── README.md               # This file
├── public/
│   └── tefo-profile.jfif   # Profile image
└── package.json            # Project metadata
```

## 🚀 Features

### Responsive Design
- Mobile-first approach
- Optimized for 360px (mobile) → 4K (desktop)
- Flexible grid layouts using Bootstrap classes
- Touch-friendly navigation

### Accessibility
- Semantic HTML landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Skip-to-content link for keyboard users
- Proper ARIA labels on buttons
- Form labels properly associated with inputs
- Color contrast meeting WCAG AA standards
- Focus states on all interactive elements

### Performance
- Lightweight CSS (custom styles only where needed)
- Optimized images with proper alt text
- No JavaScript bloat (Bootstrap JS for navbar only)
- Fast CDN-delivered resources

### Maintainability
- CSS organized by component
- Clear section comments
- CSS variables for theming
- Easy to customize colors and spacing

## 🎨 Color Scheme

- **Primary:** #0d6efd (Blue)
- **Dark:** #212529 (Charcoal)
- **Light:** #f8f9fa (Off-white)
- **Accent:** Purple gradient in hero section

## 📱 Responsive Breakpoints

- **Mobile (360px - 575px):** Single column, stacked layouts
- **Tablet (576px - 991px):** Two columns, optimized for medium screens
- **Desktop (992px+):** Full three-column grids
- **Large (1200px+):** Extended layouts
- **4K (1400px+):** Maximum container widths

## 🌙 Dark Mode

Automatically activates based on system preferences (`prefers-color-scheme: dark`). Includes:
- Adjusted background colors
- Improved text contrast
- Themed UI elements
- Smooth transitions

## 🖨️ Print Styles

Print-optimized view removes navigation and focuses on content. Includes:
- Contact details with URLs visible
- Optimized spacing for paper
- Hidden interactive elements
- Professional layout

## 📝 Form Validation

Contact form includes:
- HTML5 validation (required fields, email format)
- Accessible labels
- Clear error states
- Submit button with hover effects
- Form service ready (Formspree integration)

## 🔍 SEO Optimized

- Semantic HTML structure
- Meta description
- Proper heading hierarchy
- Alt text on all images
- Mobile viewport meta tag

## 📌 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚦 Deployment

### Option 1: Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Deploy on commit

### Option 2: GitHub Pages
1. Rename `index-bootstrap.html` to `index.html`
2. Push to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📸 Screenshots

[Add screenshots of hero, about, projects, contact sections]

## 🐛 Known Issues

None currently. Please report issues via GitHub Issues.

## 📝 License

This project is created for portfolio purposes. Feel free to use it as a template.

## 👤 Author

**Tefo Karabo Komane**
- GitHub: [@TefoKomane](https://github.com/TefoKomane)
- LinkedIn: [Tefo Karabo Komane](https://www.linkedin.com/in/tefo-karabo-komane)
- Email: karabokomane29@gmail.com

## 📚 Credits

- **Bootstrap 5** - Frontend framework
- **Bootstrap Icons** - Icon library
- **Unsplash** - Free stock images
- **Formspree** - Form service

## 📋 Assignment Checklist

- [x] Hero section with overlay & responsive design
- [x] Sticky navbar with active link highlighting
- [x] About me card with profile image & badges
- [x] Projects grid (3 columns, 6+ projects)
- [x] Contact section with form & social icons
- [x] Dark footer with proper contrast
- [x] Semantic HTML landmarks
- [x] Mobile responsive (360px → 4K)
- [x] No JavaScript (Bootstrap JS only for toggle)
- [x] Proper alt text on images
- [x] Accessible form with validation
- [x] Dark mode support (bonus)
- [x] Print styles (bonus)

---

**Last Updated:** 2026-08-18
