# Nexus Portfolio Template

A cutting-edge portfolio template for full-stack developers, game developers, and creative technologists. Built with Next.js 15, Three.js, GSAP, and Tailwind CSS.

## 🚀 Features

- **Hero Section** - Animated entrance with GSAP timeline
- **About Section** - Interactive skill visualization
- **Projects Showcase** - Project cards with metrics and links
- **Game Development** - Showcase playable games
- **Contact Form** - Validated form with API route
- **Command Palette** - CMD+K navigation
- **Easter Eggs** - Konami code activation
- **Dark Mode** - Sleek dark theme by default
- **Performance Optimized** - Optimized bundle with Turbopack

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, React Hook Form
- **3D/WebGL:** Three.js, React Three Fiber
- **State:** Zustand
- **Validation:** Zod

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Customization

### 1. Update Personal Info

Edit `src/content/personal/bio.ts`:

```typescript
export const bio = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'One-liner about you',
  shortBio: 'Brief bio paragraph',
  longBio: `Multi-paragraph bio...
  
Continue here.`,
  location: 'City, Country',
  email: 'your@email.com',
  available: true,
  stats: [
    { label: 'Years Experience', value: 5 },
    { label: 'Projects Completed', value: 30 },
  ],
  resume: { downloadUrl: '/resume.pdf' },
};
```

### 2. Update Social Links

Edit `src/content/personal/social.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/yourusername', icon: 'github', username: '@yourusername' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin', username: 'Your Name' },
  // Add more...
];
```

### 3. Add Projects

Edit or create files in `src/content/projects/`:

```typescript
export const myProject: Project = {
  id: 'proj-001',
  slug: 'my-project',
  title: 'Project Title',
  description: 'Brief description',
  type: 'fullstack',
  status: 'completed',
  technologies: ['Next.js', 'TypeScript'],
  featured: true,
  order: 1,
  liveUrl: 'https://yourproject.com',
  githubUrl: 'https://github.com/yourusername/project',
  images: [{ src: '/placeholder.jpg', alt: 'Screenshot', width: 1920, height: 1080 }],
  startDate: '2024-01-01',
  tags: ['web', 'react'],
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};
```

### 4. Add Skills

Edit `src/content/skills/frontend.ts` and other skill files:

```typescript
export const frontendSkills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', level: 'expert', proficiency: 95, icon: 'react', color: '#61DAFB', relatedProjects: [], order: 1 },
  // Add more...
];
```

### 5. Add Games

Edit or create files in `src/content/games/`:

```typescript
export const myGame: Game = {
  id: 'game-001',
  slug: 'my-game',
  title: 'Game Title',
  description: 'What players do',
  genre: 'puzzle',
  engine: 'unity',
  buildUrl: '/games/my-game/index.html',
  thumbnail: '/placeholder.jpg',
  screenshots: [],
  controls: { keyboard: { Space: 'Jump' }, touch: true },
  defaultSettings: { quality: 'medium', soundEnabled: true, musicEnabled: true, fullscreen: false },
  technologies: ['Unity', 'C#'],
  role: 'Solo Developer',
  featured: true,
  createdAt: '2024-01-01T00:00:00Z',
};
```

### 6. Update Site Config

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  description: 'Your portfolio description',
  url: 'https://yourdomain.com',
  ogImage: 'https://yourdomain.com/og-image.jpg',
  creator: 'Your Name',
  email: 'your@email.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  keywords: ['developer', 'portfolio', 'react', 'typescript'],
  // Navigation is defined in a separate config
};
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # Route group pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Tailwind + CSS variables
├── components/
│   ├── animations/       # FadeIn, ScrollReveal
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Projects, Games, Contact
│   ├── three/            # Scene, SkillConstellation, Particles
│   └── ui/              # Button, Card, Badge, Input, CommandPalette
├── content/              # Content data files
│   ├── games/
│   ├── personal/
│   ├── projects/
│   └── skills/
├── lib/
│   ├── hooks/            # useScrollAnimation, useKonamiCode
│   ├── stores/           # Zustand stores
│   └── utils/            # cn, device, format
├── config/               # site.ts
└── types/               # TypeScript types
```

## 🧑‍💻 Development Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check  # TypeScript check
pnpm analyze     # Bundle analysis
```

## 🧪 Testing

```bash
npx vitest run       # Unit tests
pnpm test:e2e       # E2E tests (requires dev server)
```

## 📄 Environment Variables

Create `.env.local`:

```env
# Contact form (required for production)
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=your@email.com
```

## 🔒 Legal

MIT License - use this模板 for your own portfolio!

---

Replace all placeholder values (Your Name, yourusername, your@email.com, etc.) with your actual information before deploying.