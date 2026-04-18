export const siteConfig = {
  name: 'Nexus Portfolio',
  description: 'Full-Stack & Game Developer Portfolio showcasing cutting-edge web technologies and game development skills.',
  url: 'https://yourportfolio.com',
  ogImage: 'https://yourportfolio.com/og-image.jpg',
  creator: 'Your Name',
  email: 'your@email.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  keywords: [
    'developer',
    'portfolio',
    'full-stack',
    'game development',
    'react',
    'next.js',
    'three.js',
    'typescript',
    'webgl',
  ],
} as const;

export const navigation = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#games', label: 'Games' },
  { href: '#contact', label: 'Contact' },
] as const;
