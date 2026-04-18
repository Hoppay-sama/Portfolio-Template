// Project Types
export type ProjectType = 'fullstack' | 'game' | 'other';
export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface ProjectMetrics {
  performance: number;
  accessibility?: number;
  seo?: number;
  users?: number;
  rating?: number;
  stars?: number;
  linesOfCode?: number;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  type?: 'screenshot' | 'mockup' | 'thumbnail';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  type: ProjectType;
  status: ProjectStatus;
  technologies: string[];
  featured: boolean;
  order: number;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  images: ProjectImage[];
  metrics?: ProjectMetrics;
  caseStudy?: string;
  startDate: string;
  endDate?: string;
  tags: string[];
  accentColor?: string;
  createdAt: string;
  updatedAt: string;
}

// Skill Types
export type SkillCategory = 'frontend' | 'backend' | 'game' | 'tool' | 'soft';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface SkillMetrics {
  yearsExperience: number;
  projectCount: number;
  lastUsed: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  proficiency: number;
  icon: string;
  color: string;
  relatedProjects: string[];
  metrics?: SkillMetrics;
  learning?: boolean;
  order: number;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

// Game Types
export type GameGenre = 'fps' | 'platformer' | 'puzzle' | 'rpg' | 'strategy' | 'other';
export type GameEngine = 'unity' | 'unreal' | 'godot' | 'threejs' | 'custom' | 'other';

export interface GameControls {
  keyboard?: Record<string, string>;
  mouse?: string;
  touch?: boolean;
  gamepad?: boolean;
}

export interface GameSettings {
  quality: 'low' | 'medium' | 'high';
  soundEnabled: boolean;
  musicEnabled: boolean;
  fullscreen: boolean;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  genre: GameGenre;
  engine: GameEngine;
  buildUrl: string;
  thumbnail: string;
  screenshots: string[];
  trailerUrl?: string;
  controls: GameControls;
  defaultSettings: GameSettings;
  technologies: string[];
  developmentTime?: string;
  teamSize?: number;
  role: string;
  featured: boolean;
  behindTheScenes?: {
    codeSnippets?: Array<{
      title: string;
      language: string;
      code: string;
    }>;
    designDocs?: string[];
    challenges?: string[];
  };
  playCount?: number;
  averagePlayTime?: string;
  createdAt: string;
}

// Experience Types
export type ExperienceType = 'work' | 'education' | 'project' | 'certification';

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  current?: boolean;
  location: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  logo?: string;
  website?: string;
}

// API Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

// Navigation Types
export interface NavItem {
  href: string;
  label: string;
  icon?: string;
}
