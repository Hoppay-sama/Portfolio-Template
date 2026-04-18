import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Games } from '@/components/sections/games';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Games />
      <Contact />
    </main>
  );
}
