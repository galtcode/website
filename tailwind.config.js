const theme = {
  primary: '#0284c7',
  secondary: '#6b7280',
  accent: '#1FB2A6',
  'primary-content': '#ffffff',
  'secondary-content': '#ffffff',
  'accent-content': '#ffffff',

  info: '#3ABFF8',
  success: '#36D399',
  warning: '#FBBD23',
  error: '#F87272',
}

module.exports = {
  daisyui: {
    darkMode: 'dark',
    themes: [
      {
        light: {
          'color-scheme': 'light',
          ...theme,
          neutral: '#3d4451',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#F2F2F2',
          'base-300': '#E5E6E6',
          'base-content': '#1f2937',
        },
        dark: {
          'color-scheme': 'dark',
          ...theme,
          neutral: '#191D24',
          'neutral-focus': '#111318',
          'neutral-content': '#A6ADBB',
          'base-100': '#2A303C',
          'base-200': '#242933',
          'base-300': '#20252E',
          'base-content': '#A6ADBB',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
