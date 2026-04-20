import { expect, fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
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
    const signInLink = canvas.getByRole('link', { name: /sign in/i });
    const signUpLink = canvas.getByRole('link', { name: /sign up/i });

    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(signInLink).toHaveAttribute('href', '/sign-in');
    await expect(signUpLink).toHaveAttribute('href', '/sign-up');
    await expect(getComputedStyle(signInLink).backgroundColor).toBe(
      'oklch(0.585 0.233 277.117)'
    );
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toHaveAttribute(
      'href',
      '/profile'
    );
  },
};
