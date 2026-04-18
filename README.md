# Nexus Portfolio

A cutting-edge full-stack and game developer portfolio built with Next.js 15, Three.js, GSAP, and modern web technologies.

## 🚀 Features

- **Hero Section** - Animated particle system with GSAP timeline animations
- **About Section** - Interactive skill visualization and professional timeline
- **Projects Showcase** - Full-stack projects with live demos and metrics
- **Game Development** - Playable WebGL games embedded in the portfolio
- **Contact Form** - Validated form with email integration
- **Command Palette** - Power user navigation with CMD+K
- **Easter Eggs** - Konami code and hidden features
- **Performance Optimized** - 95+ Lighthouse score target

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, Framer Motion
- **3D/WebGL:** Three.js, React Three Fiber
- **State:** Zustand
- **Forms:** React Hook Form, Zod
- **Email:** Resend

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nexus-portfolio.git

# Navigate to project
cd nexus-portfolio

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Service
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── ui/               # Reusable UI components
│   ├── three/            # 3D/WebGL components
│   └── animations/       # Animation components
├── lib/
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── stores/           # Zustand stores
│   └── constants/        # App constants
├── content/              # Static content data
├── types/                # TypeScript types
└── config/               # App configuration
```

## 🎮 Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run type checking
pnpm type-check

# Analyze bundle size
pnpm analyze
```

## 📊 Performance Targets

- **Lighthouse Score:** 95+ across all metrics
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Bundle Size:** < 200KB initial JS
- **Animation FPS:** 60fps on mid-tier devices

## 🎨 Customization

### Adding Projects

Edit `src/content/projects/` to add your projects:

```typescript
// src/content/projects/my-project.ts
import { Project } from '@/types';

export const myProject: Project = {
  id: 'proj-001',
  slug: 'my-project',
  title: 'My Project',
  description: 'Project description...',
  // ... other fields
};
```

### Adding Games

Edit `src/content/games/` to add your games:

```typescript
// src/content/games/my-game.ts
import { Game } from '@/types';

export const myGame: Game = {
  id: 'game-001',
  slug: 'my-game',
  title: 'My Game',
  buildUrl: '/games/my-game/index.html',
  // ... other fields
};
```

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ by [Your Name](https://yourportfolio.com)
