/**
 * Centralized animation configuration
 * All timing values are in seconds
 */
export const animationConfig = {
  // Easing functions
  ease: {
    smooth: 'power3.inOut',
    smoothIn: 'power3.in',
    smoothOut: 'power3.out',
    bounce: 'elastic.out(1, 0.5)',
    bounceIn: 'elastic.in(1, 0.5)',
    snap: 'power4.out',
    snapIn: 'power4.in',
    gentle: 'power2.inOut',
    linear: 'none',
  },

  // Duration presets
  duration: {
    instant: 0.1,
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2.4,
    hero: 5.0,
    intro: 7.0,
  },

  // Stagger presets
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
    grid: (cols: number) => ({ each: 0.05, from: 'center', grid: [cols, 'auto'] }),
  },

  // ScrollTrigger defaults
  scroll: {
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1,
    markers: false,
  },
} as const;

/**
 * Animation variants for Framer Motion
 */
export const framerVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: animationConfig.stagger.normal,
      },
    },
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const;
