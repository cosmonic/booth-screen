/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  darkMode: 'class',
  theme: {
      container: {
          center: true,
          padding: '2rem',
      },
      extend: {
          animation: {
              // shadcn-ui animations
              'accordion-down': 'accordion-down 0.2s ease-out',
              'accordion-up': 'accordion-up 0.2s ease-out',
              // old animations
              'fade-in-logo': '500ms linear forwards 500ms fade-in',
              'fade-in-up': 'fade-in-up 0.5s ease-out',
              'pulse-logo': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
              'pulse-edge': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
              'pulse-node': 'pulse-node 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
              'toast-slide-in':
                  'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
              'toast-slide-out':
                  'slide-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
              'pulse-glow': 'pulse-glow 700ms infinite alternate',
          },
          keyframes: {
              // shadcn-ui animations
              'accordion-down': {
                  from: {height: 0},
                  to: {height: 'var(--radix-accordion-content-height)'},
              },
              'accordion-up': {
                  from: {height: 'var(--radix-accordion-content-height)'},
                  to: {height: 0},
              },

              // old animations
              'fade-in': {
                  from: {
                      opacity: '0',
                  },
                  to: {
                      opacity: '1',
                  },
              },
              'pulse-glow': {
                  '0%': {'box-shadow': '0 0 2px 0 rgba(104, 91, 199, 0.2)'},
                  '100%': {'box-shadow': '0 0 9px 2px rgba(104, 91, 199, 0.6)'},
              },
              'pulse-node': {
                  '0%, 100%': {opacity: 1},
                  '50%': {opacity: 0.7},
              },
              'slide-in-bottom': {
                  '0%': {transform: 'translateY(1000px)', opacity: 0},
                  '100%': {transform: 'translateY(0)', opacity: 1},
              },
              'slide-out-bottom': {
                  '0%': {transform: 'translateY(0)', opacity: 1},
                  '100%': {transform: 'translateY(1000px)', opacity: 0},
              },
              'fade-in-up': {
                  '0%': {opacity: '0', transform: 'translateY(10px)'},
                  '100%': {opacity: '1', transform: 'translateY(0)'},
              },
          },
          colors: {
              // original colors -- still used in some places, prefer new shades
              slatePurple: {
                  default: '#685bc7', // cosmo-purple
                  dark: '#27224a', // cosmo-purple-800
                  light: '#483774', // cosmo-purple-600
              },
              spaceBlue: '#002e5d', // cosmo-blue
              gainsboro: '#d9e1e2', // cosmo-grey-100
              lightGray: '#768692', // cosmo-grey-500
              gunMetal: '#253746', // cosmo-grey-800
              providerBlue: '#29a5ff', // cosmo-blue-400

              // new brand colors
              'cosmo-purple': {
                  DEFAULT: '#685BC7', // slatePurple
                  50: '#E6E4F6',
                  100: '#D8D5F1',
                  200: '#BCB6E6',
                  300: '#A098DC',
                  400: '#8479D1',
                  500: '#685BC7',
                  600: '#493CAE', // slatePurple-light
                  700: '#382D85',
                  800: '#261F5B', // slatePurple-dark
                  900: '#151131',
                  950: '#0C0A1C',
              },
              'cosmo-blue': {
                  DEFAULT: '#002E5D', // spaceBlue
                  50: '#DDEEFF',
                  100: '#C3E1FF',
                  200: '#90C7FF',
                  300: '#5DADFF',
                  400: '#2A93FF', // providerBlue
                  500: '#007AF6',
                  600: '#0060C3',
                  700: '#004790',
                  800: '#002E5D',
                  900: '#00172F',
                  950: '#000C18',
              },
              'cosmo-grey': {
                  DEFAULT: '#768693',
                  50: '#EAEFF0',
                  100: '#D9E1E2', // gainsboro
                  200: '#C8D2D5',
                  300: '#AFBAC0',
                  400: '#8D9BA5',
                  500: '#768693', // lightGray
                  600: '#596A78',
                  700: '#344655',
                  800: '#253746', // gunMetal
                  900: '#18222B',
                  950: '#0A0D0F',
              },

              // shadcn-ui colors
              card: {
                  DEFAULT: 'hsl(var(--card))',
                  foreground: 'hsl(var(--card-foreground))',
              },
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              primary: {
                  DEFAULT: 'hsl(var(--primary))',
                  foreground: 'hsl(var(--primary-foreground))',
              },
              secondary: {
                  DEFAULT: 'hsl(var(--secondary))',
                  foreground: 'hsl(var(--secondary-foreground))',
              },
              destructive: {
                  DEFAULT: 'hsl(var(--destructive))',
                  foreground: 'hsl(var(--destructive-foreground))',
              },
              muted: {
                  DEFAULT: 'hsl(var(--muted))',
                  foreground: 'hsl(var(--muted-foreground))',
              },
              accent: {
                  DEFAULT: 'hsl(var(--accent))',
                  foreground: 'hsl(var(--accent-foreground))',
              },
              popover: {
                  DEFAULT: 'hsl(var(--popover))',
                  foreground: 'hsl(var(--popover-foreground))',
              },
          },
          margin: {
              38: '9.5rem',
          },
          borderRadius: {
              sm: 'calc(var(--radius) - 4px)',
              md: 'calc(var(--radius) - 2px)',
              lg: 'var(--radius)',
              xl: 'calc(var(--radius) + 2px)',
              '2xl': 'calc(var(--radius) + 4px)',
              '3xl': 'calc(var(--radius) + 6px)',
              '4xl': '50px',
          },
          screens: {
              xs: '425px',
              '2xl': '1400px',
          },
      },
  },
};
