import type { Meta, StoryObj } from '@storybook/react-vite';

import Cta from './Cta';

const meta = {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
  args: {
    loggedIn: false,
  },
} satisfies Meta<typeof Cta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
