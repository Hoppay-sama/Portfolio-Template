import type { Game } from '@/types';
import { game1 } from './game-1';
import { game2 } from './game-2';

export const games: Game[] = [game1, game2];

export const getGameBySlug = (slug: string): Game | undefined =>
  games.find((g) => g.slug === slug);

export const getFeaturedGames = (): Game[] => games.filter((g) => g.featured);
