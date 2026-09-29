# Habiba Shah — Portfolio 🌸

A premium, highly animated portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Personalizing Your Portfolio

All personal information is stored in one file:

**`src/data/portfolio.ts`**

Edit this file to update:
- ✏️ Your name, title, tagline
- 📧 Email, GitHub, LinkedIn links
- 📊 Statistics (projects, apps, technologies)
- 💡 About section text
- 🛠️ Skills and technologies
- 🗂️ Projects (add your real projects here)
- 📅 Experience timeline

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          — Root layout with SEO metadata
│   ├── page.tsx            — Main page (assembles all sections)
│   └── globals.css         — Global styles & design system
├── components/
│   ├── Navbar.tsx          — Sticky glass navbar
│   ├── Hero.tsx            — Hero section with animations
│   ├── About.tsx           — About + stats
│   ├── Skills.tsx          — Skills grid
│   ├── Projects.tsx        — Bento grid projects
│   ├── AppShowcase.tsx     — Phone mockup showcase
│   ├── UIUX.tsx            — UI/UX design section
│   ├── GitHubSection.tsx   — GitHub activity
│   ├── Experience.tsx      — Timeline
│   ├── Contact.tsx         — Contact form
│   ├── Footer.tsx          — Footer
│   └── CursorGlow.tsx      — Custom cursor
└── data/
    └── portfolio.ts        — 📝 EDIT THIS FILE
```

## 🖼️ Adding Images

1. **Profile photo**: Add `avatar.jpg` to the `/public/` folder
2. **Project screenshots**: Add images to `/public/projects/` and update paths in `portfolio.ts`

## 🎨 Design System

- **Colors**: Soft pink, blush, rose, lavender, lilac on deep purple background
- **Typography**: Plus Jakarta Sans + Inter
- **Effects**: Glassmorphism, gradient text, animated blobs, glow effects
- **Animations**: Framer Motion scroll-triggered, hover effects, floating elements

## 🌐 Deployment

Deploy to Vercel for free:

```bash
npx vercel
```

---

Built with 💖 by Habiba Shah
