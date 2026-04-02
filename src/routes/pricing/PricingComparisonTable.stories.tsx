import type { Meta, StoryObj } from '@storybook/react-vite';

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

export const TrialSignup: Story = {};

export const ReturningCustomer: Story = {
  args: {
    loggedIn: true,
  },
};
