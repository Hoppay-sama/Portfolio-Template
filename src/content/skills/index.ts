import type { Skill, SkillGroup } from '@/types';
import { frontendSkills } from './frontend';
import { backendSkills } from './backend';
import { gameDevSkills } from './game-dev';

export const allSkills: Skill[] = [
  ...frontendSkills,
  ...backendSkills,
  ...gameDevSkills,
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend Development',
    skills: frontendSkills.sort((a, b) => b.proficiency - a.proficiency),
  },
  {
    category: 'backend',
    label: 'Backend Development',
    skills: backendSkills.sort((a, b) => b.proficiency - a.proficiency),
  },
  {
    category: 'game',
    label: 'Game Development',
    skills: gameDevSkills.sort((a, b) => b.proficiency - a.proficiency),
  },
];

export const getSkillById = (id: string): Skill | undefined =>
  allSkills.find((s) => s.id === id);

export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  allSkills.filter((s) => s.category === category);

export const getTopSkills = (limit = 10): Skill[] =>
  [...allSkills].sort((a, b) => b.proficiency - a.proficiency).slice(0, limit);
