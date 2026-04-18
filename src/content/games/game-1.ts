import type { Game } from '@/types';

export const game1: Game = {
  id: 'game-001',
  slug: 'neon-runner',
  title: 'Neon Runner',
  description:
    'Fast-paced endless runner set in a cyberpunk city with procedurally generated levels and leaderboards.',
  genre: 'platformer',
  engine: 'unity',
  buildUrl: '/games/neon-runner/index.html',
  thumbnail: '/assets/images/games/neon-runner-thumb.png',
  screenshots: [
    '/assets/images/games/neon-runner-1.png',
    '/assets/images/games/neon-runner-2.png',
  ],
  controls: {
    keyboard: {
      Space: 'Jump',
      ArrowLeft: 'Move Left',
      ArrowRight: 'Move Right',
      ArrowDown: 'Slide',
    },
    touch: true,
  },
  defaultSettings: {
    quality: 'medium',
    soundEnabled: true,
    musicEnabled: true,
    fullscreen: false,
  },
  technologies: ['Unity', 'C#', 'WebGL', 'Shader Graph'],
  developmentTime: '3 months',
  teamSize: 1,
  role: 'Solo Developer',
  featured: true,
  behindTheScenes: {
    challenges: [
      'Optimizing procedural generation for WebGL performance',
      'Implementing smooth touch controls for mobile',
    ],
  },
  createdAt: '2024-06-01T00:00:00Z',
};
