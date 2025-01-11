export const theme = {
  colors: {
    primary: {
      purple: '#9945FF',
      green: '#14F195',
    },
    secondary: {
      dark: '#0C0C0D',
      gray: '#444654',
      white: '#FFFFFF',
    },
    accent: {
      pink: '#F72585',
      blue: '#3A86FF',
    },
  },
  gradients: {
    primary: 'linear-gradient(135deg, #9945FF, #14F195)',
    purple: 'linear-gradient(135deg, #9945FF 0%, #6B21A8 100%)',
  },
  typography: {
    heading: {
      1: 'text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight font-sans',
      2: 'text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight font-sans',
      3: 'text-xl md:text-2xl font-medium tracking-normal font-sans',
    },
    body: {
      large: 'text-lg md:text-xl font-light leading-relaxed font-mono',
      base: 'text-base leading-relaxed font-normal font-sans',
      small: 'text-sm leading-relaxed font-normal font-sans',
    },
    button: 'font-medium text-base uppercase tracking-wide font-mono',
    code: 'font-mono',
  },
  spacing: {
    section: 'py-32 md:py-40',
    sectionGap: 'mt-20'
  }
}; 