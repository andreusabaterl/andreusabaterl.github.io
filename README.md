# Andreu Sabater Portfolio

Personal portfolio website showcasing my experience as a Backend Engineer specializing in Python/Django, DDD/Hexagonal Architecture, CI/CD, and GenAI.

🌐 **Live Site:** [andreusabaterl.github.io](https://andreusabaterl.github.io)

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) - Fast, modern static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language:** TypeScript
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## ✨ Features

- 🌍 **Multilingual support** - English, Español and Català
- 🎨 **Modern animations** - Smooth scroll animations and interactive UI elements
- 🌓 **Dark mode** - Automatic theme switching based on system preferences
- 📱 **Fully responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance optimized** - Fast loading with minimal JavaScript
- 🔍 **SEO friendly** - Meta tags, sitemap, and semantic HTML
- ♿ **Accessible** - WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (images, CV, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Section.astro
│   │   ├── TimelineItem.astro
│   │   ├── StatsCounter.astro
│   │   └── LanguagePicker.astro
│   ├── i18n/           # Internationalization
│   │   └── translations.ts
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Route pages
│   │   └── [...lang].astro  # Dynamic language routes
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andreusabaterl/andreusabaterl.github.io.git
cd andreusabaterl.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🌐 Adding a New Language

1. Add the language to `src/i18n/translations.ts`:
```typescript
export const languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
  fr: 'Français', // New language
};

export const translations = {
  // ... existing translations
  fr: {
    'hero.role': 'Ingénieur Backend',
    // ... add all translations
  }
};
```

2. Update the route generation in `src/pages/[...lang].astro`:
```typescript
export function getStaticPaths() {
  return [
    { params: { lang: undefined } },
    { params: { lang: 'es' } },
    { params: { lang: 'ca' } },
    { params: { lang: 'fr' } }, // Add new language
  ];
}
```

3. The new language will be automatically available at `/fr`

## 🎨 Customization

### Colors

Main color scheme is defined in `tailwind.config.js`:
- Primary: Sky blue (`#0ea5e9`)
- Accent: Blue to purple gradient

### Animations

Custom animations are defined in:
- `tailwind.config.js` - Tailwind animation utilities
- `src/styles/global.css` - Custom CSS animations

### Content

All text content is centralized in `src/i18n/translations.ts` for easy updates across all languages.

## 📦 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

```bash
npm run build
# Built files will be in the dist/ folder
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email:** andreusabaterl@gmail.com
- **LinkedIn:** [andreu-sabater-lópez](https://linkedin.com/in/andreu-sabater-lópez-067485285)
- **GitHub:** [@andreusabaterl](https://github.com/andreusabaterl)

---

Built with ❤️ using Astro and Tailwind CSS
