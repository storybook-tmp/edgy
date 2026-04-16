import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: () => undefined,
    setTriggeredLogout: () => undefined,
  },
  parameters: {
    initialEntries: ['/'],
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /edgy/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /sign in/i })
    ).toHaveAttribute('href', '/sign-in');
    await expect(
      canvas.getByRole('link', { name: /sign up/i })
    ).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /profile/i })
    ).toHaveAttribute('href', '/profile');
  },
};

export const MobileLinks: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getAllByRole('link', { name: /about/i }).at(0)
    ).toBeVisible();
    await expect(canvas.getByRole('link', { name: /contact/i })).toBeVisible();
  },
};
