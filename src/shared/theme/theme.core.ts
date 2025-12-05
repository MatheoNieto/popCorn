import {createTheme} from '@shopify/restyle';
import {textVariants, cardVariants, inputVariants} from './variants';
import {palette} from './constants';

const theme = createTheme({
  colors: {
    primary: palette.primary[100],
    primary200: palette.primary[200],
    primary300: palette.primary[300],
    primary400: palette.primary[400],
    primary500: palette.primary[500],
    primary600: palette.primary[600],
    primary700: palette.primary[700],
    primary800: palette.primary[800],
    primary900: palette.primary[900],
    iconActiveBottom: palette.iconActiveBottom,
    borderNumberTopRated: palette.iconActiveBottom,
    black: palette.black,
    white: palette.white,
    error: palette.error[500],
    placeholderTextColor: palette.black,
    selectionColor: palette.primary[100],
    input: palette.primary[600],
    inputBorder: 'transparent',
    inputBorderFocused: palette.primary[100],
  },
  spacing: {
    unset: 0,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
    '5xl': 128,
    '6xl': 256,
  },
  borderRadius: {
    unset: 0,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
  },
  breakpoints: {
    phone: 0,
  },
  zIndices: {},
  textVariants: textVariants,
  cardVariants: cardVariants,
  inputVariants: inputVariants,
});

export type ThemeCore = typeof theme;

export default theme;
