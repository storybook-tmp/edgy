import type { Meta, StoryObj } from '@storybook/react-vite';

import Pricing from './Pricing';

const meta = {
  title: 'AI Generated/Medium/Pricing',
  component: Pricing,
  args: {
    loggedIn: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
