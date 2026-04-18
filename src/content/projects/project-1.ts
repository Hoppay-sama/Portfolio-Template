import type { Project } from '@/types';

export const project1: Project = {
  id: 'proj-001',
  slug: 'saas-dashboard',
  title: 'SaaS Analytics Dashboard',
  description:
    'Real-time analytics dashboard with interactive charts, user segmentation, and AI-powered insights.',
  longDescription: `A comprehensive analytics platform designed for SaaS companies to track user behavior, monitor key metrics, and make data-driven decisions. Built with performance and scalability in mind.

## Key Features
- Real-time data visualization
- Custom dashboard builder
- User segmentation and cohort analysis
- AI-powered anomaly detection
- Export and reporting capabilities`,
  type: 'fullstack',
  status: 'completed',
  technologies: [
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'Chart.js',
    'Tailwind CSS',
    'Vercel',
    'OpenAI API',
  ],
  featured: true,
  order: 1,
  liveUrl: 'https://dashboard.example.com',
  githubUrl: 'https://github.com/username/saas-dashboard',
  images: [
    {
      src: '/assets/images/projects/dashboard-1.png',
      alt: 'Dashboard overview',
      width: 1920,
      height: 1080,
      type: 'screenshot',
    },
    {
      src: '/assets/images/projects/dashboard-2.png',
      alt: 'Analytics view',
      width: 1920,
      height: 1080,
      type: 'screenshot',
    },
  ],
  metrics: {
    performance: 98,
    accessibility: 100,
    seo: 100,
    users: 5000,
    stars: 234,
    linesOfCode: 25000,
  },
  startDate: '2024-01-15',
  endDate: '2024-06-30',
  tags: ['analytics', 'dashboard', 'saas', 'real-time'],
  accentColor: '#3B82F6',
  createdAt: '2024-01-15T00:00:00Z',
  updatedAt: '2024-06-30T00:00:00Z',
};
