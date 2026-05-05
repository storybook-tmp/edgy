import { expect } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  tags: ['ai-generated'],
};

export default meta;

export const LoggedOut = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation')).toBeVisible();
    await expect(canvas.getByAltText('Edgy')).toBeVisible();
    await expect(canvas.getByText('Sign in')).toBeVisible();
    await expect(canvas.getByText('Sign up')).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation')).toBeVisible();
    await expect(canvas.getByText('Sign out')).toBeVisible();
    await expect(canvas.getByText('Profile')).toBeVisible();
  },
};

export const CssCheck = {
  args: {
    loggedIn: false,
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  play: async ({ canvas }) => {
    const header = canvas.getByRole('navigation').closest('header');
    await expect(getComputedStyle(header).backgroundColor).toBe('oklch(0.21 0.034 264.665)');
  },
};
