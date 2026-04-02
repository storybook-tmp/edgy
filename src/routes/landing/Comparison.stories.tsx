import type { Meta, StoryObj } from '@storybook/react-vite';
import Comparison from './Comparison';

const meta = {
  title: 'AI Generated/Complex/Comparison',
  component: Comparison,
} satisfies Meta<typeof Comparison>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
