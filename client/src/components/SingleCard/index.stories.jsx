import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../themes/themes';
import SingleCard from './index';

export default {
  title: 'Card',
  component: SingleCard,
  tags: ['autodocs'],
  args: {
    id: 1,
    name: 'Example Card',
    price: '10',
    mainImage:
      'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6da92e6eabee67d5/5f4ef51e5acde4265bb2e088/hnashe_crop_banner.jpg',
    maxWidth: '320px',
  },
};

const Template = (args) => (
  <ThemeProvider theme={lightTheme}>
    <SingleCard {...args} />
  </ThemeProvider>
);

const TemplateDark = (args) => (
  <ThemeProvider theme={darkTheme}>
    <SingleCard {...args} />
  </ThemeProvider>
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = TemplateDark.bind({});
Dark.args = {};
