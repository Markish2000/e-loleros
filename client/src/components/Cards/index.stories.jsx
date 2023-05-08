import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes/themes';
import Cards from './index';

export default {
  title: 'Cards',
  component: Cards,
  tags: ['autodocs'],
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
