/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // For App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include component files
    "./src/components/**/**/*.{js,ts,jsx,tsx}", // Include component files
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 1px 2px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontVariant: {
        'small-caps': 'small-caps',
      },
      colors: {
        'hill-primary' : '#4a5c1f', 
        'hill-secondary' : '#cc6633',
        'hill-bg' : '#fef9e4',
        'hill-highlight' : '#e78169'
      },
      fontFamily: {
        // merrieweather: ["Merriweather", 'serif'], 
        // karla: ['Karla', 'sans-serif']
        karla: ['var(--font-karla)'],
        merrieweather: ['var(--font-merriweather)'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.small-caps': {
          fontVariant: 'small-caps',
        },
      });
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}

