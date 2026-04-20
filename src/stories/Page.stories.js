import { expect } from 'storybook/test';

import { Page } from './Page';

export default {
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /pages in storybook/i })
    ).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible();
  },
};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
