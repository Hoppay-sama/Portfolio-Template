'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Gamepad2 } from 'lucide-react';
import { getFeaturedGames } from '@/content/games';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const games = getFeaturedGames();

export function Games() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.game-card', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="games" className="py-section relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">
            Game <span className="gradient-text">Development</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Playable games built with Unity, Three.js, and WebGL. Experience my
            game development skills firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <article
              key={game.id}
              className="game-card group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2 className="w-16 h-16 text-muted-foreground/50" />
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-transform hover:scale-105">
                    <Play className="w-5 h-5" />
                    Play Now
                  </button>
                </div>

                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" size="sm" className="bg-black/50 backdrop-blur-sm text-white border-0">
                    {game.genre}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {game.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {game.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {game.playCount && (
                  <div className="text-xs text-muted-foreground">
                    🎮 {game.playCount.toLocaleString()} plays
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/games"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm font-medium transition-all hover:bg-card hover:scale-105"
          >
            View All Games
          </a>
        </div>
      </div>
    </section>
  );
}
