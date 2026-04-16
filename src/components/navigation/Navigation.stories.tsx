import type { Meta, StoryObj } from '@storybook/react-vite';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: () => undefined,
    setTriggeredLogout: () => undefined,
  },
  parameters: {
    storybookApp: {
      route: '/',
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
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
