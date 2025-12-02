import { MantineThemeOverride } from '@mantine/core';

export const myTheme: MantineThemeOverride = {
  fontFamily: '"Merriweather", serif',
  headings: {
    fontFamily: '"Merriweather", serif',
    sizes: {
      h1: { fontSize: '4.5rem', lineHeight: '1.1' },
      h2: { fontSize: '3rem', lineHeight: '1.2' },
      h3: { fontSize: '2.25rem', lineHeight: '1.25' },
      h4: { fontSize: '1.875rem', lineHeight: '1.3' },
      h5: { fontSize: '1.5rem', lineHeight: '1.3' },
      h6: { fontSize: '1.25rem', lineHeight: '1.3' },
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem', 
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4.5rem',
  },
};
