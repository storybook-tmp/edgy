import { expect, fn } from 'storybook/test';

import { Header } from './Header';

export default {
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/welcome/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
  },
};

export const LoggedOut = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /sign up/i })).toBeVisible();
  },
};
