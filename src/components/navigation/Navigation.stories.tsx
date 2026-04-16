import type { Meta, StoryObj } from '@storybook/react-vite';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  render: () => (
    <Navigation
      loggedIn={false}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
};

export const LoggedIn: Story = {
  render: () => (
    <Navigation
      loggedIn={true}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
};
