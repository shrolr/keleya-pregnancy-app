const palette = {
  WHITE: '#ffffff',
  TRANSPARENT: 'transparent',
  PALE_TEAL: '#69c0ba',
  LIGHT_GRAY: '#eeeeef',
  LIGHT_TEAL: '#9adcd7',
  GREYISH_BROWN: '#4a4a4a',
  WARM_GREY: '#9b9b9b',
  BUBBLE_GUM: '#e97db5',
  DANGER: '#e74c3c',
};

export const AppTheme = {
  colors: palette,
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 18,
      letterSpacing: 0.5,
    },
    body: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      letterSpacing: 0.7,
    },
    info: {
      fontSize: 12,
    },
  },
  timeFormats: {
    localeTimeFormat: 'MMM DD, YYYY',
  },
};
