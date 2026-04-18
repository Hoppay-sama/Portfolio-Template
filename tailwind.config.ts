import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette with CSS variable default + numbered shades
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(210, 100%, 97%)',
          100: 'hsl(210, 100%, 94%)',
          200: 'hsl(210, 100%, 87%)',
          300: 'hsl(210, 100%, 76%)',
          400: 'hsl(210, 100%, 63%)',
          500: 'hsl(210, 100%, 50%)',
          600: 'hsl(210, 100%, 45%)',
          700: 'hsl(210, 100%, 38%)',
          800: 'hsl(210, 100%, 30%)',
          900: 'hsl(210, 100%, 22%)',
          950: 'hsl(210, 100%, 12%)',
        },
        'primary-foreground': 'hsl(var(--primary-foreground))',

        // Accent colors
        accent: {
          cyan: 'hsl(180, 100%, 50%)',
          purple: 'hsl(280, 100%, 65%)',
          pink: 'hsl(330, 100%, 65%)',
          orange: 'hsl(30, 100%, 55%)',
        },

        // Semantic colors (CSS variables for theming)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },

      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },

      spacing: {
        'section': 'clamp(4rem, 10vh, 8rem)',
        'section-lg': 'clamp(6rem, 15vh, 12rem)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        'glow': '0 0 20px hsl(210, 100%, 50% / 0.3)',
        'glow-lg': '0 0 40px hsl(210, 100%, 50% / 0.4)',
        'glow-cyan': '0 0 20px hsl(180, 100%, 50% / 0.3)',
        'glow-purple': '0 0 20px hsl(280, 100%, 65% / 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },

      backdropBlur: {
        xs: '2px',
      },

      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(210, 100%, 50% / 0.3)' },
          '50%': { boxShadow: '0 0 40px hsl(210, 100%, 50% / 0.6)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'snap': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};

export default config;
