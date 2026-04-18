import Link from 'next/link';
import { projects } from '@/content/projects';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Projects',
  description: 'A selection of my best work in full-stack development.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-section">
      <h1 className="text-display-md mb-8 text-center font-bold">
        Featured <span className="gradient-text">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" size="sm">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="secondary" size="sm">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="block w-full rounded-lg bg-primary py-2 text-center text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                View Details
              </Link>
            </div>

            {project.accentColor && (
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: project.accentColor }}
              />
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-primary"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}