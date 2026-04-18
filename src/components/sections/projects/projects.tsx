'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { getFeaturedProjects } from '@/content/projects';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const projects = getFeaturedProjects();

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.project-card', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="py-section relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work in full-stack development, showcasing
            modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20"
                  style={{ backgroundColor: (project.accentColor ?? '#3B82F6') + '20' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🚀</span>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
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

                {project.metrics && (
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    {project.metrics.performance && (
                      <span>⚡ {project.metrics.performance}% Lighthouse</span>
                    )}
                    {project.metrics.stars && (
                      <span>⭐ {project.metrics.stars} stars</span>
                    )}
                  </div>
                )}
              </div>

              {project.accentColor && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: project.accentColor }}
                />
              )}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm font-medium transition-all hover:bg-card hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
