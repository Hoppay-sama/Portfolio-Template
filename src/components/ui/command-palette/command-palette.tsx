'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { getFeaturedProjects } from '@/content/projects';
import { getFeaturedGames } from '@/content/games';
import { Search, X, ArrowRight } from 'lucide-react';

const projects = getFeaturedProjects();
const games = getFeaturedGames();

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    command();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-1/2 top-1/4 z-50 w-full max-w-xl -translate-x-1/2 transform">
        <Command className="rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center border-b border-border px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Command.Input
              className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Search projects, games, or navigate..."
            />
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-muted"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="mb-2 text-xs font-medium text-muted-foreground px-2"
            >
              <Command.Item
                onSelect={() => runCommand(() => router.push('/#about'))}
                className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                About
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('/#projects'))}
                className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Projects
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('/#games'))}
                className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Games
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('/#contact'))}
                className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Projects"
              className="mb-2 text-xs font-medium text-muted-foreground px-2"
            >
              {projects.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() =>
                    runCommand(() => router.push(`/projects/${project.slug}`))
                  }
                  className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {project.title}
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Games"
              className="text-xs font-medium text-muted-foreground px-2"
            >
              {games.map((game) => (
                <Command.Item
                  key={game.id}
                  onSelect={() => runCommand(() => router.push(`/games/${game.slug}`))}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {game.title}
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
            Press <kbd className="rounded bg-muted px-1">esc</kbd> to close •{' '}
            <kbd className="rounded bg-muted px-1">↵</kbd> to select
          </div>
        </Command>
      </div>
    </>
  );
}