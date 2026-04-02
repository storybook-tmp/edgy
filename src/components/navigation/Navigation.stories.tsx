import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Navigation from './Navigation';

const meta = {
  title: 'AI Generated/Simple/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
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
