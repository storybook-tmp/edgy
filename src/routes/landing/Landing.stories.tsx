import type { Meta, StoryObj } from '@storybook/react-vite';
import Landing from './Landing';

const meta = {
  component: Landing,
  args: {
    loggedIn: false,
  },
  parameters: {
    storybookApp: {
      route: '/',
    },
  },
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GuestLanding: Story = {};

export const MemberLanding: Story = {
  args: {
    loggedIn: true,
  },
  parameters: {
    storybookApp: {
      route: '/',
      session: 'member',
    },
  },
};
