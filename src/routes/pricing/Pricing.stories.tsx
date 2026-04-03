import type { Meta, StoryObj } from '@storybook/react-vite';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
  args: {
    loggedIn: false,
  },
  parameters: {
    storybookApp: {
      route: '/pricing',
    },
  },
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GuestPricing: Story = {};

export const MemberPricing: Story = {
  args: {
    loggedIn: true,
  },
  parameters: {
    storybookApp: {
      route: '/pricing',
      session: 'member',
    },
  },
};
