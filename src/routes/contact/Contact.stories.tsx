import type { Meta, StoryObj } from '@storybook/react-vite';
import Contact from './Contact';

const meta = {
  component: Contact,
  parameters: {
    storybookApp: {
      route: '/contact',
    },
  },
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
