import { expect } from 'storybook/test';
import Navigation from './Navigation';

export default {
  component: Navigation,
  tags: ['ai-generated'],
};

export const LoggedOut = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /sign in/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /sign up/i })).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /sign out/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toBeVisible();
  },
};

export const CssCheck = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    const header = canvas.getByRole('banner');
    // Navigation uses bg-gray-900 (Tailwind v4 oklch color) — fails if Tailwind CSS did not load
    await expect(getComputedStyle(header).backgroundColor).toBe('oklch(0.21 0.034 264.665)');
  },
};
