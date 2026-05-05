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
};

export default meta;

export const LoggedOut = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /sign in/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /sign up/i })).toBeVisible();
  },
};

export const LoggedIn = {
  args: { loggedIn: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /sign out/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toBeVisible();
  },
};

export const CssCheck = {
  play: async ({ canvas }) => {
    const header = canvas.getByRole('banner');
    // bg-gray-900 in Tailwind v4 uses oklch color space
    await expect(getComputedStyle(header).backgroundColor).toBe('oklch(0.21 0.034 264.665)');
  },
};
