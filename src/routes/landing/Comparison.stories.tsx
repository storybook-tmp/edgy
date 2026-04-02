import type { Meta, StoryObj } from '@storybook/react';

import Comparison from './Comparison';

const meta = {
  title: 'AI Generated/Simple/Comparison',
  component: Comparison,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Comparison>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {
  args: {
    loggedIn: false,
  },
};

export const SignedIn: Story = {
  args: {
    loggedIn: true,
  },
  parameters: {
    router: {
      initialEntries: ['/profile'],
    },
  },
};
