import type { Game } from '@/types';

export const game2: Game = {
  id: 'game-002',
  slug: 'puzzle-dimensions',
  title: 'Puzzle Dimensions',
  description:
    'Mind-bending puzzle game where you manipulate gravity and dimensions to solve increasingly complex levels.',
  genre: 'puzzle',
  engine: 'unity',
  buildUrl: '/games/puzzle-dimensions/index.html',
  thumbnail: '/assets/images/games/puzzle-dimensions-thumb.png',
  screenshots: [
    '/assets/images/games/puzzle-dimensions-1.png',
    '/assets/images/games/puzzle-dimensions-2.png',
  ],
  controls: {
    keyboard: {
      WASD: 'Move',
      E: 'Interact',
      Q: 'Switch Dimension',
      R: 'Reset Level',
    },
    mouse: 'Look around',
  },
  defaultSettings: {
    quality: 'medium',
    soundEnabled: true,
    musicEnabled: true,
    fullscreen: false,
  },
  technologies: ['Unity', 'C#', 'WebGL', 'Universal RP'],
  developmentTime: '5 months',
  teamSize: 2,
  role: 'Lead Developer & Designer',
  featured: true,
  behindTheScenes: {
    challenges: [
      'Implementing seamless dimension transitions',
      'Designing intuitive gravity mechanics',
    ],
  },
  createdAt: '2024-03-15T00:00:00Z',
};
