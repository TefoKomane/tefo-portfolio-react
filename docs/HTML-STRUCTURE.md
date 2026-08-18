# HTML Structure Documentation

## Semantic Markup

This portfolio uses semantic HTML5 elements for proper structure and accessibility:

### Document Structure

```html
<html lang="en">
  <head>
    <!-- Metadata and stylesheets -->
  </head>
  <body>
    <a href="#main" class="skip-link">Skip to main content</a>
    <header>
      <nav><!-- Navigation --></nav>
    </header>
    <main id="main">
      <section id="home"><!-- Hero Section --></section>
      <section id="about"><!-- About Section --></section>
      <section id="projects"><!-- Projects Section --></section>
      <section id="contact"><!-- Contact Section --></section>
    </main>
    <footer><!-- Footer --></footer>
  </body>
</html>
```

## Key HTML5 Elements Used

### 1. `<header>`
- Contains the navigation bar
- Semantic landmark for top of page
- Sticky positioning for always-accessible navigation

### 2. `<nav>`
- Navigation menu with semantic meaning
- Links to all major sections
- Active state indicators

### 3. `<main>`
- Wraps all primary content
- Provides semantic significance
- Single per page (valid HTML5)

### 4. `<section>`
- Groups related content
- Each major area has its own section
- Clear landmarks for screen readers

### 5. `<article>`
- Could wrap individual project cards
- Groups self-contained content

### 6. `<footer>`
- Footer content at bottom
- Contains developer attribution
- Semantic landmark

## Form Elements

### Accessibility Best Practices

```html
<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
</form>
```

### Key Features

- Each input has an associated label
- `for` attribute matches input `id`
- `required` attribute for validation
- `type="email"` for email validation
- Proper nesting of form elements

## Image Alt Text

All images include descriptive alt text:

- Project images: "Tesla Clone - Responsive Car Showcase Website"
- Profile image: "Tefo Karabo Komane"
- Logo: "Tefo's Logo"

## Heading Hierarchy

```
h1 - Main page title (if used)
h2 - Section titles (Hero, About, Projects, Contact)
h3 - Subsection titles (Project title, form labels)
h4 - Smaller headings (Highlight labels)
```

## Navigation Structure

- Logo/Brand link at left
- Navigation links: Home, About Me, Projects, Contact
- Current page indicated with active underline
- Mobile: Collapsible menu

## Accessibility Links

- Skip-to-content link at top
- Anchor links for smooth navigation
- Focus-visible indicators

## Data Attributes

Used for JavaScript functionality (if needed):

```html
<section id="about" data-section="about">
<nav role="navigation" aria-label="Main Navigation">
```

## ARIA Attributes

- `aria-label` for icon buttons
- `aria-expanded` for collapsible elements
- `aria-current="page"` for active nav link
- `role` attributes where semantic elements unavailable

## Character Encoding

```html
<meta charset="UTF-8">
```

## Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Meta Description

```html
<meta name="description" content="Tefo Karabo Komane - Full Stack Software Developer Portfolio">
```

---

**Last Updated:** 2026-08-18
