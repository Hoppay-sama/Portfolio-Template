'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { bio } from '@/content/personal/bio';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-char', {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 1.5,
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        delay: 2,
      });

      gsap.from('.hero-scroll', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 2.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = bio.name;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent-purple/10" />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          ref={titleRef}
          className="text-display-xl font-bold mb-6 perspective-1000"
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="hero-char inline-block gradient-text"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          {bio.title}
        </p>
        <p className="hero-subtitle text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto">
          {bio.tagline}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="hero-cta px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="hero-cta px-8 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm font-medium transition-all hover:bg-card hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
