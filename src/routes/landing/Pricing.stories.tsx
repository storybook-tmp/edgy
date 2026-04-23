import type { Meta, StoryObj } from '@storybook/react';

import Pricing from './Pricing';

const meta = {
  title: 'AI Generated/Simple/LandingPricing',
  component: Pricing,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Pricing>;

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
