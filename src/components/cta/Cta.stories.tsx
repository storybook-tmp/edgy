import type { Meta, StoryObj } from '@storybook/react';

import Cta from './Cta';

const meta = {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Cta>;

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
      initialEntries: ['/pricing'],
    },
  },
};
