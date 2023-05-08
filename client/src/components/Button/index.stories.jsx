import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../themes/themes';
import ButtonComponent from './index';

export default {
  title: 'Atom/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  size: 'large',
  text: 'Primario',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  size: 'medium',
  text: 'Secundario',
};

export const Utils = Template.bind({});
Utils.args = {
  variant: 'text',
  size: 'small',
  text: 'Utils',
};
