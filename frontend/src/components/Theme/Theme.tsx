import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const palette = {
  primary: { main: '#0A60A6', light: '#43474E', dark: '#001F27' },
  secondary: { main: '#ACECFF', light: '#f0f2fb', dark: '#1B1B1B' },
  black: { main: '#1F1F1F', light: '#73777F', dark: '#C4C4C4' },
  blue: { main: '#005CA3', light: '#AAE3F2' },
  specificBlue: { main: '#93CBDD', light: '#96CBD9' },
  specificGrey: { main: '#605D66', light: '#1B1B1B61' },
  white: { main: '#FDFCFF', light: '#F5F7FC', dark: '#DFE3EC' },
  error: { main: '#BA1B1B' },
  success: { main: '#006D2E' },
  background: {
    default: '#F1F0F4',
  },
};

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    specificBlue: Palette['primary'];
    specificGrey: Palette['primary'];
    blue: Palette['primary'];
    white: Palette['primary'];
  }
  interface PaletteOptions {
    black: PaletteOptions['primary'];
    specificBlue: PaletteOptions['primary'];
    specificGrey: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette,
  components: {
    MuiButton: {},
  },
});

theme.typography.h1 = {
  fontSize: 36,
  lineHeight: '44px',
  fontWeight: 400,
};

theme.typography.h2 = {
  fontSize: 32,
  lineHeight: '40px',
  fontWeight: 400,
};

theme.typography.h3 = {
  fontSize: 28,
  lineHeight: '36px',
  fontWeight: 400,
};

theme.typography.h4 = {
  fontSize: 24,
  lineHeight: '32px',
  fontWeight: 400,
};

theme.typography.h5 = {
  fontSize: 22,
  lineHeight: '28px',
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontWeight: 400,
  },
};

theme.typography.h6 = {
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 600,
  letterSpacing: 0.15,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    fontWeight: 400,
  },
};

theme.typography.subtitle1 = theme.typography.button = {
  fontSize: 14,
  lineHeight: '20px',
  fontWeight: 600,
  letterSpacing: 0.1,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 600,
  },
};

theme.typography.subtitle2 = {
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 600,
  letterSpacing: 0.5,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: 0.1,
  },
};

theme.typography.body1 = {
  fontSize: 16,
  lineHeight: '24px',
  letterSpacing: 0.15,
  [theme.breakpoints.down('md')]: {
    letterSpacing: 0.5,
  },
};

theme.typography.body2 = {
  fontSize: 14,
  lineHeight: '20px',
  letterSpacing: 0.25,
};

theme.typography.caption = {
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: 0.4,
};

theme.typography.overline = {
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: 1.5,
  [theme.breakpoints.down('md')]: {
    letterSpacing: 0.5,
  },
};

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export const MockTheme = ({ children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
