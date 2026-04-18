'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useKonamiCode } from '@/lib/hooks/use-konami-code';
import { usePortfolioStore } from '@/lib/stores/portfolio-store';

gsap.registerPlugin(ScrollTrigger);

function KonamiEasterEgg() {
  const activateKonami = usePortfolioStore((state) => state.activateKonami);

  useKonamiCode(() => {
    activateKonami();
    alert('🎮 KONAMI CODE ACTIVATED! 🎮\n\nYou found the easter egg!');
  });

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <KonamiEasterEgg />
      {children}
    </>
  );
}