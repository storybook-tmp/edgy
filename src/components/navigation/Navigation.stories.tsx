import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  tags: ['ai-generated'],
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '/sign-in');
  },
};

export const LoggedIn: Story = {
  args: { loggedIn: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /sign out/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toHaveAttribute('href', '/profile');
  },
};
