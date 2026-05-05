import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
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
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /sign in/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /sign up/i })
    ).toBeVisible();
  },
};

export const LoggedIn: Story = {
  render: () => (
    <Navigation
      loggedIn={true}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /profile/i })
    ).toBeVisible();
  },
};
