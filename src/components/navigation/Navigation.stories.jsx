import { expect, fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  tags: ['ai-generated'],
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export default meta;

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /sign in/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /sign up/i })).toBeVisible();
    await expect(canvas.getByAltText('Edgy')).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /sign out/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toBeVisible();
  },
};

export const CssCheck = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    const signInLink = canvas.getByRole('link', { name: /sign in/i });
    await expect(getComputedStyle(signInLink).borderRadius).toBe('6px');
  },
};
