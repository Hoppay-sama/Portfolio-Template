import { create } from 'zustand';

interface GameState {
  activeGame: string | null;
  setActiveGame: (gameId: string | null) => void;

  settings: {
    quality: 'low' | 'medium' | 'high';
    soundEnabled: boolean;
    musicEnabled: boolean;
    fullscreen: boolean;
  };
  updateSettings: (settings: Partial<GameState['settings']>) => void;

  fps: number;
  setFps: (fps: number) => void;

  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  activeGame: null,
  setActiveGame: (gameId) => set({ activeGame: gameId }),

  settings: {
    quality: 'medium',
    soundEnabled: false,
    musicEnabled: false,
    fullscreen: false,
  },
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),

  fps: 60,
  setFps: (fps) => set({ fps }),

  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  isPaused: false,
  setIsPaused: (paused) => set({ isPaused: paused }),
}));
