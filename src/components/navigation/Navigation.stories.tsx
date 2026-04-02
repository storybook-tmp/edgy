import type { Meta, StoryObj } from '@storybook/react-vite';
import Navigation from './Navigation';
import { fn } from 'storybook/test';

const meta = {
  title: 'AI Generated/Medium/Navigation',
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
