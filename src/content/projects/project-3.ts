import type { Project } from '@/types';

export const project3: Project = {
  id: 'proj-003',
  slug: 'interactive-portfolio',
  title: 'Interactive 3D Portfolio',
  description:
    'Immersive portfolio website with Three.js 3D scenes, GSAP animations, and interactive skill visualization.',
  type: 'fullstack',
  status: 'in-progress',
  technologies: [
    'Next.js',
    'TypeScript',
    'Three.js',
    'React Three Fiber',
    'GSAP',
    'Tailwind CSS',
  ],
  featured: true,
  order: 3,
  githubUrl: 'https://github.com/username/portfolio',
  images: [
    {
      src: '/assets/images/projects/portfolio-1.png',
      alt: 'Portfolio hero section',
      width: 1920,
      height: 1080,
      type: 'screenshot',
    },
  ],
  metrics: {
    performance: 92,
    accessibility: 100,
    seo: 100,
  },
  startDate: '2024-10-01',
  tags: ['portfolio', '3d', 'interactive', 'animation'],
  accentColor: '#8B5CF6',
  createdAt: '2024-10-01T00:00:00Z',
  updatedAt: '2024-12-01T00:00:00Z',
};
