import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Navigation from './Navigation';

const meta = preview.meta({
  component: Navigation,
  tags: ['ai-generated'],
});

export default meta;

export const LoggedOut = meta.story({
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /sign in/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /sign up/i })).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /sign out/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toBeVisible();
  },
});

export const CssCheck = meta.story({
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation');
    // font-medium on links sets font-weight to 500 — proves Tailwind CSS loaded
    const link = canvas.getByRole('link', { name: /about/i });
    await expect(getComputedStyle(link).fontWeight).toBe('500');
  },
});
