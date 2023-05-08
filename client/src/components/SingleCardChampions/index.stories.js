import SingleChampions from './index';

export default {
  title: 'Tarjetas/Campeones',
  component: SingleChampions,
  tags: ['autodocs'],
  args: {
    name: 'Marcos',
    image:
      'https://c8.alamy.com/compes/dcea0d/oro-antiguo-marco-de-imagen-contra-el-fondo-blanco-dcea0d.jpg',
    role: 'Luchador',
    difficulty: 'Baja',
    maxWidth: '320px',
  },
  argTypes: {
    difficulty: { control: 'select', options: ['Alta', 'Media', 'Baja'] },
    role: {
      control: 'select',
      options: ['Tirador', 'Luchador', 'Tanque', 'Mago'],
    },
  },
};

const Template = (args) => <SingleChampions {...args} />;

export const Light = { args: { name: 'Hola' } };
export const Flor = { args: { name: 'Flor', role: 'Tirador' } };
