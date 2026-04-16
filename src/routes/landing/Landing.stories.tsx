import type { Meta, StoryObj } from '@storybook/react-vite';

import Landing from './Landing';

const meta = {
  component: Landing,
  args: {
    loggedIn: false,
  },
  parameters: {
    initialRoute: '/',
  },
  render: (args) => <Landing {...args} />,
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
