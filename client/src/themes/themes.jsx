import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    typography: {
      fontFamily: 'Khand, sans-serif',
    },
    primary: {
      main: '#BF9A56',
      light: '#D9A362',
      dark: '#8C7446',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0DC4D9',
      light: '#1E93C4',
      dark: '#006D9B',
      contrastText: '#fff',
    },
    background: {
      paper: '#07121a',
      default: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    divider: {
      divider: 'rgba(0, 0, 0, 0.12)',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    typography: {
      fontFamily: 'Khand, sans-serif',
    },
    primary: {
      main: '#BF9A56',
      light: '#D9A362',
      dark: '#8C7446',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0DC4D9',
      light: '#1E93C4',
      dark: '#006D9B',
      contrastText: '#fff',
    },
    background: {
      paper: '#00070D',
      default: '#07121a',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    divider: {
      divider: 'rgba(255, 255, 255, 0.12)',
    },
  },
});
