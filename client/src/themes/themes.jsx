import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    typography: {
      fontFamily: 'Khand, sans-serif',
    },
    primary: {
      main: '#030640',
      light: 'rgb(53, 55, 102)',
      dark: 'rgb(2, 4, 44)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1445A6',
      light: 'rgb(67, 106, 183)',
      dark: 'rgb(14, 48, 116)',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#BF9A56',
    //   light: '#D9A362',
    //   dark: '#8C7446',
    //   contrastText: '#fff',
    // },
    third: {
      main: '#5f89a6',
      light: 'rgb(127, 160, 183)',
      dark: 'rgb(66, 95, 116)',
      contrastText: '#fff',
    },
    nav: {
      main: '#C8D3EA',
      light: '#92A9D5',
      dark: '#476EB9',
      contrastText: '#fff',
    },
    background: {
      main: '#ffff',
      default: '#ffff',
    },
    section: {
      main: '#F5F5F5',
      default: '#F5F5F5',
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
      light: 'rgb(61, 207, 224)',
      dark: 'rgb(9, 137, 151)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    third: {
      main: '#071427',
      light: 'rgb(56, 67, 82)',
      dark: 'rgb(4, 14, 27)',
      contrastText: '#fff',
    },
    nav: {
      main: '#00070D',
      light: 'rgb(56, 67, 82)',
      dark: 'rgb(4, 14, 27)',
      // contrastText: '#fff',
    },
    aux: {
      main: '#ffff',
      primary: '#9C9FA3',
      secondary: '#3D4349',
      disabled: '#323940',
    },
    background: {
      paper: '#00070D',
      default: '#07121a',
      gradient: 'transparent',
    },
    section: {
      main: '#00070D',
      default: '#00070D',
    },
    text: {
      primary: '#ffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.1)',
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
