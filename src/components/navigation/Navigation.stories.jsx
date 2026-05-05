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

export const WithNavLinks = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /contact/i })).toBeVisible();
  },
};
