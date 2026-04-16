import type { Meta, StoryObj } from '@storybook/react-vite';
import Cta from './Cta';

const meta = {
  component: Cta,
  args: {
    loggedIn: false,
  },
  parameters: {
    storybookApp: {
      route: '/',
    },
  },
} satisfies Meta<typeof Cta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GuestPrompt: Story = {};

export const MemberPrompt: Story = {
  args: {
    loggedIn: true,
  },
  parameters: {
    storybookApp: {
      route: '/profile',
      session: 'member',
    },
  },
};
