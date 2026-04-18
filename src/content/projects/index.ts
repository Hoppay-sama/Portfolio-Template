import type { Project } from '@/types';
import { project1 } from './project-1';
import { project2 } from './project-2';
import { project3 } from './project-3';

export const projects: Project[] = [project1, project2, project3].sort(
  (a, b) => a.order - b.order
);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProjectsByType = (type: Project['type']): Project[] =>
  projects.filter((p) => p.type === type);

export const getProjectsByTechnology = (tech: string): Project[] =>
  projects.filter((p) => p.technologies.includes(tech));
