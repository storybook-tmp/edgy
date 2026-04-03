import type { Meta, StoryObj } from '@storybook/react-vite';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  parameters: {
    storybookApp: {
      route: '/blog',
    },
  },
} satisfies Meta<typeof Newsletter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
