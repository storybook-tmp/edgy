import type { Meta, StoryObj } from '@storybook/react-vite';
import Navigation from './Navigation';

const meta = {
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
};
