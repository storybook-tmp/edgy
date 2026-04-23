import type { Meta, StoryObj } from '@storybook/react';

import Navigation from './Navigation';

const noop = () => {};

const meta = {
  title: 'AI Generated/Medium/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    loggedIn: false,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
