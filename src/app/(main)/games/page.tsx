import Link from 'next/link';
import { getFeaturedGames } from '@/content/games';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Games',
  description: 'Playable games built with Unity, Three.js, and WebGL.',
};

export default function GamesPage() {
  const games = getFeaturedGames();

  return (
    <div className="container mx-auto px-4 py-section">
      <h1 className="text-display-md mb-8 text-center font-bold">
        Game <span className="gradient-text">Development</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <article
            key={game.id}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-2">
                <Badge variant="secondary" size="sm">
                  {game.genre}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {game.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {game.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <button className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                Play Now
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/#games"
          className="text-muted-foreground hover:text-primary"
        >
          ← Back to Games
        </Link>
      </div>
    </div>
  );
}