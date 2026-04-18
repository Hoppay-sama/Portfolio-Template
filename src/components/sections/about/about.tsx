'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bio } from '@/content/personal/bio';
import { getTopSkills } from '@/content/skills';

gsap.registerPlugin(ScrollTrigger);

const stats = bio.stats;
const skills = getTopSkills(6).map((s) => ({ name: s.name, level: s.proficiency }));

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.stat-item', {
      scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    });

    gsap.from('.skill-bar', {
      scrollTrigger: { trigger: '.skills-container', start: 'top 80%' },
      width: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-section relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {bio.shortBio}
          </p>
        </div>

        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item p-6 rounded-2xl bg-card border border-border text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}+
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="text-muted-foreground mb-6 space-y-4">
              {bio.longBio.split('\n\n').map((p, i) => (
                <p key={i}>{p.trim()}</p>
              ))}
            </div>
            <a
              href={bio.resume.downloadUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          <div className="skills-container">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="skill-bar h-full rounded-full bg-gradient-to-r from-primary to-accent-purple"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
