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
            h1: {
              fontSize: '60px',
              lineHeight: '70px',
              fontWeight: '600',
              margin: 0,
              padding: 0,
            },
            h2: {
              fontSize: '30px',
              lineHeight: '40px',
              fontWeight: '600',
              margin: 0,
              padding: 0,
            },
            h3: {
              fontSize: '28px',
              lineHeight: '35px',
              fontWeight: '600',
              margin: 0,
              padding: 0,
            },
            h4: {
              fontSize: '22px',
              lineHeight: '30px',
              fontWeight: '600',
              margin: 0,
              padding: 0,
            },
            h5: {
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              margin: 0,
              padding: 0,
            },
            p: {
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              margin: 0,
              padding: 0,
            },
          },
        },
        md: {
          css: {
            h1: {
              fontSize: '70px',
              lineHeight: '90px',
              margin: 0,
              padding: 0,
            },
            h2: {
              fontSize: '40px',
              lineHeight: '55px',
              margin: 0,
              padding: 0,
            },
            h3: {
              fontSize: '32px',
              lineHeight: '45px',
              margin: 0,
              padding: 0,
            },
            h4: {
              fontSize: '24px',
              lineHeight: '35px',
              margin: 0,
              padding: 0,
            },
            h5: {
              fontSize: '16px',
              lineHeight: '25px',
              margin: 0,
              padding: 0,
            },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        poppins: ['var(--font-poppins)'],
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
          400: '#1A5AFF',
          500: '#0B65F4',
          600: '#0952C3',
          700: '#073E92',
          800: '#052B62',
          900: '#031731',
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
        neutral: {
          500: '#404A60',
          700: '#222E48',
        },
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
        'hero-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'hero-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'hero-pulse': 'hero-pulse 1.5s ease-in-out infinite',
        'hero-blink': 'hero-blink 1s step-end infinite',
      },
    },
  },
  plugins: [tailwindTypography, tailwindAnimate],
};
export default config;
