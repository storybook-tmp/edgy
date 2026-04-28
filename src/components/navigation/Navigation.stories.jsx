import preview from '../../../.storybook/preview';
import { expect, fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = preview.meta({
  component: Navigation,
  tags: ['ai-generated'],
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
});

export default meta;

export const LoggedOut = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /sign in/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /sign up/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /about/i })
    ).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /profile/i })
    ).toBeVisible();
  },
});
