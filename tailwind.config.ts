import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/sections/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            h1: {
              fontSize: '42px',
              lineHeight: '48px',
              margin: '0',
              fontWeight: '700',
            },
            h2: {
              fontSize: '14px',
              lineHeight: '20px',
              margin: '0',
              fontWeight: '500',
            },
            h3: {
              fontSize: '26px',
              lineHeight: '32px',
              margin: '0',
              fontWeight: '600',
            },
            h4: {
              margin: '0',
            },
            h5: {
              margin: '0',
            },
          },
        },
        md: {
          css: {
            h3: {
              fontSize: '24px',
              lineHeight: '32px',
            },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          0: '#FCFAFF',
          25: '#E5EDFF',
          100: '#B3C8FF',
          200: '#80A3FF',
          300: '#4D7FFF',
          400: '#1F5EFF',
          500: '#0041E6',
          600: '#0032B3',
          700: '#002480',
          800: '#00164D',
          900: '#00164D',
          950: '#161B26',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindTypography, tailwindAnimate],
};
export default config;
