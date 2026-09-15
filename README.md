# Tefo Karabo Komane — Portfolio

Personal portfolio website built with React and Vite, showcasing my projects, skills, and career journey as a Full Stack Software Developer.

**Live Site:** [tefo-portfolio on Vercel](https://tefo-portfolio-react.vercel.app)  
**GitHub:** [@TefoKomane](https://github.com/TefoKomane)

---

## About

This is my professional portfolio — a single-page React application that documents who I am, what I have built, and where I am going. Every project on the site includes a full case study covering the problem, solution, challenges, lessons learned, and future improvements. I believe in being honest about my skill levels and transparent about my thinking, not just my output.

---

## Projects Featured

| Project | Stack | Live |
|---|---|---|
| Airbnb Clone | React, Node.js, Express, MongoDB, JWT | [Client](https://airbnb-clone-omega-wine.vercel.app) · [Host Portal](https://airbnb-clone-qw8t.vercel.app) |
| Movie Mood | React, TMDb API, Tailwind CSS | [Live](https://tefo-movie-mood.netlify.app) |
| Urban Threads | React, Local Storage, CSS | [Live](https://tefo-urban-threads-online-store.netlify.app) |
| Google Keep Clone | React, Local Storage, Tailwind CSS | [Live](https://tefo-google-keep-react.netlify.app) |
| Good Shepherd Tsotellang | React, TypeScript, Custom CSS | [Live](https://good-shepherd-tsotellang.vercel.app) |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| Language | JavaScript (JSX) |
| Linting | ESLint |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Lint the project:

```bash
npm run lint
```

---

## Project Structure

```
tefo-portfolio/
├── public/
│   ├── projects/           # Project screenshot previews
│   │   ├── airbnb-preview.png
│   │   ├── movie-mood-preview.png
│   │   ├── google-keep-preview.png
│   │   └── good-shepherd-preview.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── CareerVision.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # Single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Architecture

All content — personal info, project details, skills, testimonials, and career vision — lives in a single file: `src/data/portfolioData.js`. To update any content on the site, that is the only file you need to edit.

Components are purely presentational. They read from `portfolioData` and render. No component holds its own content data.

---

## Adding a New Project

1. Open `src/data/portfolioData.js`
2. Add an entry to the `projects` array following the existing schema:

```js
{
  id: 5,
  title: "Project Name",
  problem: "What problem does it solve?",
  solution: "How did you solve it?",
  technologies: ["React", "Node.js"],
  liveDemo: "https://your-live-url.vercel.app",
  github: "https://github.com/TefoKomane/repo-name",
  image: "/projects/project-preview.png",
  skills: ["Skill demonstrated", "Another skill"],
  challenges: "What was hard about it?",
  learned: "What did you take away?",
  improvements: "What would you add next?",
}
```

3. Drop a screenshot into `public/projects/` with the matching filename
4. Optionally add a matching entry to the `caseStudies` array for the full case study view

---

## Deployment

The site is deployed on Vercel with automatic deploys on every push to `master`.

To deploy your own fork:
1. Fork this repository
2. Import on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no configuration needed
4. Deploy

---

## Author

**Tefo Karabo Komane**  
Full Stack Software Developer · iHub Africa  
- Email: karabokomane29@gmail.com  
- LinkedIn: [Tefo Karabo Komane](https://www.linkedin.com/in/tefo-karabo-komane)  
- GitHub: [@TefoKomane](https://github.com/TefoKomane)
