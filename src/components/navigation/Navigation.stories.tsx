import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  loggedInNavigationProps,
  loggedOutNavigationProps,
} from '../../../.storybook/app-runtime';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: loggedOutNavigationProps,
  parameters: {
    initialRoute: '/',
  },
  render: (args) => <Navigation {...args} />,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: loggedInNavigationProps,
};

export const OnProfileRoute: Story = {
  args: loggedInNavigationProps,
  parameters: {
    initialRoute: '/profile',
  },
};
