import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  title: 'AI Generated/Medium/Navigation',
  component: Navigation,
  args: {
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
