import type { Meta, StoryObj } from '@storybook/react';

import Navigation from './Navigation';

const noop = () => undefined;

const meta = {
  title: 'AI Generated/Medium/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
  },
  parameters: {
    router: {
      initialEntries: ['/blog'],
    },
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
  parameters: {
    router: {
      initialEntries: ['/profile'],
    },
  },
};
