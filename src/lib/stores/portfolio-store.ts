import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface PortfolioState {
  // Navigation
  activeSection: string;
  setActiveSection: (section: string) => void;

  // User preferences
  hasSeenIntro: boolean;
  setHasSeenIntro: (value: boolean) => void;

  // Performance
  quality: 'low' | 'medium' | 'high';
  setQuality: (quality: 'low' | 'medium' | 'high') => void;

  // Audio
  soundEnabled: boolean;
  toggleSound: () => void;

  // Theme
  theme: 'dark' | 'light' | 'matrix';
  setTheme: (theme: 'dark' | 'light' | 'matrix') => void;

  // Easter eggs
  konamiActivated: boolean;
  activateKonami: () => void;
}

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      // Navigation
      activeSection: 'hero',
      setActiveSection: (section) => set({ activeSection: section }),

      // User preferences
      hasSeenIntro: false,
      setHasSeenIntro: (value) => set({ hasSeenIntro: value }),

      // Performance
      quality: 'medium',
      setQuality: (quality) => set({ quality }),

      // Audio
      soundEnabled: false,
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

      // Theme
      theme: 'dark',
      setTheme: (theme) => set({ theme }),

      // Easter eggs
      konamiActivated: false,
      activateKonami: () => set({ konamiActivated: true }),
    }),
    {
      name: 'nexus-portfolio-preferences',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        hasSeenIntro: state.hasSeenIntro,
        quality: state.quality,
        soundEnabled: state.soundEnabled,
        theme: state.theme,
        konamiActivated: state.konamiActivated,
      }),
    }
  )
);
