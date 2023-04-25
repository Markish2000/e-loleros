import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes/themes';
import Cards from '.';

export default {
  title: 'Cards',
  component: Cards,
  tags: ['autodocs'],
  description:
    'Componente que muestra una serie de tarjetas con información de productos',
};

const Template = (args) => (
  <ThemeProvider theme={lightTheme}>
    <Cards {...args} />
  </ThemeProvider>
);

const TemplateDark = (args) => (
  <ThemeProvider theme={darkTheme}>
    <Cards {...args} />
  </ThemeProvider>
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};