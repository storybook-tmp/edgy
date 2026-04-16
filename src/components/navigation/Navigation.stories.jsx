import { expect, fn, within } from 'storybook/test';

import Navigation from './Navigation';

export default {
  title: 'AI Generated/Medium/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('link', { name: /sign in/i })
    ).toHaveAttribute('href', '/sign-in');
    await expect(
      canvas.getByRole('link', { name: /sign up/i })
    ).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('link', { name: /profile/i })
    ).toHaveAttribute('href', '/profile');
  },
};
