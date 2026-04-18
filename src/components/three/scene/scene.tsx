'use client';

import { Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { usePortfolioStore } from '@/lib/stores/portfolio-store';

interface SceneProps {
  children: ReactNode;
  className?: string;
}

export function Scene({ children, className }: SceneProps) {
  const quality = usePortfolioStore((state) => state.quality);

  const dpr = {
    low: 1,
    medium: 1.5,
    high: 2,
  }[quality];

  return (
    <div className={className}>
      <Canvas
        gl={{
          antialias: quality !== 'low',
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        dpr={dpr}
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />

        <Suspense fallback={null}>{children}</Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}