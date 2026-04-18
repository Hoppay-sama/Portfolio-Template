import { projects, getProjectBySlug } from '@/content/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-section">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-primary mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-display-md mb-4 font-bold">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

        <div className="flex flex-wrap gap-4 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {project.longDescription && (
              <div className="prose prose-invert mb-8">
                {project.longDescription.split('\n').map((line, i) => (
                  <p key={i} className="text-muted-foreground mb-4">
                    {line.trim()}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h3 className="font-semibold mb-4 mt-6">Timeline</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {project.startDate}
                {project.endDate && ` - ${project.endDate}`}
              </div>

              {project.metrics && (
                <>
                  <h3 className="font-semibold mb-4 mt-6">Metrics</h3>
                  <div className="space-y-2 text-sm">
                    {project.metrics.performance && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Performance</span>
                        <span>{project.metrics.performance}%</span>
                      </div>
                    )}
                    {project.metrics.stars && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">GitHub Stars</span>
                        <span>{project.metrics.stars}</span>
                      </div>
                    )}
                    {project.metrics.users && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Users</span>
                        <span>{project.metrics.users.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}