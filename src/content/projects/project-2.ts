import type { Project } from '@/types';

export const project2: Project = {
  id: 'proj-002',
  slug: 'ecommerce-platform',
  title: 'E-Commerce Platform',
  description:
    'Modern e-commerce platform with headless CMS, Stripe payments, and real-time inventory management.',
  type: 'fullstack',
  status: 'completed',
  technologies: [
    'Next.js',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'Stripe',
    'Tailwind CSS',
    'Redis',
  ],
  featured: true,
  order: 2,
  liveUrl: 'https://shop.example.com',
  githubUrl: 'https://github.com/username/ecommerce-platform',
  images: [
    {
      src: '/assets/images/projects/ecommerce-1.png',
      alt: 'Store homepage',
      width: 1920,
      height: 1080,
      type: 'screenshot',
    },
  ],
  metrics: {
    performance: 95,
    accessibility: 98,
    seo: 100,
    stars: 128,
  },
  startDate: '2024-03-01',
  endDate: '2024-08-15',
  tags: ['ecommerce', 'payments', 'headless-cms'],
  accentColor: '#10B981',
  createdAt: '2024-03-01T00:00:00Z',
  updatedAt: '2024-08-15T00:00:00Z',
};
