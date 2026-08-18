# CSS Architecture

## Modular CSS Organization

The portfolio uses a modular CSS approach with separate files for each component:

### File Structure

```
css/
├── navbar.css          # Navigation bar styles
├── hero.css            # Hero section with overlay
├── about.css           # About section and cards
├── projects.css        # Projects grid and cards
├── contact.css         # Contact form and icons
├── footer.css          # Footer styles
├── responsive.css      # Responsive breakpoints
├── accessibility.css   # A11y and focus states
├── dark-mode.css       # Dark mode support
└── print.css           # Print-ready styles
```

## CSS Custom Properties (Variables)

### Root Variables

```css
:root {
  --primary-color: #0d6efd (Blue);
  --dark-color: #212529 (Charcoal);
  --light-color: #f8f9fa (Off-white);
  --white: #ffffff;
  --shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
```

## Responsive Design Approach

### Mobile-First Strategy

1. Base styles target mobile (360px)
2. Media queries add styles for larger screens
3. Progressive enhancement

### Breakpoints

- **360px - 576px:** Mobile phones
- **576px - 767px:** Small tablets
- **768px - 991px:** Medium tablets
- **992px - 1199px:** Desktops
- **1200px - 1399px:** Large desktops
- **1400px+:** 4K displays

## Color Scheme

### Primary Colors

- **Primary Blue:** #0d6efd
- **Dark Charcoal:** #212529
- **Light Off-white:** #f8f9fa
- **White:** #ffffff

### Status Colors

- **Success:** #198754 (Green)
- **Warning:** #ffc107 (Yellow)
- **Danger:** #dc3545 (Red)
- **Info:** #0dcaf0 (Cyan)

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif;
```

### Font Sizes (Responsive)

- **h1:** clamp(2rem, 8vw, 4rem)
- **h2:** clamp(1.75rem, 5vw, 3rem)
- **Body:** 1rem
- **Small:** 0.875rem

### Font Weights

- **Regular:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700

## Spacing System

### Bootstrap Grid

- Uses Bootstrap 5 grid system
- Flexible 12-column layout
- Responsive column classes
- Gap utilities for spacing

### Standard Spacing

- **xs:** 0.25rem
- **sm:** 0.5rem
- **md:** 1rem
- **lg:** 1.5rem
- **xl:** 2rem
- **xxl:** 3rem

## Shadow System

### Elevation Levels

- **No shadow:** Flat elements
- **sm-shadow:** `0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)`
- **md-shadow:** `0 0.5rem 1rem rgba(0, 0, 0, 0.15)`
- **lg-shadow:** `0 1rem 3rem rgba(0, 0, 0, 0.175)`

## Transitions & Animations

### Standard Transitions

```css
transition: all 0.3s ease;
```

### Common Animations

- **fadeInUp:** Fade in while moving up
- **slideDown:** Slide down effect
- **scaleUp:** Scale transformation on hover

## Bonus Features

### Dark Mode

- Automatic detection via `prefers-color-scheme: dark`
- Inverted color palette
- Maintained contrast ratios
- Smooth transitions

### Print Styles

- Hide navigation and UI elements
- Optimize for paper
- Show URLs after links
- Proper page breaks
- A4 paper sizing

## CSS Modules

### Navbar (`navbar.css`)

- Sticky positioning
- Active link underlines
- Hover effects
- Mobile responsive toggle

### Hero (`hero.css`)

- Full-viewport background
- Dark overlay for readability
- Centered content
- Responsive typography
- CTA buttons

### About (`about.css`)

- Card layout
- Profile image circular
- Contact information
- Skill badges
- Highlight label styling

### Projects (`projects.css`)

- Responsive grid (3/2/1 columns)
- Card hover effects
- Image scaling
- Button styling
- Consistent heights

### Contact (`contact.css`)

- Social icon circles
- Form styling
- Focus states
- Button effects
- Responsive layout

### Footer (`footer.css`)

- Dark background
- Proper contrast
- Developer attribution
- Responsive padding

### Responsive (`responsive.css`)

- All media queries
- Breakpoint-specific styles
- Print styles location
- Reduced motion support

### Accessibility (`accessibility.css`)

- Focus indicators
- Skip link
- High contrast support
- Reduced motion
- Heading hierarchy

### Dark Mode (`dark-mode.css`)

- All dark mode colors
- Component-specific adjustments
- Smooth transitions
- Maintains contrast

### Print (`print.css`)

- Print-specific layout
- Page breaks
- Link URL display
- Paper-optimized formatting
- A4 sizing

## Class Naming Convention

Using Bootstrap's BEM-inspired naming:

- `.btn-primary` - Primary button
- `.card` - Card component
- `.section-title` - Section heading
- `.project-card` - Project card component
- `.hero-section` - Hero section
- `.social-icon` - Social media icon

## CSS Specificity

- Avoid `!important` (used only where necessary)
- Specificity hierarchy: elements < classes < IDs
- Bootstrap defaults with custom overrides

## Performance Optimization

- Minimal custom CSS
- Leverages Bootstrap utilities
- CSS variables for theming
- No unnecessary nested selectors
- Optimized media queries

---

**Last Updated:** 2026-08-18
