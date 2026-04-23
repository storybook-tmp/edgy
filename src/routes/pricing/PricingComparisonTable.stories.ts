import type { Meta, StoryObj } from '@storybook/react';

import PricingComparisonTable from './PricingComparisonTable';

const meta = {
  title: 'AI Generated/Medium/PricingComparisonTable',
  component: PricingComparisonTable,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    loggedIn: false,
  },
} satisfies Meta<typeof PricingComparisonTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
