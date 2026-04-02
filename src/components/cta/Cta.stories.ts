import type { Meta, StoryObj } from '@storybook/react';

import Cta from './Cta';

const meta = {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    loggedIn: false,
  },
} satisfies Meta<typeof Cta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
