import { expect } from 'storybook/test';
import Navigation from './Navigation';

export default {
  component: Navigation,
};

export const LoggedOut = {
  render: () => (
    <Navigation
      loggedIn={false}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /sign in/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /sign up/i })).toBeVisible();
  },
};

export const LoggedIn = {
  render: () => (
    <Navigation
      loggedIn={true}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /sign out/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toBeVisible();
  },
};

export const NavLinks = {
  render: () => (
    <Navigation
      loggedIn={false}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /contact/i })).toBeVisible();
  },
};
